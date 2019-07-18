const {execSync} = require('child_process');
const path = require("path");
const process = require("process");
const fs = require("fs");
qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  statics: {
    CONTAINER_PATH: "packages",
    TARGET_TYPE: "build"
  },

  members: {
    __pkgDataGenerated: false,

    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("writtenApplication", this.__onWrittenApplication, this);
    },

    /**
     * Generate the data needed by the packagebrowser application.
     * Triggered by the compiler's "writtenApplication" event.
     * @param {qx.event.type.Event} e
     * @return {Promise<void>}
     * @private
     */
    async __onWrittenApplication(e) {
      if (this.__pkgDataGenerated) {
        return;
      }
      let application = e.getData();
      let className = application.getClassName();
      if (className !== "qxl.packagebrowser.Application") {
        return;
      }
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      const app = application.getName();
      const datafile_path = path.join(outputDir, app, "package-data.json");
      if (fs.existsSync(datafile_path)) {
        console.log(">>> Package data exists.");
        return;
      }
      const container_path = this.self(arguments).CONTAINER_PATH;
      const srcDir = path.relative(process.cwd(), path.join(container_path,"compiled","source"));
      const tgtDir = path.relative(process.cwd(), path.join(outputDir, app, "demos"));
      this.__addCmd(`qx pkg update`, "Updating package data...");
      this.__addCmd(`qx pkg list --json --all > ${datafile_path}`, "Generating local metadata file...");
      if (fs.existsSync(tgtDir)) {
        this.__executeCommands();
        return;
      }
      fs.mkdirSync(tgtDir);
      console.log(`>>> Starting compilation of all compatible packages. This might take a while.`);
      let packages =
        execSync(`qx pkg list --uris-only`)
          .toString()
          .split("\n")
          .map(pkg => pkg.trim())
          .filter(pkg => Boolean(pkg))
          .sort();
      this.__deleteFolderRecursive(container_path);
      this.__addCmd(`qx create ${container_path} -I`, `Creating container application...`);
      for (let pkg of packages) {
        this.__addCmd(`cd ${container_path} && qx pkg install ${pkg}`, `Installing ${pkg}...`);
      }
      this.__executeCommands();
      const packages_dir = path.join(container_path, "qx_packages");
      const lockfile_data = await this.__loadJson(path.join(container_path, "qx-lock.json"));
      const packages_data = await this.__loadJson(datafile_path);
      console.log(`\n>>> Preparing compilation. Please check the following messages for errors and warnings.`);
      for (let [index, pkg_data] of packages_data.entries()) {
        if (pkg_data.uri === "qooxdoo/qxl.packagebrowser") {
          // do not compile the packagebrowser unless you want infinite recursion!
          continue;
        }
        let install_data = lockfile_data.libraries.find(d => d.uri === pkg_data.uri);
        if (! install_data) {
          console.log(`${pkg_data.uri} is not installed (maybe internal or incompatible).`);
          continue;
        }
        let pkg_dir = path.join(container_path, install_data.path);
        let manifest;
        let compileData;
        try {
          manifest = await this.__loadJson(path.join(pkg_dir, "Manifest.json"));
          compileData = await this.__loadJson(path.join(pkg_dir, "compile.json"));
        } catch (e) {
          console.warn(e.message);
          continue;
        }
        // compile the application
        const target_type = this.self(arguments).TARGET_TYPE;
        this.__addCmd(
          `cd ${pkg_dir} && qx pkg migrate && qx compile --target=${target_type} --warnAsError=false --force`,
          `Compiling ${manifest.info.name} v${manifest.info.version}...`,
          compilation_log => {
            packages_data[index].data = {
              problems: Boolean(compilation_log.match(/(error|warn)/i)),
              compilation_log,
              applications: compileData.applications
            };
            let outputPath = path.join(pkg_dir, compileData.targets.find(target => target.type === target_type).outputPath);
            let appTgtPath = path.join(tgtDir, pkg_data.uri);
            this.__mkdirp(appTgtPath);
            this.__deleteFolderRecursive(path.join(outputPath, "transpiled"));
            console.log(`>>> Moving generated applications from ${outputPath} to ${appTgtPath}`);
            fs.renameSync(outputPath, appTgtPath);
          },
          error => {
            console.error(error.message);
              packages_data[index].data = {
                problems: true,
                compilation_log: error.message
            };
          }
        );
      }
      this.__executeCommands();
      await qx.tool.utils.Json.saveJsonAsync(datafile_path, packages_data);
      this.__pkgDataGenerated = true;
      console.log("\n>>> Done.");
    },

    /**
     * Loads json data from a file
     * @param {String} file
     * @return {Promise<*>}
     */
    __loadJson(file) {
      if (!fs.existsSync(file)){
        throw new Error(`Cannot load data from ${file}. File does not exist.`);
      }
      return qx.tool.utils.Json.loadJsonAsync(file);
    },

    /**
     * Adds a command to the command queue
     * @param {String} cmd The CLI command
     * @param {String|undefined} info An explanatory text for the log, defaults to the CLI command
     * @param {Function} onSuccess
     *    A function that is executed when the command has succesfully terminated.
     *    Receives the output of the command
     * @param {Function} onFail
     *    A function that is executed when the command has finished with a non-zero
     *    exit code or an error has been thrown in the onSuccess function. Receives
     *    an error object.
     * @private
     */
    __addCmd(cmd, info, onSuccess, onFail) {
      this.__cmds = this.__cmds || [];
      this.__cmds.push([cmd, info, onSuccess, onFail]);
    },

    /**
     * Executes the commands in the queue.
     * @private
     */
    __executeCommands() {
      for (let [cmd, info, onSuccess, onFail] of this.__cmds){
        console.log( ">>> " + (info || `Executing '${cmd}'`));
        let result;
        try {
          result = execSync(cmd).toString().trim();
          if (result) {
            console.log(result);
          }
          if (typeof onSuccess == "function") {
            onSuccess(result);
          }
        } catch (e) {
          if (typeof onFail == "function") {
            onFail(e);
          } else {
            throw e;
          }
        }
      }
      // clear command queue
      this.__cmds = [];
    },

    /**
     * Equivalent for `mkdir -p` on bash
     * @param {String} targetDir
     * @private
     */
    __mkdirp(targetDir){
      const initDir = path.isAbsolute(targetDir) ? '/': '';
      targetDir.split("/").reduce((parentDir, childDir) => {
        const curDir = path.resolve(parentDir, childDir);
        if (!fs.existsSync(curDir)) {
          fs.mkdirSync(curDir);
        }
        return curDir;
      }, initDir);
    },

    /**
     * Equivalent for `rm -rf` on bash
     * @param {String} file_path
     * @private
     */
    __deleteFolderRecursive(file_path) {
      if (fs.existsSync(file_path)) {
        fs.readdirSync(file_path).forEach((file, index) => {
          let curPath = path.join(file_path, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            this.__deleteFolderRecursive(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(file_path);
      }
    }
  }
});

module.exports = {
  LibraryApi: qxl.packagebrowser.compile.LibraryApi
};

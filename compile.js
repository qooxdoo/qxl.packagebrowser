const {execSync} = require("child_process");
const path = require("path");
const process = require("process");
const fs = require("fs");
qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  statics: {
    CONTAINER_PATH: "packages",
    TARGET_TYPE: "build",
    QX_LIST_ADDITIONAL_PARAMS: "--all --prereleases"
  },

  members: {
    __pkgDataGenerated: false,

    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("made", this.__onMade, this);
    },

    /**
     * Generate the data needed by the packagebrowser application.
     * Triggered by the compiler's "writtenApplication" event.
     * @param {qx.event.type.Event} e
     * @return {Promise<void>}
     * @private
     */
    async __onMade(e) {
      if (this.__pkgDataGenerated) {
        return;
      }

      const maker = this.getCompilerApi().getCommand().getMaker();
      const app = "qxl.packagebrowser";
      const outputDir = maker.getTarget().getOutputDir();
      const datafilePath = path.join(outputDir, app, "package-data.json");
      if (fs.existsSync(datafilePath)) {
        console.log(">>> Package data exists.");
        return;
      }

      const header = "   Creating metadata for package browser...   ";
      console.log("=".repeat(header.length));
      console.log(header);
      console.log("=".repeat(header.length));

      const targetType = this.self(arguments).TARGET_TYPE;
      const containerPath = this.self(arguments).CONTAINER_PATH;
      const additionalParams = this.self(arguments).QX_LIST_ADDITIONAL_PARAMS;
      const targetDir = path.relative(process.cwd(), path.join(outputDir, app, "demos"));

      // update and generate list data
      this.__addCmd(`qx pkg update`, "Updating package data...");
      this.__addCmd(
        `qx pkg list --json ${additionalParams} > ${datafilePath}`,
        "Generating local metadata file..."
      );
      if (fs.existsSync(targetDir)) {
        this.__deleteFolderRecursiveSync(targetDir);
      }
      fs.mkdirSync(targetDir);
      console.log(`>>> Starting compilation of all compatible packages. This might take a while.`);
      let stdout = execSync(`qx pkg list --uris-only`);
      let packages =
        stdout
          .toString()
          .split("\n")
          .map(pkg => pkg.trim())
          .filter(pkg => Boolean(pkg))
          .sort();
      this.__deleteFolderRecursiveSync(containerPath);
      this.__addCmd(
        `qx create ${containerPath} -I`,
        `Creating container application...`
      );
      for (let pkg of packages) {
        this.__addCmd(`cd ${containerPath} && qx pkg install ${pkg}`, `Installing ${pkg}...`);
      }
      await this.__executeCommands();
      const packages_dir = path.join(containerPath, "qx_packages");
      const lockfile_data = await this.__loadJson(path.join(containerPath, "qx-lock.json"));
      const packages_data = await this.__loadJson(datafilePath);
      console.log(`\n>>> Preparing compilation. Please check the following messages for errors and warnings.`);
      for (let [index, pkg_data] of packages_data.entries()) {
        if (pkg_data.uri === "qooxdoo/qxl.packagebrowser") {
          // do not compile the packagebrowser unless you want infinite recursion!
          continue;
        }
        let install_data = lockfile_data.libraries.find(d => d.uri === pkg_data.uri);
        if (! install_data) {
          console.log(`${pkg_data.uri} is not installed (maybe internal or incompatible).`);
          delete packages_data[index];
          continue;
        }
        let pkg_dir = path.join(containerPath, install_data.path);
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
        this.__addCmd(
          `cd ${pkg_dir} && qx pkg migrate && qx compile --target=${targetType} --warnAsError=false --feedback=0 --force 2>&1`,
          `Compiling ${manifest.info.name} v${manifest.info.version}...`,
          (stdout, stderr) => {
            let compilation_log = stdout + "\n\n" +stderr;
            packages_data[index].data = {
              problems: Boolean(compilation_log.match(/(error|warn|missing|cannot find|unresolved|unexpected|deprecated)/i)),
              compilation_log
            };
            let target = compileData.targets.find(target => target.type === targetType) || compileData.targets[0];
            let outputPath = path.join(pkg_dir, target.outputPath);
            let appTgtPath = path.join(targetDir, pkg_data.uri);
            this.__mkdirp(appTgtPath);
            if (targetType === "build") {
              this.__deleteFolderRecursiveSync(path.join(outputPath, "transpiled"));
            }
            console.log(`>>> Moving generated applications from ${outputPath} to ${appTgtPath}`);
            fs.renameSync(outputPath, appTgtPath);
            // inform client that we have one or more application demos
            packages_data[index].data.applications = compileData.applications;
          },
          error => {
            console.error(error.message);
              packages_data[index].data = {
                problems: true,
                compilation_log: error.message + "\n\n" + error.stderr.toString() + "\n\n" + error.stdout.toString()
            };
          }
        );
      }
      await this.__executeCommands();
      await qx.tool.utils.Json.saveJsonAsync(datafilePath, packages_data.filter(pkg => Boolean(pkg)));
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
    async __executeCommands() {
      for (let [cmd, info, onSuccess, onFail] of this.__cmds){
        console.log( ">>> " + (info || `Executing '${cmd}'`));
        try {
          let stdout = execSync(cmd);
          stdout = stdout.toString().trim();
          if (stdout) {
            console.log(stdout);
          }
          if (typeof onSuccess == "function") {
            onSuccess(stdout,"");
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
    __deleteFolderRecursiveSync(file_path) {
      if (fs.existsSync(file_path)) {
        fs.readdirSync(file_path).forEach((file, index) => {
          let curPath = path.join(file_path, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            this.__deleteFolderRecursiveSync(curPath);
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

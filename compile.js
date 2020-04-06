const {execSync, spawnSync} = require("child_process");
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
      if (command instanceof qx.tool.cli.commands.Compile) {
         command.addListener("made", this.__onMade, this);
      }
    },

    /**
     * Generate the data needed by the packagebrowser application.
     * Triggered by the compiler's "made" event.
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
  
      const mkdirp = this.require('mkdirp');

      const header = "   Creating metadata for package browser. This will take a while.   ";
      console.log();
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
      console.log(`>>> Installing all compatible packages...`);
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
      console.log(`>>> The following packages will be installed:\n - ${packages.join("\n - ")}`);
      for (let pkg of packages) {
        this.__addCmd(`qx pkg install ${pkg}`, `Installing ${pkg}...`,  containerPath);
      }
      this.__executeCommands();
      const lockfile_data = await this.__loadJson(path.join(containerPath, "qx-lock.json"));
      const packages_data = await this.__loadJson(datafilePath);
      console.log(`\n>>> Preparing compilation. Please check the following messages for errors and warnings.`);
      for (let [index, pkg_data] of packages_data.entries()) {
        if (pkg_data.uri === "qooxdoo/qxl.packagebrowser") {
          // do not compile the packagebrowser unless you want infinite recursion!
          continue;
        }
        let install_data = lockfile_data.libraries.find(d => d.uri === pkg_data.uri);
        if (!install_data) {
          console.log(`>>> ${pkg_data.name} (${pkg_data.uri}) has not been installed, skipping...`);
          delete packages_data[index];
          continue;
        }
        let pkg_dir = path.join(containerPath, install_data.path);
        let manifest;
        let compileData;
        const compileDataPath = path.join(pkg_dir, "compile.json");
        try {
          const manifestInstance = new qx.tool.config.Manifest();
          manifestInstance.set({
            baseDir: pkg_dir,
            validate: false
          });
          await manifestInstance.load();
          manifest = manifestInstance.getData();
          if (!fs.existsSync(compileDataPath)) {
            console.log(`>>> ${manifest.info.name} does not contain a compilable application.`);
            // reload & check manifest
            manifestInstance.set({
              loaded: false,
              validate: true
            });
            await manifestInstance.load();
            continue;
          }
          compileData = await this.__loadJson(compileDataPath);
        } catch (e) {
          console.warn(e.message);
          packages_data[index].data = {
            problems: true,
            compilation_log: e.message
          };
          continue;
        }
        // compile the application
        this.__addCmd(
          `qx pkg migrate && qx compile --target=${targetType} --warnAsError=false --feedback=0 --force `,
          `Compiling ${manifest.info.name} v${manifest.info.version}...`,
          pkg_dir,
          (stdout, stderr) => {
            let compilation_log = stdout + "\n\n" + stderr;
            packages_data[index].data = {
              problems: Boolean(compilation_log.match(/(error|warn|missing|failed|cannot find|unresolved|unexpected|deprecated)/i)),
              compilation_log
            };
            let target = compileData.targets.find(target => target.type === targetType) || compileData.targets[0];
            let outputPath = path.join(pkg_dir, target.outputPath);
            let appTgtPath = path.join(targetDir, pkg_data.uri);
            mkdirp.sync(path.dirname(appTgtPath));
/* transpiled is needed for apiviewer
            if (targetType === "build") {
               this.__deleteFolderRecursiveSync(path.join(outputPath, "transpiled"));
            }
*/
            console.log(`>>> Moving generated applications from ${outputPath} to ${appTgtPath}`);
            fs.renameSync(outputPath, appTgtPath);
            // inform client that we have one or more application demos
            packages_data[index].data.applications = compileData.applications;
          },
          error => {
            let compilation_log = error.message + "\n\n" + error.stderr + "\n\n" + error.stdout;
            console.error(compilation_log);
              packages_data[index].data = {
                problems: true,
                compilation_log
            };
          }
        );
      }
      this.__executeCommands();
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
     * @param {String|undefined} cwd
     *    If given, the working directory in which the commands will be executed
     * @param {Function|undefined} onSuccess
     *    A function that is executed when the command has succesfully terminated.
     *    Receives the output of the command
     * @param {Function|undefined} onFail
     *    A function that is executed when the command has finished with a non-zero
     *    exit code or an error has been thrown in the onSuccess function. Receives
     *    an error object.
     * @private
     */
    __addCmd(cmd, info, cwd, onSuccess, onFail) {
      this.__cmds = this.__cmds || [];
      this.__cmds.push([cmd, info, cwd, onSuccess, onFail]);
    },

    /**
     * Executes the commands in the queue.
     * @private
     */
    __executeCommands() {
      for (let [cmd, info, cwd, onSuccess, onFail] of this.__cmds){
        console.log( ">>> " + (info || `Executing '${cmd}'`));
        const options = {};
        if (cwd) {
          options.cwd = cwd;
        }
        options.shell = true;
        let sout;
        let serr;
        try {
          let {stdout, stderr} = spawnSync(cmd, options);
          sout = stdout.toString().trim();
          if (sout) {
            console.log(sout);
          }
          serr = stderr.toString().trim();
          if (serr) {
            console.log(serr);
          }
          if (typeof onSuccess == "function") {
            onSuccess(sout, serr);
          }
        } catch (e) {
          if (typeof onFail == "function") {
            e.stdout = sout;
            e.stderr = serr;
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

qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    __pkgDataGenerated: false,

    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("writtenApplication", (e) => this.__appCompiling(e.getData()));
    },

    __appCompiling(application) {
      let className = application.getClassName();
      if (className !== "qxl.packagebrowser.Application") {
        return;
      }
      if (this.__pkgDataGenerated) {
        return;
      }
	  
      console.info(`\n`);
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      let app = application.getName();
      const path = require("path");
      const {execSync} = require('child_process');
	  let datafile = path.join(outputDir, app, "package-data.json");
      let cmds = [
        `qx pkg update`,
        `qx pkg list --json --all > ${datafile}`
      ];
      for (let cmd of cmds){
        console.info(`>>> Executing '${cmd}'`);
        execSync(cmd, { stdio: 'inherit' });
      }
      this.__pkgDataGenerated = true;
    }
  }
});

module.exports = {
  LibraryApi: qxl.packagebrowser.compile.LibraryApi
};

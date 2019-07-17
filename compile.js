const {execSync} = require('child_process');
const path = require("path");
qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    __pkgDataGenerated: false,

    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("writtenApplication", this.__onWrittenApplication, this);
    },

    __onWrittenApplication(e) {
      let application = e.getData();
      let className = application.getClassName();
      if (className !== "qxl.packagebrowser.Application") {
        return;
      }
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      let app = application.getName();
      let datafile = path.join(outputDir, app, "package-data.json");
      let cmds = [];
      if (!this.__pkgDataGenerated) {
        cmds.push(`qx pkg update`);
        cmds.push(`qx pkg list --json --all > ${datafile}`);
        this.__execute(cmds);
        this.__pkgDataGenerated = true;
      }
    },

    __execute(cmds) {
      for (let cmd of cmds){
        console.info(`>>> Executing '${cmd}'`);
        execSync(cmd, { stdio: 'inherit' });
      }
    }
  }
});

module.exports = {
  LibraryApi: qxl.packagebrowser.compile.LibraryApi
};

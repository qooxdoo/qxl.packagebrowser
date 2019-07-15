qx.Class.define("qxl.demobrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("writtenApplication", (e) => this.__appCompiling(e.getData()));
    },
    __appCompiling(application) {
      let className = application.getClassName();
      if (className !== "qxl.packagebrowser.Application") {
        return;
      }
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      const {execSync} = require('child_process');
      let cmds = [
        `qx pkg update`,
        `qx pkg list --json --all > ${outputDir}/resource/qxl/packagebrowser/package-data.json`
      ];
      for (let cmd of cmds){
        console.info(`>>> Executing '${cmd}'`);
        execSync(cmd, { stdio: 'inherit' });
      }
    }
  }
});

module.exports = {
  LibraryApi: qxl.demobrowser.compile.LibraryApi
};

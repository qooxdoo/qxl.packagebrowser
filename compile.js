qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    __initialCompile : false,
    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("remaking", this.__onRemaking);
      command.addListener("writtenApplication", (e) => this.__onWrittenApplication(e.getData()));
    },
    __onRemaking() {
      console.log("__onRemaking");
    },

    __onWrittenApplication(application) {
      let className = application.getClassName();
      if (className !== "qxl.packagebrowser.Application") {
        return;
      }
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      const {execSync} = require('child_process');
      let cmds = [
        //`qx pkg update`,
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
  LibraryApi: qxl.packagebrowser.compile.LibraryApi
};

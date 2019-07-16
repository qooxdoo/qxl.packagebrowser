qx.Class.define("qxl.packagebrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    __pkgDataGenerated: false,

    async load() {
      let command = this.getCompilerApi().getCommand();
      command.addListener("made", this.__onMade, this);
    },

    __onMade() {
      if (this.__pkgDataGenerated) {
        return;
      }
      let maker = this.getCompilerApi().getCommand().getMaker();
      const outputDir = maker.getTarget().getOutputDir();
      const {execSync} = require('child_process');
      let cmds = [
        `qx pkg update`,
        `qx pkg list --json --all > ${outputDir}resource/qxl/packagebrowser/package-data.json`
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

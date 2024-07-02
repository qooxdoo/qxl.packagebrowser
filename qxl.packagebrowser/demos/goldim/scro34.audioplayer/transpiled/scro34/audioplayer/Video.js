(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.audioplayer.Window": {
        "require": true
      },
      "qx.ui.layout.VBox": {},
      "qx.theme.manager.Decoration": {},
      "qx.ui.embed.Iframe": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2021 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
       * Dmitrii Zolotov (goldim)
  
     Note:
       The Audio Player loads its playlist from a file containing data in
       JSON format. See the accompanying "playlist.json" for information
       about the data structure.
     
  
  ************************************************************************ */

  qx.Class.define("scro34.audioplayer.Video", {
    extend: scro34.audioplayer.Window,
    members: {
      htmlFrame: null,
      _createControls: function _createControls() {
        var layout = new qx.ui.layout.VBox();
        this.set({
          caption: "Video",
          layout: layout,
          contentPadding: 1,
          allowStretchX: false,
          showMaximize: false,
          showMinimize: false,
          resizable: false
        });
      },
      __P_55_0: function __P_55_0() {
        var _decorator;
        var decorator = qx.theme.manager.Decoration.getInstance().resolve("theme-demo-input");
        if (!decorator) {
          decorator = qx.theme.manager.Decoration.getInstance().resolve("input");
        }
        var html = new qx.ui.embed.Iframe();
        html.set({
          width: 642,
          height: 482,
          decorator: (_decorator = decorator) !== null && _decorator !== void 0 ? _decorator : null,
          padding: 0
        });
        this.add(html, {
          flex: 1
        });
        return html;
      },
      setVideoLink: function setVideoLink(data) {
        if (!this.htmlFrame) {
          this.htmlFrame = this.__P_55_0(data.url);
        }
        this.htmlFrame.set({
          width: data.width + 2,
          height: data.height + 2
        });
        this.htmlFrame.setSource(data.url);
      },
      stopVideo: function stopVideo() {
        this.htmlFrame.resetSource();
        this.htmlFrame.reload();
      }
    }
  });
  scro34.audioplayer.Video.$$dbClassInfo = $$dbClassInfo;
})();

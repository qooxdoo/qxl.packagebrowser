(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.audioplayer.WebBrowser": {},
      "scro34.audioplayer.Video": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2024 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  qx.Mixin.define("scro34.audioplayer.MLinks", {
    construct: function construct() {
      this.addListener("openHomepage", this.onOpenHomepage, this);
      this.addListener("openWikipedia", this.onOpenWikipedia, this);
      this.addListener("openVideo", this.onOpenVideo, this);
    },
    properties: {
      desktop: {
        nullable: true
      }
    },
    members: {
      openPage: function openPage(page, options) {
        page.setIcon(options.icon);
        page.setCaption(options.caption);
        page.open();
      },
      openWebPage: function openWebPage(page, options) {
        page.surfTo(options.url);
        this.openPage(page, options);
      },
      openVideoPage: function openVideoPage(page, options) {
        page.setVideoLink(options.video);
        this.openPage(page, options);
      },
      onOpenHomepage: function onOpenHomepage(e) {
        if (!this.homePageWindow) {
          this.homePageWindow = new scro34.audioplayer.WebBrowser();
          this.homePageWindow.center();
          if (this.getDesktop()) {
            this.getDesktop().add(this.homePageWindow);
          }
        }
        this.openWebPage(this.homePageWindow, e.getData());
      },
      onOpenWikipedia: function onOpenWikipedia(e) {
        if (!this.wikipediaWindow) {
          this.wikipediaWindow = new scro34.audioplayer.WebBrowser();
          this.wikipediaWindow.center();
          if (this.getDesktop()) {
            this.getDesktop().add(this.wikipediaWindow);
          }
        }
        this.openWebPage(this.wikipediaWindow, e.getData());
      },
      onOpenVideo: function onOpenVideo(e) {
        if (!this.videoWindow) {
          this.videoWindow = new scro34.audioplayer.Video();
          this.videoWindow.addListener("beforeClose", function () {
            this.videoWindow.stopVideo();
          }, this);
          if (this.getDesktop()) {
            this.getDesktop().add(this.videoWindow, {
              top: 60,
              right: 20
            });
          }
        }
        this.openVideoPage(this.videoWindow, e.getData());
      }
    }
  });
  scro34.audioplayer.MLinks.$$dbClassInfo = $$dbClassInfo;
})();

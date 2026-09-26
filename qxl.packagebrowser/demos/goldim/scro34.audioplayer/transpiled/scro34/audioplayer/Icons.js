(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2024 Dmitrii Zolotov
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * @asset(scro34/audioplayer/icon/*)
   * 
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-home.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/media-audio-player.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/media-audio-player.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-playback-start.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-skip-backward.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-skip-forward.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/media-playback-pause.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/media-playback-start.png)
   * @asset(qx/icon/${qx.icontheme}/16/categories/internet.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/media-playback-pause.png)
   * 
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-previous.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-next.png)
   */
  qx.Class.define("scro34.audioplayer.Icons", {
    extend: qx.core.Object,
    members: {
      getIcon: function getIcon(name) {
        var icons = {
          WEB_BROWSER: "icon/32/categories/internet.png",
          WEB_BROWSER_SMALL: "icon/16/categories/internet.png",
          WEB_BROWSER_PREVIOUS: "icon/16/actions/go-previous.png",
          WEB_BROWSER_NEXT: "icon/16/actions/go-next.png",
          WEB_BROWSER_GO: "icon/16/actions/media-playback-start.png",
          WEB_BROWSER_PREVIOUS_HOVER: "icon/16/actions/go-previous.png",
          WEB_BROWSER_NEXT_HOVER: "icon/16/actions/go-next.png",
          WEB_BROWSER_GO_HOVER: "icon/16/actions/media-playback-start.png",
          MEDIA_PLAYER_SKIP_BACK: "icon/16/actions/media-skip-backward.png",
          MEDIA_PLAYER_SKIP_FORWARD: "icon/16/actions/media-skip-forward.png",
          MEDIA_PLAYER_START: "icon/22/actions/media-playback-start.png",
          MEDIA_PLAYER_PAUSE: "icon/22/actions/media-playback-pause.png",
          MEDIA_PLAYER_LEVEL_00: "scro34/audioplayer/icon/16/nm-signal-00.png",
          MEDIA_PLAYER_LEVEL_25: "scro34/audioplayer/icon/16/nm-signal-25.png",
          MEDIA_PLAYER_LEVEL_50: "scro34/audioplayer/icon/16/nm-signal-50.png",
          MEDIA_PLAYER_LEVEL_75: "scro34/audioplayer/icon/16/nm-signal-75.png",
          MEDIA_PLAYER_LEVEL_100: "scro34/audioplayer/icon/16/nm-signal-100.png",
          MEDIA_PLAYER_SKIP_BACK_HOVER: "icon/16/actions/media-skip-backward.png",
          MEDIA_PLAYER_SKIP_FORWARD_HOVER: "icon/16/actions/media-skip-forward.png",
          MEDIA_PLAYER_START_HOVER: "icon/22/actions/media-playback-start.png",
          MEDIA_PLAYER_PAUSE_HOVER: "icon/22/actions/media-playback-pause.png",
          GO_HOME: "icon/16/actions/go-home.png",
          WIKIPEDIA: "scro34/audioplayer/icon/16/wikipedia.png",
          YOUTUBE: "scro34/audioplayer/icon/16/youtube.jpg",
          GO_HOME_HOVER: "icon/16/actions/go-home.png",
          WIKIPEDIA_HOVER: "scro34/audioplayer/icon/16/wikipedia.png",
          YOUTUBE_HOVER: "scro34/audioplayer/icon/16/youtube.jpg",
          MEDIA_PLAYER: "icon/32/apps/media-audio-player.png",
          MEDIA_PLAYER_SMALL: "icon/16/apps/media-audio-player.png"
        };
        return icons[name];
      }
    }
  });
  scro34.audioplayer.Icons.$$dbClassInfo = $$dbClassInfo;
})();

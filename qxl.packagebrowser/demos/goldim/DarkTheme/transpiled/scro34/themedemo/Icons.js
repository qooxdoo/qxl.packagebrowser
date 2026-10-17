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
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-home.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/media-audio-player.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/office-chart.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-color-chooser.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-calculator.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-statistics.png)
   * @asset(qx/icon/${qx.icontheme}/16/categories/internet.png)
   * @asset(qx/icon/${qx.icontheme}/32/status/dialog-information.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/media-audio-player.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/office-chart.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/utilities-color-chooser.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/utilities-calculator.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/utilities-statistics.png)
   * @asset(qx/icon/${qx.icontheme}/32/categories/internet.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-playback-start.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-previous.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/go-next.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-skip-backward.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/media-skip-forward.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/media-playback-pause.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/media-playback-start.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/office-calendar.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/edit-undo.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/list-add.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/list-remove.png)
   * @asset(qx/icon/${qx.icontheme}/16/status/dialog-information.png)
   * 
   * @asset(scro34/themedemo/icon/16/wikipedia.png)
   * @asset(scro34/themedemo/icon/16/youtube.jpg)
   * @asset(scro34/themedemo/icon/16/nm-signal-00.png)
   * @asset(scro34/themedemo/icon/16/nm-signal-25.png)
   * @asset(scro34/themedemo/icon/16/nm-signal-50.png)
   * @asset(scro34/themedemo/icon/16/nm-signal-75.png)
   * @asset(scro34/themedemo/icon/16/nm-signal-100.png)
   */
  qx.Class.define("scro34.themedemo.Icons", {
    extend: qx.core.Object,
    members: {
      getIcon: function getIcon(name) {
        var icons = {
          TABLE_SHOW_DIALOG: "icon/32/status/dialog-information.png",
          TABLE_LIST_ADD: "icon/16/actions/list-add.png",
          TABLE_LIST_REMOVE: "icon/16/actions/list-remove.png",
          TABLE_SHOW_SELECTION: "icon/16/status/dialog-information.png",
          TABLE_EDIT_UNDO: "icon/16/actions/edit-undo.png",
          TABLE_CALENDAR: "icon/16/apps/office-calendar.png",
          MEDIA_PLAYER_SKIP_BACK: "icon/16/actions/media-skip-backward.png",
          MEDIA_PLAYER_SKIP_FORWARD: "icon/16/actions/media-skip-forward.png",
          MEDIA_PLAYER_START: "icon/22/actions/media-playback-start.png",
          MEDIA_PLAYER_PAUSE: "icon/22/actions/media-playback-pause.png",
          MEDIA_PLAYER_LEVEL_00: "scro34/themedemo/icon/16/nm-signal-00.png",
          MEDIA_PLAYER_LEVEL_25: "scro34/themedemo/icon/16/nm-signal-25.png",
          MEDIA_PLAYER_LEVEL_50: "scro34/themedemo/icon/16/nm-signal-50.png",
          MEDIA_PLAYER_LEVEL_75: "scro34/themedemo/icon/16/nm-signal-75.png",
          MEDIA_PLAYER_LEVEL_100: "scro34/themedemo/icon/16/nm-signal-100.png",
          MEDIA_PLAYER_SKIP_BACK_HOVER: "icon/16/actions/media-skip-backward.png",
          MEDIA_PLAYER_SKIP_FORWARD_HOVER: "icon/16/actions/media-skip-forward.png",
          MEDIA_PLAYER_START_HOVER: "icon/22/actions/media-playback-start.png",
          MEDIA_PLAYER_PAUSE_HOVER: "icon/22/actions/media-playback-pause.png",
          WEB_BROWSER_PREVIOUS: "icon/16/actions/go-previous.png",
          WEB_BROWSER_NEXT: "icon/16/actions/go-next.png",
          WEB_BROWSER_GO: "icon/16/actions/media-playback-start.png",
          WEB_BROWSER_PREVIOUS_HOVER: "icon/16/actions/go-previous.png",
          WEB_BROWSER_NEXT_HOVER: "icon/16/actions/go-next.png",
          WEB_BROWSER_GO_HOVER: "icon/16/actions/media-playback-start.png",
          GO_HOME: "icon/16/actions/go-home.png",
          WIKIPEDIA: "scro34/themedemo/icon/16/wikipedia.png",
          YOUTUBE: "scro34/themedemo/icon/16/youtube.jpg",
          GO_HOME_HOVER: "icon/16/actions/go-home.png",
          WIKIPEDIA_HOVER: "scro34/themedemo/icon/16/wikipedia.png",
          YOUTUBE_HOVER: "scro34/themedemo/icon/16/youtube.jpg",
          WIDGET_BROWSER: "icon/32/apps/utilities-statistics.png",
          CALCULATOR: "icon/32/apps/utilities-calculator.png",
          COLOR_SELECTOR: "icon/32/apps/utilities-color-chooser.png",
          TABLE: "icon/32/apps/office-chart.png",
          MEDIA_PLAYER: "icon/32/apps/media-audio-player.png",
          WEB_BROWSER: "icon/32/categories/internet.png",
          WIDGET_BROWSER_SMALL: "icon/16/apps/utilities-statistics.png",
          CALCULATOR_SMALL: "icon/16/apps/utilities-calculator.png",
          COLOR_SELECTOR_SMALL: "icon/16/apps/utilities-color-chooser.png",
          TABLE_SMALL: "icon/16/apps/office-chart.png",
          MEDIA_PLAYER_SMALL: "icon/16/apps/media-audio-player.png",
          WEB_BROWSER_SMALL: "icon/16/categories/internet.png"
        };
        return icons[name];
      }
    }
  });
  scro34.themedemo.Icons.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("bamboo.demo.Icons", {
    extend: qx.core.Object,
    members: {
      getIcon: function getIcon(icon) {
        var icons = {
          WIDGET_BROWSER: "bamboo/icon/32/list-focused.png",
          CALCULATOR: "bamboo/icon/32/calculator-focused.png",
          COLOR_SELECTOR: "bamboo/icon/32/color-selector-focused.png",
          TABLE: "bamboo/icon/32/table-focused.png",
          MEDIA_PLAYER: "bamboo/icon/32/headphones-focused.png",
          WEB_BROWSER: "bamboo/icon/32/earth-focused.png",
          WIDGET_BROWSER_SMALL: "bamboo/icon/16/list-focused.png",
          CALCULATOR_SMALL: "bamboo/icon/16/calculator-focused.png",
          COLOR_SELECTOR_SMALL: "bamboo/icon/16/color-selector-focused.png",
          TABLE_SMALL: "bamboo/icon/16/table-focused.png",
          MEDIA_PLAYER_SMALL: "bamboo/icon/16/headphones-focused.png",
          WEB_BROWSER_SMALL: "bamboo/icon/16/earth-focused.png",
          TABLE_SHOW_DIALOG: "bamboo/icon/16/info.png",
          TABLE_LIST_ADD: "bamboo/icon/16/plus.png",
          TABLE_LIST_REMOVE: "bamboo/icon/16/minus.png",
          TABLE_SHOW_SELECTION: "bamboo/icon/16/info.png",
          TABLE_EDIT_UNDO: "bamboo/icon/16/reply.png",
          TABLE_CALENDAR: "bamboo/icon/16/calendar.png",
          MEDIA_PLAYER_SKIP_BACK: "bamboo/icon/16/fast-backward.png",
          MEDIA_PLAYER_SKIP_FORWARD: "bamboo/icon/16/fast-forward.png",
          MEDIA_PLAYER_START: "bamboo/icon/22/play.png",
          MEDIA_PLAYER_PAUSE: "bamboo/icon/22/pause.png",
          MEDIA_PLAYER_LEVEL_00: "bamboo/icon/16/signal-00.png",
          MEDIA_PLAYER_LEVEL_25: "bamboo/icon/16/signal-20.png",
          MEDIA_PLAYER_LEVEL_50: "bamboo/icon/16/signal-40.png",
          MEDIA_PLAYER_LEVEL_75: "bamboo/icon/16/signal-60.png",
          MEDIA_PLAYER_LEVEL_100: "bamboo/icon/16/signal-100.png",
          WEB_BROWSER_PREVIOUS: "bamboo/icon/16/arrow-left.png",
          WEB_BROWSER_NEXT: "bamboo/icon/16/arrow-right.png",
          WEB_BROWSER_GO: "bamboo/icon/22/play.png",
          WEB_BROWSER_PREVIOUS_HOVER: "bamboo/icon/16/arrow-left-focused.png",
          WEB_BROWSER_NEXT_HOVER: "bamboo/icon/16/arrow-right-focused.png",
          WEB_BROWSER_GO_HOVER: "bamboo/icon/22/play-focused.png",
          GO_HOME: "bamboo/icon/16/home.png",
          WIKIPEDIA: "bamboo/icon/16/wikipedia.png",
          YOUTUBE: "bamboo/icon/16/film.png",
          GO_HOME_HOVER: "bamboo/icon/16/home-focused.png",
          WIKIPEDIA_HOVER: "bamboo/icon/16/wikipedia-focused.png",
          YOUTUBE_HOVER: "bamboo/icon/16/film-focused.png",
          MEDIA_PLAYER_SKIP_BACK_HOVER: "bamboo/icon/16/fast-backward-focused.png",
          MEDIA_PLAYER_SKIP_FORWARD_HOVER: "bamboo/icon/16/fast-forward-focused.png",
          MEDIA_PLAYER_START_HOVER: "bamboo/icon/22/play-focused.png",
          MEDIA_PLAYER_PAUSE_HOVER: "bamboo/icon/22/pause-focused.png"
        };
        return icons[icon];
      }
    }
  });
  bamboo.demo.Icons.$$dbClassInfo = $$dbClassInfo;
})();

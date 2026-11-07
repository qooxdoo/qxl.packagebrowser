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
   *
   *  Zen [and the art of] CMS
   *
   *  https://zenesis.com
   *
   *  Copyright:
   *    2019-2022 Zenesis Ltd, https://www.zenesis.com
   *
   *  License:
   *    MIT (see LICENSE in project root)
   *
   *  Authors:
   *    John Spackman (john.spackman@zenesis.com, @johnspackman)
   *    Patryk Malinowski (@p9malino26)
   *    Will Johnson (@WillsterJohnsonAtZenesis)
   *
   * ************************************************************************ */

  /**
   *
   * @asset(qx/static/blank.png)
   * @usefont(MaterialIcons)
   */
  const CHKBOX_SIZE = 18;
  qx.Class.define("zx.ui.theme.avocado.Image", {
    extend: qx.core.Object,
    statics: {
      /**
       * Holds a map containing all the URL to the images.
       * @internal
       */
      URLS: {
        blank: "qx/static/blank.png",
        // checkbox
        "checkbox-checked": "@MaterialIcons/check_box/" + CHKBOX_SIZE,
        "checkbox-blank": "@MaterialIcons/check_box_outline_blank/" + CHKBOX_SIZE,
        "checkbox-undetermined": "@MaterialIcons/indeterminate_check_box/" + CHKBOX_SIZE,
        "radiobutton-checked": "@MaterialIcons/radio_button_checked/" + CHKBOX_SIZE,
        "radiobutton-unchecked": "@MaterialIcons/radio_button_unchecked/" + CHKBOX_SIZE,
        // window
        "window-minimize": "@MaterialIcons/keyboard_arrow_down",
        "window-maximize": "@MaterialIcons/fullscreen",
        "window-restore": "@MaterialIcons/fullscreen_exit",
        "window-close": "@MaterialIcons/close",
        // cursor
        "cursor-copy": "@MaterialIcons/content_copy",
        "cursor-move": "@MaterialIcons/sync_alt",
        "cursor-alias": "@MaterialIcons/subtract",
        "cursor-nodrop": "@MaterialIcons/block",
        // arrows
        "arrow-right": "@MaterialIcons/keyboard_arrow_right/18",
        "arrow-left": "@MaterialIcons/keyboard_arrow_left/18",
        "arrow-up": "@MaterialIcons/keyboard_arrow_up/18",
        "arrow-down": "@MaterialIcons/keyboard_arrow_down/18",
        "arrow-forward": "@MaterialIcons/fast_forward/18",
        "arrow-rewind": "@MaterialIcons/fast_rewind/18",
        "arrow-down-small": "@MaterialIcons/keyboard_arrow_down/13",
        "arrow-up-small": "@MaterialIcons/keyboard_arrow_up/13",
        "arrow-up-invert": "@MaterialIcons/keyboard_arrow_up/18",
        "arrow-down-invert": "@MaterialIcons/keyboard_arrow_down/18",
        "arrow-right-invert": "@MaterialIcons/keyboard_arrow_right/18",
        // split pane
        "knob-horizontal": "@MaterialIcons/drag_indicator/12",
        "knob-vertical": "@MaterialIcons/drag_handle/12",
        // tree
        "tree-minus": "@MaterialIcons/arrow_drop_down/16",
        "tree-plus": "@MaterialIcons/arrow_right/16",
        // table
        "select-column-order": "@MaterialIcons/reorder/15",
        "table-ascending": "@MaterialIcons/keyboard_arrow_up/14",
        "table-descending": "@MaterialIcons/keyboard_arrow_down/14",
        // tree virtual
        "folder-open": "@MaterialIcons/folder_open/15",
        folder: "@MaterialIcons/folder/15",
        file: "@MaterialIcons/insert_drive_file/15",
        // menu
        "menu-checkbox": "@MaterialIcons/check_box_outline_blank/15",
        "menu-checkbox-checked": "@MaterialIcons/check_box/15",
        "menu-radiobutton-checked": "@MaterialIcons/radio_button_checked/15",
        "menu-radiobutton": "@MaterialIcons/radio_button_unchecked/15",
        // tabview
        "tabview-close": "@MaterialIcons/close/12"
      }
    }
  });
  zx.ui.theme.avocado.Image.$$dbClassInfo = $$dbClassInfo;
})();

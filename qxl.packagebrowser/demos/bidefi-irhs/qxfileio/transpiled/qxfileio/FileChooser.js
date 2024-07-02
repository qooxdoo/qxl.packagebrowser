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
  /**
   * A file chooser widget that let the user selects files from his file system.
   */
  qx.Class.define("qxfileio.FileChooser", {
    extend: qx.core.Object,
    events: {
      /**
       * Fired when the file selection change.
       *
       * Data contains the FileList selected by the user.
       */
      filesChange: 'qx.event.type.Data'
    },
    properties: {
      /**
       * The ability to choose more than one file in the dialog box.
       */
      multipleSelect: {
        check: "Boolean",
        init: false,
        event: "multipleSelectChange",
        apply: "__P_4_0"
      }
    },
    construct: function construct() {
      // Element creation
      this.__P_4_1 = document.createElement("input");
      this.__P_4_1.type = "file";
      this.__P_4_1.style.position = "absolute";
      this.__P_4_1.style.hideFocus = "true";
      this.__P_4_1.style.zIndex = -10000;
      this.__P_4_1.style.left = "-1000px";
      this.__P_4_1.style.width = "1px";

      // Event handling
      this.__P_4_1.onchange = function (me) {
        return function (e) {
          //me.debug("!!! File changed [" + e.target.files.length + "] !!!");
          me.fireDataEvent('filesChange', e.target.files);
        };
      }(this);
      this.__P_4_1.onclick = function (me) {
        return function (e) {
          document.body.removeChild(e.target);
          //me.debug("!!! Removed !!!");
        };
      }(this);
    },
    members: {
      /**
       * The embeded HTML input type file element.
       */
      __P_4_1: null,
      /**
       * Apply the value of multipleSelect to the HTML input element.
       */
      __P_4_0: function __P_4_0(val) {
        this.debug("multiple: " + val);
        if (val) {
          this.__P_4_1.multiple = "multiple";
        } else {
          this.debug("remove multiple");
          this.__P_4_1.multiple = "";
        }
      },
      /**
       * Opens the 'open file' dialog box.
       */
      open: function open() {
        document.body.appendChild(this.__P_4_1);
        this.__P_4_1.click();
      },
      /**
       * Get the file list
       * @return {FileList} the list of File
       */
      getFiles: function getFiles() {
        return this.__P_4_1.files;
      }
    }
  });
  qxfileio.FileChooser.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Scroll": {
        "construct": true,
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.groupbox.GroupBox": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (d_wagner)
  
  ************************************************************************ */

  /* ************************************************************************
  
  ************************************************************************ */

  /**
   * Displays a title (label) and text (in a groupbox).
   */

  qx.Class.define("qxl.demobrowser.Readme", {
    extend: qx.ui.container.Scroll,
    construct: function construct(title, readmeText) {
      qx.ui.container.Scroll.constructor.call(this);
      this.__P_4_0 = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
      this.__P_4_0.set({
        padding: 10,
        decorator: "main"
      });
      this.add(this.__P_4_0);
      var title = title || "";
      this.setTitle(title);
      var readme = readmeText || "";
      this.setReadmeData(readme);
    },
    properties: {
      title: {
        apply: "_applyTitle"
      },
      readmeData: {
        apply: "_applyReadmeData"
      }
    },
    members: {
      __P_4_0: null,
      __P_4_1: null,
      __P_4_2: null,
      _applyTitle: function _applyTitle(value, old) {
        if (value === old) {
          return;
        }
        if (this.__P_4_1) {
          this.__P_4_1.setValue("<h1>" + value + "</h1>");
          return;
        }
        var titleLabel = this.__P_4_1 = new qx.ui.basic.Label("<h1>" + value + "</h1>");
        titleLabel.setRich(true);
        this.__P_4_0.add(titleLabel);
      },
      _applyReadmeData: function _applyReadmeData(value, old) {
        if (value === old) {
          return;
        }
        if (this.__P_4_2) {
          this.__P_4_2.destroy();
        }
        var groupBox = this.__P_4_2 = new qx.ui.groupbox.GroupBox("Readme");
        groupBox.setLayout(new qx.ui.layout.VBox(5));
        var readmeText = value.replace(/\\n/g, "<br/>");
        var readmeLabel = new qx.ui.basic.Label(readmeText);
        readmeLabel.setRich(true);
        groupBox.add(readmeLabel);
        this.__P_4_0.add(groupBox);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("__P_4_1", "__P_4_2", "__P_4_0");
    }
  });
  qxl.demobrowser.Readme.$$dbClassInfo = $$dbClassInfo;
})();

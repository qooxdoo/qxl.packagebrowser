(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.tree.VirtualTreeItem": {
        "require": true
      },
      "qx.ui.basic.Image": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.core.Spacer": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  qx.Class.define("qxl.demobrowser.demo.virtual.tree.TreeItem", {
    extend: qx.ui.tree.VirtualTreeItem,
    properties: {
      leadIcon: {
        check: "String",
        event: "changeLeadIcon",
        nullable: true
      },
      checked: {
        check: "Boolean",
        event: "changeChecked",
        nullable: true
      },
      size: {
        check: "String",
        event: "changeSize",
        nullable: true
      },
      date: {
        check: "String",
        event: "changeDate",
        nullable: true
      },
      mode: {
        check: "String",
        event: "changeMode",
        nullable: true
      }
    },
    members: {
      __P_38_0: null,
      __P_38_1: null,
      __P_38_2: null,
      __P_38_3: null,
      __P_38_4: null,
      _addWidgets: function _addWidgets() {
        var leadIcon = this.__P_38_0 = new qx.ui.basic.Image();
        this.bind("leadIcon", leadIcon, "source");
        leadIcon.setWidth(16);
        this.addWidget(leadIcon);

        // Here's our indentation and tree-lines
        this.addSpacer();
        this.addOpenButton();

        // The standard tree icon follows
        this.addIcon();
        this.setIcon("icon/16/places/user-desktop.png");

        // A checkbox comes right after the tree icon
        var checkbox = this.__P_38_1 = new qx.ui.form.CheckBox();
        this.bind("checked", checkbox, "value");
        checkbox.bind("value", this, "checked");
        checkbox.setFocusable(false);
        checkbox.setTriState(true);
        checkbox.setMarginRight(4);
        this.addWidget(checkbox);

        // The label
        this.addLabel();

        // All else should be right justified
        this.addWidget(new qx.ui.core.Spacer(), {
          flex: 1
        });

        // Add a file size, date and mode
        var text = this.__P_38_2 = new qx.ui.basic.Label();
        this.bind("size", text, "value");
        text.setWidth(50);
        this.addWidget(text);
        text = this.__P_38_3 = new qx.ui.basic.Label();
        this.bind("date", text, "value");
        text.setWidth(150);
        this.addWidget(text);
        text = this.__P_38_4 = new qx.ui.basic.Label();
        this.bind("mode", text, "value");
        text.setWidth(80);
        this.addWidget(text);
      }
    }
  });
  qxl.demobrowser.demo.virtual.tree.TreeItem.$$dbClassInfo = $$dbClassInfo;
})();

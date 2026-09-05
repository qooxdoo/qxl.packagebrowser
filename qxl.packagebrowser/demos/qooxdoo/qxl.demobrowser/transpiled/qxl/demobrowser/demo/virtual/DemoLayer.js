(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.virtual.layer.WidgetCell": {
        "construct": true,
        "require": true
      },
      "qx.ui.basic.Atom": {},
      "qx.ui.form.CheckBox": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
     * Fabian Jakobs (fjakobs)
     * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */
  /**
   *
   * @asset(qx/icon/${qx.icontheme}/16/places/*)
   */

  qx.Class.define("qxl.demobrowser.demo.virtual.DemoLayer", {
    extend: qx.ui.virtual.layer.WidgetCell,
    construct: function construct() {
      qx.ui.virtual.layer.WidgetCell.constructor.call(this, this);
      this._pool = {
        atom: [],
        checkbox: []
      };
      this.__P_30_0 = [];
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      _pool: null,
      __P_30_0: null,
      getCellData: function getCellData(row, column) {
        if (!this.__P_30_0[row]) {
          this.__P_30_0[row] = [];
        }
        if (!this.__P_30_0[row][column]) {
          this.__P_30_0[row][column] = {
            label: this.__P_30_1(),
            icon: this.__P_30_2()
          };
        }
        return this.__P_30_0[row][column];
      },
      getCellWidget: function getCellWidget(row, column) {
        var widget;
        if (column % 2 == 0) {
          widget = this._pool.atom.pop();
          if (!widget) {
            widget = new qx.ui.basic.Atom();
            widget.addListener("pointerover", function () {
              var icon = this.__P_30_2();
              widget.setIcon(icon);
              this.__P_30_0[row][column].icon = icon;
            }, this);
          }
          widget.set(this.getCellData(row, column));
        } else {
          widget = this._pool.checkbox.pop();
          if (!widget) {
            widget = new qx.ui.form.CheckBox();
            widget.addListener("changeValue", function () {
              this.setLabel(this.getLabel() == "foobar!" ? widget.getUserData("row") + " / " + widget.getUserData("column") : "foobar!");
            }, widget);
          }
          widget.set({
            value: row % 2 == 0,
            label: row + " / " + column
          });
        }
        widget.setUserData("row", row);
        widget.setUserData("column", column);
        return widget;
      },
      poolCellWidget: function poolCellWidget(widget) {
        if (widget.classname == "qx.ui.basic.Atom") {
          this._pool.atom.push(widget);
        } else {
          this._pool.checkbox.push(widget);
        }
      },
      __P_30_1: function __P_30_1() {
        var name = "";
        for (var j = 0; j < 10; j++) {
          name += String.fromCharCode(Math.floor(Math.random() * 25) + 65);
        }
        return name;
      },
      __P_30_2: function __P_30_2() {
        var prefix = "icon/";
        var suffix = "places/";
        var iconImages = ["folder.png", "user-trash.png", "network-server.png", "network-workgroup.png", "user-desktop.png"];
        var imageId = Math.floor(Math.random() * 4);
        return prefix + 16 + "/" + suffix + iconImages[imageId];
      }
    },
    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._pool = this.__P_30_0 = null;
    }
  });
  qxl.demobrowser.demo.virtual.DemoLayer.$$dbClassInfo = $$dbClassInfo;
})();

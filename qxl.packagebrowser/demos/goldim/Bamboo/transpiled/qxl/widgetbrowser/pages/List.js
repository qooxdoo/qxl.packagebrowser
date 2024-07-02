(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.widgetbrowser.pages.AbstractPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.util.ResourceManager": {
        "construct": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.form.List": {},
      "qx.io.request.Xhr": {},
      "qx.ui.form.ListItem": {},
      "qx.ui.list.List": {},
      "qx.data.store.Json": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tristan Koch (tristankoch)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * Demonstrates qx.ui.list(...):
   *
   * List
   *
   *
   * @asset(qxl/widgetbrowser/people.json)
   */

  qx.Class.define("qxl.widgetbrowser.pages.List", {
    extend: qxl.widgetbrowser.pages.AbstractPage,
    construct: function construct() {
      qxl.widgetbrowser.pages.AbstractPage.constructor.call(this);
      this.__P_227_0 = new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
      this.__P_227_1 = qx.util.ResourceManager.getInstance().toUri("qxl/widgetbrowser/people.json");
      this.add(this.__P_227_0);
      this.initWidgets();
    },
    members: {
      __P_227_0: null,
      __P_227_1: null,
      initWidgets: function initWidgets() {
        var widgets = this._widgets;
        var label = new qx.ui.basic.Label("List");
        this.__P_227_0.add(label, {
          row: 0,
          column: 0
        });
        var list = this.__P_227_2();
        this.__P_227_0.add(list, {
          row: 1,
          column: 0
        });
        widgets.push(list);
        label = new qx.ui.basic.Label("List (virtual)");
        this.__P_227_0.add(label, {
          row: 0,
          column: 1
        });
        var virtualList = this.__P_227_3();
        this.__P_227_0.add(virtualList, {
          row: 1,
          column: 1
        });
        widgets.push(virtualList);
        label = new qx.ui.basic.Label("List (virtual, grouped)");
        this.__P_227_0.add(label, {
          row: 0,
          column: 2
        });
        var groupedVirtualList = this.__P_227_4();
        this.__P_227_0.add(groupedVirtualList, {
          row: 1,
          column: 2
        });
        widgets.push(groupedVirtualList);
      },
      __P_227_2: function __P_227_2() {
        var list = new qx.ui.form.List();
        list.setWidth(150);
        var req = new qx.io.request.Xhr(this.__P_227_1);
        req.setParser("json");
        req.addListener("success", function () {
          var people = req.getResponse().people;
          people.forEach(function (person) {
            var item = new qx.ui.form.ListItem("" + person.lastname + ", " + person.firstname);
            item.setHeight(25);
            list.add(item);
          });
        });
        req.send();
        return list;
      },
      __P_227_3: function __P_227_3() {
        var list = new qx.ui.list.List().set({
          height: 280,
          width: 150,
          labelPath: "firstname",
          labelOptions: {
            converter: function converter(data, model) {
              return model ? model.getLastname() + ", " + data : "no model...";
            }
          }
        });
        this.__P_227_5(list);
        return list;
      },
      __P_227_4: function __P_227_4() {
        var list = this.__P_227_3();

        // Creates the delegate for sorting and grouping
        var delegate = {
          // Sorts the model data by last name
          sorter: function sorter(a, b) {
            a = a.getLastname();
            b = b.getLastname();
            return a > b ? 1 : a < b ? -1 : 0;
          },
          // Assign the group name for each item (fist char form last name)
          group: function group(model) {
            return model.getLastname().charAt(0).toUpperCase();
          }
        };
        list.setDelegate(delegate);
        return list;
      },
      __P_227_5: function __P_227_5(widget) {
        var store = new qx.data.store.Json(this.__P_227_1);
        store.bind("model.people", widget, "model");
      }
    }
  });
  qxl.widgetbrowser.pages.List.$$dbClassInfo = $$dbClassInfo;
})();

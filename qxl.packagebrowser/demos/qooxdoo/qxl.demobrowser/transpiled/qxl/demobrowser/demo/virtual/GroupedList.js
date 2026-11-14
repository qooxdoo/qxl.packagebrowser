(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {},
      "qx.ui.layout.HBox": {},
      "qx.util.ResourceManager": {},
      "qx.data.store.Json": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.list.List": {},
      "qx.ui.form.ListItem": {}
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
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   *
   * @asset(qxl/demobrowser/demo/data/persons.json)
   * @asset(qx/icon/${qx.icontheme}/16/categories/system.png)
   * @asset(qx/icon/${qx.icontheme}/16/categories/office.png)
   * @asset(qx/icon/${qx.icontheme}/16/emotes/face-laugh.png)
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.GroupedList", {
    extend: qx.application.Standalone,
    members: {
      __P_32_0: null,
      __P_32_1: null,
      __P_32_2: null,
      main: function main() {
        qxl.demobrowser.demo.virtual.GroupedList.superclass.prototype.main.call(this);
        var firstExample = this.createFirstExample();
        var secondExample = this.createSecondExample();
        var thirdExample = this.createThirdExample();
        this.loadData();

        /* ***********************************************
         * Layout and description
         * ********************************************* */
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
        this.getRoot().add(container, {
          edge: 20
        });
        var description = new qx.ui.basic.Label();
        description.setRich(true);
        description.setWidth(470);
        description.setSelectable(true);
        description.setValue("<b>Grouped List</b><br/>Loads the json file <a href='json/persons.json' target='_blank'>persons.json</a> and binds the created model to all list widgets. The first list shows only the row data and uses a converter for the label that concatenates the first and last name. The second list sorts the items by last name and groups the items by the first letter of the last name. The third list sorts the items by first name and groups it by the 'group' model property. The third list is configured  to use a customized group item for rendering.");
        container.add(description);
        var listContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(20));
        container.add(listContainer, {
          flex: 1
        });
        listContainer.add(firstExample);
        listContainer.add(secondExample);
        listContainer.add(thirdExample);
      },
      loadData: function loadData() {
        var url = qx.util.ResourceManager.getInstance().toUri("qxl/demobrowser/demo/data/persons.json");
        var store = new qx.data.store.Json(url);
        store.bind("model.persons", this.__P_32_0, "model");
        store.bind("model.persons", this.__P_32_1, "model");
        store.bind("model.persons", this.__P_32_2, "model");
      },
      createFirstExample: function createFirstExample() {
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        var title = new qx.ui.basic.Label("Raw List:").set({
          font: "bold"
        });
        container.add(title);

        // Creates the list and configure it
        var list = this.__P_32_0 = new qx.ui.list.List().set({
          height: 280,
          width: 150,
          labelPath: "firstname",
          labelOptions: {
            converter: function converter(data, model) {
              return model ? data + " " + model.getLastname() : "no model...";
            }
          }
        });
        container.add(list, {
          top: 20
        });
        return container;
      },
      createSecondExample: function createSecondExample() {
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        var title = new qx.ui.basic.Label("Grouped by last name:").set({
          font: "bold"
        });
        container.add(title);

        // Creates the list and configure it
        var list = this.__P_32_1 = new qx.ui.list.List().set({
          height: 280,
          width: 150,
          labelPath: "firstname",
          labelOptions: {
            converter: function converter(data, model) {
              return model ? model.getLastname() + ", " + data : "no model...";
            }
          }
        });
        container.add(list, {
          top: 20
        });

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

        // Share the selection with the fist list
        list.setSelection(this.__P_32_0.getSelection());
        return container;
      },
      createThirdExample: function createThirdExample() {
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        var title = new qx.ui.basic.Label("Grouped by group:").set({
          font: "bold"
        });
        container.add(title);

        // Creates the list and configure it
        var list = this.__P_32_2 = new qx.ui.list.List().set({
          height: 280,
          width: 150,
          labelPath: "firstname",
          labelOptions: {
            converter: function converter(data, model) {
              return model ? data + " " + model.getLastname() : "no model...";
            }
          }
        });
        container.add(list, {
          top: 20
        });

        // Creates the delegate for sorting and grouping
        var delegate = {
          // Sorts the model data by last name
          sorter: function sorter(a, b) {
            a = a.getLastname();
            b = b.getLastname();
            return a > b ? 1 : a < b ? -1 : 0;
          },
          // Uses the defined group name form the model.
          // When the model doesn't define a group name,
          // The default group name from the list is used.
          group: function group(model) {
            return model.getGroup ? model.getGroup() : null;
          },
          // Uses a own group item
          createGroupItem: function createGroupItem() {
            return new qx.ui.form.ListItem();
          },
          // Configures each item
          configureGroupItem: function configureGroupItem(item) {
            item.setBackgroundColor("#005E00");
            item.setTextColor("white");
          },
          // Binds the group name to the label and
          // assign a icon dependent on the group name
          bindGroupItem: function bindGroupItem(controller, item, id) {
            controller.bindProperty(null, "label", null, item, id);
            controller.bindProperty(null, "icon", {
              converter: function converter(data) {
                switch (data) {
                  case "Friends":
                    return "icon/16/emotes/face-laugh.png";
                  case "Colleagues":
                    return "icon/16/categories/office.png";
                  default:
                    return "icon/16/categories/system.png";
                }
              }
            }, item, id);
          }
        };
        list.setDelegate(delegate);

        // Share the selection with the first list
        list.setSelection(this.__P_32_0.getSelection());
        return container;
      }
    },
    destruct: function destruct() {
      this.__P_32_0.dispose();
      this.__P_32_1.dispose();
      this.__P_32_2.dispose();
      this.__P_32_0 = this.__P_32_1 = this.__P_32_2 = null;
    }
  });
  qxl.demobrowser.demo.virtual.GroupedList.$$dbClassInfo = $$dbClassInfo;
})();

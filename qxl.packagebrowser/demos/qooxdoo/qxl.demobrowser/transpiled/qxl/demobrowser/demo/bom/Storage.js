(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.event.GestureHandler": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.Storage": {},
      "qx.bom.Input": {},
      "qx.bom.client.Html": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "html.storage.local": {
          "className": "qx.bom.client.Html"
        },
        "html.storage.userdata": {
          "className": "qx.bom.client.Html"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   * @require(qx.module.event.GestureHandler)
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Storage", {
    extend: qx.application.Native,
    members: {
      __P_6_0: null,
      main: function main() {
        qxl.demobrowser.demo.bom.Storage.superclass.prototype.main.call(this);
        this.setUsing();
        this.__P_6_0 = qx.bom.Storage.getLocal();
        var saveButton = document.getElementById("save");
        var clearButton = document.getElementById("clear");
        var removeButton = document.getElementById("remove");
        var self = this;
        q(saveButton).on("tap", function () {
          var key = qx.bom.Input.getValue(document.getElementById("key"));
          var value = qx.bom.Input.getValue(document.getElementById("value"));
          self.__P_6_0.setItem(key, value);
          self.updateList();
        });
        q(clearButton).on("tap", function () {
          self.__P_6_0.clear();
          self.updateList();
        });
        q(removeButton).on("tap", function () {
          self.__P_6_0.removeItem(self.__P_6_0.getKey(0));
          self.updateList();
        });
        this.updateList();
      },
      updateList: function updateList() {
        var list = document.getElementById("list");
        list.innerHTML = "";
        this.__P_6_0.forEach(function (key, value) {
          list.innerHTML += key + ":" + value + "<br>";
        }, list);
        if (list.innerHTML == "") {
          list.innerHTML = "<em>no content</em>";
        }
      },
      setUsing: function setUsing() {
        var label = document.getElementById("using");
        if (qx.core.Environment.get("html.storage.local")) {
          label.innerHTML = "Web Storage";
        } else if (qx.core.Environment.get("html.storage.userdata")) {
          label.innerHTML = "userData Storage";
        } else {
          label.innerHTML = "Memory Storage";
        }
      }
    }
  });
  qxl.demobrowser.demo.bom.Storage.$$dbClassInfo = $$dbClassInfo;
})();

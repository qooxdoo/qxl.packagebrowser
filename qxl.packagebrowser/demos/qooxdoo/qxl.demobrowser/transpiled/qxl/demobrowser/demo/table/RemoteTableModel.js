(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.model.Remote": {
        "construct": true,
        "require": true
      },
      "qx.lang.Json": {},
      "qx.io.request.Xhr": {},
      "qx.util.ResourceManager": {}
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
       * Tobias Oetiker
       * martinwittemann (martinwittemann)
  
  ************************************************************************ */
  /* ************************************************************************
  
  
  ************************************************************************ */
  /**
   *
   * @asset(qxl/demobrowser/backend/remote_table.php)
   */

  qx.Class.define("qxl.demobrowser.demo.table.RemoteTableModel", {
    extend: qx.ui.table.model.Remote,
    construct: function construct() {
      qx.ui.table.model.Remote.constructor.call(this);
      this.__P_19_0 = false;
      this.setColumns(["Id", "Text"], ["id", "text"]);
    },
    members: {
      __P_19_0: null,
      __P_19_1: false,
      // overloaded - called whenever the table requests the row count
      _loadRowCount: function _loadRowCount() {
        this.__P_19_2();
        if (this.__P_19_1) {
          return;
        }
        if (this.__P_19_0) {
          this.__P_19_3();
        } else {
          this.__P_19_4();
        }
      },
      _loadRowData: function _loadRowData(firstRow, lastRow) {
        this.__P_19_2();
        if (this.__P_19_1) {
          return;
        }
        if (this.__P_19_0) {
          this.__P_19_5(firstRow, lastRow);
        } else {
          this.__P_19_6(firstRow, lastRow);
        }
      },
      // Server communication
      __P_19_2: function __P_19_2() {
        if (this.__P_19_1 || this.__P_19_0 !== null) {
          return;
        }
        this.__P_19_1 = true;
        this.__P_19_7("method=checkphp", function (data) {
          this.__P_19_1 = false;
          this.__P_19_0 = data == "WTF PHP";
          this._loadRowCount();
        });
      },
      __P_19_3: function __P_19_3() {
        var param = "method=getRowCount";
        this.__P_19_7(param, function (data) {
          this._onRowCountLoaded(parseInt(data));
        });
      },
      __P_19_5: function __P_19_5(firstRow, lastRow) {
        var param = "method=getRowData&start=" + firstRow + "&end=" + lastRow;
        this.__P_19_7(param, function (data) {
          this._onRowDataLoaded(qx.lang.Json.parse(data));
        });
      },
      __P_19_7: function __P_19_7(param, callback) {
        var req = new qx.io.request.Xhr();
        var url = qx.util.ResourceManager.getInstance().toUri("demobrowser/backend/remote_table.php");
        req.setUrl(url + "?" + param);
        req.addListener("success", function () {
          callback.call(this, req.getResponseText());
        }, this);
        req.send();
      },
      // Fake the server localy
      __P_19_4: function __P_19_4() {
        var self = this;
        window.setTimeout(function () {
          self._onRowCountLoaded(1000000);
        }, 0);
      },
      __P_19_6: function __P_19_6(firstRow, lastRow) {
        var self = this;
        window.setTimeout(function () {
          var data = [];
          for (var i = firstRow; i <= lastRow; i++) {
            data.push({
              id: i,
              text: "Hello " + i + " Generated on:" + new Date()
            });
          }
          self._onRowDataLoaded(data);
        }, 0);
      }
    }
  });
  qxl.demobrowser.demo.table.RemoteTableModel.$$dbClassInfo = $$dbClassInfo;
})();

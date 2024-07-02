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
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     Copyright: Public Domain
  ************************************************************************ */

  /**
   * Simulation Remote Table Model with search
   */
  qx.Class.define("combotable.demo.RemoteTableModel", {
    extend: qx.ui.table.model.Remote,
    /**
     * Create an instance of Rpc.
     */
    construct: function construct() {
      qx.ui.table.model.Remote.constructor.call(this);
      this.__P_4_0 = "All the leaves are brown And the sky is grey I went for a walk On a winter's day I'd be safe and warm If I was in California dreamin On such a winter's day I stopped into a church stopped into a church I passed along the way passed along the way You know, I got down on my knees got down on my knees And I pretend to pray I pretend to pray Oh, the preacher likes the cold preacher likes the cold He knows I'm gonna stay knows I'm gonna stay Oh, California dreamin' California dreamin' On such a winter's day All the leaves are brown the leaves are brown And the sky is grey and the sky is grey".split(' ');
      this.__P_4_1 = this.__P_4_0;
    },
    properties: {
      searchString: {
        init: null,
        apply: '_applySearchString',
        nullable: true
      }
    },
    members: {
      __P_4_0: null,
      __P_4_1: null,
      _applySearchString: function _applySearchString(newString, oldString) {
        if (oldString == newString) {
          return;
        }
        this.reloadData();
      },
      // overloaded - called whenever the table requests the row count
      _loadRowCount: function _loadRowCount() {
        var rows = 5000000;
        var search = this.getSearchString();
        if (search) {
          var len = search.length;
          var r = Math.round(Math.pow(0.3, len - 10));
          if (r < 0) {
            r = 0;
          }
          if (r > rows) {
            r = rows;
          }
          rows = r;
        }
        ;
        this._onRowCountLoaded(rows);
      },
      _loadRowData: function _loadRowData(firstRow, lastRow) {
        var data = [];
        var t = this.__P_4_0;
        var l = t.length;
        var id0 = this.getColumnId(0);
        var id1 = this.getColumnId(1);
        var search = this.getSearchString();
        search = search ? search + ' ' : '';
        var i = firstRow;
        var rows = lastRow - firstRow + 1;
        while (data.length < rows) {
          var row = {};
          row[id0] = i++;
          row[id1] = t[Math.floor(Math.random() * l)] + ' ' + search + t[Math.floor(Math.random() * l)] + ' ' + t[Math.floor(Math.random() * l)];
          data.push(row);
        }
        this._onRowDataLoaded(data);
      }
    }
  });
  combotable.demo.RemoteTableModel.$$dbClassInfo = $$dbClassInfo;
})();

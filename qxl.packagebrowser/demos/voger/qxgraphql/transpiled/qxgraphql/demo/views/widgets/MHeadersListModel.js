(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Mixin.define("qxgraphql.demo.views.widgets.MHeadersListModel", {
    members: {
      // returns true if the `key` property is null or 
      // empty string
      isEmpty: function isEmpty() {
        var falseys = [null, ""];
        var key = this.getKey();
        var value = this.getValue();
        return falseys.includes(key) && falseys.includes(value);
      }
    }
  });
  qxgraphql.demo.views.widgets.MHeadersListModel.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MHeadersListModel.js.map?dt=1626060616358
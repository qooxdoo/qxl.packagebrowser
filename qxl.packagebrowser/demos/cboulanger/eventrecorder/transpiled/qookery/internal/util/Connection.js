(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.ObjectRegistry": {},
      "qx.data.SingleValueBinding": {},
      "qx.lang.String": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /*
  	Qookery - Declarative UI Building for Qooxdoo
  
  	Copyright (c) Ergobyte Informatics S.A., www.ergobyte.gr
  
  	Licensed under the Apache License, Version 2.0 (the "License");
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at
  
  		http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software
  	distributed under the License is distributed on an "AS IS" BASIS,
  	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  	See the License for the specific language governing permissions and
  	limitations under the License.
  */
  qx.Class.define("qookery.internal.util.Connection", {
    extend: Object,
    construct: function construct(editableComponent, propertyPath) {
      this.__P_30_0 = editableComponent;
      this.__P_30_1 = propertyPath;
    },
    members: {
      __P_30_0: null,
      __P_30_1: null,
      __P_30_2: null,
      connect: function connect(model) {
        this.disconnect();
        if (qx.core.ObjectRegistry.inShutDown) return;
        var editableComponent = this.__P_30_0;
        if (model == null || editableComponent == null) return;
        var bindingId = model.bind(this.__P_30_1, editableComponent, "value");

        this.__P_30_2 = function () {
          if (model.isDisposed()) return;
          qx.data.SingleValueBinding.removeBindingFromObject(model, bindingId);
        };
      },
      setModelValue: function setModelValue(model, value) {
        var segments = this.__P_30_1.split(".");

        for (var i = 0; i < segments.length - 1; i++) {
          model = model["get" + qx.lang.String.firstUp(segments[i])]();
          if (model == null) return;
        }

        model["set" + qx.lang.String.firstUp(segments[segments.length - 1])](value);
      },

      /**
       * Return the value of a connection's attribute, if available
       *
       * @param attributeName {String} name of wanted attribute
       *
       * @return {any} attribute value or second argument if <code>undefined</code>
       */
      getAttribute: function getAttribute(attributeName, defaultValue) {
        return defaultValue;
      },
      disconnect: function disconnect() {
        if (this.__P_30_2 == null) return;

        this.__P_30_2();

        this.__P_30_2 = null;
      },
      equals: function equals(other) {
        return other.__P_30_0 === this.__P_30_0 && other.__P_30_1 == this.__P_30_1;
      },
      __P_30_3: function __P_30_3(propertyChain) {
        return propertyChain.replace(/\[/g, ".[").split(".").filter(function (name) {
          return name !== "";
        });
      }
    }
  });
  qookery.internal.util.Connection.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Connection.js.map?dt=1626055591539
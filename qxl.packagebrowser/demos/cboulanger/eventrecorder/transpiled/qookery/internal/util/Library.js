(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.MLogging": {
        "require": true
      },
      "qookery.Qookery": {},
      "qx.lang.String": {},
      "qx.bom.request.Script": {},
      "qx.util.TimerManager": {}
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
  qx.Class.define("qookery.internal.util.Library", {
    extend: Object,
    include: [qx.core.MLogging],
    construct: function construct(name, resourceNames, dependencies, postLoadCallback) {
      this.__P_31_0 = name;
      this.__P_31_1 = resourceNames;
      this.__P_31_2 = dependencies;
      this.__P_31_3 = false;
      this.__P_31_4 = [];
      this.__P_31_5 = postLoadCallback;
    },
    members: {
      __P_31_0: null,
      __P_31_1: null,
      __P_31_2: null,
      __P_31_3: null,
      __P_31_4: null,
      __P_31_5: null,
      getName: function getName() {
        return this.__P_31_0;
      },
      addResource: function addResource(resourceName) {
        if (this.__P_31_3) throw new Error("Adding resource URIs to an already loaded library is not possible");

        this.__P_31_1.push(resourceName);
      },
      isLoaded: function isLoaded() {
        return this.__P_31_3;
      },
      load: function load(continuation, thisArg) {
        // If loaded, just call the continuation
        if (this.__P_31_3) {
          continuation.call(thisArg, null);
          return;
        } // Push continuation to the queue


        this.__P_31_4.push(continuation.bind(thisArg)); // If not the first continuation, return since loading has been already started


        var isLoading = this.__P_31_4.length !== 1;
        if (isLoading) return; // Start the library loading

        this.__P_31_6();
      },
      __P_31_6: function __P_31_6() {
        // In case there are dependencies, load them
        if (this.__P_31_2 != null && this.__P_31_2.length > 0) return this.__P_31_7(); // In case there are needed resources, load them

        if (this.__P_31_1 != null && this.__P_31_1.length > 0) return this.__P_31_8(); // Invoke the post-load continuation, if set

        if (this.__P_31_5 != null) try {
          var finished = this.__P_31_5(this.__P_31_9.bind(this));

          if (finished === false) // Callback requested to take over library loading sequence
            return;
        } catch (error) {
          this.__P_31_10(error);

          return;
        }

        this.__P_31_9();
      },
      __P_31_9: function __P_31_9() {
        // We are done loading, mark our success
        this.__P_31_3 = true;
        this.debug("Loaded", this.__P_31_0); // Invoke any waiting callbacks

        this.__P_31_10(null);
      },
      __P_31_7: function __P_31_7() {
        var libraryName = this.__P_31_2.shift();

        qookery.Qookery.getRegistry().loadLibrary(libraryName, function (error) {
          if (error != null) {
            this.__P_31_10(error);

            return;
          }

          this.__P_31_6();
        }, this);
      },
      __P_31_8: function __P_31_8() {
        var resourceSpecification = this.__P_31_1.shift(); // Create the request


        var resourceName = resourceSpecification,
            resourceType = null;
        var atSignPosition = resourceSpecification.indexOf("@");

        if (atSignPosition !== -1 && atSignPosition <= 3) {
          resourceType = resourceSpecification.substring(0, atSignPosition);
          resourceName = resourceSpecification.substring(atSignPosition + 1);
        } else if (qx.lang.String.endsWith(resourceName, ".js")) {
          resourceType = "js";
        } else if (qx.lang.String.endsWith(resourceName, ".css")) {
          resourceType = "css";
        }

        resourceName = resourceName.replace(/\$\{([\w:-]*)\}/g, function (match, optionName) {
          return qookery.Qookery.getOption(optionName);
        });
        var resourceLoader = qookery.Qookery.getService("qookery.IResourceLoader", true);
        var resourceUri = resourceLoader.resolveResourceUri(resourceName);

        switch (resourceType) {
          case "js":
            var scriptRequest = new qx.bom.request.Script();
            scriptRequest.onload = this.__P_31_6.bind(this);

            scriptRequest.onerror = function () {
              this.__P_31_1.unshift(resourceSpecification);

              this.__P_31_10(new Error("Error loading '" + resourceName + "'"));
            }.bind(this);

            scriptRequest.open("GET", resourceUri);
            scriptRequest.send();
            break;

          case "css":
            // Create a new link element and initialize it
            var linkElement = document.createElement("link");
            linkElement.type = "text/css";
            linkElement.rel = "stylesheet";
            linkElement.href = resourceUri; // Retrieve the HEAD element

            var headElement = document.getElementsByTagName("head")[0]; // Begin loading the stylesheet

            qx.util.TimerManager.getInstance().start(function () {
              headElement.appendChild(linkElement);

              this.__P_31_6();
            }, null, this);
            break;

          default:
            throw new Error("Library uses unsupported resource type");
        }
      },
      __P_31_10: function __P_31_10(error) {
        this.__P_31_4.forEach(function (continuation) {
          continuation(error);
        });

        this.__P_31_4 = [];
      }
    }
  });
  qookery.internal.util.Library.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Library.js.map?dt=1626055591583
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qxl.packagebrowser.Tree": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Thomas Herchenroeder (thron7)
       * Fabian Jakobs (fjakobs)
       * Christian Boulanger (cboulanger)
  
  ************************************************************************ */

  /**
   * @ignore(qx.$$appRoot)
   */
  qx.Class.define("qxl.packagebrowser.TreeDataHandler", {
    extend: qx.core.Object,
    construct: function construct(pkgData) {
      qx.core.Object.constructor.call(this);
      this.tmap = pkgData;
      this.ttree = this.__P_32_0(pkgData);
    },
    members: {
      tmap: null,
      ttree: null,
      __P_32_1: function __P_32_1(prop) {
        return function (a, b) {
          return a[prop].toLocaleLowerCase() < b[prop].toLocaleLowerCase() ? -1 : a[prop].toLocaleLowerCase() > b[prop].toLocaleLowerCase() ? 1 : 0;
        };
      },

      /**
       * create a new tree path from path, under parent node
       * @param parent
       * @param path
       * @param types
       */
      __P_32_2: function __P_32_2(parent, path, types) {
        var head = path[0];
        var nextRoot = null; // check children

        var children = parent.getChildren();

        for (var i = 0; i < children.length; i++) {
          if (children[i].label === head) {
            nextRoot = children[i];
            break;
          }
        } // else create new


        if (nextRoot === null) {
          nextRoot = new qxl.packagebrowser.Tree(head);
          nextRoot.type = types[0];
          parent.add(nextRoot);
        }

        if (path.length === 1) {
          // we're at the end of the path
          return nextRoot;
        } // recurse with the new root and the rest of path. If no next type, use current


        var nextType = types.slice(1);
        return this.__P_32_2(nextRoot, path.slice(1), nextType.length ? nextType : types[0]);
      },
      __P_32_0: function __P_32_0(pkgData) {
        var _this = this;

        var root = new qxl.packagebrowser.Tree("All");
        pkgData.sort(this.__P_32_1("uri"));
        var types = ["owner", "repository", "folder"];

        var _iterator = _createForOfIteratorHelper(pkgData),
            _step;

        try {
          var _loop = function _loop() {
            var elem = _step.value;
            var path = elem.uri.split("/");

            var parent = _this.__P_32_2(root, path, types);

            switch (elem.type) {
              case "library":
                {
                  var lib = new qxl.packagebrowser.Tree("Library Info");
                  lib.type = "library";
                  lib.manifest = elem.manifest;
                  lib.uri = elem.uri;
                  lib.latestVersion = elem.latestVersion;
                  lib.latestCompatible = elem.latestCompatible;
                  parent.add(lib);
                  var readmeNode = new qxl.packagebrowser.Tree("Readme");
                  readmeNode.type = "readme";
                  readmeNode.uri = elem.uri;
                  parent.add(readmeNode);
                  var applications = elem.data && elem.data.applications;

                  if (Array.isArray(applications) && applications.length > 0) {
                    var demosNode = new qxl.packagebrowser.Tree("Demos");
                    demosNode.type = "demo";
                    parent.add(demosNode);
                    applications.forEach(function (app) {
                      if (app.publish !== false) {
                        var appNode = new qxl.packagebrowser.Tree("".concat(app.title || app.name));
                        appNode.data = app;
                        appNode.type = "demo";
                        appNode.url = "".concat(qx.$$appRoot, "/demos/").concat(elem.uri, "/").concat(app.name);
                        demosNode.add(appNode);
                      }
                    });
                  }

                  var releasesNode = new qxl.packagebrowser.Tree("Releases");
                  releasesNode.type = "releases";
                  releasesNode.uri = elem.uri;
                  releasesNode.latestVersion = elem.latestVersion;
                  releasesNode.latestCompatible = elem.latestCompatible;
                  parent.add(releasesNode);

                  if (elem.data && elem.data.problems) {
                    var problemsNode = new qxl.packagebrowser.Tree("Problems");
                    problemsNode.manifest = elem.manifest;
                    problemsNode.type = "problems";
                    problemsNode.data = elem.data;
                    problemsNode.uri = elem.uri;
                    parent.add(problemsNode); //parent.data = {problems: true};
                  }

                  break;
                }

              case "repository":
                {
                  //
                  break;
                }
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return root;
      },
      getPath: function getPath(node) {
        if (!node) {
          return "";
        }

        var path = node.pwd();
        path.shift(); // remove leading 'All'

        path = path.concat(node.label);
        return path;
      },

      /**
       * return the full name of a test from its model node
       *
       * @param node {Tree} a model node
       * @return {var} fullName {String} like "qxl.packagebrowser.test.Class.testEmptyClass"
       */
      getFullName: function getFullName(node) {
        if (!node) {
          return "";
        }

        var path = this.getPath(node);

        if (node.type && node.type === "library") {
          path = path.concat(node.label);
        }

        return path.join(".");
      }
    },
    environment: {
      "qxl.packagebrowser.withTests": false
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.tmap = null;

      this._disposeObjects("ttree");
    }
  });
  qxl.packagebrowser.TreeDataHandler.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TreeDataHandler.js.map?dt=1626055237063
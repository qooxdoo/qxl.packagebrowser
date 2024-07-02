(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qxl.demobrowser.Tree": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "qxl.demobrowser.withTests": {}
      }
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
  
  ************************************************************************ */

  qx.Class.define("qxl.demobrowser.TreeDataHandler", {
    extend: qx.core.Object,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct(testRep) {
      qx.core.Object.constructor.call(this);
      this.tmap = testRep;
      this.ttree = this.__P_5_0(testRep);
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * TODOC
       *
       * @param testRep {var} TODOC
       * @return {var} TODOC
       * @throws {Error} TODOC
       */
      __P_5_0: function __P_5_0(testRep) {
        var tmap = testRep;

        /**
         * @param root
         * @param el
         */
        function insert(root, el) {
          var mclass = el.classname;
          var path = mclass.split(".");

          /**
           * create a new tree path from path, under parent node
           * @param parent
           * @param path
           */
          function createPath(parent, path) {
            if (!path.length) {
              return parent;
            }
            var head = path[0];
            var pathrest = path.slice(1, path.length);
            var target = null;
            var nextRoot = null;

            // check children
            var children = parent.getChildren();
            for (var i = 0; i < children.length; i++) {
              if (children[i].label == head) {
                nextRoot = children[i];
                break;
              }
            }

            // else create new
            if (nextRoot === null) {
              nextRoot = new qxl.demobrowser.Tree(head);
              parent.add(nextRoot);
            }

            // and recurse with the new root and the rest of path
            target = createPath(nextRoot, pathrest);
            return target;
          }
          var target = createPath(root, path);
          if (!target) {
            throw new Error("No target to insert tests");
          }
          that.readTree(el, target);
        }

        /**
         * @param a
         * @param b
         */
        function topsort(a, b) {
          return a.classname < b.classname ? -1 : a.classname > b.classname ? 1 : 0;
        }
        var root = new qxl.demobrowser.Tree("All");
        var that = this;
        tmap.sort(topsort);
        for (var i = 0; i < tmap.length; i++) {
          insert(root, tmap[i]);
        }
        return root;
      },
      /**
       * recursive struct reader
       *
       * @param struct {var} TODOC
       * @param node {Node} TODOC
       * @return {var} TODOC
       */
      // struct has single root node!
      readTree: function readTree(struct, node) {
        // current node
        var tree = arguments[1] || new qxl.demobrowser.Tree(struct.classname);

        // current test leafs
        /**
         * @param a
         * @param b
         */
        function mysort(a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        }
        if (struct.tests) {
          struct.tests.sort(mysort);
          for (var j = 0; j < struct.tests.length; j++) {
            var tags = struct.tests[j].tags;
            var ignoreNode = false;
            if (!qx.core.Environment.get("qxl.demobrowser.withTests")) {
              for (var k = 0; k < tags.length; k++) {
                if (tags[k] === "test") {
                  ignoreNode = true;
                  break;
                }
              }
            }
            if (!ignoreNode) {
              var _node = new qxl.demobrowser.Tree(struct.tests[j].name);
              _node.tags = struct.tests[j].tags;
              _node.type = "test"; // tests are leaf nodes
              _node.desc = struct.tests[j].desc;
              _node.manifest = struct.tests[j].manifest;
              tree.add(_node);
            }
          }
        }

        // current children
        if (struct.children && struct.children.length) {
          for (var _j = 0; _j < struct.children.length; _j++) {
            var subTree = this.readTree(struct.children[_j]);
            tree.add(subTree);
          }
        }
        return tree;
      },
      /**
       * TODOC
       *
       * @return {var} TODOC
       */
      getRoot: function getRoot() {
        if (!this.Root) {
          var root = {
            classname: "",
            tests: []
          };
          var tmap = this.tmap;
          for (var i = 0; i < this.tmap.length; i++) {
            if (root.classname.length > tmap[i].classname.length) {
              root = tmap[i];
            }
          }
          this.Root = root;
        }
        return this.Root.classname;
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var} TODOC
       */
      getChilds: function getChilds(node) {
        var cldList = [];
        var tmap = this.tmap;
        var nodep = "^" + node + "\\.[^\\.]+$";
        var pat = new RegExp(nodep);
        for (var i = 0; i < tmap.length; i++) {
          if (tmap[i].classname.match(pat)) {
            cldList.push(tmap[i]);
          }
        }
        return cldList;
      },
      /*
       * get the tests directly contained in a class
       */
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var | Array} TODOC
       */
      getTests: function getTests(node) {
        // node is a string
        var tmap = this.tmap;
        for (var i = 0; i < tmap.length; i++) {
          if (tmap[i].classname == node) {
            return tmap[i].tests;
          }
        }
        return [];
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var} TODOC
       */
      getPath: function getPath(node) {
        // node is a modelNode
        if (!node) {
          return "";
        }
        var path = node.pwd();
        path.shift(); // remove leading 'All'

        // var tclass = path.join(".")+"."+node.label;
        if (this.isClass(node)) {
          path = path.concat(node.label);
        }
        return path;
      },
      /**
       * @param node {String} a class or test name
       * @return {var | Array} TODOC
       */
      getChildren: function getChildren(node) {
        if (node == "All") {
          var tmap = this.tmap;
          var classes = [];
          for (var i = 0; i < tmap.length; i++) {
            classes.push(tmap[i].classname);
          }
          return classes;
        } else if (this.isClass(node)) {
          return this.getTests(node);
        }
        return [];
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {boolean} TODOC
       */
      isClass: function isClass(node) {
        if (node.type && node.type == "test") {
          return false;
        }
        return true;
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {boolean} TODOC
       */
      hasTests: function hasTests(node) {
        if (!this.isClass(node)) {
          return false;
        }
        var children = node.getChildren();
        for (var i = 0; i < children.length; i++) {
          if (children[i].type && children[i].type == "test") {
            return true;
          }
        }
        return false;
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var} TODOC
       * @lint ignoreUnused(tests)
       * @ignore(classloop) Workaround for bug #2221
       */
      classFromTest: function classFromTest(node) {
        var classname = "";
        /* eslint-disable-next-line no-labels */
        classloop: for (var i = 0; i < this.tmap.length; i++) {
          for (var j = 0; j < this.tmap[i].tests.length; j++) {
            if (this.tmap[i].tests[j] == node) {
              classname = this.tmap[i].classname;
              /* eslint-disable-next-line no-labels */
              break classloop;
            }
          }
        }
        return classname;
      },
      /**
       * return the full name of a test from its model node
       *
       * @param node {Tree} a model node
       * @return {var} fullName {String} like "qxl.demobrowser.test.Class.testEmptyClass"
       */
      getFullName: function getFullName(node) {
        if (!node) {
          return "";
        }
        var path = this.getPath(node);
        if (node.type && node.type == "test") {
          path = path.concat(node.label);
        }
        return path.join(".");
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var} TODOC
       */
      getPreviousNode: function getPreviousNode(node) {
        var prevNode = node.getPrevSibling();
        return prevNode;
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {var} TODOC
       */
      getNextNode: function getNextNode(node) {
        var nextNode = node.getNextSibling();
        return nextNode;
      },
      /**
       * TODOC
       *
       * @param node {Node} TODOC
       * @return {int | Number} TODOC
       */
      testCount: function testCount(node) {
        if (node.type && node.type == "test") {
          return 1;
        }
        // enumerate recursively
        var num = 0;
        var iter = node.getIterator("depth");
        var curr;
        while (curr = iter()) {
          if (curr.type && curr.type == "test") {
            num++;
          }
        }
        return num;
      }
    },
    environment: {
      "qxl.demobrowser.withTests": false
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
  qxl.demobrowser.TreeDataHandler.$$dbClassInfo = $$dbClassInfo;
})();

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

qx.Class.define("qxl.packagebrowser.TreeDataHandler", {
  extend: qx.core.Object,

  construct: function (pkgData) {
    this.base(arguments);

    this.tmap = pkgData;
    this.ttree = this.__readPkgData(pkgData);
  },

  members: {

    tmap: null,
    ttree: null,

    __makeSorter(prop) {
      return (a, b) => {
        return (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
      };
    },

    /**
     * create a new tree path from path, under parent node
     */
    __createPath(parent, path, types) {
      var head = path[0];
      var nextRoot = null;

      // check children
      var children = parent.getChildren();

      for (var i = 0; i < children.length; i++) {
        if (children[i].label === head) {
          nextRoot = children[i];
          break;
        }
      }

      // else create new
      if (nextRoot == null) {
        nextRoot = new qxl.packagebrowser.Tree(head);
        nextRoot.type = types[0];
        parent.add(nextRoot);
      }

      if (path.length === 1) {
        // we're at the end of the path
        return nextRoot;
      }

      // recurse with the new root and the rest of path. If no next type, use current
      let nextType = types.slice(1);
      return this.__createPath(nextRoot, path.slice(1), nextType.length ? nextType : types[0]);
    },

    __readPkgData: function (pkgData) {
      var root = new qxl.packagebrowser.Tree("All");
      pkgData.sort(this.__makeSorter("uri"));
      const types = ["owner","repository","folder"];

      for (let elem of pkgData) {
        let path = elem.uri.split("/");
        let parent = this.__createPath(root, path, types);
        if (elem.type === "library") {
          let lib = new qxl.packagebrowser.Tree(elem.name);
          lib.type = "library";
          lib.info = elem.info;
          parent.add(lib);

          if (elem.info.homepage) {
            let homepageNode = new qxl.packagebrowser.Tree("Homepage");
            homepageNode.type = "homepage";
            parent.add(homepageNode);
          }
        }
      }
      return root;
    },

    getPath: function (node) {
      if (!node) {
        return "";
      }

      var path = node.pwd();
      path.shift();  // remove leading 'All'
      path = path.concat(node.label);
      return path;
    },

    /**
     * return the full name of a test from its model node
     *
     * @param node {Tree} a model node
     * @return {var} fullName {String} like "qxl.packagebrowser.test.Class.testEmptyClass"
     */
    getFullName: function (node)  // node is a tree node
    {
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

  destruct: function () {
    this.tmap = null;
    this._disposeObjects("ttree");
  }
});

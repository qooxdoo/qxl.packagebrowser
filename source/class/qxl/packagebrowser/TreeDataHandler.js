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

  construct: function (pkgData) {
    this.base(arguments);

    this.tmap = pkgData;
    this.ttree = this.__readPkgData(pkgData);
  },

  members: {

    tmap: null, ttree: null,

    __makeSorter(prop) {
      return (a, b) => (a[prop].toLocaleLowerCase() < b[prop].toLocaleLowerCase()) ? -1 : (a[prop].toLocaleLowerCase() > b[prop].toLocaleLowerCase()) ? 1 : 0;
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
      if (nextRoot === null) {
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
      const types = ["owner", "repository", "folder"];

      for (let elem of pkgData) {
        let path = elem.uri.split("/");
        let parent = this.__createPath(root, path, types);
        switch (elem.type) {
          case "library": {
            let lib = new qxl.packagebrowser.Tree("Library Info");
            lib.type = "library";
            lib.manifest = elem.manifest;
            lib.uri = elem.uri;
            parent.add(lib);
            let homepage = elem.manifest.info.homepage;
            if (homepage) {
              let homepageNode = new qxl.packagebrowser.Tree("Homepage");
              homepageNode.type = "homepage";
              homepageNode.url = homepage;
              parent.add(homepageNode);
            }
            let sourceCodeNode = new qxl.packagebrowser.Tree("Source code");
            sourceCodeNode.type = "sourcecode";
            sourceCodeNode.url = `https://github.com/${elem.uri}`;
            parent.add(sourceCodeNode);
            let readmeNode = new qxl.packagebrowser.Tree("Readme");
            readmeNode.type = "readme";
            readmeNode.url = `https://api.github.com/repos/${elem.uri}/readme`;
            parent.add(readmeNode);
            let applications = elem.data && elem.data.applications;
            if (Array.isArray(applications) && applications.length > 0) {
              let demosNode = new qxl.packagebrowser.Tree("Demos");
              demosNode.type = "demo";
              demosNode.data = elem.data;
              parent.add(demosNode);
              applications.forEach(app => {
                if (app.publish !== false) {
                  let appNode = new qxl.packagebrowser.Tree(`${app.title || app.name}`);
                  appNode.data = app;
                  appNode.type = "demo";
                  appNode.url = `${qx.$$appRoot}/demos/${elem.uri}/${app.name}`;
                  demosNode.add(appNode);
                }
              });
            }
            if (elem.data && elem.data.problems) {
              let problemsNode = new qxl.packagebrowser.Tree("Problems");
              problemsNode.type = "problems";
              problemsNode.data = elem.data;
              parent.add(problemsNode);
              //parent.data = {problems: true};
            }
            break;
          }
          case "repository": {
            //
            break;
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
    getFullName: function (node) {
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

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
     * Christian Boulanger (cboulanger)

************************************************************************ */

qx.Class.define("qxl.packagebrowser.Tree", {
  extend: qx.core.Object,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct() {
    super();

    this.label = arguments[0] || "";
    this.children = [];
    this.parent = null;
    this.manifest = null;
    this.url = null;
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
     * @return {Array | var} TODOC
     */
    pwd() {
      if (this.parent === null) {
        return [];
      }
      return this.parent.pwd().concat(this.parent.label);
    },

    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    hasChildren() {
      return this.children.length;
    },

    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getChildren() {
      return this.children;
    },

    /**
     * TODOC
     *
     * @param fun {var} TODOC
     * @param args {var} TODOC
     * @return {void}
     */
    map(fun, args) {
      var style = "depth";
      var curr = this;

      // apply to self
      var iter = this.getIterator(style);

      // noinspection JSAssignmentUsedAsCondition
      while ((curr = iter())) {
        // eslint-disable-line no-cond-assign
        fun.apply(curr, args);
      }
    },

    /**
     * returns an iterator function for the tree from this.
     * (implemented with Agenda Search)
     *
     * @param style {String} "depth"|"breadth" - traversal style
     * @return {Function} iterator {Function}
     */
    getIterator(style) {
      var agenda = [this];
      var depthfirst = style === "depth" ? 1 : 0;

      /**
       *
       */
      function f() {
        var curr;

        if (agenda.length) {
          curr = agenda.shift();
          var children = curr.getChildren();

          if (children.length) {
            if (depthfirst) {
              agenda = children.concat(agenda); // depth-first
            } else {
              agenda = agenda.concat(children); // breadth-first
            }
          }
        } else {
          curr = null;
        }

        return curr;
      }

      // f()
      return f;
    },

    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getPrevSibling() {
      return this.getSibling(-1);
    },

    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getNextSibling() {
      return this.getSibling(1);
    },

    /**
     * TODOC
     *
     * @param offset {var} TODOC
     * @return {var} TODOC
     */
    getSibling(offset) {
      var sibs = this.parent.getChildren();
      var myIndex = this.self(arguments).indexOf(sibs, this);
      var sibIndex = myIndex + offset;
      if (sibs[sibIndex]) {
        return sibs[sibIndex];
      }
      return null;
    },

    /**
     * TODOC
     *
     * @param node {Node} TODOC
     * @return {void}
     */
    add(node) {
      this.children.push(node);
      node.parent = this;
    },
  },

  statics: {
    // compute the index of an array element
    /**
     * TODOC
     *
     * @param arr {Array} TODOC
     * @param obj {Object} TODOC
     * @return {var} TODOC
     */
    indexOf(arr, obj) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
          return i;
        }
      }
      return -1;
    },
  },

  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct() {
    this._disposeObjects("widgetLinkFull", "widgetLinkFlat", "parent");
    this._disposeArray("children");
    this._disposeArray("data");
  },
});

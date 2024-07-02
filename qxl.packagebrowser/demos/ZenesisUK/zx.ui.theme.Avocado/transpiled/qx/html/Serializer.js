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
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2019-22 Zenesis Ltd, https://www.zenesis.com
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       John Spackman (john.spackman@zenesis.com, @johnspackman)
  
  ************************************************************************ */

  /**
   * Controls serializing the VDOM in `qx.html.*` into an HTML string.
   *
   * The principal task here is to write the HTML with QxObjectIds, in a form which allows
   * the DOM that the browser parsed to be connected to the instances of `qx.html.Node`
   * that are created by the Javascript on the client.
   *
   * In other words, the DOM which is created by this HTML will be passed to `qx.html.Element.useNode`
   * on the client.
   */
  qx.Class.define("qx.html.Serializer", {
    extend: qx.core.Object,
    /**
     * Constructor
     */
    construct() {
      qx.core.Object.constructor.call(this);
      this.__P_190_0 = "";
      this.__P_190_1 = [];
      this.__P_190_2 = [];
    },
    properties: {
      /** Whether to pretty print (default is whatever qx.cdebug is set to) */
      prettyPrint: {
        init: false,
        check: "Boolean",
        nullable: false
      }
    },
    members: {
      /** @type{String} the HTML being built up */
      __P_190_0: null,
      /** @type{qx.html.Node[]} the stack of objects being written */
      __P_190_1: null,
      /**
       * For each tag on the stack being emitted, we track the data in an object, nominally called TagData
       *
       * @typedef {Object} TagData
       * @property {Integer} indent how far this node is indented
       * @property {String} tagName the name of the tag
       * @property {Dictionary} attributes the attributes to set on the tag
       * @property {Boolean?} openTagWritten whether the open tag has been written
       * @property {Boolean?} closeTagWritten whether the close tag has been written
       */

      /** @type{TagData[]} the stack of elements being written */
      __P_190_2: null,
      /** @type{String?} the current tag name */
      __P_190_3: null,
      /**
       * Writes to the output
       * @param  {var[]} args array of values to convert to strings and output
       */
      write(...args) {
        this.__P_190_0 += args.join("");
      },
      /**
       * Called when an open tag needs to be emitted
       *
       * @param {String} tagName
       */
      openTag(tagName) {
        this.__P_190_4();
        this.__P_190_2.push({
          indent: this.__P_190_2.length,
          tagName: tagName.toLowerCase(),
          attributes: {}
        });
      },
      /**
       * Called to add plain text into the output
       * @param {String?} text
       */
      rawTextInBody(text) {
        if (text !== null && text !== undefined) {
          this.__P_190_4();
          this.write(text);
        }
      },
      /**
       * Called to close the current tag
       */
      closeTag() {
        this.__P_190_4(true);
        this.__P_190_2.pop();
      },
      /**
       * Adds an attribute to the current tag; cannot be done if body or children have been output
       *
       * @param {String} key the attribute name
       * @param {String?} value teh attribite value, if null the attribute will be deleted
       */
      setAttribute(key, value) {
        const tagData = this.__P_190_5();
        if (tagData.openTagWritten) {
          throw new Error("Cannot modify attributes after the opening tag has been written");
        }
        tagData.attributes[key] = value;
      },
      /**
       * Looks for the current tag
       *
       * @returns {TagData}
       */
      __P_190_5() {
        return this.__P_190_2[this.__P_190_2.length - 1];
      },
      /**
       * Flushes the tag into the output.  This will prevent further attributes etc from being emitted
       * and if `closeTag` is true then the tag is closed.  Handles self closing tags and indentation
       *
       * @param {Boolean} closeTag if we are flushing because the tag is being closed
       */
      __P_190_4(closeTag) {
        const tagData = this.__P_190_5();
        if (!tagData) {
          return;
        }
        const indent = () => {
          if (this.isPrettyPrint()) {
            for (let i = 0; i < tagData.indent; i++) {
              this.write("  ");
            }
          }
        };
        if (!tagData.openTagWritten) {
          indent();
          const tmp = ["<" + tagData.tagName];
          for (const key in tagData.attributes) {
            const value = tagData.attributes[key];
            if (value !== null && value !== undefined) {
              tmp.push(`${key}=${value}`);
            }
          }
          this.write(tmp.join(" "));
          if (closeTag) {
            if (qx.html.Serializer.__P_190_6[tagData.tagName]) {
              this.write("/>");
            } else {
              this.write("></" + tagData.tagName + ">");
            }
            tagData.openTagWritten = true;
            tagData.closeTagWritten = true;
            if (this.isPrettyPrint()) {
              this.write("\n");
            }
          } else {
            this.write(">");
            if (this.isPrettyPrint()) {
              this.write("\n");
            }
            tagData.openTagWritten = true;
          }
        } else if (closeTag && !tagData.closeTagWritten) {
          indent();
          this.write(`</${tagData.tagName}>`);
          if (this.isPrettyPrint()) {
            this.write("\n");
          }
          tagData.closeTagWritten = true;
        }
      },
      /**
       * Erases all output
       */
      clear() {
        this.__P_190_0 = "";
      },
      /**
       * Provides the accumulated output
       *
       * @returns {String}
       */
      getOutput() {
        return this.__P_190_0;
      },
      /**
       * Pushes the QxObject onto the stack
       *
       * @param {qx.core.Object} obj
       */
      pushQxObject(obj) {
        this.__P_190_1.push(obj);
      },
      /**
       * Pops the topmost QxObject from the stack
       */
      popQxObject() {
        this.__P_190_1.pop();
      },
      /**
       * Peeks the QxObject stack
       *
       * @returns {qx.core.Object}
       */
      peekQxObject() {
        return this.__P_190_1[this.__P_190_1.length - 1] || null;
      },
      /**
       * Calculates a Qx Object ID which is either relative to the root most element,
       * or is relative to it's owner.  This tries to be as concise as possible so that
       * the output HTML is as readable as possible
       *
       * The return is null if the object does not have an ID
       *
       * @param {qx.html.Element} target
       * @returns {String?}
       */
      getQxObjectIdFor(target) {
        if (!target.getQxObjectId()) {
          return null;
        }

        // If we can make the ID relative to it's parent, then just use the shorter version.  This is
        //  not strictly necessary because we could use absolute paths everywhere, but it's a lot
        //  easier to read and understand, and consumes less bytes in the output
        const stackTop = this.peekQxObject();
        if (stackTop === target) {
          const secondTop = this.__P_190_1.slice(-2)[0] || null;
          if (secondTop === target.getQxOwner()) {
            return target.getQxObjectId();
          }
        }

        // Calculate the relative path between the stack top and the target object
        const ids = [target.getQxObjectId()];
        const stackFirst = this.__P_190_1[0];
        let tmp = target;
        do {
          const owner = tmp.getQxOwner();
          if (this.__P_190_1.indexOf(owner) < 0) {
            break;
          } else if (owner === stackFirst) {
            ids.unshift("..");
          } else {
            ids.unshift(tmp.getQxObjectId());
          }
        } while (tmp = tmp.getQxOwner());
        return ids.join("/");
      }
    },
    statics: {
      /** @type{Dictionary<String,Boolean>} list of self closing tags, in lowercase */
      __P_190_6: null
    },
    /**
     * Populates statics
     */
    defer(statics) {
      statics.__P_190_6 = {};
      ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"].forEach(function (tagName) {
        statics.__P_190_6[tagName] = true;
      });
    }
  });
  qx.html.Serializer.$$dbClassInfo = $$dbClassInfo;
})();

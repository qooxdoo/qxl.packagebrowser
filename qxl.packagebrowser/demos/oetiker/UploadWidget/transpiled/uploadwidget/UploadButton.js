(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Input": {},
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "usage": "dynamic",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.Button": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Browser": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.html.Element": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "construct": true,
          "className": "qx.bom.client.Browser"
        },
        "engine.name": {
          "load": true,
          "className": "qx.bom.client.Engine"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007 Visionet GmbH, http://www.visionet.de
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dietrich Streifert (level420)
     
     Contributors:
       * Petr Kobalicek (e666e)
       * Tobi Oetiker (oetiker)
  
  ************************************************************************ */

  /*
    The 'change' event on the input field requires that this handler be available:
  */

  /**
   * @use(qx.event.handler.Input)
   */

  /**
   * An upload button which allows selection of a file through the browser fileselector.
   *
   */
  qx.Class.define("uploadwidget.UploadButton", {
    extend: qx.ui.form.Button,
    // --------------------------------------------------------------------------
    // [Constructor]
    // --------------------------------------------------------------------------

    /**
     * @param fieldName {String} upload field name
     * @param label {String} button label
     * @param icon {String} icon path
     * @param command {Command} command instance to connect with
     */
    construct: function construct(fieldName, label, icon, command) {
      qx.ui.form.Button.constructor.call(this, label, icon, command);
      this.__P_6_0 = this._createInput();

      if (fieldName) {
        this.setFieldName(fieldName);
      }

      this.addListenerOnce('appear', function () {
        this.getContentElement().addAt(this.__P_6_0, 0);
      }, this); // Fix for bug #3027

      if (qx.core.Environment.get('browser.name') == 'opera') {
        this.setSelectable(true);
      }
    },
    // --------------------------------------------------------------------------
    // [Properties]
    // --------------------------------------------------------------------------
    events: {
      changeFileName: 'qx.event.type.Data'
    },
    properties: {
      /**
       * The field name which is assigned to the form
       */
      fieldName: {
        check: "String",
        init: "",
        apply: "_applyFieldName"
      },

      /**
       * The value which is assigned to the form
       */
      fileName: {
        check: "String",
        init: "",
        apply: "_applyFileName"
      },

      /**
       * the size of the selected File. This may not work on all browsers. It does work
       * on FireFox and Chrome at least. So be prepared to get a 'Null' response.
       */
      fileSize: {
        check: "Integer",
        nullable: true,
        init: null
      }
    },
    // --------------------------------------------------------------------------
    // [Members]
    // --------------------------------------------------------------------------
    members: {
      __P_6_1: false,
      __P_6_2: null,
      __P_6_0: null,
      getInputElement: function getInputElement() {
        return this.__P_6_0;
      },
      // overridden
      capture: qx.core.Environment.select("engine.name", {
        "mshtml": function mshtml() {
          if (this._onPointerUp) {
            this.__P_6_3 = this.getApplicationRoot().addListenerOnce("pointerup", this._onPointerUp, this);
          } else {
            this.__P_6_3 = this.getApplicationRoot().addListenerOnce("mouseup", this._onMouseUp, this);
          }
        },
        "default": function _default() {
          uploadwidget.UploadButton.prototype.capture.base.call(this);
        }
      }),
      // overridden
      releaseCapture: qx.core.Environment.select("engine.name", {
        "mshtml": function mshtml() {},
        "default": function _default() {
          uploadwidget.UploadButton.prototype.releaseCapture.base.call(this);
        }
      }),
      // ------------------------------------------------------------------------
      // [Modifiers]
      // ------------------------------------------------------------------------

      /**
       * Modifies the name property of the hidden input type=file element.
       *
       * @param value {var} Current value
       * @param old {var} Previous value
       */
      _applyFieldName: function _applyFieldName(value, old) {
        this.__P_6_0.setAttribute("name", value, true);
      },

      /**
       * Modifies the value property of the hidden input type=file element.
       * Only an empty string is accepted for clearing out the value of the
       * selected file.
       * 
       * As a special case for IE the hidden input element is recreated because
       * setting the value is generally not allowed in IE.
       *
       * @param value {var} Current value
       * @param old {var} Previous value
       */
      _applyFileName: function _applyFileName(value, old) {
        if (value == old) {
          // can not change, but setting it to what it is is fine
          return;
        }

        if (this.__P_6_1) {
          this.__P_6_1 = false;
        } else {
          throw new Error("You can not change the value of a fileName field. Reset the form instead by using  the .clear() method!");
        }
      },

      /**
       * Apply the enabled property.
       *
       * @param value {Boolean} Current value
       * @param old {Boolean} Previous value
       */
      _applyEnabled: function _applyEnabled(value, old) {
        // just move it behind the button, do not actually
        // disable it since this would stop any upload in progress
        this.__P_6_0.setStyle('zIndex', value ? this.getZIndex() + 11 : -10000);

        return uploadwidget.UploadButton.prototype._applyEnabled.base.call(this, value, old);
      },

      /**
       * Create the widget child controls.
       */
      _createInput: function _createInput() {
        var control; // styling the input[type=file]
        // element is a bit tricky. Some browsers just ignore the normal
        // css style input. Firefox is especially tricky in this regard.
        // since we are providing our one look via the underlying qooxdoo
        // button anyway, all we have todo is position the ff upload
        // button over the button element. This is tricky in itself
        // as the ff upload button consists of a text and a button element
        // which are not css accessible themselfes. So the best we can do,
        // is align to the top right corner of the upload widget and set its
        // font so large that it will cover even realy large underlying buttons.

        var css = {
          position: "absolute",
          cursor: "pointer",
          hideFocus: "true",
          zIndex: this.getZIndex() + 11,
          opacity: 0,
          // align to the top right hand corner
          top: '0px',
          right: '0px',
          // ff ignores the width setting
          // pick a realy large font size to get
          // a huge button that covers
          // the area of the upload button
          fontSize: '400px'
        };

        if (qx.core.Environment.get('browser.name') == 'ie') {
          if (qx.core.Environment.get('browser.version') < 9) {
            css.filter = 'alpha(opacity=0)';
          }

          css.height = '100%';
          css.width = '200%';
        }

        control = new qx.html.Element('input', css, {
          type: 'file',
          name: ''
        });
        control.addListener("change", function (e) {
          var controlDom = control.getDomElement();
          this.__P_6_1 = true;

          if (controlDom.files && controlDom.files.length > 0) {
            this.setFileSize(typeof controlDom.files[0].fileSize != "undefined" ? controlDom.files[0].fileSize : controlDom.files[0].size);
          }

          var value = e.getData();
          this.setFileName(value);
          this.fireDataEvent('changeFileName', value);
        }, this);
        return control;
      }
    },
    destruct: function destruct() {
      this.__P_6_0 = null;

      if (this.__P_6_3) {
        this.getApplicationRoot().removeListenerById(this.__P_6_3);
      }
    }
  });
  uploadwidget.UploadButton.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=UploadButton.js.map?dt=1626056914914
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qxl.dialog.MDialog": {
        "require": true
      },
      "qx.core.Assert": {},
      "qxl.dialog.FormEmbed": {},
      "qx.ui.layout.Grow": {
        "construct": true
      },
      "qx.core.Init": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo dialog library
     https://github.com/qooxdoo/qxl.dialog
  
     Copyright:
       2007-2020 Christian Boulanger and others
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       *  Christian Boulanger (cboulanger)
       *  Derrell Lipman (derrell)
  
  ************************************************************************ */

  /**
   * Base class for dialog widgets
   * @ignore(qxl.dialog.alert)
   * @ignore(qxl.dialog.error)
   * @ignore(qxl.dialog.warning)
   * @ignore(qxl.dialog.confirm)
   * @ignore(qxl.dialog.prompt)
   * @ignore(qxl.dialog.form)
   * @ignore(qxl.dialog.select)
   * @ignore(Promise)
   *
   */
  qx.Class.define("qxl.dialog.DialogEmbed", {
    extend: qx.ui.container.Composite,
    include: [qxl.dialog.MDialog],
    statics: {
      /**
       * Returns a dialog instance by type
       * @param type {String} The dialog type to get
       * @return {qxl.dialog.Dialog}
       */
      getInstanceByType: qxl.dialog.MDialog.getInstanceByType,
      /**
       * Shortcut for form dialog. Cannot be reused.
       * @param message {String} The message to display
       * @param formData {Map} Map of form data. See {@link qxl.dialog.Form.formData}
       * @param callback {Function?} The callback function
       * @param context {Object?} The context to use with the callback function
       * @param caption {String?} The caption of the dialog window
       * @return {qxl.dialog.Form} The widget instance
       */
      form: function form(message, formData) {
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var caption = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
        qx.core.Assert.assertMap(formData);
        return new qxl.dialog.FormEmbed({
          message: message,
          formData: formData,
          allowCancel: true,
          callback: callback,
          context: context
        });
      }
    },
    /**
     * Constructor
     * @param properties {Map|String|undefined} If you supply a map, all the
     * corresponding properties will be set. If a string is given, use it
     * as to set the 'message' property.
     */
    construct: function construct(properties) {
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.Grow());
      this._createWidgetContent(properties);

      // set properties from constructor param
      if (_typeof(properties) == "object") {
        this.set(properties);
      } else if (typeof properties == "string") {
        this.setMessage(properties);
      }
      // escape key
      qx.core.Init.getApplication().getRoot().addListener("keyup", this._handleEscape, this);
    }
  });
  qxl.dialog.DialogEmbed.$$dbClassInfo = $$dbClassInfo;
})();

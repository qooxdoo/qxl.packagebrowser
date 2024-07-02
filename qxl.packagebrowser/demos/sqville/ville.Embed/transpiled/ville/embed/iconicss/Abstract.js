(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.basic.Label": {
        "construct": true,
        "require": true
      },
      "qx.ui.style.Stylesheet": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Chris Eskew (SQville) sqville@gmail.com
  ************************************************************************ */
  qx.Class.define("ville.embed.iconicss.Abstract", {
    type: "abstract",
    extend: qx.ui.basic.Label,
    construct: function construct() {
      qx.ui.basic.Label.constructor.call(this);
      this.setRich(true);

      //add CSS rules to global stylesheet
      var sheet = qx.ui.style.Stylesheet.getInstance();
      sheet.addRule("i[class*='icss-']", "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;");
      sheet.addRule("i[class*='icss-']:before", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
      sheet.addRule("i[class*='icss-']:after", "content: ''; border-width: 0; position: absolute; box-sizing: border-box;");
    },
    properties: {
      /** Font size of the widget */
      size: {
        check: "Integer",
        init: 1
      },
      /**
      * The tag to use for this element
      */
      cssClass: {
        check: "String",
        init: "",
        nullable: true,
        themeable: true,
        apply: "_applyCssClass"
      }
    },
    members: {
      _addIconTag: function _addIconTag(cssclass, size, color) {
        this.setValue("<i class=\"".concat(cssclass, "\" style=\"font-size:").concat(size, "em; color:").concat(color, ";\"></i>"));
      },
      // property apply
      _applyCssClass: function _applyCssClass(value, old) {
        this.getContentElement().removeClass(old);
        this.getContentElement().addClass(value);
      }
    }
  });
  ville.embed.iconicss.Abstract.$$dbClassInfo = $$dbClassInfo;
})();
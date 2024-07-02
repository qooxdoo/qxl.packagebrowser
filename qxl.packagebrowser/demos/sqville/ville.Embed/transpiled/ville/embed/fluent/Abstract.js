(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.embed.Html": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Chris Eskew (sqville) sqville@gmail.com
  ************************************************************************ */
  qx.Class.define("ville.embed.fluent.Abstract", {
    type: "abstract",
    extend: qx.ui.embed.Html,
    construct: function construct() {
      qx.ui.embed.Html.constructor.call(this);
      this.setAllowStretchX(false);
      this.setAllowStretchY(false);
    },
    properties: {
      viewBox: {
        check: "String",
        init: "0 0 20 20",
        themeable: true
      },
      iconStyle: {
        check: ["regular", "filled"],
        init: "regular",
        apply: "_applyIconStyle",
        event: "changeIconStyle",
        nullable: true,
        themeable: true
      },
      title: {
        check: "String",
        init: "",
        transform: "_transformTitle",
        themeable: true
      }
    },
    members: {
      _htmlregular: null,
      _htmlfilled: null,
      _pathit: function _pathit(pathd) {
        return "\n       <path d=\"".concat(pathd, "\"/>");
      },
      _svgit: function _svgit(pathtags) {
        var viewbox = this.getViewBox();
        var title = this.getTitle();
        return "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"".concat(viewbox, "\" fill=\"currentColor\">").concat(title, "\n       ").concat(pathtags, "\n      </svg>");
      },
      // property apply
      _applyIconStyle: function _applyIconStyle(value, old) {
        if (this._htmlregular != null) {
          if (value == "regular") this.setHtml(this._htmlregular);else if (value == "filled" & this._htmlfilled != null) this.setHtml(this._htmlfilled);
        }
      },
      // property apply
      _transformTitle: function _transformTitle(value, old) {
        value = "<title>".concat(value, "</title>");
        return value;
      }
    }
  });
  ville.embed.fluent.Abstract.$$dbClassInfo = $$dbClassInfo;
})();

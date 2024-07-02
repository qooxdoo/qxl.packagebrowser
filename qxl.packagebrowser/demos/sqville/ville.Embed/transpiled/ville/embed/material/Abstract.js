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
       * Chris Eskew (sqville) chris.eskew@sqville.com
  ************************************************************************ */
  qx.Class.define("ville.embed.material.Abstract", {
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
        init: "0 0 24 24",
        themeable: true
      },
      iconStyle: {
        check: ["regular", "filled"],
        init: "regular",
        apply: "_applyIconStyle",
        event: "changeIconStyle",
        nullable: true,
        themeable: true
      }
    },
    members: {
      _htmlregular: null,
      _htmlfilled: null,
      pathit: function pathit(pathd) {
        return "\n       <path d=\"".concat(pathd, "\"></path>");
      },
      svgit: function svgit(pathtags) {
        var viewbox = this.getViewBox();
        return "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"".concat(viewbox, "\" fill=\"currentColor\">\n       ").concat(pathtags, "\n      </svg>");
      },
      // property apply
      _applyIconStyle: function _applyIconStyle(value, old) {
        if (this._htmlregular != null) {
          if (value == "regular") this.setHtml(this._htmlregular);else if (value == "filled" & this._htmlfilled != null) this.setHtml(this._htmlfilled);
        }
      }
    }
  });
  ville.embed.material.Abstract.$$dbClassInfo = $$dbClassInfo;
})();

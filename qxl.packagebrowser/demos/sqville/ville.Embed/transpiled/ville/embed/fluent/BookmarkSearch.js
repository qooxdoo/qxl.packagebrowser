(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "ville.embed.fluent.Abstract": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     License:
       MIT: https://opensource.org/licenses/MIT
     Authors:
       * Chris Eskew (SQville) sqville@gmail.com
  ************************************************************************ */
  qx.Class.define("ville.embed.fluent.BookmarkSearch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15.6 7.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L15.6 7.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm0 4.62v8.38a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.26c-.2.3-.38.64-.5 1H6.5C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42V8.74c.15-.05.3-.11.44-.18l.56.56Z",
      FILLED: "M15.6 7.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L15.6 7.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm0 4.62v8.38a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4v-13A2.5 2.5 0 0 1 6.5 2h3.26a4.5 4.5 0 0 0 5.68 6.56l.56.56Z"
    },
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param size {Integer} The size of the icon in px. Sets width and height to this value.
     * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
     * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
     * @param title {String} If included, adds a title tag to the svg root tag. 
     */
    construct: function construct(size, color, iconstyle, title) {
      ville.embed.fluent.Abstract.constructor.call(this);
      if (size != null) {
        this.setWidth(size);
        this.setHeight(size);
      }
      if (color != null) this.setTextColor(color);
      if (iconstyle != null) this.setIconStyle(iconstyle);
      if (title != null) this.setTitle(title);

      //prep regular
      this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
      //prep filled
      this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
      if (this.getIconStyle() == "filled") this.setHtml(this._htmlfilled);else this.setHtml(this._htmlregular);
    }
  });
  ville.embed.fluent.BookmarkSearch.$$dbClassInfo = $$dbClassInfo;
})();
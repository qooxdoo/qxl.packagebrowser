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
  qx.Class.define("ville.embed.fluent.TextPositionTight", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Zm13-2h-2v-1h2a.5.5 0 0 1 0 1Zm-2-4v1h2a.5.5 0 0 0 0-1h-2Zm-.76-3c.2.3.38.64.5 1h2.26a.5.5 0 0 0 0-1h-2.76ZM7.5 8.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
      FILLED: "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0 12a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm6.5-8.5c-1.24 0-2.25 1-2.25 2.25v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0v-5c0-1.24-1-2.25-2.25-2.25Zm-6.5 5.5h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm13 1.5h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5Zm-1.75-4.5v1.5h1.75a.75.75 0 0 0 0-1.5h-1.75Zm-8.62-3c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.63Zm10.37 1.5h-1.92a4.73 4.73 0 0 0-.7-1.5h2.62a.75.75 0 0 1 0 1.5ZM5.25 8.75v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Z"
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
  ville.embed.fluent.TextPositionTight.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.LocationArrowUp", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.95 4.05a7 7 0 0 1 0 9.9l-1.13 1.12-2.43 2.37a2 2 0 0 1-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 0 1 9.9-9.9Zm-.7.7a6 6 0 0 0-8.67 8.32l.17.18.58.57 2.98 2.9.09.08a1 1 0 0 0 1.2 0l.1-.08 2.22-2.17 1.32-1.3.18-.18a6 6 0 0 0-.18-8.31Zm-2.1 3.6a.5.5 0 0 0 .7-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 1 0 .7.7L9.5 6.71v4.79a.5.5 0 0 0 1 0V6.7l1.65 1.65Z",
      FILLED: "M14.95 13.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12Zm-2.8-5.6L10.5 6.7v4.79a.5.5 0 0 1-1 0V6.7L7.85 8.36a.5.5 0 1 1-.7-.7l2.5-2.5a.5.5 0 0 1 .7 0l2.5 2.5a.5.5 0 0 1-.7.7Z"
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
  ville.embed.fluent.LocationArrowUp.$$dbClassInfo = $$dbClassInfo;
})();

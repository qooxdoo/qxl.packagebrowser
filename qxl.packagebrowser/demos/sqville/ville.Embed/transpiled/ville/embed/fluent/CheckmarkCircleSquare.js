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
  qx.Class.define("ville.embed.fluent.CheckmarkCircleSquare", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12 7A5 5 0 1 0 2 7a5 5 0 0 0 10 0Zm1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Zm-5 9v-2.07c.34-.05.68-.12 1-.22V16c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2.29c.1-.32.17-.66.22-1H16a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3ZM9.85 5.15c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L6.5 7.79l2.65-2.64c.2-.2.5-.2.7 0Zm3.5 10.2 3-3a.5.5 0 0 0-.7-.7L13 14.29l-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0Z",
      FILLED: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm2.85-7.15-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L6.5 7.79l2.65-2.64a.5.5 0 1 1 .7.7ZM8 13.93V16a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-2.07c-.05.34-.12.68-.22 1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2.29c-.32.1-.66.17-1 .22Zm8.35-1.58a.5.5 0 0 0-.7-.7L13 14.29l-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3Z"
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
  ville.embed.fluent.CheckmarkCircleSquare.$$dbClassInfo = $$dbClassInfo;
})();

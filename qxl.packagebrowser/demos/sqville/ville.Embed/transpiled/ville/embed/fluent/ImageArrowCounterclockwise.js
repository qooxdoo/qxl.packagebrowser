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
  qx.Class.define("ville.embed.fluent.ImageArrowCounterclockwise", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-2-5a.5.5 0 0 1-.5-.63V3a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1-.55 4.14.5.5 0 0 1 .75-.67A1.74 1.74 0 0 0 7.25 5.5 1.75 1.75 0 0 0 4.6 4H5a.5.5 0 0 1 0 1H3.5ZM3 10.4c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6Zm11-2.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-8.01 8.23A2 2 0 0 0 6 16h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58Z",
      FILLED: "M5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-2-5a.5.5 0 0 1-.5-.63V3a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1-.55 4.14.5.5 0 0 1 .75-.67A1.74 1.74 0 0 0 7.25 5.5 1.75 1.75 0 0 0 4.6 4H5a.5.5 0 0 1 0 1H3.5Zm2 6c-.9 0-1.75-.22-2.5-.6V14c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 0 1 2.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 0 0-3-3h-3.6a5.5 5.5 0 0 1-4.9 8Zm7-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 0 0-.7 0l-5.38 5.3Z"
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
  ville.embed.fluent.ImageArrowCounterclockwise.$$dbClassInfo = $$dbClassInfo;
})();
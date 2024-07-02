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
  qx.Class.define("ville.embed.fluent.TextArrowDownRightColumn", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 6.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm0-3c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM13 5a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2Zm3 4h-4V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm-4 1h4v3h-4v-3Zm0 4h4v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2ZM4 9.5a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 14h1.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L7.29 13H5.5A1.5 1.5 0 0 1 4 11.5v-2Z",
      FILLED: "M2 6.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Zm0-3c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM11 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2h-6V7Zm6 3h-6v3h6v-3Zm0 4h-6v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2ZM4 9.5a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 14h1.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L7.29 13H5.5A1.5 1.5 0 0 1 4 11.5v-2Z"
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
  ville.embed.fluent.TextArrowDownRightColumn.$$dbClassInfo = $$dbClassInfo;
})();

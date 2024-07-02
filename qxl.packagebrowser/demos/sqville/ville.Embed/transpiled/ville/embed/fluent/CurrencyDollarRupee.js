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
  qx.Class.define("ville.embed.fluent.CurrencyDollarRupee", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 2c.28 0 .5.22.5.5v.54c1.7.24 3 1.7 3 3.46v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-2-2.45v5.63l.86.38A3.62 3.62 0 0 1 9 13.36v.13a3.5 3.5 0 0 1-3 3.46v.55a.5.5 0 0 1-1 0v-.55a3.5 3.5 0 0 1-3-3.46v-.99a.5.5 0 1 1 1 0v.99a2.5 2.5 0 0 0 2 2.45v-5.62l-.86-.38A3.63 3.63 0 0 1 2 6.63V6.5a3.5 3.5 0 0 1 3-3.46V2.5c0-.28.22-.5.5-.5ZM3 6.5v.13c0 1.03.6 1.97 1.55 2.4l.45.2V4.05A2.5 2.5 0 0 0 3 6.5Zm3 9.44a2.5 2.5 0 0 0 2-2.45v-.12c0-1.04-.6-1.97-1.55-2.4l-.45-.2v5.17ZM10 3.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0-3c0-.28.22-.5.5-.5h3a3.5 3.5 0 1 1 0 7h-1.9l6.28 7.17a.5.5 0 0 1-.76.66l-7-8A.5.5 0 0 1 10.5 9h3a2.5 2.5 0 0 0 0-5h-3a.5.5 0 0 1-.5-.5Z",
      FILLED: "M6.25 2.75a.75.75 0 1 0-1.5 0v.33A3.5 3.5 0 0 0 2 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 0 1-1.25-1.86V12.4a.75.75 0 0 0-1.5 0v1.08a3.5 3.5 0 0 0 2.75 3.42v.35a.75.75 0 0 0 1.5 0v-.35A3.5 3.5 0 0 0 9 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 0 1 7.5 6.5v1.1a.75.75 0 0 0 1.5 0V6.5a3.5 3.5 0 0 0-2.75-3.42v-.33Zm-1.5 1.9v4.17A2.28 2.28 0 0 1 3.5 6.78V6.5a2 2 0 0 1 1.25-1.86Zm1.5 6.53a2.27 2.27 0 0 1 1.25 2.03v.27a2 2 0 0 1-1.25 1.86v-4.16ZM10.75 3a.75.75 0 0 0 0 1.5h2.75c.88 0 1.65.5 2.02 1.25h-4.77a.75.75 0 0 0 0 1.5h4.94A2.25 2.25 0 0 1 13.5 9h-2.75a.75.75 0 0 0-.57 1.24l6.5 7.5a.75.75 0 1 0 1.14-.98l-5.43-6.26h1.11c1.9 0 3.47-1.42 3.72-3.25h.03a.75.75 0 0 0 0-1.5h-.13a3.74 3.74 0 0 0-.62-1.25h.75a.75.75 0 0 0 0-1.5h-6.5Z"
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
  ville.embed.fluent.CurrencyDollarRupee.$$dbClassInfo = $$dbClassInfo;
})();
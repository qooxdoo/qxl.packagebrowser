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
  qx.Class.define("ville.embed.fluent.Sport", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.7 12.7a5 5 0 0 0 1.46-.83L8.13 4.84A5 5 0 0 0 7.3 6.3a8.95 8.95 0 0 0-1-.2 6 6 0 1 1 7.6 7.6 8.97 8.97 0 0 0-.2-1Zm-1-4.7 3.17 3.16a4.98 4.98 0 0 0 1.06-4.02 2.99 2.99 0 0 1-3.17-.2L12.71 8Zm3.17-3.16-1.39 1.38a2 2 0 0 0 2.16-.08 5 5 0 0 0-.77-1.3ZM12.5 4.5c0-.52.13-1 .36-1.43a5.03 5.03 0 0 0-4.02 1.06L12 7.29l1.05-1.05a2.99 2.99 0 0 1-.55-1.74Zm1 0c0 .37.1.72.28 1.02l1.38-1.4a5 5 0 0 0-1.3-.76 2 2 0 0 0-.36 1.14ZM3.5 8a.5.5 0 0 0-.5.5V10a7 7 0 0 0 7 7h1.5a.5.5 0 0 0 .5-.5V15a7 7 0 0 0-7-7H3.5ZM2 8.5C2 7.67 2.67 7 3.5 7H5a8 8 0 0 1 8 8v1.5c0 .83-.67 1.5-1.5 1.5H10a8 8 0 0 1-8-8V8.5Zm4.15 2.65c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7Z",
      FILLED: "M16.58 4.13a6 6 0 0 1 .83 1.28 2 2 0 0 1-2.43.31l1.6-1.6Zm-.7-.71-1.6 1.6a2 2 0 0 1 .3-2.44 6 6 0 0 1 1.3.84ZM18 8a6 6 0 0 0-.21-1.59 2.99 2.99 0 0 1-3.53.04L13.21 7.5l3.8 3.8c.63-.94.99-2.08.99-3.3Zm-5-4c0-.67.22-1.29.59-1.79a6 6 0 0 0-4.9.78l3.81 3.8 1.05-1.05A2.99 2.99 0 0 1 13 4Zm-1.3 5a8.97 8.97 0 0 1 2.2 4.7 6 6 0 0 0 2.49-1.6L12.5 8.2l-.8.8Zm.1-1.5-.8.8a8.97 8.97 0 0 0-4.7-2.2A6 6 0 0 1 7.9 3.6l3.9 3.89ZM3.5 7C2.67 7 2 7.67 2 8.5V10a8 8 0 0 0 8 8h1.5c.83 0 1.5-.67 1.5-1.5V15a8 8 0 0 0-8-8H3.5Zm2.65 4.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7Z"
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
  ville.embed.fluent.Sport.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.GlobeVideo", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 10a8 8 0 0 0 7.04 7.94C9 17.8 9 17.65 9 17.5v-.94c-.36-.3-.7-.8-1.02-1.47-.22-.46-.4-1-.56-1.59H9c0-.36.07-.7.2-1h-2a14.87 14.87 0 0 1 0-5h5.6a14.86 14.86 0 0 1 .17 3.5h1a16.6 16.6 0 0 0-.16-3.5h2.73a6.98 6.98 0 0 1 .1 4.71l.03.05.5-.4c.22-.16.45-.26.68-.32A8 8 0 1 0 2 10Zm8-7c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM10 13.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v.53l1.79-1.37a.75.75 0 0 1 1.2.6v4.5c0 .61-.7.97-1.2.59L16 16.97v.53c0 .83-.67 1.5-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4Z",
      FILLED: "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76a20.52 20.52 0 0 1 .13 3.5h.52c.93 0 1.74.5 2.17 1.26l.5-.4c.22-.16.45-.26.68-.32a8.04 8.04 0 0 0-.25-4.04ZM13 10c0 .34 0 .67-.02 1H11.5a2.5 2.5 0 0 0-2.3 1.5H7.17a19.44 19.44 0 0 1 0-5h5.68c.1.79.16 1.63.16 2.5Zm-5.68 3.5H9v3.99c-.36-.38-.71-.94-1.01-1.67-.28-.66-.5-1.45-.67-2.32Zm.57 4.22A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5Zm7.61 1c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v.53l1.79-1.37a.75.75 0 0 1 1.2.6v4.5c0 .61-.7.97-1.2.59L16 16.97v.53c0 .83-.67 1.5-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4Z"
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
  ville.embed.fluent.GlobeVideo.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.Savings", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.95 9.54c.03.24.05.5.05.77 0 1.53-.46 2.56-.91 3.2a3.96 3.96 0 0 1-.85.89.5.5 0 0 0-.24.43v1.67a.5.5 0 0 1-.5.5h-1.38a.12.12 0 0 1-.12-.12c0-.61-.5-1.11-1.12-1.11h-1.76c-.62 0-1.12.5-1.12 1.11 0 .07-.05.12-.12.12H7.5a.5.5 0 0 1-.5-.5v-.85a.5.5 0 0 0-.34-.47l-.04-.02a6.37 6.37 0 0 1-1.26-1.01 4.99 4.99 0 0 1-1-1.49c-.19-.42-.57-.8-1.09-.88a.33.33 0 0 1-.27-.32V9.95c0-.14.1-.26.24-.29.55-.09.94-.51 1.1-.97.12-.4.36-.93.75-1.32a5.64 5.64 0 0 1 1.58-1.1l.02-.02A.5.5 0 0 0 7 5.79v-2.1c.25.22.55.46.87.67.43.3.95.56 1.48.66.12-.33.28-.65.48-.94l-.18-.02a2.9 2.9 0 0 1-1.23-.53 8.47 8.47 0 0 1-1.11-.92.77.77 0 0 0-.83-.15.76.76 0 0 0-.48.7v2.32a6.9 6.9 0 0 0-1.63 1.19 4.4 4.4 0 0 0-.99 1.7c-.06.18-.19.29-.3.3A1.3 1.3 0 0 0 2 9.96v1.5c0 .66.47 1.2 1.1 1.32.13.02.27.12.34.3.2.45.58 1.15 1.2 1.78A7.34 7.34 0 0 0 6 15.96v.54c0 .83.67 1.5 1.5 1.5h1.38c.62 0 1.12-.5 1.12-1.12 0-.06.05-.11.12-.11h1.76c.07 0 .12.05.12.11 0 .62.5 1.12 1.12 1.12h1.38c.83 0 1.5-.67 1.5-1.5v-1.42c.04-.03.1-.07.14-.12.22-.2.5-.48.77-.87A6.48 6.48 0 0 0 18 10.3c0-.73-.1-1.38-.3-1.96-.18.43-.43.84-.75 1.2Zm-.15-4.3a3.5 3.5 0 0 1-1.17 4.16c-.43.31-1 .29-1.49.09L11.1 8.23c-.49-.2-.9-.6-.99-1.12a3.5 3.5 0 0 1 6.7-1.88Zm-1.76 3.35a2.5 2.5 0 1 0-3.94-1.63c0 .03.03.08.09.15.06.06.16.14.3.2l3.04 1.25c.13.06.26.08.35.08.09 0 .13-.03.16-.05Zm-8.29.91a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      FILLED: "m9.65 4.06.18.02a4.5 4.5 0 0 0-.7 3.2c.15.98.91 1.6 1.6 1.87l3.03 1.26c.68.29 1.65.39 2.46-.2a4.5 4.5 0 0 0 1.49-1.86c.19.58.29 1.23.29 1.96 0 1.75-.54 2.98-1.09 3.78a4.95 4.95 0 0 1-.91 1v1.41c0 .83-.67 1.5-1.5 1.5h-1.38c-.62 0-1.12-.5-1.12-1.12a.12.12 0 0 0-.12-.11h-1.76a.12.12 0 0 0-.12.11C10 17.5 9.5 18 8.88 18H7.5A1.5 1.5 0 0 1 6 16.5v-.54l-.16-.1c-.28-.18-.69-.5-1.2-1-.62-.64-1-1.34-1.2-1.8-.07-.17-.2-.27-.33-.3-.64-.1-1.11-.65-1.11-1.3V9.95c0-.63.45-1.17 1.08-1.27.11-.02.24-.13.3-.3a4.4 4.4 0 0 1 1-1.71A6.63 6.63 0 0 1 6 5.47v-2.3c0-.36.23-.61.48-.71.25-.1.58-.08.83.15.29.28.68.63 1.11.92.44.3.87.5 1.23.53ZM6.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm10.29-2.46a3.5 3.5 0 0 1-1.4 2.36c-.43.31-1 .3-1.5.09l-3.03-1.26c-.48-.2-.88-.56-.98-1.05l-.02-.07a3.5 3.5 0 1 1 6.93-.07Z"
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
  ville.embed.fluent.Savings.$$dbClassInfo = $$dbClassInfo;
})();
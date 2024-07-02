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
  qx.Class.define("ville.embed.fluent.EarthLeaf", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 10a8 8 0 1 1 16 .34 13.76 13.76 0 0 0-1-.23V10c0-2.1-.91-3.97-2.36-5.25l-.07.07-.79.84c-.6.62-1.35 1.37-1.85 1.75.03.07.1.18.24.36l.12.16a4.67 4.67 0 0 1 1.07 2.2c-.34.06-.66.16-.97.28a5 5 0 0 0-.1-.55c-.13-.49-.45-.89-.77-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65l.78-.82A6.97 6.97 0 0 0 9.74 3c.12.23.26.5.38.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a7 7 0 0 0 3.87 2.17c-.18.3-.35.6-.51.91A8 8 0 0 1 2 10Zm6.8-6.65a5.8 5.8 0 0 0-.13-.22 7 7 0 0 0-4.72 10.39l.02-.2c.06-.46.2-1.06.6-1.49.46-.5 1.02-.59 1.4-.65l.1-.02c.21-.03.34-.07.45-.13.1-.05.2-.13.28-.3.03-.06.05-.15.02-.34a4.4 4.4 0 0 0-.15-.54l-.04-.15c-.16-.5-.38-1.26.08-1.96.4-.6 1.04-.76 1.48-.87l.13-.03c.47-.12.77-.24.98-.68.26-.56.14-1.3-.12-1.98a6.33 6.33 0 0 0-.38-.83Zm10.13 8.39a.5.5 0 0 0-.43-.24h-.03l-.1-.02a6.16 6.16 0 0 1-.3-.08l-.09-.03c-.23-.06-.51-.14-.84-.21a8.52 8.52 0 0 0-2.95-.16c-1.2.15-2.12.56-2.75 1.15a2.85 2.85 0 0 0-.9 2.62 13.17 13.17 0 0 1 3.77-2.23.5.5 0 1 1 .38.92c-.8.32-1.54.7-2.2 1.1a8.47 8.47 0 0 0-3.44 3.72.5.5 0 0 0 .9.44c.38-.76.84-1.45 1.44-2.06a3.71 3.71 0 0 0 .59.8 3.07 3.07 0 0 0 3.9.58c.45-.28.77-.67 1-1.08.37-.63.58-1.38.74-1.94l.1-.37a7.5 7.5 0 0 1 1-2.03v-.02c.1-.14.18-.27.23-.38a.5.5 0 0 0-.02-.48Z",
      FILLED: "M2 10a8 8 0 1 1 16 .34l-.64-.16a9.52 9.52 0 0 0-3.3-.17c-.6.08-1.16.21-1.67.4a5 5 0 0 0-.1-.54c-.13-.49-.45-.89-.77-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65l.78-.82A6.97 6.97 0 0 0 9.74 3c.12.23.26.5.38.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a7 7 0 0 0 3.87 2.17c-.18.3-.35.6-.51.91A8 8 0 0 1 2 10Zm16.93 1.74a.5.5 0 0 0-.43-.24h-.03l-.1-.02a6.16 6.16 0 0 1-.3-.08l-.09-.03c-.23-.06-.51-.14-.84-.21a8.52 8.52 0 0 0-2.95-.16c-1.2.15-2.12.56-2.75 1.15a2.85 2.85 0 0 0-.9 2.62 13.17 13.17 0 0 1 3.77-2.23.5.5 0 1 1 .38.92c-.8.32-1.54.7-2.2 1.1a8.47 8.47 0 0 0-3.44 3.72.5.5 0 0 0 .9.44c.38-.76.84-1.45 1.44-2.06a3.71 3.71 0 0 0 .59.8 3.07 3.07 0 0 0 3.9.58c.45-.28.77-.67 1-1.08.37-.63.58-1.38.74-1.94l.1-.37a7.5 7.5 0 0 1 1-2.03v-.02c.1-.14.18-.27.23-.38a.5.5 0 0 0-.02-.48Z"
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
  ville.embed.fluent.EarthLeaf.$$dbClassInfo = $$dbClassInfo;
})();
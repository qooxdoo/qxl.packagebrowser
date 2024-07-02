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
  qx.Class.define("ville.embed.fluent.TranslateOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.85 2.15a.5.5 0 1 0-.7.7l1.5 1.51a4.7 4.7 0 0 0-.7.35l-.03.02a.5.5 0 0 0 .56.83 1.47 1.47 0 0 1 .21-.12 3.9 3.9 0 0 1 .75-.29l1.87 1.87-.23-.01a4.57 4.57 0 0 0-3.2 1 2.66 2.66 0 0 0-.81 2.84 2.97 2.97 0 0 0 2.25 2.09c.9.18 1.86-.08 2.64-.42.38-.17.74-.36 1.05-.55v.53a.5.5 0 1 0 1 0V9.7l2 2a4.2 4.2 0 0 0-.73 1.13c-.44 1.02-.4 2.17.25 2.85.43.46 1.06.53 1.64.4.42-.1.86-.31 1.28-.61l.08.2a.5.5 0 1 0 .93-.36 5.93 5.93 0 0 0-.1-.26l.96.97-.02.01a.5.5 0 1 0 .4.92l.37-.18 1.08 1.07a.5.5 0 0 0 .7-.7l-15-15Zm9.78 11.18v.02c.1.48.24.87.38 1.2-.38.3-.75.49-1.06.56-.39.09-.6 0-.69-.1-.27-.3-.4-.97-.06-1.77.12-.27.29-.55.52-.81l.9.9Zm-5.1-5.09.48.47v2.05c-.35.26-.87.59-1.45.85-.7.3-1.43.47-2.04.35a1.97 1.97 0 0 1-1.5-1.39c-.19-.66-.03-1.35.5-1.79.76-.63 1.65-.8 2.52-.77.53.02 1.04.12 1.5.23Zm9.88 4.33c.24.66.16 1.5-.45 2.27l.7.7a3.29 3.29 0 0 0 .68-3.31A3.37 3.37 0 0 0 16 10.17V10a.5.5 0 1 0-1 0v.02c-.43-.01-.88.03-1.36.13l.23-1.25a21.3 21.3 0 0 0 2.24-.41.5.5 0 0 0-.22-.98c-.62.15-1.2.27-1.77.35.1-.38.23-.85.35-1.2a.5.5 0 0 0-.94-.33c-.18.5-.37 1.22-.47 1.65-.5.03-1 .03-1.53 0a.5.5 0 1 0-.06 1c.47.02.92.03 1.36 0-.1.55-.18 1.04-.24 1.5l.92.91.01-.17.13-.04c.46-.12.89-.17 1.28-.16-.08.51-.21.98-.38 1.4l.76.77c.28-.59.5-1.26.6-2 .77.26 1.28.8 1.5 1.38ZM6.18 4.06l2.8 2.8a3.57 3.57 0 0 0-.23-1.08 2.66 2.66 0 0 0-1.83-1.56c-.25-.08-.5-.13-.74-.16Z",
      FILLED: "M2.85 2.15a.5.5 0 1 0-.7.7l.87.88a.75.75 0 0 0 .85 1.23l.03-.02a2.24 2.24 0 0 1 .22-.11l1.03 1.03c-.73.1-1.5.38-2.19.96a2.8 2.8 0 0 0-.84 2.96c.3 1 1.1 1.9 2.3 2.15a4.4 4.4 0 0 0 2.64-.4l.56-.29v.01a.75.75 0 1 0 1.5 0V9.83l1.68 1.67a4.85 4.85 0 0 0-1.46 1.8c-.51 1.13-.48 2.46.32 3.27.54.55 1.32.6 2 .46.43-.09.9-.28 1.34-.55l.03.06a.75.75 0 0 0 1.38-.58 7.6 7.6 0 0 0-.22-.45l.3-.32 1.18 1.18-.4.19a.75.75 0 0 0 .58 1.38c.33-.14.64-.3.92-.46l.38.37a.5.5 0 0 0 .7-.7l-15-15Zm4.77 6.18v1.14c-.3.22-.71.48-1.17.68-.64.29-1.24.41-1.72.31a1.55 1.55 0 0 1-1.17-1.1c-.15-.53-.02-1.06.37-1.39.63-.54 1.38-.69 2.14-.66l.6.06.95.96ZM6.9 4.78c.3.15.45.34.54.54L9.12 7v-.5c0-.37 0-1.02-.25-1.66A2.76 2.76 0 0 0 6.99 3.2c-.68-.2-1.3-.23-1.85-.18L6.9 4.78Zm7.64 6.94-.14.55 1.16 1.17c.2-.44.35-.92.45-1.44.66.3 1.1.76 1.33 1.25a1.9 1.9 0 0 1-.15 1.82l1.08 1.08c.14-.19.25-.38.35-.58a3.4 3.4 0 0 0 .09-2.93 4.04 4.04 0 0 0-2.54-2.18v-.04a.75.75 0 0 0-1.48-.2c-.36 0-.74.01-1.14.07l.25-1.18c.75-.09 1.49-.22 2.2-.38a.75.75 0 0 0-.31-1.46c-.48.1-.97.2-1.45.27l.18-.52a.75.75 0 0 0-1.4-.54c-.14.37-.29.83-.4 1.24-.61.04-1.22.04-1.82 0a.75.75 0 0 0-.65.3l1.22 1.23.86-.01-.14.73 1.8 1.8c.22-.04.44-.05.65-.05Zm-2.7.88a6 6 0 0 0 .5 2.52c-.37.24-.71.39-1 .45-.42.09-.58-.02-.61-.05-.21-.22-.38-.8-.02-1.6.2-.44.56-.9 1.12-1.32Z"
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
  ville.embed.fluent.TranslateOff.$$dbClassInfo = $$dbClassInfo;
})();
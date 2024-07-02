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
  qx.Class.define("ville.embed.fluent.Fps240", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 4.09v-.03l.04-.12c.04-.11.1-.25.2-.39.2-.26.55-.55 1.26-.55.64 0 1.04.2 1.27.5.23.3.35.76.24 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1A3.27 3.27 0 0 0 2 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3.03c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.49-.31.89-.76 1.01-1.49.15-.84.02-1.62-.44-2.2C6.1 2.29 5.36 2 4.5 2a2.44 2.44 0 0 0-2.49 1.88v.03S2 4 2 3.92a.5.5 0 0 0 .98.18Zm10 .41a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm4 3v-3a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0Zm-14 5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 1 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 1 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 0 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM9 2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5H11v2.5a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0V6H9V2.5Z",
      FILLED: "M2.99 4.38a.75.75 0 0 1-1.48-.25v-.05a1.92 1.92 0 0 1 .1-.32A2.7 2.7 0 0 1 4.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.71 6.71 0 0 1-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 0 0-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 0 0-.2.43Zm0 0Zm0 0ZM16.5 2A2.5 2.5 0 0 0 14 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 16.5 2Zm1 5.5a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3ZM3.5 12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm.5 3v-2h1a1 1 0 1 1 0 2H9Zm4-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM8.75 2c.41 0 .75.34.75.75V5.5H11V2.75a.75.75 0 0 1 1.5 0V9.5a.75.75 0 0 1-1.5 0V7H8.75A.75.75 0 0 1 8 6.25v-3.5c0-.41.34-.75.75-.75ZM2.99 4.38Z"
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
  ville.embed.fluent.Fps240.$$dbClassInfo = $$dbClassInfo;
})();

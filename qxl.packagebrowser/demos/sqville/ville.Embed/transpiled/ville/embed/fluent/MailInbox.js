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
  qx.Class.define("ville.embed.fluent.MailInbox", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 7h-3.5a.5.5 0 0 0-.5.5v.01a1.75 1.75 0 0 1-.03.3c-.04.2-.1.46-.23.72-.13.25-.3.49-.57.66-.26.18-.63.31-1.17.31-.54 0-.9-.13-1.17-.3a1.7 1.7 0 0 1-.57-.67A2.57 2.57 0 0 1 8 10.5v-.01a.5.5 0 0 0-.5-.5H4V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4ZM4 11h3.05c.05.26.14.62.32.97.18.38.47.76.9 1.06.45.29 1.02.47 1.73.47s1.28-.18 1.72-.47c.44-.3.73-.68.91-1.06.18-.35.27-.7.32-.97H16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z",
      FILLED: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4h3.5c.28 0 .5.22.5.5v.01a1.64 1.64 0 0 0 .03.3c.04.2.1.46.23.72.13.25.3.49.57.66.26.18.63.31 1.17.31.54 0 .9-.13 1.17-.3.26-.18.44-.42.57-.67A2.57 2.57 0 0 0 12 10.5v-.01c0-.28.22-.5.5-.5H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4Zm4 .5Z"
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
  ville.embed.fluent.MailInbox.$$dbClassInfo = $$dbClassInfo;
})();

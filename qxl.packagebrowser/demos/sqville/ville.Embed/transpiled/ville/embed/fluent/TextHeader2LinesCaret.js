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
  qx.Class.define("ville.embed.fluent.TextHeader2LinesCaret", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.5 2c.28 0 .5.22.5.5V5h3V2.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0V6H3v2.5a.5.5 0 1 1-1 0v-6c0-.28.23-.5.5-.5Zm11.55 2.46c.1-.28.35-.46.62-.46h2.66c.27 0 .52.18.62.46.1.28.05.6-.15.82l-1.33 1.5c-.26.3-.68.3-.94 0l-1.33-1.5a.82.82 0 0 1-.15-.82ZM2.5 16a.5.5 0 1 0 0 1h15a.5.5 0 0 0 0-1h-15ZM2 12.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm7.45-8.83c.25-.52.88-.78 1.4-.63.6.19.85.86.47 1.45-.16.25-.4.48-.68.73l-.33.29-.58.5C9.1 6.62 8.5 7.36 8.5 8.5c0 .28.22.5.5.5h3.5a.5.5 0 0 0 0-1H9.56c.13-.48.44-.87.85-1.25a13.52 13.52 0 0 1 .9-.78c.3-.27.6-.57.85-.94.7-1.08.3-2.55-1.03-2.95a2.21 2.21 0 0 0-2.58 1.16.5.5 0 1 0 .9.43Z",
      FILLED: "M10.6 3.3c-.42-.16-.97.08-1.17.5a.75.75 0 1 1-1.36-.63 2.47 2.47 0 0 1 3.06-1.27 2.33 2.33 0 0 1 1.17 3.42c-.26.4-.6.73-.94 1a21.54 21.54 0 0 1-.97.8 6.4 6.4 0 0 0-.45.38h2.31a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 8 8.25c0-.55.22-1 .5-1.37.26-.36.61-.67.94-.93l.42-.34c.18-.14.35-.27.53-.43.3-.24.51-.46.65-.68.25-.39.08-1-.44-1.2Zm3.45 1.16c.1-.28.35-.46.62-.46h2.66c.27 0 .52.18.62.46.1.28.05.6-.15.82l-1.33 1.5c-.26.3-.68.3-.94 0l-1.33-1.5a.82.82 0 0 1-.15-.82ZM2 16.25c0-.42.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm.75-8.75a.75.75 0 1 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-2h2v2a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-1.5 0v2h-2v-2Z"
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
  ville.embed.fluent.TextHeader2LinesCaret.$$dbClassInfo = $$dbClassInfo;
})();
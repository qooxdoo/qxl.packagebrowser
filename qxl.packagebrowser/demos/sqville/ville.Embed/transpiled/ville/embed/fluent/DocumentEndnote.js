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
  qx.Class.define("ville.embed.fluent.DocumentEndnote", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 2a2 2 0 0 0-2 2v6h1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3v1h3a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM3.5 11a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 1 17.5v-5c0-.83.67-1.5 1.5-1.5h1Zm4 7a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 0 0 1h1c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-1Zm-2-4c.27 0 .5.22.5.5v3a.5.5 0 1 1-1 0v-3c0-.28.22-.5.5-.5Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      FILLED: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H11v-6a2 2 0 0 0-2-2H4V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM3.5 11a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 1 17.5v-5c0-.83.67-1.5 1.5-1.5h1Zm4 7a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 0 0 1h1c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-1ZM6 14.5a.5.5 0 0 0-1 0v3a.5.5 0 1 0 1 0v-3Zm0-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
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
  ville.embed.fluent.DocumentEndnote.$$dbClassInfo = $$dbClassInfo;
})();

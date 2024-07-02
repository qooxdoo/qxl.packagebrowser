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
  qx.Class.define("ville.embed.fluent.BuildingRetailShield", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3.5 3A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V16H4V6h12v2.4l.15.14c.22.23.51.49.85.73V5.9A1.5 1.5 0 0 0 16.5 3h-13ZM3 4.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM9 16H6v-3h3v3Zm6-7.94V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h4.58a1.6 1.6 0 0 1 1.14-1H6V8h8v.4c.29-.22.64-.34 1-.34Zm3.5 2.9a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z",
      FILLED: "M18 4.5c0 .65-.42 1.2-1 1.41v3.36c-.34-.24-.63-.5-.85-.73A1.6 1.6 0 0 0 15 8.06V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h4.58a1.5 1.5 0 0 0-.08.5V13v-.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17H3.5a.5.5 0 0 1-.5-.5V5.91A1.5 1.5 0 0 1 3.5 3h13c.83 0 1.5.67 1.5 1.5Zm-15 0c0 .28.22.5.5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5ZM14 8v.4l-.15.14A4.71 4.71 0 0 1 11.22 10H6V8h8Zm-5 5H6v4h3v-4Zm9.5-2.04a5.69 5.69 0 0 1-3.06-1.72.62.62 0 0 0-.88 0 5.7 5.7 0 0 1-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 0 0 .26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54Z"
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
  ville.embed.fluent.BuildingRetailShield.$$dbClassInfo = $$dbClassInfo;
})();
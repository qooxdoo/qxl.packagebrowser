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
  qx.Class.define("ville.embed.fluent.ImageSplit", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15Zm1 14.5H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-3.5v1H15a2 2 0 0 1 2 2v8c0 .37-.1.72-.28 1.02l-4.67-4.59a1.5 1.5 0 0 0-.55-.34v1.2l4.51 4.44A2 2 0 0 1 15 16h-3.5v1Zm2-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM2 6a3 3 0 0 1 3-3 .5.5 0 0 1 0 1 2 2 0 0 0-2 2v.5a.5.5 0 0 1-1 0V6Zm5-3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H7ZM3 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM5 17a3 3 0 0 1-3-3v-.5a.5.5 0 0 1 1 0v.5c0 1.1.9 2 2 2a.5.5 0 0 1 0 1Zm1.5-.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1H7a.5.5 0 0 0-.5.5Z",
      FILLED: "M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM7 3.5c0-.28.22-.5.5-.5H8a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5ZM7.5 16a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1h-.5ZM2 6a3 3 0 0 1 3-3h.5a.5.5 0 0 1 0 1H5a2 2 0 0 0-2 2v.5a.5.5 0 0 1-1 0V6Zm3 11a3 3 0 0 1-3-3v-.5a.5.5 0 0 1 1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 1 0 1H5ZM2.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5Zm9 3.3V17H15c.65 0 1.25-.2 1.74-.55l-.1-.1-5.14-5.06Zm0-8.3v7.08c.2.07.39.19.55.35l5.3 5.22.1.09c.34-.5.55-1.1.55-1.74V6a3 3 0 0 0-3-3h-3.5ZM16 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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
  ville.embed.fluent.ImageSplit.$$dbClassInfo = $$dbClassInfo;
})();
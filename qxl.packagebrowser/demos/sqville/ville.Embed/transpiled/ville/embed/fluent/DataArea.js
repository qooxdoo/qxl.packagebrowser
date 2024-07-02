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
  qx.Class.define("ville.embed.fluent.DataArea", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 2.5a.5.5 0 1 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1H16V5.5a.5.5 0 0 0-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 0 0-.45-.03L3 8.74V2.5Zm0 7.32 3.97-1.76 3.28 1.87c.18.1.4.09.56-.04L15 6.54V17H3V9.82Z",
      FILLED: "M3 2.49a.5.5 0 0 0-1 .01v15c0 .28.22.5.5.5h15a.5.5 0 1 0 0-1H3V2.49ZM16 16V5.5a.5.5 0 0 0-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 0 0-.45-.03L4 8.3V16h12Z"
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
  ville.embed.fluent.DataArea.$$dbClassInfo = $$dbClassInfo;
})();

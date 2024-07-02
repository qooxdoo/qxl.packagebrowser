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
  qx.Class.define("ville.embed.fluent.BinFull", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.93 2.25a.5.5 0 0 1-.18.68L4.35 9H8v-.5C8 7.67 8.67 7 9.5 7H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V9h.5c.28 0 .5.22.5.5v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-6c0-.18.1-.34.25-.43l12-7a.5.5 0 0 1 .68.18ZM16.5 10H3v5.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V10h-.5ZM12 9V8H9.5a.5.5 0 0 0-.5.5V9h3Zm1 0h3V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V9Z",
      FILLED: "M14.75 2.93a.5.5 0 1 0-.5-.86l-12 7A.5.5 0 0 0 2 9.5v6A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-6a.5.5 0 0 0-.5-.5H17V6.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5V7H9.5C8.67 7 8 7.67 8 8.5V9H4.35l10.4-6.07ZM12 8v1H9v-.5c0-.28.22-.5.5-.5H12Zm1 1V6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9h-3Z"
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
  ville.embed.fluent.BinFull.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.CalendarMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16 4.5A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM3 6h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5V6Zm1.5-3h9c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3ZM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 0 1-3.5 3.5H5Z",
      FILLED: "M16 13.5V6H2v7.5A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5V5h14v-.5ZM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 0 1-3.5 3.5H5Z"
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
  ville.embed.fluent.CalendarMultiple.$$dbClassInfo = $$dbClassInfo;
})();

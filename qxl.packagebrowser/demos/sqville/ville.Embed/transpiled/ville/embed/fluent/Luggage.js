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
  qx.Class.define("ville.embed.fluent.Luggage", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.5 2a.5.5 0 0 0 0 1H7v1h-.5A2.5 2.5 0 0 0 4 6.5v8a2.5 2.5 0 0 0 2 2.45v.55a.5.5 0 0 0 1 0V17h6v.5a.5.5 0 0 0 1 0v-.55a2.5 2.5 0 0 0 2-2.45v-8A2.5 2.5 0 0 0 13.5 4H13V3h.5a.5.5 0 0 0 0-1h-7ZM12 3v1H8V3h4ZM6.5 5h7c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 14.5v-8C5 5.67 5.67 5 6.5 5Zm0 3.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z",
      FILLED: "M6.5 2a.5.5 0 0 0 0 1H7v1h-.5A2.5 2.5 0 0 0 4 6.5v8a2.5 2.5 0 0 0 2 2.45v.55a.5.5 0 0 0 1 0V17h6v.5a.5.5 0 0 0 1 0v-.55a2.5 2.5 0 0 0 2-2.45v-8A2.5 2.5 0 0 0 13.5 4H13V3h.5a.5.5 0 0 0 0-1h-7ZM12 3v1H8V3h4ZM6.5 8.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z"
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
  ville.embed.fluent.Luggage.$$dbClassInfo = $$dbClassInfo;
})();

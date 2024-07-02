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
  qx.Class.define("ville.embed.fluent.ChannelShare", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 5.5A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5h-5C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h4.51a2.25 2.25 0 1 1 .12 1H5.5A2.5 2.5 0 0 1 3 10.5v-5Zm8 6.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM7.5 14a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 9.5 17h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7H9.87A2.25 2.25 0 1 0 10 8h4.51c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5a.5.5 0 0 0-.5-.5Zm.25-7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
      FILLED: "M3 5.5A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5a.5.5 0 0 1-1 0c0-.83-.67-1.5-1.5-1.5h-5C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h4.51a2.25 2.25 0 1 1 .12 1H5.5A2.5 2.5 0 0 1 3 10.5v-5ZM7.5 14a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 9.5 17h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7H9.87A2.25 2.25 0 1 0 10 8h4.51c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 14.5a.5.5 0 0 0-.5-.5Z"
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
  ville.embed.fluent.ChannelShare.$$dbClassInfo = $$dbClassInfo;
})();
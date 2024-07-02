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
  qx.Class.define("ville.embed.fluent.Doctor", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3c.28 0 .5.22.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3c0-.28.22-.5.5-.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM7 4.5C7 3.67 7.67 3 8.5 3h3c.83 0 1.5.67 1.5 1.5V7h2.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H13v2.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 15.5V13H4.5A1.5 1.5 0 0 1 3 11.5v-3C3 7.67 3.67 7 4.5 7H7V4.5Z",
      FILLED: "M8.5 3C7.67 3 7 3.67 7 4.5V7H4.5C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5H7v2.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V13h2.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13V4.5c0-.83-.67-1.5-1.5-1.5h-3Z"
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
  ville.embed.fluent.Doctor.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.TextColor", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.46 2.31a.5.5 0 0 0-.92 0l-3 7.5a.5.5 0 1 0 .92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 1 0 .92-.38l-3-7.5ZM10 3.85l1.06 2.65H8.94L10 3.85ZM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11ZM4 13.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3Z",
      FILLED: "M10.46 2.31a.5.5 0 0 0-.92 0l-3 7.5a.5.5 0 1 0 .92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 1 0 .92-.38l-3-7.5ZM10 3.85l1.06 2.65H8.94L10 3.85ZM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Z"
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
  ville.embed.fluent.TextColor.$$dbClassInfo = $$dbClassInfo;
})();

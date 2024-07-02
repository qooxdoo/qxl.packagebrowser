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
  qx.Class.define("ville.embed.fluent.ReOrderDotsHorizontal", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM9 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
      FILLED: "M14 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM5.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8.5 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM10.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM4 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
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
  ville.embed.fluent.ReOrderDotsHorizontal.$$dbClassInfo = $$dbClassInfo;
})();
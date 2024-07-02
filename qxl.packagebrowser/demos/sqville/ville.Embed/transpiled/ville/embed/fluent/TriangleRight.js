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
  qx.Class.define("ville.embed.fluent.TriangleRight", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17.21 11.32a1.5 1.5 0 0 0 0-2.64l-12-6.5a1.5 1.5 0 0 0-2.2 1.32v13a1.5 1.5 0 0 0 2.2 1.32l12-6.5Zm-.47-1.76a.5.5 0 0 1 0 .88l-12 6.5A.5.5 0 0 1 4 16.5v-13c0-.38.4-.62.74-.44l12 6.5Z",
      FILLED: "M17.21 8.68a1.5 1.5 0 0 1 0 2.64l-12 6.5a1.5 1.5 0 0 1-2.2-1.32v-13a1.5 1.5 0 0 1 2.2-1.32l12 6.5Z"
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
  ville.embed.fluent.TriangleRight.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.Branch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 3a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      FILLED: "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5Z"
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
  ville.embed.fluent.Branch.$$dbClassInfo = $$dbClassInfo;
})();

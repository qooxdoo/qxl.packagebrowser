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
  qx.Class.define("ville.embed.fluent.DocumentPercent", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.17a3 3 0 0 0 .17-1h3a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.76a3 3 0 0 0-1-.59V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5ZM5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.15-5.85c.2.2.2.5 0 .7l-6 6a.5.5 0 0 1-.7-.7l6-6c.2-.2.5-.2.7 0Z",
      FILLED: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.67a3 3 0 0 1 2 2.71l1.44-1.44a1.5 1.5 0 0 1 2.12 2.12L8.12 14a3 3 0 0 1 2.7 4h3.68c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1.15 5.85a.5.5 0 0 1-.7-.7l6-6a.5.5 0 0 1 .7.7l-6 6ZM6 17a2 2 0 0 0 2 2 2 2 0 1 0-2-2Zm2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-11.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
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
  ville.embed.fluent.DocumentPercent.$$dbClassInfo = $$dbClassInfo;
})();
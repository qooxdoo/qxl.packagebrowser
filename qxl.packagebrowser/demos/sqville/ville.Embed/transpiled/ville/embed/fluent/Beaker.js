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
  qx.Class.define("ville.embed.fluent.Beaker", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l2.4 4.45A1.5 1.5 0 0 1 14.5 17h-9a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8ZM8 4v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12h6.36l-.64-1.18A4.5 4.5 0 0 1 12 8.68V4H8Zm5.72 9H6.28l-1.22 2.26a.5.5 0 0 0 .44.74h9a.5.5 0 0 0 .44-.74L13.72 13Z",
      FILLED: "M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.9 1.66H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5ZM5.15 13l-.97 1.79A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.32-2.21L14.85 13h-9.7Z"
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
  ville.embed.fluent.Beaker.$$dbClassInfo = $$dbClassInfo;
})();

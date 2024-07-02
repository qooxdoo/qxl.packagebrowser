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
  qx.Class.define("ville.embed.fluent.ArrowShuffleOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.85 2.15a.5.5 0 1 0-.7.7L6.09 6.8A8.12 8.12 0 0 0 2.5 6a.5.5 0 1 0 0 1c2.42 0 4.02 1.02 5.52 2.33l.31-.3.7.72C7.2 11.45 5.48 13 2.5 13a.5.5 0 0 0 0 1c3.4 0 5.4-1.83 7.25-3.55l.7.71-.2.2c.53.47 1.1.92 1.72 1.32l5.18 5.17a.5.5 0 0 0 .7-.7l-15-15Zm12.12 10.7 1.14 1.14h.19l-.1.1.71.7.94-.94a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 13a7.5 7.5 0 0 1-1.32-.15ZM10.52 8.4l.71.71c1.39-1.16 2.9-2.05 5.06-2.1l-1.14 1.14a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.3 6c-2.54.06-4.28 1.14-5.78 2.4Z",
      FILLED: "M2.85 2.15a.5.5 0 1 0-.7.7l3 3a7.9 7.9 0 0 0-2.4-.35.75.75 0 0 0 0 1.5c2.24 0 3.67.97 5.02 2.29l.4-.42.7.7C7.14 11.44 5.6 13 2.75 13a.75.75 0 0 0 0 1.5c3.53 0 5.47-2.03 7.18-3.86l.7.7c-.13.16-.28.31-.43.47.85.82 1.8 1.6 3 2.1l1.43 1.42a.75.75 0 0 0 1.04 1.04l1.48 1.48a.5.5 0 0 0 .7-.7l-15-15Zm12.16 10.74 2.08 2.08.69-.69c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.67.67a6.32 6.32 0 0 1-.38-.06Zm-4.75-4.75 1.06 1.06a6.92 6.92 0 0 1 4.07-2.15l-.67.67a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.75.75c-2.3.21-3.9 1.34-5.21 2.6Z"
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
  ville.embed.fluent.ArrowShuffleOff.$$dbClassInfo = $$dbClassInfo;
})();
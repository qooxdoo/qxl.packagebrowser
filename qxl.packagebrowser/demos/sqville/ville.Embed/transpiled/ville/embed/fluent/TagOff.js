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
  qx.Class.define("ville.embed.fluent.TagOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.79 6.5 2.15 2.84a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.6-3.58-2.75 2.76a2 2 0 0 1-2.83 0l-4.95-4.95a2 2 0 0 1 0-2.83L5.8 6.49Zm7.06 7.06L6.5 7.2 3.73 9.96a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l2.76-2.76Zm3.87-3.87-2.45 2.45.7.71 2.46-2.45A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2a2 2 0 0 0-1.42.58l-2.5 2.5.7.7 2.51-2.49a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      FILLED: "M2.85 2.15a.5.5 0 1 0-.7.7L5.79 6.5 3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.83 0l2.76-2.76 3.59 3.58a.5.5 0 0 0 .7-.7l-15-15Zm14.58 8.25-2.45 2.45L7.2 5.08l2.5-2.5A2 2 0 0 1 11.13 2l4.89.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42ZM14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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
  ville.embed.fluent.TagOff.$$dbClassInfo = $$dbClassInfo;
})();
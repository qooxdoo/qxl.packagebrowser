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
  qx.Class.define("ville.embed.fluent.ArrowHookUpLeft", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 15.5c0 .28.22.5.5.5H11c1.64 0 2.9-.62 3.75-1.57A5.16 5.16 0 0 0 16 11c0-1.23-.41-2.48-1.25-3.43A4.85 4.85 0 0 0 11 6H5.7l2.65-2.65a.5.5 0 1 0-.7-.7l-3.5 3.5a.5.5 0 0 0 0 .7l3.5 3.5a.5.5 0 0 0 .7-.7L5.71 7H11c1.36 0 2.35.5 3 1.24.66.74 1 1.74 1 2.76 0 1.02-.34 2.02-1 2.76A3.86 3.86 0 0 1 11 15H6.5a.5.5 0 0 0-.5.5Z",
      FILLED: "M6 15.25c0 .41.34.75.75.75h4.5a4.4 4.4 0 0 0 3.53-1.59A5.24 5.24 0 0 0 16 11c0-1.22-.3-2.46-1.12-3.41A4.62 4.62 0 0 0 11.25 6H6.56l2.22-2.22a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 .02 1.08l3.5 3.25a.75.75 0 0 0 1.02-1.1L6.66 7.5h4.59c1.16 0 1.86.44 2.4 1.07.55.64.85 1.52.85 2.43 0 .9-.3 1.79-.85 2.43a2.92 2.92 0 0 1-2.4 1.07h-4.5a.75.75 0 0 0-.75.75Z"
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
  ville.embed.fluent.ArrowHookUpLeft.$$dbClassInfo = $$dbClassInfo;
})();

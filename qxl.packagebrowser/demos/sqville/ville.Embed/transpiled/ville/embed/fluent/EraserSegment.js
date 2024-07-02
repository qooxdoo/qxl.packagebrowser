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
  qx.Class.define("ville.embed.fluent.EraserSegment", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.32 2.44a1.5 1.5 0 0 0-2.12 0L2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24c.31.32.73.46 1.14.44h6.27a1.5 1.5 0 1 0 0-1H9.36l8.2-8.2a1.5 1.5 0 0 0 0-2.12l-4.24-4.24Zm-1.42.7c.2-.19.52-.19.71 0l4.24 4.25c.2.2.2.51 0 .7l-6.36 6.37-4.95-4.95 6.36-6.36Zm-7.07 7.08 4.95 4.95-1.69 1.69a.5.5 0 0 1-.7 0L3.14 12.6a.5.5 0 0 1 0-.7l1.7-1.7Z",
      FILLED: "M13.32 2.44a1.5 1.5 0 0 0-2.12 0L2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24c.31.32.73.46 1.14.44h6.27a1.5 1.5 0 1 0 0-1H9.36l8.2-8.2a1.5 1.5 0 0 0 0-2.12l-4.24-4.24Zm-8.49 7.78 4.95 4.95-1.69 1.69a.5.5 0 0 1-.7 0L3.14 12.6a.5.5 0 0 1 0-.7l1.7-1.7Z"
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
  ville.embed.fluent.EraserSegment.$$dbClassInfo = $$dbClassInfo;
})();
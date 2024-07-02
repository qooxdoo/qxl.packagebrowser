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
  qx.Class.define("ville.embed.fluent.PlantGrass", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.85 3.15h.02l.02.04a7.35 7.35 0 0 1 .47.52c.3.36.7.87 1.12 1.52C9.02 6.06 9.6 7.1 10 8.3a13.95 13.95 0 0 1 2.64-4.6 11.72 11.72 0 0 1 .47-.52l.02-.03.01-.01a.5.5 0 0 1 .86.35v5.1c.25-.52.52-.94.8-1.28a4.97 4.97 0 0 1 1.5-1.28h.01a.5.5 0 0 1 .69.46V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6.5a.5.5 0 0 1 .69-.46h.02a1.34 1.34 0 0 1 .13.07c.1.05.2.12.35.22.28.2.64.5 1.02.99.27.34.54.76.79 1.29V3.5a.5.5 0 0 1 .85-.35ZM4 7.47V14c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7.47a4.5 4.5 0 0 0-.42.46c-.62.8-1.34 2.2-1.58 4.62a.5.5 0 0 1-1-.05V4.86c-.2.26-.42.57-.64.91a11.65 11.65 0 0 0-1.86 4.8.5.5 0 0 1-1 0 11.64 11.64 0 0 0-1.86-4.8c-.22-.34-.44-.65-.64-.91v7.64a.5.5 0 0 1-1 .05c-.24-2.42-.96-3.83-1.58-4.62A4.5 4.5 0 0 0 4 7.47Z",
      FILLED: "M6.85 3.15h.02l.02.04a7.35 7.35 0 0 1 .47.52c.3.36.7.87 1.12 1.52C9.02 6.06 9.6 7.1 10 8.3a13.95 13.95 0 0 1 2.64-4.6 11.72 11.72 0 0 1 .47-.52l.02-.03.01-.01a.5.5 0 0 1 .86.35v5.1c.25-.52.52-.94.8-1.28a4.97 4.97 0 0 1 1.5-1.28h.01a.5.5 0 0 1 .69.46V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6.5a.5.5 0 0 1 .69-.46h.02a1.34 1.34 0 0 1 .13.07c.1.05.2.12.35.22.28.2.64.5 1.02.99.27.34.54.76.79 1.29V3.5a.5.5 0 0 1 .85-.35Z"
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
  ville.embed.fluent.PlantGrass.$$dbClassInfo = $$dbClassInfo;
})();
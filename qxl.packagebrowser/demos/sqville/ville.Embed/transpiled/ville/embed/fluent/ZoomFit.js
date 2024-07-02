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
  qx.Class.define("ville.embed.fluent.ZoomFit", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3.86 7.85a.5.5 0 0 0-.72-.7L1.4 8.95a1.5 1.5 0 0 0 0 2.1l1.74 1.8a.5.5 0 0 0 .72-.7l-1.74-1.8a.5.5 0 0 1 0-.7l1.74-1.8Zm3.3-4.7a.5.5 0 1 0 .69.71l1.8-1.74a.5.5 0 0 1 .7 0l1.8 1.74a.5.5 0 0 0 .7-.72l-1.8-1.74a1.5 1.5 0 0 0-2.1 0l-1.8 1.74Zm9.7 4a.5.5 0 1 0-.72.7l1.75 1.8c.18.2.18.51 0 .7l-1.75 1.8a.5.5 0 0 0 .72.7l1.74-1.8a1.5 1.5 0 0 0 0-2.09l-1.74-1.8Zm-9.01 9a.5.5 0 1 0-.7.71l1.81 1.75c.59.56 1.5.56 2.09 0l1.8-1.75a.5.5 0 1 0-.7-.72l-1.8 1.74a.5.5 0 0 1-.7 0l-1.8-1.74ZM8 6a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8ZM7 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z",
      FILLED: "M3.86 7.85a.5.5 0 0 0-.72-.7L1.4 8.95a1.5 1.5 0 0 0 0 2.09l1.74 1.8a.5.5 0 1 0 .72-.69l-1.74-1.8a.5.5 0 0 1 0-.7l1.74-1.8Zm3.3-4.71a.5.5 0 0 0 .69.72l1.8-1.74a.5.5 0 0 1 .7 0l1.8 1.74a.5.5 0 0 0 .7-.72l-1.8-1.74a1.5 1.5 0 0 0-2.1 0l-1.8 1.74Zm9.7 4.01a.5.5 0 1 0-.72.7l1.75 1.8c.18.2.18.5 0 .7l-1.75 1.8a.5.5 0 0 0 .72.7l1.74-1.8a1.5 1.5 0 0 0 0-2.09l-1.74-1.8Zm-9.01 8.99a.5.5 0 1 0-.7.72l1.81 1.75c.59.56 1.5.55 2.09 0l1.8-1.75a.5.5 0 0 0-.7-.72l-1.8 1.74a.5.5 0 0 1-.7 0l-1.8-1.74ZM6 8c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"
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
  ville.embed.fluent.ZoomFit.$$dbClassInfo = $$dbClassInfo;
})();
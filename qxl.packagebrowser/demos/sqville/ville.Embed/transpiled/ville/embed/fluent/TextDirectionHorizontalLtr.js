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
  qx.Class.define("ville.embed.fluent.TextDirectionHorizontalLtr", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.5 3c.2 0 .4.13.47.32l3 8a.5.5 0 0 1-.94.36L8.03 9H4.97l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 6.5 3Zm0 1.92L5.35 8h2.3L6.5 4.92Zm8.35-.77a.5.5 0 1 0-.7.7L15.29 6H10.5a.5.5 0 0 0 0 1h4.8l-1.15 1.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm0 8a.5.5 0 0 0-.7.7L15.29 14H3.5a.5.5 0 0 0 0 1h11.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Z",
      FILLED: "M6.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 0 1-1.4.56L8 9.5H5l-.8 2.03a.75.75 0 0 1-1.4-.56l3-7.5A.75.75 0 0 1 6.5 3Zm0 2.77L5.6 8h1.8l-.9-2.23Zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2Z"
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
  ville.embed.fluent.TextDirectionHorizontalLtr.$$dbClassInfo = $$dbClassInfo;
})();
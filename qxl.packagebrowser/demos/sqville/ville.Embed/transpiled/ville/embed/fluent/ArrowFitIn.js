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
  qx.Class.define("ville.embed.fluent.ArrowFitIn", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.65 7.35a.5.5 0 1 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L7.29 10H2.5a.5.5 0 0 1 0-1h4.8L5.64 7.35Zm8.7 0a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L12.71 10h4.79a.5.5 0 0 0 0-1h-4.8l1.65-1.65Z",
      FILLED: "M5.21 7.78a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 .01 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.68L5.21 7.78Zm9.58 0a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0-.01 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.68l1.22-1.22Z"
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
  ville.embed.fluent.ArrowFitIn.$$dbClassInfo = $$dbClassInfo;
})();
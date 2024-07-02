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
  qx.Class.define("ville.embed.fluent.Pulse", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7 3a.5.5 0 0 1 .48.37l3.05 11.3 2.5-8.31a.5.5 0 0 1 .94-.04L15.35 10h2.15a.5.5 0 0 1 0 1H15a.5.5 0 0 1-.47-.32l-.98-2.62-2.57 8.58a.5.5 0 0 1-.96-.01L6.99 5.37l-1.5 5.27A.5.5 0 0 1 5 11H2.5a.5.5 0 0 1 0-1h2.12l1.9-6.64A.5.5 0 0 1 7 3Z",
      FILLED: "M7.01 3c.33 0 .62.23.71.55l2.82 10.07 2.24-7.1a.75.75 0 0 1 1.4-.07L15.5 9.5h1.76a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.69-.45l-.7-1.65-2.4 7.58a.75.75 0 0 1-1.43-.03L6.97 6.41l-1.25 4.06A.75.75 0 0 1 5 11H2.75a.75.75 0 0 1 0-1.5h1.7l1.83-5.97c.1-.32.4-.53.73-.53Z"
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
  ville.embed.fluent.Pulse.$$dbClassInfo = $$dbClassInfo;
})();

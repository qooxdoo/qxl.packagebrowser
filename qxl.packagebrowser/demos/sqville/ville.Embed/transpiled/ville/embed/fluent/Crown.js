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
  qx.Class.define("ville.embed.fluent.Crown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.74 5.31 6.6 8.05a.5.5 0 0 1-.62.14L3.86 7.12a1.5 1.5 0 1 0-1.67.85L3.9 16c.12.58.63.99 1.22.99h9.78c.6 0 1.1-.41 1.22-1l1.7-8.03a1.5 1.5 0 1 0-1.67-.85L14 8.2a.5.5 0 0 1-.62-.14L11.26 5.3a1.5 1.5 0 1 0-2.53 0Zm1.26 0 2.6 3.35a1.5 1.5 0 0 0 1.86.42l2.34-1.17-1.66 7.9a.25.25 0 0 1-.25.19H5.11a.25.25 0 0 1-.25-.2L3.2 7.91l2.34 1.17a1.5 1.5 0 0 0 1.86-.42L10 5.31Z",
      FILLED: "M8.74 5.31 6.6 8.05a.5.5 0 0 1-.62.14L3.86 7.12a1.5 1.5 0 1 0-1.67.85L3.9 16c.12.58.63.99 1.22.99h9.78c.6 0 1.1-.41 1.22-1l1.7-8.03a1.5 1.5 0 1 0-1.67-.85L14 8.2a.5.5 0 0 1-.62-.14L11.26 5.3a1.5 1.5 0 1 0-2.53 0ZM10 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
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
  ville.embed.fluent.Crown.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.Dock", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.35 3.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L9.5 4.71v7.79a.5.5 0 0 0 1 0V4.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3ZM3 10.5C3 9.67 3.67 9 4.5 9h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 10.5v3A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 15.5 8h-3a.5.5 0 0 0 0 1h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-3Z",
      FILLED: "M10.53 3.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 0 0 1.5 0V5.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5ZM3.5 10.5a1 1 0 0 1 1-1h2.75a.75.75 0 0 0 0-1.5H4.5A2.5 2.5 0 0 0 2 10.5v3A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 15.5 8h-2.75a.75.75 0 0 0 0 1.5h2.75a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-3Z"
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
  ville.embed.fluent.Dock.$$dbClassInfo = $$dbClassInfo;
})();

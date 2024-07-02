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
  qx.Class.define("ville.embed.fluent.Pen", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67l7.98-7.98.34.33a1 1 0 0 1 0 1.42l-.94.94a.5.5 0 0 0 .7.7l.94-.94a2 2 0 0 0 0-2.82l-.33-.34.67-.67a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-9.36 9.35c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l9.37-9.38Z",
      FILLED: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67.33.34a2 2 0 0 1 0 2.82l-.94.94a.5.5 0 0 1-.7-.7l.94-.94a1 1 0 0 0 0-1.42l-.34-.33-7.98 7.98c-.34.34-.77.57-1.24.68l-3.92.87a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.86.66-1.2l9.37-9.37Z"
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
  ville.embed.fluent.Pen.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.StackStar", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8 4.75c.19 0 .36.1.44.27l.88 1.68 1.74.2a.5.5 0 0 1 .25.9l-1.25 1 .43 1.84a.5.5 0 0 1-.75.54L8 10.14l-1.74 1.04a.5.5 0 0 1-.75-.54l.43-1.85-1.25-1a.5.5 0 0 1 .25-.88l1.74-.21.88-1.68A.5.5 0 0 1 8 4.75ZM2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4Zm2 11a2 2 0 0 1-1.73-1H12a3 3 0 0 0 3-3V5.27c.6.34 1 .99 1 1.73v4a4 4 0 0 1-4 4H6Zm2 2a2 2 0 0 1-1.73-1H12a5 5 0 0 0 5-5V7.27c.6.34 1 .99 1 1.73v2a6 6 0 0 1-6 6H8Z",
      FILLED: "M4 3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm4.33 2.08.91 1.73 1.8.22a.38.38 0 0 1 .2.67L9.91 8.74l.45 1.93a.38.38 0 0 1-.56.4L8 10l-1.8 1.08a.38.38 0 0 1-.57-.4l.45-1.93L4.77 7.7a.38.38 0 0 1 .19-.67l1.8-.22.9-1.73a.38.38 0 0 1 .67 0ZM4.27 14c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73V11a3 3 0 0 1-3 3H4.27Zm2 2c.34.6.99 1 1.73 1h4a6 6 0 0 0 6-6V9a2 2 0 0 0-1-1.73V11a5 5 0 0 1-5 5H6.27Z"
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
  ville.embed.fluent.StackStar.$$dbClassInfo = $$dbClassInfo;
})();
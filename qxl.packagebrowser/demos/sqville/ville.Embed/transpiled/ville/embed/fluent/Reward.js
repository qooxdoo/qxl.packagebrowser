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
  qx.Class.define("ville.embed.fluent.Reward", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15.53 3c.83 0 1.5.67 1.5 1.5v1.4c0 .94-.53 1.8-1.36 2.22l-4.2 2.14a3.54 3.54 0 1 1-2.92 0L4.36 8.12a2.5 2.5 0 0 1-1.35-2.04V4.5C3 3.67 3.66 3 4.5 3h11.02ZM10 10.95a2.54 2.54 0 1 0 0 5.08 2.54 2.54 0 0 0 0-5.08ZM12.55 4H7.47V8.6L9.8 9.77a.5.5 0 0 0 .45 0l2.31-1.18V4ZM6.47 4H4.5a.5.5 0 0 0-.5.5v1.54c.06.5.36.96.82 1.2l1.65.84V4Zm9.06 0h-1.98v4.08l1.66-.85c.5-.25.82-.77.82-1.33V4.5a.5.5 0 0 0-.5-.5Z",
      FILLED: "M15.53 3c.82 0 1.5.67 1.5 1.5v1.4c0 .93-.53 1.8-1.37 2.22l-4.19 2.14a3.54 3.54 0 1 1-2.92 0L4.36 8.12a2.5 2.5 0 0 1-1.35-2.04L3 5.9V4.5C3 3.67 3.67 3 4.5 3h11.03ZM10 10.95a2.54 2.54 0 1 0 0 5.07 2.54 2.54 0 0 0 0-5.07ZM12.61 4h-5.2v4.55l2.38 1.22a.5.5 0 0 0 .45 0l2.38-1.22V4Z"
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
  ville.embed.fluent.Reward.$$dbClassInfo = $$dbClassInfo;
})();
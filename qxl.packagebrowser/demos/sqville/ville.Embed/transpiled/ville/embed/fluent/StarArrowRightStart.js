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
  qx.Class.define("ville.embed.fluent.StarArrowRightStart", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.1 2.56a1 1 0 0 1 1.8 0l1.93 3.89 4.31.62a1 1 0 0 1 .56 1.7l-3.13 3.03.74 4.28a1 1 0 0 1-1.45 1.05l-2.97-1.55c.07-.35.1-.7.11-1.07l3.33 1.74-.74-4.28a1 1 0 0 1 .29-.88L17 8.06l-4.32-.63a1 1 0 0 1-.75-.54L10 2.99 8.07 6.9a1 1 0 0 1-.75.54L3 8.06l1.14 1.1c-.36.1-.7.23-1.04.39l-.8-.78a1 1 0 0 1 .56-1.7l4.31-.62 1.93-3.9ZM5.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
      FILLED: "M9.1 2.56a1 1 0 0 1 1.8 0l1.93 3.9 4.31.64a1 1 0 0 1 .56 1.7l-3.13 3.05.74 4.3a1 1 0 0 1-1.45 1.05l-2.98-1.57a5.52 5.52 0 0 0-7.8-6.07L2.3 8.8a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.56ZM5.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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
  ville.embed.fluent.StarArrowRightStart.$$dbClassInfo = $$dbClassInfo;
})();
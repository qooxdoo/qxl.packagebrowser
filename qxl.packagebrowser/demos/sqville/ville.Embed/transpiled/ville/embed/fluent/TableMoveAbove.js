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
  qx.Class.define("ville.embed.fluent.TableMoveAbove", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 8h3.88a1.52 1.52 0 0 0 .62.41V12h4V8.41a1.5 1.5 0 0 0 .62-.41h3.88c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5c0-.28.22-.5.5-.5Zm.5 5v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3ZM4 9v3h3V9H4Zm7.15-1.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z",
      FILLED: "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM8 12V8.41c.16.06.33.09.5.09v1a1.5 1.5 0 0 0 3 0v-1c.17 0 .34-.03.5-.09V12H8Zm7 5h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-9 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Zm4.15-9.65a.5.5 0 0 0 .7-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V9.5a.5.5 0 0 0 1 0V6.7l.65.65Z"
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
  ville.embed.fluent.TableMoveAbove.$$dbClassInfo = $$dbClassInfo;
})();
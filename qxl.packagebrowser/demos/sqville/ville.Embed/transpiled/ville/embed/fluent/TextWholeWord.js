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
  qx.Class.define("ville.embed.fluent.TextWholeWord", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.5 15a.5.5 0 0 0 .5-.5v-.4a2.76 2.76 0 0 0 2 .9 3.28 3.28 0 0 0 3-3.5A3.28 3.28 0 0 0 14 8a2.77 2.77 0 0 0-2 .9V4a.5.5 0 0 0-1 0v10.5a.5.5 0 0 0 .5.5ZM14 9a2.29 2.29 0 0 1 2 2.5 2.29 2.29 0 0 1-2 2.5 2.29 2.29 0 0 1-2-2.5A2.29 2.29 0 0 1 14 9Zm-9.13 5.88a3.72 3.72 0 0 0 3.13-.8v.42a.5.5 0 0 0 1 0v-4.04a2.45 2.45 0 0 0-1.28-2.4 3.88 3.88 0 0 0-1.86-.37c-.55.01-1.09.14-1.58.36a.5.5 0 0 0 .44.9c.37-.17.77-.25 1.17-.26.48-.03.95.06 1.39.26A1.35 1.35 0 0 1 8 10.27a5.73 5.73 0 0 0-1.4-.25 3.92 3.92 0 0 0-2.38.56 2.36 2.36 0 0 0 .65 4.3Zm-.1-3.46a2.93 2.93 0 0 1 1.78-.4c.5.02.98.13 1.45.3v1.47a3.23 3.23 0 0 1-2.87 1.13 1.36 1.36 0 0 1-.35-2.5ZM19 16v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 16.5V16a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V16a.5.5 0 0 1 1 0Z",
      FILLED: "M19 15.75v.5A1.75 1.75 0 0 1 17.25 18H2.75A1.75 1.75 0 0 1 1 16.25v-.5a.75.75 0 1 1 1.5 0v.5a.25.25 0 0 0 .25.25h14.5a.25.25 0 0 0 .25-.25v-.5a.75.75 0 1 1 1.5 0ZM3.83 10.38a4.17 4.17 0 0 1 2.53-.61c.37.02.74.07 1.1.16a.97.97 0 0 0-.55-.76c-.4-.18-.83-.26-1.26-.23-.37 0-.73.08-1.07.23a.75.75 0 1 1-.67-1.34c.53-.25 1.1-.38 1.69-.4.69-.03 1.37.1 1.99.4A2.69 2.69 0 0 1 9 10.46v4.04a.75.75 0 1 1-1.5.06 3.73 3.73 0 0 1-2.95.56 2.61 2.61 0 0 1-.72-4.74Zm1.11 3.3a2.92 2.92 0 0 0 2.56-1V11.5a4.5 4.5 0 0 0-1.22-.23 2.68 2.68 0 0 0-1.62.36 1.11 1.11 0 0 0 .28 2.05Zm6.06.82V4a.75.75 0 1 1 1.5 0v4.66A2.7 2.7 0 0 1 14.25 8a3.28 3.28 0 0 1 3 3.5 3.28 3.28 0 0 1-3 3.5c-.64 0-1.26-.24-1.75-.66v.16a.75.75 0 1 1-1.5 0Zm1.75-3a1.8 1.8 0 0 0 1.5 2 1.8 1.8 0 0 0 1.5-2 1.8 1.8 0 0 0-1.5-2 1.8 1.8 0 0 0-1.5 2Z"
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
  ville.embed.fluent.TextWholeWord.$$dbClassInfo = $$dbClassInfo;
})();

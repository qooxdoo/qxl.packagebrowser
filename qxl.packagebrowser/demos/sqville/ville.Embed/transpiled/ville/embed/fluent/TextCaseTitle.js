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
  qx.Class.define("ville.embed.fluent.TextCaseTitle", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 0 1-1 0V4c0-.28.22-.5.5-.5ZM15 14c.97 0 2-.97 2-2.5S15.97 9 15 9s-2 .97-2 2.5 1.03 2.5 2 2.5ZM6.96 3.84a.5.5 0 0 0-.94-.02L3.29 11h-.02v.05l-1.24 3.27a.5.5 0 0 0 .94.36L3.98 12h4.76l.92 2.66a.5.5 0 1 0 .95-.32L6.96 3.84ZM4.36 11l2.1-5.54L8.4 11H4.36Z",
      FILLED: "M12.5 3.25c.41 0 .75.34.75.75v4.66c.5-.42 1.1-.66 1.75-.66 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75ZM15 13.5c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2ZM6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 1 1-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 0 1-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48ZM4.62 11h3.5L6.45 6.2 4.63 11Z"
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
  ville.embed.fluent.TextCaseTitle.$$dbClassInfo = $$dbClassInfo;
})();

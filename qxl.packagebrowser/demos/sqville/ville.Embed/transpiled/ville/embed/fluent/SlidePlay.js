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
  qx.Class.define("ville.embed.fluent.SlidePlay", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h4.46c-.1-.32-.16-.66-.19-1H4.75C3.78 15 3 14.22 3 13.25v-6.5C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V9.6c.36.18.7.4 1 .66V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13 16c0 .38.42.62.76.42l2.5-1.5a.5.5 0 0 0 0-.85l-2.5-1.5A.5.5 0 0 0 13 13v3Z",
      FILLED: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h4.46A5.5 5.5 0 0 1 18 10.26V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13 16c0 .38.42.62.76.42l2.5-1.5a.5.5 0 0 0 0-.85l-2.5-1.5A.5.5 0 0 0 13 13v3Z"
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
  ville.embed.fluent.SlidePlay.$$dbClassInfo = $$dbClassInfo;
})();

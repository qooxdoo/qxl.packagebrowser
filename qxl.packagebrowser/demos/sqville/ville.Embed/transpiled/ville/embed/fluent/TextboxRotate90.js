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
  qx.Class.define("ville.embed.fluent.TextboxRotate90", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3 0a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4Zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm10 8a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5Z",
      FILLED: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM7.5 6.7v6.6c0 .38-.34.7-.75.7S6 13.68 6 13.3V6.7c0-.38.34-.7.75-.7s.75.32.75.7ZM9.75 6c.41 0 .75.32.75.7v3.6c0 .38-.34.7-.75.7S9 10.68 9 10.3V6.7c0-.38.34-.7.75-.7Zm3 0c.41 0 .75.32.75.7v6.6c0 .38-.34.7-.75.7s-.75-.32-.75-.7V6.7c0-.38.34-.7.75-.7Z"
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
  ville.embed.fluent.TextboxRotate90.$$dbClassInfo = $$dbClassInfo;
})();
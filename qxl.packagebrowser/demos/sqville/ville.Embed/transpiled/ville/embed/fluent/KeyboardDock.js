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
  qx.Class.define("ville.embed.fluent.KeyboardDock", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm6.75-4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.5 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-8.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7 8.5A.75.75 0 1 0 7 7a.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.26.75A.75.75 0 1 0 13 7a.75.75 0 0 0 0 1.5ZM9.25 5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 2C2.67 2 2 2.67 2 3.5v8c0 .83.67 1.5 1.5 1.5h6v3.3l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7l-1.15 1.14V13h6c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-13Zm13 10h-13a.5.5 0 0 1-.5-.5v-8c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5Z",
      FILLED: "M2 3.5C2 2.67 2.67 2 3.5 2h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-6v3.3l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.15 1.14V13h-6A1.5 1.5 0 0 1 2 11.5v-8ZM5.5 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-6 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm8.25-4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-7.5 2.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM10 8.5A.75.75 0 1 0 10 7a.75.75 0 0 0 0 1.5Zm2.25-.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM8.5 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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
  ville.embed.fluent.KeyboardDock.$$dbClassInfo = $$dbClassInfo;
})();
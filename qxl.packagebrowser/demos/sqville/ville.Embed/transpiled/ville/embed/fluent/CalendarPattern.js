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
  qx.Class.define("ville.embed.fluent.CalendarPattern", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5V7h12V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5ZM14.7 8l-4 4h2.6L16 9.3V8h-1.3Zm-1.4 0h-2.6l-4 4h2.6l4-4Zm-8 4 4-4H6.7L4 10.7V12h1.3ZM4 9.3 5.3 8H4v1.3ZM14.7 12H16v-1.3L14.7 12Z",
      FILLED: "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3ZM4.5 5.75V7h11V5.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25ZM14.7 8l-4 4h2.6l2.2-2.2V8h-.8Zm-1.4 0h-2.6l-4 4h2.6l4-4Zm-8 4 4-4H6.7l-2.2 2.2V12h.8Zm-.8-3.2.8-.8h-.8v.8ZM14.7 12h.8v-.8l-.8.8Z"
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
  ville.embed.fluent.CalendarPattern.$$dbClassInfo = $$dbClassInfo;
})();

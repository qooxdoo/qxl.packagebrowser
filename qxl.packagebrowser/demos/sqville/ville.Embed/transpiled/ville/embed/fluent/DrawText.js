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
  qx.Class.define("ville.embed.fluent.DrawText", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.72 11H6.28L8.5 4.79 10.72 11Zm.35 1 .23.64.78-.78-3.02-8.47a.6.6 0 0 0-1.13 0l-3.9 10.95a.5.5 0 0 0 .94.33L5.92 12h5.15Zm4.74-2.45-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.38 1.5a.91.91 0 0 0-.02.14 4.6 4.6 0 0 1-1.11-.1c-.07 0-.1-.1-.07-.17.18-.35.24-1.07-.4-1.33-.86-.34-1.98.13-2.86.5-.37.15-.7.29-.95.34-.38.09-.84-.06-1.21-.24-.21-.11-.48.08-.36.28.22.37.61.74 1.32.83.82.1 1.4-.16 1.98-.41.4-.18.8-.36 1.3-.43.08-.01.14.09.11.17-.15.36-.13.9.32 1.24.52.4 2.19.51 3.31.19l1.22-.31c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z",
      FILLED: "M10.14 10.5H6.86L8.5 5.82l1.64 4.68Zm.53 1.5.33.94 1.17-1.17-2.87-8.2a.85.85 0 0 0-1.6 0L4.04 14a.75.75 0 0 0 1.42.5l.87-2.5h4.34Zm5.14-2.45-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.38 1.5a.92.92 0 0 0-.02.14 4.6 4.6 0 0 1-1.11-.1c-.07 0-.1-.1-.07-.17.18-.35.24-1.07-.4-1.33-.86-.35-1.98.13-2.86.5-.37.15-.7.29-.95.34-.38.09-.84-.06-1.21-.24-.21-.11-.48.08-.36.28.22.37.61.74 1.32.83.82.1 1.4-.16 1.98-.41.4-.18.8-.36 1.3-.43.08-.01.14.09.11.17-.15.35-.13.9.32 1.24.52.4 2.19.51 3.31.19l1.22-.31c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z"
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
  ville.embed.fluent.DrawText.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.TextPositionThrough", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm13 0h-2v1h2a.5.5 0 0 0 0-1Zm-8-3v1h3V9h-3Zm8 1h-2V9h2a.5.5 0 0 1 0 1Zm-8 2v1h3v-1h-3Zm8-5h-2.26c-.12-.36-.3-.7-.5-1h2.76a.5.5 0 0 1 0 1Zm-13 8h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Zm4-6.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z",
      FILLED: "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM7.75 8.5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Zm-5 7c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm13.75-3.75h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-13 0h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm5.25-3h2.5v1.5h-2.5v-1.5Zm0 3h2.5v1.5h-2.5v-1.5Zm-3.5-3v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Zm11.25 0h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-2.63-3c.32.45.57.95.71 1.5h1.92a.75.75 0 0 0 0-1.5h-2.63Zm-7.74 0c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.63Z"
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
  ville.embed.fluent.TextPositionThrough.$$dbClassInfo = $$dbClassInfo;
})();

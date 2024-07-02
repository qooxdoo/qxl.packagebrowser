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
  qx.Class.define("ville.embed.fluent.ListBarTree", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 3a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h.27A2 2 0 0 0 5 9v2a2 2 0 0 0 .68 1.5A2 2 0 0 0 5 14v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-.68-1.5A2 2 0 0 0 17 11V9a2 2 0 0 0-.68-1.5A2 2 0 0 0 17 6V5a2 2 0 0 0-2-2H5Zm10 9h-5V8h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 8v4H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm1 5h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5v-3Zm-1 0v3H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2ZM8 7V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8ZM7 7H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v3Z",
      FILLED: "M8 7h7.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5H8v4ZM7 3H4.5C3.67 3 3 3.67 3 4.5v1C3 6.33 3.67 7 4.5 7H7V3Zm3 9h5.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5H10v4ZM9 8H6.5C5.67 8 5 8.67 5 9.5v1c0 .83.67 1.5 1.5 1.5H9V8Zm6.5 9H10v-4h5.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5Zm-9-4H9v4H6.5A1.5 1.5 0 0 1 5 15.5v-1c0-.83.67-1.5 1.5-1.5Z"
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
  ville.embed.fluent.ListBarTree.$$dbClassInfo = $$dbClassInfo;
})();
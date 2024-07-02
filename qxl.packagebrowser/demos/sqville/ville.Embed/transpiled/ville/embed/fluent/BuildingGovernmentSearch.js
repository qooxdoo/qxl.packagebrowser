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
  qx.Class.define("ville.embed.fluent.BuildingGovernmentSearch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H10v1a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-6.09a1.5 1.5 0 0 0-.35-.56l-.44-.44H11v-2H8.74c.12-.32.2-.65.23-1H11a1 1 0 0 1 1 1v2h5v-4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5V10a4 4 0 0 0-7.94-.72c-.3-.12-.63-.2-.97-.24A5 5 0 0 1 9 5.1V2.5Zm0 9a.5.5 0 0 1-.28.45A4.5 4.5 0 0 0 8 10.67V9.5a.5.5 0 0 1 1 0v2Zm6 2a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0v-2Zm-3-4a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0v-2ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
      FILLED: "M9 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5H10v1a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5H8.74a4.5 4.5 0 0 0-.02-3.05.5.5 0 0 0 .28-.45v-2a.5.5 0 1 0-1 0v1.17a4.5 4.5 0 0 0-2.9-1.63A5 5 0 0 1 9 5.1V2.5Zm6 11a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0v-2Zm-3-4a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0v-2ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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
  ville.embed.fluent.BuildingGovernmentSearch.$$dbClassInfo = $$dbClassInfo;
})();
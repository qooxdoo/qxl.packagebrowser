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
  qx.Class.define("ville.embed.fluent.ProtocolHandler", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.59 5.41 2.4 8.6a2 2 0 0 0 0 2.82L5.6 14.6a2 2 0 0 0 2.82 0l3.18-3.18a2 2 0 0 0 0-2.82L8.4 5.4a2 2 0 0 0-2.82 0ZM3.12 9.3 6.3 6.12a1 1 0 0 1 1.42 0l3.17 3.17a1 1 0 0 1 0 1.42L7.7 13.88a1 1 0 0 1-1.42 0L3.12 10.7a1 1 0 0 1 0-1.42Zm8.47 5.3-.88-.88.7-.71.88.88a1 1 0 0 0 1.42 0l3.17-3.17a1 1 0 0 0 0-1.42L13.7 6.12a1 1 0 0 0-1.42 0l-.88.88-.7-.7.88-.89a2 2 0 0 1 2.82 0L17.6 8.6a2 2 0 0 1 0 2.82L14.4 14.6a2 2 0 0 1-2.82 0Z",
      FILLED: "M5.59 5.41 2.4 8.6a2 2 0 0 0 0 2.82L5.6 14.6a2 2 0 0 0 2.82 0l3.18-3.18a2 2 0 0 0 0-2.82L8.4 5.4a2 2 0 0 0-2.82 0Zm6 9.18-.88-.88 1.58-1.59a3 3 0 0 0 0-4.24l-1.58-1.59.88-.88a2 2 0 0 1 2.82 0L17.6 8.6a2 2 0 0 1 0 2.82L14.4 14.6a2 2 0 0 1-2.82 0Z"
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
  ville.embed.fluent.ProtocolHandler.$$dbClassInfo = $$dbClassInfo;
})();
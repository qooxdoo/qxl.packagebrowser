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
  qx.Class.define("ville.embed.fluent.ArrowAutofitDown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.14 15.2 15 16.36V2.5a.5.5 0 1 0-1 0v13.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7ZM5 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 1 1 0 1H5Z",
      FILLED: "m15.71 14.77-.7.73V2.75a.75.75 0 1 0-1.5 0v12.76l-.72-.74a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04ZM5 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h6.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 0 1 0 1.5H5Z"
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
  ville.embed.fluent.ArrowAutofitDown.$$dbClassInfo = $$dbClassInfo;
})();
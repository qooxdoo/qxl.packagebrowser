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
  qx.Class.define("ville.embed.fluent.FullScreenMinimize", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14 5a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1h-2a2 2 0 0 1-2-2V3a.5.5 0 0 1 1 0v2ZM6 15a1 1 0 0 0-1-1H3a.5.5 0 0 1 0-1h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0v-2Zm8 0a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1h-2a2 2 0 0 0-2 2v2a.5.5 0 0 0 1 0v-2ZM5 6a1 1 0 0 0 1-1V3a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H3a.5.5 0 0 1 0-1h2Z",
      FILLED: "M15 5.5a.5.5 0 0 1-.5-.5V2.75a.75.75 0 0 0-1.5 0V5c0 1.1.9 2 2 2h2.25a.75.75 0 0 0 0-1.5H15ZM5.5 15a.5.5 0 0 0-.5-.5H2.75a.75.75 0 0 1 0-1.5H5a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V15Zm9 0c0-.28.22-.5.5-.5h2.25a.75.75 0 0 0 0-1.5H15a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V15Zm-9-10a.5.5 0 0 1-.5.5H2.75a.75.75 0 0 0 0 1.5H5a2 2 0 0 0 2-2V2.75a.75.75 0 0 0-1.5 0V5Z"
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
  ville.embed.fluent.FullScreenMinimize.$$dbClassInfo = $$dbClassInfo;
})();

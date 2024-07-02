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
  qx.Class.define("ville.embed.fluent.PanelRightContract", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "m9.18 10.5-1 .87a.5.5 0 1 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H5.5a.5.5 0 0 0 0 1h3.68ZM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12Zm1-2a1 1 0 0 1-1 1h-3V5h3a1 1 0 0 1 1 1v8Zm-5-9v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z",
      FILLED: "m9.18 10.5-1 .87a.5.5 0 1 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H5.5a.5.5 0 0 0 0 1h3.68ZM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12ZM12 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"
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
  ville.embed.fluent.PanelRightContract.$$dbClassInfo = $$dbClassInfo;
})();
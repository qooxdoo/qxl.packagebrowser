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
  qx.Class.define("ville.embed.fluent.CodeText", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1H2.5Zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 11.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5ZM2.5 14a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1H2.5Zm10-5.5c0-.28.22-.5.5-.5h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5Zm-2-3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      FILLED: "M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 11.25c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75ZM2.75 13.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Zm9.75-5.25c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
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
  ville.embed.fluent.CodeText.$$dbClassInfo = $$dbClassInfo;
})();
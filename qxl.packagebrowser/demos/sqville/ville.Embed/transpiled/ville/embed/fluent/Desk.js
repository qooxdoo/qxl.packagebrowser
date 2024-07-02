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
  qx.Class.define("ville.embed.fluent.Desk", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8h7v7.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2H4ZM3 8h6v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Zm0-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H3Zm2 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H5Z",
      FILLED: "M4 4a2 2 0 0 0-2 2v1h15v8.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2H4Zm6 4H2v6c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V8Zm-5.5 2.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
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
  ville.embed.fluent.Desk.$$dbClassInfo = $$dbClassInfo;
})();
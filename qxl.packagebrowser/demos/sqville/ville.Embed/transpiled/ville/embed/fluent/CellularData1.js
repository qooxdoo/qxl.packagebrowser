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
  qx.Class.define("ville.embed.fluent.CellularData1", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.5 4a.5.5 0 0 1 .5.41V15.5a.5.5 0 0 1-.99.09V4.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.4v5.1a.5.5 0 0 1-.99.09v-5.1c0-.27.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.4v3.1a.5.5 0 0 1-1 .09v-3.1c0-.27.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09v-7.1c0-.27.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V6.5c0-.27.22-.5.5-.5Z",
      FILLED: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V8.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V6.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Z"
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
  ville.embed.fluent.CellularData1.$$dbClassInfo = $$dbClassInfo;
})();
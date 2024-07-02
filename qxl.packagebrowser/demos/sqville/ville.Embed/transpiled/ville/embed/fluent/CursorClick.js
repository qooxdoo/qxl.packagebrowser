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
  qx.Class.define("ville.embed.fluent.CursorClick", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.5 2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM3.61 3.61c.2-.2.51-.2.7 0l1.42 1.42a.5.5 0 1 1-.7.7L3.6 4.32a.5.5 0 0 1 0-.7Zm7.78 0c.2.2.2.51 0 .7L9.97 5.74a.5.5 0 1 1-.7-.7l1.41-1.42c.2-.2.51-.2.7 0ZM2 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6.64-.2A1 1 0 0 0 7 8.07v9.1a1 1 0 0 0 1.75.66l2.03-2.32c.28-.32.7-.51 1.13-.51h3.2a1 1 0 0 0 .65-1.77L8.64 7.3ZM8 17.17v-9.1L15.12 14H11.9c-.72 0-1.4.31-1.88.85L8 17.17Z",
      FILLED: "M7.5 2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM3.61 3.61c.2-.2.51-.2.7 0l1.42 1.42a.5.5 0 1 1-.7.7L3.6 4.32a.5.5 0 0 1 0-.7Zm7.78 0c.2.2.2.51 0 .7L9.97 5.74a.5.5 0 1 1-.7-.7l1.41-1.42c.2-.2.51-.2.7 0ZM2 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm5.5.53v9.26c0 .45.54.67.85.36l2.56-2.56a2 2 0 0 1 1.42-.59h3.23a.5.5 0 0 0 .31-.9L8.31 7.65a.5.5 0 0 0-.81.4Z"
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
  ville.embed.fluent.CursorClick.$$dbClassInfo = $$dbClassInfo;
})();

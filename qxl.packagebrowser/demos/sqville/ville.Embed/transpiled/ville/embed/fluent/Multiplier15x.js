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
  qx.Class.define("ville.embed.fluent.Multiplier15x", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 0 1-1 0V7.96a6 6 0 0 1-1.24.97.5.5 0 0 1-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 0 1 .56-.17Zm3.84.43A.5.5 0 0 1 9 6h3.5a.5.5 0 0 1 0 1H9.46L9.3 8.93l1.28-.15a2.62 2.62 0 1 1 .3 5.22h-.35c-.8 0-1.55-.31-2.1-.87l-.28-.28a.5.5 0 1 1 .7-.7l.28.27c.37.37.87.58 1.4.58h.35a1.62 1.62 0 1 0-.19-3.23L8.81 10a.5.5 0 0 1-.56-.54l.25-3Zm6.35 3.69a.5.5 0 0 0-.7.7L15.29 12l-1.14 1.15a.5.5 0 0 0 .7.7L16 12.71l1.15 1.14a.5.5 0 0 0 .7-.7L16.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L16 11.29l-1.15-1.14ZM6.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      FILLED: "M4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 0 1-1.5 0V8.81c-.24.19-.52.38-.86.58a.75.75 0 0 1-.78-1.28c.58-.35.9-.62 1.13-.87.22-.24.36-.47.58-.81l.04-.08a.75.75 0 0 1 .85-.32ZM9 6c-.39 0-.71.3-.75.68L8 9.43a.75.75 0 0 0 .85.81l1.37-.18a1.35 1.35 0 1 1 .16 2.69c-.36 0-.72-.15-.97-.4l-.38-.38a.75.75 0 0 0-1.06 1.06l.38.38a2.86 2.86 0 0 0 4.9-2.01 2.85 2.85 0 0 0-3.23-2.83l-.44.06.1-1.13h2.57a.75.75 0 0 0 0-1.5H9Zm-2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.72-3.78c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72-.72.72a.75.75 0 1 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 0-1.06Z"
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
  ville.embed.fluent.Multiplier15x.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.WeatherDrizzle", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12h-.73l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H10.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H7.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26h-.39A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3Zm-2.89 8h7.07c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 4a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 11 5.82 11H7.1Zm.64 3.32a.5.5 0 0 1 .18.68l-1 1.75a.5.5 0 0 1-.86-.5l1-1.75a.5.5 0 0 1 .68-.18Zm3.18.68a.5.5 0 0 0-.86-.5l-1 1.75a.5.5 0 0 0 .86.5l1-1.75Z",
      FILLED: "M10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12h-.73l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H10.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26H7.4l-.96 1.74a.5.5 0 0 1-.88-.48l.7-1.26h-.39A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3ZM7.75 14.32a.5.5 0 0 1 .18.68l-1 1.75a.5.5 0 0 1-.86-.5l1-1.75a.5.5 0 0 1 .68-.18Zm3.18.68a.5.5 0 0 0-.86-.5l-1 1.75a.5.5 0 0 0 .86.5l1-1.75Z"
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
  ville.embed.fluent.WeatherDrizzle.$$dbClassInfo = $$dbClassInfo;
})();
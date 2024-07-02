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
  qx.Class.define("ville.embed.fluent.ArrowBetweenDown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4 2a.5.5 0 0 0-1 0v.5C3 3.33 3.67 4 4.5 4h10c.83 0 1.5-.67 1.5-1.5V2a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V2Zm5.5 3c.28 0 .5.22.5.5v7.8l3.65-3.65a.5.5 0 0 1 .7.7l-4.5 4.5a.5.5 0 0 1-.7 0l-4.5-4.5a.5.5 0 0 1 .7-.7L9 13.29V5.5c0-.28.22-.5.5-.5ZM3 17.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v.5a.5.5 0 0 1-1 0v-.5Z",
      FILLED: "M5 1.75a.75.75 0 0 0-1.5 0v.5C3.5 3.22 4.28 4 5.25 4h9C15.22 4 16 3.22 16 2.25v-.5a.75.75 0 0 0-1.5 0v.5c0 .14-.11.25-.25.25h-9A.25.25 0 0 1 5 2.25v-.5ZM9.75 5c.41 0 .75.34.75.75v6.69l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.44V5.75c0-.41.34-.75.75-.75ZM3.5 17.75c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z"
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
  ville.embed.fluent.ArrowBetweenDown.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.SendCopy", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.65 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L9.5 3.71v7.79a.5.5 0 0 1-1 0V3.7L6.35 5.86a.5.5 0 1 1-.7-.7l3-3ZM5.27 17c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4v-3.5a.5.5 0 1 0-1 0V14a3 3 0 0 1-3 3H5.27ZM4 8.5a.5.5 0 0 0-1 0V14c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-1 0V14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.5Z",
      FILLED: "M8.47 2.22c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L9.75 4.56v6.69a.75.75 0 0 1-1.5 0V4.56L7.03 5.78a.75.75 0 0 1-1.06-1.06l2.5-2.5ZM5.57 16.5A2 2 0 0 0 7.5 18H13a4.5 4.5 0 0 0 4.5-4.5v-2.25a.75.75 0 0 0-1.5 0v2.25a3 3 0 0 1-3 3H5.57ZM4.5 8.75a.75.75 0 0 0-1.5 0v4.75c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0v4.75a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.75Z"
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
  ville.embed.fluent.SendCopy.$$dbClassInfo = $$dbClassInfo;
})();
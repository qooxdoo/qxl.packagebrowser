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
  qx.Class.define("ville.embed.fluent.Building", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 18a.5.5 0 0 1-.5-.5v-14C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 0 1-.5.5h-11ZM5 3.5V17h2v-2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V17h2V9.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5ZM12 15h-1.5v2H12v-2Zm-2.5 0H8v2h1.5v-2Z",
      FILLED: "M4 3.5C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 0 1-.5.5H13v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V18H4.5a.5.5 0 0 1-.5-.5v-14Zm2.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-6.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 15v3h-1.5v-3H12Zm-2.5 0H8v3h1.5v-3Z"
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
  ville.embed.fluent.Building.$$dbClassInfo = $$dbClassInfo;
})();
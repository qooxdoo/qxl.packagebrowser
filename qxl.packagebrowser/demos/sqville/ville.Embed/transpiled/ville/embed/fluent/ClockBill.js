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
  qx.Class.define("ville.embed.fluent.ClockBill", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 9a8 8 0 1 0-6 7.75V15.7A7 7 0 1 1 15.93 10h1c.05-.33.07-.66.07-1ZM9 4.41a.5.5 0 0 0-1 .09v5.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H9V4.41ZM18 11h-4a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-.5 7h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Zm0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Zm0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z",
      FILLED: "M17 9a8 8 0 1 0-6 7.75V13a3 3 0 0 1 3-3h2.94c.04-.33.06-.66.06-1ZM8 4.5a.5.5 0 0 1 1-.09V9h2.5a.5.5 0 0 1 .09 1H8.5a.5.5 0 0 1-.5-.41V4.5ZM18 11h-4a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-.5 7h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Zm0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Zm0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z"
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
  ville.embed.fluent.ClockBill.$$dbClassInfo = $$dbClassInfo;
})();
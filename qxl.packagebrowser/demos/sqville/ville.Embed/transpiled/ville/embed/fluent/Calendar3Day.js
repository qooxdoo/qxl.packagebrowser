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
  qx.Class.define("ville.embed.fluent.Calendar3Day", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-8 2a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5ZM10 6a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Zm3.5 0a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z",
      FILLED: "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6ZM10 6a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Zm3.5 0a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41a.5.5 0 0 0-.5-.41Z"
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
  ville.embed.fluent.Calendar3Day.$$dbClassInfo = $$dbClassInfo;
})();
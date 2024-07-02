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
  qx.Class.define("ville.embed.fluent.FoodChickenLeg", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M18 7a5 5 0 0 0-9.93-.87c-.42 1.5-.83 2.29-1.04 2.63l-1.88 1.89a.5.5 0 0 0 .35.85h.39l-2 2a2 2 0 0 0-1.15 3.55c.08.06.15.13.2.21A2 2 0 0 0 6.5 16.1l2-2v.4a.5.5 0 0 0 .85.35l1.88-1.87c.34-.21 1.15-.63 2.7-1.07A4.97 4.97 0 0 0 18 7Zm-9.5 5.69-2.78 2.78a.75.75 0 0 0-.22.53 1 1 0 0 1-1.78.63c-.1-.13-.22-.25-.35-.35A1 1 0 0 1 4 14.5c.18 0 .37-.06.51-.21l2.8-2.79H8.5v1.19ZM13 3a4 4 0 0 1 1.37 7.76 11.6 11.6 0 0 0-3.8 1.47L9.49 13.3v-2.23a.5.5 0 0 0-.15-.35l-.06-.06a.5.5 0 0 0-.35-.15H6.71l1.07-1.07a11.53 11.53 0 0 0 1.28-3.1 3.97 3.97 0 0 1 .23-.82A4 4 0 0 1 13 3Z",
      FILLED: "M18 7a5 5 0 0 0-9.93-.87c-.42 1.5-.83 2.29-1.04 2.63l-1.88 1.89a.5.5 0 0 0 .35.85h.39l-2 2a2 2 0 0 0-1.15 3.55c.08.06.15.13.2.21A2 2 0 0 0 6.5 16.1l2-2v.4a.5.5 0 0 0 .85.35l1.88-1.87c.34-.21 1.15-.63 2.7-1.07A4.97 4.97 0 0 0 18 7ZM7.3 11.5h1.2v1.19l-2.78 2.78a.75.75 0 0 0-.22.53 1 1 0 0 1-1.78.63c-.1-.13-.22-.25-.35-.35A1 1 0 0 1 4 14.5c.18 0 .37-.06.51-.21l2.8-2.79Z"
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
  ville.embed.fluent.FoodChickenLeg.$$dbClassInfo = $$dbClassInfo;
})();
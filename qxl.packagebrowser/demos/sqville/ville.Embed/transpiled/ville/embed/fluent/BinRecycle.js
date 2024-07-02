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
  qx.Class.define("ville.embed.fluent.BinRecycle", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.3 7.75c-.58-1-2.02-1-2.6 0l-.45.78a.5.5 0 1 0 .87.5l.45-.78a.5.5 0 0 1 .86 0l.45.78a.5.5 0 0 0 .87-.5l-.45-.78Zm.86 3.5-.1-.19a.5.5 0 0 1 .86-.5l.11.19a1.5 1.5 0 0 1-1.3 2.25H11a.5.5 0 0 1 0-1h.73a.5.5 0 0 0 .43-.75ZM9 12a.5.5 0 0 1 0 1h-.73a1.5 1.5 0 0 1-1.3-2.25l.1-.19a.5.5 0 0 1 .87.5l-.1.19a.5.5 0 0 0 .43.75H9Zm6.91-9.41A2 2 0 0 1 16.5 4v.56l-1.33 11.67a2 2 0 0 1-2 1.77H6.85a2 2 0 0 1-2-1.77L3.5 4.56V4a2 2 0 0 1 2-2h9a2 2 0 0 1 1.41.59ZM14.5 3h-9a1 1 0 0 0-1 1h11a1 1 0 0 0-1-1Zm-.67 13.75a1 1 0 0 0 .33-.64L15.44 5H4.56l1.28 11.11a1 1 0 0 0 1 .89h6.32a1 1 0 0 0 .67-.25Z",
      FILLED: "M5.5 3h9a1 1 0 0 1 1 1h-11a1 1 0 0 1 1-1Zm-2 1v.5a.5.5 0 0 0 0 .06l1.35 11.67A2 2 0 0 0 6.84 18h6.32a2 2 0 0 0 1.99-1.77L16.5 4.56a.5.5 0 0 0 0-.04V4a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2Zm7.8 3.75.45.78a.5.5 0 1 1-.87.5l-.45-.78a.5.5 0 0 0-.86 0l-.45.78a.5.5 0 1 1-.87-.5l.45-.78c.58-1 2.02-1 2.6 0Zm.86 3.5-.1-.19a.5.5 0 0 1 .86-.5l.11.19a1.5 1.5 0 0 1-1.3 2.25H11a.5.5 0 0 1 0-1h.73a.5.5 0 0 0 .43-.75ZM9 12a.5.5 0 0 1 0 1h-.73a1.5 1.5 0 0 1-1.3-2.25l.1-.19a.5.5 0 0 1 .87.5l-.1.19a.5.5 0 0 0 .43.75H9Z"
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
  ville.embed.fluent.BinRecycle.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.TextBulletListRtl", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm0 5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5Zm-.5 4.5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11Zm2.5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
      FILLED: "M16.75 6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM13 4.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5c.41 0 .75-.34.75-.75ZM12.25 9a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm0 5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm3.25-4.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM16.75 16a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
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
  ville.embed.fluent.TextBulletListRtl.$$dbClassInfo = $$dbClassInfo;
})();
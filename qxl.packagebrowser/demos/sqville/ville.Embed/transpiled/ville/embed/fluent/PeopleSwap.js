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
  qx.Class.define("ville.embed.fluent.PeopleSwap", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 6.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm7.85 4.78A2 2 0 0 0 10 11H3.5a2 2 0 0 0-2 2V13.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 16.09 4.24 17 6.75 17c1.48 0 2.56-.32 3.34-.79l-.65-.65a1.53 1.53 0 0 1-.08-.09c-.6.31-1.44.53-2.61.53-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02V13a1 1 0 0 1 1-1H10a1 1 0 0 1 .64.23l.71-.7ZM14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm.85 5.35a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L17.29 14h-5.58l1.14-1.15Z",
      FILLED: "M10 6.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm1.35 4.78-1.91 1.9a1.5 1.5 0 0 0 0 2.13l.65.65a6.3 6.3 0 0 1-3.34.79C1.5 17 1.5 13 1.5 13c0-1.1.9-2 2-2H10a2 2 0 0 1 1.35.53ZM14.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-1.65 2.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L17.29 14h-5.58l1.14-1.15Z"
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
  ville.embed.fluent.PeopleSwap.$$dbClassInfo = $$dbClassInfo;
})();
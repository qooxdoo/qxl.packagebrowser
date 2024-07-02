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
  qx.Class.define("ville.embed.fluent.LinkEdit", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 4.5A.5.5 0 0 0 8 4H5.78A4 4 0 0 0 6 12h2.09a.5.5 0 0 0-.1-1H5.8A3 3 0 0 1 6 5h2.09a.5.5 0 0 0 .4-.5ZM18 8a4 4 0 0 0-4-4h-2.1a.5.5 0 0 0 .1 1h2.2A3 3 0 0 1 17 8.14c.33.1.66.28.95.52.03-.21.05-.43.05-.65Zm-4-.5H5.9a.5.5 0 0 0 .09 1h8.09a.5.5 0 0 0-.1-1Zm-4.02 6.88 4.83-4.83a1.87 1.87 0 0 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z",
      FILLED: "M18 8a4 4 0 0 0-4-4h-2.1a.75.75 0 0 0 .1 1.5h2.16A2.5 2.5 0 0 1 16.5 8v.02c.52.07 1.02.28 1.45.63.03-.21.05-.43.05-.65ZM8.75 4.75A.75.75 0 0 0 8 4H5.8a4 4 0 0 0 .2 8h2.1a.75.75 0 0 0-.1-1.5H5.84a2.5 2.5 0 0 1 .16-5h2.1a.75.75 0 0 0 .65-.75Zm5 2.5h-7.6a.75.75 0 0 0 .1 1.5h7.6a.75.75 0 0 0-.1-1.5Zm-3.77 7.13 4.83-4.83a1.87 1.87 0 0 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z"
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
  ville.embed.fluent.LinkEdit.$$dbClassInfo = $$dbClassInfo;
})();
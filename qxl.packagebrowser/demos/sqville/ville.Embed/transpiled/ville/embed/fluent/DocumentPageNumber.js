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
  qx.Class.define("ville.embed.fluent.DocumentPageNumber", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.07 12.44a.5.5 0 1 0 1 .15l.08-.59h1.24l-.07.44a.5.5 0 1 0 1 .15l.08-.59h.6a.5.5 0 0 0 0-1h-.46l.22-1.5h.74a.5.5 0 0 0 0-1h-.59l.14-.93a.5.5 0 0 0-1-.14L10.9 8.5H9.66l.14-.93a.5.5 0 0 0-1-.14L8.66 8.5H8a.5.5 0 0 0 0 1h.5L8.28 11H7.5a.5.5 0 1 0 0 1h.64l-.07.44Zm2.68-2.94-.22 1.5H9.3l.22-1.5h1.24ZM6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z",
      FILLED: "m10.75 9.5-.22 1.5H9.3l.22-1.5h1.24ZM5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9Zm2.57 10.44.07-.44H7.5a.5.5 0 1 1 0-1h.78l.22-1.5H8a.5.5 0 0 1 0-1h.65l.16-1.07a.5.5 0 0 1 .99.14l-.14.93h1.24l.16-1.07a.5.5 0 0 1 .99.14l-.14.93h.59a.5.5 0 0 1 0 1h-.74l-.22 1.5H12a.5.5 0 0 1 0 1h-.6l-.09.59a.5.5 0 1 1-.99-.15l.07-.44H9.15l-.09.59a.5.5 0 1 1-.99-.15Z"
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
  ville.embed.fluent.DocumentPageNumber.$$dbClassInfo = $$dbClassInfo;
})();
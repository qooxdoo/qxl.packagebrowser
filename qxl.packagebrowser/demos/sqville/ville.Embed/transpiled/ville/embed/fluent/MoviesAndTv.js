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
  qx.Class.define("ville.embed.fluent.MoviesAndTv", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.13 5.38 7.03 8h9.47c.28 0 .5.22.5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V8.57l-.26-.9a2.5 2.5 0 0 1 1.71-3.09L13.1 2.1a2.5 2.5 0 0 1 3.1 1.7l.27.97a.5.5 0 0 1-.34.62ZM3.84 7.88l.6-.17L5.9 5.2l-1.16.33A1.5 1.5 0 0 0 3.7 7.4l.14.48Zm2-.57 2.11-.61L9.4 4.2l-2.13.61-.02.04-1.42 2.46Zm5.62-1.63 1.44-2.5-2.12.62-.03.05L9.34 6.3l2.12-.62Zm2.68-2.65c0 .02 0 .03-.02.04l-1.27 2.22 2.52-.73-.14-.48a1.5 1.5 0 0 0-1.09-1.05ZM4 9v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9H4Z",
      FILLED: "M16.13 5.38 7.03 8h9.47c.28 0 .5.22.5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V8.57l-.26-.9a2.5 2.5 0 0 1 1.71-3.09L13.1 2.1a2.5 2.5 0 0 1 3.1 1.7l.27.97a.5.5 0 0 1-.34.62ZM3.84 7.88l.6-.17L5.9 5.2l-1.16.33A1.5 1.5 0 0 0 3.7 7.4l.14.48Zm2-.57 2.11-.61L9.4 4.2l-2.13.61-.02.04-1.42 2.46Zm5.62-1.63 1.44-2.5-2.12.62-.03.05L9.34 6.3l2.12-.62Zm2.68-2.65c0 .02 0 .03-.02.04l-1.27 2.22 2.52-.73-.14-.48a1.5 1.5 0 0 0-1.09-1.05Z"
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
  ville.embed.fluent.MoviesAndTv.$$dbClassInfo = $$dbClassInfo;
})();
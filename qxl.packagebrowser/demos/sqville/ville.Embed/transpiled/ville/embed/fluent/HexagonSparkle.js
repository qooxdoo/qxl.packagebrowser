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
  qx.Class.define("ville.embed.fluent.HexagonSparkle", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM16.5 12c-.22 0-.44-.06-.63-.16l-2.26 3.91a.5.5 0 0 1-.43.25H6.83a.5.5 0 0 1-.44-.25l-3.17-5.5a.5.5 0 0 1 0-.5l3.17-5.5A.5.5 0 0 1 6.83 4h2.26a1.42 1.42 0 0 1 0-1H6.83a1.5 1.5 0 0 0-1.3.75l-3.18 5.5a1.5 1.5 0 0 0 0 1.5l3.18 5.5c.26.46.76.75 1.3.75h6.35a1.5 1.5 0 0 0 1.3-.75l2.49-4.32c-.15.05-.3.07-.47.07Z",
      FILLED: "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM16.5 12c-.27 0-.53-.08-.74-.23a1.4 1.4 0 0 1-.48-.62l-.26-.8a.52.52 0 0 0-.14-.22.64.64 0 0 0-.22-.14l-.77-.25c-.27-.1-.49-.26-.65-.48a1.3 1.3 0 0 1-.12-1.3 1.32 1.32 0 0 1-.45-.22 1.51 1.51 0 0 1-.52-.69l-.36-1.09a1.27 1.27 0 0 0-.29-.47 1.3 1.3 0 0 0-.47-.3l-1.06-.34A1.41 1.41 0 0 1 9 3.5c0-.18.03-.34.09-.5H6.83a1.5 1.5 0 0 0-1.3.75l-3.18 5.5a1.5 1.5 0 0 0 0 1.5l3.18 5.5c.26.46.76.75 1.3.75h6.35a1.5 1.5 0 0 0 1.3-.75l2.49-4.32c-.15.05-.3.07-.47.07Z"
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
  ville.embed.fluent.HexagonSparkle.$$dbClassInfo = $$dbClassInfo;
})();

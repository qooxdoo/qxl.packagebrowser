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
  qx.Class.define("ville.embed.fluent.CubeMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.2 2.51a5 5 0 0 1 3.6 0l4.24 1.64c.58.22.96.77.96 1.4v.14a2.5 2.5 0 0 0-.6-.34l-4.96-1.9a4 4 0 0 0-2.88 0L3.6 5.34c-.22.09-.42.2-.6.34v-.14c0-.63.38-1.18.96-1.4L8.21 2.5Zm-2.16 5.8a.5.5 0 0 1 .66-.27L10 9.46l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37v3.17a.5.5 0 0 1-1 0v-3.17L6.3 8.96a.5.5 0 0 1-.26-.66Zm2.88-3.93a3 3 0 0 1 2.16 0l4.96 1.9c.58.23.96.79.96 1.4v6.63a1.5 1.5 0 0 1-.96 1.4l-4.96 1.91a3 3 0 0 1-2.16 0l-4.96-1.9a1.5 1.5 0 0 1-.96-1.4V7.68c0-.62.38-1.18.96-1.4l4.96-1.91Zm1.8.93a2 2 0 0 0-1.44 0L4.32 7.22a.5.5 0 0 0-.32.47v6.62c0 .21.13.4.32.47l4.96 1.9a2 2 0 0 0 1.44 0l4.96-1.9a.5.5 0 0 0 .32-.47V7.7a.5.5 0 0 0-.32-.47l-4.96-1.9Z",
      FILLED: "M8.2 2.51a5 5 0 0 1 3.6 0l4.24 1.64c.58.22.96.77.96 1.4v.14a2.5 2.5 0 0 0-.6-.34l-4.96-1.9a4 4 0 0 0-2.88 0L3.6 5.35c-.22.09-.42.2-.6.34v-.14c0-.63.38-1.18.96-1.4L8.21 2.5Zm2.88 1.87a3 3 0 0 0-2.16 0l-4.96 1.9A1.5 1.5 0 0 0 3 7.69v6.63c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 0 0 2.16 0l4.96-1.9c.58-.23.96-.79.96-1.4V7.68a1.5 1.5 0 0 0-.96-1.4l-4.96-1.91ZM6.04 8.3a.5.5 0 0 1 .66-.26L10 9.46l3.3-1.42a.5.5 0 0 1 .4.92l-3.2 1.37v3.17a.5.5 0 1 1-1 0v-3.17L6.3 8.96a.5.5 0 0 1-.26-.66Z"
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
  ville.embed.fluent.CubeMultiple.$$dbClassInfo = $$dbClassInfo;
})();

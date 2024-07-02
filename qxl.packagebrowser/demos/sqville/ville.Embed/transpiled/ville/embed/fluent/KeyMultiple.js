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
  qx.Class.define("ville.embed.fluent.KeyMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.32 2.01 10 2a4 4 0 0 0-3.84 5.13l-3.98 3.99a.6.6 0 0 0-.18.42v2.86c0 .33.27.6.6.6h2.8a.6.6 0 0 0 .6-.6V13h1.9a.6.6 0 0 0 .6-.6v-1.7l.73-.73c-.21-.26-.4-.54-.56-.84l-1 .99a.6.6 0 0 0-.17.42V12H5.6a.6.6 0 0 0-.6.6V14H3v-2.3L7.32 7.4l-.12-.3a3 3 0 0 1 1.96-3.97c.33-.42.72-.8 1.16-1.1Zm3.18 4.24a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 6.5a4.5 4.5 0 1 1 7 3.74v2.05l.78.79a.6.6 0 0 1 0 .84L15.71 15l1.06 1.07a.6.6 0 0 1-.04.89l-2.36 1.88a.6.6 0 0 1-.74 0l-2.4-1.92a.6.6 0 0 1-.23-.47v-6.2A4.5 4.5 0 0 1 9 6.5ZM13.5 3a3.5 3.5 0 0 0-1.75 6.53.5.5 0 0 1 .25.43v6.3l2 1.6 1.75-1.4-1.03-1.04a.6.6 0 0 1 0-.84l1.07-1.08-.61-.62a.6.6 0 0 1-.18-.42v-2.5c0-.17.1-.34.25-.43A3.5 3.5 0 0 0 13.5 3Z",
      FILLED: "m10 2 .32.01a5.5 5.5 0 0 0-1.09 7.96l-.73.74v1.69a.6.6 0 0 1-.6.6H6v1.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6v-2.86a.6.6 0 0 1 .18-.42l3.98-3.99A4 4 0 0 1 10 2ZM9 6.5a4.5 4.5 0 1 1 7 3.74v2.05l.78.79a.6.6 0 0 1 0 .84L15.71 15l1.06 1.07a.6.6 0 0 1-.04.89l-2.36 1.88a.6.6 0 0 1-.74 0l-2.4-1.92a.6.6 0 0 1-.23-.47v-6.2A4.5 4.5 0 0 1 9 6.5Zm5.25-1a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
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
  ville.embed.fluent.KeyMultiple.$$dbClassInfo = $$dbClassInfo;
})();

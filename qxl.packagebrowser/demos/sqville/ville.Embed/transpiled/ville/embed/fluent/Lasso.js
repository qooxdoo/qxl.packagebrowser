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
  qx.Class.define("ville.embed.fluent.Lasso", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.16 2.21a8.02 8.02 0 0 1 3.68 0 .5.5 0 0 1-.23.98 7.02 7.02 0 0 0-3.22 0 .5.5 0 0 1-.23-.98ZM6.48 3.36a.5.5 0 0 1-.16.68 7.04 7.04 0 0 0-2.28 2.28.5.5 0 1 1-.85-.53 8.04 8.04 0 0 1 2.6-2.6.5.5 0 0 1 .7.17Zm7.04 0a.5.5 0 0 1 .69-.17 8.04 8.04 0 0 1 2.6 2.6.5.5 0 0 1-.85.53 7.04 7.04 0 0 0-2.28-2.28.5.5 0 0 1-.16-.68ZM2.82 7.79a.5.5 0 0 1 .37.6 7.02 7.02 0 0 0 0 3.22.5.5 0 0 1-.98.23 8.02 8.02 0 0 1 0-3.68.5.5 0 0 1 .6-.37Zm14.37 0a.5.5 0 0 1 .6.37 8.03 8.03 0 0 1 0 3.68.5.5 0 0 1-.98-.23 7.02 7.02 0 0 0 0-3.22.5.5 0 0 1 .38-.6ZM3.36 13.52a.5.5 0 0 1 .68.16c.58.92 1.36 1.7 2.28 2.28a.5.5 0 1 1-.53.85 8.04 8.04 0 0 1-2.6-2.6.5.5 0 0 1 .17-.7Zm13.57.73a.5.5 0 1 0-.86-.5l-.02.03a3.6 3.6 0 0 1-.32.46 7.8 7.8 0 0 1-1.16 1.22A6.55 6.55 0 0 0 10.5 14c-1.52 0-2.49.9-2.49 2s.97 2 2.49 2a7.1 7.1 0 0 0 4.03-1.26 8.6 8.6 0 0 1 1.5 1.95l.02.03a.5.5 0 1 0 .9-.44s-.13-.24 0 0l-.01-.02a3.37 3.37 0 0 0-.1-.18 9.6 9.6 0 0 0-1.49-1.93l-.02-.03a8.8 8.8 0 0 0 1.6-1.86.9.9 0 0 1 0-.01ZM10.5 15c1.3 0 2.38.46 3.23 1.07-.85.53-1.93.93-3.23.93-1.13 0-1.49-.6-1.49-1s.36-1 1.49-1Z",
      FILLED: "M8.16 2.21a8.02 8.02 0 0 1 3.68 0 .75.75 0 0 1-.35 1.46 6.52 6.52 0 0 0-2.98 0 .75.75 0 0 1-.35-1.46ZM6.83 3.44c.21.35.1.81-.25 1.03a6.54 6.54 0 0 0-2.11 2.11.75.75 0 0 1-1.28-.79 8.04 8.04 0 0 1 2.6-2.6.75.75 0 0 1 1.04.25Zm6.34 0a.75.75 0 0 1 1.04-.25 8.04 8.04 0 0 1 2.6 2.6.75.75 0 0 1-1.28.8 6.54 6.54 0 0 0-2.11-2.12.75.75 0 0 1-.25-1.03ZM3.11 7.6c.4.1.66.5.56.9a6.52 6.52 0 0 0 0 3 .75.75 0 0 1-1.46.34 8.02 8.02 0 0 1 0-3.68c.1-.4.5-.65.9-.56Zm13.78 0c.4-.1.8.16.9.56a8.02 8.02 0 0 1 0 3.68.75.75 0 0 1-1.46-.35 6.52 6.52 0 0 0 0-2.98c-.1-.4.15-.81.56-.9ZM3.44 13.17a.75.75 0 0 1 1.03.25 6.54 6.54 0 0 0 2.11 2.11.75.75 0 1 1-.79 1.28 8.04 8.04 0 0 1-2.6-2.6.75.75 0 0 1 .25-1.04Zm13.67 1.27a.75.75 0 0 0-1.22-.88l-.02.03a4.79 4.79 0 0 1-.38.46c-.24.28-.6.64-1.02 1.01a6.73 6.73 0 0 0-3.97-1.31 2.6 2.6 0 0 0-1.84.68 2.17 2.17 0 0 0 0 3.14 2.6 2.6 0 0 0 1.84.68c1.53 0 2.87-.58 3.91-1.27a9.4 9.4 0 0 1 1.1 1.31 7.02 7.02 0 0 1 .3.52l.02.02c-.15-.26 0 0 0 0a.75.75 0 0 0 1.34-.67c.19.38 0 0 0 0l-.01-.02-.02-.04a5.61 5.61 0 0 0-.4-.64 9.9 9.9 0 0 0-1.13-1.4 11.79 11.79 0 0 0 1.46-1.57l.03-.04v-.01h.01Zm-6.61.81c1.03 0 1.91.3 2.65.74a5.4 5.4 0 0 1-2.65.76c-.42 0-.67-.13-.8-.26a.67.67 0 0 1 0-.98c.13-.13.38-.26.8-.26Z"
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
  ville.embed.fluent.Lasso.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.GlobeLocation", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 18a8 8 0 0 0 2.5-.4 8.14 8.14 0 0 1-.98-1.63c-.5.7-1.03 1.03-1.52 1.03-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H11c.02-.34.06-.68.14-1H7.21a14.87 14.87 0 0 1 0-5h5.58c.12.7.2 1.46.2 2.26.3-.2.64-.38 1-.5-.03-.61-.1-1.2-.18-1.76h2.73c.21.55.35 1.13.42 1.74.37.12.72.3 1.04.51A8 8 0 1 0 10 18Zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3ZM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 0 1 7.7 3.38c-.24.33-.45.7-.64 1.1ZM6.2 7.5a15.97 15.97 0 0 0 0 5H3.46a6.98 6.98 0 0 1 0-5h2.73Zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 0 1-3.77-3.11h2.45Zm5.9-10.12a7.02 7.02 0 0 1 3.77 3.12h-2.45a10.5 10.5 0 0 0-.68-2.01c-.19-.4-.4-.78-.64-1.1ZM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24Zm-2-.18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      FILLED: "M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32Zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 0 0 2.8 6.5h3.5c.18-1 .44-1.92.76-2.7Zm5.88 0a7.19 7.19 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm.91 3.7h3.75c.24.71.37 1.47.4 2.25a4.52 4.52 0 0 0-4-.5c-.03-.6-.08-1.18-.15-1.75ZM13 9.76c-.01-.79-.07-1.55-.16-2.26H7.16a19.44 19.44 0 0 0 0 5h3.98c.27-1.13.93-2.1 1.86-2.74Zm-2 3.74H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.3 0 .65-.15 1-.52.26-.26.5-.61.74-1.06A5.94 5.94 0 0 1 11 13.5Zm-8.2 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 0 1-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8Zm3.35-1H2.4a8 8 0 0 1 0-5h3.75a20.52 20.52 0 0 0 0 5ZM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24Zm-2-.18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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
  ville.embed.fluent.GlobeLocation.$$dbClassInfo = $$dbClassInfo;
})();
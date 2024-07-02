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
  qx.Class.define("ville.embed.fluent.ClipboardNumber123", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h1.59a1.5 1.5 0 0 1-.09-.5V17H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v7.2a3.6 3.6 0 0 1 1-.53V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm2 14.05v-.02a.79.79 0 0 1 0-.1l.03-.23c.04-.18.12-.41.28-.69a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45Zm5.87-3.95c.42-.46.84-.6 1.16-.6.35 0 .64.15.81.35.17.2.2.4.12.55-.07.17-.33.44-1.07.61a.5.5 0 0 0 0 .98c.74.17 1 .44 1.07.61.07.16.05.35-.12.55-.17.2-.46.35-.8.35-.33 0-.75-.14-1.17-.6a.5.5 0 0 0-.74.66c.58.65 1.26.94 1.9.94.64 0 1.2-.28 1.57-.7a1.5 1.5 0 0 0-.32-2.3c.27-.19.47-.42.6-.69a1.5 1.5 0 0 0-.28-1.61c-.36-.42-.93-.7-1.56-.7-.65 0-1.33.29-1.91.94a.5.5 0 0 0 .74.67ZM9 12.6c0-.2-.1-.35-.2-.44a.64.64 0 0 0-.3-.14c-.13-.03-.5-.03-.67.32-.2.41-.54.93-1.07 1.22a.5.5 0 1 0 .48.88c.3-.17.55-.37.76-.6v3.66a.5.5 0 0 0 1 0v-4.9Z",
      FILLED: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h1.59a1.5 1.5 0 0 1-.09-.5v-2a1.5 1.5 0 0 1-.73-2.81c.27-.15.5-.46.66-.79.47-.96 1.46-.92 1.76-.86a1.64 1.64 0 0 1 1.12.81c.6-.5 1.28-.8 2.01-.85a3.05 3.05 0 0 1 2.6 1.22c.47-.5 1-.86 1.58-1.05V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm7.87 10.1c.42-.46.84-.6 1.16-.6.35 0 .64.15.81.35.17.2.2.4.12.55-.07.17-.33.44-1.07.61a.5.5 0 0 0 0 .98c.74.17 1 .44 1.07.61.07.16.05.35-.12.55-.17.2-.46.35-.8.35-.33 0-.75-.14-1.17-.6a.5.5 0 0 0-.74.66c.58.65 1.26.94 1.9.94.64 0 1.2-.28 1.57-.7a1.5 1.5 0 0 0-.32-2.3c.27-.19.47-.42.6-.69a1.5 1.5 0 0 0-.28-1.61c-.36-.42-.93-.7-1.56-.7-.65 0-1.33.29-1.91.94a.5.5 0 0 0 .74.67Zm-3.94-.6c-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45v-.02a.79.79 0 0 1 0-.1l.03-.23c.04-.18.12-.41.28-.69a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29ZM9 12.6c0-.2-.1-.35-.2-.44a.64.64 0 0 0-.3-.14c-.13-.03-.5-.03-.67.32-.2.41-.54.93-1.07 1.22a.5.5 0 1 0 .48.88c.3-.17.55-.37.76-.6v3.66a.5.5 0 0 0 1 0v-4.9Z"
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
  ville.embed.fluent.ClipboardNumber123.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.AnimalDog", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.77 2.4c.42-.3.9-.4 1.23-.4h1.45c.45 0 .9.12 1.28.36l1.78 1.07c.3.18.49.5.49.85V5.5c0 .83-.67 1.5-1.5 1.5H15v8.04c.42.06.84.22 1.2.51.5.43.8 1.08.8 1.95a.5.5 0 0 1-.5.5H5a3 3 0 0 1-1.8-5.4.5.5 0 0 1 .6.8A2 2 0 0 0 5 17c.29 0 .47-.07.59-.15.12-.08.21-.2.28-.32A1.34 1.34 0 0 0 6 16v-.05a4.69 4.69 0 0 1 .03-.5c.04-.33.1-.8.23-1.32.27-1.05.8-2.4 1.89-3.48C9.99 8.8 10 6.33 10 5.5V4c0-.76.33-1.29.77-1.6Zm.15 4.5a7.51 7.51 0 0 1-2.07 4.45 6.47 6.47 0 0 0-1.61 3.02 8.33 8.33 0 0 0-.24 1.6v.06a1.78 1.78 0 0 1-.03.29 2.34 2.34 0 0 1-.22.68h6.17c-.1-.32-.3-.65-.65-.83-.19-.1-.44-.17-.77-.17h-1a.5.5 0 0 1 0-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 0 1 1 0v2.95c.58.42.85 1.04.95 1.55h2a1.2 1.2 0 0 0-.4-.68A1.64 1.64 0 0 0 14.5 16a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h1a.5.5 0 0 0 .5-.5V4.28l-1.78-1.07a1.5 1.5 0 0 0-.77-.21H12c-.17 0-.44.06-.65.2-.18.14-.35.36-.35.8v1.5c0 .09.03.23.1.33.06.08.16.17.4.17.24 0 .34-.09.4-.17.07-.1.1-.24.1-.33a.5.5 0 0 1 1 0c0 .25-.07.6-.3.92-.24.33-.64.58-1.2.58-.22 0-.4-.04-.58-.1ZM7 16h-.5Z",
      FILLED: "M12 2c-.33 0-.81.1-1.23.4-.44.31-.77.84-.77 1.6v1.25c0 .13.04.34.16.5.09.12.25.25.59.25.34 0 .5-.13.6-.26a.9.9 0 0 0 .15-.49.5.5 0 1 1 1 0c0 .3-.08.71-.35 1.08-.28.39-.74.67-1.4.67-.32 0-.6-.06-.82-.18a6.5 6.5 0 0 1-1.78 3.83 7.47 7.47 0 0 0-1.89 3.48A9.33 9.33 0 0 0 6 15.95v.08a1.34 1.34 0 0 1-.13.5.82.82 0 0 1-.28.32c-.12.08-.3.15-.59.15a2 2 0 0 1-1.2-3.6.5.5 0 1 0-.6-.8A3 3 0 0 0 5 18h8v-.5c0-.4-.19-1.05-.73-1.33-.19-.1-.44-.17-.77-.17h-1a.5.5 0 0 1 0-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 0 1 1 0v2.95c.79.57 1 1.52 1 2.05v.5h2.5a.5.5 0 0 0 .5-.5c0-.87-.3-1.52-.8-1.95-.36-.29-.78-.45-1.2-.51V7h.5c.83 0 1.5-.67 1.5-1.5V4.28a1 1 0 0 0-.49-.85l-1.78-1.07A2.5 2.5 0 0 0 13.45 2H12Z"
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
  ville.embed.fluent.AnimalDog.$$dbClassInfo = $$dbClassInfo;
})();
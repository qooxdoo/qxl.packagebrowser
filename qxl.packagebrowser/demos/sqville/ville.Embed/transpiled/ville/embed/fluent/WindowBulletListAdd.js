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
  qx.Class.define("ville.embed.fluent.WindowBulletListAdd", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V7h12v2.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm10.08 3.02a.56.56 0 0 0-.13-.02h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .11.55c.1.1.25.15.39.15h1.79c.79-.56 1.73-.9 2.74-.98Zm-8.5.09a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31ZM5.5 13.5a.97.97 0 0 1 .29-.7c.1-.1.2-.17.32-.22a.84.84 0 0 1 .39-.08c.13 0 .26.03.38.08s.23.12.32.2a1 1 0 0 1-.7 1.71.97.97 0 0 1-.4-.07 1.1 1.1 0 0 1-.31-.2.84.84 0 0 1-.21-.32 1.2 1.2 0 0 1-.08-.4ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
      FILLED: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6c-.32-.16-.65-.3-1-.4V7H4v7c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm8.34 4c.79-.56 1.73-.9 2.74-.98a.56.56 0 0 0-.13-.02h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .11.55c.1.1.25.15.39.15h1.79Zm-5.76-.89a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31ZM5.5 13.5a.97.97 0 0 1 .29-.7c.1-.1.2-.17.32-.22a.84.84 0 0 1 .39-.08c.13 0 .26.03.38.08s.23.12.32.2a1 1 0 0 1-.7 1.71.97.97 0 0 1-.4-.07 1.1 1.1 0 0 1-.31-.2.84.84 0 0 1-.21-.32 1.2 1.2 0 0 1-.08-.4ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z"
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
  ville.embed.fluent.WindowBulletListAdd.$$dbClassInfo = $$dbClassInfo;
})();
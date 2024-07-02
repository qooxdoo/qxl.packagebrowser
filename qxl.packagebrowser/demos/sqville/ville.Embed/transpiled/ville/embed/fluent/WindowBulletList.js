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
  qx.Class.define("ville.embed.fluent.WindowBulletList", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.58 9.11a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31Zm0 4a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1.01 1.01 0 0 0 .29-.7 1 1 0 0 0-.3-.71c-.1-.09-.2-.16-.32-.21a.94.94 0 0 0-.38-.08.84.84 0 0 0-.4.08 1.01 1.01 0 0 0-.53.53ZM9.55 10a.56.56 0 0 1-.39-.15.46.46 0 0 1 0-.7c.1-.1.25-.15.39-.15h4.4a.56.56 0 0 1 .5.31.46.46 0 0 1-.11.54c-.1.1-.25.15-.4.15h-4.4Zm-.39 3.85c.1.1.25.15.39.15h4.4a.56.56 0 0 0 .5-.3.46.46 0 0 0-.11-.55.56.56 0 0 0-.4-.15h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .12.55ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10 3H4v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Z",
      FILLED: "M5.58 9.11a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1 1 0 0 0 0-1.41c-.1-.09-.2-.16-.33-.21a.95.95 0 0 0-.38-.08.86.86 0 0 0-.4.08c-.11.05-.22.13-.31.22s-.16.2-.21.31Zm0 4a.97.97 0 0 0-.08.39c0 .14.03.27.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.26.08.39.08s.27-.02.4-.08c.11-.05.22-.13.31-.22a1.01 1.01 0 0 0 .29-.7 1 1 0 0 0-.3-.71c-.1-.09-.2-.16-.32-.21a.94.94 0 0 0-.38-.08.84.84 0 0 0-.4.08 1.01 1.01 0 0 0-.53.53ZM9.55 10a.56.56 0 0 1-.39-.15.46.46 0 0 1 0-.7c.1-.1.25-.15.39-.15h4.4a.56.56 0 0 1 .5.31.46.46 0 0 1-.11.54c-.1.1-.25.15-.4.15h-4.4Zm-.39 3.85c.1.1.25.15.39.15h4.4a.56.56 0 0 0 .5-.3.46.46 0 0 0-.11-.55.56.56 0 0 0-.4-.15h-4.4a.56.56 0 0 0-.5.3.46.46 0 0 0 .12.55ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14V7h12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
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
  ville.embed.fluent.WindowBulletList.$$dbClassInfo = $$dbClassInfo;
})();

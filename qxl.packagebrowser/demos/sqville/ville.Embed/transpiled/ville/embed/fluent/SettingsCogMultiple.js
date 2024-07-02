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
  qx.Class.define("ville.embed.fluent.SettingsCogMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "m7.44 3.03-.2 1.02A1.42 1.42 0 0 1 5.4 5.12l-.98-.34c-.22.3-.41.62-.56.97l.78.68c.65.56.65 1.57 0 2.14l-.78.68c.15.35.34.67.56.97l.98-.34c.82-.28 1.7.23 1.85 1.07l.2 1.02a4.55 4.55 0 0 0 1.13 0l.2-1.02a1.42 1.42 0 0 1 1.84-1.07l.98.34c.22-.3.41-.63.56-.98l-.78-.67a1.42 1.42 0 0 1 0-2.14l.78-.67a4.5 4.5 0 0 0-.56-.98l-.98.34a1.42 1.42 0 0 1-1.85-1.07l-.2-1.01a4.55 4.55 0 0 0-1.12 0Zm-.52-.92a5.52 5.52 0 0 1 2.17 0c.2.04.35.2.4.4l.25 1.35c.05.25.3.4.55.31l1.3-.45a.5.5 0 0 1 .54.14 5.5 5.5 0 0 1 1.08 1.89c.07.19.01.4-.14.53l-1.04.9c-.2.17-.2.47 0 .63l1.04.9a.5.5 0 0 1 .14.54 5.5 5.5 0 0 1-1.08 1.89.5.5 0 0 1-.54.14l-1.3-.45a.42.42 0 0 0-.55.31l-.26 1.36a.5.5 0 0 1-.4.4 5.52 5.52 0 0 1-2.16 0 .5.5 0 0 1-.4-.4l-.26-1.36a.42.42 0 0 0-.54-.31l-1.3.45a.5.5 0 0 1-.55-.14A5.5 5.5 0 0 1 2.8 9.26a.5.5 0 0 1 .14-.54l1.05-.9c.19-.17.19-.47 0-.63l-1.05-.91a.5.5 0 0 1-.14-.54c.23-.7.6-1.34 1.08-1.88a.5.5 0 0 1 .54-.14l1.3.45c.25.08.5-.06.55-.31l.27-1.36a.5.5 0 0 1 .39-.4Zm4.77 10.19a.46.46 0 0 0-.53.15c-.14.2-.26.4-.36.62-.08.19-.02.4.13.53l.64.56c.21.18.21.5 0 .68l-.64.56a.46.46 0 0 0-.13.53c.1.22.22.43.36.62.12.17.34.22.53.15l.8-.27c.26-.1.54.07.6.34l.15.83c.04.2.2.36.4.38a3.56 3.56 0 0 0 .72 0c.2-.02.35-.18.4-.38l.15-.83a.45.45 0 0 1 .6-.34l.8.27c.19.07.4.02.52-.15.14-.2.27-.4.36-.62a.46.46 0 0 0-.13-.53l-.64-.56a.45.45 0 0 1 0-.68l.64-.56a.46.46 0 0 0 .13-.53 3.5 3.5 0 0 0-.36-.62.46.46 0 0 0-.52-.15l-.8.27a.45.45 0 0 1-.6-.34l-.16-.83a.46.46 0 0 0-.4-.38 3.55 3.55 0 0 0-.71 0 .46.46 0 0 0-.4.38l-.16.83a.45.45 0 0 1-.6.34l-.8-.27ZM14 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-7-8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
      FILLED: "M8 2c-.37 0-.73.04-1.08.1a.5.5 0 0 0-.4.4l-.26 1.36c-.05.25-.3.4-.54.31l-1.3-.45a.5.5 0 0 0-.55.14A5.5 5.5 0 0 0 2.8 5.74c-.07.2-.01.4.14.54l1.05.9c.19.17.19.47 0 .63l-1.05.91a.5.5 0 0 0-.14.54c.23.7.6 1.34 1.08 1.88.14.15.35.2.54.14l1.3-.45c.25-.08.5.06.55.31l.27 1.36c.03.2.19.35.39.4a5.52 5.52 0 0 0 2.17 0 .5.5 0 0 0 .4-.4l.25-1.36c.05-.25.3-.4.55-.31l1.3.45c.19.06.4 0 .54-.14a5.5 5.5 0 0 0 1.08-1.89.5.5 0 0 0-.14-.53l-1.04-.9a.42.42 0 0 1 0-.63l1.04-.9a.5.5 0 0 0 .14-.54 5.5 5.5 0 0 0-1.08-1.89.5.5 0 0 0-.54-.14l-1.3.45a.42.42 0 0 1-.55-.31L9.48 2.5a.5.5 0 0 0-.4-.4C8.75 2.05 8.39 2 8 2ZM6.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.66 4.95a.46.46 0 0 1 .53-.15l.8.27c.26.1.54-.07.6-.34l.15-.83c.04-.2.2-.36.4-.38a3.55 3.55 0 0 1 .72 0c.2.02.35.18.4.38l.15.83c.06.27.34.43.6.34l.8-.27c.19-.07.4-.02.52.15.14.2.27.4.36.62.09.19.03.4-.13.53l-.64.56c-.2.18-.2.5 0 .68l.64.56c.16.13.22.34.13.53-.1.22-.22.43-.36.62a.46.46 0 0 1-.52.15l-.8-.27a.45.45 0 0 0-.6.34l-.16.83c-.04.2-.19.36-.4.38a3.55 3.55 0 0 1-.71 0 .46.46 0 0 1-.4-.38l-.16-.83a.45.45 0 0 0-.6-.34l-.8.27c-.18.07-.4.02-.52-.15a3.5 3.5 0 0 1-.36-.62.46.46 0 0 1 .13-.53l.64-.56c.21-.18.21-.5 0-.68l-.64-.56a.46.46 0 0 1-.13-.53c.1-.22.22-.43.36-.62ZM15 14.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
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
  ville.embed.fluent.SettingsCogMultiple.$$dbClassInfo = $$dbClassInfo;
})();

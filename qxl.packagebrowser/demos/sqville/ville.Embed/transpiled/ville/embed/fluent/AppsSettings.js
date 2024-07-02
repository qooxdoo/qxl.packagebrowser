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
  qx.Class.define("ville.embed.fluent.AppsSettings", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15.5 17h-5.1c.16-.32.3-.65.4-1h4.7a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5H10.5v1.7a5.51 5.51 0 0 0-1-1.47v-.23h-.22c-.44-.4-.94-.75-1.49-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41V9.2c-.35.1-.68.24-1 .4V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm-5-9.3v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.62 2.62c.16.17.42.2.61.07l.08-.06 2.76-2.63a.5.5 0 0 0 .06-.64l-.06-.07-2.75-2.7ZM3.07 11.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
      FILLED: "M15.5 17h-5.1c.16-.32.3-.65.4-1h4.7a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5H10.5v1.7a5.51 5.51 0 0 0-1-1.47v-.23h-.22c-.44-.4-.94-.75-1.49-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41V9.2c-.35.1-.68.24-1 .4V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm-5-9.3v1.8h1.79L10.5 7.7Zm-7.43 3.74a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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
  ville.embed.fluent.AppsSettings.$$dbClassInfo = $$dbClassInfo;
})();
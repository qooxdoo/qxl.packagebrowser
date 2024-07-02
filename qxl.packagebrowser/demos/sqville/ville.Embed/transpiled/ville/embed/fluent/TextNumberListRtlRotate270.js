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
  qx.Class.define("ville.embed.fluent.TextNumberListRtlRotate270", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M1.01 4.4A.5.5 0 0 1 1.5 4h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.45 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.08A.5.5 0 0 1 1 4.4Zm7.34 1.96a.5.5 0 0 1-.7 0h-.01v-.02a1.38 1.38 0 0 1-.11-.12A2.5 2.5 0 0 1 7 4.7c0-.38.1-.79.35-1.12a1.4 1.4 0 0 1 1.15-.56c.55 0 .93.24 1.2.57a4.2 4.2 0 0 1 .56.95c.16.31.3.55.47.72.08.06.16.12.27.17V3.5a.5.5 0 1 1 1 0V6a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.53a3.32 3.32 0 0 1-.77-1.14c-.13-.28-.23-.47-.35-.62A.5.5 0 0 0 8.5 4c-.18 0-.28.06-.35.16a.93.93 0 0 0-.15.52 1.5 1.5 0 0 0 .35.96c.2.2.2.51 0 .7ZM15 4.76a.5.5 0 0 0 1 0c0-.35.1-.54.18-.63.09-.1.2-.13.3-.13.2 0 .52.19.52.76 0 .4-.1.62-.17.72a.42.42 0 0 1-.07.09.5.5 0 0 0 .46.88h.01l.02-.01a.8.8 0 0 0 .15-.1c.08-.07.17-.17.27-.3.18-.29.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .58.15 1 .33 1.27a1.4 1.4 0 0 0 .42.4l.01.02h.01a.5.5 0 0 0 .48-.88.42.42 0 0 1-.08-.1c-.07-.09-.17-.3-.17-.71 0-.57.33-.75.52-.76.1 0 .21.03.3.13.08.1.18.28.18.63Zm-.75.81h-.02v-.01l.02.01ZM9.5 18a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm-5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm9.5-.5a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-1 0v8Z",
      FILLED: "M1.01 4.4A.5.5 0 0 1 1.5 4h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.45 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.08A.5.5 0 0 1 1 4.4Zm7.34 1.96a.5.5 0 0 1-.7 0h-.01v-.02a1.38 1.38 0 0 1-.11-.12A2.5 2.5 0 0 1 7 4.7c0-.38.1-.79.35-1.12a1.4 1.4 0 0 1 1.15-.56c.55 0 .93.24 1.2.57a4.2 4.2 0 0 1 .56.95c.16.31.3.55.47.72.08.06.16.12.27.17V3.5a.5.5 0 1 1 1 0V6a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.53a3.32 3.32 0 0 1-.77-1.14c-.13-.28-.23-.47-.35-.62A.5.5 0 0 0 8.5 4c-.18 0-.28.06-.35.16a.93.93 0 0 0-.15.52 1.5 1.5 0 0 0 .35.96c.2.2.2.51 0 .7ZM15 4.76a.5.5 0 0 0 1 0c0-.35.1-.54.18-.63.09-.1.2-.13.3-.13.2 0 .52.19.52.76 0 .4-.1.62-.17.72a.42.42 0 0 1-.07.09.5.5 0 0 0 .46.88h.01l.02-.01a.8.8 0 0 0 .15-.1c.08-.07.17-.17.27-.3.18-.29.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .58.15 1 .33 1.27a1.4 1.4 0 0 0 .42.4l.01.02h.01a.5.5 0 0 0 .48-.88.42.42 0 0 1-.08-.1c-.07-.09-.17-.3-.17-.71 0-.57.33-.75.52-.76.1 0 .21.03.3.13.08.1.18.28.18.63Zm-.75.81h-.02v-.01l.02.01ZM9.75 18a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm-5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm9.25-.75a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v7.5Z"
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
  ville.embed.fluent.TextNumberListRtlRotate270.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.ChatHelp", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.25 7.3c-.16.2-.25.44-.25.7a.5.5 0 0 1-1 0 1.95 1.95 0 0 1 2-2 1.95 1.95 0 0 1 2 2c0 .49-.12.87-.3 1.19-.17.28-.38.5-.55.68l-.04.04c-.19.2-.33.35-.43.55-.1.2-.18.45-.18.83a.5.5 0 1 1-1 0 2.71 2.71 0 0 1 .89-2.07l.02-.02c.19-.2.32-.34.42-.51.1-.17.17-.37.17-.69 0-.26-.09-.5-.25-.7A.95.95 0 0 0 10 7c-.36 0-.6.13-.75.3Zm.75 6.91a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM2 10a8 8 0 1 1 4.26 7.07L2.62 18a.5.5 0 0 1-.6-.61l.9-3.64A7.97 7.97 0 0 1 2 10Zm8-7a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .04.37l-.75 3.02 3.02-.75a.5.5 0 0 1 .37.05A7 7 0 1 0 10 3Z",
      FILLED: "M2 10a8 8 0 1 1 4.26 7.07L2.62 18a.5.5 0 0 1-.6-.61l.9-3.64A7.97 7.97 0 0 1 2 10Zm7.25-2.7c.15-.17.39-.3.75-.3s.6.13.75.3c.16.2.25.44.25.7 0 .32-.07.52-.17.69-.1.17-.23.3-.42.5l-.02.03c-.19.2-.42.44-.6.78-.18.35-.29.76-.29 1.3a.5.5 0 1 0 1 0c0-.4.08-.64.18-.84.1-.2.24-.35.43-.55l.04-.04c.17-.18.38-.4.55-.68.18-.32.3-.7.3-1.19a1.95 1.95 0 0 0-2-2 1.95 1.95 0 0 0-2 2 .5.5 0 0 0 1 0c0-.26.09-.5.25-.7Zm1.45 6.21a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0Z"
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
  ville.embed.fluent.ChatHelp.$$dbClassInfo = $$dbClassInfo;
})();
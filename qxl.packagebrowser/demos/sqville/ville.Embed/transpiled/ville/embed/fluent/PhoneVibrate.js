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
  qx.Class.define("ville.embed.fluent.PhoneVibrate", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 14.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4ZM2.92 7.22a.5.5 0 0 0-.84.56l.38.57c.29.42.32.97.1 1.43-.4.78-.34 1.7.14 2.43l.38.57a.5.5 0 1 0 .84-.56l-.38-.57a1.43 1.43 0 0 1-.1-1.43c.4-.78.34-1.7-.14-2.43l-.38-.57Zm13.3-.14a.5.5 0 0 1 .7.14l.38.57c.48.73.54 1.65.15 2.43-.23.46-.2 1 .09 1.43l.38.57a.5.5 0 1 1-.84.56l-.38-.57a2.43 2.43 0 0 1-.15-2.43c.23-.46.2-1-.09-1.43l-.38-.57a.5.5 0 0 1 .14-.7Z",
      FILLED: "M5 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm3.5 10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2.92 7.22a.5.5 0 0 0-.84.56l.38.57c.29.42.32.97.1 1.43-.4.78-.34 1.7.14 2.43l.38.57a.5.5 0 1 0 .84-.56l-.38-.57a1.43 1.43 0 0 1-.1-1.43c.4-.78.34-1.7-.14-2.43l-.38-.57Zm13.3-.14a.5.5 0 0 1 .7.14l.38.57c.48.73.54 1.65.15 2.43-.23.46-.2 1 .09 1.43l.38.57a.5.5 0 1 1-.84.56l-.38-.57a2.43 2.43 0 0 1-.15-2.43c.23-.46.2-1-.09-1.43l-.38-.57a.5.5 0 0 1 .14-.7Z"
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
  ville.embed.fluent.PhoneVibrate.$$dbClassInfo = $$dbClassInfo;
})();
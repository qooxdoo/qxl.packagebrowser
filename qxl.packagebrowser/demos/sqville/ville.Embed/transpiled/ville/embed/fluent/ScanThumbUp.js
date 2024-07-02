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
  qx.Class.define("ville.embed.fluent.ScanThumbUp", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2ZM9.52 5.4c.2-.47.8-1.08 1.63-.85.54.14.92.46 1.13.9.19.39.22.81.23 1.15 0 .36-.06.76-.14 1.1h.28c1.2 0 2.13 1.13 1.77 2.3l-.92 3a2.2 2.2 0 0 1-2.74 1.4l-3.6-1.08a1.82 1.82 0 0 1-1.19-1.07l-.35-.89c-.32-.83.03-1.74.8-2.18l1.24-.7.03-.02c.04-.04.12-.1.22-.21.2-.22.5-.6.79-1.2l.36-.71c.18-.33.3-.58.46-.94ZM8.15 9.35l-1.24.7c-.36.2-.5.6-.36.94l.35.9c.09.22.28.4.54.47l3.6 1.09a1.2 1.2 0 0 0 1.5-.75l.93-3c.14-.46-.22-1-.82-1h-.93a.5.5 0 0 1-.48-.64l.12-.45c.09-.35.15-.71.15-.99 0-.3-.04-.55-.13-.73a.69.69 0 0 0-.48-.38.3.3 0 0 0-.26.04.53.53 0 0 0-.2.23c-.17.4-.32.7-.49 1.02l-.35.7a5.97 5.97 0 0 1-1.28 1.73l-.1.08H8.2l-.01.01a.5.5 0 0 1-.05.03Z",
      FILLED: "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2ZM11.15 4.55c-.83-.23-1.43.38-1.63.85-.15.36-.28.61-.45.94l-.37.71a4.98 4.98 0 0 1-1.04 1.43l-1.24.7a1.76 1.76 0 0 0-.8 2.18l.35.9c.2.51.65.9 1.18 1.06l3.61 1.08A2.2 2.2 0 0 0 13.5 13l.92-3c.36-1.17-.56-2.3-1.77-2.3h-.28c.08-.34.14-.74.14-1.1-.01-.34-.04-.76-.23-1.15a1.68 1.68 0 0 0-1.13-.9Z"
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
  ville.embed.fluent.ScanThumbUp.$$dbClassInfo = $$dbClassInfo;
})();

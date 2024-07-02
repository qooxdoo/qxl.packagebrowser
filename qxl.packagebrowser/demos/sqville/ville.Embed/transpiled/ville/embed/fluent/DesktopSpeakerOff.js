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
  qx.Class.define("ville.embed.fluent.DesktopSpeakerOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.7 1.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 6h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53ZM17 13V8.98c.34.06.7 0 1-.18V13a2 2 0 0 1-1.1 1.78l-.79-.79A1 1 0 0 0 17 13Zm-3.7 1L3.02 3.74A1 1 0 0 0 3 4v9a1 1 0 0 0 1 1h9.3Zm1 1H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 .28-1.02l-.13-.13a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.29 15ZM4.11 2l1 1H9.1c.2-.58.76-1 1.41-1h.38-6.76ZM12 15H8v2h4v-2Z",
      FILLED: "M13.7 1.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 6h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Zm.13 5.73a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 7h-.38A1.5 1.5 0 0 1 9 5.5v-2c0-.83.67-1.5 1.5-1.5h.38-6.76l12.9 12.9c.58-.2.98-.76.98-1.4V8.8c-.5.29-1.15.27-1.65-.1ZM2.15 2.85a.5.5 0 0 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.29 15H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H3.5A1.5 1.5 0 0 1 2 13.5v-10c0-.23.05-.45.15-.65ZM12 15H8v2h4v-2Z"
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
  ville.embed.fluent.DesktopSpeakerOff.$$dbClassInfo = $$dbClassInfo;
})();
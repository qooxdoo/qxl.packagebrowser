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
  qx.Class.define("ville.embed.fluent.MountainTrail", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15.48 17H4a2 2 0 0 1-2-2v-4.5a3 3 0 0 1 .82-2.07L8.2 2.78a2.5 2.5 0 0 1 3.62 0l5.37 5.65A3 3 0 0 1 18 10.5V15a2 2 0 0 1-2 2h-.52ZM9.1 3.31a1.75 1.75 0 0 0-.56.86c-.04.2-.01.4.1.6.23.46.8.92 1.56 1.43l.8.5c.5.32 1.03.64 1.43.96.33.24.63.52.83.83.22.32.34.7.24 1.13-.1.41-.41.7-.73.88-.33.2-.73.33-1.16.44-.68.17-1.52.3-2.35.42l-.6.09c-1.04.16-2 .33-2.7.61-.72.3-.95.6-.95.94 0 .01.01.12.28.33.25.2.63.4 1.13.6.99.4 2.33.77 3.7 1.08a67.33 67.33 0 0 0 5.34.98l.08.01H16a1 1 0 0 0 1-1v-4.5a2 2 0 0 0-.55-1.38L11.1 3.47a1.5 1.5 0 0 0-2-.16ZM7.6 4.87 3.55 9.12A2 2 0 0 0 3 10.5V15a1 1 0 0 0 1 1h5.94l-.05-.01c-1.38-.32-2.8-.7-3.86-1.14a5.99 5.99 0 0 1-1.36-.73C4.33 13.86 4 13.49 4 13c0-.98.77-1.54 1.58-1.86.82-.34 1.9-.52 2.92-.68l.63-.1c.82-.12 1.6-.23 2.22-.4.4-.1.7-.2.9-.32.2-.12.25-.21.26-.26.02-.08.02-.18-.09-.34a2.7 2.7 0 0 0-.6-.6c-.38-.28-.82-.55-1.3-.85l-.88-.56a5.45 5.45 0 0 1-1.9-1.8 2.1 2.1 0 0 1-.15-.36Z",
      FILLED: "m6.72 4.33-3.9 4.1A3 3 0 0 0 2 10.5V15c0 1.1.9 2 2 2h7.59l-1.74-.52A28.3 28.3 0 0 1 6 14.99c-.54-.26-1-.54-1.35-.84C4.32 13.86 4 13.48 4 13c0-.98.77-1.54 1.58-1.86.82-.34 1.9-.52 2.92-.68l.63-.1c.82-.12 1.6-.23 2.22-.4.4-.1.7-.2.9-.32.2-.12.25-.21.26-.26.02-.06.02-.16-.12-.34-.14-.2-.38-.41-.71-.66-.44-.32-.96-.64-1.51-.97l-1-.62a7.08 7.08 0 0 1-2.22-1.95c-.1-.16-.18-.33-.23-.5ZM15.56 17l-.07-.02a54.15 54.15 0 0 1-1.58-.39c-1.03-.26-2.4-.63-3.76-1.07a27.36 27.36 0 0 1-3.7-1.42c-.5-.25-.9-.49-1.15-.71-.27-.24-.3-.37-.3-.39 0-.33.23-.65.95-.94.7-.28 1.66-.45 2.7-.61l.6-.1c.83-.11 1.67-.24 2.35-.41.43-.11.83-.25 1.16-.44.32-.19.62-.47.73-.88a1.4 1.4 0 0 0-.29-1.17c-.23-.32-.57-.61-.93-.88-.47-.34-1.06-.7-1.64-1.06l-.92-.57a6.22 6.22 0 0 1-1.9-1.63.99.99 0 0 1-.18-.66c.02-.15.1-.33.25-.55l.3-.32a2.5 2.5 0 0 1 3.63 0l5.37 5.65A3 3 0 0 1 18 10.5V15a2 2 0 0 1-2 2h-.44Z"
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
  ville.embed.fluent.MountainTrail.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.TextNumberListRtl90", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.5 2c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5Zm-11 12.74c.28 0 .5.23.5.5 0 .35.1.54.18.63.09.1.2.13.3.13.2 0 .52-.19.52-.76 0-.4-.1-.62-.17-.72a.41.41 0 0 0-.07-.09l.02.01h-.02v-.01h-.01a.5.5 0 0 1 .47-.88h.01l.02.01a.83.83 0 0 1 .15.1c.08.07.17.17.27.3.18.29.33.7.33 1.28 0 1.03-.67 1.73-1.48 1.76-.37.01-.74-.12-1.02-.4-.28.28-.65.41-1.02.4-.8-.03-1.48-.73-1.48-1.76 0-.58.15-1 .33-1.27a1.4 1.4 0 0 1 .42-.4l.01-.02h.01a.5.5 0 0 1 .48.88.41.41 0 0 0-.08.1c-.07.09-.17.3-.17.71 0 .57.33.75.52.76.1 0 .21-.03.3-.13.08-.1.18-.28.18-.63 0-.27.22-.5.5-.5Zm7.15-1.1c.2-.2.5-.2.7 0h.01v.02a1.38 1.38 0 0 1 .11.12A2.44 2.44 0 0 1 12 15.3v.01c0 .37-.1.78-.35 1.1a1.4 1.4 0 0 1-1.15.57 1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.5-.83l-.06-.12c-.16-.31-.3-.55-.47-.72a.93.93 0 0 0-.27-.17v1.91a.5.5 0 1 1-1 0V14c0-.27.22-.5.5-.5.62 0 1.08.2 1.44.53a3.32 3.32 0 0 1 .77 1.15c.13.27.23.46.35.61a.5.5 0 0 0 .44.21c.18 0 .28-.06.35-.16.09-.11.15-.3.15-.52a1.5 1.5 0 0 0-.35-.96.5.5 0 0 1 0-.7Zm7.34 1.97a.5.5 0 0 1-.49.38h-4a.5.5 0 1 1 0-1h2.58c-.2-.21-.38-.47-.53-.77a.5.5 0 1 1 .9-.45 2.96 2.96 0 0 0 1.15 1.2l.12.08c.2.1.32.33.27.56Z",
      FILLED: "M4.25 2c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75ZM3.5 14.74c.28 0 .5.23.5.5 0 .35.1.54.18.63.09.1.2.13.3.13.2 0 .52-.19.52-.76 0-.4-.1-.62-.17-.72a.41.41 0 0 0-.07-.09l.02.01h-.02v-.01h-.01a.5.5 0 0 1 .47-.88h.01l.02.01a.83.83 0 0 1 .15.1c.08.07.17.17.27.3.18.29.33.7.33 1.28 0 1.03-.67 1.73-1.48 1.76-.37.01-.74-.12-1.02-.4-.28.28-.65.41-1.02.4-.8-.03-1.48-.73-1.48-1.76 0-.58.15-1 .33-1.27a1.4 1.4 0 0 1 .42-.4l.01-.02h.01a.5.5 0 0 1 .48.88.41.41 0 0 0-.08.1c-.07.09-.17.3-.17.71 0 .57.33.75.52.76.1 0 .21-.03.3-.13.08-.1.18-.28.18-.63 0-.27.22-.5.5-.5Zm7.15-1.1c.2-.2.5-.2.7 0h.01v.02a1.38 1.38 0 0 1 .11.12A2.44 2.44 0 0 1 12 15.3v.01c0 .37-.1.78-.35 1.1a1.4 1.4 0 0 1-1.15.57 1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.5-.83l-.06-.12c-.16-.31-.3-.55-.47-.72a.93.93 0 0 0-.27-.17v1.91a.5.5 0 1 1-1 0V14c0-.27.22-.5.5-.5.62 0 1.08.2 1.44.53a3.32 3.32 0 0 1 .77 1.15c.13.27.23.46.35.61a.5.5 0 0 0 .44.21c.18 0 .28-.06.35-.16.09-.11.15-.3.15-.52a1.5 1.5 0 0 0-.35-.96.5.5 0 0 1 0-.7Zm7.34 1.97a.5.5 0 0 1-.49.38h-4a.5.5 0 1 1 0-1h2.58c-.2-.21-.38-.47-.53-.77a.5.5 0 1 1 .9-.45 2.96 2.96 0 0 0 1.15 1.2l.12.08c.2.1.32.33.27.56Z"
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
  ville.embed.fluent.TextNumberListRtl90.$$dbClassInfo = $$dbClassInfo;
})();

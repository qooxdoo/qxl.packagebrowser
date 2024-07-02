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
  qx.Class.define("ville.embed.fluent.TextNumberListRtl", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 1.5a.5.5 0 0 0-.38-.49.5.5 0 0 0-.57.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 0 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 1 0 1 0v-4Zm-2.35 6.15a.5.5 0 0 0 .7.7l.05-.04.2-.12c.17-.1.41-.19.71-.19.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1h-1.91c.04-.1.1-.2.17-.27a2.38 2.38 0 0 1 .83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15a1.92 1.92 0 0 0-1.1-.35h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm1.1 7.85c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.41.41 0 0 0-.1.07l.02-.02v.01l-.01.01v.01a.5.5 0 0 1-.89-.47v-.01h.01v-.02a.8.8 0 0 1 .11-.15c.07-.08.17-.17.3-.27.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 0 1-.4-.42l-.01-.01v-.01a.5.5 0 0 1 .88-.48c.01.02.04.05.09.08.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 0 1-.5-.5ZM3.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 5a.5.5 0 1 0 0 1h8a.5.5 0 0 0 0-1h-8Z",
      FILLED: "M17 1.5a.5.5 0 0 0-.39-.49.5.5 0 0 0-.56.27l-.07.12a2.96 2.96 0 0 1-1.2 1.15.5.5 0 1 0 .44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 0 0 1 0v-4Zm-2.35 6.15a.5.5 0 0 0 .7.7l.05-.04.2-.12c.17-.1.41-.19.71-.19.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 0 1-.21.44 3.18 3.18 0 0 1-.76.43c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1h-1.91c.04-.1.1-.2.17-.27a2.38 2.38 0 0 1 .83-.53c.27-.13.59-.29.84-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15a1.92 1.92 0 0 0-1.1-.35h-.01a2.5 2.5 0 0 0-1.66.63v.01h-.01Zm1.1 7.85c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.42.42 0 0 0-.1.07l.02-.02v.01l-.01.01v.01a.5.5 0 0 1-.89-.47v-.01l.02-.02.02-.04.08-.1c.07-.09.17-.18.3-.28.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 0 1-.4-.42l-.01-.01v-.01a.5.5 0 0 1 .87-.48l.1.08c.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 0 1-.5-.5ZM3.75 4a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 5a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"
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
  ville.embed.fluent.TextNumberListRtl.$$dbClassInfo = $$dbClassInfo;
})();
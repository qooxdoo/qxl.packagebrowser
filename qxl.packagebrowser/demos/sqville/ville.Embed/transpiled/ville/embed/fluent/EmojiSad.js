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
  qx.Class.define("ville.embed.fluent.EmojiSad", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.06 4.89a.5.5 0 0 1-.7-.07A4.3 4.3 0 0 0 10 12.25c-1.02-.01-1.75.27-2.21.55a3.09 3.09 0 0 0-.65.5.5.5 0 0 1-.78-.62l.39.31-.39-.31v-.01l.02-.02a2.07 2.07 0 0 1 .23-.23c.15-.13.37-.31.67-.49.6-.35 1.5-.69 2.72-.69a5.3 5.3 0 0 1 2.72.7 4.06 4.06 0 0 1 .9.71l.01.02h.01l-.39.32.39-.31a.5.5 0 0 1-.08.7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
      FILLED: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm.06 4.89c.38-.35.07-.72.06-.73a2.02 2.02 0 0 0-.23-.23 4.06 4.06 0 0 0-.67-.49 5.3 5.3 0 0 0-2.72-.69 5.3 5.3 0 0 0-2.72.7 4.08 4.08 0 0 0-.9.7l-.01.03h-.01l.39.32-.39-.31a.5.5 0 0 0 .78.63l.02-.03c.03-.03.06-.07.12-.11.1-.1.27-.24.5-.37a4.31 4.31 0 0 1 2.22-.56 4.3 4.3 0 0 1 2.22.56 3.07 3.07 0 0 1 .64.5.5.5 0 0 0 .7.08Z"
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
  ville.embed.fluent.EmojiSad.$$dbClassInfo = $$dbClassInfo;
})();
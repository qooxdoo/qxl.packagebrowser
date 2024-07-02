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
  qx.Class.define("ville.embed.fluent.ArrowCounterclockwiseDashes", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.35 3.2a.47.47 0 0 0-.35.45c0 .34.33.57.66.5a6.02 6.02 0 0 1 2.68 0c.33.07.66-.16.66-.5 0-.21-.14-.4-.35-.45a7.02 7.02 0 0 0-3.3 0Zm.31 12.65c-.33-.07-.66.16-.66.5 0 .21.14.4.35.45a7.02 7.02 0 0 0 3.3 0c.2-.05.35-.24.35-.45 0-.34-.33-.57-.66-.5a6.02 6.02 0 0 1-2.68 0ZM7 15.5c0 .38-.4.63-.73.43a7.04 7.04 0 0 1-2.2-2.2c-.2-.33.05-.73.43-.73.19 0 .36.1.46.26a6.03 6.03 0 0 0 1.78 1.78c.16.1.26.27.26.46Zm0-11c0 .19-.1.36-.26.46-.45.3-.86.64-1.21 1.04H7.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.6c.38-.39.81-.74 1.27-1.03.33-.2.73.05.73.43Zm6.72-.43c-.32-.2-.72.05-.72.43 0 .19.1.36.26.46a6.03 6.03 0 0 1 1.78 1.78c.1.16.27.26.46.26.38 0 .63-.4.43-.72a7.04 7.04 0 0 0-2.2-2.2Zm3.08 4.28a7.02 7.02 0 0 1 0 3.3.47.47 0 0 1-.45.35c-.34 0-.58-.33-.5-.66a6.02 6.02 0 0 0 0-2.68c-.08-.33.16-.66.5-.66.21 0 .4.14.45.35Zm-3.08 7.58c-.32.2-.72-.05-.72-.43 0-.19.1-.36.26-.46a6.03 6.03 0 0 0 1.78-1.78c.1-.16.27-.26.46-.26.38 0 .63.4.43.72a7.04 7.04 0 0 1-2.2 2.2ZM3.02 10.5c-.02-.28.2-.5.48-.5.28 0 .5.22.52.5a6 6 0 0 0 .13.84c.07.33-.16.66-.5.66a.47.47 0 0 1-.46-.35 7 7 0 0 1-.17-1.15Z",
      FILLED: "M8.53 2.64a.68.68 0 0 0-.53.68c0 .5.5.85.99.77a6.04 6.04 0 0 1 2.02 0c.5.08.99-.27.99-.77a.68.68 0 0 0-.54-.68 7.54 7.54 0 0 0-2.93 0ZM9 15.91c-.5-.08-.99.27-.99.77 0 .33.22.61.53.68a7.54 7.54 0 0 0 2.93 0 .68.68 0 0 0 .54-.68c0-.5-.5-.85-.99-.77a6.04 6.04 0 0 1-2.02 0ZM7 15.66c0 .57-.59.95-1.07.64a7.54 7.54 0 0 1-2.23-2.23c-.31-.48.07-1.07.64-1.07.29 0 .55.15.7.39.43.61.96 1.14 1.57 1.56.24.16.39.42.39.7ZM7 4.34c0 .29-.15.55-.39.7-.2.15-.4.3-.58.46h1.22a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.16c.29-.26.6-.5.93-.7.48-.32 1.07.06 1.07.63Zm7.07-.64c-.48-.31-1.07.07-1.07.64 0 .29.15.55.39.7.61.43 1.14.96 1.56 1.57.16.24.42.39.7.39.58 0 .96-.59.65-1.07a7.54 7.54 0 0 0-2.23-2.23Zm3.29 4.84a7.54 7.54 0 0 1 0 2.92.68.68 0 0 1-.68.54c-.5 0-.85-.5-.77-.99a6.04 6.04 0 0 0 0-2.02c-.08-.5.27-.99.77-.99.32 0 .61.22.68.54Zm-3.29 7.76c-.48.31-1.07-.07-1.07-.64 0-.29.15-.55.39-.7a6.04 6.04 0 0 0 1.56-1.57.86.86 0 0 1 .7-.39c.58 0 .96.59.65 1.07a7.54 7.54 0 0 1-2.23 2.23ZM2.54 10.75c-.04-.41.3-.75.71-.75s.74.34.8.75c0 .09.02.17.03.26.09.5-.26.99-.76.99a.68.68 0 0 1-.68-.54 7.5 7.5 0 0 1-.1-.71Z"
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
  ville.embed.fluent.ArrowCounterclockwiseDashes.$$dbClassInfo = $$dbClassInfo;
})();

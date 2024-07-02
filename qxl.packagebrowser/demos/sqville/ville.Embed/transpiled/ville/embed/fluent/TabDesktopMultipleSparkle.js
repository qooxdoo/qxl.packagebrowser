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
  qx.Class.define("ville.embed.fluent.TabDesktopMultipleSparkle", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM17 11.91c.16.06.33.09.5.09.17 0 .34-.02.5-.08V14a4 4 0 0 1-4 4H7.5a2.5 2.5 0 0 1-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 0 0 3-3v-2.1ZM11.43 2H4.5A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5V9.77l-.1-.03c-.28-.1-.5-.26-.66-.48A1.27 1.27 0 0 1 14 8.5v4c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5v-8C3 3.67 3.67 3 4.5 3H6v1.5C6 5.33 6.67 6 7.5 6h5.3v-.04a1.27 1.27 0 0 0-.3-.47 1.3 1.3 0 0 0-.47-.3l-.6-.19H7.5a.5.5 0 0 1-.5-.5V3h3.09a1.42 1.42 0 0 1 .86-.85l.48-.15Z",
      FILLED: "m14.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM17.5 12c-.27 0-.52-.08-.74-.23a1.4 1.4 0 0 1-.48-.62l-.26-.8-.02-.04v2.19a3.5 3.5 0 0 1-3.5 3.5H5.05a2.5 2.5 0 0 0 2.45 2H14a4 4 0 0 0 4-4v-2.08c-.16.06-.33.08-.5.08Zm-4.35-4.95L12.81 6H7.5A1.5 1.5 0 0 1 6 4.5V2H4.5A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5V9.77l-.1-.03c-.28-.1-.5-.26-.66-.48a1.3 1.3 0 0 1-.12-1.3 1.32 1.32 0 0 1-.45-.22 1.51 1.51 0 0 1-.52-.69Zm-2.2-4.9.48-.15H7v2.5c0 .28.22.5.5.5h3.93l-.46-.15A1.41 1.41 0 0 1 10 3.5a1.4 1.4 0 0 1 .95-1.35Z"
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
  ville.embed.fluent.TabDesktopMultipleSparkle.$$dbClassInfo = $$dbClassInfo;
})();

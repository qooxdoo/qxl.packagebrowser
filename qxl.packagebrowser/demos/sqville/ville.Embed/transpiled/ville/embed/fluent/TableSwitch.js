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
  qx.Class.define("ville.embed.fluent.TableSwitch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM7 12V7h5V4h-1.09a1.5 1.5 0 0 0 0-1h3.59A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-3.59c.32.12.68.12 1 0V12h3Zm-3 2.5c0 .78.6 1.42 1.36 1.5H7v-3H4v1.5Zm8-1.5H8v3h4v-3Zm2.5 3c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8Zm1 0v4h3V8h-3Zm0-4v3h3V5.5c0-.78-.6-1.42-1.36-1.5H13Z",
      FILLED: "M7.85 1.15a.5.5 0 1 0-.7.7L8.29 3H6a3 3 0 0 0-3 3v2.3L1.85 7.14a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm.71 5.41a1.5 1.5 0 0 1-.56.35V7h4V3h-1.09a1.5 1.5 0 0 1-.35 1.56l-2 2Zm-4 4a1.5 1.5 0 0 1-1.56.35V12h4V8h-.09c-.07.2-.19.4-.35.56l-2 2ZM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-5 0h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z"
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
  ville.embed.fluent.TableSwitch.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.Earth", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 0 0 8.86 1.25 3.56 3.56 0 0 1-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 0 1 .7-.7c.15-.14.28-.25.39-.37a.9.9 0 0 0 .2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 0 1-.54-.18.74.74 0 0 1-.18-.37 2.57 2.57 0 0 1-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .38-1 18.6 18.6 0 0 0 1.74-1.65c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0 0 10 3Zm4.64 1.76a42.1 42.1 0 0 1-2.71 2.66c.03.07.1.18.24.36l.12.16c.32.4.78.97.96 1.68.1.4.15.73.17.98v.01c.6-.33 1.21-.3 1.66.06.46.35.66.97.47 1.57-.08.27-.27.5-.43.66l-.44.43-.11.1c-.2.17-.36.33-.48.48a.83.83 0 0 0-.19.34c-.04.23.07.5.29.78.1.12.2.23.3.3 0 .01 0 .02.02.03a6.99 6.99 0 0 0 .13-10.6ZM8.8 3.36l-.13-.23a7 7 0 0 0-4.72 10.39l.02-.2c.06-.46.2-1.06.6-1.49.46-.5 1.02-.59 1.4-.65l.1-.02c.21-.03.34-.07.45-.13.1-.05.2-.13.28-.3.03-.06.05-.15.02-.34a4.4 4.4 0 0 0-.15-.54l-.05-.15c-.15-.5-.37-1.26.09-1.96.4-.6 1.04-.76 1.48-.87l.13-.03c.47-.12.77-.24.98-.68.26-.56.14-1.3-.12-1.98a6.33 6.33 0 0 0-.38-.83Z",
      FILLED: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 0 0 8.86 1.25 3.56 3.56 0 0 1-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 0 1 .7-.7c.15-.14.28-.25.39-.37a.9.9 0 0 0 .2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 0 1-.54-.18.73.73 0 0 1-.18-.37 2.58 2.58 0 0 1-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 0 1 .03-.55c.07-.19.2-.33.35-.44a18.6 18.6 0 0 0 1.74-1.66c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0 0 10 3Z"
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
  ville.embed.fluent.Earth.$$dbClassInfo = $$dbClassInfo;
})();

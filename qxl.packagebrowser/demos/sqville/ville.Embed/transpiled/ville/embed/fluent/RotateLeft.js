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
  qx.Class.define("ville.embed.fluent.RotateLeft", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12.39 12a.53.53 0 0 1-.54-.52c0-.29.24-.52.54-.52h.35c1.77 0 3.2-1.08 3.2-2.42 0-1.3-1.35-2.36-3.04-2.42H7.82L9.04 7.3c.2.2.2.53 0 .73a.54.54 0 0 1-.7.05l-.06-.05-2.12-2.08a.51.51 0 0 1 0-.73l2.12-2.08.06-.05c.21-.15.5-.13.7.05.2.2.2.53 0 .74L7.82 5.08h4.92C15.1 5.08 17 6.63 17 8.54S15.1 12 12.74 12h-.35ZM4 10.41V16h10.18L4 10.41ZM3.8 17a.77.77 0 0 1-.8-.75V9.38c0-.21.18-.38.4-.38.07 0 .14.02.2.05l13.2 7.25c.2.1.26.33.15.51a.4.4 0 0 1-.35.19H3.8Z",
      FILLED: "M12.39 12a.53.53 0 0 1-.54-.52c0-.29.24-.52.54-.52h.35c1.77 0 3.2-1.08 3.2-2.42 0-1.3-1.35-2.36-3.04-2.42H7.82L9.04 7.3c.2.2.2.53 0 .73a.54.54 0 0 1-.7.05l-.06-.05-2.12-2.08a.51.51 0 0 1 0-.73l2.12-2.08.06-.05c.21-.15.5-.13.7.05.2.2.2.53 0 .74L7.82 5.08h4.92C15.1 5.08 17 6.63 17 8.54S15.1 12 12.74 12h-.35Zm-9-3c-.21 0-.39.17-.39.38v6.87c0 .41.36.75.8.75h12.8a.4.4 0 0 0 .35-.19.37.37 0 0 0-.15-.51L3.6 9.05A.41.41 0 0 0 3.4 9Z"
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
  ville.embed.fluent.RotateLeft.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.TableSearch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.76c.32-.12.66-.2 1-.23V8h3v1.76a4.49 4.49 0 0 1 1 .91V8h4v4H8.74a4.5 4.5 0 0 1 .23 1H12v3H9.12l1 1h4.38a2.5 2.5 0 0 0 2.5-2.5v-9ZM14.5 16H13v-3h3V14.64A1.5 1.5 0 0 1 14.5 16ZM13 8h3v4h-3V8Zm-1-1H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm-2.62 4.9a3.5 3.5 0 0 0 5.22 4.4l2.54 2.56a.5.5 0 0 0 .71-.71L7.3 15.6a3.5 3.5 0 1 0-5.92-3.7Zm5.2.21a2.5 2.5 0 1 1-4.16 2.78 2.5 2.5 0 0 1 4.16-2.78Z",
      FILLED: "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Z"
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
  ville.embed.fluent.TableSearch.$$dbClassInfo = $$dbClassInfo;
})();

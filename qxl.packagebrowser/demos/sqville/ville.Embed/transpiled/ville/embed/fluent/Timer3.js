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
  qx.Class.define("ville.embed.fluent.Timer3", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm0 12c.88 0 1.73-.16 2.5-.46l.01-.07a1.5 1.5 0 0 1 .45-1.25A6 6 0 1 1 15.42 10a3.8 3.8 0 0 1 1.03.12A7 7 0 1 0 9.5 18Zm4.34-5.29.03-.02a2.57 2.57 0 0 1 .47-.33c.32-.2.73-.36 1.16-.36.9 0 1.5.62 1.5 1.25 0 .28-.17.58-.51.84-.34.25-.8.41-1.24.41a.5.5 0 0 0 0 1c.44 0 .9.16 1.24.41.34.26.51.56.51.84 0 .63-.6 1.25-1.5 1.25-.43 0-.84-.17-1.16-.36a3.37 3.37 0 0 1-.47-.33l-.02-.02a.5.5 0 0 0-.7.72h.01l.01.02.04.03a3.68 3.68 0 0 0 .62.45c.4.23 1 .49 1.67.49 1.32 0 2.5-.95 2.5-2.25 0-.7-.4-1.26-.91-1.64l-.16-.11.16-.11c.5-.38.91-.95.91-1.64 0-1.3-1.18-2.25-2.5-2.25-.68 0-1.27.26-1.67.5a4.35 4.35 0 0 0-.62.44l-.04.03v.01h-.01a.5.5 0 0 0 .68.73Z",
      FILLED: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Zm1.29 6.2a3.7 3.7 0 0 0-.95-.13 4.47 4.47 0 0 0-2.74.97l-.25.2v.01a1.5 1.5 0 0 0 1.63 2.48 2.49 2.49 0 0 0-.04 2.62l-.04.03a1.5 1.5 0 0 0-2.05 1.23 7 7 0 1 1 4.44-7.41ZM9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v5Zm4.84 1.21.03-.02a2.57 2.57 0 0 1 .47-.33c.32-.2.73-.36 1.16-.36.9 0 1.5.62 1.5 1.25 0 .28-.17.58-.51.84-.34.25-.8.41-1.24.41a.5.5 0 0 0 0 1c.44 0 .9.16 1.24.41.34.26.51.56.51.84 0 .63-.6 1.25-1.5 1.25-.43 0-.84-.17-1.16-.36a3.37 3.37 0 0 1-.47-.33l-.02-.02a.5.5 0 0 0-.7.72h.01l.01.02.04.03a3.68 3.68 0 0 0 .62.45c.4.23 1 .49 1.67.49 1.32 0 2.5-.95 2.5-2.25 0-.7-.4-1.26-.91-1.64l-.16-.11.16-.11c.5-.38.91-.95.91-1.64 0-1.3-1.18-2.25-2.5-2.25-.68 0-1.27.26-1.67.5a4.35 4.35 0 0 0-.62.44l-.04.03v.01h-.01a.5.5 0 0 0 .68.73Z"
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
  ville.embed.fluent.Timer3.$$dbClassInfo = $$dbClassInfo;
})();
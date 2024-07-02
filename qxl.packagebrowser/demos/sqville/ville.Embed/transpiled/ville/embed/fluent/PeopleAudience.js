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
  qx.Class.define("ville.embed.fluent.PeopleAudience", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.99 2.99a2.23 2.23 0 1 1 0 4.45 2.23 2.23 0 0 1 0-4.45Zm0 1a1.23 1.23 0 1 0 0 2.45 1.23 1.23 0 0 0 0-2.45ZM3.02 11.5a.5.5 0 1 1-1 0V9.01a1 1 0 0 1 .88-.99h2.87c-.14.24-.23.52-.26.81v.18H3v2.49Zm14.47.5a.5.5 0 0 0 .5-.5V8.9a1 1 0 0 0-1-.89h-2.78c.14.26.24.55.26.86V9H17v2.49c0 .28.22.5.5.5Zm-5.02-3.99a1 1 0 0 1 1 .89v2.6a.5.5 0 1 1-1 0V9.01H7.5v2.49a.5.5 0 1 1-1 0V9.01a1 1 0 0 1 .89-.99h5.08Zm4.42-2.48a1.91 1.91 0 1 0-3.83 0 1.91 1.91 0 0 0 3.83 0Zm-2.83 0a.91.91 0 1 1 1.83 0 .91.91 0 0 1-1.83 0ZM5.02 3.62a1.91 1.91 0 1 1 0 3.82 1.91 1.91 0 0 1 0-3.82Zm0 1a.91.91 0 1 0 0 1.82.91.91 0 0 0 0-1.82ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Zm.5 1.5V14h14v.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5Z",
      FILLED: "M12.21 5.22a2.23 2.23 0 1 0-4.45 0 2.23 2.23 0 0 0 4.45 0ZM2.51 12h3V8.83c.03-.3.12-.57.26-.82H3.02l-.12.01a1 1 0 0 0-.88 1v2.48c0 .28.22.5.5.5ZM18 11.5a.5.5 0 0 1-.5.5h-3.02V8.87c-.02-.31-.12-.6-.26-.86h2.78a1 1 0 0 1 1 .89v2.6Zm-4.52-2.6a1 1 0 0 0-1-.89H7.5l-.11.01a1 1 0 0 0-.89 1V12h6.97V8.9Zm1.5-5.28a1.91 1.91 0 1 1 0 3.82 1.91 1.91 0 0 1 0-3.82ZM6.93 5.53a1.91 1.91 0 1 0-3.83 0 1.91 1.91 0 0 0 3.83 0ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Z"
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
  ville.embed.fluent.PeopleAudience.$$dbClassInfo = $$dbClassInfo;
})();

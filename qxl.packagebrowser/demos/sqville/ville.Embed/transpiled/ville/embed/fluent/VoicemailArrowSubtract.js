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
  qx.Class.define("ville.embed.fluent.VoicemailArrowSubtract", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 9.6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.02c.03.34.1.68.19 1H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4.26a5.5 5.5 0 0 0-1-.66ZM9 10a2 2 0 0 0-.27-1h2.54a2 2 0 0 0-.26 1.24c.34-.27.7-.5 1.1-.7a1 1 0 0 1 1.33-.44 5.53 5.53 0 0 1 1.3-.1A2 2 0 0 0 13 8H7a2 2 0 1 0 2 2Zm-2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z",
      FILLED: "M13 8a2 2 0 0 1 1.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 0 1 1.81-5.76A2.02 2.02 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm-7 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm13 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-7 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
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
  ville.embed.fluent.VoicemailArrowSubtract.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.ShieldDismissShield", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0c.34-.14.68-.27 1-.42-.2-.27-.38-.56-.52-.86-.21.1-.43.18-.66.27-4.03-1.6-6-4.07-6-7.46V5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43v3a5.06 5.06 0 0 0 1 .8V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42Zm-.24 8.67c.11-.47.46-.87.94-1.02l1.87-1.88a.5.5 0 0 0-.7-.7L10 9.29 7.85 7.15a.5.5 0 1 0-.7.7L9.29 10l-2.14 2.15a.5.5 0 0 0 .7.7L10 10.71l.04.04Zm6.96-.4a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 13 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 0 0-.4-.33 4.24 4.24 0 0 1-1.6-.32Z",
      FILLED: "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0c.34-.14.68-.27 1-.42a5.82 5.82 0 0 1-.66-1.16 7.05 7.05 0 0 1-.52-2.5V11.05l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.64 1.64h.01c.9 0 1.76-.37 2.6-1.24a1.39 1.39 0 0 1 2 0 5.06 5.06 0 0 0 1 .8V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42ZM17 10.35a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 13 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 0 0-.4-.33 4.24 4.24 0 0 1-1.6-.32Z"
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
  ville.embed.fluent.ShieldDismissShield.$$dbClassInfo = $$dbClassInfo;
})();

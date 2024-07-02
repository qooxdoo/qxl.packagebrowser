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
  qx.Class.define("ville.embed.fluent.MathFormula", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.68 3.09c-.18-.04-.4-.04-.7 0-.52.08-.87.33-1.12.68-.26.37-.41.87-.46 1.45 0 .2-.04.87-.09 1.78H9.5a.5.5 0 0 1 0 1H7.26c-.13 2.25-.3 5.15-.36 5.94v.07c-.05.57-.11 1.25-.31 1.88-.21.67-.6 1.3-1.33 1.74-1.02.63-2.13.34-2.98-.08a.5.5 0 1 1 .44-.9c.75.38 1.44.49 2.02.13v-.01c.47-.27.73-.68.9-1.18.16-.52.2-1.1.26-1.7v-.03c.06-.8.23-3.64.36-5.86H4.5a.5.5 0 1 1 0-1h1.81a75.96 75.96 0 0 0 .1-1.84c.05-.7.24-1.4.63-1.96.4-.57 1-.97 1.78-1.1.4-.05.73-.05 1.05.01.33.06.6.2.89.36a.5.5 0 0 1-.52.86c-.22-.13-.39-.2-.56-.24Zm7.17 6.06c.2.2.2.5 0 .7l-3.22 3.22a162.5 162.5 0 0 0 1.4 2.47l.04.07c.06.12.11.2.15.25.06.09.12.15.25.22.21.03.28-.01.3-.03a3.56 3.56 0 0 0 .23-.27l.1-.13a.5.5 0 0 1 .8.6l-.06.08c-.11.16-.28.39-.5.54-.31.22-.69.27-1.14.17a1.69 1.69 0 0 1-.79-.6c-.08-.1-.14-.22-.2-.33l-.05-.08-.19-.32-1.07-1.9-3.05 3.04a.5.5 0 0 1-.7-.7l3.24-3.25a149.94 149.94 0 0 0-1.47-2.57 1.14 1.14 0 0 0-.32-.32c-.07-.02-.12-.01-.21.04-.12.08-.25.21-.39.4a.5.5 0 1 1-.8-.6c.16-.2.38-.47.66-.65a1.21 1.21 0 0 1 1.16-.1c.3.16.53.4.7.63a131.74 131.74 0 0 1 1.4 2.44l3.03-3.02c.2-.2.5-.2.7 0Z",
      FILLED: "M8.91 3.54c.3-.04.48-.03.62 0 .14.02.28.08.48.2a.75.75 0 1 0 .78-1.28c-.3-.18-.6-.32-.97-.4a3.3 3.3 0 0 0-1.13 0h-.01c-.8.13-1.43.55-1.86 1.16a4.23 4.23 0 0 0-.67 2.18v.03a8.55 8.55 0 0 1-.02.36c0 .22-.02.52-.04.87v.09H4.8a.75.75 0 0 0 0 1.5H6a864.51 864.51 0 0 1-.35 5.49c-.1 1.28-.22 2.14-1.03 2.61-.4.23-1.01.21-1.68-.12a.75.75 0 1 0-.68 1.34c.93.46 2.11.65 3.11.08 1.54-.9 1.68-2.55 1.77-3.67v-.12c.07-.77.23-3.46.36-5.61h1.8a.75.75 0 1 0 0-1.5H7.58l.07-1.32c.04-.6.2-1.05.4-1.35.2-.28.47-.47.86-.54Zm7.87 6.74a.75.75 0 0 0-1.06-1.06l-2.58 2.58a36.22 36.22 0 0 1-.76-1.36l-.07-.11c-.15-.25-.38-.61-.66-.87a1.6 1.6 0 0 0-.74-.4 1.55 1.55 0 0 0-1.1.18l-.03.02c-.08.06-.18.13-.28.23l-.13.15-.02.03-.17.19a.75.75 0 0 0 1.14.98l.17-.2.02-.03.07-.07.01-.01.04.03a7.8 7.8 0 0 1 .47.66c.12.24.49.9.94 1.67l-2.82 2.83a.75.75 0 1 0 1.06 1.06l2.66-2.66a38.47 38.47 0 0 1 .87 1.54c.13.22.35.6.64.87.18.17.42.34.73.42a1.6 1.6 0 0 0 1.06-.1c.35-.17.57-.4.8-.77a.75.75 0 0 0-1.28-.79.95.95 0 0 1-.13.18l-.03.02-.03.01-.03-.01a.38.38 0 0 1-.06-.05 6.01 6.01 0 0 1-.36-.52l-.06-.1c-.12-.23-.53-.96-1.02-1.8l2.74-2.74Zm-6.18.24Zm0 0Z"
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
  ville.embed.fluent.MathFormula.$$dbClassInfo = $$dbClassInfo;
})();

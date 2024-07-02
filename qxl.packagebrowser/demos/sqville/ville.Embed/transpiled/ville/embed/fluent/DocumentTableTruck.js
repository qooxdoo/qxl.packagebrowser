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
  qx.Class.define("ville.embed.fluent.DocumentTableTruck", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.5 9a1.5 1.5 0 0 0-1.42 1.01c.35.04.67.16.94.34A.5.5 0 0 1 7.5 10H8v1.48a2 2 0 0 1 1.04.96l.28.56H13v1.5a.5.5 0 0 1-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5Zm5.5 3H9v-2h3.5c.28 0 .5.22.5.5V12Zm-9-2h1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-4a2 2 0 0 1-.27 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-2 2v6Zm10.8-3h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM2.16 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 0 0 2.6.1h.75a1.33 1.33 0 0 0 2.58 0H8a1 1 0 0 0 1-1v-2.18a1 1 0 0 0-.1-.44l-.75-1.5a1 1 0 0 0-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17ZM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7Zm-4.67 3.34a.67.67 0 1 1 1.34 0 .67.67 0 0 1-1.34 0Zm4 .66a.67.67 0 1 1 0-1.33.67.67 0 0 1 0 1.33Z",
      FILLED: "m7.87 11.43.13.05V10h-.5a.5.5 0 0 0-.48.35c.39.26.7.64.85 1.08ZM13 13H9.32l.47.93a2 2 0 0 1 .21.9V15h2.5a.5.5 0 0 0 .5-.5V13Zm-7.17-3 .25.01A1.5 1.5 0 0 1 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H10v1a2 2 0 0 1-.27 1h4.77c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V10h1.83Zm7.17.5V12H9v-2h3.5c.28 0 .5.22.5.5Zm-2-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM2.17 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 0 0 2.6.1h.75a1.33 1.33 0 0 0 2.58 0H8a1 1 0 0 0 1-1v-2.18a1 1 0 0 0-.1-.44l-.75-1.5a1 1 0 0 0-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17ZM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7Zm-4.67 3.34a.67.67 0 1 1 1.34 0 .67.67 0 0 1-1.34 0Zm4 .66a.67.67 0 1 1 0-1.33.67.67 0 0 1 0 1.33Z"
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
  ville.embed.fluent.DocumentTableTruck.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.Fingerprint", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.72 3.95c1.53-.74 4.81-1.44 8.5.97a.5.5 0 1 0 .55-.84c-4.03-2.63-7.7-1.9-9.49-1.03a.5.5 0 1 0 .44.9Zm-1.81.64a.5.5 0 0 1-.14.7 5.33 5.33 0 0 0-1.34 1.46.5.5 0 0 1-.86-.5c.27-.46.95-1.34 1.65-1.8a.5.5 0 0 1 .69.14Zm5.59-.05a.5.5 0 1 0 0 1c1.66 0 5.51 1.38 6.5 6.55a.5.5 0 0 0 1-.18c-1.1-5.72-5.43-7.37-7.5-7.37ZM9.34 10.8c-.87.7-1.52 2.69.56 6.46a.5.5 0 0 1-.87.48c-2.15-3.88-1.78-6.52-.32-7.71A2.68 2.68 0 0 1 13 11.35c.08.26.14.58.2.9l.04.15c.08.38.17.78.3 1.18.26.79.67 1.57 1.48 2.16a.5.5 0 1 1-.6.8 5.17 5.17 0 0 1-1.83-2.65c-.15-.46-.25-.9-.33-1.29l-.03-.16a9 9 0 0 0-.19-.8 1.68 1.68 0 0 0-2.7-.84Zm6.16 1.17a.5.5 0 1 0-1 .06c.1 1.8 1.22 2.74 1.85 2.95a.5.5 0 0 0 .3-.96c-.22-.07-1.07-.64-1.15-2.05Zm-4.5.53a.5.5 0 1 0-1 0c0 1.04.13 1.85.44 2.64.3.77.77 1.5 1.4 2.4a.5.5 0 1 0 .82-.58 10.63 10.63 0 0 1-1.3-2.19A5.94 5.94 0 0 1 11 12.5ZM7.97 8.79c-1.72 1.33-2.7 4.14-1.02 7.49a.5.5 0 0 1-.9.44C4.18 13 5.22 9.65 7.35 8a4.82 4.82 0 0 1 3.73-1 5.47 5.47 0 0 1 3.65 2.56.5.5 0 1 1-.84.55 4.48 4.48 0 0 0-2.97-2.12 3.82 3.82 0 0 0-2.95.8Zm.49-3a.5.5 0 0 0-.35-.94c-4.68 1.7-5.79 6.19-5.35 9.22a.5.5 0 0 0 .99-.14c-.4-2.74.62-6.65 4.7-8.14Z",
      FILLED: "M6.83 4.18c1.47-.72 4.65-1.4 8.26.95a.75.75 0 0 0 .82-1.26C11.79 1.2 8.03 1.93 6.17 2.82a.75.75 0 1 0 .66 1.36Zm-1.71.27c.23.35.13.82-.22 1.04a5.1 5.1 0 0 0-1.25 1.39.75.75 0 1 1-1.3-.76c.28-.48.99-1.4 1.73-1.88a.75.75 0 0 1 1.04.21Zm5.38-.16a.75.75 0 0 0 0 1.5c1.55 0 5.3 1.3 6.26 6.35a.75.75 0 1 0 1.48-.28C17.1 6 12.67 4.29 10.5 4.29Zm-1.51.78a.75.75 0 0 1-.45.96C4.6 7.46 3.61 11.23 4 13.89a.75.75 0 1 1-1.48.22c-.44-3.1.69-7.74 5.52-9.5.39-.13.82.07.96.46Zm-.87 3.92c-1.6 1.24-2.58 3.92-.95 7.17a.75.75 0 0 1-1.34.68c-1.92-3.82-.87-7.3 1.37-9.04a5.07 5.07 0 0 1 3.92-1.05 5.72 5.72 0 0 1 3.81 2.67.75.75 0 1 1-1.25.83 4.23 4.23 0 0 0-2.8-2.02A3.57 3.57 0 0 0 8.12 9Zm7.63 2.97a.75.75 0 1 0-1.5.08c.1 1.91 1.29 2.94 2.02 3.17a.75.75 0 1 0 .45-1.43 1.72 1.72 0 0 1-.5-.43 2.46 2.46 0 0 1-.47-1.4Zm-4.5.54a.75.75 0 0 0-1.5 0c0 1.07.13 1.9.45 2.73.32.8.8 1.55 1.44 2.45a.75.75 0 1 0 1.22-.86 10.4 10.4 0 0 1-1.26-2.14 5.69 5.69 0 0 1-.35-2.18Zm-1.13 4.64C8.05 13.4 8.78 11.58 9.5 11a1.43 1.43 0 0 1 2.3.72c.06.2.12.44.18.77l.04.17c.08.38.18.84.33 1.3.3.95.84 1.99 1.93 2.79a.75.75 0 1 0 .89-1.21 3.93 3.93 0 0 1-1.4-2.04c-.12-.39-.2-.77-.28-1.15l-.04-.16c-.06-.3-.13-.64-.21-.91a2.93 2.93 0 0 0-4.68-1.45c-1.62 1.31-1.92 4.12.25 8.03a.75.75 0 0 0 1.31-.72Z"
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
  ville.embed.fluent.Fingerprint.$$dbClassInfo = $$dbClassInfo;
})();

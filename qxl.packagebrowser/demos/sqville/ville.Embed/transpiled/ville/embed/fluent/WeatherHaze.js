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
  qx.Class.define("ville.embed.fluent.WeatherHaze", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.52 10.02A4.48 4.48 0 0 0 5.6 9.3c.34-.03.68-.03 1.02 0a3.48 3.48 0 1 1 6.7 1.83c.39-.05.76-.15 1.1-.27.06-.27.09-.56.09-.85ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1Zm-6.78 9.5a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm0 2a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm3 1.4a4.81 4.81 0 0 0-3 .6.5.5 0 0 1-.48-.87 5.8 5.8 0 0 1 3.6-.73c1.16.15 2.28.63 3.4 1.28.95.56 2.09.68 3.18.53 1.1-.15 2.11-.58 2.77-1.05a.5.5 0 0 1 .58.82 7.47 7.47 0 0 1-3.2 1.22 5.96 5.96 0 0 1-3.84-.66 8.08 8.08 0 0 0-3.01-1.14Z",
      FILLED: "M14.52 10.02A4.48 4.48 0 0 0 5.6 9.3c.46-.04.92-.03 1.38.03 1.35.17 2.6.73 3.77 1.4.7.42 1.6.54 2.55.4.4-.05.78-.14 1.12-.27.06-.27.09-.56.09-.85ZM5.08 4.38 5 4.32a.5.5 0 0 0-.64.77l.86.86.07.05a.5.5 0 0 0 .63-.76l-.85-.86Zm10.66.64a.5.5 0 0 0-.77-.64l-.85.86-.06.07a.5.5 0 0 0 .76.64l.86-.86.06-.07Zm-5.22-2.59a.5.5 0 0 0-1 .1v1.2l.02.1a.5.5 0 0 0 .99-.1v-1.2l-.01-.1Zm-6.78 9.5a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Zm3 1.4a4.81 4.81 0 0 0-3 .6.5.5 0 0 1-.48-.87 5.8 5.8 0 0 1 3.6-.73c1.16.15 2.28.63 3.4 1.28.95.56 2.09.68 3.18.53 1.1-.15 2.11-.58 2.77-1.05a.5.5 0 0 1 .58.82 7.47 7.47 0 0 1-3.2 1.22 5.96 5.96 0 0 1-3.84-.66 8.08 8.08 0 0 0-3.01-1.14Zm-3 2.6a4.81 4.81 0 0 1 3-.6c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 0 0 3.21-1.22.5.5 0 0 0-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 0 0-3.39-1.28 5.8 5.8 0 0 0-3.6.73.5.5 0 0 0 .48.88Z"
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
  ville.embed.fluent.WeatherHaze.$$dbClassInfo = $$dbClassInfo;
})();
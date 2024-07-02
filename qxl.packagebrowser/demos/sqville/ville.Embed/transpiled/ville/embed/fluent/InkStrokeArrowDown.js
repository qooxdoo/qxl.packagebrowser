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
  qx.Class.define("ville.embed.fluent.InkStrokeArrowDown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 2.96a.5.5 0 0 1 .54-.46l3.05.27c2.15.2 4.21.45 5.9.73 1.67.28 3.04.6 3.77.96.19.1.37.21.51.36.14.16.27.4.22.69a.95.95 0 0 1-.4.57c-.16.13-.38.24-.63.34-.99.4-2.89.77-5.92 1.15-2.15.27-3.44.53-4.1.77H5.9l.3.1c.34.1.77.2 1.28.28 1 .18 2.25.33 3.59.44 1 .09 2.07.22 2.99.4.45.08.87.18 1.23.29.35.1.67.22.9.38.12.07.26.18.34.35.08.13.1.27.09.43L16.5 11a1.5 1.5 0 0 0-1.42 1.02c-.8.2-1.96.4-3.6.58a16 16 0 0 0-4.18.88c-.38.16-.56.3-.64.4-.06.08-.05.11-.04.14.02.07.08.19.26.35.17.15.4.31.7.48.57.33 1.31.63 2.02.86l2.64.81a.5.5 0 0 1-.3.96l-2.65-.82c-.74-.24-1.55-.57-2.21-.94-.33-.19-.64-.4-.88-.62a1.78 1.78 0 0 1-.55-.81c-.1-.36-.01-.72.23-1.03.23-.28.58-.5 1.02-.7.88-.38 2.32-.7 4.47-.95 2.1-.24 3.33-.48 3.95-.7a11.8 11.8 0 0 0-1.44-.37 30 30 0 0 0-2.89-.38 43.66 43.66 0 0 1-3.68-.45c-.52-.1-.98-.2-1.37-.3-.37-.1-.71-.24-.95-.4a.94.94 0 0 1-.34-.38.68.68 0 0 1 .04-.64c.1-.17.25-.28.39-.36.14-.08.32-.16.52-.23a23.3 23.3 0 0 1 4.31-.82c3.05-.38 4.83-.75 5.68-1.09.1-.04.2-.08.26-.12l-.04-.01c-.57-.3-1.8-.6-3.48-.87-1.66-.27-3.7-.52-5.84-.72L3.46 3.5A.5.5 0 0 1 3 2.96Zm14 9.54a.5.5 0 0 0-1 0v4.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L17 17.29V12.5Z",
      FILLED: "M2.75 2.93c.04-.4.4-.71.82-.68l3.04.28c2.16.2 4.22.45 5.92.73 1.66.27 3.08.6 3.85.98.2.1.4.23.57.41.18.2.36.51.28.9-.06.36-.3.6-.48.73a3 3 0 0 1-.7.37c-1.02.4-2.95.8-5.98 1.17-1.44.18-2.5.36-3.22.52a42.44 42.44 0 0 0 4.24.57c1.02.09 2.1.23 3.02.4.46.09.9.19 1.26.3.36.1.71.23.97.4a1.26 1.26 0 0 1 .49.59 1.75 1.75 0 0 0-2.33 1.65v.16c-.76.15-1.74.3-2.99.44-2.12.24-3.4.55-4.11.86-.3.13-.45.24-.51.3.03.04.07.1.16.17.15.14.36.3.64.45.56.32 1.29.61 1.98.84l2.64.81a.75.75 0 1 1-.44 1.44L9.2 16.9c-.75-.25-1.58-.58-2.25-.96-.34-.2-.67-.41-.93-.65a2.03 2.03 0 0 1-.62-.94c-.12-.44-.01-.88.28-1.24.26-.33.65-.58 1.1-.77.93-.4 2.4-.73 4.55-.98 1.37-.15 2.36-.31 3.04-.46l-.55-.12c-.86-.16-1.89-.29-2.86-.37a43.94 43.94 0 0 1-3.7-.46c-.53-.09-1-.2-1.4-.3-.37-.11-.75-.24-1.02-.43a1.19 1.19 0 0 1-.43-.49.93.93 0 0 1 .06-.87c.13-.22.32-.36.47-.44.17-.1.36-.18.56-.26.8-.28 2.22-.56 4.37-.83 2.7-.33 4.38-.66 5.3-.96-.64-.2-1.63-.42-2.9-.63a88.96 88.96 0 0 0-5.8-.72l-3.05-.27a.75.75 0 0 1-.68-.82ZM17 12.25a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-4.19Z"
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
  ville.embed.fluent.InkStrokeArrowDown.$$dbClassInfo = $$dbClassInfo;
})();
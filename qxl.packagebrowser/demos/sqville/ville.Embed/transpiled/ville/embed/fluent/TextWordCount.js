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
  qx.Class.define("ville.embed.fluent.TextWordCount", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM7.6 13c-.62 0-1.1.55-1.1 1.14a.5.5 0 0 1-1 0 2.14 2.14 0 0 1 3.91-1.2c.4.63.43 1.45-.05 2.27-.25.41-.58.73-.92 1l-.5.37-.07.05-.4.3c-.44.32-.76.64-.9 1.07h2.6a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5c0-1.2.7-1.87 1.36-2.38l.43-.3.07-.06c.16-.11.32-.22.46-.34.3-.23.52-.45.67-.72.32-.54.25-.95.08-1.21A1.16 1.16 0 0 0 7.6 13Zm4.48.27a.99.99 0 0 0-.29.46.5.5 0 1 1-.96-.28c.08-.26.25-.63.59-.93.34-.3.84-.52 1.5-.52 1.34 0 2.1.98 2.1 1.86 0 .36-.06.9-.43 1.36-.07.09-.15.17-.24.25a1.66 1.66 0 0 1 .67 1.4c0 .72-.24 1.28-.67 1.65-.42.36-.95.48-1.43.48-.46 0-.9-.08-1.28-.32a2 2 0 0 1-.8-1.12.5.5 0 1 1 .95-.3c.1.32.24.49.4.58.15.1.38.16.73.16.32 0 .6-.08.78-.24.17-.14.32-.4.32-.9a.73.73 0 0 0-.12-.44.79.79 0 0 0-.31-.25c-.3-.14-.68-.17-.94-.17a.5.5 0 1 1 0-1c.7 0 1.01-.22 1.16-.4.16-.21.21-.49.21-.74 0-.32-.3-.86-1.1-.86-.43 0-.69.13-.84.27Zm-9.06 1.1a4.8 4.8 0 0 1-.85.73.5.5 0 1 1-.56-.83 3.46 3.46 0 0 0 1.42-1.88s.11-.39.46-.39c.5 0 .53.5.53.5v6a.5.5 0 0 1-1 0v-4.14Zm13 .13c0-.28.21-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      FILLED: "M2.98 14.54c-.26.27-.55.51-.86.7a.5.5 0 1 1-.54-.83A3.33 3.33 0 0 0 3 12.62a.5.5 0 0 1 .99.11v5.77a.5.5 0 0 1-1 0v-3.96Zm4.6-1.3c-.62 0-1.09.53-1.09 1.06a.5.5 0 0 1-1 0 2.1 2.1 0 0 1 2.1-2.07c.72 0 1.42.33 1.81.91.41.61.43 1.41-.06 2.21-.24.4-.58.71-.91.97l-.5.35-.08.05-.4.28c-.43.32-.74.6-.88 1h2.6a.5.5 0 0 1 0 1H5.98a.5.5 0 0 1-.5-.5c0-1.17.7-1.82 1.37-2.3l.43-.3.07-.05.46-.33c.29-.22.52-.44.67-.69.31-.51.24-.89.08-1.13a1.18 1.18 0 0 0-.98-.47Zm4.48.25a.92.92 0 0 0-.28.43.5.5 0 1 1-.96-.28c.08-.27.25-.62.6-.9.34-.3.83-.5 1.49-.5 1.32 0 2.1.93 2.1 1.8 0 .35-.06.87-.43 1.32a1.8 1.8 0 0 1-.22.22 1.65 1.65 0 0 1 .65 1.34 2 2 0 0 1-.68 1.62c-.42.35-.95.46-1.42.46-.45 0-.89-.07-1.27-.3-.38-.24-.65-.6-.81-1.09a.5.5 0 1 1 .95-.32c.1.3.24.46.39.55.15.1.38.16.74.16.33 0 .6-.08.79-.23.16-.14.31-.38.31-.84 0-.2-.05-.32-.11-.41a.78.78 0 0 0-.32-.24c-.3-.13-.68-.16-.94-.16a.5.5 0 0 1 0-1c.71 0 1.02-.22 1.16-.4.16-.19.21-.45.21-.68 0-.28-.28-.8-1.1-.8-.44 0-.7.12-.85.25ZM2 9.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm0-5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm14 10c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
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
  ville.embed.fluent.TextWordCount.$$dbClassInfo = $$dbClassInfo;
})();

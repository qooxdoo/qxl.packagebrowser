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
  qx.Class.define("ville.embed.fluent.TextProofingTools", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.94 3c.21 0 .4.14.47.33l1.77 5a.5.5 0 0 1-.94.34l-.26-.73V8H3.73l-.26.68a.5.5 0 1 1-.94-.36l1.94-5A.5.5 0 0 1 4.94 3Zm-.02 1.94L4.12 7h1.53l-.73-2.06Zm12.49-.41c-.25-.69-.6-1.1-1.06-1.33-.4-.2-.83-.2-1.1-.2h-.03c-.55 0-1 .19-1.33.49-.32.29-.52.65-.64.99A4.06 4.06 0 0 0 13 5.77v.05c0 .39 0 1.09.25 1.73.13.33.33.67.66.93.32.27.74.45 1.25.5.42.05 1.67.02 2.23-1.24a.5.5 0 1 0-.9-.4c-.3.64-.94.68-1.22.65a1.34 1.34 0 0 1-.73-.28 1.26 1.26 0 0 1-.36-.52A3.89 3.89 0 0 1 14 5.8V5.8a1.78 1.78 0 0 1 .02-.28c.03-.2.07-.44.16-.68.1-.25.22-.45.38-.6a.94.94 0 0 1 .66-.23c.3 0 .5 0 .7.1.15.08.36.25.55.77a.5.5 0 1 0 .94-.34Zm-5.94 1.3c.2-.26.32-.62.32-1.07 0-.38-.07-.7-.22-.96a1.44 1.44 0 0 0-.56-.57c-.4-.23-.84-.23-1-.23H8.5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1.75c.22 0 .66-.03 1.07-.27.45-.26.8-.74.8-1.49 0-.38-.09-.7-.25-.98a1.45 1.45 0 0 0-.4-.42Zm-.95-1.73c.07.04.13.1.18.18a1 1 0 0 1 .1.48c0 .4-.16.54-.28.62-.17.1-.38.12-.5.12H9V4h1c.16 0 .36.01.52.1ZM9.36 6.5h.83c.18 0 .43 0 .62.1.1.05.16.1.2.18.06.09.1.22.1.46 0 .38-.14.54-.3.62-.18.11-.42.14-.56.14H9V6.5h.36Zm4.4 4.32a.5.5 0 1 0-.78-.64l-3.74 4.58-1.89-1.89a.5.5 0 0 0-.7.71l2.27 2.27a.5.5 0 0 0 .74-.03l4.1-5Z",
      FILLED: "M16.97 2.98c.52.25.91.74 1.17 1.46a.75.75 0 1 1-1.4.51c-.18-.47-.35-.59-.44-.63-.12-.06-.27-.07-.58-.07a.69.69 0 0 0-.5.17c-.12.1-.22.27-.3.5a2.81 2.81 0 0 0-.17.88c0 .41 0 .9.16 1.3.08.18.17.32.3.42.11.1.3.2.6.23.08 0 .28 0 .48-.07a.8.8 0 0 0 .46-.45.75.75 0 0 1 1.37.61c-.63 1.42-2.03 1.45-2.48 1.4a2.58 2.58 0 0 1-1.4-.56c-.35-.3-.58-.68-.72-1.04a5 5 0 0 1-.27-1.8v-.08a3.36 3.36 0 0 1 .03-.4c.03-.26.1-.61.23-.97.14-.36.35-.77.72-1.09.37-.34.87-.55 1.49-.55h.03c.28 0 .75 0 1.22.23Zm-11.58.27A.75.75 0 0 0 4 3.23l-1.94 5a.75.75 0 1 0 1.4.54l.1-.27h2.11l.1.25a.75.75 0 0 0 1.4-.5l-1.77-5ZM5.13 7h-1l.53-1.34L5.13 7ZM8 3.5v5a.75.75 0 0 0 .87.74v.01h1.63c.24 0 .73-.04 1.2-.3.52-.3.92-.87.92-1.7 0-.43-.1-.8-.28-1.12a1.7 1.7 0 0 0-.29-.35c.15-.27.24-.62.24-1.02 0-.41-.08-.77-.25-1.08a1.69 1.69 0 0 0-.66-.67c-.46-.26-.95-.26-1.12-.26H8.75A.75.75 0 0 0 8 3.5Zm2.5 4.25h-1v-1H10.44c.19 0 .38.01.51.08.05.02.08.05.1.08.03.04.07.13.07.33 0 .17-.04.26-.06.3a.3.3 0 0 1-.12.1.96.96 0 0 1-.44.11Zm-.88-2.5H9.5v-1h.75c.16 0 .3.01.4.07a.2.2 0 0 1 .08.08c.02.04.06.15.06.36 0 .18-.03.27-.06.3a.25.25 0 0 1-.1.1.76.76 0 0 1-.35.09h-.66Zm4.32 5.72a.75.75 0 0 0-1.16-.94l-3.56 4.35-1.69-1.68a.75.75 0 0 0-1.06 1.06l2.27 2.27a.75.75 0 0 0 1.11-.06l4.1-5Z"
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
  ville.embed.fluent.TextProofingTools.$$dbClassInfo = $$dbClassInfo;
})();

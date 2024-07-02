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
  qx.Class.define("ville.embed.fluent.DesignIdeas", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9 4c-.76 0-1.48.21-2.08.58a3.3 3.3 0 0 0-.34-.96A5 5 0 0 1 14 8h2.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 9 15.5V13c-.72 0-1.4-.15-2.02-.42L7 11.5v-.04c.59.35 1.27.54 2 .54V9.5c0-.83.67-1.5 1.5-1.5H13a4 4 0 0 0-4-4Zm4.9 5a5 5 0 0 1-3.9 3.9v2.6c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-2.6Zm-1.03 0H10.5a.5.5 0 0 0-.5.5v2.37A4 4 0 0 0 12.87 9ZM4.58 2.13a.5.5 0 0 1 .12.6l-.01.08c0 .07.01.19.16.34l.2.18.16.16c.13.12.27.27.4.45.25.38.39.86.39 1.56 0 .85-.32 1.58-.8 2.03l.05.07c.29.34.45.79.55 1.23.2.87.2 1.92.2 2.64v.03c0 2.79-.38 4.37-.8 5.27-.2.46-.43.75-.62.93a1.48 1.48 0 0 1-.4.26S4.09 18 4 18c-.07 0-.19-.04-.19-.04a.75.75 0 0 1-.13-.06c-.07-.05-.16-.1-.26-.2-.2-.18-.41-.47-.62-.93-.42-.9-.8-2.48-.8-5.27v-.03c0-.72 0-1.77.2-2.64a3.02 3.02 0 0 1 .6-1.3C2.33 7.08 2 6.35 2 5.5a4.73 4.73 0 0 1 .69-2.1A4.07 4.07 0 0 1 3.93 2.1l.03-.02h.01a.5.5 0 0 1 .61.04ZM4 7c.39 0 1-.43 1-1.5 0-.55-.1-.82-.23-1-.06-.1-.14-.2-.25-.3l-.12-.1-.25-.25a1.67 1.67 0 0 1-.28-.36 2.5 2.5 0 0 0-.34.44A3.73 3.73 0 0 0 3 5.5C3 6.57 3.62 7 4 7Zm-.48 1.23c-.14.18-.26.45-.35.82C3 9.8 3 10.75 3 11.5c0 2.71.37 4.13.7 4.85.11.24.22.4.3.5.08-.1.19-.26.3-.5.33-.72.7-2.14.7-4.85 0-.76 0-1.7-.17-2.45-.1-.37-.2-.64-.35-.82A.57.57 0 0 0 4 8a.57.57 0 0 0-.48.23Z",
      FILLED: "M9 4.5c-.75 0-1.44.24-2.01.64a3.59 3.59 0 0 0-.41-1.52A5 5 0 0 1 14 8h2.25c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5C9.78 17 9 16.22 9 15.25V13c-.72 0-1.4-.15-2.02-.42L7 11.5V10.87c.56.4 1.26.63 2 .63V9.75C9 8.78 9.78 8 10.75 8h1.75A3.5 3.5 0 0 0 9 4.5Zm4.77 5a5.01 5.01 0 0 1-3.27 3.27v2.48c0 .14.11.25.25.25h5.5c.14 0 .25-.11.25-.25v-5.5a.25.25 0 0 0-.25-.25h-2.48Zm-1.6 0h-1.42a.25.25 0 0 0-.25.25v1.41a3.51 3.51 0 0 0 1.66-1.66ZM4.57 2.13a.5.5 0 0 1 .12.6l-.01.08c0 .07.01.19.16.34l.2.18.16.16c.13.12.27.27.4.45.25.38.39.86.39 1.56 0 .85-.32 1.58-.8 2.03l.05.07c.29.34.45.79.55 1.23.2.87.2 1.92.2 2.64v.03c0 2.79-.38 4.37-.8 5.27-.2.46-.43.75-.62.93a1.48 1.48 0 0 1-.4.26S4.09 18 4 18c-.07 0-.19-.04-.19-.04a.75.75 0 0 1-.13-.06c-.07-.05-.16-.1-.26-.2-.2-.18-.41-.47-.62-.93-.42-.9-.8-2.48-.8-5.27v-.03c0-.72 0-1.77.2-2.64a3.02 3.02 0 0 1 .6-1.3C2.33 7.08 2 6.35 2 5.5a4.73 4.73 0 0 1 .69-2.1A4.07 4.07 0 0 1 3.93 2.1l.04-.03a.5.5 0 0 1 .61.05Z"
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
  ville.embed.fluent.DesignIdeas.$$dbClassInfo = $$dbClassInfo;
})();

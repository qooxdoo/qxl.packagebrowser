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
  qx.Class.define("ville.embed.fluent.Dentist", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12.94 5.6a.5.5 0 0 0 0 1c.29 0 .53.08.71.24.18.16.34.43.38.87a.5.5 0 1 0 1-.09 2.25 2.25 0 0 0-.71-1.52c-.4-.35-.9-.5-1.38-.5Zm-4-1.67a3.46 3.46 0 0 0-2.9-.74c-.92.18-1.73.69-2.26 1.27a4.1 4.1 0 0 0-1.24 2.7c-.03.6.06 1.47.53 2.13a5 5 0 0 1 1.12 3.15c0 .65.14 1.53.46 2.34.32.8.87 1.6 1.77 1.94h.02l.03.01c.52.14 1 .1 1.38-.25.32-.3.46-.76.53-1.16.07-.38.1-.82.14-1.25l.01-.15a12 12 0 0 1 .18-1.44c.27-1.27.65-1.5.83-1.55.49-.13.78-.04.97.1.28.2.49.61.64 1.22.14.6.2 1.27.25 1.88.07.87.25 1.65.6 2.16.18.26.44.49.79.56.35.08.69-.03.99-.22 1.1-.7 1.74-2.17 1.91-4.1.08-.88.17-1.3.3-1.64.1-.25.22-.46.42-.8a39.23 39.23 0 0 0 .36-.63c.25-.43.65-1.23.7-2.16a3.48 3.48 0 0 0-1.44-2.96 4.4 4.4 0 0 0-3.01-1.16c-.9.05-1.62.46-2.13.9h-.01l-.01.02c-.5.49-.73.58-.88.57-.17 0-.45-.14-1.01-.7l-.02-.02-.02-.02Zm-4.43 1.2c.4-.43 1.03-.82 1.72-.96a2.45 2.45 0 0 1 2.06.52c.54.54 1.06.96 1.65.98.62.03 1.13-.37 1.61-.84.4-.34.91-.62 1.52-.65.61-.03 1.39.17 2.33.94.89.72 1.1 1.48 1.06 2.13-.03.7-.33 1.32-.56 1.72l-.12.2-.2.36c-.21.36-.4.66-.52 1-.18.47-.28 1-.36 1.9-.17 1.82-.75 2.9-1.46 3.36-.16.1-.23.09-.25.08-.01 0-.08-.02-.17-.15-.2-.28-.36-.85-.43-1.67v-.02c-.05-.6-.1-1.34-.27-2.01-.16-.67-.44-1.38-1.02-1.8-.49-.35-1.1-.44-1.82-.26h-.01c-.73.22-1.24.92-1.53 2.32-.11.52-.16 1.07-.2 1.56l-.02.15c-.03.44-.06.82-.12 1.14-.07.37-.16.55-.24.62-.03.03-.11.1-.41.02-.5-.2-.9-.7-1.17-1.37a5.7 5.7 0 0 1-.4-1.97 5.98 5.98 0 0 0-1.3-3.72 2.6 2.6 0 0 1-.35-1.51c.04-.87.45-1.48.98-2.06Z",
      FILLED: "M8.94 3.93a3.46 3.46 0 0 0-2.9-.74c-.92.18-1.73.69-2.26 1.27a4.1 4.1 0 0 0-1.24 2.7c-.03.6.06 1.47.53 2.13a5 5 0 0 1 1.12 3.15c0 .65.14 1.53.46 2.34.32.8.87 1.6 1.77 1.94h.02l.03.01c.52.14 1 .1 1.38-.25.32-.3.46-.76.53-1.16.07-.38.1-.82.14-1.25l.01-.15a12 12 0 0 1 .18-1.44c.27-1.27.65-1.5.83-1.55.49-.13.78-.04.97.1.28.2.49.61.64 1.22.14.6.2 1.27.25 1.88.07.87.25 1.65.6 2.16.18.26.44.49.79.56.35.08.69-.03.99-.22 1.1-.7 1.74-2.17 1.91-4.1.08-.88.17-1.3.3-1.64.1-.25.22-.46.42-.8a39.23 39.23 0 0 0 .36-.63c.25-.43.65-1.23.7-2.16a3.48 3.48 0 0 0-1.44-2.96 4.4 4.4 0 0 0-3.01-1.16c-.9.05-1.62.46-2.13.9h-.01l-.01.02c-.5.49-.73.58-.88.57-.17 0-.45-.14-1.01-.7l-.02-.02-.02-.02Zm4 1.67c.48 0 .98.15 1.38.5.4.35.64.87.7 1.52a.5.5 0 1 1-1 .1c-.03-.45-.19-.72-.37-.88a1.06 1.06 0 0 0-.71-.24.5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.Dentist.$$dbClassInfo = $$dbClassInfo;
})();

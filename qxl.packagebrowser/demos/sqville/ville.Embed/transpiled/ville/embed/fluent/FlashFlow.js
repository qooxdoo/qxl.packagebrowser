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
  qx.Class.define("ville.embed.fluent.FlashFlow", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81L14 10.38a2.5 2.5 0 0 0-.63-.79l1.44-1.46a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.21a3 3 0 0 0 1 1.38l-1.14 4.54v.04l.03.03.04.01h.01l.03-.02 4.2-4.3c.34-.17.65-.4.9-.68h.18l.25.76-4.81 4.91c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77Zm12.52 12.25A2.01 2.01 0 0 1 17 16a2 2 0 0 1-2-2h-.78a1.5 1.5 0 0 1-1.41-1l-.01-.03-.55-1.63a.5.5 0 0 0-.47-.34h-1.05a2 2 0 1 1 .27-1h.78c.64 0 1.22.41 1.42 1.03l.55 1.63c.06.2.26.34.47.34h1.05a2 2 0 1 1 3.45 2.02ZM17 15a1 1 0 0 0 1-1v-.05a1 1 0 0 0-2 .05v.02a1 1 0 0 0 1 .98Zm-8-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      FILLED: "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.81-4.92-.25-.76h-.18a3 3 0 1 1 .59-3A2.5 2.5 0 0 1 14 10.37l1.52-1.55c.65-.68.19-1.82-.76-1.82h-2.56l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2Zm10.72 13.77A2.01 2.01 0 0 0 19 14a2 2 0 0 0-3.73-1h-1.05a.5.5 0 0 1-.47-.34l-.55-1.63A1.5 1.5 0 0 0 11.78 10H11a2 2 0 1 0-.27 1h1.05c.21 0 .4.14.47.34l.55 1.63V13a1.5 1.5 0 0 0 1.42 1H15a2 2 0 0 0 2.93 1.77Zm-.44-.9a1 1 0 0 1-1.49-.86V14a1 1 0 0 1 2-.01V14a1 1 0 0 1-.51.87ZM10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
  ville.embed.fluent.FlashFlow.$$dbClassInfo = $$dbClassInfo;
})();

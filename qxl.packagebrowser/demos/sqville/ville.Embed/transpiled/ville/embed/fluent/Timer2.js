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
  qx.Class.define("ville.embed.fluent.Timer2", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71ZM9 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3 11.04A6.98 6.98 0 0 1 2.5 11a7 7 0 0 1 13.95-.87 3.5 3.5 0 0 0-1.03-.13 6 6 0 1 0-3.23 6.37A3.5 3.5 0 0 0 12 17.5v.04ZM15.5 11a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5 2.5 2.5 0 0 0-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 0 0 0-5Z",
      FILLED: "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Zm1.29 6.2A3.5 3.5 0 0 0 12 13.5c0 .7.47 1.27 1.1 1.45A3.49 3.49 0 0 0 12 17.5v.04A6.98 6.98 0 0 1 2.5 11a7 7 0 0 1 13.95-.87ZM9 11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v5Zm6.5-.5a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5 2.5 2.5 0 0 0-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 0 0 0-5Z"
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
  ville.embed.fluent.Timer2.$$dbClassInfo = $$dbClassInfo;
})();
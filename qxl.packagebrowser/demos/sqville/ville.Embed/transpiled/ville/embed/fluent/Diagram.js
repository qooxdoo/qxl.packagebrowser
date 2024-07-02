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
  qx.Class.define("ville.embed.fluent.Diagram", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.82l.9-1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.03c.36.06.7.2 1 .4V5a3 3 0 0 0-3-3H5Zm1.5 9a.5.5 0 0 0-.37.83L8.94 15l-2.81 3.17a.5.5 0 0 0 .37.83h8.1c.38 0 .76-.15 1.04-.42l3.13-3.04c.3-.3.3-.78 0-1.08l-3.13-3.04a1.5 1.5 0 0 0-1.05-.42H6.5Zm3.34 3.5L7.6 12h6.98a.5.5 0 0 1 .35.14L17.9 15l-2.95 2.86a.5.5 0 0 1-.35.14H7.61l2.23-2.5a.75.75 0 0 0 0-1ZM5 5.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5.5 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
      FILLED: "M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.82l.9-1H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.03c.36.06.7.2 1 .4V5a3 3 0 0 0-3-3H5Zm.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM5 8.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM6.5 11a.5.5 0 0 0-.37.83L8.94 15l-2.81 3.17a.5.5 0 0 0 .37.83h8.1c.38 0 .76-.15 1.04-.42l3.13-3.04c.3-.3.3-.78 0-1.08l-3.13-3.04a1.5 1.5 0 0 0-1.05-.42H6.5Z"
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
  ville.embed.fluent.Diagram.$$dbClassInfo = $$dbClassInfo;
})();
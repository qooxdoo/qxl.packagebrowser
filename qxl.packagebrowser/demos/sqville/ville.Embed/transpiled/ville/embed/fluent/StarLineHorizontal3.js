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
  qx.Class.define("ville.embed.fluent.StarLineHorizontal3", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.1 2.9a1 1 0 0 1 1.8 0L12.92 7h4.58a.5.5 0 1 1 0 1h-4.58a1 1 0 0 1-.9-.56L10 3.34 8.07 7.25a1 1 0 0 1-.75.55L3 8.43l3.12 3.04a1 1 0 0 1 .3.89l-.75 4.3 4.1-2.16a.5.5 0 0 1 .46.89l-4.09 2.15a1 1 0 0 1-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.9Zm2.9 7.6c0-.28.22-.5.5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      FILLED: "M10.9 2.9a1 1 0 0 0-1.8 0L7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05L11 14.98V13.5c0-.83.67-1.5 1.5-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1-.07-3L10.9 2.9Zm1.6 7.1a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5ZM12 7.5c0-.28.23-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 5.5a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5Z"
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
  ville.embed.fluent.StarLineHorizontal3.$$dbClassInfo = $$dbClassInfo;
})();
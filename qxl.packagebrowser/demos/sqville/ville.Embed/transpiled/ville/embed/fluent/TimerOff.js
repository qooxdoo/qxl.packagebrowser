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
  qx.Class.define("ville.embed.fluent.TimerOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.96 5.67 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.32-2.31A6.98 6.98 0 0 1 2.5 11c0-2.13.96-4.05 2.46-5.33Zm9.16 9.16L10 10.7v.79a.5.5 0 0 1-1 0V9.7L5.67 6.39A5.99 5.99 0 0 0 9.5 17c1.86 0 3.52-.85 4.62-2.17ZM9 6.5v.38l1 1V6.5a.5.5 0 0 0-1 0Zm6.5 4.5a6 6 0 0 1-.35 2.03l.77.77A7 7 0 0 0 6.7 4.58l.77.77A5.99 5.99 0 0 1 15.5 11Zm-8-9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42Z",
      FILLED: "M4.96 5.67 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.32-2.31A6.98 6.98 0 0 1 2.5 11c0-2.13.96-4.05 2.46-5.33ZM10 10.71l-1-1v1.79a.5.5 0 0 0 1 0v-.8Zm0-4.21v1.38l5.92 5.92A7 7 0 0 0 6.7 4.58L9 6.88V6.5a.5.5 0 0 1 1 0Zm-3-4c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71Z"
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
  ville.embed.fluent.TimerOff.$$dbClassInfo = $$dbClassInfo;
})();

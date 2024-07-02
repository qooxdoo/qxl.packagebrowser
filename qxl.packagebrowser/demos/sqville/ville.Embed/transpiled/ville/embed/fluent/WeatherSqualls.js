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
  qx.Class.define("ville.embed.fluent.WeatherSqualls", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.57 6.11A3.25 3.25 0 1 1 9.75 10H2.5a.5.5 0 1 1 0-1h7.25a2.25 2.25 0 1 0-2.2-2.7l-.06.3a.5.5 0 1 1-.98-.2l.06-.29ZM13 10.5a2.5 2.5 0 1 1 2.5 2.5h-1.38a2.25 2.25 0 1 1-4.1 1.61l-.01-.03a.5.5 0 1 1 .98-.16v.03c.1.6.64 1.05 1.25 1.05a1.25 1.25 0 1 0 0-2.5H2.51a.5.5 0 0 1 0-1h13a1.5 1.5 0 1 0-1.5-1.5.5.5 0 0 1-1 0Z",
      FILLED: "M6.07 5.81A3.5 3.5 0 1 1 9.5 10H2.75a.75.75 0 1 1 0-1.5H9.5a2 2 0 1 0-1.96-2.4l-.05.3A.75.75 0 0 1 6 6.1l.06-.29Zm7.29 3.54a2.45 2.45 0 0 1 4.64 1.1v.05a2.5 2.5 0 0 1-2.5 2.5h-.92a2.37 2.37 0 0 1-2.2 3.25c-.8 0-1.55-.4-1.99-1.06l-.01-.02a.75.75 0 1 1 1.24-.83l.02.02a.88.88 0 0 0 1.61-.48c0-.49-.4-.88-.88-.88H2.75a.75.75 0 0 1 0-1.5H15.5a1 1 0 0 0 1-1v-.05a.95.95 0 0 0-1.8-.43l-.03.07a.75.75 0 1 1-1.34-.68l.03-.06Z"
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
  ville.embed.fluent.WeatherSqualls.$$dbClassInfo = $$dbClassInfo;
})();
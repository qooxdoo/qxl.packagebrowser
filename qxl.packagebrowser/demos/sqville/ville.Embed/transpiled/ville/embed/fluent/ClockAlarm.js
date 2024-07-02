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
  qx.Class.define("ville.embed.fluent.ClockAlarm", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 6.5a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5h3a.5.5 0 1 0 0-1H10V6.5ZM3.35 7.8A3.19 3.19 0 0 1 5.17 2c1.07 0 2.02.54 2.6 1.37a7 7 0 0 1 4.46 0A3.16 3.16 0 0 1 18 5.16c0 1.08-.54 2.04-1.36 2.61a7 7 0 0 1-1.35 6.8l1.56 1.57a.5.5 0 0 1-.7.7l-1.57-1.56a6.97 6.97 0 0 1-9.16 0l-1.57 1.56a.5.5 0 1 1-.7-.7l1.56-1.57A6.97 6.97 0 0 1 3.35 7.8ZM3 5.19c0 .66.3 1.25.75 1.65a7.03 7.03 0 0 1 3.06-3.07C6.41 3.3 5.82 3 5.17 3 3.97 3 3 3.98 3 5.19Zm13.24 1.64a2.17 2.17 0 1 0-3.06-3.07 7.03 7.03 0 0 1 3.06 3.07ZM4 10a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z",
      FILLED: "M7.76 3.37A3.16 3.16 0 0 0 2 5.19c0 1.08.53 2.03 1.35 2.61a7 7 0 0 0 1.36 6.78l-1.56 1.57a.5.5 0 0 0 .7.7l1.57-1.56a6.97 6.97 0 0 0 9.16 0l1.57 1.56a.5.5 0 0 0 .7-.7l-1.56-1.57a6.97 6.97 0 0 0 1.35-6.8 3.17 3.17 0 1 0-4.41-4.42 7 7 0 0 0-4.47 0ZM5.16 3c.66 0 1.25.3 1.65.77a7.03 7.03 0 0 0-3.06 3.07A2.2 2.2 0 0 1 5.17 3Zm8.02.76A2.16 2.16 0 0 1 17 5.18c0 .66-.3 1.25-.76 1.65a7.03 7.03 0 0 0-3.06-3.07ZM9.5 6c.28 0 .5.22.5.5V10h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Z"
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
  ville.embed.fluent.ClockAlarm.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.WeatherRainSnow", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-1.5a.5.5 0 1 1-.95 0H7.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 0 1 3 10.24a2.82 2.82 0 0 1 2.87-2.77h.06C6.13 5.57 7.53 4 10 4Zm1.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 0 1-.68.2.49.49 0 0 1-.23-.59l.03-.08.56-1.01a.5.5 0 0 1 .68-.2Zm4.2-.06a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 5a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z",
      FILLED: "M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13h-1.5a.5.5 0 1 1-.95 0H7.44l-1.5 2.75a.5.5 0 0 1-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 0 1 3 10.24a2.82 2.82 0 0 1 2.87-2.77h.06C6.13 5.57 7.53 4 10 4Zm1.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 0 1-.68.2.49.49 0 0 1-.23-.59l.03-.08.56-1.01a.5.5 0 0 1 .68-.2Zm4.2-.06a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.WeatherRainSnow.$$dbClassInfo = $$dbClassInfo;
})();
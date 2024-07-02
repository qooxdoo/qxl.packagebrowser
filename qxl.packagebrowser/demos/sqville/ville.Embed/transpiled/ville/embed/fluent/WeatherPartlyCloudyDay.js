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
  qx.Class.define("ville.embed.fluent.WeatherPartlyCloudyDay", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 8ZM3.8 9.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 0 0-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 5.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 3.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z",
      FILLED: "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7ZM3.8 9.7a.5.5 0 0 1-.22.6l-.09.04-.8.27a.5.5 0 0 1-.4-.9l.08-.04.8-.28a.5.5 0 0 1 .63.31Zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 0 0-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 0 1 4.2-4.72Zm-6 .17L3 5.7l.76.37a.5.5 0 0 1-.35.93l-.09-.03-.76-.37a.5.5 0 0 1 .36-.93ZM9.99 3.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 0 1-.93-.36l.03-.08.37-.76a.5.5 0 0 1 .67-.23Zm-3.8-.04.05.09.27.8a.5.5 0 0 1-.9.4l-.04-.08-.28-.8a.5.5 0 0 1 .9-.4Z"
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
  ville.embed.fluent.WeatherPartlyCloudyDay.$$dbClassInfo = $$dbClassInfo;
})();

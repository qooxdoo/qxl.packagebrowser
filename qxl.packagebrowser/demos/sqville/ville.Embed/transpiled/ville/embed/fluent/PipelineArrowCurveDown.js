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
  qx.Class.define("ville.embed.fluent.PipelineArrowCurveDown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.98 6c-.03.34-.1.68-.18 1H15v6H5v-2.02c-.35-.03-.68-.1-1-.19v3.71a.5.5 0 0 1-1 0v-4.1c-.37-.19-.7-.4-1-.66v4.76a1.5 1.5 0 0 0 3 0V14h10v.5a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-3 0V6h-4.02Zm5.52-1c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5Zm-11-4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm2.6 5.4c.2.2.2.5 0 .7L6.37 8.85a.5.5 0 0 1-.7 0L3.9 7.1a.5.5 0 1 1 .7-.7l.9.9V5.74C5.5 4.78 4.72 4 3.75 4H3.5a.5.5 0 1 1 0-1h.25A2.75 2.75 0 0 1 6.5 5.75v1.54l.9-.9c.2-.19.51-.19.7 0Z",
      FILLED: "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7ZM2 9.74a5.48 5.48 0 0 0 3 1.24v3.52a1.5 1.5 0 0 1-3 0V9.74ZM10.97 6A5.5 5.5 0 0 1 6 10.98V14h8V6h-3.02Zm5.52-2c-.83 0-1.5.67-1.5 1.5v9a1.5 1.5 0 0 0 3 0v-9c0-.83-.67-1.5-1.5-1.5Z"
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
  ville.embed.fluent.PipelineArrowCurveDown.$$dbClassInfo = $$dbClassInfo;
})();
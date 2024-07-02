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
  qx.Class.define("ville.embed.fluent.CalendarEye", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.5 3A2.5 2.5 0 0 1 17 5.5v6.07a5.74 5.74 0 0 0-1-.37V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.55c.07.33.2.67.37 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 8c-2.76 0-4.5 2.32-4.5 3.5 0 1.2 1.74 3.5 4.5 3.5s4.5-2.32 4.5-3.5c0-1.2-1.74-3.5-4.5-3.5Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      FILLED: "M17 7v4.57a5.74 5.74 0 0 0-6.47 1c-.46.44-.84.93-1.1 1.41-.25.47-.43 1-.43 1.52 0 .48.16 1 .42 1.5H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 9c-2.76 0-4.5 2.32-4.5 3.5 0 1.2 1.74 3.5 4.5 3.5s4.5-2.32 4.5-3.5c0-1.2-1.74-3.5-4.5-3.5Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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
  ville.embed.fluent.CalendarEye.$$dbClassInfo = $$dbClassInfo;
})();
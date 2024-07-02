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
  qx.Class.define("ville.embed.fluent.FolderOpenVertical", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.5 3H7.9l2.6 1.5A3 3 0 0 1 12 7.1V15h.5c.83 0 1.5-.67 1.5-1.5v-4a.5.5 0 0 1 .15-.35l1.7-1.71a.5.5 0 0 0 .15-.35V4.5c0-.83-.67-1.5-1.5-1.5ZM4.02 4.28 4 4.5v9.4a2 2 0 0 0 1 1.73l3.75 2.17A1.5 1.5 0 0 0 11 16.5V7.1a2 2 0 0 0-1-1.73L6.25 3.2a1.5 1.5 0 0 0-2.23 1.08ZM5.54 2h8.96A2.5 2.5 0 0 1 17 4.5v2.59c0 .4-.16.77-.44 1.06L15 9.7v3.79a2.5 2.5 0 0 1-2.5 2.5H12v.5a2.5 2.5 0 0 1-3.75 2.16L4.5 16.5A3 3 0 0 1 3 13.9V4.5a2.54 2.54 0 0 1 .6-1.62A2.5 2.5 0 0 1 5.54 2Z",
      FILLED: "M17 4.5A2.5 2.5 0 0 0 14.5 2H7.53l2.72 1.57A3.5 3.5 0 0 1 12 6.6V16h.5a2.5 2.5 0 0 0 2.5-2.5V9.7l1.56-1.55c.28-.28.44-.67.44-1.06V4.5Zm-7.25-.07A2.5 2.5 0 0 1 11 6.6V17a2 2 0 0 1-3 1.73l-3.75-2.16A2.5 2.5 0 0 1 3 14.4V4a2 2 0 0 1 3-1.73l3.75 2.16Z"
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
  ville.embed.fluent.FolderOpenVertical.$$dbClassInfo = $$dbClassInfo;
})();

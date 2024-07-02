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
  qx.Class.define("ville.embed.fluent.MailUnread", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M18 5.95a2.5 2.5 0 1 0-1-4.9 2.5 2.5 0 0 0 1 4.9ZM4.5 3h9.54a3.54 3.54 0 0 0 0 1H4.5C3.67 4 3 4.67 3 5.5v.3l7 4.12 5.75-3.39c.38.22.8.37 1.25.43l-6.75 3.97a.5.5 0 0 1-.42.04l-.08-.04L3 6.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V6.96a3.53 3.53 0 0 0 1 0v6.54a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-8A2.5 2.5 0 0 1 4.5 3Z",
      FILLED: "M17.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-13-3h9.54a3.5 3.5 0 0 0 1.72 3.53L10 9.92l-7.98-4.7A2.5 2.5 0 0 1 4.5 3Zm5.75 7.93L17 6.96a3.53 3.53 0 0 0 1 0v6.54a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V6.37l7.75 4.56c.15.1.35.1.5 0Z"
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
  ville.embed.fluent.MailUnread.$$dbClassInfo = $$dbClassInfo;
})();
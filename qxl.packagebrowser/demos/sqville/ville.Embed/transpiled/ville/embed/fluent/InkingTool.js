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
  qx.Class.define("ville.embed.fluent.InkingTool", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3.5 2.5a.5.5 0 0 0-1 0v3C2.5 6.33 3.17 7 4 7h.2l3.58 7.17c.16.33.43.57.75.71-.05.66-.03 1.31.1 1.83.1.33.23.64.45.88.23.25.54.41.92.41s.7-.16.93-.41c.22-.24.35-.55.43-.88.14-.52.17-1.17.11-1.83.32-.14.6-.39.75-.7L15.81 7H16c.83 0 1.5-.67 1.5-1.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-3ZM5.3 7h9.4l-3.37 6.72a.5.5 0 0 1-.45.28H9.12a.5.5 0 0 1-.45-.28L5.31 7Zm4.22 8h.96c.04.58.01 1.09-.08 1.46-.06.23-.14.38-.21.45A.23.23 0 0 1 10 17a.23.23 0 0 1-.18-.09 1.09 1.09 0 0 1-.21-.45c-.1-.37-.13-.88-.09-1.46Z",
      FILLED: "M8.52 15a6.2 6.2 0 0 0-.02.5c0 .58.07 1.16.27 1.62.21.47.6.88 1.23.88s1.02-.41 1.23-.88c.2-.46.27-1.04.27-1.62 0-.17 0-.34-.02-.5H8.52ZM2.5 5.5v-3c0-.28.22-.5.5-.5h14c.28 0 .5.22.5.5v3c0 .83-.67 1.5-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5ZM4.75 8l2.72 5.45a1 1 0 0 0 .9.55h3.26a1 1 0 0 0 .9-.55L15.25 8H4.75Z"
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
  ville.embed.fluent.InkingTool.$$dbClassInfo = $$dbClassInfo;
})();

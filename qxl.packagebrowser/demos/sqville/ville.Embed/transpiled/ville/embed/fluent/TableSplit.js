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
  qx.Class.define("ville.embed.fluent.TableSplit", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.5 2c.28 0 .5.22.5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5c0-.28.22-.5.5-.5Zm0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5c0 .28.22.5.5.5Zm-14-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z",
      FILLED: "M8 6h4V2H8v4ZM7 2H3.5a.5.5 0 0 0-.5.5V4c0 1.1.9 2 2 2h2V2Zm6 4h2a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5H13v4Zm4 11.5a.5.5 0 0 1-.5.5H13v-4h2a2 2 0 0 1 2 2v1.5ZM12 14v4H8v-4h4Zm-8.5 4H7v-4H5a2 2 0 0 0-2 2v1.5c0 .28.22.5.5.5Zm-1-8.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.TableSplit.$$dbClassInfo = $$dbClassInfo;
})();

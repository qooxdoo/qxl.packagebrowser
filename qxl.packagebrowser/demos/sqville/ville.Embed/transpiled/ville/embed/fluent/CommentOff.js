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
  qx.Class.define("ville.embed.fluent.CommentOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.85 2.15a.5.5 0 1 0-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 0 0 .71-.7l-2.3-2.31L3.82 3.12l-.97-.97Zm10.29 11.7h-2.66L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57c0-.5.24-.95.62-1.24l9.52 9.51ZM17 12.27c0 .69-.46 1.28-1.11 1.49l.76.76A2.56 2.56 0 0 0 18 12.28V5.57A2.58 2.58 0 0 0 15.4 3H5.12l1 1h9.28c.9 0 1.6.71 1.6 1.57v6.7Z",
      FILLED: "M2.85 2.15a.5.5 0 1 0-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 0 0 .71-.7l-2.3-2.31L3.82 3.12l-.97-.97ZM18 12.28c0 .97-.55 1.81-1.35 2.25L5.12 3H15.4C16.84 3 18 4.15 18 5.57v6.7Z"
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
  ville.embed.fluent.CommentOff.$$dbClassInfo = $$dbClassInfo;
})();
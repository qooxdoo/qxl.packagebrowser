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
  qx.Class.define("ville.embed.fluent.ClipboardMonth", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z",
      FILLED: "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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
  ville.embed.fluent.ClipboardMonth.$$dbClassInfo = $$dbClassInfo;
})();

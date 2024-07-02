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
  qx.Class.define("ville.embed.fluent.TextColumnThree", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12 5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm-10 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Z",
      FILLED: "M12 5.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0A.75.75 0 0 0 6.25 5h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0A.75.75 0 0 0 6.25 8h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 3a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm5 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Zm-10 0a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75Z"
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
  ville.embed.fluent.TextColumnThree.$$dbClassInfo = $$dbClassInfo;
})();
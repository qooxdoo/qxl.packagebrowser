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
  qx.Class.define("ville.embed.fluent.BorderBottomDouble", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4.05 5.54a2 2 0 0 1 1.55-1.5.5.5 0 0 0 .4-.59.5.5 0 0 0-.66-.38 3 3 0 0 0-2.29 2.34.5.5 0 0 0 .4.6.5.5 0 0 0 .6-.47ZM14.6 3.05a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm0 5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm.5-2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z",
      FILLED: "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm-2.55.85a1.5 1.5 0 0 0-.88.94.75.75 0 0 1-1.38-.58 3 3 0 0 1 1.77-1.77.75.75 0 1 1 .5 1.41Zm9.95.85a1.5 1.5 0 0 0-.94-.88.75.75 0 0 1 .58-1.38 3 3 0 0 1 1.78 1.77h-.01a.75.75 0 1 1-1.41.49ZM3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm11.75-.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-12.5 6c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 13a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"
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
  ville.embed.fluent.BorderBottomDouble.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.BorderNone", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-2.46.55a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6Zm0 11.9a2 2 0 0 1-1.5-1.55.5.5 0 0 0-.59-.4.5.5 0 0 0-.38.66 3 3 0 0 0 2.34 2.29.5.5 0 0 0 .6-.4.5.5 0 0 0-.47-.6Zm9.05-12.9a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4Zm-.13 12.9a2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .38.66 3 3 0 0 1-2.34 2.29.5.5 0 0 1-.6-.4.5.5 0 0 1 .47-.6ZM16 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3ZM3.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
      FILLED: "M8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Zm0 12.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM5.45 4.6a1.5 1.5 0 0 0-.88.94.75.75 0 0 1-1.38-.58 3 3 0 0 1 1.77-1.77.75.75 0 1 1 .5 1.41Zm9.95.85a1.5 1.5 0 0 0-.94-.88.75.75 0 0 1 .58-1.38 3 3 0 0 1 1.78 1.77h-.01a.75.75 0 1 1-1.41.49ZM3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75Zm11.75-.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .5-1.41Zm9.95-.85a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.78-1.77h-.01a.75.75 0 1 0-1.41-.49Z"
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
  ville.embed.fluent.BorderNone.$$dbClassInfo = $$dbClassInfo;
})();
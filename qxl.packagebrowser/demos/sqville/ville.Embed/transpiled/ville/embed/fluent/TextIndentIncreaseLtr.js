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
  qx.Class.define("ville.embed.fluent.TextIndentIncreaseLtr", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM2.85 7.73a.5.5 0 1 0-.7.7L3.2 9.5l-1.06 1.06a.5.5 0 1 0 .7.7l1.42-1.4a.5.5 0 0 0 0-.71L2.85 7.73Z",
      FILLED: "M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75ZM6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Zm0 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM3.03 7.72a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5Z"
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
  ville.embed.fluent.TextIndentIncreaseLtr.$$dbClassInfo = $$dbClassInfo;
})();

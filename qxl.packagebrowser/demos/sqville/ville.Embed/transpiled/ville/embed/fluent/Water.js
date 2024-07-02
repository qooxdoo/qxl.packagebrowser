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
  qx.Class.define("ville.embed.fluent.Water", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15 4c.2 0 .4.13.47.32C15.9 5.5 16.74 6 17.5 6a.5.5 0 0 1 0 1c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 12.5 7c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 7.5 7C6.54 7 5.62 6.5 5 5.59A3.03 3.03 0 0 1 2.5 7a.5.5 0 1 1 0-1c.76 0 1.6-.5 2.03-1.67a.5.5 0 0 1 .94 0C5.9 5.5 6.74 6 7.5 6c.76 0 1.6-.5 2.03-1.68a.5.5 0 0 1 .94 0C10.9 5.5 11.74 6 12.5 6c.76 0 1.6-.5 2.03-1.68A.5.5 0 0 1 15 4Zm0 5c.2 0 .4.13.47.32C15.9 10.5 16.74 11 17.5 11a.5.5 0 0 1 0 1c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 12.5 12c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 7.5 12c-.96 0-1.88-.5-2.5-1.41A3.03 3.03 0 0 1 2.5 12a.5.5 0 0 1 0-1c.76 0 1.6-.5 2.03-1.67a.5.5 0 0 1 .94 0C5.9 10.5 6.74 11 7.5 11c.76 0 1.6-.5 2.03-1.68a.5.5 0 0 1 .94 0C10.9 10.5 11.74 11 12.5 11c.76 0 1.6-.5 2.03-1.68A.5.5 0 0 1 15 9Zm.47 5.32a.5.5 0 0 0-.94 0C14.1 15.5 13.26 16 12.5 16c-.76 0-1.6-.5-2.03-1.68a.5.5 0 0 0-.94 0C9.1 15.5 8.26 16 7.5 16c-.76 0-1.6-.5-2.03-1.68a.5.5 0 0 0-.94 0C4.1 15.5 3.26 16 2.5 16a.5.5 0 1 0 0 1c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 7.5 17c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 12.5 17c.96 0 1.88-.5 2.5-1.41A3.03 3.03 0 0 0 17.5 17a.5.5 0 0 0 0-1c-.76 0-1.6-.5-2.03-1.68Z",
      FILLED: "M15 3.5c.31 0 .6.2.7.49.43 1.13 1.2 1.51 1.55 1.51a.75.75 0 0 1 0 1.5A3 3 0 0 1 15 5.76 3.22 3.22 0 0 1 12.5 7c-.95 0-1.85-.44-2.5-1.25A3.22 3.22 0 0 1 7.5 7C6.55 7 5.66 6.56 5 5.76A3 3 0 0 1 2.75 7a.75.75 0 1 1 0-1.5c.34 0 1.12-.37 1.55-1.51a.75.75 0 0 1 1.4 0C6.11 5.08 6.87 5.5 7.5 5.5c.63 0 1.39-.42 1.8-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51.1-.3.39-.49.7-.49Zm0 5c.31 0 .6.2.7.49.43 1.13 1.2 1.51 1.55 1.51a.75.75 0 0 1 0 1.5A3 3 0 0 1 15 10.76 3.22 3.22 0 0 1 12.5 12c-.95 0-1.85-.44-2.5-1.25A3.22 3.22 0 0 1 7.5 12c-.95 0-1.84-.44-2.5-1.24A3 3 0 0 1 2.75 12a.75.75 0 0 1 0-1.5c.34 0 1.12-.37 1.55-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51a.75.75 0 0 1 1.4 0c.41 1.09 1.17 1.51 1.8 1.51.63 0 1.39-.42 1.8-1.51.1-.3.39-.49.7-.49Zm.7 5.49a.75.75 0 0 0-1.4 0c-.41 1.09-1.17 1.51-1.8 1.51-.63 0-1.39-.42-1.8-1.51a.75.75 0 0 0-1.4 0c-.41 1.09-1.17 1.51-1.8 1.51-.63 0-1.39-.42-1.8-1.51a.75.75 0 0 0-1.4 0c-.43 1.14-1.2 1.51-1.55 1.51a.75.75 0 1 0 0 1.5A3 3 0 0 0 5 15.76c.66.8 1.55 1.24 2.5 1.24s1.85-.44 2.5-1.25c.65.8 1.55 1.25 2.5 1.25s1.84-.44 2.5-1.24A3 3 0 0 0 17.25 17a.75.75 0 0 0 0-1.5c-.34 0-1.12-.38-1.55-1.51Z"
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
  ville.embed.fluent.Water.$$dbClassInfo = $$dbClassInfo;
})();

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
  qx.Class.define("ville.embed.fluent.PersonCall", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.36 0 .71-.01 1.06-.04a2.2 2.2 0 0 1 0-1c-.34.02-.7.04-1.06.04a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h9.52c0-.26.03-.52.13-.77l.08-.23H5.01Zm10.58.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z",
      FILLED: "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.36 0 .71-.01 1.06-.04a2.2 2.2 0 0 1 .51-1.98l.55-.6c.5-.57 1.28-.8 2-.63l.8.18c.37-.31.6-.68.7-1.12l-.51-.5a1.94 1.94 0 0 1-.46-2.08l.08-.23H5.01Zm10.58.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"
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
  ville.embed.fluent.PersonCall.$$dbClassInfo = $$dbClassInfo;
})();

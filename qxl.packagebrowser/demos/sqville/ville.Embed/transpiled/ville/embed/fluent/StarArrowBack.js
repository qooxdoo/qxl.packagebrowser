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
  qx.Class.define("ville.embed.fluent.StarArrowBack", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.1 2.9a1 1 0 0 1 1.8 0l1.93 3.91 4.31.63a1 1 0 0 1 .56 1.7l-.55.54a5.47 5.47 0 0 0-1-.43l.85-.82-4.32-.63a1 1 0 0 1-.75-.55L10 3.35l-1.93 3.9a1 1 0 0 1-.75.55L3 8.43l3.12 3.04a1 1 0 0 1 .3.89l-.75 4.3 3.34-1.76c.03.36.09.7.18 1.04l-3.05 1.6a1 1 0 0 1-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.9ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
      FILLED: "M9.1 2.9a1 1 0 0 1 1.8 0l1.93 3.91 4.31.63a1 1 0 0 1 .56 1.7l-.55.54a5.5 5.5 0 0 0-7.96 6.26l-3.05 1.6a1 1 0 0 1-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.9ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z"
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
  ville.embed.fluent.StarArrowBack.$$dbClassInfo = $$dbClassInfo;
})();
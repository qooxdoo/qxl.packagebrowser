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
  qx.Class.define("ville.embed.fluent.EditArrowBack", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l7.99-8 2.8 2.8L13.78 9c.41.02.82.09 1.21.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-.67.66-2.8-2.79.68-.67ZM13.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 16 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z",
      FILLED: "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0 1 15 9.2l.75-.74-4.2-4.21ZM13.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 16 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z"
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
  ville.embed.fluent.EditArrowBack.$$dbClassInfo = $$dbClassInfo;
})();
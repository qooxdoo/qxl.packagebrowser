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
  qx.Class.define("ville.embed.fluent.ErrorCircleSettings", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M18 10a8 8 0 1 0-7.41 7.98 5.46 5.46 0 0 1-.38-.98H10a7 7 0 1 1 7-6.8c.34.1.67.23.98.39L18 10Zm-7.34 2.89a.75.75 0 1 0-.44 1.08c.1-.38.25-.74.44-1.08Zm-.17-6.48a.5.5 0 0 0-.99.09v4.59a.5.5 0 0 0 1-.09V6.41Zm1.15 8.51a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
      FILLED: "M18 10a8 8 0 1 0-7.41 7.98 5.48 5.48 0 0 1-.37-4.01.75.75 0 1 1 .44-1.08 5.5 5.5 0 0 1 7.32-2.3L18 10ZM9.5 6.41a.5.5 0 0 1 1 0v4.68a.5.5 0 0 1-1 0V6.41Zm2.14 8.51a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
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
  ville.embed.fluent.ErrorCircleSettings.$$dbClassInfo = $$dbClassInfo;
})();
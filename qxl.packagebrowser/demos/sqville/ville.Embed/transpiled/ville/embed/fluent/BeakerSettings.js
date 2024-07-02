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
  qx.Class.define("ville.embed.fluent.BeakerSettings", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52-.33.09-.65.2-.95.35a4.5 4.5 0 0 1-.09-.87V4H8v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12H9.6c-.16.32-.3.65-.4 1H6.29l-1.22 2.26a.5.5 0 0 0 .44.74h3.7c.1.35.24.68.4 1H5.5a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8Zm-1.93 8.44a2 2 0 0 1-1.44 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
      FILLED: "M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52A5.51 5.51 0 0 0 9.6 12H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm3.5 11c0-.52.07-1.02.2-1.5H5.16l-.97 1.79A1.5 1.5 0 0 0 5.5 17h4.1c-.38-.75-.6-1.6-.6-2.5Zm3.07-3.06a2 2 0 0 1-1.44 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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
  ville.embed.fluent.BeakerSettings.$$dbClassInfo = $$dbClassInfo;
})();
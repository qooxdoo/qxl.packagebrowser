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
  qx.Class.define("ville.embed.fluent.EyeTrackingOff", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.41 3.12C2.15 3.52 2 4 2 4.5v3a.5.5 0 0 0 1 0v-3c0-.23.05-.45.15-.65L6.29 7a6.6 6.6 0 0 0-2.23 2.27v.01l.44.23-.45-.22a.5.5 0 0 0 .9.44v-.01a2.39 2.39 0 0 1 .25-.39 5.49 5.49 0 0 1 1.82-1.6l1.3 1.3a3 3 0 1 0 4.16 4.17l3.67 3.66c-.2.1-.42.15-.65.15h-3a.5.5 0 0 0 0 1h3c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-.26-.27-.74-.73-3.93-3.94-3.63-3.63L8.01 7.3l-.78-.78-3.38-3.37-.73-.74-.27-.26a.5.5 0 1 0-.7.7l.26.27Zm9.34 9.34a2 2 0 1 1-2.71-2.71l2.71 2.71Zm6.23 3.4.02-.36v-3a.5.5 0 0 0-1 0v2.38l.98.97ZM9.17 7.04A7 7 0 0 1 10 7a5.86 5.86 0 0 1 4.8 2.32 4.13 4.13 0 0 1 .24.39l.01.01a.5.5 0 0 0 .9-.44v-.01l-.01-.01a1.7 1.7 0 0 0-.08-.14l-.25-.38A6.85 6.85 0 0 0 10 6c-.63 0-1.2.07-1.7.18l.86.87Zm6.78 2.23-.06.03-.39.19.45-.22ZM5.12 3H7.5a.5.5 0 0 0 0-1h-3c-.12 0-.24 0-.35.02l.97.98ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-3a.5.5 0 0 0-1 0v3A2.5 2.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3Zm11-14c.83 0 1.5.67 1.5 1.5v3a.5.5 0 0 0 1 0v-3A2.5 2.5 0 0 0 15.5 2h-3a.5.5 0 0 0 0 1h3Z",
      FILLED: "M2.41 3.12C2.15 3.52 2 4 2 4.5v3a.5.5 0 0 0 1 0v-3c0-.23.05-.45.15-.65L6.29 7a6.6 6.6 0 0 0-2.23 2.27v.01l.44.23-.45-.22a.5.5 0 0 0 .9.44v-.01a2.39 2.39 0 0 1 .25-.39 5.49 5.49 0 0 1 1.82-1.6l1.3 1.3a3 3 0 1 0 4.16 4.17l3.67 3.66c-.2.1-.42.15-.65.15h-3a.5.5 0 0 0 0 1h3c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-.26-.27-.74-.73-3.93-3.94-3.63-3.63L8.01 7.3l-.78-.78-3.38-3.37-.73-.74-.27-.26a.5.5 0 1 0-.7.7l.26.27Zm15.57 12.73.02-.35v-3a.5.5 0 0 0-1 0v2.38l.98.97Zm-8.81-8.8A7 7 0 0 1 10 7a5.86 5.86 0 0 1 4.8 2.32 4.13 4.13 0 0 1 .24.39l.01.01a.5.5 0 0 0 .9-.44v-.01l-.01-.01a1.7 1.7 0 0 0-.08-.14l-.25-.38A6.85 6.85 0 0 0 10 6c-.63 0-1.2.07-1.7.18l.86.87Zm6.78 2.23-.06.03-.39.19.45-.22ZM5.12 3H7.5a.5.5 0 0 0 0-1h-3c-.12 0-.24 0-.35.02l.97.98ZM3 15.5c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 2 15.5v-3a.5.5 0 0 1 1 0v3Zm14-11c0-.83-.67-1.5-1.5-1.5h-3a.5.5 0 0 1 0-1h3A2.5 2.5 0 0 1 18 4.5v3a.5.5 0 0 1-1 0v-3Z"
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
  ville.embed.fluent.EyeTrackingOff.$$dbClassInfo = $$dbClassInfo;
})();
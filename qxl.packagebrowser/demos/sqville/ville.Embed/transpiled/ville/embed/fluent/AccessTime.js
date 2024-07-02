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
  qx.Class.define("ville.embed.fluent.AccessTime", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
      FILLED: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"
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
  ville.embed.fluent.AccessTime.$$dbClassInfo = $$dbClassInfo;
})();
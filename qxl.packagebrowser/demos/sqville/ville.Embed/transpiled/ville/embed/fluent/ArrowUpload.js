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
  qx.Class.define("ville.embed.fluent.ArrowUpload", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15 3a.5.5 0 0 0 .09-.99H4a.5.5 0 0 0-.09.98L4 3h11ZM9.5 18a.5.5 0 0 0 .5-.41V5.7l3.64 3.65c.17.18.44.2.64.06l.07-.06a.5.5 0 0 0 .06-.63l-.06-.07-4.5-4.5A.5.5 0 0 0 9.6 4h-.1a.5.5 0 0 0-.4.19L4.64 8.65a.5.5 0 0 0 .64.76l.07-.06L9 5.71V17.5c0 .28.22.5.5.5Z",
      FILLED: "M4.5 2a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 2H4.5Zm6 15.35a.75.75 0 0 1-1.5-.1V7.05l-2.97 2.98-.08.07a.75.75 0 0 1-.98-1.14l4.29-4.28a.73.73 0 0 1 .26-.15l.08-.02.15-.02h.06l.07.01.12.03.09.04.04.02.09.06.07.06 4.24 4.26.07.08c.22.3.2.71-.07.98l-.08.07c-.3.22-.72.2-.98-.07L10.5 7.05V17.35Z"
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
  ville.embed.fluent.ArrowUpload.$$dbClassInfo = $$dbClassInfo;
})();
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
  qx.Class.define("ville.embed.fluent.CommentMention", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M15 2a3 3 0 1 0 1.28 5.71.5.5 0 0 1 .44.9A4 4 0 1 1 19 5v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 5a2 2 0 0 1 3.04-1.7.5.5 0 0 1 .96.2v2a.5.5 0 1 0 1 0V5a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4 7.28V9a5 5 0 0 1-1 .58v2.7c0 .85-.7 1.56-1.6 1.56h-4.92L6.21 17H6.2v-3.16H4.6c-.9 0-1.6-.71-1.6-1.56V5.57C3 4.7 3.7 4 4.6 4h5.5c.07-.35.18-.68.32-1H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 0 0 1.4.2l4.01-2.97h4.59c1.44 0 2.6-1.15 2.6-2.56Z",
      FILLED: "M15 2a3 3 0 1 0 1.28 5.71.5.5 0 0 1 .44.9A4 4 0 1 1 19 5v.51a1.5 1.5 0 0 1-2.65.97A2 2 0 0 1 13 5a2 2 0 0 1 3.04-1.7.5.5 0 0 1 .96.2v2a.5.5 0 1 0 1 0V5a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 5c1.13 0 2.16-.37 3-1v3.28a2.58 2.58 0 0 1-2.6 2.56h-4.59L6.8 17.8a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.59v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h5.82A4.98 4.98 0 0 0 15 10Z"
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
  ville.embed.fluent.CommentMention.$$dbClassInfo = $$dbClassInfo;
})();
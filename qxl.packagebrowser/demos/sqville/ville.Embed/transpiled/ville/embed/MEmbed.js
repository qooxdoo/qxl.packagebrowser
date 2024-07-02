(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     SQville
     Authors:
       * Chris Eskew (sqville) sqville@gmail.com
  ************************************************************************ */

  qx.Mixin.define("ville.embed.MEmbed", {
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** Control the text alignment */
      iconProps: {
        check: "Map",
        nullable: true,
        themeable: true,
        apply: "_applyIconProps"
      },
      /** Control the text alignment */
      embed: {
        check: "Object",
        nullable: true,
        themeable: true,
        apply: "_applyEmbed"
      },
      embedProps: {
        check: "Map",
        nullable: true,
        themeable: true,
        apply: "_applyEmbedProps"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      // property apply
      _applyIconProps: function _applyIconProps(value, old) {
        this.getChildControl("icon").set(value);
      },
      // property apply
      _applyEmbedProps: function _applyEmbedProps(value, old) {
        this.getEmbed().set(value);
      },
      // property apply
      _applyEmbed: function _applyEmbed(value, old) {
        value.setAnonymous(true);
        this._addAt(value, 0);
        if (this.getIcon() != null) {
          value.exclude();
        }
      }
    }
  });
  ville.embed.MEmbed.$$dbClassInfo = $$dbClassInfo;
})();

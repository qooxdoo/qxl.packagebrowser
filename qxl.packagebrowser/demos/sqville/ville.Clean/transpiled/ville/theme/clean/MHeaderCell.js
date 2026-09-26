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

  qx.Mixin.define("ville.theme.clean.MHeaderCell", {
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** Control the text alignment */
      sortIconProps: {
        check: "Map",
        nullable: true,
        themeable: true,
        apply: "_applySortIconProps"
      },
      sortIconDec: {
        nullable: true,
        init: null,
        apply: "_applySortIconDec",
        event: "changeSortIconDec",
        check: "Decorator",
        themeable: true
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      // property apply
      _applySortIconProps: function _applySortIconProps(value, old) {
        this.getChildControl("sort-icon").set(value);
      },
      // property apply
      _applySortIconDec: function _applySortIconDec(value, old) {
        var icon = this.getChildControl("sort-icon", true);
        if (icon) {
          icon.setDecorator(value);
        }
      }
    }
  });
  ville.theme.clean.MHeaderCell.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.RadioButton": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.IRadioItem": {
        "require": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qx.ui.core.Spacer": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     http://sqville.com
  
     Copyright:
       
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * 
  
  ************************************************************************ */

  /**
   *
   */
  qx.Class.define("wax.demo.MenuButton", {
    extend: qx.ui.form.RadioButton,
    implement: qx.ui.form.IRadioItem,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    construct: function construct(label, icon, scale, indicator) {
      qx.ui.form.RadioButton.constructor.call(this, label);
      if (icon !== undefined) {
        this.setIcon(icon);
        if (scale !== undefined) {
          this.getChildControl("icon").set({
            scale: scale
          });
        }
      }
      if (indicator !== undefined) {
        var control = new qx.ui.basic.Label(indicator).set({
          alignX: "right",
          appearance: "mainmenuindicator"
        });
        this._add(new qx.ui.core.Spacer(30, 1));
        this._add(control);
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      // overridden
      appearance: {
        refine: true,
        init: "mainmenubutton"
      },
      // overridden
      allowGrowX: {
        refine: true,
        init: true
      }
    }
  });
  wax.demo.MenuButton.$$dbClassInfo = $$dbClassInfo;
})();

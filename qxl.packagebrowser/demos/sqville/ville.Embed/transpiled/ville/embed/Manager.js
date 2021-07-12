(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.lang.Object": {
        "construct": true
      },
      "ville.embed.package.IconIcss": {
        "require": true
      },
      "ville.embed.package.FluentUISvg": {
        "require": true
      },
      "ville.embed.package.MaterialSvg": {
        "require": true
      },
      "qx.ui.style.Stylesheet": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2013 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /**
   * Global class which handles the single stylesheet used for qx.desktop.
   * 
   * 
   * 
   */
  qx.Class.define("ville.embed.Manager", {
    type: "singleton",
    extend: qx.core.Object,
    construct: function construct() {
      qx.core.Object.constructor.call(this); //load the manager if it is not loaded

      if (!this.isLoaded) {
        for (var i = 0, l = ville.embed.Manager.PACKAGES.length; i < l; i++) {
          var clazz = ville.embed.Manager.PACKAGES[i];

          if (clazz) {
            if (clazz.EMBEDS) {
              qx.lang.Object.mergeWith(this.embeds, clazz.EMBEDS);
            }

            if (clazz.TEMPLATES) {
              qx.lang.Object.mergeWith(this.templates, clazz.TEMPLATES);
            }

            if (clazz.CONTENT) {
              qx.lang.Object.mergeWith(this.content, clazz.CONTENT);
            }

            if (clazz.CSS) {
              qx.lang.Object.mergeWith(this.css, clazz.CSS);
            }

            if (clazz.ANIMATIONS) {
              qx.lang.Object.mergeWith(this.animations, clazz.ANIMATIONS);
            }
            /*if (clazz.EXTERNALRESOURCES) {
              qx.lang.Object.mergeWith(this.externalresources, clazz.EXTERNALRESOURCES);
            }*/


            this.isLoaded = true;
          } else {
            //throw error
            console.log("error");
          }
        }

        this.loadRules();
      }
    },
    statics: {
      /**
       * Default timeout in ms for the error handling of the closure loading.
       */
      PACKAGES: [ville.embed["package"].IconIcss, ville.embed["package"].FluentUISvg, ville.embed["package"].MaterialSvg]
    },
    members: {
      embeds: {},
      templates: {},
      content: {},
      css: {},
      animations: {},
      //externalresources : {},
      isLoaded: false,

      /**
       * Adds a rule to the global stylesheet.
       */
      loadRules: function loadRules() {
        var sheet = qx.ui.style.Stylesheet.getInstance();

        for (var selector in this.css) {
          sheet.addRule(selector, this.css[selector]);
        }
      }
      /**
       * Adds a rule to the global stylesheet.
       
      loadExternalResources : function() {
        for(var reslist in this.externalresources) {
          if (reslist.css){
            qx.bom.Stylesheet.includeFile();
          }
        }
      }*/

    }
  });
  ville.embed.Manager.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Manager.js.map?dt=1626060344754
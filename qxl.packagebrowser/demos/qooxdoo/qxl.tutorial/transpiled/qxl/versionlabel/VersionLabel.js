(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.basic.Label": {
        "construct": true,
        "require": true
      }
    },
    "environment": {
      "provided": ["qxl.versionlabel.name", "qxl.versionlabel.version"],
      "required": {
        "qxl.versionlabel.name": {
          "construct": true,
          "className": "qxl.versionlabel.VersionLabel"
        },
        "qxl.versionlabel.version": {
          "construct": true,
          "className": "qxl.versionlabel.VersionLabel"
        },
        "qx.revision": {
          "construct": true
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Thomas Herchenroeder (thron7)
  
  ************************************************************************ */

  /**
   * Slightly extended form of a @{qx.ui.basic.Label}, to include a version/
   * revision string of qooxdoo.
   */
  qx.Class.define("qxl.versionlabel.VersionLabel", {
    extend: qx.ui.basic.Label,
    construct: function construct(value, version) {
      if (!value) {
        // if no parameter value given: use the environment variable
        value = qx.core.Environment.get("qxl.versionlabel.name");
      }
      if (!version) {
        // if no parameter value given: use the environment variable
        version = qx.core.Environment.get("qxl.versionlabel.version");
        if (!version) {
          // revision or version number as fallback
          version = qx.core.Environment.get("qx.revision");
          if (version == "") {
            version = null;
          }
        }
      }
      qx.ui.basic.Label.constructor.call(this, value + " " + version);
    },
    defer: function defer() {
      /**
       * The name of the version label which is shown in the upper right corner.
       * Defaults to 'qooxdoo'.
       */
      qx.core.Environment.add("qxl.versionlabel.name", "qooxdoo");

      /**
       * The version string of the version label which is shown in the upper right corner.
       * Defaults to 'null' to be able to fallback to 'qx.revision' or 'qx.version' easily.
       */
      qx.core.Environment.add("qxl.versionlabel.version", null);
    }
  });
  qxl.versionlabel.VersionLabel.$$dbClassInfo = $$dbClassInfo;
})();
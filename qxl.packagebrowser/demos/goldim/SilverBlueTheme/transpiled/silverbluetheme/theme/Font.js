(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.OperatingSystem": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "os.name": {
          "load": true,
          "className": "qx.bom.client.OperatingSystem"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2010-2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("silverbluetheme.theme.Font", {
    fonts: {
      "default": {
        size: 13,
        lineHeight: 1.4,
        family: qx.core.Environment.get("os.name") === "osx" ? ["Lucida Grande"] : ["Segoe UI", "MS Sans Serif", "Arial", "sans-serif"]
      },
      "bold": {
        size: 13,
        lineHeight: 1.4,
        family: qx.core.Environment.get("os.name") === "osx" ? ["Lucida Grande"] : ["Segoe UI", "MS Sans Serif", "Arial", "sans-serif"],
        bold: true
      },
      "small": {
        size: 11,
        lineHeight: 1.4,
        family: qx.core.Environment.get("os.name") === "osx" ? ["Lucida Grande"] : ["Segoe UI", "MS Sans Serif", "Arial", "sans-serif"]
      },
      "monospace": {
        size: 12,
        lineHeight: 1.4,
        family: qx.core.Environment.get("os.name") === "osx" ? ["Lucida Console", "Monaco"] : ["Consolas", "DejaVu Sans Mono", "Courier New", "monospace"]
      },
      "headline": {
        size: 14,
        lineHeight: 1.4,
        family: qx.core.Environment.get("os.name") === "osx" ? ["Lucida Grande"] : ["MS Sans Serif", "Arial", "sans-serif"],
        bold: true
      }
    }
  });
  silverbluetheme.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();

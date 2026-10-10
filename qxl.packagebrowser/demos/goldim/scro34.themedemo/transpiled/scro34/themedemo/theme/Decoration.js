(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2024 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("scro34.themedemo.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {
      "slider-knob": {
        include: "button-checked",
        style: {
          radius: 15
        }
      },
      "slider-knob-hovered": {
        include: "slider-knob",
        style: {
          endColor: "text-selected"
        }
      },
      input: {
        style: {
          color: "border-input",
          width: 1,
          radius: 2,
          startColor: "input-start",
          endColor: "input-end",
          startColorPosition: 0,
          endColorPosition: 2,
          colorPositionUnit: "px",
          shadowLength: 0,
          shadowBlurRadius: 3,
          shadowColor: "shadow-input"
        }
      },
      "radiobutton-checked-hovered": {
        include: "radiobutton",
        style: {
          endColor: "text-hovered"
        }
      }
    }
  });
  scro34.themedemo.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.fluent.Common": {
        "require": true
      },
      "ville.global.color": {
        "require": true
      },
      "ville.global.color.Grey": {
        "require": true
      },
      "ville.global.color.WhiteAlpha": {
        "require": true
      },
      "ville.global.color.BlackAlpha": {
        "require": true
      },
      "ville.global.color.Brand": {
        "require": true
      },
      "ville.global.color.Red": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     SQville
  
     Copyright:
       None
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (sqville@gmail.com)
  
  ************************************************************************ */

  /**
   * Light - Fluent color theme
   */
  qx.Theme.define("ville.theme.fluent.Light", {
    extend: ville.theme.fluent.Common,
    colors: {
      NeutralForeground1: ville.global.color.Grey[14],
      NeutralForeground1Hover: ville.global.color.Grey[14],
      NeutralForeground1Pressed: ville.global.color.Grey[14],
      NeutralForeground1Selected: ville.global.color.Grey[14],
      NeutralForeground2: ville.global.color.Grey[26],
      NeutralForeground2Hover: ville.global.color.Grey[14],
      NeutralForeground2Pressed: ville.global.color.Grey[14],
      NeutralForeground2Selected: ville.global.color.Grey[14],
      NeutralForeground3: ville.global.color.Grey[38],
      NeutralForeground3Hover: ville.global.color.Grey[26],
      NeutralForeground3Pressed: ville.global.color.Grey[26],
      NeutralForeground3Selected: ville.global.color.Grey[26],
      NeutralForeground4: ville.global.color.Grey[44],
      NeutralForegroundDisabled: ville.global.color.Grey[74],
      NeutralForegroundInvertedDisabled: ville.global.color.WhiteAlpha[40],
      NeutralForeground2Link: ville.global.color.Grey[26],
      NeutralForeground2LinkHover: ville.global.color.Grey[14],
      NeutralForeground2LinkPressed: ville.global.color.Grey[14],
      NeutralForeground2LinkSelected: ville.global.color.Grey[14],
      NeutralForeground1Static: ville.global.color.Grey[14],
      NeutralForegroundStaticInverted: ville.global.color.White,
      NeutralForegroundInverted: ville.global.color.White,
      NeutralForegroundInvertedHover: ville.global.color.White,
      NeutralForegroundInvertedPressed: ville.global.color.White,
      NeutralForegroundInvertedSelected: ville.global.color.White,
      NeutralForegroundInverted2: ville.global.color.White,
      NeutralForegroundOnBrand: ville.global.color.White,
      NeutralForegroundInvertedLink: ville.global.color.White,
      NeutralForegroundInvertedLinkHover: ville.global.color.White,
      NeutralForegroundInvertedLinkPressed: ville.global.color.White,
      NeutralForegroundInvertedLinkSelected: ville.global.color.White,
      NeutralBackground1: ville.global.color.White,
      NeutralBackground1Hover: ville.global.color.Grey[96],
      NeutralBackground1Pressed: ville.global.color.Grey[88],
      NeutralBackground1Selected: ville.global.color.Grey[92],
      NeutralBackground2: ville.global.color.Grey[98],
      NeutralBackground2Hover: ville.global.color.Grey[94],
      NeutralBackground2Pressed: ville.global.color.Grey[86],
      NeutralBackground2Selected: ville.global.color.Grey[90],
      NeutralBackground3: ville.global.color.Grey[96],
      NeutralBackground3Hover: ville.global.color.Grey[92],
      NeutralBackground3Pressed: ville.global.color.Grey[84],
      NeutralBackground3Selected: ville.global.color.Grey[88],
      NeutralBackground4: ville.global.color.Grey[94],
      NeutralBackground4Hover: ville.global.color.Grey[98],
      NeutralBackground4Pressed: ville.global.color.Grey[96],
      NeutralBackground4Selected: ville.global.color.White,
      NeutralBackground5: ville.global.color.Grey[92],
      NeutralBackground5Hover: ville.global.color.Grey[96],
      NeutralBackground5Pressed: ville.global.color.Grey[94],
      NeutralBackground5Selected: ville.global.color.Grey[98],
      NeutralBackground6: ville.global.color.Grey[90],
      NeutralBackgroundInverted: ville.global.color.Grey[16],
      NeutralBackgroundStatic: ville.global.color.Grey[20],
      SubtleBackground: "#00000000",
      SubtleBackgroundHover: ville.global.color.Grey[96],
      SubtleBackgroundPressed: ville.global.color.Grey[88],
      SubtleBackgroundSelected: ville.global.color.Grey[92],
      SubtleBackgroundLightAlphaHover: ville.global.color.WhiteAlpha[70],
      SubtleBackgroundLightAlphaPressed: ville.global.color.WhiteAlpha[50],
      SubtleBackgroundLightAlphaSelected: "#00000000",
      SubtleBackgroundInverted: "#00000000",
      SubtleBackgroundInvertedHover: ville.global.color.BlackAlpha[10],
      SubtleBackgroundInvertedPressed: ville.global.color.BlackAlpha[30],
      SubtleBackgroundInvertedSelected: ville.global.color.BlackAlpha[20],
      TransparentBackground: "#00000000",
      TransparentBackgroundHover: "#00000000",
      TransparentBackgroundPressed: "#00000000",
      TransparentBackgroundSelected: "#00000000",
      NeutralBackgroundDisabled: ville.global.color.Grey[94],
      NeutralBackgroundInvertedDisabled: ville.global.color.WhiteAlpha[10],
      NeutralStencil1: ville.global.color.Grey[90],
      NeutralStencil2: ville.global.color.Grey[98],
      NeutralStencil1Alpha: ville.global.color.BlackAlpha[10],
      NeutralStencil2Alpha: ville.global.color.BlackAlpha[5],
      BackgroundOverlay: ville.global.color.BlackAlpha[40],
      ScrollbarOverlay: ville.global.color.BlackAlpha[50],
      NeutralStrokeAccessible: ville.global.color.Grey[38],
      NeutralStrokeAccessibleHover: ville.global.color.Grey[34],
      NeutralStrokeAccessiblePressed: ville.global.color.Grey[30],
      NeutralStrokeAccessibleSelected: ville.global.color.Brand[80],
      NeutralStroke1: ville.global.color.Grey[82],
      NeutralStroke1Hover: ville.global.color.Grey[78],
      NeutralStroke1Pressed: ville.global.color.Grey[70],
      NeutralStroke1Selected: ville.global.color.Grey[74],
      NeutralStroke2: ville.global.color.Grey[88],
      NeutralStroke3: ville.global.color.Grey[94],
      NeutralStrokeOnBrand: ville.global.color.White,
      NeutralStrokeOnBrand2: ville.global.color.White,
      NeutralStrokeOnBrand2Hover: ville.global.color.White,
      NeutralStrokeOnBrand2Pressed: ville.global.color.White,
      NeutralStrokeOnBrand2Selected: ville.global.color.White,
      NeutralStrokeDisabled: ville.global.color.Grey[68],
      NeutralStrokeInvertedDisabled: ville.global.color.WhiteAlpha[40],
      TransparentStroke: "#00000000",
      TransparentStrokeInteractive: "#00000000",
      TransparentStrokeDisabled: "#00000000",
      StrokeFocus1: ville.global.color.White,
      StrokeFocus2: ville.global.color.Black,
      "Neutral Shadow AmbientRest": "#0000001f",
      "Neutral Shadow KeyRest": "#00000024",
      "Neutral Shadow AmbientLighterRest": "#0000000f",
      "Neutral Shadow KeyLighterRest": "#00000012",
      "Neutral Shadow AmbientDarkerRest": "#00000033",
      "Neutral Shadow KeyDarkerRest": "#0000003d",
      PaletteGreenBackground3: "#107c10",
      PaletteDarkOrangeBackground3: "#da3b01",
      PaletteRedBorder2: ville.global.color.Red.Primary,
      PaletteRedBackground3: ville.global.color.Red.Primary
    }
  });
  ville.theme.fluent.Light.$$dbClassInfo = $$dbClassInfo;
})();

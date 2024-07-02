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
      "ville.global.color.Grey14Alpha": {
        "require": true
      },
      "ville.global.color.BlackAlpha": {
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
   * Dark - Fluent color theme
   */
  qx.Theme.define("ville.theme.fluent.Dark", {
    extend: ville.theme.fluent.Common,
    colors: {
      NeutralForeground1: ville.global.color.White,
      NeutralForeground1Hover: ville.global.color.White,
      NeutralForeground1Pressed: ville.global.color.White,
      NeutralForeground1Selected: ville.global.color.White,
      NeutralForeground2: ville.global.color.Grey[84],
      NeutralForeground2Hover: ville.global.color.White,
      NeutralForeground2Pressed: ville.global.color.White,
      NeutralForeground2Selected: ville.global.color.White,
      NeutralForeground3: ville.global.color.Grey[68],
      NeutralForeground3Hover: ville.global.color.Grey[84],
      NeutralForeground3Pressed: ville.global.color.Grey[84],
      NeutralForeground3Selected: ville.global.color.Grey[84],
      NeutralForeground4: ville.global.color.Grey[60],
      NeutralForegroundDisabled: ville.global.color.Grey[36],
      NeutralForegroundInvertedDisabled: ville.global.color.WhiteAlpha[40],
      NeutralForeground2Link: ville.global.color.Grey[84],
      NeutralForeground2LinkHover: ville.global.color.White,
      NeutralForeground2LinkPressed: ville.global.color.White,
      NeutralForeground2LinkSelected: ville.global.color.White,
      NeutralForeground1Static: ville.global.color.Grey[14],
      NeutralForegroundStaticInverted: ville.global.color.White,
      NeutralForegroundInverted: ville.global.color.Grey[14],
      NeutralForegroundInvertedHover: ville.global.color.Grey[14],
      NeutralForegroundInvertedPressed: ville.global.color.Grey[14],
      NeutralForegroundInvertedSelected: ville.global.color.Grey[14],
      NeutralForegroundInverted2: ville.global.color.Grey[14],
      NeutralForegroundOnBrand: ville.global.color.White,
      NeutralForegroundInvertedLink: ville.global.color.White,
      NeutralForegroundInvertedLinkHover: ville.global.color.White,
      NeutralForegroundInvertedLinkPressed: ville.global.color.White,
      NeutralForegroundInvertedLinkSelected: ville.global.color.White,
      NeutralBackground1: ville.global.color.Grey[16],
      NeutralBackground1Hover: ville.global.color.Grey[24],
      NeutralBackground1Pressed: ville.global.color.Grey[12],
      NeutralBackground1Selected: ville.global.color.Grey[22],
      NeutralBackground2: ville.global.color.Grey[12],
      NeutralBackground2Hover: ville.global.color.Grey[20],
      NeutralBackground2Pressed: ville.global.color.Grey[8],
      NeutralBackground2Selected: ville.global.color.Grey[18],
      NeutralBackground3: ville.global.color.Grey[8],
      NeutralBackground3Hover: ville.global.color.Grey[16],
      NeutralBackground3Pressed: ville.global.color.Grey[4],
      NeutralBackground3Selected: ville.global.color.Grey[14],
      NeutralBackground4: ville.global.color.Grey[4],
      NeutralBackground4Hover: ville.global.color.Grey[12],
      NeutralBackground4Pressed: ville.global.color.Black,
      NeutralBackground4Selected: ville.global.color.Grey[10],
      NeutralBackground5: ville.global.color.Black,
      NeutralBackground5Hover: ville.global.color.Grey[8],
      NeutralBackground5Pressed: ville.global.color.Grey[2],
      NeutralBackground5Selected: ville.global.color.Grey[6],
      NeutralBackground6: ville.global.color.Grey[20],
      NeutralBackgroundInverted: ville.global.color.White,
      NeutralBackgroundStatic: ville.global.color.Grey[24],
      SubtleBackground: "#00000000",
      SubtleBackgroundHover: ville.global.color.Grey[22],
      SubtleBackgroundPressed: ville.global.color.Grey[18],
      SubtleBackgroundSelected: ville.global.color.Grey[20],
      SubtleBackgroundLightAlphaHover: ville.global.color.Grey14Alpha[80],
      SubtleBackgroundLightAlphaPressed: ville.global.color.Grey14Alpha[50],
      SubtleBackgroundLightAlphaSelected: "#00000000",
      SubtleBackgroundInverted: "#00000000",
      SubtleBackgroundInvertedHover: ville.global.color.BlackAlpha[10],
      SubtleBackgroundInvertedPressed: ville.global.color.BlackAlpha[30],
      SubtleBackgroundInvertedSelected: ville.global.color.BlackAlpha[20],
      TransparentBackground: "#00000000",
      TransparentBackgroundHover: "#00000000",
      TransparentBackgroundPressed: "#00000000",
      TransparentBackgroundSelected: "#00000000",
      NeutralBackgroundDisabled: ville.global.color.Grey[8],
      NeutralBackgroundInvertedDisabled: ville.global.color.WhiteAlpha[10],
      NeutralStencil1: ville.global.color.Grey[34],
      NeutralStencil2: ville.global.color.Grey[20],
      NeutralStencil1Alpha: ville.global.color.WhiteAlpha[10],
      NeutralStencil2Alpha: ville.global.color.WhiteAlpha[5],
      BackgroundOverlay: ville.global.color.BlackAlpha[50],
      ScrollbarOverlay: ville.global.color.WhiteAlpha[60],
      NeutralStrokeAccessible: ville.global.color.Grey[68],
      NeutralStrokeAccessibleHover: ville.global.color.Grey[74],
      NeutralStrokeAccessiblePressed: ville.global.color.Grey[70],
      NeutralStroke1: ville.global.color.Grey[40],
      NeutralStroke1Hover: ville.global.color.Grey[46],
      NeutralStroke1Pressed: ville.global.color.Grey[42],
      NeutralStroke1Selected: ville.global.color.Grey[44],
      NeutralStroke2: ville.global.color.Grey[32],
      NeutralStroke3: ville.global.color.Grey[24],
      NeutralStrokeOnBrand: ville.global.color.Grey[16],
      NeutralStrokeOnBrand2: ville.global.color.White,
      NeutralStrokeOnBrand2Hover: ville.global.color.White,
      NeutralStrokeOnBrand2Pressed: ville.global.color.White,
      NeutralStrokeOnBrand2Selected: ville.global.color.White,
      NeutralStrokeDisabled: ville.global.color.Grey[46],
      NeutralStrokeInvertedDisabled: ville.global.color.WhiteAlpha[40],
      TransparentStroke: "#00000000",
      TransparentStrokeInteractive: "#00000000",
      TransparentStrokeDisabled: "#00000000",
      StrokeFocus1: ville.global.color.Black,
      StrokeFocus2: ville.global.color.White,
      "Neutral Shadow Ambient": "#0000003d",
      "Neutral Shadow Key": "#00000047",
      "Neutral Shadow AmbientLighter": "#0000001f",
      "Neutral Shadow KeyLighter": "#00000024",
      "Neutral Shadow AmbientDarker": "#00000066",
      "Neutral Shadow KeyDarker": "#0000007a",
      PaletteGreenBackground3: "#107c10",
      PaletteDarkOrangeBackground3: "#da3b01",
      PaletteRedBorder2: ville.global.color.Red.Primary,
      PaletteRedBackground3: ville.global.color.Red.Primary
    }
  });
  ville.theme.fluent.Dark.$$dbClassInfo = $$dbClassInfo;
})();

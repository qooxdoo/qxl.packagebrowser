(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.fluent.Light": {
        "require": true
      },
      "ville.global.color": {
        "require": true
      },
      "ville.global.color.Brand": {
        "require": true
      },
      "ville.global.color.Grey": {
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
  qx.Theme.define("ville.theme.fluent.Brand1", {
    extend: ville.theme.fluent.Light,
    colors: {
      NeutralForeground2BrandHover: ville.global.color.Brand[80],
      NeutralForeground2BrandPressed: ville.global.color.Brand[70],
      NeutralForeground2BrandSelected: ville.global.color.Brand[80],
      NeutralForeground3BrandHover: ville.global.color.Brand[80],
      NeutralForeground3BrandPressed: ville.global.color.Brand[70],
      NeutralForeground3BrandSelected: ville.global.color.Brand[80],
      BrandForegroundLink: ville.global.color.Brand[70],
      BrandForegroundLinkHover: ville.global.color.Brand[60],
      BrandForegroundLinkPressed: ville.global.color.Brand[40],
      BrandForegroundLinkSelected: ville.global.color.Brand[70],
      CompoundBrandForeground1: ville.global.color.Brand[80],
      CompoundBrandForeground1Hover: ville.global.color.Brand[70],
      CompoundBrandForeground1Pressed: ville.global.color.Brand[60],
      BrandForeground1: ville.global.color.Brand[80],
      BrandForeground2: ville.global.color.Brand[70],
      BrandForegroundInverted: ville.global.color.Brand[100],
      BrandForegroundInvertedHover: ville.global.color.Brand[110],
      BrandForegroundInvertedPressed: ville.global.color.Brand[100],
      BrandForegroundOnLight: ville.global.color.Brand[80],
      BrandForegroundOnLightHover: ville.global.color.Brand[70],
      BrandForegroundOnLightPressed: ville.global.color.Brand[50],
      BrandForegroundOnLightSelected: ville.global.color.Brand[60],
      BrandBackground1: ville.global.color.Brand[80],
      BrandBackground1Hover: ville.global.color.Brand[70],
      BrandBackground1Pressed: ville.global.color.Brand[40],
      BrandBackground1Selected: ville.global.color.Brand[60],
      CompoundBrandBackground: ville.global.color.Brand[80],
      CompoundBrandBackgroundHover: ville.global.color.Brand[70],
      CompoundBrandBackgroundPressed: ville.global.color.Brand[60],
      BrandBackgroundStatic: ville.global.color.Brand[80],
      BrandBackground2: ville.global.color.Brand[160],
      BrandBackgroundInverted: ville.global.color.White,
      BrandBackgroundInvertedHover: ville.global.color.Brand[160],
      BrandBackgroundInvertedPressed: ville.global.color.Brand[140],
      BrandBackgroundInvertedSelected: ville.global.color.Brand[150],
      NeutralStrokeAccessibleSelected: ville.global.color.Brand[80],
      NeutralStrokeOnBrand: ville.global.color.White,
      NeutralStrokeOnBrand2: ville.global.color.White,
      NeutralStrokeOnBrand2Hover: ville.global.color.White,
      NeutralStrokeOnBrand2Pressed: ville.global.color.White,
      NeutralStrokeOnBrand2Selected: ville.global.color.White,
      BrandStroke1: ville.global.color.Brand[80],
      BrandStroke2: ville.global.color.Brand[140],
      CompoundBrandStroke: ville.global.color.Brand[80],
      CompoundBrandStrokeHover: ville.global.color.Brand[70],
      CompoundBrandStrokePressed: ville.global.color.Brand[60],
      "Brand Shadow AmbientRest": "#0000004d",
      "Brand Shadow KeyRest": "#00000040",
      // used in table code
      "table-header-cell": "red",
      "table-row-background-focused-selected": ville.global.color.Brand[160],
      //BrandBackground2
      "table-row-background-focused": ville.global.color.Brand[160],
      //BrandBackground2
      "table-row-background-selected": ville.global.color.Brand[160],
      //BrandBackground2
      "table-row-background-even": "transparent",
      "table-row-background-odd": "transparent",
      "table-row-selected": ville.global.color.Grey[14],
      //NeutralForeground1
      "table-row": ville.global.color.Grey[14],
      //NeutralForeground1
      "table-row-line": ville.global.color.Grey[88],
      //NeutralStorke2
      "table-column-line": "transparent" //ville.global.color.Grey[88], //NeutralStorke2
    }
  });
  ville.theme.fluent.Brand1.$$dbClassInfo = $$dbClassInfo;
})();

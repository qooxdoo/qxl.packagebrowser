(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.Promise": {
        "construct": true
      },
      "qx.bom.Label": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.event.Timer": {},
      "qx.bom.element.Dimension": {},
      "qx.lang.Object": {},
      "qx.bom.element.Style": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "className": "qx.bom.client.Browser"
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
  
  ************************************************************************ */

  /**
   * Checks whether a given font is available on the document and fires events
   * accordingly.
   *
   * This class does not need to be disposed, unless you want to abort the validation
   * early
   */
  qx.Class.define("qx.bom.webfonts.Validator", {
    extend: qx.core.Object,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param fontFamily {String} The name of the font to be verified
     * @param comparisonString {String?} String to be used to detect whether a font was loaded or not
     * @param fontWeight {String?} the weight of the font to be verified
     * @param fontStyle {String?} the style of the font to be verified
     * whether the font has loaded properly
     */
    construct(fontFamily, comparisonString, fontWeight, fontStyle) {
      qx.core.Object.constructor.call(this);
      if (comparisonString) {
        this.setComparisonString(comparisonString);
      }
      if (fontWeight) {
        this.setFontWeight(fontWeight);
      }
      if (fontStyle) {
        this.setFontStyle(fontStyle);
      }
      if (fontFamily) {
        this.setFontFamily(fontFamily);
        this.__P_246_0 = this._getRequestedHelpers();
      }
      this.__P_246_1 = new qx.Promise();
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Sets of serif and sans-serif fonts to be used for size comparisons.
       * At least one of these fonts should be present on any system.
       */
      COMPARISON_FONTS: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Times New Roman", "Georgia", "serif"]
      },
      /**
       * Map of common CSS attributes to be used for all  size comparison elements
       */
      HELPER_CSS: {
        position: "absolute",
        margin: "0",
        padding: "0",
        top: "-1000px",
        left: "-1000px",
        fontSize: "350px",
        width: "auto",
        height: "auto",
        lineHeight: "normal",
        fontVariant: "normal",
        visibility: "hidden"
      },
      /**
       * The string to be used in the size comparison elements. This is the default string
       * which is used for the {@link #COMPARISON_FONTS} and the font to be validated. It
       * can be overridden for the font to be validated using the {@link #comparisonString}
       * property.
       */
      COMPARISON_STRING: "WEei",
      __P_246_2: null,
      __P_246_3: null,
      /**
       * Removes the two common helper elements used for all size comparisons from
       * the DOM
       */
      removeDefaultHelperElements() {
        var defaultHelpers = qx.bom.webfonts.Validator.__P_246_3;
        if (defaultHelpers) {
          for (var prop in defaultHelpers) {
            document.body.removeChild(defaultHelpers[prop]);
          }
        }
        delete qx.bom.webfonts.Validator.__P_246_3;
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /**
       * The font-family this validator should check
       */
      fontFamily: {
        nullable: true,
        init: null,
        apply: "_applyFontFamily"
      },
      /** The font weight to check */
      fontWeight: {
        nullable: true,
        check: "String",
        apply: "_applyFontWeight"
      },
      /** The font style to check */
      fontStyle: {
        nullable: true,
        check: "String",
        apply: "_applyFontStyle"
      },
      /**
       * Comparison string used to check whether the font has loaded or not.
       */
      comparisonString: {
        nullable: true,
        init: null
      },
      /**
       * Time in milliseconds from the beginning of the check until it is assumed
       * that a font is not available
       */
      timeout: {
        check: "Integer",
        init: 5000
      }
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * Fired when the status of a web font has been determined. The event data
       * is a map with the keys "family" (the font-family name) and "valid"
       * (Boolean).
       */
      changeStatus: "qx.event.type.Data"
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __P_246_0: null,
      __P_246_4: null,
      __P_246_5: null,
      __P_246_1: null,
      /*
      ---------------------------------------------------------------------------
        PUBLIC API
      ---------------------------------------------------------------------------
      */

      /**
       * Validates the font
       */
      validate() {
        if (this.__P_246_5) {
          return;
        }
        const setValidImpl = valid => {
          if (this.__P_246_4) {
            this.__P_246_4.stop();
          }
          this._reset();
          this.__P_246_1.resolve(valid);
          this.fireDataEvent("changeStatus", {
            family: this.getFontFamily(),
            valid: valid
          });
        };
        if (document.fonts && typeof document.fonts.load == "function") {
          this.__P_246_5 = new Date().getTime();
          let fontExpr = `${this.getFontStyle() || "normal"} ${this.getFontWeight() || "normal"} 14px ${this.getFontFamily()}`;
          const loadImpl = async () => {
            try {
              await document.fonts.load(fontExpr);
              await document.fonts.ready;
              qx.bom.Label.getTextSize("Hello World", {
                fontFamily: this.getFontFamily(),
                fontStyle: this.getFontStyle(),
                fontWeight: this.getFontWeight()
              });
              setTimeout(() => setValidImpl(this._isFontValid()), 100);
            } catch (ex) {
              this.warn(`Exception while loading font ${fontExpr}: ` + ex);
              setValidImpl(false);
            }
          };
          loadImpl();
        } else {
          this.__P_246_5 = new Date().getTime();
          let fontExpr = `${this.getFontStyle() || "normal"} ${this.getFontWeight() || "normal"} 14px ${this.getFontFamily()}`;
          const timerCheck = () => {
            if (this._isFontValid()) {
              // safari has trouble resizing, adding it again fixed the issue [BUG #8786]
              if (qx.core.Environment.get("browser.name") == "safari" && parseFloat(qx.core.Environment.get("browser.version")) >= 8) {
                setTimeout(() => setValidImpl(true), 100);
              } else {
                setValidImpl(true);
              }
            } else {
              var now = new Date().getTime();
              if (now - this.__P_246_5 >= this.getTimeout()) {
                setValidImpl(false);
              }
            }
          };

          // Give the browser a chance to render the new elements
          qx.event.Timer.once(() => {
            this.__P_246_4 = new qx.event.Timer(100);
            this.__P_246_4.addListener("interval", timerCheck);
            this.__P_246_4.start();
          }, this, 0);
        }
      },
      /**
       * Waits for the font to become invalid or valid
       *
       * @returns {Boolean} whether valid or not
       */
      async isValid() {
        return await this.__P_246_1;
      },
      /*
      ---------------------------------------------------------------------------
        PROTECTED API
      ---------------------------------------------------------------------------
      */

      /**
       * Removes the helper elements from the DOM
       */
      _reset() {
        if (this.__P_246_0) {
          for (var prop in this.__P_246_0) {
            var elem = this.__P_246_0[prop];
            document.body.removeChild(elem);
          }
          this.__P_246_0 = null;
        }
      },
      /**
       * Checks if the font is available by comparing the widths of the elements
       * using the generic fonts to the widths of the elements using the font to
       * be validated
       *
       * @return {Boolean} Whether or not the font caused the elements to differ
       * in size
       */
      _isFontValid() {
        if (!qx.bom.webfonts.Validator.__P_246_2) {
          this.__P_246_6();
        }
        if (!this.__P_246_0) {
          this.__P_246_0 = this._getRequestedHelpers();
        }

        // force rerendering for chrome
        this.__P_246_0.sans.style.visibility = "visible";
        this.__P_246_0.sans.style.visibility = "hidden";
        this.__P_246_0.serif.style.visibility = "visible";
        this.__P_246_0.serif.style.visibility = "hidden";
        var requestedSans = qx.bom.element.Dimension.getWidth(this.__P_246_0.sans);
        var requestedSerif = qx.bom.element.Dimension.getWidth(this.__P_246_0.serif);
        var cls = qx.bom.webfonts.Validator;
        if (requestedSans !== cls.__P_246_2.sans || requestedSerif !== cls.__P_246_2.serif) {
          return true;
        }
        return false;
      },
      /**
       * Creates the two helper elements styled with the font to be checked
       *
       * @return {Map} A map with the keys <pre>sans</pre> and <pre>serif</pre>
       * and the created span elements as values
       */
      _getRequestedHelpers() {
        var fontsSans = [this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
        var fontsSerif = [this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
        return {
          sans: this._getHelperElement(fontsSans, this.getComparisonString()),
          serif: this._getHelperElement(fontsSerif, this.getComparisonString())
        };
      },
      /**
       * Creates a span element with the comparison text (either {@link #COMPARISON_STRING} or
       * {@link #comparisonString}) and styled with the default CSS ({@link #HELPER_CSS}) plus
       * the given font-family value and appends it to the DOM
       *
       * @param fontFamily {String} font-family string
       * @param comparisonString {String?} String to be used to detect whether a font was loaded or not
       * @return {Element} the created DOM element
       */
      _getHelperElement(fontFamily, comparisonString) {
        var styleMap = qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);
        if (fontFamily) {
          if (styleMap.fontFamily) {
            styleMap.fontFamily += "," + fontFamily.join(",");
          } else {
            styleMap.fontFamily = fontFamily.join(",");
          }
        }
        if (this.getFontWeight()) {
          styleMap.fontWeight = this.getFontWeight();
        }
        if (this.getFontStyle()) {
          styleMap.fontStyle = this.getFontStyle();
        }
        var elem = document.createElement("span");
        elem.innerHTML = comparisonString || qx.bom.webfonts.Validator.COMPARISON_STRING;
        qx.bom.element.Style.setStyles(elem, styleMap);
        document.body.appendChild(elem);
        return elem;
      },
      // property apply
      _applyFontFamily(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      // property apply
      _applyFontWeight(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      // property apply
      _applyFontStyle(value, old) {
        if (value !== old) {
          this._reset();
        }
      },
      /*
      ---------------------------------------------------------------------------
        PRIVATE API
      ---------------------------------------------------------------------------
      */

      /**
       * Creates the default helper elements and gets their widths
       */
      __P_246_6() {
        var cls = qx.bom.webfonts.Validator;
        if (!cls.__P_246_3) {
          cls.__P_246_3 = {
            sans: this._getHelperElement(cls.COMPARISON_FONTS.sans),
            serif: this._getHelperElement(cls.COMPARISON_FONTS.serif)
          };
        }
        cls.__P_246_2 = {
          sans: qx.bom.element.Dimension.getWidth(cls.__P_246_3.sans),
          serif: qx.bom.element.Dimension.getWidth(cls.__P_246_3.serif)
        };
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */

    destruct() {
      this._reset();
      if (this.__P_246_4 != null) {
        this.__P_246_4.stop();
      }
      this._disposeObjects("__P_246_4");
    }
  });
  qx.bom.webfonts.Validator.$$dbClassInfo = $$dbClassInfo;
})();

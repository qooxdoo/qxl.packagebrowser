(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     https://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * ???
  
  ************************************************************************ */

  /**
   * This class is responsible for the logic of the calculator.
   */
  qx.Class.define("scro34.themedemo.CalculatorLogic", {
    extend: qx.core.Object,
    members: {
      __P_289_0: 0,
      __P_289_1: 0,
      __P_289_2: "n",
      __P_289_3: 0,
      __P_289_4: 0,
      __P_289_5: 0,
      __P_289_6: false,
      __P_289_7: 1,
      __P_289_8: 0,
      __P_289_9: false,
      __P_289_10: 0,
      /**
       * sets the pressed number into the display.
       *
       * @param currentValue {var} Pressed number
       * @return {void}
       */
      setCurrentValue: function setCurrentValue(currentValue) {
        if (this.__P_289_6) {
          this.__P_289_7 *= 10;
          this.__P_289_0 = this.__P_289_0 + currentValue / this.__P_289_7;
          if (currentValue == 0) {
            this.__P_289_8++;
          }
        } else {
          this.__P_289_6 = false;
          if (this.__P_289_0 < 0) {
            this.__P_289_0 = this.__P_289_0 * 10 - currentValue;
          } else {
            this.__P_289_0 = this.__P_289_0 * 10 + currentValue;
          }
        }
      },
      /**
       * returns the counter to regulate the decimal place.
       *
       * @return {Integer} a counter
       */
      getZeroCounter: function getZeroCounter() {
        return this.__P_289_8;
      },
      /**
       * sets a comma.
       *
       * @return {void}
       */
      setComma: function setComma() {
        this.__P_289_6 = true;
      },
      /**
       * returns the pressed number.
       *
       * @return {Float} is the pressed value
       */
      getCurrentValue: function getCurrentValue() {
        return this.__P_289_0;
      },
      /**
       * resets the pressed number.
       *
       * @return {void}
       */
      resetCurrentValue: function resetCurrentValue() {
        this.__P_289_0 = null;
      },
      /**
       * cleans the display and resets all variables.
       *
       * @return {void}
       */
      cleanDisplay: function cleanDisplay() {
        this.__P_289_10 = 0;
        this.__P_289_4 = 0;
        this.__P_289_2 = "n";
        this.__P_289_8 = 0;
        this.__P_289_7 = 1;
        this.__P_289_6 = false;
        this.__P_289_5 = 0;
        this.__P_289_3 = 0;
        this.__P_289_0 = 0;
        this.__P_289_1 = 0;
        this.__P_289_9 = false;
      },
      /**
       * sets the result.
       *
       * @param result {var} the calculated result.
       * @return {void}
       */
      setResult: function setResult(result) {
        this.__P_289_1 = result;
      },
      /**
       * returns the calculated result.
       *
       * @return {Integer} calculated result.
       */
      getResult: function getResult() {
        return Math.round(this.__P_289_1 * 10000000) / 10000000;
      },
      /**
       * sets the operator.
       *
       * @param op {var} pressed operator
       * @return {void}
       */
      setCurrentOperation: function setCurrentOperation(op) {
        this.__P_289_2 = op;
      },
      /**
       * returns the recent pressed operator.
       *
       * @return {Char} recent operator
       */
      getCurrentOperation: function getCurrentOperation() {
        return this.__P_289_2;
      },
      /**
       * clears the entry.
       *
       * @return {void}
       */
      clearEntry: function clearEntry() {
        this.__P_289_9 = false;
        this.__P_289_8 = 0;
        this.__P_289_7 = 1;
        this.__P_289_6 = false;
        this.__P_289_5++;
        this.__P_289_0 = 0;
        if (this.__P_289_5 < 2) {
          this.__P_289_4 = this.__P_289_1;
        }
        if (this.__P_289_3 >= 2) {
          this.__P_289_1 = 0;
          this.__P_289_3 = 0;
        }
      },
      /**
       * sets the sign from plus to minus or the other way round.
       *
       * @return {void}
       */
      setSign: function setSign() {
        this.__P_289_10++;
        if (this.__P_289_10 % 2 == 0) {
          this.__P_289_9 = false;
        } else {
          this.__P_289_9 = true;
        }
        if (this.__P_289_0 == null) {
          this.__P_289_0 = this.__P_289_1;
        }
        this.__P_289_0 = this.__P_289_0 * -1;
        if (this.__P_289_1 == 0) {
          this.__P_289_1 = this.__P_289_0;
        }
        if (this.__P_289_1 != 0) {
          this.__P_289_4 = this.__P_289_1;
          this.__P_289_1 = this.__P_289_0;
        }
      },
      /**
       * deletes the last pressed number.
       *
       * @return {void}
       */
      deleteNumber: function deleteNumber() {
        var isDecimal = false;
        var isNegative = false;
        if (this.__P_289_0 < 0) {
          this.__P_289_0 = this.__P_289_0 * -1;
          isNegative = true;
        }
        if (this.__P_289_0 != null) {
          if (this.__P_289_0.toString().lastIndexOf(".") != -1) {
            this.__P_289_0 = this.__P_289_0 * this.__P_289_7;
            isDecimal = true;
          }
        }
        var num1 = this.__P_289_0 % 10;
        var num2 = num1 / 10;
        this.__P_289_0 = this.__P_289_0 / 10;
        this.__P_289_0 = this.__P_289_0 - num2;
        if (isDecimal) {
          this.__P_289_7 /= 10;
          this.__P_289_0 = this.__P_289_0 / this.__P_289_7;
          isDecimal = false;
        }
        if (isNegative) {
          this.__P_289_0 = this.__P_289_0 * -1;
          isNegative = false;
        }
      },
      /**
       * computes the given numbers with the desired operation.
       *
       * @param currentOperation {var} desired operation to compute
       * @return {void}
       *
       * @lint ignoreDeprecated(alert)
       */
      calculate: function calculate(currentOperation) {
        if (currentOperation == "+" || currentOperation == "*" || currentOperation == "/" || currentOperation == "-" || currentOperation == "=") {
          this.__P_289_6 = false;
          this.__P_289_7 = 1;
          this.__P_289_8 = 0;
          if (this.__P_289_2 != "n") {
            if (this.__P_289_2 == "+") {
              if (this.__P_289_1 == null) {
                this.__P_289_1 = this.__P_289_4;
              }
              if (this.__P_289_9) {
                this.__P_289_1 = this.__P_289_4 + this.__P_289_0;
              } else {
                this.__P_289_1 = this.__P_289_1 + this.__P_289_0;
              }
              this.__P_289_0 = this.__P_289_1;
              this.__P_289_4 = this.__P_289_1;
            }
            if (this.__P_289_2 == "-") {
              if (this.__P_289_1 == 0) {
                this.__P_289_1 = this.__P_289_0;
                this.__P_289_0 = 0;
              }
              if (this.__P_289_1 == null) {
                this.__P_289_1 = this.__P_289_4;
              }
              if (this.__P_289_9) {
                this.__P_289_1 = this.__P_289_4 - this.__P_289_0;
              } else {
                this.__P_289_1 = this.__P_289_1 - this.__P_289_0;
              }
              this.__P_289_0 = this.__P_289_1;
              this.__P_289_4 = this.__P_289_1;
            }
            if (this.__P_289_2 == "/") {
              if (this.__P_289_1 == 0) {
                this.__P_289_1 = this.__P_289_0;
                this.__P_289_0 = 1;
              }
              if (this.__P_289_1 == null) {
                this.__P_289_1 = this.__P_289_4;
              }
              if (this.__P_289_0 != null) {
                if (this.__P_289_0 != 0) {
                  if (this.__P_289_9) {
                    this.__P_289_1 = this.__P_289_4 / this.__P_289_0;
                  } else {
                    this.__P_289_1 = this.__P_289_1 / this.__P_289_0;
                  }
                } else {
                  alert("You can't divide by 0!");
                }
              }
              this.__P_289_0 = this.__P_289_1;
              this.__P_289_4 = this.__P_289_1;
            }
            if (this.__P_289_2 == "*") {
              if (this.__P_289_1 == 0) {
                this.__P_289_1 = 1;
              }
              if (this.__P_289_0 == null) {
                this.__P_289_0 = 1;
              }
              if (this.__P_289_1 == null) {
                this.__P_289_1 = this.__P_289_4;
              }
              if (this.__P_289_9) {
                this.__P_289_1 = this.__P_289_4 * this.__P_289_0;
              } else {
                this.__P_289_1 = this.__P_289_1 * this.__P_289_0;
              }
              this.__P_289_0 = this.__P_289_1;
              this.__P_289_4 = this.__P_289_1;
            }
          } else {
            this.__P_289_1 = this.__P_289_0;
          }
          if (currentOperation != "=") {
            this.__P_289_2 = currentOperation;
          } else {
            this.__P_289_3++;
            this.__P_289_1 = this.__P_289_4;
            this.__P_289_2 = "n";
          }
          this.__P_289_9 = false;
          this.__P_289_10 = 0;
          return;
        }
      }
    }
  });
  scro34.themedemo.CalculatorLogic.$$dbClassInfo = $$dbClassInfo;
})();

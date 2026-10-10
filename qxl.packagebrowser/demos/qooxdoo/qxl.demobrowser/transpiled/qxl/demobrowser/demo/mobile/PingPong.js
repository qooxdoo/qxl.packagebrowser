(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.Element": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.html.Element": {},
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.lang.Function": {},
      "qx.event.Timer": {},
      "qx.dom.Hierarchy": {},
      "qx.bom.element.Location": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
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
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
       * tbtz (Tino Butz)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   * @require(qx.bom.Element) // mark as load-time dependency so that the required
   * event dispatcher is loaded before listeners are registered
   */
  qx.Class.define("qxl.demobrowser.demo.mobile.PingPong", {
    extend: qx.application.Native,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __P_16_0: null,
      __P_16_1: null,
      __P_16_2: null,
      __P_16_3: null,
      __P_16_4: 5,
      __P_16_5: 1,
      __P_16_6: 1,
      __P_16_7: null,
      __P_16_8: null,
      __P_16_9: null,
      __P_16_10: null,
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.mobile.PingPong.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        // ROOT
        var backgroundStyles = {
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          margin: "0px",
          userSelect: "none",
          touchAction: "none",
          msTouchAction: "none"
        };
        var root = new qx.html.Element("div", backgroundStyles);
        root.useElement(document.body);
        root.setRoot(true);
        var engine = qx.core.Environment.get("engine.name");
        var modernIe = engine == "mshtml" && qx.core.Environment.get("browser.documentmode") > 10;
        if (engine != "webkit" && !modernIe) {
          var warningLabelStyle = {
            color: "green",
            position: "absolute",
            "font-family": "Lucida Grande",
            "font-size": "12px",
            left: "30px",
            top: "20px"
          };
          var label = new qx.html.Element("div", warningLabelStyle);
          root.add(label);
          label.setAttribute("innerHTML", "<b>This demo is intended for WebKit-based browsers and IE11+.</b>");
          return;
        }

        // Field
        this.__P_16_10 = this.__P_16_11("left");
        root.add(this.__P_16_10);
        var rightField = this.__P_16_11("right");
        root.add(rightField);

        // Paddles
        this.__P_16_1 = this.__P_16_12("left");
        this.__P_16_10.add(this.__P_16_1);
        this.__P_16_10.addListener("pointermove", qx.lang.Function.bind(this.__P_16_13, this), this);
        this.__P_16_0 = this.__P_16_12("right");
        rightField.add(this.__P_16_0);
        rightField.addListener("pointermove", qx.lang.Function.bind(this.__P_16_13, this), this);

        // Ball
        this.__P_16_2 = this.__P_16_14();
        root.add(this.__P_16_2);

        // Scores
        this.__P_16_8 = this.__P_16_15();
        this.__P_16_10.add(this.__P_16_8);
        this.__P_16_9 = this.__P_16_15();
        rightField.add(this.__P_16_9);
        // initialize score
        this.__P_16_7 = [0, 0];

        // START
        this.__P_16_16();
      },
      /*
      ---------------------------------------------------------------------------
        GAME CONTROLL
      ---------------------------------------------------------------------------
      */
      __P_16_16: function __P_16_16() {
        // set ball start position
        this.__P_16_2.setStyles({
          left: "200px",
          top: "200px"
        });

        // ball movement
        this.__P_16_3 = new qx.event.Timer(40);
        this.__P_16_3.addListener("interval", function () {
          var x = parseInt(this.__P_16_2.getStyle("left")) + this.__P_16_4 * this.__P_16_5;
          var y = parseInt(this.__P_16_2.getStyle("top")) + this.__P_16_4 * this.__P_16_6;
          this.__P_16_2.setStyle("left", x + "px");
          this.__P_16_2.setStyle("top", y + "px");
          this.__P_16_17();
        }, this);
        this.__P_16_3.start();
      },
      __P_16_18: function __P_16_18(player) {
        this.__P_16_3.stop();
        this.__P_16_3.dispose();
        this.__P_16_4 = 5;
        this.__P_16_7[player] = this.__P_16_7[player] + 1;
        this.__P_16_8.setAttribute("innerHTML", this.__P_16_7[0]);
        this.__P_16_9.setAttribute("innerHTML", this.__P_16_7[1]);
        this.__P_16_16();
      },
      __P_16_17: function __P_16_17() {
        var ballBounds = this.getBoundsFor(this.__P_16_2);

        // top wall
        if (ballBounds.top <= 0) {
          this.__P_16_6 = 1;
        }

        // bottom wall
        if (ballBounds.bottom >= window.innerHeight - 5) {
          this.__P_16_6 = -1;
        }

        // left / right wall
        if (ballBounds.left <= 0 || ballBounds.right >= window.innerWidth) {
          this.__P_16_18(ballBounds.left <= 0 ? 1 : 0);
        }

        // left Paddle collision
        var leftPaddleBounds = this.getBoundsFor(this.__P_16_1);
        if (ballBounds.left <= leftPaddleBounds.right && ballBounds.bottom >= leftPaddleBounds.top && ballBounds.top <= leftPaddleBounds.bottom) {
          this.__P_16_5 = 1;
          this.__P_16_4 = Math.min(this.__P_16_4 + 1, 20);
        }

        // right Paddle collision
        var rightPaddleBounds = this.getBoundsFor(this.__P_16_0);
        if (ballBounds.right >= rightPaddleBounds.left && ballBounds.bottom >= rightPaddleBounds.top && ballBounds.top <= rightPaddleBounds.bottom) {
          this.__P_16_5 = -1;
          this.__P_16_4 = Math.min(this.__P_16_4 + 1, 20);
        }
      },
      /*
      ---------------------------------------------------------------------------
        HELPER
      ---------------------------------------------------------------------------
      */
      __P_16_13: function __P_16_13(e) {
        var paddle;
        if (qx.dom.Hierarchy.contains(this.__P_16_10.getDomElement(), e.getTarget())) {
          paddle = this.__P_16_1;
        } else {
          paddle = this.__P_16_0;
        }
        paddle.setStyles({
          top: e.getDocumentTop() - 50 + "px"
        });
        e.preventDefault();
      },
      getBoundsFor: function getBoundsFor(elem) {
        return qx.bom.element.Location.get(elem.getDomElement());
      },
      /*
      ---------------------------------------------------------------------------
        BUILDING BLOCKS
      ---------------------------------------------------------------------------
      */
      __P_16_11: function __P_16_11(side) {
        var styles = {
          width: "50%",
          height: "100%",
          position: "absolute",
          backgroundColor: "black"
        };
        if (side == "left") {
          styles["border-right"] = "1px solid white";
        } else {
          styles["left"] = "50%";
          styles["border-left"] = "1px solid white";
        }
        return new qx.html.Element("div", styles);
      },
      __P_16_12: function __P_16_12(side) {
        var styles = {
          width: "30px",
          height: "100px",
          top: "100px",
          position: "absolute",
          backgroundColor: "white"
        };
        styles[side] = "20px";
        return new qx.html.Element("div", styles);
      },
      __P_16_14: function __P_16_14() {
        var styles = {
          width: "20px",
          height: "20px",
          position: "absolute",
          backgroundColor: "white",
          userSelect: "none"
        };
        return new qx.html.Element("div", styles);
      },
      __P_16_15: function __P_16_15() {
        var styles = {
          width: "100%",
          height: "100%",
          textAlign: "center",
          fontSize: "15em",
          color: "#333",
          fontFamily: "Arial"
        };
        var elem = new qx.html.Element("div", styles);
        elem.setAttribute("innerHTML", "0");
        return elem;
      }
    }
  });
  qxl.demobrowser.demo.mobile.PingPong.$$dbClassInfo = $$dbClassInfo;
})();

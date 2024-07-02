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
      "qx.test.ui.LayoutTestCase": {
        "require": true
      },
      "qx.dev.unit.MRequirements": {
        "require": true
      },
      "qx.dev.unit.MMock": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.ui.form.TextField": {},
      "qx.bom.webfonts.WebFontLoader": {},
      "qx.util.ResourceManager": {},
      "qx.bom.webfonts.WebFont": {}
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
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /* ************************************************************************
   ************************************************************************ */
  /**
   *
   * @asset(qx/test/webfonts/*)
   */

  qx.Class.define("qx.test.ui.form.Field", {
    extend: qx.test.ui.LayoutTestCase,
    include: [qx.dev.unit.MRequirements, qx.dev.unit.MMock],
    members: {
      hasWebFontSupport: function hasWebFontSupport() {
        var browser = qx.core.Environment.get("browser.name");
        var version = qx.core.Environment.get("browser.version");
        if (browser == "firefox" && version < 3.5 || browser == "opera" && version < 10) {
          return false;
        }
        return true;
      },
      tearDown: function tearDown() {
        this.getSandbox().restore();
      },
      testSelectTextAllBeforeFlush: function testSelectTextAllBeforeFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        textfield.selectAllText();
        this.flush();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(1000, function () {
          self.assertEquals("affe", textfield.getTextSelection());
          textfield.destroy();
        });
      },
      testSelectAllTextAfterFlush: function testSelectAllTextAfterFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        this.flush();
        textfield.selectAllText();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(1000, function () {
          self.assertEquals("affe", textfield.getTextSelection());
          textfield.destroy();
        });
      },
      testClearTextSelectionBeforeFlush: function testClearTextSelectionBeforeFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        textfield.selectAllText();
        textfield.clearTextSelection();
        this.flush();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(100, function () {
          self.assertEquals("", textfield.getTextSelection());
          textfield.destroy();
        });
      },
      testClearTextSelectionAfterFlush: function testClearTextSelectionAfterFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        this.flush();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(1000, function () {
          textfield.selectAllText();
          textfield.clearTextSelection();
          self.assertEquals("", textfield.getTextSelection());
          textfield.destroy();
        });
      },
      testGetTextSelectionStartEndAfterFlush: function testGetTextSelectionStartEndAfterFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        this.flush();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(1000, function () {
          textfield.setTextSelection(1, 2);
          self.assertEquals(1, textfield.getTextSelectionStart());
          self.assertEquals(2, textfield.getTextSelectionEnd());
          textfield.destroy();
        });
      },
      testGetTextSelectionStartEndBeforeFlush: function testGetTextSelectionStartEndBeforeFlush() {
        var textfield = new qx.ui.form.TextField("affe");
        this.getRoot().add(textfield);
        textfield.focus();
        textfield.setTextSelection(2, 3);
        this.flush();

        // test this asynchronous because opera 9.x seems to cache the creation of DOM elements
        var self = this;
        this.wait(100, function () {
          self.assertEquals(2, textfield.getTextSelectionStart());
          self.assertEquals(3, textfield.getTextSelectionEnd());
          textfield.destroy();
        });
      },
      testApplyWebFont: function testApplyWebFont() {
        var _this = this;
        this.require(["webFontSupport"]);
        var tf = new qx.ui.form.TextField("Laugh while you can, monkey boy!");
        var loader = qx.bom.webfonts.WebFontLoader.getLoader("FinelinerScriptRegular", true);
        loader.setFontFaces([{
          fontFamily: "FinelinerScriptRegular",
          paths: [qx.util.ResourceManager.getInstance().toUri("qx/test/webfonts/fineliner_script-webfont.woff")]
        }, {
          fontFamily: "YanoneKaffeesatzRegular",
          paths: [qx.util.ResourceManager.getInstance().toUri("qx/test/webfonts/yanonekaffeesatz-regular-webfont.woff"), qx.util.ResourceManager.getInstance().toUri("qx/test/webfonts/yanonekaffeesatz-regular-webfont.ttf"), qx.util.ResourceManager.getInstance().toUri("qx/test/webfonts/yanonekaffeesatz-regular-webfont.eot")]
        }]);
        loader.load().then(function () {
          var f = new qx.bom.webfonts.WebFont();
          f.set({
            size: 18,
            family: ["FinelinerScriptRegular", "monospace"]
          });
          f.addListener("changeValid", function () {
            _this.resume(function () {
              tf.dispose();
              f.dispose();
              this.assertCalledOnce(statusChangeSpy);
            }, _this);
          });
          f.loadComplete();
          var statusChangeSpy = _this.spy(tf, "_onWebFontStatusChange");
          tf.setFont(f);
        });
        this.wait(30000);
      }
    }
  });
  qx.test.ui.form.Field.$$dbClassInfo = $$dbClassInfo;
})();

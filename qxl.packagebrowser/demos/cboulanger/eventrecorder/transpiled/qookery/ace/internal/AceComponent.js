(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qookery.internal.components.EditableComponent": {
        "construct": true,
        "require": true
      },
      "qookery.ace.internal.AceWidget": {},
      "qookery.Qookery": {},
      "qx.lang.Array": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /*
  	Qookery - Declarative UI Building for Qooxdoo
  
  	Copyright (c) Ergobyte Informatics S.A., www.ergobyte.gr
  
  	Licensed under the Apache License, Version 2.0 (the "License");
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at
  
  		http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software
  	distributed under the License is distributed on an "AS IS" BASIS,
  	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  	See the License for the specific language governing permissions and
  	limitations under the License.
  */

  /**
   * @asset(qookery/lib/ace/*)
   *
   * @ignore(ace.*)
   */
  qx.Class.define("qookery.ace.internal.AceComponent", {
    extend: qookery.internal.components.EditableComponent,
    construct: function construct(parentComponent) {
      qookery.internal.components.EditableComponent.constructor.call(this, parentComponent);
    },
    members: {
      __P_4_0: null,
      __P_4_1: null,
      // Metadata
      getAttributeType: function getAttributeType(attributeName) {
        switch (attributeName) {
          case "display-indent-guides":
          case "h-scroll-bar-always-visible":
          case "highlight-active-line":
          case "show-fold-widgets":
          case "show-invisibles":
          case "show-gutter":
          case "show-print-margin":
          case "use-soft-tabs":
          case "use-wrap-mode":
          case "v-scroll-bar-always-visible":
            return "Boolean";

          case "print-margin-column":
          case "tab-size":
            return "Integer";

          case "cursor-style":
          case "theme":
            return "String";

          case "auto-complete":
            return "StringList";

          default:
            return qookery.ace.internal.AceComponent.prototype.getAttributeType.base.call(this, attributeName);
        }
      },
      setAttribute: function setAttribute(attributeName, value) {
        if (this.__P_4_0 != null) {
          switch (attributeName) {
            case "mode":
              this.__P_4_0.getSession().setMode("ace/mode/" + value);

              break;
          }
        }

        return qookery.ace.internal.AceComponent.prototype.setAttribute.base.call(this, attributeName, value);
      },
      // Construction
      _createMainWidget: function _createMainWidget() {
        var widget = new qookery.ace.internal.AceWidget(this);

        this._applyWidgetAttributes(widget);

        return widget;
      },
      setup: function setup() {
        var libraryNames = ["ace"];
        var autoComplete = this.getAttribute("auto-complete");
        if (autoComplete != null) libraryNames.push("aceLanguageTools");
        qookery.Qookery.getRegistry().loadLibrary(libraryNames, function (error) {
          if (error != null) {
            this.error("Error loading library", error);
            return;
          }

          var aceWidget = this.getMainWidget();

          if (aceWidget.getContentElement().getDomElement()) {
            this.__P_4_2(aceWidget);

            return;
          }

          aceWidget.addListenerOnce("appear", function () {
            this.__P_4_2(aceWidget);
          }, this);
        }, this);
        qookery.ace.internal.AceComponent.prototype.setup.base.call(this);
      },
      // Public methods
      getEditor: function getEditor() {
        return this.__P_4_0;
      },
      // Component implementation
      _updateUI: function _updateUI(value) {
        if (!this.__P_4_0) return;
        this.__P_4_1 = true;

        try {
          var value = this.getValue();
          if (value == null) value = "";

          this.__P_4_0.getSession().setValue(value);
        } catch (e) {
          this.error("Error seting value of ACE editor", e);
        } finally {
          this.__P_4_1 = false;
        }
      },
      _applyValid: function _applyValid(valid) {
        if (!valid) this.getMainWidget().addState("invalid");else this.getMainWidget().removeState("invalid");
      },
      setInvalidMessage: function setInvalidMessage(invalidMessage) {// Overriden to block default implementation
      },
      focus: function focus() {
        this.__P_4_0.focus();
      },
      // Internal
      __P_4_2: function __P_4_2(aceWidget) {
        var aceContainer = aceWidget.getContentElement().getDomElement();
        var editor = this.__P_4_0 = ace.edit(aceContainer);
        editor.setReadOnly(this.isReadOnly());
        editor.setHighlightActiveLine(this.getAttribute("highlight-active-line", true));
        editor.setShowFoldWidgets(this.getAttribute("show-fold-widgets", true));
        editor.setShowInvisibles(this.getAttribute("show-invisibles", false));
        editor.setShowPrintMargin(this.getAttribute("show-print-margin", true));
        editor.setOption("cursorStyle", this.getAttribute("cursor-style", "ace"));
        var autoComplete = this.getAttribute("auto-complete");

        if (autoComplete != null) {
          editor.setOption("enableBasicAutocompletion", qx.lang.Array.contains(autoComplete, "basic"));
          editor.setOption("enableLiveAutocompletion", qx.lang.Array.contains(autoComplete, "live"));
          editor.setOption("enableSnippets", qx.lang.Array.contains(autoComplete, "snippets"));
        }

        editor.$blockScrolling = Infinity;
        editor.on("change", this.__P_4_3.bind(this));
        var renderer = editor.renderer;
        renderer.setPrintMarginColumn(this.getAttribute("print-margin-column", 80));
        renderer.setDisplayIndentGuides(this.getAttribute("display-indent-guides", true));
        renderer.setShowGutter(this.getAttribute("show-gutter", true));
        renderer.setHScrollBarAlwaysVisible(this.getAttribute("h-scroll-bar-always-visible", false));
        renderer.setVScrollBarAlwaysVisible(this.getAttribute("v-scroll-bar-always-visible", false));
        renderer.setTheme("ace/theme/" + this.getAttribute("theme", "textmate"));
        var session = editor.getSession();
        session.setMode("ace/mode/" + this.getAttribute("mode", "plain_text"));
        session.setTabSize(this.getAttribute("tab-size", 4));
        session.setUseSoftTabs(this.getAttribute("use-soft-tabs", true));
        session.setUseWrapMode(this.getAttribute("use-wrap-mode", false));

        this._updateUI(this.getValue());

        editor.selection.moveCursorFileStart();
        renderer.scrollToX(0);
        renderer.scrollToY(0);
        this.executeAction("initializeEditor", editor);
      },
      __P_4_3: function __P_4_3(event) {
        if (this.__P_4_1) return;

        var value = this.__P_4_0.getSession().getValue();

        if (value === "") value = null;

        this._setValueSilently(value);
      }
    },
    destruct: function destruct() {
      this.__P_4_0 = null;
    }
  });
  qookery.ace.internal.AceComponent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AceComponent.js.map?dt=1626055588616
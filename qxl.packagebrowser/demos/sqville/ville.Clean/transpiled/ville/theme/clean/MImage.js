(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.manager.Color": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Mixin.define("ville.theme.clean.MImage", {
    properties: {
      /** Any text string which can contain HTML, too */
      html: {
        check: "String",
        apply: "_applyHtml",
        event: "changeHtml",
        themeable: true,
        nullable: true
      },
      /**
       * The color of the rendered icon/image.
       */
      color: {
        nullable: true,
        check: "Color",
        apply: "_applyColor",
        event: "changeColor",
        themeable: true,
        inheritable: true
      },
      clipPath: {
        check: "String",
        apply: "_applyClipPath",
        event: "changeClipPath",
        themeable: true,
        nullable: true
      }
    },
    members: {
      // apply only if Html property has been set since this changes the same style value used by TextColor property
      _applyColor: function _applyColor(value) {
        if (this.getHtml()) {
          var el = this.getContentElement();
          if (this.__P_54_0) {
            el = el.getChild(0);
          }
          if (value) {
            el.setStyle("color", qx.theme.manager.Color.getInstance().resolve(value));
          } else {
            el.removeStyle("color");
          }
        }
      },
      // property apply
      _applyHtml: function _applyHtml(value, old) {
        var elem = this.getContentElement();
        // Insert HTML content
        elem.setAttribute("html", value || "");
      },
      // property apply
      _applyClipPath: function _applyClipPath(value, old) {
        var elem = this.getContentElement();
        elem.setStyle("clip-path", value);
        elem.setStyle("aspect-ratio", 1);
      }
    }
  });
  ville.theme.clean.MImage.$$dbClassInfo = $$dbClassInfo;
})();

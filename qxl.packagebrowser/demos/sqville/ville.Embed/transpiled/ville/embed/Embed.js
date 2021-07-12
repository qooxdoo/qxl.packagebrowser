function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.IStringForm": {
        "require": true
      },
      "ville.embed.Manager": {
        "construct": true
      },
      "qx.lang.String": {
        "construct": true
      },
      "qx.lang.Json": {
        "construct": true
      },
      "qx.bom.element.AnimationCss": {
        "construct": true
      },
      "qx.html.Label": {},
      "qx.lang.Object": {},
      "qx.bom.Template": {},
      "qx.ui.core.queue.Layout": {},
      "qx.theme.manager.Color": {},
      "qx.bom.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Ville Software (SQville)
  
     Copyright: 2021 sqville
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Chris Eskew (sqville) chris.eskew@sqville.com
  
  ************************************************************************ */

  /**
   * NOTE: Instances of this class must be disposed of after use
   *
   */
  qx.Class.define("ville.embed.Embed", {
    extend: qx.ui.core.Widget,
    implement: [qx.ui.form.IStringForm],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param value {String} HTML, SVG or JSON content to use
     * 
     */
    construct: function construct(value) {
      qx.ui.core.Widget.constructor.call(this);

      if (value != null) {
        //Load manager
        if (!this.__P_16_0) {
          this.__P_16_0 = ville.embed.Manager.getInstance();
        }

        var valtype = _typeof(value);

        if (valtype == "string") {
          if (qx.lang.String.startsWith(value, "data:text/html;") || qx.lang.String.startsWith(value, "data:text/svg+xml;") || qx.lang.String.startsWith(value, "data:text/json;")) {
            var dataformat = value.substring(value.indexOf("/") + 1, value.indexOf(";"));

            if (dataformat == "json") {
              var mapsrc = qx.lang.Json.parse(value.substr(value.indexOf(";") + 1)); // TODO: map API json to object properties

              this.set(mapsrc); //render value

              this.render(mapsrc);
            } else {
              this.setValue(value.substr(value.indexOf(";") + 1));
            }
          } else if (qx.lang.String.startsWith(value, "{") && qx.lang.String.endsWith(value, "}")) {
            var mapsrc = qx.lang.Json.parse(value); // TODO:: map API json to object properties

            this.set(mapsrc);
          } else {
            this.setValue(value);
          }
        } else {
          // TODO:: map API json to object properties  
          this.set(value); //render value

          this.render(value);
        } // Apply any starter animation


        if (this.getAnimation()) {
          this.addListener("appear", function (e) {
            qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), this.__P_16_0.animations[this.getAnimation()], undefined);
          }, this);
        }
      }
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      animation: {
        check: "String",
        apply: "_applyAnimation",
        event: "changeAnimation",
        init: null,
        nullable: true,
        themeable: true
      },

      /** Name of icon or graphic to use
       * 
       */
      name: {
        check: "String",
        apply: "_applyName",
        event: "changeName",
        init: null,
        nullable: true,
        themeable: true
      },

      /** Name of template used by named embed  
       * 
       */
      templateName: {
        check: "String",
        init: null,
        nullable: true,
        themeable: true
      },

      /**
       * Switches between rich HTML and text content. The text mode (<code>false</code>) supports
       * advanced features like ellipsis when the available space is not
       * enough. HTML mode (<code>true</code>) supports multi-line content and all the
       * markup features of HTML content.
       */
      rich: {
        check: "Boolean",
        init: true,
        event: "changeRich",
        apply: "_applyRich"
      },

      /**
       * Contains the HTML or text content. Interpretation depends on the value
       * of {@link #rich}. In text mode entities and other HTML special content
       * is not supported. But it is possible to use unicode escape sequences
       * to insert symbols and other non ASCII characters.
       */
      value: {
        check: "String",
        apply: "_applyValue",
        event: "changeValue",
        nullable: true,
        themeable: true
      },

      /** Font size of the widget */
      size: {
        check: "Integer",
        init: null,
        nullable: true
      },

      /** Control the text alignment */
      iconAlign: {
        check: ["left", "center", "right", "justify"],
        nullable: true,
        themeable: true,
        apply: "_applyIconAlign",
        event: "changeIconAlign"
      },

      /**
       * The tag to use for this element
       */
      cssClass: {
        check: "String",
        init: "",
        nullable: true,
        themeable: true,
        apply: "_applyCssClass"
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

      /** Color of the svg fill property */
      fill: {
        check: "Color",
        nullable: true,
        themeable: true,
        apply: "_applyFill",
        event: "changeFill"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      __P_16_1: null,
      __P_16_0: null,
      __P_16_2: {},
      __P_16_3: {},
      __P_16_4: {},
      __P_16_5: {},
      __P_16_6: {},
      // overridden
      _getContentHint: function _getContentHint() {
        if (this.__P_16_1) {
          this.__P_16_7 = this.__P_16_8();
          delete this.__P_16_1;
        }

        return {
          width: this.__P_16_7.width,
          height: this.__P_16_7.height
        };
      },
      // overridden
      _hasHeightForWidth: function _hasHeightForWidth() {
        return this.getRich();
      },
      // overridden
      _getContentHeightForWidth: function _getContentHeightForWidth(width) {
        if (!this.getRich()) {
          return null;
        }

        return this.__P_16_8(width).height;
      },
      // overridden
      _createContentElement: function _createContentElement() {
        var element = new qx.html.Label();
        element.setRich(true);
        return element;
      },

      /*
      ---------------------------------------------------------------------------
        WIDGET API
      ---------------------------------------------------------------------------
      */
      render: function render(usercontent) {
        var contenttype = _typeof(usercontent);

        var name = this.getName();
        var templatename = this.getTemplateName();
        var embeddedcontent = this.__P_16_0.embeds[name];
        var template = this.__P_16_0.templates[templatename]; //if the embed indicates a content entry then merge the content with the embed entries; content overrides matching fields

        if (this.__P_16_0.embeds[this.getName()].content) embeddedcontent = qx.lang.Object.mergeWith(embeddedcontent, this.__P_16_0.content[this.__P_16_0.embeds[this.getName()].content]);
        if (contenttype == "string") embeddedcontent = qx.lang.Object.mergeWith(embeddedcontent, this.__P_16_0.content[content]);else embeddedcontent = qx.lang.Object.mergeWith(usercontent, embeddedcontent); //check document for template tags

        if (name && templatename && !template) {
          var tempelement = document.getElementById(templatename);

          if (tempelement) {
            template = tempelement.innerHTML;
          } else {
            //template = "<small>" + templatename + " is missing a template entry</small>";
            //throw new Error(templatename + " is missing a TEMPLATE entry in its package class, or a <template id='"+templatename+"'></template> tag in your projects index.html file.");
            console.log(templatename + " is missing a TEMPLATE entry in its package class, or a <template id='" + templatename + "'></template> tag in your projects index.html file.");
            template = "";
          }
        }

        this.setValue(qx.bom.Template.render(template, embeddedcontent));
      },

      /*
      ---------------------------------------------------------------------------
       PROPERTY APPLIERS
      ---------------------------------------------------------------------------
      */
      // property apply
      _applyIconAlign: function _applyIconAlign(value, old) {
        this.getContentElement().setStyle("textAlign", value);
      },
      // property apply
      _applyAnimation: function _applyAnimation(value, old) {
        if (value) {
          if (this.getContentElement().getDomElement()) qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), this.__P_16_0.animations[value], undefined);
        }
      },
      // property apply
      _applyName: function _applyName(value, old) {
        //console.log(value);
        this.setTemplateName(this.__P_16_0.embeds[value].template);
      },
      // property apply
      _applyRich: function _applyRich(value) {
        // Sync with content element
        this.getContentElement().setRich(value); // Mark text size cache as invalid

        this.__P_16_1 = true; // Update layout

        qx.ui.core.queue.Layout.add(this);
      },
      // property apply
      _applyValue: function _applyValue(value, old) {
        // Sync with content element
        if (value) {
          this.getContentElement().setValue(value); //console.log(value);
        } // Mark text size cache as invalid


        this.__P_16_1 = true; // Update layout

        qx.ui.core.queue.Layout.add(this);
      },
      _applyFill: function _applyFill(value, old) {
        if (value) {
          this.getContentElement().setStyle("color", qx.theme.manager.Color.getInstance().resolve(value));
        }
      },
      // property apply
      _applyCssClass: function _applyCssClass(value, old) {
        this.getContentElement().removeClass(old);
        this.getContentElement().addClass(value);
      },
      // property apply
      _applyColor: function _applyColor(value, old) {
        this.getContentElement().setStyle("color", value || "");
      },

      /*
      ---------------------------------------------------------------------------
        LABEL ADDONS
      ---------------------------------------------------------------------------
      */

      /**
       * @type {Map} Internal fallback of label size when no font is defined
       *
       * @lint ignoreReferenceField(__contentSize)
       */
      __P_16_7: {
        width: 0,
        height: 0
      },

      /**
       * Internal utility to compute the content dimensions.
       *
       * @param width {Integer?null} Optional width constraint
       * @return {Map} Map with <code>width</code> and <code>height</code> keys
       */
      __P_16_8: function __P_16_8(width) {
        var Label = qx.bom.Label; //var font = this.getFont();
        //var styles = font ? this.__font.getStyles() : qx.bom.Font.getDefaultStyles();

        var styles = {};
        var content = this.getValue() || "A";
        var rich = this.getRich();
        return rich ? Label.getHtmlSize(content, styles, width) : Label.getTextSize(content, styles);
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      /*
       if (qx.core.Environment.get("qx.dynlocale")) {
         qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
       }
       */
    }
  });
  ville.embed.Embed.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Embed.js.map?dt=1626060344575
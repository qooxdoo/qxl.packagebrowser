(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.lang.Object": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  qx.Theme.define("zx.ui.accordion.theme.MAppearance", {
    appearances: {
      /*
      ---------------------------------------------------------------------------
        ACCORDION
      ---------------------------------------------------------------------------
      */

      /**
       * Applied to the {@link zx.ui.accordion.Accordion}.
       */
      accordion: {},
      /**
       * Applied to the scroll container used by the accordion.
       */
      "accordion/scroll": "scrollarea",
      "accordion/scroll/pane": "scrollarea/pane",
      "accordion/scroll/scrollbar-x": "scrollbar",
      "accordion/scroll/scrollbar-y": "scrollbar",
      /**
       * Applied to the {@link zx.ui.accordion.AccordionPanelGroup} used by the
       * {@link zx.ui.accordion.Accordion}.
       */
      "accordion/panelgroup": {
        style() {
          return {
            padding: [0, 10, 0, 0]
          };
        }
      },
      /**
       * Applied to individual {@link zx.ui.accordion.AccordionPanel}s.
       */
      "accordion-panel": {
        style() {
          return {
            backgroundColor: "accordion-panel-background"
          };
        }
      },
      /**
       * Applied to the composite container used by the
       * {@link zx.ui.accordion.AccordionPanel}.
       *
       * This is where any components added to the panel will be placed.
       */
      "accordion-panel/content": {},
      /**
       * Applied to the {@link zx.ui.accordion.AccordionHeader}.
       */
      "accordion-panel/header": {
        style() {
          return {
            decorator: "accordion-panel-header",
            padding: [8, 16]
          };
        }
      },
      "accordion-panel/header/label": {
        style() {
          return {
            font: "headline"
          };
        }
      },
      "accordion-panel/header/icon": {
        style(states) {
          return {
            padding: [5, 0, 0, 0],
            source: states.open ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png"
          };
        }
      },
      /**
       * Applied to the composite container used by the
       * {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion/minimap/content": {
        style() {
          return {
            decorator: "accordion-minimap",
            backgroundColor: "accordion-minimap-content-background",
            margin: [0, 5]
          };
        }
      },
      /**
       * Applied to the {@link zx.ui.accordion.minimap.FloatyBit} used by the
       * {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion/minimap/floatybit": {
        style() {
          return {
            backgroundColor: "accordion-minimap-floatybit-background",
            opacity: 0.5
          };
        }
      },
      /**
       * Applied to individual {@link zx.ui.accordion.minimap.MinicordionPanel}s.
       */
      "accordion-minimap-panel": "accordion-panel",
      /**
       * Applied to the tooltip which appears while hovering over a
       * {@link zx.ui.accordion.minimap.MinicordionPanel}.
       */
      "accordion-minimap-panel/tooltip": {
        style() {
          return {
            decorator: "accordion-minimap-tooltip",
            backgroundColor: "accordion-minimap-tooltip-background",
            padding: 5,
            margin: 5
          };
        }
      },
      /**
       * Applied to the {@link zx.ui.accordion.minimap.MinicordionHeader} used by
       * the {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion-minimap-panel/header": {
        include: "accordion-panel/header",
        style(_, styles) {
          var _styles;
          styles = qx.lang.Object.clone((_styles = styles) !== null && _styles !== void 0 ? _styles : {}, true);
          styles.padding = [1, 4];
          styles.decorator = "accordion-minimap-panel-header";
          return styles;
        }
      },
      "accordion-minimap-panel/header/label": {
        include: "accordion-panel/header/label",
        style(_, styles) {
          var _styles2;
          styles = qx.lang.Object.clone((_styles2 = styles) !== null && _styles2 !== void 0 ? _styles2 : {}, true);
          styles.font = "micro";
          return styles;
        }
      },
      /**
       * applied to {@link zx.ui.SkeletonText} instances used in the
       * {@link zx.ui.Accordion.minimap.Minicordion}.
       */
      "accordion-minimap-skeleton-text": {},
      /**
       * applied to lines of {@link zx.ui.SkeletonText} instances used in the
       * {@link zx.ui.Accordion.minimap.Minicordion}.
       */
      "accordion-minimap-skeleton-text-line": {
        style() {
          return {
            backgroundColor: "accordion-minimap-skeleton-background",
            height: 1,
            margin: [1, 8, 0, 8]
          };
        }
      }
    }
  });
  zx.ui.accordion.theme.MAppearance.$$dbClassInfo = $$dbClassInfo;
})();

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
      "qx.ui.core.MChildrenHandling": {
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.menu.Menu": {},
      "qx.util.PropertyUtil": {},
      "qx.ui.core.Spacer": {},
      "qx.ui.toolbar.Separator": {},
      "qx.ui.menubar.Button": {},
      "qx.ui.toolbar.Part": {}
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
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
       * Martin Wittemann (martinwittemann)
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /**
   * The Toolbar class is the main part of the toolbar widget.
   *
   * It can handle added {@link Button}s, {@link CheckBox}es, {@link RadioButton}s
   * and {@link Separator}s in its {@link #add} method. The {@link #addSpacer} method
   * adds a spacer at the current toolbar position. This means that the widgets
   * added after the method call of {@link #addSpacer} are aligned to the right of
   * the toolbar.
   *
   * For more details on the documentation of the toolbar widget, take a look at the
   * documentation of the {@link qx.ui.toolbar}-Package.
   */
  qx.Class.define("qx.ui.toolbar.ToolBar", {
    extend: qx.ui.core.Widget,
    include: qx.ui.core.MChildrenHandling,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * Constructor
     * @param {qx.ui.layout.Abstract?} layout optional layout, defaults to qx.ui.layout.HBox
     */
    construct: function construct(layout) {
      qx.ui.core.Widget.constructor.call(this);

      // ARIA attrs
      this.getContentElement().setAttribute("role", "toolbar");

      // add needed layout
      this._setLayout(layout || new qx.ui.layout.HBox());

      // initialize the overflow handling
      this.__P_198_0 = [];
      this.__P_198_1 = [];
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** Appearance of the widget */
      appearance: {
        refine: true,
        init: "toolbar"
      },
      /** Holds the currently open menu (when the toolbar is used for menus) */
      openMenu: {
        check: "qx.ui.menu.Menu",
        event: "changeOpenMenu",
        nullable: true
      },
      /** Whether icons, labels, both or none should be shown. */
      show: {
        init: "both",
        check: ["both", "label", "icon"],
        inheritable: true,
        apply: "_applyShow",
        event: "changeShow"
      },
      /** The spacing between every child of the toolbar */
      spacing: {
        nullable: true,
        check: "Integer",
        themeable: true,
        apply: "_applySpacing"
      },
      /**
       * Widget which will be shown if at least one toolbar item is hidden.
       * Keep in mind to add this widget to the toolbar before you set it as
       * indicator!
       */
      overflowIndicator: {
        check: "qx.ui.core.Widget",
        nullable: true,
        apply: "_applyOverflowIndicator"
      },
      /** Enables the overflow handling which automatically removes items.*/
      overflowHandling: {
        init: false,
        check: "Boolean",
        apply: "_applyOverflowHandling"
      }
    },
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** Fired if an item will be hidden by the {@link #overflowHandling}.*/
      hideItem: "qx.event.type.Data",
      /** Fired if an item will be shown by the {@link #overflowHandling}.*/
      showItem: "qx.event.type.Data"
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        OVERFLOW HANDLING
      ---------------------------------------------------------------------------
      */

      __P_198_0: null,
      __P_198_1: null,
      // overridden
      _computeSizeHint: function _computeSizeHint() {
        // get the original hint
        var hint = qx.ui.toolbar.ToolBar.superclass.prototype._computeSizeHint.call(this);
        if (true && this.getOverflowHandling()) {
          var minWidth = 0;
          // if an overflow widget is given, use its width + spacing as min width
          var overflowWidget = this.getOverflowIndicator();
          if (overflowWidget) {
            minWidth = overflowWidget.getSizeHint().width + this.getSpacing();
          }
          // reset the minWidth because we reduce the count of elements
          hint.minWidth = minWidth;
        }
        return hint;
      },
      /**
       * Resize event handler.
       *
       * @param e {qx.event.type.Data} The resize event.
       */
      _onResize: function _onResize(e) {
        this._recalculateOverflow(e.getData().width);
      },
      /**
       * Responsible for calculation the overflow based on the available width.
       *
       * @param width {Integer?null} The available width.
       * @param requiredWidth {Integer?null} The required width for the widget
       *   if available.
       */
      _recalculateOverflow: function _recalculateOverflow(width, requiredWidth) {
        // do nothing if overflow handling is not enabled
        if (!this.getOverflowHandling()) {
          return;
        }

        // get all required sizes
        requiredWidth = requiredWidth || this.getSizeHint().width;
        var overflowWidget = this.getOverflowIndicator();
        var overflowWidgetWidth = 0;
        if (overflowWidget) {
          overflowWidgetWidth = overflowWidget.getSizeHint().width;
        }
        if (width == undefined && this.getBounds() != null) {
          width = this.getBounds().width;
        }

        // if we still don't have a width, than we are not added to a parent
        if (width == undefined) {
          // we should ignore it in that case
          return;
        }

        // if we have not enough space
        if (width < requiredWidth) {
          do {
            // get the next child
            var childToHide = this._getNextToHide();
            // if there is no child to hide, just do nothing
            if (!childToHide) {
              return;
            }
            // get margins or spacing
            var margins = childToHide.getMarginLeft() + childToHide.getMarginRight();
            margins = Math.max(margins, this.getSpacing());
            var childWidth = childToHide.getSizeHint().width + margins;
            this.__P_198_2(childToHide);

            // new width is the requiredWidth - the removed childs width
            requiredWidth -= childWidth;

            // show the overflowWidgetWidth
            if (overflowWidget && overflowWidget.getVisibility() != "visible") {
              overflowWidget.setVisibility("visible");
              // if we need to add the overflow indicator, we need to add its width
              requiredWidth += overflowWidgetWidth;
              // add spacing or margins
              var overflowWidgetMargins = overflowWidget.getMarginLeft() + overflowWidget.getMarginRight();
              requiredWidth += Math.max(overflowWidgetMargins, this.getSpacing());
            }
          } while (requiredWidth > width);

          // if we can possibly show something
        } else if (this.__P_198_0.length > 0) {
          do {
            var removedChild = this.__P_198_0[0];
            // if we have something we can show
            if (removedChild) {
              // get the margins or spacing
              var margins = removedChild.getMarginLeft() + removedChild.getMarginRight();
              margins = Math.max(margins, this.getSpacing());

              // check if the element has been rendered before [BUG #4542]
              if (removedChild.getContentElement().getDomElement() == null) {
                // if not, apply the decorator element because it can change the
                // width of the child with padding e.g.
                removedChild.syncAppearance();
                // also invalidate the layout cache to trigger size hint
                // recalculation
                removedChild.invalidateLayoutCache();
              }
              var removedChildWidth = removedChild.getSizeHint().width;

              // check if it fits in in case its the last child to replace
              var fits = false;
              // if we can remove the overflow widget if its available

              if (this.__P_198_0.length == 1 && overflowWidgetWidth > 0) {
                var addedMargin = margins - this.getSpacing();
                var wouldRequiredWidth = requiredWidth - overflowWidgetWidth + removedChildWidth + addedMargin;
                fits = width > wouldRequiredWidth;
              }

              // if it just fits in || it fits in when we remove the overflow widget
              if (width > requiredWidth + removedChildWidth + margins || fits) {
                this.__P_198_3(removedChild);
                requiredWidth += removedChildWidth;
                // check if we need to remove the overflow widget
                if (overflowWidget && this.__P_198_0.length == 0) {
                  overflowWidget.setVisibility("excluded");
                }
              } else {
                return;
              }
            }
          } while (width >= requiredWidth && this.__P_198_0.length > 0);
        }
      },
      /**
       * Helper to show a toolbar item.
       *
       * @param child {qx.ui.core.Widget} The widget to show.
       */
      __P_198_3: function __P_198_3(child) {
        child.setVisibility("visible");
        this.__P_198_0.shift();
        this.fireDataEvent("showItem", child);
      },
      /**
       * Helper to exclude a toolbar item.
       *
       * @param child {qx.ui.core.Widget} The widget to exclude.
       */
      __P_198_2: function __P_198_2(child) {
        // ignore the call if no child is given
        if (!child) {
          return;
        }
        this.__P_198_0.unshift(child);
        child.setVisibility("excluded");
        this.fireDataEvent("hideItem", child);
      },
      /**
       * Responsible for returning the next item to remove. In It checks the
       * priorities added by {@link #setRemovePriority}. If all priorized widgets
       * already excluded, it takes the widget added at last.
       *
       * @return {qx.ui.core.Widget|null} The widget which should be removed next.
       *   If null is returned, no widget is available to remove.
       */
      _getNextToHide: function _getNextToHide() {
        // get the elements by priority
        for (var i = this.__P_198_1.length - 1; i >= 0; i--) {
          var item = this.__P_198_1[i];
          // maybe a priority is left out and spacers don't have the visibility
          if (item && item.getVisibility && item.getVisibility() == "visible") {
            return item;
          }
        }

        // if there is non found by priority, check all available widgets
        var children = this._getChildren();
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          // ignore the overflow widget
          if (child == this.getOverflowIndicator()) {
            continue;
          }
          // spacer don't have the visibility
          if (child.getVisibility && child.getVisibility() == "visible") {
            return child;
          }
        }
      },
      /**
       * The removal of the toolbar items is priority based. You can change these
       * priorities with this method. The higher a priority, the earlier it will
       * be excluded. Remember to use every priority only once! If you want
       * override an already set priority, use the override parameter.
       * Keep in mind to only use already added items.
       *
       * @param item {qx.ui.core.Widget} The item to give the priority.
       * @param priority {Integer} The priority, higher means removed earlier.
       * @param override {Boolean} true, if the priority should be overridden.
       */
      setRemovePriority: function setRemovePriority(item, priority, override) {
        // security check for overriding priorities
        if (!override && this.__P_198_1[priority] != undefined) {
          throw new Error("Priority already in use!");
        }
        this.__P_198_1[priority] = item;
      },
      // property apply
      _applyOverflowHandling: function _applyOverflowHandling(value, old) {
        // invalidate the own and the parents layout cache because the size hint changes
        this.invalidateLayoutCache();
        var parent = this.getLayoutParent();
        if (parent) {
          parent.invalidateLayoutCache();
        }

        // recalculate if possible
        var bounds = this.getBounds();
        if (bounds && bounds.width) {
          this._recalculateOverflow(bounds.width);
        }

        // if the handling has been enabled
        if (value) {
          // add the resize listener
          this.addListener("resize", this._onResize, this);

          // if the handles has been disabled
        } else {
          this.removeListener("resize", this._onResize, this);

          // set the overflow indicator to excluded
          var overflowIndicator = this.getOverflowIndicator();
          if (overflowIndicator) {
            overflowIndicator.setVisibility("excluded");
          }

          // set all buttons back to visible
          for (var i = 0; i < this.__P_198_0.length; i++) {
            this.__P_198_0[i].setVisibility("visible");
          }
          // reset the removed items
          this.__P_198_0 = [];
        }
      },
      // property apply
      _applyOverflowIndicator: function _applyOverflowIndicator(value, old) {
        if (old) {
          this._remove(old);
        }
        if (value) {
          // check if its a child of the toolbar
          if (this._indexOf(value) == -1) {
            throw new Error("Widget must be child of the toolbar.");
          }
          // hide the widget
          value.setVisibility("excluded");
        }
      },
      /*
      ---------------------------------------------------------------------------
        MENU OPEN
      ---------------------------------------------------------------------------
      */

      __P_198_4: false,
      /**
       * Indicate if a menu could be opened on hover or not.
       *
       * @internal
       * @param value {Boolean} <code>true</code> if a menu could be opened,
       *    <code>false</code> otherwise.
       */
      _setAllowMenuOpenHover: function _setAllowMenuOpenHover(value) {
        this.__P_198_4 = value;
      },
      /**
       * Return if a menu could be opened on hover or not.
       *
       * @internal
       * @return {Boolean} <code>true</code> if a menu could be opened,
       *    <code>false</code> otherwise.
       */
      _isAllowMenuOpenHover: function _isAllowMenuOpenHover() {
        return this.__P_198_4;
      },
      /*
      ---------------------------------------------------------------------------
        PROPERTY APPLY ROUTINES
      ---------------------------------------------------------------------------
      */
      // property apply
      _applySpacing: function _applySpacing(value, old) {
        var layout = this._getLayout();
        value == null ? layout.resetSpacing() : layout.setSpacing(value);
      },
      // property apply
      _applyShow: function _applyShow(value) {
        var children = this._getChildren();
        for (var i = 0; i < children.length; i++) {
          if (children[i].setShow) {
            children[i].setShow(value);
          }
        }
      },
      /*
      ---------------------------------------------------------------------------
        CHILD HANDLING
      ---------------------------------------------------------------------------
      */
      // overridden
      _add: function _add(child, options) {
        qx.ui.toolbar.ToolBar.superclass.prototype._add.call(this, child, options);
        // sync the show property (bug #6743) - but only if show wasn't explicitly set for the child (bug #6823)
        if (child.setShow && !qx.util.PropertyUtil.getUserValue(child, "show")) {
          child.setShow(this.getShow());
        }
        var newWidth = this.getSizeHint().width + child.getSizeHint().width + 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
      },
      // overridden
      _addAt: function _addAt(child, index, options) {
        qx.ui.toolbar.ToolBar.superclass.prototype._addAt.call(this, child, index, options);
        // sync the show property (bug #6743) - but only if show wasn't explicitly set for the child (bug #6823)
        if (child.setShow && !qx.util.PropertyUtil.getUserValue(child, "show")) {
          child.setShow(this.getShow());
        }
        var newWidth = this.getSizeHint().width + child.getSizeHint().width + 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
      },
      // overridden
      _addBefore: function _addBefore(child, before, options) {
        qx.ui.toolbar.ToolBar.superclass.prototype._addBefore.call(this, child, before, options);
        // sync the show property (bug #6743) - but only if show wasn't explicitly set for the child (bug #6823)
        if (child.setShow && !qx.util.PropertyUtil.getUserValue(child, "show")) {
          child.setShow(this.getShow());
        }
        var newWidth = this.getSizeHint().width + child.getSizeHint().width + 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
      },
      // overridden
      _addAfter: function _addAfter(child, after, options) {
        qx.ui.toolbar.ToolBar.superclass.prototype._addAfter.call(this, child, after, options);
        // sync the show property (bug #6743) - but only if show wasn't explicitly set for the child (bug #6823)
        if (child.setShow && !qx.util.PropertyUtil.getUserValue(child, "show")) {
          child.setShow(this.getShow());
        }
        var newWidth = this.getSizeHint().width + child.getSizeHint().width + 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
      },
      // overridden
      _remove: function _remove(child) {
        qx.ui.toolbar.ToolBar.superclass.prototype._remove.call(this, child);
        var newWidth = this.getSizeHint().width - child.getSizeHint().width - 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
      },
      // overridden
      _removeAt: function _removeAt(index) {
        var child = this._getChildren()[index];
        qx.ui.toolbar.ToolBar.superclass.prototype._removeAt.call(this, index);
        var newWidth = this.getSizeHint().width - child.getSizeHint().width - 2 * this.getSpacing();
        this._recalculateOverflow(null, newWidth);
        return child;
      },
      // overridden
      _removeAll: function _removeAll() {
        var children = qx.ui.toolbar.ToolBar.superclass.prototype._removeAll.call(this);
        this._recalculateOverflow(null, 0);
        return children;
      },
      /*
      ---------------------------------------------------------------------------
        UTILITIES
      ---------------------------------------------------------------------------
      */
      /**
       * Add a spacer to the toolbar. The spacer has a flex
       * value of one and will stretch to the available space.
       *
       * @return {qx.ui.core.Spacer} The newly added spacer object. A reference
       *   to the spacer is needed to remove this spacer from the layout.
       */
      addSpacer: function addSpacer() {
        var spacer = new qx.ui.core.Spacer();
        this._add(spacer, {
          flex: 1
        });
        return spacer;
      },
      /**
       * Adds a separator to the toolbar.
       */
      addSeparator: function addSeparator() {
        this.add(new qx.ui.toolbar.Separator());
      },
      /**
       * Returns all nested buttons which contains a menu to show. This is mainly
       * used for keyboard support.
       *
       * @return {Array} List of all menu buttons
       */
      getMenuButtons: function getMenuButtons() {
        var children = this.getChildren();
        var buttons = [];
        var child;
        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];
          if (child instanceof qx.ui.menubar.Button) {
            buttons.push(child);
          } else if (child instanceof qx.ui.toolbar.Part) {
            buttons.push.apply(buttons, child.getMenuButtons());
          }
        }
        return buttons;
      }
    },
    destruct: function destruct() {
      if (this.hasListener("resize")) {
        this.removeListener("resize", this._onResize, this);
      }
    }
  });
  qx.ui.toolbar.ToolBar.$$dbClassInfo = $$dbClassInfo;
})();
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.AbstractSelectBox": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.IMultiSelection": {
        "require": true
      },
      "qx.ui.form.IModelSelection": {
        "require": true
      },
      "qx.ui.core.MMultiSelectionHandling": {
        "require": true
      },
      "qx.ui.form.MModelSelection": {
        "require": true
      },
      "qx.ui.form.ListItem": {
        "construct": true
      },
      "tokenfield.Cache": {
        "construct": true
      },
      "qx.ui.layout.Flow": {
        "construct": true
      },
      "qx.event.type.Focus": {
        "construct": true
      },
      "tokenfield.SelectionManager": {
        "require": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.form.TextField": {},
      "qx.ui.popup.Popup": {},
      "qx.ui.layout.VBox": {},
      "qx.util.TimerManager": {},
      "qx.data.marshal.Json": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright:
       2010 Guilherme R. Aiolfi
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Guilherme R. Aiolfi (guilhermeaiolfi)
       * Christian Boulanger (cboulanger)
       * Tobias Bräutigam (peuter)
  
  ************************************************************************ */

  /**
   * A widget implementing the token field concept known from Mac OS X
   * @see http://developer.apple.com/mac/library/documentation/Cocoa/Conceptual/TokenField_Guide/Introduction/Introduction.html
   * @asset(tokenfield/*)
   */
  qx.Class.define('tokenfield.Token', {
    extend: qx.ui.form.AbstractSelectBox,
    implement: [qx.ui.core.IMultiSelection, qx.ui.form.IModelSelection],
    include: [qx.ui.core.MMultiSelectionHandling, qx.ui.form.MModelSelection],

    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */
    events: {
      /**
       * This event is fired after a list item was added to the list. The
       * {@link qx.event.type.Data#getData} method of the event returns the
       * added item.
       */
      addItem: 'qx.event.type.Data',

      /**
       * This event is fired after a list item has been removed from the list.
       * The {@link qx.event.type.Data#getData} method of the event returns the
       * removed item.
       */
      removeItem: 'qx.event.type.Data',

      /**
       * This event is fired when the widget needs external data. The data dispatched
       * with the event is the string fragment to use to find matching items
       * as the data. The event listener must then load the data from whereever
       * it may come and call populateList() with the string fragment and the
       * received data.
       */
      loadData: 'qx.event.type.Data',

      /**
       * This event is fired when the enter key is pressed in the textfield with
       * tokens or text input present. This can be useful when used as a search box. The event data
       * is the content of the textfield
       */
      enterKeyWithContent: 'qx.event.type.Data'
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
    properties: {
      // /**
      //  * The orientation of the widget
      //  * not implemented
      //  */
      // orientation :
      // {
      //   check : ['horizontal', 'vertical'],
      //   init : 'vertical',
      //   apply : '_applyOrientation'
      // },

      /**
       * The appearance of the widget
       */
      appearance: {
        refine: true,
        init: 'token'
      },

      /**
       * The message prompting the user to type in text
       */
      typeInText: {
        check: 'String',
        nullable: true,
        event: 'changeTypeInText',
        init: 'Type in a search term'
      },

      /**
       * The current hint message
       */
      hintText: {
        check: 'String',
        nullable: true,
        event: 'changeHintText',
        init: null
      },

      /**
       * The message indicating that there were no results
       */
      noResultsText: {
        check: 'String',
        nullable: true,
        init: 'No results'
      },

      /**
       * The message indicating that the application is loading data
       * in response to the user's input
       */
      searchingText: {
        check: 'String',
        nullable: true,
        init: 'Searching...'
      },

      /**
       * The delay in milliseconds before a request is sent
       */
      searchDelay: {
        init: 300
      },

      /**
       * The minimum number of characters before a request is sent
       */
      minChars: {
        init: 2
      },

      /**
       * The maximum number of tokens that can be entered
       */
      tokenLimit: {
        init: null,
        nullable: true
      },

      /**
       * If true, an item on the suggested list of items can be selected only
       * once (and is then removed from the list). If false, the item can be
       * selected multiple times (default).
       */
      selectOnce: {
        init: false,
        check: 'Boolean'
      },

      /**
       * The path to the label in the model
       */
      labelPath: {
        init: 'label',
        event: 'changeLabelPath'
      },

      /**
       * The style of the token. if 'facebook', then the labels are as wide as the containing text
       * (best for horizontal TokenFields). If any other value, the labels span the width of the container
       * widget (best for vertical TokenFields).
       */
      style: {
        init: 'facebook'
      },
      delegate: {
        check: 'Map',
        init: null,
        apply: '_applyDelegate'
      },

      /**
       * A map containing the options for the label binding. The possible keys
       * can be found in the {@link qx.data.SingleValueBinding} documentation.
       */
      labelOptions: {
        nullable: true
      },

      /**
       * A map containing the options for the icon binding. The possible keys
       * can be found in the {@link qx.data.SingleValueBinding} documentation.
       */
      iconOptions: {
        nullable: true
      },

      /**
       * The path to the label in the model
       */
      iconPath: {
        check: 'String',
        init: null,
        event: 'changeIconPath'
      },

      /**
       * Contains the textfield content, when there is no token available
       */
      text: {
        check: 'String',
        init: '',
        event: 'changeText'
      },

      /**
       * Close the popup when there are no results found
       */
      closeWhenNoResults: {
        check: 'Boolean',
        init: false
      },

      /**
       * Whether the close button should be shown in the token
       */
      showCloseButton: {
        check: 'Boolean',
        init: true
      },

      /**
       * These wildcards are allowed in matching token values
       */
      wildcards: {
        check: 'Array',
        init: null
      }
    },

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.ui.form.AbstractSelectBox.constructor.call(this);
      this._tokenClass = qx.ui.form.ListItem;
      this.cache = new tokenfield.Cache();

      this._setLayout(new qx.ui.layout.Flow());

      var textField = this._createChildControl('textfield');

      var label = this._createChildControl('label');

      this.getApplicationRoot().add(label, {
        top: -10,
        left: -1000
      });
      label.setAppearance(textField.getAppearance());
      textField.bind('value', label, 'value');
      textField.addListener('keypress', function () {
        //label.setValue(textField.getValue());
        textField.setWidth(label.getBounds()['width'] + 8);
      }, this);
      textField.addListener('pointerdown', function (e) {
        e.stop();
      });
      this.addListener('click', this._onClick); // forward the focusin and focusout events to the textfield. The textfield
      // is not focusable so the events need to be forwarded manually.

      this.addListener('focusin', function () {
        textField.fireNonBubblingEvent('focusin', qx.event.type.Focus);
      }, this);
      this.addListener('focusout', function () {
        textField.fireNonBubblingEvent('focusout', qx.event.type.Focus);
      }, this);
      textField.setLiveUpdate(true);
      textField.addListener('input', this._onInputChange, this);
      textField.setMinWidth(6);
      this._search = '';
      this._dummy = new qx.ui.form.ListItem();

      this._dummy.setEnabled(false);

      this.bind('hintText', this._dummy, 'label');
      this.getChildControl('list').add(this._dummy);
      this.addListener('appear', function () {
        this.setHintText(this.getTypeInText());
      }, this);
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      SELECTION_MANAGER: tokenfield.SelectionManager,
      _search: null,
      _tokenClass: null,

      /*
      ---------------------------------------------------------------------------
         WIDGET CREATION
      ---------------------------------------------------------------------------
      */
      // overridden
      _createChildControlImpl: function _createChildControlImpl(id) {
        var control;

        switch (id) {
          case 'label':
            control = new qx.ui.basic.Label(); //control.setWidth(10);

            control.hide();
            break;

          case 'button':
            return null;

          case 'textfield':
            control = new qx.ui.form.TextField();
            control.setFocusable(false);
            control.addState('inner'); //control.addListener('changeValue', this._onTextFieldChangeValue, this);

            control.addListener('blur', this.close, this);

            this._add(control);

            break;

          case 'list':
            // Get the list from the AbstractSelectBox
            control = tokenfield.Token.prototype._createChildControlImpl.base.call(this, id); // Change selection mode

            control.setSelectionMode('single');
            break;

          case 'popup':
            control = new qx.ui.popup.Popup(new qx.ui.layout.VBox());
            control.setAutoHide(true);
            control.setKeepActive(true);
            control.addListener('pointerup', this.close, this);
            control.add(this.getChildControl('list'));
            control.addListener('changeVisibility', this._onPopupChangeVisibility, this);
            break;
        }

        return control || tokenfield.Token.prototype._createChildControlImpl.base.call(this, id);
      },

      /**
       * Applies the 'delegate' property
       */
      _applyDelegate: function _applyDelegate(value) {
        if (value) {
          if (value.hasOwnProperty('createItem')) {
            this._tokenClass = value.createItem().constructor;
          } else {
            this._tokenClass = qx.ui.form.ListItem;
          }
        }
      },

      /**
       * Creates a token widget and binds the model data
       * @return {qx.ui.core.Widget}
       */
      _createBoundItem: function _createBoundItem(model) {
        var item = this.__P_423_0();

        this.__P_423_1(model, item);

        return item;
      },

      /**
       * Creates a token widget, usually a {qx.ui.form.ListItem}
       * @return {qx.ui.core.Widget}
       */
      __P_423_0: function __P_423_0() {
        var delegate = this.getDelegate();
        var item;

        if (delegate && delegate.hasOwnProperty('createItem')) {
          item = delegate.createItem();
        } else {
          item = new this._tokenClass();
        }

        if (delegate && delegate.hasOwnProperty('configureItem')) {
          delegate.configureItem(item);
        } else {
          if (item instanceof qx.ui.form.ListItem) {
            item.setRich(true);
          }
        }

        return item;
      },

      /**
       * Binds the model data to the token widget 
       */
      __P_423_1: function __P_423_1(model, item) {
        var delegate = this.getDelegate();

        if (delegate && delegate.bindItem != null) {
          delegate.bindItem(this, model, item);
        } else {
          this.bindDefaultProperties(model, item);
        }
      },

      /**
       * Helper-Method for binding the default properties (label, icon and model)
       * from the model to the target widget.
       *
       * @param model {qx.core.Object} the model the ListItem should be bound to
       * @param item {Number} The internally created and used ListItem.
       */
      bindDefaultProperties: function bindDefaultProperties(model, item) {
        // model
        item.setModel(model);
        model.bind(this.getLabelPath(), item, 'label', this.getLabelOptions()); // if the iconPath is set

        if (this.getIconPath() != null) {
          model.bind(this.getIconPath(), item, 'icon', this.getIconOptions());
        }
      },
      // overridden
      focus: function focus() {
        tokenfield.Token.prototype.focus.base.call(this);
        this.getChildControl('textfield').getFocusElement().focus();
      },
      // overridden
      tabFocus: function tabFocus() {
        var field = this.getChildControl('textfield');
        field.getFocusElement().focus(); //field.selectAllText();
      },
      // overridden
      tabBlur: function tabBlur() {
        var field = this.getChildControl('textfield');
        field.getFocusElement().blur();
      },
      // overridden

      /**
       * @lint ignoreReferenceField(_forwardStates)
       */
      _forwardStates: {
        focused: true
      },

      /*
      ---------------------------------------------------------------------------
         EVENT HANDLERS
      ---------------------------------------------------------------------------
      */
      // overridden
      _onBlur: function _onBlur() {},

      /**
       * Toggles the popup's visibility.
       *
       * @param e {qx.event.type.Mouse} Mouse click event
       */
      _onClick: function _onClick(e) {
        if (this.__P_423_2) {
          this.__P_423_2.removeState('head');
        }

        this.__P_423_2 = null;
        this.toggle();
      },
      // overridden
      _onKeyPress: function _onKeyPress(e) {
        var key = e.getKeyIdentifier();
        var children, index;
        var list = this.getChildControl('popup');
        var textfield = this.getChildControl('textfield');

        if (key === 'Down' && !list.isVisible()) {
          this.open();
          e.stopPropagation();
          e.stop();
        } else if (key === 'Backspace' || key === 'Delete') {
          var value = textfield.getValue();
          children = this._getChildren();
          index = children.indexOf(textfield);

          if (value === null || value === '' && !this.__P_423_2) {
            if (key === 'Delete' && index < children.length - 1) {
              this.__P_423_2 = children[index + 1];

              this.__P_423_2.addState('head');

              this.focus();
            } else if (key === 'Backspace' && index > 0) {
              this.__P_423_2 = children[index - 1];

              this.__P_423_2.addState('head');

              this.focus();
            }
          } else if (this.__P_423_2) {
            this._deselectItem(this.__P_423_2);

            this.__P_423_2 = null;
            this.tabFocus();
            e.stop();
          }
        } else if (key === 'Left' || key === 'Right') {
          var start = textfield.getTextSelectionStart();
          var length = textfield.getTextSelectionLength();
          children = this._getChildren();
          var n_children = children.length;
          var data = this.__P_423_2 ? this.__P_423_2 : textfield;
          index = children.indexOf(data);

          if (data === textfield) {
            if (key === 'Left') index -= 1;else index += 1;
          }

          if (key === 'Left' && index >= 0 && start === 0 && length === 0) {
            this._addBefore(textfield, children[index]);
          } else if (key === 'Right' && index < n_children && start === textfield.getValue().length) {
            this._addAfter(textfield, children[index]);
          }

          if (this.__P_423_2) {
            this.__P_423_2.removeState('head');
          }

          this.__P_423_2 = null; // I really don't know, but FF needs the timer to be able to set the focus right
          // when there is a selected item and the key == 'Left'

          qx.util.TimerManager.getInstance().start(function () {
            this.tabFocus();
          }, null, this, null, 20);
        } else if (key === 'Enter' || key === 'Space') {
          var text = textfield.getValue().trim();

          if (this.__P_423_3 && this.getChildControl('popup').isVisible()) {
            this._selectItem(this.__P_423_3);

            this.__P_423_3 = null;
            this.toggle();
          } else if (key === 'Space') {
            textfield.setValue(text + ' ');
            e.stop();
            return;
          } else if (this.getChildControl('list').getChildren().length === 1 && textfield.getValue() !== '') {
            // if we have exactly one item in the list and text in the textfield, enter will select the item
            this._selectItem(this.getChildControl('list').getChildren()[0]);

            textfield.setValue('');
            this.close();
          } else if (text !== "") {
            // we have tokens and/or textfield input
            data = {};
            data[this.getLabelPath()] = text;
            this.selectItem(data);
            textfield.setValue('');
            this.fireDataEvent('enterKeyWithContent', text);
          } else if (this.getSelection().length) {
            this.fireDataEvent('enterKeyWithContent', "");
          }
        } else if (key === 'Escape') {
          this.close();
        } else if (key !== 'Left' && key !== 'Right') {
          this.getChildControl('list').handleKeyPress(e);
        }
      },

      /**
       * Event listener for <code>input</code> event on the textfield child
       *
       * @param e {qx.event.type.Data} Data Event
       */
      _onInputChange: function _onInputChange(e) {
        var str = e.getData();
        var timer = qx.util.TimerManager.getInstance(); // check for the old listener

        if (this.__P_423_4 !== null) {
          // stop the old one
          timer.stop(this.__P_423_4);
          this.__P_423_4 = null;
        }

        if (str == null || str != null && str.length < this.getMinChars()) {
          this.setText(str);
          this.close();
          return false;
        } // start a new listener to update the controller


        this.__P_423_4 = timer.start(function () {
          this.search(str);
          this.__P_423_4 = null;
        }, 0, this, null, this.getSearchDelay());
      },
      // overridden
      _onListPointerDown: function _onListPointerDown() {
        // Apply pre-selected item (translate quick selection to real selection)
        if (this.__P_423_3) {
          this._selectItem(this.__P_423_3);

          this.__P_423_3 = null;
        }
      },
      // overridden
      _onListChangeSelection: function _onListChangeSelection(e) {
        var current = e.getData();

        if (current.length > 0) {
          // Ignore quick context (e.g. pointerover)
          // and configure the new value when closing the popup afterwards
          var list = this.getChildControl('list');
          var popup = this.getChildControl('popup');
          var context = list.getSelectionContext();

          if (popup.isVisible() && (context === 'quick' || context === 'key')) {
            this.__P_423_3 = current[0];
          } else {
            this.__P_423_3 = null;
          }
        }
      },
      // overridden
      _onPopupChangeVisibility: function _onPopupChangeVisibility() {
        this.tabFocus();
      },

      /*
      ---------------------------------------------------------------------------
         API
      ---------------------------------------------------------------------------
      */

      /**
       * Fire a event to search for a string
       *
       * @param str {String} query to search for
       */
      search: function search(str) {
        this.getChildControl('list').removeAll();

        this._dummy.setLabel(this.getSearchingText());

        this.getChildControl('list').add(this._dummy);
        this.open();
        this._search = str;
        this.fireDataEvent('loadData', str);
      },

      /**
       * Populates the list with the data received from the data source
       *
       * @param str {String} The string fragment that was used for retrieving
       *    the autoocomplete data.
       * @param data {Object} A javascript object that contains the autocomplete
       *    data
       * @return {void}
       */
      populateList: function populateList(str, data) {
        this.cache.add(str, qx.data.marshal.Json.createModel(data));
        var result = this.cache.get(str);
        if (!result) return;
        var list = this.getChildControl('list');
        list.removeAll();

        if (result.getLength() === 0) {
          this.setText(str);

          if (this.isCloseWhenNoResults()) {
            this.close();
          }

          return;
        } else {
          this.resetText();
        }

        this.setLabelOptions({
          converter: function (value) {
            return this.highlight(value, str);
          }.bind(this)
        });

        for (var i = 0; i < result.getLength(); i++) {
          if (!this.getSelectOnce() || this.getSelectOnce() === true && !this._isSelected(result.getItem(i))) {
            var item = this._createBoundItem(result.getItem(i), i);

            this.getChildControl('list').add(item);
          }
        }
      },

      /**
       * Add a token to the list
       * @param data {Object} The data of the token. The label to be
       *      shown must be in the label path ({@link tokenfield.Token#labelPath})
       *      of the model.
       * @param selected {Boolean | undefined} Whether the token should be selected
       */
      addToken: function addToken(data, selected) {
        var model = qx.data.marshal.Json.createModel(data);

        var item = this._createBoundItem(model);

        var list = this.getChildControl('list');

        if (!this.getSelectOnce() || this.getSelectOnce() === true && !this._isSelected(model)) {
          if (list.hasChildren() && list.getChildren()[0] === this._dummy) {
            list.remove(this._dummy);
          }

          list.add(item);
        }

        if (selected && !this._isSelected(model)) {
          this._selectItem(item);
        }
      },

      /**
       * Selects a ListItem that matches the given data's label.
       * If there is none, one gets created.
       * @param data {Map} model
       */
      selectItem: function selectItem(data) {
        var model = qx.data.marshal.Json.createModel(data);
        var label = model.get(this.getLabelPath());
        var item;
        var isInSelection = false;
        this.getSelection().some(function (item) {
          if (item instanceof this._tokenClass && item.getLabel() === label) {
            isInSelection = true;
            return true;
          }
        }, this);

        if (isInSelection) {
          return;
        }

        this.getChildControl('list').getChildren().some(function (child) {
          if (child.getLabel() === label) {
            item = child;
            return true;
          }
        }, this);

        if (!item) {
          item = this._createBoundItem(model);
        }

        this._selectItem(item);
      },

      /**
       * Removes a token from the selection if it matches the data label.
       * @param data {Map} model
       */
      deselectItem: function deselectItem(data) {
        var model = qx.data.marshal.Json.createModel(data);
        var label = model.get(this.getLabelPath());
        this.getSelection().forEach(function (item) {
          if (label && item.getLabel() === label) {
            this._deselectItem(item);

            return true;
          }
        }, this);
      },

      /**
       * Tests and see if the model is already selected or not
       *
       * @param model {qx.core.Object} Model to be tested
       * @returns {Boolean}
       */
      _isSelected: function _isSelected(model) {
        var selection = this.getModelSelection();
        var item = null;

        for (var i = 0; i < selection.getLength(); i++) {
          item = selection.getItem(i);

          if (item && model && item.get(this.getLabelPath()) === model.get(this.getLabelPath())) {
            return true;
          }
        }

        return false;
      },

      /**
       * Removes an item from the selection
       *
       * @param item {qx.ui.form.ListItem} The List Item to be removed from the selection
       */
      _deselectItem: function _deselectItem(item) {
        if (item && item.constructor === this._tokenClass) {
          this.removeFromSelection(item);
          this.fireDataEvent('removeItem', item);
          item.destroy();
        }
      },
      // overridden
      getChildrenContainer: function getChildrenContainer() {
        return this;
      },

      /**
       * Resets the widget
       */
      reset: function reset() {
        this.getSelection().forEach(function (item) {
          if (item instanceof this._tokenClass) {
            this.removeFromSelection(item);
            item.destroy();
          }
        }, this);
        this.getChildren().forEach(function (item) {
          if (item instanceof this._tokenClass) {
            this.remove(item);
            item.destroy();
          }
        }, this);
        this.getChildControl('textfield').setValue('');
        this.getChildControl('list').removeAll();
        this.getChildControl('list').add(this._dummy);
      },

      /**
       * Adds an item to the selection
       *
       * @param old {qx.ui.form.ListItem} The List Item to be added to the selection
       */
      _selectItem: function _selectItem(old) {
        if (old && old.constructor === this._tokenClass) {
          var item = this.getSelectOnce() ? old : this.__P_423_0();
          item.setAppearance('tokenitem');

          if (old.getModel()) {
            item.setLabel(old.getModel().get(this.getLabelPath()));
            item.setModel(old.getModel());
          } else {
            //todo this shouldn't happen.
            this.warn('Cannot select item.');
            return;
          } // close button


          if (this.getShowCloseButton() === false) {
            item.setShow('label');
          } else {
            item.setIconPosition('right');
            item.getChildControl('icon').setAnonymous(false); // clicking on icon deselects item

            item.getChildControl('icon').addListener('click', function (e) {
              if (this.__P_423_2) {
                this.__P_423_2.removeState('head');

                this.__P_423_2 = null;
              }

              this._deselectItem(item);

              e.stop();
              this.tabFocus();
            }, this); // hovering over icon adds the 'close' state

            item.getChildControl('icon').addListener('pointerover', function (e) {
              item.addState('close');
            });
            item.getChildControl('icon').addListener('pointerout', function (e) {
              item.removeState('close');
            }); // hovering over token shows close button
            // this should really be done in the appearance theme

            item.addListener('pointerover', function (e) {
              this.__P_423_5 = item.getChildControl('icon').getSource();
              item.getChildControl('icon').setSource("decoration/window/close-active.png");
            });
            item.addListener('pointerout', function (e) {
              if (this.__P_423_5) {
                item.getChildControl('icon').setSource(this.__P_423_5);
              }
            });
          } // clicking on item adds the 'head' state


          item.addListener('click', function (e) {
            item.addState('head');

            if (this.__P_423_2 != null && this.__P_423_2 !== item) {
              this.__P_423_2.removeState('head');
            }

            this.__P_423_2 = item;
            e.stop();
          }, this); // double-clicking on item reverts token into editable text

          item.addListener('dblclick', function (e) {
            if (this.__P_423_2) {
              this.__P_423_2.removeState('head');

              this.__P_423_2 = null;
            }

            var textfield = this.getChildControl('textfield');

            this._addBefore(textfield, item);

            var label = item.getLabel();

            this._deselectItem(item);

            textfield.setValue(label);
            textfield.selectAllText();
            this.tabFocus();
            this.search(label);
          }, this); // 'facebook' style tokens

          if (this.getStyle() !== 'facebook') {
            item.getChildControl('label').setWidth(this.getWidth() - 29);
          } // insert


          this._addBefore(item, this.getChildControl('textfield'));

          this.addToSelection(item);
          this.fireDataEvent('addItem', item);
          this.getChildControl('textfield').setValue(''); // if the selected one was the last one, include dummy item

          if (this.getChildControl('list').getChildren() && this.getChildControl('list').getChildren().length === 0) {
            this.setHintText(this.getTypeInText());
            this.getChildControl('list').add(this._dummy);
          }
        }
      },

      /**
       * Highlight the searched string fragment
       *
       * @param value {String} The phrase containing the frament to be highlighted
       * @param query {String} The string fragment that should be highlighted
       * @return {String} TODOC
       */
      highlight: function highlight(value, query) {
        // if the query contains a defined wildcard character, skip highlighting
        var isWildcard = this.getWildcards() && this.getWildcards().find(function (w) {
          return query.indexOf(w) > -1;
        }) !== undefined;
        if (isWildcard) return value; // match pattern, ignore errors

        try {
          return value.replace(new RegExp('(?![^&;]+;)(?!<[^<>]*)(' + query + ')(?![^<>]*>)(?![^&;]+;)', 'gi'), '<b>$1</b>');
        } catch (e) {
          return value;
        }
      },

      /**
       * Return the models of the visible tokens
       * @return {Array}
       */
      getTokenModels: function getTokenModels() {
        var models = [];
        this.getChildren().forEach(function (child) {
          if (typeof child.getModel === "function") {
            models.push(child.getModel());
          }
        });
        return models;
      },

      /**
       * Return the labels of the visible tokens
       * @return {Array}
       */
      getTokenLabels: function getTokenLabels() {
        var labels = [];
        this.getChildren().forEach(function (child) {
          if (typeof child.getModel === "function") {
            // todo better check
            labels.push(child.getLabel());
          }
        });
        return labels;
      },

      /**
       * Returns the labels of the tokens and the textfield content, joined together
       * by the given separator.
       * @param tokenSeparator {String} The character to use as separator. Defaults to " ".
       * @return {String}
       */
      getTextContent: function getTextContent(tokenSeparator) {
        if (tokenSeparator === undefined) {
          tokenSeparator = " ";
        }

        var content = [];
        this.getChildren().forEach(function (child) {
          if (child === this._dummy) return;

          if (typeof child.getModel === "function") {
            // todo better check
            content.push(child.getLabel());
          } else if (typeof child.getValue === "function" && child.getValue()) {
            // todo better check
            content.push(child.getValue());
          }
        });
        return content.join(tokenSeparator).trim();
      },

      /**
       * Returns the position of the input field
       * @return {number}
       */
      getInputPosition: function getInputPosition() {
        return this._getChildren().indexOf(this.getChildControl('textfield'));
      }
    },

    /*
     *****************************************************************************
        DESTRUCTOR
     *****************************************************************************
     */
    destruct: function destruct() {
      this._disposeObjects('_dummy', 'cache');
    }
  });
  tokenfield.Token.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Token.js.map?dt=1626055887378
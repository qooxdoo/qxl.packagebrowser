(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Grid": {},
      "qx.ui.form.Form": {},
      "qx.ui.groupbox.GroupBox": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.PasswordField": {},
      "qx.ui.form.TextArea": {},
      "qx.ui.form.ComboBox": {},
      "qx.ui.form.VirtualComboBox": {},
      "qx.ui.form.DateField": {},
      "qx.ui.form.renderer.Single": {},
      "qx.ui.form.SelectBox": {},
      "qx.ui.form.VirtualSelectBox": {},
      "qx.ui.form.List": {},
      "qx.ui.form.RadioButtonGroup": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.Button": {},
      "qx.ui.basic.Label": {},
      "qx.ui.form.ToggleButton": {},
      "qx.ui.form.RepeatButton": {},
      "qx.ui.form.MenuButton": {},
      "qx.ui.form.SplitButton": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.form.Spinner": {},
      "qx.ui.form.Slider": {},
      "qx.ui.form.ListItem": {},
      "qx.data.Array": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.RadioButton": {},
      "qx.ui.form.RadioGroup": {},
      "qx.ui.menu.Button": {}
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
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  qx.Class.define("zx.ui.theme.avocado.demo.FormItems", {
    extend: qx.ui.container.Composite,
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.__P_151_0 = [];
      this._createView();
    },
    members: {
      __P_151_0: null,
      _createView: function _createView() {
        var grid = new qx.ui.layout.Grid(20, 5);
        grid.setColumnFlex(0, 1);
        grid.setColumnFlex(1, 1);
        this.setLayout(grid);
        this.setPadding(10);
        var tabIndex = 1;

        /*****************************************
         * TEXT INPUT
         ****************************************/

        var form = new qx.ui.form.Form();
        var textGroupBox = new qx.ui.groupbox.GroupBox("Text");
        textGroupBox.setLayout(new qx.ui.layout.Canvas());
        this.add(textGroupBox, {
          row: 0,
          column: 0
        });

        // text field
        var textField = new qx.ui.form.TextField();
        textField.setPlaceholder("required");
        textField.setTabIndex(tabIndex++);
        textField.setRequired(true);
        this.__P_151_0.push(textField);
        form.add(textField, "TextField");

        // password field
        var passwordField = new qx.ui.form.PasswordField();
        passwordField.setPlaceholder("password");
        passwordField.setTabIndex(tabIndex++);
        textField.setRequired(true);
        this.__P_151_0.push(passwordField);
        form.add(passwordField, "PasswordField");

        // text area
        var textArea = new qx.ui.form.TextArea();
        textArea.setPlaceholder("placeholder text...");
        textArea.setTabIndex(tabIndex++);
        this.__P_151_0.push(textArea);
        form.add(textArea, "TextArea");

        // combo box
        var comboBox = new qx.ui.form.ComboBox();
        comboBox.setPlaceholder("Pick an item");
        comboBox.setTabIndex(tabIndex++);
        this.__P_151_1(comboBox);
        this.__P_151_0.push(comboBox);
        form.add(comboBox, "ComboBox");

        // virtual combo box
        var virtualComboBox = new qx.ui.form.VirtualComboBox();
        virtualComboBox.setPlaceholder("Pick an item");
        virtualComboBox.setTabIndex(tabIndex++);
        this.__P_151_2(virtualComboBox);
        this.__P_151_0.push(virtualComboBox);
        form.add(virtualComboBox, "VirtualComboBox");

        // date field
        var dateField = new qx.ui.form.DateField();
        dateField.setPlaceholder("Pick a date");
        dateField.setTabIndex(tabIndex++);
        this.__P_151_0.push(dateField);
        form.add(dateField, "DateField");
        var renderedForm = new qx.ui.form.renderer.Single(form);
        textGroupBox.add(renderedForm);

        /*****************************************
         * SELECTION
         ****************************************/

        form = new qx.ui.form.Form();
        var selectionGroupBox = new qx.ui.groupbox.GroupBox("Selection");
        selectionGroupBox.setLayout(new qx.ui.layout.Canvas());
        this.add(selectionGroupBox, {
          row: 1,
          column: 0,
          rowSpan: 2
        });

        // select box
        var selectBox = new qx.ui.form.SelectBox();
        selectBox.setTabIndex(tabIndex++);
        form.add(selectBox, "SelectBox");
        this.__P_151_1(selectBox);
        this.__P_151_0.push(selectBox);

        // virtual select box
        var virtualSelectBox = new qx.ui.form.VirtualSelectBox();
        virtualSelectBox.setTabIndex(tabIndex++);
        form.add(virtualSelectBox, "VirtualSelectBox");
        this.__P_151_2(virtualSelectBox);
        this.__P_151_0.push(virtualSelectBox);

        // list
        var list = new qx.ui.form.List();
        list.setTabIndex(tabIndex++);
        list.setHeight(60);
        list.setWidth(155);
        form.add(list, "List");
        this.__P_151_1(list);
        this.__P_151_0.push(list);

        // radio button group
        var radioButtonGroup = new qx.ui.form.RadioButtonGroup();
        radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 1").set({
          tabIndex: tabIndex++
        }));
        radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 2").set({
          tabIndex: tabIndex++
        }));
        radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 3").set({
          tabIndex: tabIndex++
        }));
        form.add(radioButtonGroup, "RadioButtonGroup");
        this.__P_151_0.push(radioButtonGroup);
        renderedForm = new qx.ui.form.renderer.Single(form);
        selectionGroupBox.add(renderedForm);

        /*****************************************
         * BUTTONS
         ****************************************/

        var buttonGroupBox = new qx.ui.groupbox.GroupBox("Buttons");
        var layout = new qx.ui.layout.Grid(8, 8);
        buttonGroupBox.setLayout(layout);
        layout.setColumnAlign(0, "right", "middle");
        this.add(buttonGroupBox, {
          row: 0,
          column: 1
        });

        // button
        var button = new qx.ui.form.Button("Button").set({
          tabIndex: tabIndex++
        });
        var label = new qx.ui.basic.Label("Button :");
        label.setBuddy(button);
        buttonGroupBox.add(label, {
          row: 0,
          column: 0
        });
        buttonGroupBox.add(button, {
          row: 0,
          column: 1
        });
        this.__P_151_0.push(button);

        // toggle button
        var toggleButton = new qx.ui.form.ToggleButton("ToggleButton").set({
          tabIndex: tabIndex++
        });
        label = new qx.ui.basic.Label("ToggleButton :");
        label.setBuddy(toggleButton);
        buttonGroupBox.add(label, {
          row: 1,
          column: 0
        });
        buttonGroupBox.add(toggleButton, {
          row: 1,
          column: 1
        });
        this.__P_151_0.push(toggleButton);

        // toggle button
        var repeatButton = new qx.ui.form.RepeatButton("0").set({
          tabIndex: tabIndex++
        });
        label = new qx.ui.basic.Label("RepeatButton :");
        label.setBuddy(repeatButton);
        buttonGroupBox.add(label, {
          row: 2,
          column: 0
        });
        buttonGroupBox.add(repeatButton, {
          row: 2,
          column: 1
        });
        this.__P_151_0.push(repeatButton);

        // menu button
        var menuButton = new qx.ui.form.MenuButton("MenuButton", null, this.__P_151_3()).set({
          tabIndex: tabIndex++
        });
        label = new qx.ui.basic.Label("MenuButton :");
        label.setBuddy(menuButton);
        buttonGroupBox.add(label, {
          row: 3,
          column: 0
        });
        buttonGroupBox.add(menuButton, {
          row: 3,
          column: 1
        });
        this.__P_151_0.push(menuButton);

        // split button
        var splitButton = new qx.ui.form.SplitButton("SplitButton", null, this.__P_151_4()).set({
          tabIndex: tabIndex++
        });
        label = new qx.ui.basic.Label("SplitButton :");
        label.setBuddy(splitButton);
        buttonGroupBox.add(label, {
          row: 4,
          column: 0
        });
        buttonGroupBox.add(splitButton, {
          row: 4,
          column: 1
        });
        this.__P_151_0.push(splitButton);

        // Listener
        repeatButton.addListener("execute", function () {
          var tempValue = parseInt(repeatButton.getLabel(), 10) + 1;
          repeatButton.setLabel(tempValue.toString());
        });

        /*****************************************
         * BOOLEAN INPUT
         ****************************************/

        form = new qx.ui.form.Form();
        var booleanGroupBox = new qx.ui.groupbox.GroupBox("Boolean");
        booleanGroupBox.setLayout(new qx.ui.layout.Canvas());
        this.add(booleanGroupBox, {
          row: 1,
          column: 1
        });

        // check box
        var checkBox = new qx.ui.form.CheckBox().set({
          tabIndex: tabIndex++
        });
        form.add(checkBox, "CheckBox");
        this.__P_151_0.push(checkBox);

        // tri-state check box
        var triCheckBox = new qx.ui.form.CheckBox().set({
          tabIndex: tabIndex++,
          triState: true,
          value: null
        });
        form.add(triCheckBox, "Tri-State CheckBox");
        this.__P_151_0.push(triCheckBox);

        // radio button
        var radioButton = new qx.ui.form.RadioButton().set({
          tabIndex: tabIndex++
        });
        form.add(radioButton, "RadioButton");
        this.__P_151_0.push(radioButton);
        renderedForm = new qx.ui.form.renderer.Single(form);
        booleanGroupBox.add(renderedForm);

        /*****************************************
         * NUMBER INPUT
         ****************************************/

        form = new qx.ui.form.Form();
        var numberGroupBox = new qx.ui.groupbox.GroupBox("Number");
        numberGroupBox.setLayout(new qx.ui.layout.Canvas());
        this.add(numberGroupBox, {
          row: 2,
          column: 1
        });

        // spinner
        var spinner = new qx.ui.form.Spinner(0, 50, 100).set({
          tabIndex: tabIndex++
        });
        form.add(spinner, "Spinner");
        this.__P_151_0.push(spinner);

        // slider
        var slider = new qx.ui.form.Slider().set({
          tabIndex: tabIndex++
        });
        slider.setWidth(130);
        form.add(slider, "Slider");
        this.__P_151_0.push(slider);
        slider.bind("value", spinner, "value");
        spinner.bind("value", slider, "value");
        renderedForm = new qx.ui.form.renderer.Single(form);
        numberGroupBox.add(renderedForm);
      },
      __P_151_1: function __P_151_1(widget) {
        for (var i = 0; i < 10; i++) {
          var tempItem = new qx.ui.form.ListItem("Item " + i);
          widget.add(tempItem);
        }
      },
      __P_151_2: function __P_151_2(widget) {
        // Creates the model data
        var model = new qx.data.Array();
        for (var i = 0; i < 300; i++) {
          model.push("Item " + i);
        }
        widget.setModel(model);
      },
      __P_151_3: function __P_151_3() {
        // Creates the option menu
        var optionMenu = new qx.ui.menu.Menu();
        for (var i = 0; i < 3; i++) {
          optionMenu.add(new qx.ui.menu.RadioButton("Option" + i));
        }
        var groupOptions = new qx.ui.form.RadioGroup();
        groupOptions.add.apply(groupOptions, optionMenu.getChildren());

        // create main menu and buttons
        var menu = new qx.ui.menu.Menu();
        for (i = 0; i < 3; i++) {
          var tempButton = new qx.ui.menu.Button("Button" + i);
          menu.add(tempButton);
        }
        var optionButton = new qx.ui.menu.Button("Options", "", null, optionMenu);
        menu.addSeparator();
        menu.add(optionButton);
        return menu;
      },
      __P_151_4: function __P_151_4() {
        var menu = new qx.ui.menu.Menu();
        var site1 = new qx.ui.menu.Button("Website 1");
        var site2 = new qx.ui.menu.Button("Website 2");
        var site3 = new qx.ui.menu.Button("Website 3");
        menu.add(site1);
        menu.add(site2);
        menu.add(site3);
        return menu;
      },
      getWidgets: function getWidgets() {
        return this.__P_151_0;
      }
    }
  });
  zx.ui.theme.avocado.demo.FormItems.$$dbClassInfo = $$dbClassInfo;
})();

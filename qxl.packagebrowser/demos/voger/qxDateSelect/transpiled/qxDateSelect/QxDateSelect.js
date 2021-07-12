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
      "qx.ui.form.IForm": {
        "require": true
      },
      "qx.ui.form.IDateForm": {
        "require": true
      },
      "qx.ui.form.MForm": {
        "require": true
      },
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.form.SelectBox": {},
      "qx.data.controller.List": {},
      "qx.module.util.Array": {},
      "qx.data.Array": {},
      "qx.data.marshal.Json": {},
      "qx.util.StringSplit": {},
      "qx.lang.Type": {},
      "qx.core.Assert": {},
      "qx.core.ValidationError": {},
      "qx.ui.form.ListItem": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxDateSelect.QxDateSelect", {
    extend: qx.ui.core.Widget,
    implement: [qx.ui.form.IForm, qx.ui.form.IDateForm],
    include: [qx.ui.form.MForm],
    properties: {
      focusable: {
        refine: true,
        init: false
      },
      appearance: {
        refine: true,
        init: "qx-date-select"
      },

      /**
       * Determines the order in which
       * the select boxes appear
       *
       */
      format: {
        check: ["DMY", "YDM", "MDY", "YMD", "DYM"],
        init: "DMY",
        apply: "_applyFormat",
        nullable: false
      },

      /**
       * Flag whether the select boxes can be set back to null
       * values. Default `true`.
       *
       */
      allowNull: {
        init: false,
        check: "Boolean",
        apply: "_applyAllowNull"
      },

      /**
       * Selectable years. It can be a range in the format
       * `startYear..endYear"` where `startYear` is smaller
       * than end year or a list of integers.
       */
      years: {
        deferredInit: true,
        nullable: false,
        apply: "_applyYears",
        transform: "_transformYears",
        validate: "_validateYears"
      },

      /**
       * Flag whether the years should be displayed in decending order.
       * Default `true`.
       *
       */
      descendingYears: {
        nullable: false,
        init: true,
        deferredInit: true,
        check: "Boolean",
        apply: "_applyDescendingYears"
      }
    },
    events: {
      /**
       * Whenever the value is changed this event is fired.
       * ** WARNING ** use this event with extreme caution.
       * Every time a select box changes it's selection, this
       * event is fired. This means this event is fired few times
       * before the widget settles to its final value. Don't make
       * any code decisions based on this event.
       *
       *
       */
      changeValue: "qx.event.type.Data"
    },
    construct: function construct(date, format) {
      qx.ui.core.Widget.constructor.call(this);
      var layout = new qx.ui.layout.Grid(6);
      layout.setAllowGrowSpannedCellWidth(true);
      layout.setColumnAlign(0, "left", "top");
      layout.setColumnAlign(1, "center", "top");
      layout.setColumnAlign(2, "right", "top");

      this._setLayout(layout); // days model changes every time a select box is
      // changed so we should listen to it in order to
      // know if the value has changed.


      this.getChildControl("day").addListener("changeSelection", this.__P_5_0, this); // initialize the date range

      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var lastCentury = currentYear - 100;
      this.setYears(lastCentury + ".." + currentYear);

      if (format !== undefined) {
        this.setFormat(format);
      } else {
        this.initFormat();
      }

      this.initDescendingYears();
    },
    members: {
      /**
       * @lint ignoreReferenceField(_forwardStates)
       */
      _forwardStates: {
        focused: true // invalid: true

      },
      // controllers
      __P_5_1: null,
      __P_5_2: null,
      __P_5_3: null,
      // flag to prevent emmitting change value
      __P_5_4: true,

      /**
       * Sets the date
       * @param value {Date} The date to set.
       */
      setValue: function setValue(value) {
        this.__P_5_4 = false; // order matters otherwise February 29 might mess up

        this.__P_5_3.getSelection().setItem(0, value.getFullYear());

        this.__P_5_2.getSelection().setItem(0, value.getMonth());

        this.__P_5_5.getSelection().setItem(0, value.getDate());

        this.__P_5_4 = true;

        this.__P_5_0();
      },
      resetValue: function resetValue(value) {
        this.__P_5_4 = false;
        [this.__P_5_3, this.__P_5_2, this.__P_5_5].forEach(function (controller) {
          controller.getSelection().setItem(0, null);
        }, this);
        this.__P_5_4 = true;

        this.__P_5_0();
      },
      getValue: function getValue(value) {
        var year = this.__P_5_6();

        var month = this.__P_5_7();

        var day = this.__P_5_8();

        var date = new Date(year, month, day, 0, 0); // Javascript overfloods dates. Prevent that

        if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
          return null;
        }

        return date;
      },
      // overridden
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;

        switch (id) {
          case "day":
            control = new qx.ui.form.SelectBox();
            control.setFocusable(true);
            this.__P_5_5 = new qx.data.controller.List(null, control).set({
              allowNull: true,
              nullValueTitle: "Day",
              delegate: {
                bindItem: function bindItem(controller, item, index) {
                  controller.bindProperty("", "label", null, item, index);
                  controller.bindProperty("", "model", null, item, index);
                }
              }
            });
            [this.getChildControl("month"), this.getChildControl("year")].forEach(function (eventTarget) {
              eventTarget.addListener("changeSelection", function () {
                var year = this.__P_5_6();

                var month = this.__P_5_7();

                var model = this.__P_5_9(year, month);

                this.__P_5_10(this.__P_5_5, model);
              }, this);
            }, this);
            break;

          case "month":
            control = new qx.ui.form.SelectBox();
            control.setFocusable(true);
            this.__P_5_2 = new qx.data.controller.List(null, control, "label").set({
              allowNull: true,
              nullValueTitle: "Month",
              delegate: {
                bindItem: function bindItem(controller, item, index) {
                  controller.bindProperty("label", "label", null, item, index);
                  controller.bindProperty("value", "model", null, item, index);
                }
              }
            });

            this.__P_5_10(this.__P_5_2, this._getMonths());

            break;

          case "year":
            control = new qx.ui.form.SelectBox();
            control.setFocusable(true);
            this.__P_5_3 = new qx.data.controller.List(null, control).set({
              allowNull: true,
              nullValueTitle: "Year",
              delegate: {
                bindItem: function bindItem(controller, item, index) {
                  controller.bindProperty("", "label", null, item, index);
                  controller.bindProperty("", "model", null, item, index);
                }
              }
            });
            break;
        }

        return control || qxDateSelect.QxDateSelect.prototype._createChildControlImpl.base.call(this, id);
      },

      /**
       * Return a data array with the days of a given month
       * of a given year
       * @param year {Integer} the year
       * @param month {Integer} the 1 based index of month
       * @return {qx.data.Array} the array of the days
       */
      __P_5_9: function __P_5_9(year, month) {
        var days = new Date(year, month + 1, 0).getDate() || 31; // make it inclusive

        var daysRange = qx.module.util.Array.range(1, days + 1);
        return new qx.data.Array(daysRange);
      },

      /**
       * Function to create a list of months in a year
       * @returns {qx.core.Object} json representation of the months
       * @private
       */
      _getMonths: function _getMonths() {
        var monthList = [{
          value: 0,
          label: this.tr("January")
        }, {
          value: 1,
          label: this.tr("February")
        }, {
          value: 2,
          label: this.tr("March")
        }, {
          value: 3,
          label: this.tr("April")
        }, {
          value: 4,
          label: this.tr("May")
        }, {
          value: 5,
          label: this.tr("June")
        }, {
          value: 6,
          label: this.tr("July")
        }, {
          value: 7,
          label: this.tr("August")
        }, {
          value: 8,
          label: this.tr("September")
        }, {
          value: 9,
          label: this.tr("October")
        }, {
          value: 10,
          label: this.tr("November")
        }, {
          value: 11,
          label: this.tr("December")
        }];
        return qx.data.marshal.Json.createModel(monthList);
      },
      _applyFormat: function _applyFormat(value) {
        this._removeAll();

        var control;
        var parts = qx.util.StringSplit.split(value, "");

        for (var i = 0; i < parts.length; i++) {
          switch (parts[i]) {
            case "D":
              control = this.getChildControl("day");
              break;

            case "M":
              control = this.getChildControl("month");
              break;

            case "Y":
              control = this.getChildControl("year");
              break;

            default:
              throw new Error("This shouldn't happen.");
          }

          this._add(control, {
            row: 0,
            column: i
          });
        }
      },
      _transformYears: function _transformYears(val) {
        if (qx.lang.Type.isArray(val)) {
          return val;
        }

        var range = qx.util.StringSplit.split(val, "..");
        var rangeInts = range.map(function (year) {
          return parseInt(year);
        });
        return qx.module.util.Array.range(rangeInts[0], rangeInts[1] + 1);
      },
      _validateYears: function _validateYears(val) {
        try {
          // eslint-disable-next-line array-callback-return
          val.map(function (year) {
            qx.core.Assert.assertInteger(year);
          });
        } catch (e) {
          throw new qx.core.ValidationError("Validation Error: Invalid value for property years.");
        }
      },
      _applyYears: function _applyYears(value) {
        var model = new qx.data.Array(value);

        this.__P_5_10(this.__P_5_3, model);
      },
      _applyDescendingYears: function _applyDescendingYears(value) {
        var array = this.__P_5_3.getModel().toArray();

        array.sort(function (a, b) {
          return !value ? a - b : b - a;
        });
        var model = new qx.data.Array(array);
        this.__P_5_4 = false;

        this.__P_5_10(this.__P_5_3, model);

        this.__P_5_4 = true;
      },
      _applyAllowNull: function _applyAllowNull(value) {
        var day = this.getChildControl("day");
        var month = this.getChildControl("month");
        var year = this.getChildControl("year");
        [day, month, year].forEach(function (control) {
          var nullItem = this.__P_5_11(control);

          nullItem.setEnabled(value);
        }, this);
      },
      __P_5_0: function __P_5_0() {
        if (this.__P_5_4) {
          this.fireDataEvent("changeValue", this.getValue());
        }
      },
      __P_5_10: function __P_5_10(controller, model) {
        // save old selection to restore it
        var selection = controller.getSelection().getItem(0);
        controller.setModel(model);
        controller.getSelection().setItem(0, selection); // set the nullValue list item

        var control = controller.getTarget();

        var nullItem = this.__P_5_11(control);

        nullItem.setEnabled(this.getAllowNull());
      },

      /**
       * Returns the null item of a child control
       *
       * @param control {qx.ui.form.SelectBox} The child control
       * @return {qx.ui.form.ListItem} The null child select
       */
      __P_5_11: function __P_5_11(control) {
        return control.getChildren().find(function (item) {
          return item.getModel() === null;
        });
      },

      /**
       * Returns a qx.ui.form.ListItem serving as the label for the control
       * @param control {qx.ui.form.SelectBox} the control that we
       * need the label for
       *
       * @return {qx.ui.form.ListItem} the list item serving as a label
       */
      __P_5_12: function __P_5_12(control) {
        return control.getUserData("labelItem");
      },

      /**
       * Creates a list item to be inserted as a label
       * to a select box.
       * @param label {String} the label of the list item
       * @return qx.ui.form.ListItem
       */
      __P_5_13: function __P_5_13(label) {
        var listItem = new qx.ui.form.ListItem(label);
        listItem.setEnabled(false);
        return listItem;
      },
      __P_5_6: function __P_5_6() {
        var selected = this.__P_5_3.getSelection();

        return selected.getItem(0);
      },
      __P_5_7: function __P_5_7() {
        var selected = this.__P_5_2.getSelection();

        return selected.getItem(0);
      },
      __P_5_8: function __P_5_8() {
        var selected = this.__P_5_5.getSelection();

        return selected.getItem(0);
      }
    }
  });
  qxDateSelect.QxDateSelect.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=QxDateSelect.js.map?dt=1626060540750
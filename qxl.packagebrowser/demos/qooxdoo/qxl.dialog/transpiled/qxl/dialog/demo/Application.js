function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qxl.dialog.Dialog": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.log.appender.Native": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.core.Id": {},
      "qx.ui.basic.Label": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.form.RadioButtonGroup": {},
      "qx.ui.layout.HBox": {},
      "qx.theme.manager.Icon": {},
      "qx.Theme": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.Button": {},
      "qx.util.format.DateFormat": {},
      "qx.util.Serializer": {},
      "qxl.dialog.FormEmbed": {},
      "qxl.dialog.MultiColumnFormRenderer": {},
      "qx.ui.layout.Grid": {},
      "qxl.dialog.TabbedMultiColumnFormRenderer": {},
      "qx.util.Validate": {},
      "qxl.dialog.Wizard": {},
      "qxl.dialog.Login": {},
      "qxl.dialog.Progress": {},
      "qx.lang.Function": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo dialog library
     https://github.com/qooxdoo/qxl.dialog
  
     Copyright:
       2007-2019 Christian Boulanger and others
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
  ************************************************************************ */

  /**
   * qxl.dialog demo
   * @asset(dialog/*)
   * @require(qxl.dialog.Dialog)
   */
  qx.Class.define("qxl.dialog.demo.Application", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        qxl.dialog.demo.Application.superclass.prototype.main.call(this);
        qx.log.appender.Native;

        /*
         * button data
         */
        var buttons = [{
          label: "Alert",
          id: "alert",
          method: "createAlert"
        }, {
          label: "Warning",
          id: "warning",
          method: "createWarning"
        }, {
          label: "Error",
          id: "error",
          method: "createError"
        }, {
          label: "Confirm",
          id: "confirm",
          method: "createConfirm"
        }, {
          label: "Prompt",
          id: "prompt",
          method: "createPrompt"
        }, {
          label: "Dialog Chain",
          id: "dialog",
          method: "createDialogChain"
        }, {
          label: "Select among choices",
          id: "select",
          method: "createSelect"
        }, {
          label: "Form",
          id: "form",
          method: "createForm"
        }, {
          label: "Embedded Multi-column Form",
          id: "formEmbed",
          method: "createFormEmbedded"
        }, {
          label: "Embedded, Tabbed Multi-column Form",
          id: "tabbedFormEmbed",
          method: "createTabbedFormEmbedded"
        }, {
          label: "Wizard",
          id: "wizard",
          method: "createWizard"
        }, {
          label: "Login",
          id: "login",
          method: "createLogin"
        }, {
          label: "Progress",
          id: "progress",
          method: "createProgress"
        }, {
          label: "Progress with Log",
          id: "progress_with_log",
          method: "createProgressWithLog"
        }];

        /*
         * dialog button panel
         */
        var button_panel = new qx.ui.container.Composite();
        button_panel.setLayout(new qx.ui.layout.VBox(5));
        button_panel.setQxObjectId("buttons");
        qx.core.Id.getInstance().register(button_panel);
        var title = new qx.ui.basic.Label("<h2>Dialog Demo</h2>");
        title.setRich(true);
        button_panel.add(title);

        // check box
        var blockerCheckBox = new qx.ui.form.CheckBox("Use coloured blocker");
        blockerCheckBox.addListener("changeValue", function (e) {
          qxl.dialog.Dialog.useBlocker(e.getData());
        });
        button_panel.add(blockerCheckBox);

        // icon theme switcher
        var labelHBox = new qx.ui.basic.Label("<strong>Icon Theme</strong>");
        labelHBox.setRich(true);
        button_panel.add(labelHBox);
        var radioButtonGroupHBox = new qx.ui.form.RadioButtonGroup();
        radioButtonGroupHBox.setLayout(new qx.ui.layout.HBox(5));
        button_panel.add(radioButtonGroupHBox);
        radioButtonGroupHBox.addListener("changeSelection", function (e) {
          var theme = e.getData()[0].getModel();
          qx.theme.manager.Icon.getInstance().setTheme(theme);
        });

        // icon theme
        var themes = qx.Theme.getAll();
        var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(themes)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            var theme = themes[key];
            if (theme.type === "meta") {
              //
            }
            if (theme.name.indexOf("qxl.dialog.theme.icon") !== -1) {
              var button = new qx.ui.form.RadioButton(theme.title);
              button.setModel(theme);
              radioButtonGroupHBox.add(button);
            }
          }

          // buttons
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        button_panel.add(new qx.ui.basic.Label("Try out the following dialog widgets:"));
        buttons.forEach(function (button_data) {
          var button = new qx.ui.form.Button(button_data.label);
          button.setQxObjectId(button_data.id);
          button_panel.addOwnedQxObject(button);
          button.addListener("execute", function () {
            this[button_data.method](button_data.label, button);
          }, this);
          if (button_data.enabled !== undefined) {
            button.setEnabled(button_data.enabled);
          }
          blockerCheckBox.addListener("changeValue", function (e) {
            button.getOwnedQxObjects().forEach(function (dialog) {
              dialog.hide();
              dialog.dispose();
            });
          });
          button_panel.add(button);
        }, this);
        this.getRoot().add(button_panel, {
          left: 100,
          top: 100
        });
      },
      _replaceOwnedObject: function _replaceOwnedObject(owner, obj) {
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "dialog";
        try {
          var _obj = owner.getQxObject(id);
          if (_obj) {
            console.log("Removing \"".concat(id, "...\""));
            owner.removeOwnedQxObject(id);
            _obj.hide();
            _obj.dispose();
          }
        } catch (e) {
          console.log("Ignoring error  \"".concat(e.message, "\""));
        }
        obj.setQxObjectId(id);
        owner.addOwnedQxObject(obj);
      },
      createAlert: function createAlert(caption, button) {
        var dlg = qxl.dialog.Dialog.alert("Hello World!").set({
          caption: caption
        });

        // next line is for automated UI tests only, not needed for "normal" usage
        this._replaceOwnedObject(button, dlg);
      },
      createWarning: function createWarning(caption, button) {
        var dlg = qxl.dialog.Dialog.warning("This is a warning!").set({
          caption: caption
        });
        this._replaceOwnedObject(button, dlg);
      },
      createError: function createError(caption, button) {
        var dlg = qxl.dialog.Dialog.error("This is an error!").set({
          caption: caption
        });
        this._replaceOwnedObject(button, dlg);
      },
      createConfirm: function createConfirm(caption, button) {
        var _this = this;
        var dlg = qxl.dialog.Dialog.confirm("Proceed with the some action?").set({
          caption: caption
        });
        this._replaceOwnedObject(button, dlg, "dialog1");
        dlg.promise().then(function (result) {
          var dlg2 = qxl.dialog.Dialog.alert("Your answer was: " + result).set({
            caption: caption + " 2"
          });
          _this._replaceOwnedObject(button, dlg2, "dialog2");
        });
      },
      createPrompt: function createPrompt(caption, button) {
        var _this2 = this;
        var dlg = qxl.dialog.Dialog.prompt("Please enter a message").set({
          caption: caption
        });
        this._replaceOwnedObject(button, dlg, "dialog1");
        dlg.promise().then(function (result) {
          var dlg2 = qxl.dialog.Dialog.alert("Your answer was: " + result).set({
            caption: caption + " 2"
          });
          _this2._replaceOwnedObject(button, dlg2, "dialog2");
        });
      },
      /**
       * Example for nested callbacks
       * @param caption
       * @param button
       */
      createDialogChain: function createDialogChain(caption, button) {
        var _this3 = this;
        var dlg1 = qxl.dialog.Dialog.alert("This demostrates a series of 'nested' dialogs ").set({
          caption: caption
        });
        this._replaceOwnedObject(button, dlg1, "dialog1");
        dlg1.promise().then(function () {
          var dlg2 = qxl.dialog.Dialog.confirm("Do you believe in the Loch Ness monster?").set({
            caption: caption + " 2"
          });
          _this3._replaceOwnedObject(button, dlg2, "dialog2");
          return dlg2.promise();
        }).then(function (result) {
          var dlg3 = qxl.dialog.Dialog.confirm("You really " + (result ? "" : "don't ") + "believe in the Loch Ness monster?").set({
            caption: caption + " 3"
          });
          _this3._replaceOwnedObject(button, dlg3, "dialog3");
          return dlg3.promise();
        }).then(function (result) {
          var dlg4 = qxl.dialog.Dialog.alert(result ? "I tell you a secret: It doesn't exist." : "Good to know.").set({
            caption: caption + " 4"
          });
          _this3._replaceOwnedObject(button, dlg4, "dialog4");
          return dlg4.promise();
        });
      },
      /**
       * Offer a selection of choices to the user
       * @param caption
       * @param button
       */
      createSelect: function createSelect(caption, button) {
        var _this4 = this;
        var dlg1 = qxl.dialog.Dialog.select("Select an option:").set({
          caption: caption,
          options: [{
            label: "Option A",
            value: "a"
          }, {
            label: "Option B",
            value: "b"
          }, {
            label: "Option C",
            value: "c"
          }]
        });
        this._replaceOwnedObject(button, dlg1, "dialog1");
        dlg1.promise().then(function (result) {
          var dlg2 = qxl.dialog.Dialog.alert("You selected: '" + result + "'").set({
            caption: caption + " 2"
          });
          _this4._replaceOwnedObject(button, dlg2, "dialog2");
          return dlg2.promise();
        });
      },
      createForm: function createForm(caption, button) {
        var _this5 = this;
        var formData = {
          username: {
            type: "TextField",
            label: "User Name",
            value: "",
            validation: {
              required: true
            }
          },
          address: {
            type: "TextArea",
            label: "Address",
            lines: 3,
            value: ""
          },
          domain: {
            type: "SelectBox",
            label: "Domain",
            value: 1,
            options: [{
              label: "Company",
              value: 0
            }, {
              label: "Home",
              value: 1
            }],
            events: {
              changeSelection: function changeSelection(e) {
                var selection = e.getData();
                for (var i = 0; i < selection.length; i++) {
                  qxl.dialog.Dialog.alert("Selected item: " + selection[i].getModel().getLabel() + " (" + selection[i].getModel().getValue() + ")");
                }
              }
            }
          },
          commands: {
            type: "ComboBox",
            label: "Shell command to execute",
            value: "",
            options: [{
              label: "ln -s *"
            }, {
              label: "rm -Rf /"
            }]
          },
          save_details: {
            type: "Checkbox",
            label: "Save form details",
            value: true
          },
          executeDate: {
            type: "datefield",
            dateFormat: new qx.util.format.DateFormat("dd.MM.yyyy HH:mm"),
            value: new Date(),
            label: "Execute At"
          },
          area: {
            type: "spinner",
            label: "Area",
            value: 25.5,
            min: -10,
            max: 100,
            step: 0.5,
            fractionsDigits: {
              min: 1,
              max: 7
            },
            properties: {
              maxWidth: 50
            }
          }
        };
        var form = qxl.dialog.Dialog.form("Please fill in the form", formData).set({
          caption: caption
        });
        form.setLabelColumnWidth(200);
        this._replaceOwnedObject(button, form, "dialog");
        form.promise().then(function (result) {
          _this5.debug(qx.util.Serializer.toJson(result));
          return qxl.dialog.Dialog.alert("Thank you for your input. See log for result.").set({
            caption: caption + " 2"
          }).promise();
        });
      },
      createFormEmbedded: function createFormEmbedded(caption, button) {
        var _this6 = this;
        var formData = {
          username: {
            type: "TextField",
            label: "User Name",
            value: "",
            validation: {
              required: true
            }
          },
          address: {
            type: "TextArea",
            label: "Address",
            lines: 3,
            value: "",
            userdata: {
              rowspan: 2
            }
          },
          domain: {
            type: "SelectBox",
            label: "Domain",
            value: 1,
            options: [{
              label: "Company",
              value: 0
            }, {
              label: "Home",
              value: 1
            }]
          },
          commands: {
            type: "ComboBox",
            label: "Shell command to execute",
            value: "",
            options: [{
              label: "ln -s *"
            }, {
              label: "rm -Rf /"
            }]
          },
          list: {
            type: "list",
            label: "Options",
            options: [{
              label: "Option 1",
              value: "opt1"
            }, {
              label: "Option 2",
              value: "opt2"
            }, {
              label: "Option 3",
              value: "opt3"
            }]
          },
          save_details: {
            type: "Checkbox",
            label: "Save form details",
            value: true
          },
          executeDate: {
            type: "datefield",
            dateFormat: new qx.util.format.DateFormat("dd.MM.yyyy HH:mm"),
            value: new Date(),
            label: "Execute At",
            userdata: {
              row: 0,
              column: 2
            }
          },
          area: {
            type: "spinner",
            label: "Area",
            value: 25.5,
            min: -10,
            max: 100,
            step: 0.5,
            fractionsDigits: {
              min: 1,
              max: 7
            },
            properties: {
              maxWidth: 80
            }
          }
        };
        if (this.__P_2_0) {
          this.__P_2_0.hide();
          this.__P_2_0.dispose();
        }
        var form = this.__P_2_0 = new qxl.dialog.FormEmbed({
          message: "Please fill in the form",
          formData: formData,
          setupFormRendererFunction: function setupFormRendererFunction(form) {
            var renderer = new qxl.dialog.MultiColumnFormRenderer(form);
            var layout = new qx.ui.layout.Grid();
            var col = renderer.column;
            layout.setSpacing(6);
            layout.setColumnMaxWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnAlign(col(0), "right", "top");
            layout.setColumnFlex(col(1), 1);
            layout.setColumnAlign(col(1), "left", "top");
            layout.setColumnMaxWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnAlign(col(2), "right", "top");
            layout.setColumnFlex(col(3), 1);
            layout.setColumnAlign(col(3), "left", "top");
            renderer._setLayout(layout);
            return renderer;
          }
        });
        this._replaceOwnedObject(button, form, "dialog");
        this.getRoot().add(form, {
          left: 400,
          top: 100
        });
        form.promise().then(function (result) {
          _this6.debug(qx.util.Serializer.toJson(result));
          return qxl.dialog.Dialog.alert("Thank you for your input. See log for result.").set({
            caption: caption + " 2"
          }).promise();
        });
      },
      createTabbedFormEmbedded: function createTabbedFormEmbedded(caption, button) {
        var _this8 = this;
        var formData = {
          domain: {
            type: "SelectBox",
            label: "Domain",
            value: 1,
            options: [{
              label: "Company",
              value: 0
            }, {
              label: "Home",
              value: 1
            }]
          },
          commands: {
            type: "ComboBox",
            label: "Shell command to execute",
            value: "",
            options: [{
              label: "ln -s *"
            }, {
              label: "rm -Rf /"
            }]
          },
          list: {
            type: "list",
            label: "Options",
            options: [{
              label: "Option 1",
              value: "opt1"
            }, {
              label: "Option 2",
              value: "opt2"
            }, {
              label: "Option 3",
              value: "opt3"
            }]
          },
          save_details: {
            type: "Checkbox",
            label: "Save form details",
            value: true
          },
          executeDate: {
            type: "datefield",
            dateFormat: new qx.util.format.DateFormat("dd.MM.yyyy HH:mm"),
            value: new Date(),
            label: "Execute At",
            userdata: {
              row: 0,
              column: 2
            }
          },
          username: {
            type: "TextField",
            label: "User Name",
            value: "",
            validation: {
              required: true
            },
            userdata: {
              page: 1,
              row: 0,
              column: 0
            }
          },
          address: {
            type: "TextArea",
            label: "Address",
            lines: 3,
            value: "",
            userdata: {
              rowspan: 2
            }
          },
          area: {
            type: "spinner",
            label: "Area",
            value: 25.5,
            min: -10,
            max: 100,
            step: 0.5,
            fractionsDigits: {
              min: 1,
              max: 7
            },
            properties: {
              maxWidth: 80
            },
            userdata: {
              row: 0,
              column: 1
            }
          }
        };
        if (this.__P_2_0) {
          this.__P_2_0.hide();
          this.__P_2_0.dispose();
        }
        var form = this.__P_2_0 = new qxl.dialog.FormEmbed({
          message: "Please fill in the form",
          formData: formData,
          setupFormRendererFunction: function setupFormRendererFunction(form) {
            var _this7 = this;
            var layout;
            var renderer;
            var tabInfo = [];
            var col = qxl.dialog.TabbedMultiColumnFormRenderer.column;
            layout = new qx.ui.layout.Grid();
            layout.setSpacing(6);
            layout.setColumnMaxWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnAlign(col(0), "right", "top");
            layout.setColumnFlex(col(1), 1);
            layout.setColumnAlign(col(1), "left", "top");
            layout.setColumnMaxWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnAlign(col(2), "right", "top");
            layout.setColumnFlex(col(3), 1);
            layout.setColumnAlign(col(3), "left", "top");
            tabInfo.push({
              name: "Execution",
              layout: layout
            });
            layout = new qx.ui.layout.Grid();
            layout.setSpacing(6);
            layout.setColumnMaxWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnWidth(col(0), this.getLabelColumnWidth());
            layout.setColumnAlign(col(0), "right", "top");
            layout.setColumnFlex(col(1), 1);
            layout.setColumnAlign(col(1), "left", "top");
            layout.setColumnMaxWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnWidth(col(2), this.getLabelColumnWidth());
            layout.setColumnAlign(col(2), "right", "top");
            layout.setColumnFlex(col(3), 1);
            layout.setColumnAlign(col(3), "left", "top");
            tabInfo.push({
              name: "Contact",
              layout: layout
            });
            renderer = new qxl.dialog.TabbedMultiColumnFormRenderer(form, tabInfo);

            // We want to know when a tab switch occurs
            renderer.addListener("changeTab", function (e) {
              var tabViewInfo = form.getTabViewInfo();
              var newTabIndex = tabViewInfo.pages.indexOf(e.getData());
              _this7.debug("New tab: " + newTabIndex);
            });
            return renderer;
          }
        });
        this._replaceOwnedObject(button, form, "dialog");
        this.getRoot().add(form, {
          left: 400,
          top: 100
        });
        form.promise().then(function (result) {
          _this8.debug(qx.util.Serializer.toJson(result));
          return qxl.dialog.Dialog.alert("Thank you for your input. See log for result.").set({
            caption: caption + " 2"
          }).promise();
        });
      },
      createWizard: function createWizard(caption) {
        var _this9 = this;
        /*
         * wizard widget
         */
        var pageData = [{
          message: "<p style='font-weight:bold'>Create new account</p><p>Please create a new mail account.</p><p>Select the type of account you wish to create</p>",
          formData: {
            accountTypeLabel: {
              type: "label",
              label: "Please select the type of account you wish to create."
            },
            accountType: {
              type: "radiogroup",
              label: "Account Type",
              options: [{
                label: "E-Mail",
                value: "email"
              }, {
                label: ".mac",
                value: ".mac"
              }, {
                label: "RSS-Account",
                value: "rss"
              }, {
                label: "Google Mail",
                value: "google"
              }, {
                label: "Newsgroup Account",
                value: "news"
              }]
            }
          }
        }, {
          message: "<p style='font-weight:bold'>Identity</p><p>This information will be sent to the receiver of your messages.</p>",
          formData: {
            label1: {
              type: "label",
              label: "Please enter your name as it should appear in the 'From' field of the sent message. "
            },
            fullName: {
              type: "textfield",
              label: "Your Name",
              validation: {
                required: true
              }
            },
            label2: {
              type: "label",
              label: "Please enter your email address. This is the address used by others to send you messages."
            },
            email: {
              type: "textfield",
              label: "E-Mail Address",
              validation: {
                required: true,
                validator: qx.util.Validate.email()
              }
            },
            birthday: {
              type: "datefield",
              label: "Birthday"
            }
          }
        }, {
          message: "<p style='font-weight:bold'>Account</p><p>Bla bla bla.</p>",
          formData: {
            serverType: {
              type: "radiogroup",
              orientation: "horizontal",
              label: "Select the type of email server",
              options: [{
                label: "POP",
                value: "pop"
              }, {
                label: "IMAP",
                value: "imap"
              }]
            },
            serverAddressLabel: {
              type: "label",
              label: "Please enter the server for the account."
            },
            serverAddress: {
              type: "textfield",
              label: "E-Mail Server",
              validation: {
                required: true
              }
            }
          }
        }, {
          message: "<p style='font-weight:bold'>Username</p><p>Bla bla bla.</p>",
          formData: {
            emailUserName: {
              type: "textfield",
              label: "Inbox server user name:"
            }
          }
        }];
        var wizard = new qxl.dialog.Wizard({
          width: 500,
          maxWidth: 500,
          pageData: pageData,
          allowCancel: true,
          callback: function callback(map) {
            qxl.dialog.Dialog.alert("Thank you for your input. See log for result.");
            _this9.debug(qx.util.Serializer.toJson(map));
          },
          caption: caption
        });
        wizard.start();
      },
      /**
       * Creates a sample login widget
       * @param caption
       * @param button
       */
      createLogin: function createLogin(caption, button) {
        var loginWidget = new qxl.dialog.Login({
          image: "dialog/logo.gif",
          text: "Please log in, using 'demo'/'demo'",
          checkCredentials: this.checkCredentials,
          callback: this.finalCallback.bind(this),
          showForgotPassword: true,
          caption: caption,
          forgotPasswordHandler: function forgotPasswordHandler() {
            window.alert("Too bad. I cannot remember it either.");
          }
        });
        this._replaceOwnedObject(button, loginWidget, "window");

        // you can optionally attach event listeners, for example to
        // do some animation (for example, an Mac OS-like "shake" effect)
        loginWidget.addListener("loginSuccess", function (e) {
          // do something to indicated that the user has logged in!
        });
        loginWidget.addListener("loginFailure", function (e) {
          // User rejected! Shake your login widget!
        });
        loginWidget.show();
        this.__P_2_1 = loginWidget;
      },
      /**
       * Sample asyncronous function for checking credentials that takes the
       * username, password and a callback function as parameters. After performing
       * the authentication, the callback is called with the result, which should
       * be undefined or null if successful, and the error message if the
       * authentication failed. If the problem was not the authentication, but some
       * other exception, you could pass an error object.
       * @param username {String}
       * @param password {String}
       * @param callback {Function} The callback function that needs to be called with
       * (err, data) as arguments
       */
      checkCredentials: function checkCredentials(username, password, callback) {
        if (username === "demo" && password === "demo") {
          callback(null, username);
        } else {
          callback("Wrong username or password!");
        }
      },
      /**
       * Sample final callback to react on the result of the authentication
       * @param err {String|Error|undefined|null}
       * @param data
       */
      finalCallback: function finalCallback(err, data) {
        if (err) {
          var loginError = qxl.dialog.Dialog.alert(err).set({
            caption: "Login Error"
          });
          this._replaceOwnedObject(this.__P_2_1, loginError, "error");
        } else {
          var loginSuccess = qxl.dialog.Dialog.alert("User '" + data + "' is now logged in.").set({
            caption: "Login Success"
          });
          this._replaceOwnedObject(this.__P_2_1, loginSuccess, "success");
        }
      },
      createProgress: function createProgress(caption) {
        var progressWidget = new qxl.dialog.Progress({
          caption: caption,
          allowCancel: true
        });
        progressWidget.show().promise().then(function (result) {
          console.log("Progress widget returned: " + result);
        });
        var counter = 0;
        (function incrementProgress() {
          progressWidget.set({
            progress: counter,
            message: counter + "% completed",
            allowCancel: true
          });
          if (counter++ === 100) {
            return;
          }
          qx.lang.Function.delay(incrementProgress, 100);
        })();
      },
      createProgressWithLog: function createProgressWithLog(caption) {
        var cancelled = false; // used in closures
        var progressWidget = new qxl.dialog.Progress({
          showLog: true,
          caption: caption,
          okButtonText: "Continue",
          allowCancel: true,
          hideWhenCancelled: false
        });
        progressWidget.show().promise().then(function (result) {
          if (!result) {
            // user clicked on "cancel" button, can also be intercepted by listening
            // to the "cancel event"
            cancelled = true;
          }
          console.log("Progress widget returned: " + result);
        });
        var counter = 0;
        var abortMessage = false;
        (function textProgress() {
          if (cancelled) {
            progressWidget.set({
              progress: counter,
              message: "Aborting..."
            });
            if (!abortMessage) {
              progressWidget.setNewLogText("Aborting...");
              abortMessage = true;
            }
          } else {
            progressWidget.set({
              progress: counter,
              message: counter + "% completed"
            });
            if (counter % 10 === 0) {
              progressWidget.setNewLogText(counter + "% completed");
            }
          }
          if (counter++ === 100) {
            var msg = cancelled ? "Cancelled." : "Completed.";
            progressWidget.set({
              newLogText: msg,
              message: msg
            });
            return;
          }
          if (cancelled) {
            qx.lang.Function.delay(textProgress, 5);
          } else {
            qx.lang.Function.delay(textProgress, 100);
          }
        })();
      }
    }
  });
  qxl.dialog.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

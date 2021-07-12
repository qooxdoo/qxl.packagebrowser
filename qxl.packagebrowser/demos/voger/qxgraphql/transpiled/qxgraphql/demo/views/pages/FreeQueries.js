function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.tabview.Page": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Dock": {},
      "qxgraphql.HTTP": {},
      "qx.ui.form.renderer.Single": {},
      "qxgraphql.demo.layout.renderer.FreeQueries": {},
      "qx.ui.form.Form": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.TextArea": {},
      "qx.ui.form.Button": {},
      "qx.bom.Font": {},
      "qxgraphql.Query": {},
      "qx.data.marshal.Json": {},
      "qx.data.controller.Form": {},
      "qx.log.Logger": {},
      "qx.data.controller.Object": {},
      "qxgraphql.demo.views.ButtonsContainer": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.demo.views.pages.FreeQueries", {
    extend: qx.ui.tabview.Page,
    construct: function construct(label, icon) {
      qx.ui.tabview.Page.constructor.call(this, label, icon);
      this.init();
    },
    events: {
      "changeService": "qx.event.type.Data"
    },
    properties: {
      service: {
        deferredInit: true,
        event: "changeService"
      }
    },
    members: {
      __P_20_0: null,
      __P_20_1: null,
      init: function init() {
        this.setLayout(new qx.ui.layout.Dock(30));
        this.initService(new qxgraphql.HTTP());

        var urlForm = this.__P_20_2();

        this.add(new qx.ui.form.renderer.Single(urlForm), {
          edge: "north"
        });

        var buttonsField = this.__P_20_3();

        this.add(buttonsField, {
          edge: "south",
          height: "10%"
        }); // add the result field

        var resultField = this.__P_20_4();

        this.add(resultField, {
          edge: "east",
          width: "50%"
        });

        var queryForm = this.__P_20_5();

        var renderedForm = new qxgraphql.demo.layout.renderer.FreeQueries(queryForm);
        this.add(renderedForm, {
          edge: "west",
          width: "50%"
        });
      },
      __P_20_2: function __P_20_2() {
        var form = new qx.ui.form.Form();
        var urlField = new qx.ui.form.TextField();
        urlField.setRequired(true); // if service is set then setup binding

        var service = this.getService();
        urlField.bind("changeValue", service, "url");
        form.add(urlField, "Server Address"); // FIXME: next line should be removed after we finish with this

        urlField.setValue("https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr");
        return form;
      },
      __P_20_5: function __P_20_5() {
        var form = new qx.ui.form.Form(); // Add a box to type the queries

        var queryBox = new qx.ui.form.TextArea();
        queryBox.setRequired(true);
        form.add(queryBox, "Query", null, "query", null, {
          flex: 4
        }); // Add a box to type the variables

        var variablesBox = new qx.ui.form.TextArea();
        variablesBox.addListener("input", function () {
          variablesBox.setValid(true);
        }, this);
        form.add(variablesBox, "Variables", null, "variables", null, {
          flex: 1
        }); // Add a button to perform the query

        var execButton = new qx.ui.form.Button("\u25B6");
        execButton.setFont(qx.bom.Font.fromString("24px sans-serif bold"));
        execButton.setCenter(true);
        execButton.addListener("execute", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var service, resultModel, formModel, request, response, result, _toString;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // check that the query form is valid and url is not a falsy value
                  service = this.getService();

                  if (!(form.validate() && service.getUrl())) {
                    _context.next = 17;
                    break;
                  }

                  resultModel = this.__P_20_1.getModel();
                  _context.prev = 3;
                  formModel = this.__P_20_0.getModel();
                  _context.next = 7;
                  return service.send(formModel);

                case 7:
                  request = _context.sent;
                  response = request.getResponse();
                  result = JSON.stringify(response, null, 2);
                  resultModel.setResult(result);
                  _context.next = 17;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](3);
                  _toString = _context.t0.toString();
                  resultModel.setResult(_toString);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 13]]);
        })), this);
        form.addButton(execButton); // create form model from qxgraphql.Query

        var delegate = {
          getModelClass: function getModelClass(properties, object) {
            return qxgraphql.Query;
          }
        }; // Create a model based on the query Object

        var queryObject = new qxgraphql.Query();
        var marshaler = new qx.data.marshal.Json(delegate);
        marshaler.toClass(queryObject);
        var model = marshaler.toModel(queryObject);
        var formController = this.__P_20_0 = new qx.data.controller.Form(model, form);
        var model2query = {
          converter: function converter(data, model, source, target) {
            // disable binding back
            return target.getValue();
          }
        };
        formController.addBindingOptions("query", model2query);
        var model2variables = {
          converter: function converter(data, model, source, target) {
            return target.getValue();
          }
        };

        var _this = this;

        var variables2model = {
          onSetFail: function onSetFail(exception) {
            variablesBox.setValid(false);
            formController.getModel().resetVariables();
          },
          converter: function converter(data) {
            var result = null;

            if (data === "") {
              result = null;
            } else {
              try {
                result = JSON.parse(data);
              } catch (e) {
                qx.log.Logger.error(_this, "Cannot parse variables data from: ", data); // let the model reject it so it can trigger onSetFail

                result = data;
              }
            }

            return result;
          }
        };
        formController.addBindingOptions("variables", model2variables, variables2model);
        return form;
      },
      __P_20_4: function __P_20_4() {
        var resultField = new qx.ui.form.TextArea();
        resultField.setMarginTop(27);
        resultField.setReadOnly(true);
        var model = qx.data.marshal.Json.createModel({
          result: null
        });
        this.__P_20_1 = new qx.data.controller.Object(model);

        this.__P_20_1.addTarget(resultField, "value", "result");

        return resultField;
      },
      __P_20_3: function __P_20_3() {
        return new qxgraphql.demo.views.ButtonsContainer(this);
      }
    }
  });
  qxgraphql.demo.views.pages.FreeQueries.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FreeQueries.js.map?dt=1626060597956
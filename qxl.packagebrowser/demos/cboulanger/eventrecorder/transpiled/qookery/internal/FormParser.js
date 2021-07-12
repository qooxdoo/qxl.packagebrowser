(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qookery.IFormParser": {
        "require": true
      },
      "qookery.internal.Registry": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dom.Element": {},
      "qx.dom.Hierarchy": {},
      "qx.dom.Node": {},
      "qx.lang.String": {},
      "qookery.util.Xml": {},
      "qookery.IComponent": {},
      "qookery.IFormComponent": {},
      "qx.lang.Type": {},
      "qx.lang.Object": {},
      "qookery.IContainerComponent": {},
      "qookery.Qookery": {},
      "qx.xml.Document": {},
      "qx.locale.Manager": {},
      "qookery.util.Debug": {},
      "qx.log.Logger": {},
      "qx.bom.MediaQuery": {}
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
   * The FormParser will parse a form XML document to create
   * a fully populated IFormComponent into a container composite
   */
  qx.Class.define("qookery.internal.FormParser", {
    extend: qx.core.Object,
    implement: [qookery.IFormParser],
    statics: {
      __P_9_0: qookery.internal.Registry.getInstance()
    },
    construct: function construct(variables, serviceResolver) {
      qx.core.Object.constructor.call(this);
      this.__P_9_1 = variables;
      this.__P_9_2 = serviceResolver;
    },
    members: {
      __P_9_1: null,
      __P_9_2: null,
      // IFormParser implementation
      parseXmlDocument: function parseXmlDocument(xmlDocument, parentComponent) {
        if (xmlDocument == null) throw new Error("An XML form must be supplied");

        var component = this.__P_9_3(xmlDocument, parentComponent);

        if (component == null) throw new Error("No Qookery component found within XML document");
        return component;
      },
      // Internal methods
      __P_9_3: function __P_9_3(blockElement, component) {
        if (!qx.dom.Element.hasChildren(blockElement)) return null;
        var selectionMade = false;
        return qx.dom.Hierarchy.getChildElements(blockElement).reduce(function (previousResult, statementElement) {
          var elementQName = qx.dom.Node.getName(statementElement);
          if (elementQName === "parsererror") throw new Error(qx.lang.String.format("Parser error in statement block: %1", [qx.dom.Node.getText(statementElement)]));
          var namespaces = qookery.util.Xml.getNamespaceDeclarations(statementElement);
          var elementQName = qx.dom.Node.getName(statementElement);
          var elementName = qookery.util.Xml.resolveQName(function (prefix) {
            if (namespaces != null) {
              var namespaceUri = namespaces[prefix];
              if (namespaceUri != null) return namespaceUri;
            }

            if (component != null) {
              return component.resolveNamespacePrefix(prefix);
            }

            return null;
          }, elementQName); // First consult the component registry

          if (this.constructor.__P_9_0.isComponentTypeAvailable(elementName)) {
            return this.__P_9_4(statementElement, component, elementName, namespaces);
          } // Assert that we are within the context of a component


          if (component == null) throw new Error("Flow control and other non-component statements must appear with the context of a component"); // Then check a number of special elements known by parser

          switch (elementName) {
            case "{http://www.qookery.org/ns/Form}else":
              if (selectionMade) return previousResult;

            /* fall through */

            case "{http://www.qookery.org/ns/Form}if":
              selectionMade = this.__P_9_5(statementElement, component);
              return previousResult;

            case "{http://www.qookery.org/ns/Form}script":
              this.__P_9_6(statementElement, component);

              return previousResult;

            case "{http://www.qookery.org/ns/Form}switch":
              this.__P_9_7(statementElement, component);

              return previousResult;

            case "{http://www.w3.org/2001/XInclude}include":
              this.__P_9_8(statementElement, component);

              return previousResult;
          } // Lastly, attempt to delegate element parsing to current component


          if (component.parseXmlElement(elementName, statementElement)) return previousResult; // Tough luck with this element, interrupt parser progress here

          throw new Error(qx.lang.String.format("Unexpected element '%1' encountered in statement block", [elementName]));
        }.bind(this), null);
      },
      __P_9_4: function __P_9_4(componentElement, parentComponent, componentName, namespaces) {
        // Instantiate and initialize new component
        var component = this.constructor.__P_9_0.createComponent(componentName, parentComponent);

        try {
          // Set component attributes
          var componentId = qookery.util.Xml.getAttribute(componentElement, "id");
          if (componentId != null) component.setAttribute(qookery.IComponent.A_ID, componentId);
          if (namespaces != null) component.setAttribute(qookery.IComponent.A_NAMESPACES, namespaces); // Additional attributes applicable exclusively to forms

          if (qx.Class.implementsInterface(component.constructor, qookery.IFormComponent)) {
            component.setAttribute(qookery.IFormComponent.A_SERVICE_RESOLVER, this.__P_9_2);
            component.setAttribute(qookery.IFormComponent.A_VARIABLES, this.__P_9_1);
            var translationPrefix = qookery.util.Xml.getAttribute(componentElement, "translation-prefix") || componentId;
            if (translationPrefix != null) component.setAttribute(qookery.IFormComponent.A_TRANSLATION_PREFIX, translationPrefix);
          } // Register component into its form


          if (componentId != null && parentComponent != null) parentComponent.getForm().putComponent(componentId, component); // Attribute parsing

          var attributes = qookery.util.Xml.parseAllAttributes(component, componentElement);
          var useAttributes = qookery.util.Xml.getAttribute(componentElement, "use-attributes");
          if (useAttributes != null) useAttributes.split(/\s+/).forEach(function (variableName) {
            var useAttributes = component.getForm().getVariable(variableName);
            if (!qx.lang.Type.isObject(useAttributes)) throw new Error("Variable specified in use-attributes not found or of incorrect type");
            qx.lang.Object.mergeWith(attributes, useAttributes);
          }); // Component creation

          component.create(attributes); // Children parsing

          this.__P_9_3(componentElement, component); // Component setup


          component.setup(); // Attach to container

          if (parentComponent != null) {
            var display = qookery.util.Xml.getAttribute(componentElement, "display", "inline");

            switch (display) {
              case "inline":
                if (!qx.Class.hasInterface(parentComponent.constructor, qookery.IContainerComponent)) throw new Error("Attempted to add a component to a non-container component");
                parentComponent.add(component);
                break;

              case "none":
                // Do nothing
                break;

              default:
                throw new Error("Unsupported display attribute value");
            }
          } // Return new component


          var c = component;
          component = null;
          return c;
        } finally {
          // Prevent memory leaks in case component creation failed midway
          if (component != null) component.dispose();
        }
      },
      __P_9_8: function __P_9_8(xIncludeElement, parentComponent) {
        var formUrl = qookery.util.Xml.getAttribute(xIncludeElement, "href", Error);
        formUrl = qookery.util.Xml.parseValue(parentComponent, "ReplaceableString", formUrl);
        var xmlString = qookery.Qookery.getService("qookery.IResourceLoader", true).loadResource(formUrl);
        var xmlDocument = qx.xml.Document.fromString(xmlString);
        var formParser = new qookery.internal.FormParser(this.__P_9_1, this.__P_9_2);

        try {
          var component = formParser.parseXmlDocument(xmlDocument, parentComponent);
          var xmlIdAttribute = xIncludeElement.attributes["xml:id"];
          if (xmlIdAttribute != null) parentComponent.getForm().putComponent(xmlIdAttribute.value, component);
          return component;
        } catch (e) {
          this.error("Error creating form editor", e);
        } finally {
          formParser.dispose();
        }
      },
      __P_9_5: function __P_9_5(selectionElement, component) {
        var expression = qookery.util.Xml.getAttribute(selectionElement, "expression");

        if (expression != null) {
          var result = component.evaluateExpression(expression);
          if (!result) return false;
        }

        var mediaQuery = qookery.util.Xml.getAttribute(selectionElement, "media-query");

        if (mediaQuery != null) {
          var query = this.__P_9_9(mediaQuery);

          if (!query.isMatching()) return false;
        }

        var language = qookery.util.Xml.getAttribute(selectionElement, "{http://www.w3.org/XML/1998/namespace}lang");

        if (language != null) {
          if (qx.locale.Manager.getInstance().getLanguage() != language) return false;
        }

        this.__P_9_3(selectionElement, component);

        return true;
      },
      __P_9_6: function __P_9_6(scriptElement, component) {
        // Load source code
        var sourceCode = qookery.util.Xml.getNodeText(scriptElement);
        var scriptUrl = qookery.util.Xml.getAttribute(scriptElement, "source");
        if (scriptUrl != null) sourceCode = qookery.Qookery.getService("qookery.IResourceLoader", true).loadResource(scriptUrl);
        if (sourceCode == null) throw new Error("Empty <script> element"); // Compile script function

        var functionConstructorArgs = ["$"];
        var argumentNames = qookery.util.Xml.getAttribute(scriptElement, "arguments");

        if (argumentNames != null) {
          Array.prototype.push.apply(functionConstructorArgs, argumentNames.split(/\s+/));
        } else if (qookery.util.Xml.getAttribute(scriptElement, "event") != null) {
          // For backward compatibility, add the implied "event" argument
          functionConstructorArgs.push("event");
        }

        functionConstructorArgs.push(sourceCode);
        var scriptFunction;

        try {
          scriptFunction = Function.apply(null, functionConstructorArgs);
        } catch (e) {
          throw new Error("Error compiling script '" + sourceCode.truncate(50) + "': " + e.message);
        } // Preload some XML attributes


        var actionNames = qookery.util.Xml.getAttribute(scriptElement, "action");
        var functionNames = qookery.util.Xml.getAttribute(scriptElement, "name");
        var eventNames = qookery.util.Xml.getAttribute(scriptElement, "event");
        var mediaQuery = qookery.util.Xml.getAttribute(scriptElement, "media-query");
        var onlyOnce = qookery.util.Xml.getAttribute(scriptElement, "once") === "true";
        var preventRecursion = qookery.util.Xml.getAttribute(scriptElement, "recursion") === "prevent";
        var debounceMillis = parseInt(qookery.util.Xml.getAttribute(scriptElement, "debounce"), 10) || 0;
        var execute = qookery.util.Xml.getAttribute(scriptElement, "execute") === "true";
        if (!execute && actionNames == null && functionNames == null && eventNames == null && mediaQuery == null) execute = true; // Create list of target components

        var componentIds = qookery.util.Xml.getAttribute(scriptElement, "component");
        var components = componentIds == null ? [component] : componentIds.split(/\s+/).map(function (componentId) {
          return component.getForm().getComponent(componentId, true);
        }); // Apply requested operations to all target components

        components.forEach(function (component) {
          var _componentFunction = function componentFunction() {
            if (component.isDisposed()) return;
            if (preventRecursion && _componentFunction.__P_9_10 === true) return;
            var scriptArguments = Array.prototype.slice.call(arguments);
            scriptArguments.unshift(component.getForm().getScriptingContext());

            try {
              _componentFunction.__P_9_10 = true;
              return scriptFunction.apply(component, scriptArguments);
            } catch (error) {
              qookery.util.Debug.logScriptError(component, scriptFunction.toString(), error);
              throw error;
            } finally {
              _componentFunction.__P_9_10 = false;
            }
          };

          if (debounceMillis > 0) {
            var debounceFunction = _componentFunction;

            _componentFunction = function _componentFunction() {
              var timerId = debounceFunction.__P_9_11;

              if (timerId != null) {
                debounceFunction.__P_9_11 = null;
                clearTimeout(timerId);
              }

              var bindArguments = [this];
              Array.prototype.push.apply(bindArguments, arguments);
              var setTimoutFunction = Function.prototype.bind.apply(debounceFunction, bindArguments);
              debounceFunction.__P_9_11 = setTimeout(setTimoutFunction, debounceMillis);
            };
          }

          if (mediaQuery != null) {
            var query = this.__P_9_9(mediaQuery);

            if (!(execute && onlyOnce)) {
              var methodName = onlyOnce ? "addListenerOnce" : "addListener";
              var listenerId = query[methodName]("change", function (data) {
                _componentFunction(data["matches"], data["query"]);
              });
              component.addToDisposeList({
                dispose: function dispose() {
                  query.removeListenerById(listenerId);
                }
              });
            }

            if (execute) _componentFunction(query.isMatching(), mediaQuery);
          } else {
            if (functionNames != null) functionNames.split(/\s+/).forEach(function (functionName) {
              component.getForm().getScriptingContext()[functionName] = _componentFunction;
            });
            if (actionNames != null) actionNames.split(/\s+/).forEach(function (actionName) {
              component.setAction(actionName, _componentFunction);
            });
            if (eventNames != null) eventNames.split(/\s+/).forEach(function (eventName) {
              // Event handlers are wrapped into try-catch blocks in order to ensure subsequent handlers will be called
              component.addEventHandler(eventName, function (varargs) {
                try {
                  _componentFunction.apply(component, arguments);
                } catch (error) {
                  qx.log.Logger.error(component, "Event handler ", eventName, " error:", error);
                }
              }, onlyOnce);
            });
            if (execute) _componentFunction();
          }
        }, this);
      },
      __P_9_7: function __P_9_7(switchElement, component) {
        if (!qx.dom.Element.hasChildren(switchElement)) return;
        var switchExpression = qookery.util.Xml.getAttribute(switchElement, "expression", Error);
        var switchResult = component.evaluateExpression(switchExpression);
        var children = qx.dom.Hierarchy.getChildElements(switchElement);

        for (var i = 0; i < children.length; i++) {
          var caseElement = children[i];
          var elementName = qx.dom.Node.getName(caseElement);
          if (elementName !== "case") throw new Error(qx.lang.String.format("Unexpected element in switch block: %1", [qx.dom.Node.getText(switchElement)]));
          var caseExpression = qookery.util.Xml.getAttribute(caseElement, "expression");

          if (caseExpression != null) {
            var caseResult = component.evaluateExpression(caseExpression);
            if (caseResult != switchResult) continue;
          }

          this.__P_9_3(caseElement, component);

          return true;
        }

        return false;
      },
      __P_9_9: function __P_9_9(mediaQuery) {
        var query = this.constructor.__P_9_0.getMediaQuery(mediaQuery);

        if (query != null) return query;
        return new qx.bom.MediaQuery(mediaQuery);
      }
    }
  });
  qookery.internal.FormParser.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FormParser.js.map?dt=1626055589270
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Browser": {
        "construct": true,
        "require": true
      },
      "qx.lang.Function": {},
      "qx.html.Element": {},
      "qx.bom.Iframe": {},
      "qx.xml.Document": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "construct": true,
          "className": "qx.bom.client.Browser"
        },
        "browser.version": {
          "construct": true,
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007 Visionet GmbH, http://www.visionet.de
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dietrich Streifert (level420)
     
     Contributors:
       * Petr Kobalicek (e666e)
       * Tobi Oetiker (oetiker)
  
  ************************************************************************ */

  /**
   * An upload widget implementation capable of holding multiple upload buttons
   * and upload fields.
   * 
   * Each upload form creates an iframe which is used as a target for form submit.
   * 
   *
   */
  qx.Class.define("uploadwidget.UploadForm", {
    extend: qx.ui.container.Composite,
    // --------------------------------------------------------------------------
    // [Constructor]
    // --------------------------------------------------------------------------

    /**
     * @param name {String} form name ({@link #name}).
     * @param url {String} url for form submission ({@link #url}).
     * @param encoding {String} encoding for from submission. This is an instantiation only parameter and defaults to multipart/form-data
     */
    construct: function construct(name, url, encoding) {
      qx.ui.container.Composite.constructor.call(this); // Apply initial values

      if (name) {
        this.setName(name);
      }

      if (url) {
        this.setUrl(url);
      } //this.setHtmlProperty("encoding", encoding || "multipart/form-data");


      var el = this.getContentElement();
      el.setAttributes({
        enctype: encoding || "multipart/form-data",
        method: "POST"
      });

      if (qx.core.Environment.get('browser.name') == 'ie' && qx.core.Environment.get('browser.version') < 8) {
        el.setAttributes({
          encoding: encoding || "multipart/form-data"
        });
      }

      el.include(); // Initialize Variables

      this.__P_5_0 = {};
      this.__P_5_1 = {}; // create a hidden iframe which is used as form submission target

      this._createIFrameTarget();
    },
    // --------------------------------------------------------------------------
    // [Destructor]
    // --------------------------------------------------------------------------
    destruct: function destruct() {
      if (this.__P_5_2) {
        try {
          document.body.removeChild(this.__P_5_2);
          this.__P_5_2.onreadystatechange = null;
          this.__P_5_2.onload = null;
          this.__P_5_2 = null;
        } catch (exc) {
          this.warn("can't remove iframe node from the DOM tree.");
        }
      }

      this.__P_5_0 = null;

      for (var id in this.__P_5_1) {
        if (this.__P_5_1[id] && this.__P_5_1[id].parentNode) {
          this.__P_5_1[id].parentNode.removeChild(this.__P_5_1[id]);
        }
      }

      this.__P_5_1 = null;
    },
    // --------------------------------------------------------------------------
    // [Events]
    // --------------------------------------------------------------------------
    events: {
      "sending": "qx.event.type.Event",
      "completed": "qx.event.type.Event"
    },
    // --------------------------------------------------------------------------
    // [Properties]
    // --------------------------------------------------------------------------
    properties: {
      /**
       * The name which is assigned to the form
       */
      name: {
        check: "String",
        init: "",
        apply: "_applyName"
      },

      /**
       * The url which is used for form submission.
       */
      url: {
        check: "String",
        init: "",
        apply: "_applyUrl"
      },

      /**
       * The target which is used for form submission.
       */
      target: {
        check: "String",
        init: "",
        apply: "_applyTarget"
      }
    },
    // --------------------------------------------------------------------------
    // [Members]
    // --------------------------------------------------------------------------
    members: {
      __P_5_2: null,
      __P_5_0: null,
      __P_5_1: null,
      __P_5_3: null,
      // ------------------------------------------------------------------------
      // [Modifiers]
      // ------------------------------------------------------------------------
      _applyName: function _applyName(value, old) {
        this.getContentElement().setAttribute("name", value);
      },
      _applyUrl: function _applyUrl(value, old) {
        this.getContentElement().setAttribute("action", value);
      },
      _applyTarget: function _applyTarget(value, old) {
        this.getContentElement().setAttribute("target", value);
      },
      // ------------------------------------------------------------------------
      // [Utilities]
      // ------------------------------------------------------------------------

      /**
       * Create a hidden iframe which is used as target for the form submission.
       * Don't need a src attribute, if it was set to javascript:void we get an insecure
       * objects error in IE.
       *
       * @return {void}
       */
      _createIFrameTarget: function _createIFrameTarget() {
        var frameName = "frame_" + new Date().valueOf();

        if (qx.core.Environment.get('browser.name') == 'ie' && qx.core.Environment.get('browser.version') < 8) {
          this.__P_5_2 = document.createElement('<iframe name="' + frameName + '"></iframe>');
        } else {
          this.__P_5_2 = document.createElement("iframe");
        }

        this.__P_5_2.id = this.__P_5_2.name = frameName;
        this.__P_5_2.style.display = "none";
        this.setTarget(frameName);
        document.body.appendChild(this.__P_5_2);
        this.__P_5_2.onload = qx.lang.Function.bind(this._onLoad, this);
        this.__P_5_2.onreadystatechange = qx.lang.Function.bind(this._onReadyStateChange, this);
      },

      /**
       * replace the widgets content element with a form element so that we can then send the stuff away.
       */
      _createContentElement: function _createContentElement() {
        var el = new qx.html.Element("form", {
          overflow: 'hidden'
        });
        return el;
      },

      /**
       * Add parameters as hidden fields to the form.
       *
       * @return {object}
       */
      _addFormParameters: function _addFormParameters() {
        var form = this.getContentElement().getDomElement();
        var parameters = this.getParameters();
        var firstChild = form.firstChild; // Parameters must be first element so that we can parse them before the file

        for (var id in parameters) {
          form.insertBefore(this.__P_5_1[id], firstChild);
        }
      },

      /**
       * Create an input element of type hidden with the 
       * name ({@link #name}) and value ({@link #value})
       *
       * @param name {String} name attribute of the created element ({@link #name}).
       * @param value {String} value attribute of the created element ({@link #value}).
       * @return {void}
       */
      _createHiddenFormField: function _createHiddenFormField(name, value) {
        var hvalue = document.createElement("input");
        hvalue.type = "hidden";
        hvalue.name = name;
        hvalue.value = value;
        return hvalue;
      },
      // ------------------------------------------------------------------------
      // [Parameters Setters / Getters]
      // ------------------------------------------------------------------------

      /**
       * Set a request parameter which is stored as an input type=hidden.
       * 
       * @param id {String} identifier of the parameter to add.
       * @param value {String} Value of parameter.
       * @return {void}
       */
      setParameter: function setParameter(id, value) {
        this.__P_5_0[id] = value;

        if (this.__P_5_1[id] && this.__P_5_1[id].name) {
          this.__P_5_1[id].value = value;
        } else {
          this.__P_5_1[id] = this._createHiddenFormField(id, value);
        }
      },

      /**
       * Remove a parameter from the request.
       * 
       * @param id {String} identifier of the parameter to remove.
       * @return {void}
       */
      removeParameter: function removeParameter(id) {
        delete this.__P_5_0[id];

        if (this.__P_5_1[id] && this.__P_5_1[id].parentNode) {
          this.__P_5_1[id].parentNode.removeChild(this.__P_5_1[id]);
        }

        delete this.__P_5_1[id];
      },

      /**
       * Get a parameter in the request.
       * 
       * @param id {String} identifier of the parameter to get.
       * @return {String}
       */
      getParameter: function getParameter(id) {
        return this.__P_5_0[id] || null;
      },

      /**
       * Returns the array containg all parameters for the request.
       * 
       * @return {Array}
       */
      getParameters: function getParameters() {
        return this.__P_5_0;
      },
      // ------------------------------------------------------------------------
      // [Send]
      // ------------------------------------------------------------------------

      /**
       * Send the form via the submit method. Target defaults to the
       * self created iframe.
       * 
       * @return {void}
       */
      send: function send() {
        var form = this.getContentElement().getDomElement();

        if (form) {
          this._addFormParameters();

          form.submit();
          this.__P_5_3 = true;
          this.fireEvent("sending");
        } else {
          throw new Error("Form element not created! Unable to call form submit!");
        }
      },

      /**
       * clear the form
       * 
       * @return {void}
       */
      clear: function clear() {
        var form = this.getContentElement().getDomElement();

        if (form) {
          form.reset();
        } else {
          throw new Error("Form element not created! Unable to call form reset!");
        }
      },
      // ------------------------------------------------------------------------
      // [Iframe]
      // ------------------------------------------------------------------------

      /**
       * Get the DOM window object of the target iframe.
       *
       * @return {DOMWindow} The DOM window object of the iframe.
       */
      getIframeWindow: function getIframeWindow() {
        return qx.bom.Iframe.getWindow(this.__P_5_2);
      },

      /**
       * Get the DOM document object of the target iframe.
       *
       * @return {DOMDocument} The DOM document object of the iframe.
       */
      getIframeDocument: function getIframeDocument() {
        return qx.bom.Iframe.getDocument(this.__P_5_2);
      },

      /**
       * Get the HTML body element of the target iframe.
       *
       * @return {Element} The DOM node of the <code>body</code> element of the iframe.
       */
      getIframeBody: function getIframeBody() {
        return qx.bom.Iframe.getBody(this.__P_5_2);
      },

      /**
       * Get the target iframe Element.
       *
       * @return {Element} The DOM element of the iframe.
       */
      getIframeNode: function getIframeNode() {
        return this.__P_5_2;
      },
      // ------------------------------------------------------------------------
      // [Response Data Support]
      // ------------------------------------------------------------------------

      /**
       * Get the text content of the target iframe. 
       *
       * @return {String} The text response of the submit.
       */
      getIframeTextContent: function getIframeTextContent() {
        var vBody = this.getIframeBody();

        if (!vBody) {
          return null;
        } // Mshtml returns the content inside a PRE
        // element if we use plain text


        if (vBody.firstChild && (vBody.firstChild.tagName == "PRE" || vBody.firstChild.tagName == "pre")) {
          return vBody.firstChild.innerHTML;
        } else {
          return vBody.innerHTML;
        }
      },

      /**
       * Get the HTML content of the target iframe. 
       *
       * @return {String} The html response of the submit.
       */
      getIframeHtmlContent: function getIframeHtmlContent() {
        var vBody = this.getIframeBody();
        return vBody ? vBody.innerHTML : null;
      },

      /**
       * Get the XML content of the target iframe. 
       * 
       * This is a hack for now because I didn't find a way
       * to send XML via the iframe response.
       * 
       * In the resulting text all occurences of the &lt;
       * and &gt; entities are replaces by < and > and
       * the Text is then parsed into a XML-Document instance.
       *
       * @return {Document} The XML response of the submit.
       */
      getIframeXmlContent: function getIframeXmlContent() {
        var responsetext = this.getIframeTextContent();

        if (!responsetext || responsetext.length == 0) {
          return null;
        }

        var xmlContent = null;
        var newText = responsetext.replace(/&lt;/g, "<");
        newText = newText.replace(/&gt;/g, ">");

        try {
          xmlContent = qx.xml.Document.fromString(newText);
        } catch (ex) {}

        ;
        return xmlContent;
      },
      // ------------------------------------------------------------------------
      // [Event Handlers]
      // ------------------------------------------------------------------------

      /**
       * Catch the onreadystatechange event of the target iframe.
       *
       * @param e {Event}
       * @return {void}
       */
      _onReadyStateChange: function _onReadyStateChange(e) {
        if (this.getIframeNode().readyState == "complete" && this.__P_5_3) {
          this.fireEvent("completed");
          delete this.__P_5_3;
        }
      },

      /**
       * Catch the onload event of the target iframe
       *
       * @param e {Event}
       * @return {void}
       */
      _onLoad: function _onLoad(e) {
        if (this.__P_5_3) {
          this.fireEvent("completed");
          delete this.__P_5_3;
        }
      }
    }
  });
  uploadwidget.UploadForm.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=UploadForm.js.map?dt=1626056914787
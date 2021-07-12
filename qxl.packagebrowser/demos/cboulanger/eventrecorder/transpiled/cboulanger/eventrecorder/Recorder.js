(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.Element": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "cboulanger.eventrecorder.MHelperMethods": {
        "require": true
      },
      "cboulanger.eventrecorder.MState": {
        "require": true
      },
      "qx.core.Id": {
        "construct": true
      },
      "qx.lang.Type": {},
      "qx.core.Assert": {},
      "qx.ui.form.DateField": {},
      "qx.ui.form.ComboBox": {},
      "qx.ui.form.VirtualComboBox": {},
      "qx.ui.tree.core.FolderOpenButton": {},
      "qx.ui.core.FocusHandler": {},
      "qx.data.Array": {},
      "qx.ui.tree.VirtualTree": {},
      "qx.ui.treevirtual.TreeVirtual": {},
      "qx.ui.virtual.selection.Row": {},
      "qx.ui.table.selection.Model": {},
      "qx.lang.String": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
    UI Event Recorder
  
    Copyright:
      2018 Christian Boulanger
  
    License:
      MIT license
      See the LICENSE file in the project's top-level directory for details.
  
    Authors: Christian Boulanger
  
  ************************************************************************ */

  /**
   * The base class of all recorder types
   * @require(qx.bom.Element)
   */
  qx.Class.define("cboulanger.eventrecorder.Recorder", {
    extend: qx.core.Object,
    include: [cboulanger.eventrecorder.MHelperMethods, cboulanger.eventrecorder.MState],

    /**
     * Constructor
     */
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.__P_469_0 = [];
      this.__P_469_1 = [];
      this.addGlobalEventListener((target, event) => {
        if (!this.isRunning()) {
          return;
        }

        let id;

        if (typeof target.getAttribute == "function") {
          id = target.getAttribute("data-qx-object-id");
        } else if (target instanceof qx.core.Object) {
          id = qx.core.Id.getAbsoluteIdOf(target, true);
        } else {
          return;
        }

        if (id) {
          this.recordEvent(id, event, target);
        }
      });
    },
    properties: {
      /**
       * The recorder mode, can be "overwrite" or "append"
       */
      mode: {
        check: ["overwrite", "append"],
        nullable: false,
        init: "overwrite"
      },

      /**
       * Whether to output additional event data to the console
       */
      logEvents: {
        check: "Boolean",
        nullable: false,
        init: false
      }
    },

    /**
     * The methods and simple properties of this class
     */
    members: {
      __P_469_1: null,
      __P_469_0: null,
      __P_469_2: null,
      __P_469_3: null,

      /**
       * Exclude the given id(s) from recording
       * @param ids {Array|String}
       */
      excludeIds(ids) {
        // normalize to array
        ids = qx.lang.Type.isArray(ids) ? ids : [ids]; // add ids that are not yet included by path

        for (let id of ids) {
          let found = false;

          for (let excluded of this.__P_469_0) {
            if (id.substr(0, excluded.length) === excluded) {
              found = true;
            }
          }

          if (!found) {
            this.debug("Excluding ".concat(id, " from event recording."));

            this.__P_469_0.push(id);
          }
        }
      },

      /**
       * Returns the list of excluded ids.
       * @return {String[]}
       */
      getExcludedIds() {
        return this.__P_469_0;
      },

      /**
       * Return an array of object ids that have been assigned in the current application
       * @return {[]}
       */
      getObjectIds() {
        let ids = [];

        let traverseObjectTree = function traverseObjectTree(obj) {
          if (typeof obj.getQxObjectId !== "function") {
            return;
          }

          let id = obj.getQxObjectId();

          if (id) {
            try {
              ids.push(qx.core.Id.getAbsoluteIdOf(obj));
            } catch (e) {
              this.error("Cannot get absolute ID for object with id ".concat(id, "."));
            }
          }

          for (let owned of obj.getOwnedQxObjects()) {
            traverseObjectTree(owned);
          }
        };

        try {
          let registeredObjects = qx.core.Id.getInstance().getRegisteredObjects() || {};

          for (let obj of Object.values(registeredObjects)) {
            traverseObjectTree(obj);
          }

          return ids;
        } catch (e) {
          this.error(e.message);
          return [];
        }
      },

      /**
       * Returns the recorded script
       * @return {String}
       */
      getScript() {
        return this.__P_469_1.join("\n");
      },

      /**
       * Sets the script to which the recorder should append new events
       * @param script {String}
       */
      setScript(script) {
        if (script) {
          qx.core.Assert.assertString(script);
          this.__P_469_1 = script.split(/\n/);
        } else {
          this.__P_469_1 = [];
        }
      },

      /**
       * Called by start()
       */
      beforeStart() {
        switch (this.getMode()) {
          case "overwrite":
            this.__P_469_1 = ["config-set-mode presentation", "assert-match-uri ".concat(document.location.host + document.location.pathname), ""];
            break;

          case "append":
            this.__P_469_1 = this.__P_469_1.concat(["", "# appended at ".concat(new Date().toLocaleString()), ""]);
            break;
        }

        this.__P_469_2 = 0;
      },

      /**
       * Called by the global event listener
       * @param id {String}
       * @param event {qx.event.type.Event}
       * @param target {qx.bom.Element}
       * @private
       * @return {boolean} returns true if the event was recorded, false if
       * it was ignored because of the list of excluded ids.
       */
      recordEvent(id, event, target) {
        for (let excluded of this.__P_469_0) {
          if (id.substr(0, excluded.length) === excluded) {
            return false;
          }
        }

        this.__P_469_1 = this.__P_469_1.concat(this.createIntermediateCodeFromEvent(id, event, target));
        return true;
      },

      /**
       * Executed after stop()
       */
      afterStop() {
        this.__P_469_2 = 0;
      },

      /**
       * Given an object id, the event name and the even target, return one or more
       * pieces of intermediate code from which a player can replay the user action
       * that lead to this event. Return an array, each element is one line of code
       * @param id {String} The id of the qooxdoo object
       * @param event {qx.event.Event} The event that was fired
       * @param target {qx.bom.Element|qx.core.Object} The event target
       * @return {String[]} An array of script lines
       */
      createIntermediateCodeFromEvent(id, event, target) {
        // opt out of recording
        if (typeof target.getTrackEvents == "function" && !target.getTrackEvents()) {
          return [];
        }

        let lines = [];
        const type = event.getType();
        let data = typeof event.getData == "function" ? event.getData() : null;
        let owner = typeof target.getQxOwner == "function" ? target.getQxOwner() : null;

        if (this.getLogEvents()) {
          this.debug(JSON.stringify({
            id,
            owner: owner && owner.toString(),
            type: type,
            data: data,
            target: target.toString()
          }));
        }

        switch (type) {
          case "dbltap":
            return ["dbltap ".concat(id)];

          case "tap":
            return ["tap ".concat(id)];

          case "execute":
            switch (true) {
              case owner instanceof qx.ui.form.DateField:
              case owner instanceof qx.ui.form.ComboBox:
              case owner instanceof qx.ui.form.VirtualComboBox:
              case target instanceof qx.ui.tree.core.FolderOpenButton:
                return [];
            }

            lines.push("execute ".concat(id));
            break;

          case "appear":
          case "disappear":
            if (qx.ui.core.FocusHandler.getInstance().isFocusRoot(qx.core.Id.getQxObject(id))) {
              return ["assert-".concat(type, "ed ").concat(id)];
            }

            return [];

          case "input":
            this.__P_469_4 = data;
            return [];

          case "change":
            {
              // model selection
              const isModelSelection = target instanceof qx.data.Array && target.getQxOwner() && typeof target.getQxOwner().getModel == "function";

              if (isModelSelection) {
                const owner = target.getQxOwner();
                const ownerId = qx.core.Id.getAbsoluteIdOf(owner);
                const model = owner.getModel();
                const indexes = target.toArray().map(item => model.indexOf(item));
                lines.push("set-model-selection ".concat(ownerId, " ").concat(JSON.stringify(indexes)));
                break;
              } // form fields


              if (qx.lang.Type.isString(data) && data === this.__P_469_4) {
                lines.push("set-value ".concat(id, " \"").concat(data, "\""));
              }

              break;
            }

          case "open":
          case "close":
            {
              if (target instanceof qx.ui.tree.VirtualTree) {
                let row = target.getLookupTable().indexOf(data);

                if (row < 0) {
                  return [];
                }

                lines.push("".concat(type, "-tree-node ").concat(id, " ").concat(row));
              }

              break;
            }
          // qx.ui.treevirtual.TreeVirtual

          case "treeClose":
          case "treeOpenWithContent":
          case "treeOpenWhileEmpty":
            lines.push("".concat(type === "treeClose" ? "close-tree-node-treevirtual" : "open-tree-node-treevirtual", " ").concat(id, " ").concat(data.nodeId));
            break;

          case "changeSelection":
            {
              if (target instanceof qx.ui.treevirtual.TreeVirtual) {
                let selection = event.getData();

                if (!selection.length) {
                  return [];
                }

                let row = target.getDataModel().getRowFromNodeId(selection[0].nodeId);
                lines.push("set-table-selection ".concat(id, " ").concat(row, ",").concat(row));
              }

              if (target instanceof qx.ui.virtual.selection.Row) {
                lines.push("set-row-selection ".concat(id, " ").concat(data));
                break;
              }

              if (target instanceof qx.ui.table.selection.Model) {
                lines.push("reset-selection ".concat(id));
                let ranges = target.getSelectedRanges();

                if (ranges.length) {
                  lines.push("set-table-selection ".concat(id, " ").concat(ranges[0].minIndex, ",").concat(ranges[0].maxIndex));
                }

                break;
              }

              if (data && data.length && qx.lang.Type.isArray(data)) {
                let selected = data[0];

                if (selected instanceof qx.core.Object && selected.getQxObjectId()) {
                  let selectedId = qx.core.Id.getAbsoluteIdOf(selected);
                  lines.push("set-selection ".concat(id, " ").concat(selectedId));
                } else if (typeof target.getSelectables == "function") {
                  let index = target.getSelectables().indexOf(selected);
                  lines.push("set-selection-from-selectables ".concat(id, " ").concat(index));
                }

                break;
              }

              return [];
            }

          default:
            // record change events if explicitly requested
            if (type.startsWith("change") && typeof target.getTrackPropertyChanges == "function") {
              if (target.getTrackPropertyChanges()) {
                let property = qx.lang.String.firstLow(type.substr(6));
                lines.push("await-match-json ".concat(id, " ").concat(property, " ").concat(JSON.stringify(data)));
                break;
              }
            } // ignore all others


            return [];
        } // prepend a wait command to replay delays in user action


        let now = Date.now();
        let msSinceLastEvent = now - (this.__P_469_2 || now);
        this.__P_469_2 = now;

        if (msSinceLastEvent) {
          lines.unshift("delay ".concat(msSinceLastEvent));
        }

        return lines;
      }

    }
  });
  cboulanger.eventrecorder.Recorder.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Recorder.js.map?dt=1626055636184
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.form.TextArea": {},
      "qxfileio.FileChooser": {},
      "qx.ui.form.Button": {},
      "qxfileio.FileReader": {},
      "qx.event.Registration": {},
      "qxfileio.FileWriter": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2019 INRA
  
     License: CeCILL
  
     Authors: Sylvain Gaillard (sgaillard) sylvain.gaillard@inra.fr
  
  ************************************************************************ */

  /**
   * This is the main application class of "qxfileio"
   */
  qx.Class.define("qxfileio.demo.Application", {
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
        // Call super class
        qxfileio.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        // Document is the application root
        var doc = this.getRoot();

        // Create a field to put data
        var textField = new qx.ui.form.TextArea();
        textField.setWidth(400);
        textField.setHeight(300);
        textField.setNativeContextMenu(true);
        doc.add(textField, {
          left: 10,
          top: 10
        });

        // Create a file chooser object
        var fileChooser = new qxfileio.FileChooser();

        // Create a button to interact with the file chooser
        var fileButton = new qx.ui.form.Button(this.tr("Open file..."));
        fileButton.addListener("execute", function () {
          fileChooser.open();
        }, this);
        doc.add(fileButton, {
          left: 20,
          top: 320
        });
        var abortButton = new qx.ui.form.Button(this.tr("Abort"));
        abortButton.setEnabled(false);
        doc.add(abortButton, {
          left: 100,
          top: 320
        });

        // Create a file reader object to read the selected file
        var fr = new qxfileio.FileReader();
        abortButton.addListener("execute", function () {
          fr.abort();
        }, this);
        fr.addListener("loadstart", function (e) {
          abortButton.setEnabled(true);
          this.debug('file load start');
        }, this);
        fr.addListener("loadabort", function (e) {
          this.debug('file load abort');
        }, this);
        fr.addListener("load", function (e) {
          this.debug('file load successfully');
          textField.setValue(e.getData());
        }, this);
        fr.addListener("loadend", function (e) {
          abortButton.setEnabled(false);
          this.debug('file load end');
        }, this);
        fr.addListener("loadprogress", function (e) {
          this.debug('progress: ' + Math.round(e.getLoaded() / e.getTotal() * 100) + '%');
        }, this);
        fr.addListener("loaderror", function (e) {
          this.debug('error: ' + e.getMessage());
        }, this);
        fileChooser.addListener("filesChange", function (e) {
          var files = e.getData();
          if (files.length > 0) {
            fr.loadAsText(files[0]);
          } else {
            this.debug("No file selected");
          }
        }, this);

        // Create a button to change the behavior of the file chooser (multi file)
        var multButton = new qx.ui.form.Button(this.tr("Multiple"));
        qx.event.Registration.addListener(multButton, "execute", function () {
          fileChooser.setMultipleSelect(!fileChooser.getMultipleSelect());
        }, this);
        doc.add(multButton, {
          left: 220,
          top: 320
        });
        fileChooser.addListener("multipleSelectChange", function (e) {
          this.debug("multiple select change: " + e.getData());
        }, this);

        // Create a button to save text field content to a file
        var saveButton = new qx.ui.form.Button(this.tr("Save"));
        var fw = new qxfileio.FileWriter();
        //fw.setType("application/octet-stream");
        saveButton.addListener("execute", function () {
          this.debug("Click save! " + fw.getType());
          fw.saveTextAsFile(textField.getValue(), "data.txt");
        }, this);
        doc.add(saveButton, {
          left: 20,
          top: 360
        });
      }
    }
  });
  qxfileio.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

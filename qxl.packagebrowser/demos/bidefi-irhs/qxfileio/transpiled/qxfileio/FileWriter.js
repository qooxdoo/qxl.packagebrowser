(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Write file to the client side file system.
   */
  qx.Class.define("qxfileio.FileWriter", {
    extend: qx.core.Object,
    properties: {
      /**
       * MIME type for the file to be written.
       */
      type: {
        nullable: false,
        init: "text/plain"
      }
    },
    members: {
      /**
       * Effectively write the file to the client side file system.
       *
       * @param text {String} the content to be written to the file.
       * @param fileName {String} the file name to be used.
       */
      saveTextAsFile: function saveTextAsFile(text, fileName) {
        var textFileAsBlob = new Blob([text], {
          type: this.getType()
        });
        var downloadLink = document.createElement("a");
        downloadLink.download = fileName;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = function (e) {
          document.body.removeChild(e.target);
        };
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    }
  });
  qxfileio.FileWriter.$$dbClassInfo = $$dbClassInfo;
})();

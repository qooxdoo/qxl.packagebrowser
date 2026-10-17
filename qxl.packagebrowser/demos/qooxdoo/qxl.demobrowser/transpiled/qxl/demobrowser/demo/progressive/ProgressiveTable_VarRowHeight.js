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
      "qx.util.AliasManager": {},
      "qx.util.ResourceManager": {},
      "qx.io.ImageLoader": {},
      "qx.ui.progressive.renderer.table.Widths": {},
      "qx.ui.progressive.headfoot.TableHeading": {},
      "qx.ui.progressive.headfoot.Progress": {},
      "qx.ui.progressive.structure.Default": {},
      "qx.ui.progressive.Progressive": {},
      "qx.ui.basic.Atom": {},
      "qx.ui.progressive.model.Default": {},
      "qx.ui.progressive.renderer.table.Row": {},
      "qx.ui.progressive.renderer.table.cell.Image": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /*
   */

  /*
   * Example of using the Image cell renderer with Progressive''s Table.
   * This also demonstrates how the minimum row height can be set by a
   * cell renderer.
   *
   * @asset(qxl/demobrowser/demo/icons/format-justify-left.png)
   * @asset(qxl/demobrowser/demo/icons/multimedia-player.png)
   */
  qx.Class.define("qxl.demobrowser.demo.progressive.ProgressiveTable_VarRowHeight", {
    extend: qx.application.Standalone,
    members: {
      __P_18_0: null,
      main: function main() {
        qxl.demobrowser.demo.progressive.ProgressiveTable_VarRowHeight.superclass.prototype.main.call(this);
        var base = "qxl/demobrowser/demo/icons/";
        this.imageData = [{
          url: base + "format-justify-left.png",
          height: 4,
          // will be overwritten by actual image height
          tooltip: "small icon"
        }, {
          url: base + "multimedia-player.png",
          height: 4,
          // will be overwritten by actual image height
          tooltip: "TALL ICON"
        }, ""];

        // Pre-load each of the images so we can determine its size.  We'll need
        // to track whether all images have been loaded before we call our
        // doLoad function.
        this.__P_18_0 = 0;
        var aliasManager = qx.util.AliasManager.getInstance();
        var resourceManager = qx.util.ResourceManager.getInstance();
        var resolved;
        var source;
        for (var i = 0; i < this.imageData.length; i++) {
          // Skip null entries
          if (!this.imageData[i]) {
            continue;
          }
          resolved = aliasManager.resolve(this.imageData[i].url);
          source = resourceManager.toUri(resolved);

          // Since we had to resolve it, save the resolved name
          this.imageData[i].url = source;

          // Increment the number of images we're waiting on load completion
          ++this.__P_18_0;

          // Pre-load the image.  Call doLoad() when images is loaded.
          qx.io.ImageLoader.load(source, function (source, entry) {
            this.info("Searching for [" + source + "]");

            // Find this source entry
            for (var j = 0; j < this.imageData.length; j++) {
              // Is this the one?
              if (this.imageData[j].url == source) {
                // Yup. Save its height
                this.imageData[j].height = entry.height;

                // Increment the count of loaded images
                --this.__P_18_0;
                this.debug("Found [" + this.imageData[j].url + "].  loadCount=" + this.__P_18_0 + ", end=" + this.imageData.length);

                // Have we loaded all images?
                if (this.__P_18_0 == 0) {
                  // Yup.  Begin our loader.
                  this.doLoad();
                }
                return;
              }
            }

            // Should never get here
            throw new Error("Image data for " + source + " not found");
          }, this);
        }

        // Catch the (nonexistent in this demo) case where no images need loading
        if (this.__P_18_0 == 0) {
          this.doLoad();
        }
      },
      doLoad: function doLoad() {
        var _this = this;
        var createRow = function createRow(imageNum, text) {
          var ret = {
            renderer: "row",
            location: "end",
            data: [text, _this.imageData[imageNum]]
          };
          return ret;
        };
        var columnWidths = new qx.ui.progressive.renderer.table.Widths(2);
        columnWidths.setWidth(0, 200);
        columnWidths.setWidth(1, "1*");
        var columnNames = ["Id", "Image"];

        // Instantiate a Progressive with a structure including header & footer
        var header = new qx.ui.progressive.headfoot.TableHeading(columnWidths, columnNames);
        var footer = new qx.ui.progressive.headfoot.Progress(columnWidths, columnNames);
        var structure = new qx.ui.progressive.structure.Default(header, footer);
        var progressive = new qx.ui.progressive.Progressive(structure);

        // Add a message
        var message = new qx.ui.basic.Atom("Note variable row heights in this table.");
        message.setHeight(16);
        message.setTextColor("red");
        progressive.add(message);

        // Instantiate a data model and populate it.
        var dataModel = new qx.ui.progressive.model.Default();
        var rowData = [];
        rowData.push(createRow(0, "I am small."));
        rowData.push(createRow(1, "I am tall."));
        rowData.push(createRow(0, "This, too, is small."));
        rowData.push(createRow(1, "This, too, is tall."));
        rowData.push(createRow(2, "No attributes specified."));
        dataModel.addElements(rowData);

        // Tell Progressive about its data model
        progressive.setDataModel(dataModel);

        // Instantiate a table row renderer
        var rowRenderer = new qx.ui.progressive.renderer.table.Row(columnWidths);

        // Give Progressive the renderer, and assign a name
        progressive.addRenderer("row", rowRenderer);

        // Tell the row renderer to use an image renderer for column 1
        var r = new qx.ui.progressive.renderer.table.cell.Image();
        rowRenderer.addRenderer(1, r);
        progressive.set({
          width: 400,
          maxWidth: 400
        });
        this.getRoot().add(progressive, {
          left: 50,
          top: 50,
          bottom: 50
        });
        progressive.render();
      }
    }
  });
  qxl.demobrowser.demo.progressive.ProgressiveTable_VarRowHeight.$$dbClassInfo = $$dbClassInfo;
})();

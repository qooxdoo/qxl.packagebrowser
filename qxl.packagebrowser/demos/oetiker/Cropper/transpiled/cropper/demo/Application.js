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
      "qx.ui.basic.Atom": {},
      "cropper.Cropper": {},
      "qx.ui.form.ToggleButton": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2009 OETIKER+PARTNER AG http://www.oetiker.ch
       
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tobias Oetiker (oetiker)
  
  ************************************************************************ */

  /**
   * This is the main application class of the cropper demo application
   */
  qx.Class.define("cropper.demo.Application", {
    extend: qx.application.Standalone,
    members: {
      /**
       * This method contains the initial application code and gets called 
       * during startup of the application
       *
       * @return {void} 
       */
      main: function main() {
        // Call super class
        cropper.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        this.new_cropper('Full Crop', 10, 10, 0, 0, 'full');
        this.new_cropper('Y Crop', 320, 10, 0, 0, 'y');
        this.new_cropper('X Crop', 10, 320, 0, 0, 'x');
        this.new_cropper('Full Crop with Margin and Padding', 320, 320, 20, 10, 'full');
      },
      colorGen: function colorGen() {
        var col = '#';
        for (var i = 0; i < 6; i++) {
          col += Math.round(5 + Math.random() * 10).toString(16);
        }
        return col;
      },
      new_cropper: function new_cropper(d, x, y, m, p, t) {
        var doc = this.getRoot();
        var area = new qx.ui.basic.Atom(d).set({
          width: 300,
          height: 300,
          decorator: "main",
          padding: 10,
          center: true,
          backgroundColor: this.colorGen()
        });
        var cr = new cropper.Cropper(area).set({
          cropActive: false,
          cropType: t,
          cropMarginLeft: m,
          cropMarginRight: m,
          cropMarginTop: m,
          cropMarginBottom: m,
          cropPaddingLeft: p,
          cropPaddingRight: p,
          cropPaddingTop: p,
          cropPaddingBottom: p
        });
        // Document is the application root
        doc.add(area, {
          left: x,
          top: y
        });
        var button = new qx.ui.form.ToggleButton('Activate Cropper').set({
          value: false,
          opacity: 0.7
        });
        doc.add(button, {
          left: x + 5,
          top: y + 5
        });
        button.addListener('changeValue', function (e) {
          var d = e.getData();
          cr.setCropActive(d);
        }, this);
        cr.addListener('cropSelected', function (e) {
          var d = e.getData();
          var atom = new qx.ui.basic.Atom('click to remove').set({
            backgroundColor: this.colorGen(),
            rich: true,
            opacity: 0.4,
            center: true,
            width: d.width,
            height: d.height
          });
          atom.addListener('click', function () {
            doc.remove(atom);
          });
          doc.add(atom, {
            left: m + p + x + d.left,
            top: m + p + y + d.top
          });
        }, this);
      }
    }
  });
  cropper.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

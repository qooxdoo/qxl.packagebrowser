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
      "qx.ui.window.Window": {},
      "qx.ui.layout.Grow": {},
      "qxdygraphs.Plot": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     Copyright: Public Domain
  ************************************************************************ */

  qx.Class.define("qxdygraphs.demo.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxdygraphs.demo.Application.superclass.prototype.main.call(this);
        ;
        var data = [];
        for (var i = 1; i < 1000; i++) {
          data.push([new Date((1000000000 + i * 36) * 1000), Math.random(), Math.sin(i / 100)]);
        }
        var options = {
          labels: ['Date', 'Sin', 'Random'],
          labelsDivWidth: 400
        };
        var plotDemo = [{
          title: 'CSV String Input',
          data: "Date,Value\n2008-05-23,578.55\n2008-06-08,566.5\n2008-07-25,480.88\n2008-08-22,509.84\n2008-09-26,454.13\n2008-10-24,379.75\n2008-11-08,303\n2008-12-26,308.56\n2009-01-23,299.14\n2009-02-09,346.51\n2009-03-20,325.99\n2009-04-24,386.15\n",
          options: {
            fillGraph: true,
            labelsKMB: true
          }
        }, {
          title: 'Array Input',
          data: data,
          options: options
        }];
        for (var i = 0; i < plotDemo.length; i++) {
          this.makePlot(plotDemo[i].data, plotDemo[i].options, plotDemo[i].title);
        }
      },
      x: 0,
      y: 0,
      makePlot: function makePlot(data, options, title) {
        var win = new qx.ui.window.Window(title);
        win.set({
          width: 600,
          height: 400,
          showMinimize: false,
          showClose: false,
          layout: new qx.ui.layout.Grow()
        });
        this.getRoot().add(win, {
          left: this.x += 60,
          top: this.y += 50
        });
        win.open();
        var plot = new qxdygraphs.Plot(data, options);
        win.add(plot);
      }
    }
  });
  qxdygraphs.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

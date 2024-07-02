(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Animation": {
        "require": true
      },
      "qx.module.Manipulating": {
        "require": true
      },
      "qx.module.Traversing": {
        "require": true
      },
      "qx.module.Template": {
        "require": true
      },
      "qx.module.event.GestureHandler": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "q": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   *
   * @require(qx.module.Animation)
   * @require(qx.module.Manipulating)
   * @require(qx.module.Traversing)
   * @require(qx.module.Template)
   * @require(qx.module.event.GestureHandler)
   */
  qx.Class.define("qxl.demobrowser.demo.animation.Scroll", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.animation.Scroll.superclass.prototype.main.call(this);

        // create an array with 30 numbers in it
        var data = {
          items: []
        };
        for (var i = 0; i < 30; i++) {
          data.items.push(i);
        }

        // add 5 lists to the body
        for (var j = 0; j < 5; j++) {
          q.template.get("list-template", data).appendTo(document.body);
        }

        // set a default scroll top
        this.reset();
        q("#resetbutton").on("tap", this.reset, this);
        q("#startbutton").on("tap", function () {
          q(".list").addClass("scrolling").setScrollTop(250, 2000).once("animationEnd", function () {
            q(".list").removeClass("scrolling");
          });
        });
      },
      reset: function reset() {
        q(".list").forEach(function (item, i) {
          item.scrollTop = i * 100;
        });
      }
    }
  });
  qxl.demobrowser.demo.animation.Scroll.$$dbClassInfo = $$dbClassInfo;
})();

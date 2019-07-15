/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Thomas Herchenroeder (thron7)
     * Fabian Jakobs (fjakobs)
     * Jonathan Weiß (jonathan_rass)
     * Christian Boulanger (cboulanger)

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 * The main application class.
 *
 * @asset(qxl/packagebrowser/*)
 */
qx.Class.define("qxl.packagebrowser.Application",
{
  extend : qx.application.Standalone,

  statics: {
    PKG_DATA_URL : "../resource/qxl/packagebrowser/package-data.json"
  },

  construct : function()
  {
    this.base(arguments);
    // Include CSS files
    var uri = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/css/style.css");
    qx.bom.Stylesheet.includeFile(uri);
    uri = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/css/sourceview.css");
    qx.bom.Stylesheet.includeFile(uri);
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    main : function()
    {
      this.base(arguments);

      // Enable logging in source (or debug build)
      if (qx.core.Environment.get("qx.debug"))
      {
        qx.log.appender.Native;
      }

      // Initialize the viewer
      this.viewer = new qxl.packagebrowser.PackageBrowser;
      this.getRoot().add(this.viewer, {edge:0});
    },

    // overridden
    finalize : function()
    {
      this.base(arguments);
      this.viewer.dataLoader(this.self(arguments).PKG_DATA_URL);
    }
  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this._disposeObjects("viewer");
  }
});

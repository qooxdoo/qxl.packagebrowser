(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.modern.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright:
       2010 Guilherme R. Aiolfi
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors: Guilherme R. Aiolfi (guilhermeaiolfi)
  
  ************************************************************************ */
  qx.Theme.define("tokenfield.theme.modern.Appearance", {
    extend: qx.theme.modern.Appearance,
    appearances: {
      'token': 'combobox',
      'tokenitem': {
        include: 'listitem',
        style: function style(states, styles) {
          return {
            decorator: 'group',
            textColor: states.hovered ? '#314a6e' : '#000000',
            backgroundColor: states.head ? '#4d94ff' : undefined,
            height: 18,
            padding: [1, 6, 1, 6],
            margin: 1,
            icon: states.hovered ? "decoration/window/close-active.png" : "decoration/window/close-inactive.png"
          };
        }
      }
    }
  });
  tokenfield.theme.modern.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map?dt=1626055887446
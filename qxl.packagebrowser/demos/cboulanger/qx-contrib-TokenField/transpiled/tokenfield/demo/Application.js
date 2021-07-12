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
      "qx.log.appender.Native": {},
      "qx.log.appender.Console": {},
      "qx.ui.basic.Label": {},
      "tokenfield.Token": {},
      "qx.ui.form.ListItem": {},
      "qx.util.TimerManager": {},
      "qx.ui.form.Button": {},
      "qx.ui.form.ToggleButton": {}
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
  
     Authors:
       * Guilherme R. Aiolfi (guilhermeaiolfi)
       * Christian Boulanger (cboulanger)
       * Tobias Bräutigam (peuter)
  
  ************************************************************************ */

  /**
   * Tokenfield Demo Application
   * @asset(demo/flags/*)
   */
  qx.Class.define("tokenfield.demo.Application", {
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
       *
       * @return {void}
       */
      main: function main() {
        // Call super class
        tokenfield.demo.Application.prototype.main.base.call(this); // support native logging capabilities, e.g. Firebug for Firefox

        qx.log.appender.Native; // support additional cross-browser console. Press F7 to toggle visibility

        qx.log.appender.Console; // label

        var label = new qx.ui.basic.Label("<h2>Token Field Demo</h2><p>Choose countries by typing the first two characters...<p>");
        label.setRich(true); // add to document

        this.getRoot().add(label, {
          top: 30,
          left: 80
        }); // mockup country data

        var mockdata = getCountryData().map(function (item) {
          item.icon = 'demo/flags/' + item.code.toLowerCase() + '.png';
          return item;
        });
        var t = new tokenfield.Token();
        t.setWidth(500);
        t.setMaxWidth(500);
        t.setSelectionMode('multi');
        t.setSelectOnce(true);
        t.setLabelPath("name");
        t.setIconPath("icon");
        t.setDelegate({
          createItem: function createItem() {
            // you can use other widgets here
            return new qx.ui.form.ListItem();
          },
          configureItem: function configureItem(item) {
            // set minimum width to match flags
            item.getChildControl('icon').set({
              minWidth: 20
            });
            item.setRich(true);
          },
          bindItem: function bindItem(controller, model, item) {
            controller.bindDefaultProperties(model, item); // you can bind other properties to the list item if needed here
          }
        }); // todo: should be setTypeInText, but that doesn't work

        t.setHintText("Please enter at least two letters of a country name...");
        /*
         * listens for event to load data from the server. here, we
         * do a simple mockup with a small timeout to simulate a server request
         */

        t.addListener("loadData", function (e) {
          var str = e.getData();
          var data = [];

          for (var i = 0; i < mockdata.length; i++) {
            if (mockdata[i].name.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
              data.push(mockdata[i]);
            }
          }

          qx.util.TimerManager.getInstance().start(function () {
            t.populateList(str, data);
          }, null, this, null, 500);
        }, this); // add to document

        this.getRoot().add(t, {
          top: 110,
          left: 80
        }); // show selection information

        var bt = new qx.ui.form.Button('Show selection data');
        bt.addListener("execute", function (e) {
          alert(t.getTextContent("|"));
        });
        this.getRoot().add(bt, {
          top: 50,
          left: 600
        }); // toggle style

        bt = new qx.ui.form.Button('Toggle Style');
        bt.addListener("execute", function (e) {
          if (t.getStyle() == "facebook") {
            t.setWidth(200);
            t.setHeight(100);
            t.setStyle("");
          } else {
            t.setWidth(500);
            t.setHeight(20);
            t.setStyle("facebook");
          }
        });
        this.getRoot().add(bt, {
          top: 80,
          left: 600
        }); // pre-populate token field

        bt = new qx.ui.form.Button('Populate');
        bt.addListener("execute", function (e) {
          t.reset();

          for (var i = 0; i < 4; i++) {
            t.addToken(mockdata[Math.floor(Math.random() * (mockdata.length + 1))], true);
          }
        });
        this.getRoot().add(bt, {
          top: 110,
          left: 600
        }); // reset

        bt = new qx.ui.form.Button('Reset');
        bt.addListener("execute", function (e) {
          t.reset();
        });
        this.getRoot().add(bt, {
          top: 140,
          left: 600
        }); // select token from external code

        bt = new qx.ui.form.Button('Add Germany');
        var germany = {
          name: 'Germany',
          code: 'DE',
          icon: 'demo/flags/de.png'
        };
        bt.addListener("execute", function (e) {
          t.selectItem(germany);
        });
        this.getRoot().add(bt, {
          top: 170,
          left: 600
        }); // unselect

        bt = new qx.ui.form.Button('Remove Germany');
        bt.addListener("execute", function () {
          t.deselectItem(germany);
        });
        this.getRoot().add(bt, {
          top: 200,
          left: 600
        }); // close popup when there are no results

        bt = new qx.ui.form.ToggleButton('Do not show popup, when empty');
        bt.addListener("execute", function (ev) {
          t.setCloseWhenNoResults(ev.getTarget().getValue());
        });
        this.getRoot().add(bt, {
          top: 230,
          left: 600
        }); // listen to text-field content

        t.addListener('changeText', function (ev) {
          console.log('Text value: ' + ev.getData());
        });
        /*
         * some mockup country data. might not be up to date
         * source: https://gist.github.com/Keeguon/2310008
         */

        function getCountryData() {
          return [{
            name: 'Afghanistan',
            code: 'AF'
          }, {
            name: 'Åland Islands',
            code: 'AX'
          }, {
            name: 'Albania',
            code: 'AL'
          }, {
            name: 'Algeria',
            code: 'DZ'
          }, {
            name: 'American Samoa',
            code: 'AS'
          }, {
            name: 'AndorrA',
            code: 'AD'
          }, {
            name: 'Angola',
            code: 'AO'
          }, {
            name: 'Anguilla',
            code: 'AI'
          }, {
            name: 'Antarctica',
            code: 'AQ'
          }, {
            name: 'Antigua and Barbuda',
            code: 'AG'
          }, {
            name: 'Argentina',
            code: 'AR'
          }, {
            name: 'Armenia',
            code: 'AM'
          }, {
            name: 'Aruba',
            code: 'AW'
          }, {
            name: 'Australia',
            code: 'AU'
          }, {
            name: 'Austria',
            code: 'AT'
          }, {
            name: 'Azerbaijan',
            code: 'AZ'
          }, {
            name: 'Bahamas',
            code: 'BS'
          }, {
            name: 'Bahrain',
            code: 'BH'
          }, {
            name: 'Bangladesh',
            code: 'BD'
          }, {
            name: 'Barbados',
            code: 'BB'
          }, {
            name: 'Belarus',
            code: 'BY'
          }, {
            name: 'Belgium',
            code: 'BE'
          }, {
            name: 'Belize',
            code: 'BZ'
          }, {
            name: 'Benin',
            code: 'BJ'
          }, {
            name: 'Bermuda',
            code: 'BM'
          }, {
            name: 'Bhutan',
            code: 'BT'
          }, {
            name: 'Bolivia',
            code: 'BO'
          }, {
            name: 'Bosnia and Herzegovina',
            code: 'BA'
          }, {
            name: 'Botswana',
            code: 'BW'
          }, {
            name: 'Bouvet Island',
            code: 'BV'
          }, {
            name: 'Brazil',
            code: 'BR'
          }, {
            name: 'British Indian Ocean Territory',
            code: 'IO'
          }, {
            name: 'Brunei Darussalam',
            code: 'BN'
          }, {
            name: 'Bulgaria',
            code: 'BG'
          }, {
            name: 'Burkina Faso',
            code: 'BF'
          }, {
            name: 'Burundi',
            code: 'BI'
          }, {
            name: 'Cambodia',
            code: 'KH'
          }, {
            name: 'Cameroon',
            code: 'CM'
          }, {
            name: 'Canada',
            code: 'CA'
          }, {
            name: 'Cape Verde',
            code: 'CV'
          }, {
            name: 'Cayman Islands',
            code: 'KY'
          }, {
            name: 'Central African Republic',
            code: 'CF'
          }, {
            name: 'Chad',
            code: 'TD'
          }, {
            name: 'Chile',
            code: 'CL'
          }, {
            name: 'China',
            code: 'CN'
          }, {
            name: 'Christmas Island',
            code: 'CX'
          }, {
            name: 'Cocos (Keeling) Islands',
            code: 'CC'
          }, {
            name: 'Colombia',
            code: 'CO'
          }, {
            name: 'Comoros',
            code: 'KM'
          }, {
            name: 'Congo',
            code: 'CG'
          }, {
            name: 'Congo, The Democratic Republic of the',
            code: 'CD'
          }, {
            name: 'Cook Islands',
            code: 'CK'
          }, {
            name: 'Costa Rica',
            code: 'CR'
          }, {
            name: 'Cote D\'Ivoire',
            code: 'CI'
          }, {
            name: 'Croatia',
            code: 'HR'
          }, {
            name: 'Cuba',
            code: 'CU'
          }, {
            name: 'Cyprus',
            code: 'CY'
          }, {
            name: 'Czech Republic',
            code: 'CZ'
          }, {
            name: 'Denmark',
            code: 'DK'
          }, {
            name: 'Djibouti',
            code: 'DJ'
          }, {
            name: 'Dominica',
            code: 'DM'
          }, {
            name: 'Dominican Republic',
            code: 'DO'
          }, {
            name: 'Ecuador',
            code: 'EC'
          }, {
            name: 'Egypt',
            code: 'EG'
          }, {
            name: 'El Salvador',
            code: 'SV'
          }, {
            name: 'Equatorial Guinea',
            code: 'GQ'
          }, {
            name: 'Eritrea',
            code: 'ER'
          }, {
            name: 'Estonia',
            code: 'EE'
          }, {
            name: 'Ethiopia',
            code: 'ET'
          }, {
            name: 'Falkland Islands (Malvinas)',
            code: 'FK'
          }, {
            name: 'Faroe Islands',
            code: 'FO'
          }, {
            name: 'Fiji',
            code: 'FJ'
          }, {
            name: 'Finland',
            code: 'FI'
          }, {
            name: 'France',
            code: 'FR'
          }, {
            name: 'French Guiana',
            code: 'GF'
          }, {
            name: 'French Polynesia',
            code: 'PF'
          }, {
            name: 'French Southern Territories',
            code: 'TF'
          }, {
            name: 'Gabon',
            code: 'GA'
          }, {
            name: 'Gambia',
            code: 'GM'
          }, {
            name: 'Georgia',
            code: 'GE'
          }, {
            name: 'Germany',
            code: 'DE'
          }, {
            name: 'Ghana',
            code: 'GH'
          }, {
            name: 'Gibraltar',
            code: 'GI'
          }, {
            name: 'Greece',
            code: 'GR'
          }, {
            name: 'Greenland',
            code: 'GL'
          }, {
            name: 'Grenada',
            code: 'GD'
          }, {
            name: 'Guadeloupe',
            code: 'GP'
          }, {
            name: 'Guam',
            code: 'GU'
          }, {
            name: 'Guatemala',
            code: 'GT'
          }, {
            name: 'Guernsey',
            code: 'GG'
          }, {
            name: 'Guinea',
            code: 'GN'
          }, {
            name: 'Guinea-Bissau',
            code: 'GW'
          }, {
            name: 'Guyana',
            code: 'GY'
          }, {
            name: 'Haiti',
            code: 'HT'
          }, {
            name: 'Heard Island and Mcdonald Islands',
            code: 'HM'
          }, {
            name: 'Holy See (Vatican City State)',
            code: 'VA'
          }, {
            name: 'Honduras',
            code: 'HN'
          }, {
            name: 'Hong Kong',
            code: 'HK'
          }, {
            name: 'Hungary',
            code: 'HU'
          }, {
            name: 'Iceland',
            code: 'IS'
          }, {
            name: 'India',
            code: 'IN'
          }, {
            name: 'Indonesia',
            code: 'ID'
          }, {
            name: 'Iran, Islamic Republic Of',
            code: 'IR'
          }, {
            name: 'Iraq',
            code: 'IQ'
          }, {
            name: 'Ireland',
            code: 'IE'
          }, {
            name: 'Isle of Man',
            code: 'IM'
          }, {
            name: 'Israel',
            code: 'IL'
          }, {
            name: 'Italy',
            code: 'IT'
          }, {
            name: 'Jamaica',
            code: 'JM'
          }, {
            name: 'Japan',
            code: 'JP'
          }, {
            name: 'Jersey',
            code: 'JE'
          }, {
            name: 'Jordan',
            code: 'JO'
          }, {
            name: 'Kazakhstan',
            code: 'KZ'
          }, {
            name: 'Kenya',
            code: 'KE'
          }, {
            name: 'Kiribati',
            code: 'KI'
          }, {
            name: 'Korea, Democratic People\'S Republic of',
            code: 'KP'
          }, {
            name: 'Korea, Republic of',
            code: 'KR'
          }, {
            name: 'Kuwait',
            code: 'KW'
          }, {
            name: 'Kyrgyzstan',
            code: 'KG'
          }, {
            name: 'Lao People\'S Democratic Republic',
            code: 'LA'
          }, {
            name: 'Latvia',
            code: 'LV'
          }, {
            name: 'Lebanon',
            code: 'LB'
          }, {
            name: 'Lesotho',
            code: 'LS'
          }, {
            name: 'Liberia',
            code: 'LR'
          }, {
            name: 'Libyan Arab Jamahiriya',
            code: 'LY'
          }, {
            name: 'Liechtenstein',
            code: 'LI'
          }, {
            name: 'Lithuania',
            code: 'LT'
          }, {
            name: 'Luxembourg',
            code: 'LU'
          }, {
            name: 'Macao',
            code: 'MO'
          }, {
            name: 'Macedonia, The Former Yugoslav Republic of',
            code: 'MK'
          }, {
            name: 'Madagascar',
            code: 'MG'
          }, {
            name: 'Malawi',
            code: 'MW'
          }, {
            name: 'Malaysia',
            code: 'MY'
          }, {
            name: 'Maldives',
            code: 'MV'
          }, {
            name: 'Mali',
            code: 'ML'
          }, {
            name: 'Malta',
            code: 'MT'
          }, {
            name: 'Marshall Islands',
            code: 'MH'
          }, {
            name: 'Martinique',
            code: 'MQ'
          }, {
            name: 'Mauritania',
            code: 'MR'
          }, {
            name: 'Mauritius',
            code: 'MU'
          }, {
            name: 'Mayotte',
            code: 'YT'
          }, {
            name: 'Mexico',
            code: 'MX'
          }, {
            name: 'Micronesia, Federated States of',
            code: 'FM'
          }, {
            name: 'Moldova, Republic of',
            code: 'MD'
          }, {
            name: 'Monaco',
            code: 'MC'
          }, {
            name: 'Mongolia',
            code: 'MN'
          }, {
            name: 'Montserrat',
            code: 'MS'
          }, {
            name: 'Morocco',
            code: 'MA'
          }, {
            name: 'Mozambique',
            code: 'MZ'
          }, {
            name: 'Myanmar',
            code: 'MM'
          }, {
            name: 'Namibia',
            code: 'NA'
          }, {
            name: 'Nauru',
            code: 'NR'
          }, {
            name: 'Nepal',
            code: 'NP'
          }, {
            name: 'Netherlands',
            code: 'NL'
          }, {
            name: 'Netherlands Antilles',
            code: 'AN'
          }, {
            name: 'New Caledonia',
            code: 'NC'
          }, {
            name: 'New Zealand',
            code: 'NZ'
          }, {
            name: 'Nicaragua',
            code: 'NI'
          }, {
            name: 'Niger',
            code: 'NE'
          }, {
            name: 'Nigeria',
            code: 'NG'
          }, {
            name: 'Niue',
            code: 'NU'
          }, {
            name: 'Norfolk Island',
            code: 'NF'
          }, {
            name: 'Northern Mariana Islands',
            code: 'MP'
          }, {
            name: 'Norway',
            code: 'NO'
          }, {
            name: 'Oman',
            code: 'OM'
          }, {
            name: 'Pakistan',
            code: 'PK'
          }, {
            name: 'Palau',
            code: 'PW'
          }, {
            name: 'Palestinian Territory, Occupied',
            code: 'PS'
          }, {
            name: 'Panama',
            code: 'PA'
          }, {
            name: 'Papua New Guinea',
            code: 'PG'
          }, {
            name: 'Paraguay',
            code: 'PY'
          }, {
            name: 'Peru',
            code: 'PE'
          }, {
            name: 'Philippines',
            code: 'PH'
          }, {
            name: 'Pitcairn',
            code: 'PN'
          }, {
            name: 'Poland',
            code: 'PL'
          }, {
            name: 'Portugal',
            code: 'PT'
          }, {
            name: 'Puerto Rico',
            code: 'PR'
          }, {
            name: 'Qatar',
            code: 'QA'
          }, {
            name: 'Reunion',
            code: 'RE'
          }, {
            name: 'Romania',
            code: 'RO'
          }, {
            name: 'Russian Federation',
            code: 'RU'
          }, {
            name: 'RWANDA',
            code: 'RW'
          }, {
            name: 'Saint Helena',
            code: 'SH'
          }, {
            name: 'Saint Kitts and Nevis',
            code: 'KN'
          }, {
            name: 'Saint Lucia',
            code: 'LC'
          }, {
            name: 'Saint Pierre and Miquelon',
            code: 'PM'
          }, {
            name: 'Saint Vincent and the Grenadines',
            code: 'VC'
          }, {
            name: 'Samoa',
            code: 'WS'
          }, {
            name: 'San Marino',
            code: 'SM'
          }, {
            name: 'Sao Tome and Principe',
            code: 'ST'
          }, {
            name: 'Saudi Arabia',
            code: 'SA'
          }, {
            name: 'Senegal',
            code: 'SN'
          }, {
            name: 'Serbia, Republic of',
            code: 'RS'
          }, {
            name: 'Montenegro',
            code: 'ME'
          }, {
            name: 'Seychelles',
            code: 'SC'
          }, {
            name: 'Sierra Leone',
            code: 'SL'
          }, {
            name: 'Singapore',
            code: 'SG'
          }, {
            name: 'Slovakia',
            code: 'SK'
          }, {
            name: 'Slovenia',
            code: 'SI'
          }, {
            name: 'Solomon Islands',
            code: 'SB'
          }, {
            name: 'Somalia',
            code: 'SO'
          }, {
            name: 'South Africa',
            code: 'ZA'
          }, {
            name: 'South Georgia and the South Sandwich Islands',
            code: 'GS'
          }, {
            name: 'Spain',
            code: 'ES'
          }, {
            name: 'Sri Lanka',
            code: 'LK'
          }, {
            name: 'Sudan',
            code: 'SD'
          }, {
            name: 'Suriname',
            code: 'SR'
          }, {
            name: 'Svalbard and Jan Mayen',
            code: 'SJ'
          }, {
            name: 'Swaziland',
            code: 'SZ'
          }, {
            name: 'Sweden',
            code: 'SE'
          }, {
            name: 'Switzerland',
            code: 'CH'
          }, {
            name: 'Syrian Arab Republic',
            code: 'SY'
          }, {
            name: 'Taiwan, Province of China',
            code: 'TW'
          }, {
            name: 'Tajikistan',
            code: 'TJ'
          }, {
            name: 'Tanzania, United Republic of',
            code: 'TZ'
          }, {
            name: 'Thailand',
            code: 'TH'
          }, {
            name: 'Timor-Leste',
            code: 'TL'
          }, {
            name: 'Togo',
            code: 'TG'
          }, {
            name: 'Tokelau',
            code: 'TK'
          }, {
            name: 'Tonga',
            code: 'TO'
          }, {
            name: 'Trinidad and Tobago',
            code: 'TT'
          }, {
            name: 'Tunisia',
            code: 'TN'
          }, {
            name: 'Turkey',
            code: 'TR'
          }, {
            name: 'Turkmenistan',
            code: 'TM'
          }, {
            name: 'Turks and Caicos Islands',
            code: 'TC'
          }, {
            name: 'Tuvalu',
            code: 'TV'
          }, {
            name: 'Uganda',
            code: 'UG'
          }, {
            name: 'Ukraine',
            code: 'UA'
          }, {
            name: 'United Arab Emirates',
            code: 'AE'
          }, {
            name: 'United Kingdom',
            code: 'GB'
          }, {
            name: 'United States',
            code: 'US'
          }, {
            name: 'United States Minor Outlying Islands',
            code: 'UM'
          }, {
            name: 'Uruguay',
            code: 'UY'
          }, {
            name: 'Uzbekistan',
            code: 'UZ'
          }, {
            name: 'Vanuatu',
            code: 'VU'
          }, {
            name: 'Venezuela',
            code: 'VE'
          }, {
            name: 'Viet Nam',
            code: 'VN'
          }, {
            name: 'Virgin Islands, British',
            code: 'VG'
          }, {
            name: 'Virgin Islands, U.S.',
            code: 'VI'
          }, {
            name: 'Wallis and Futuna',
            code: 'WF'
          }, {
            name: 'Western Sahara',
            code: 'EH'
          }, {
            name: 'Yemen',
            code: 'YE'
          }, {
            name: 'Zambia',
            code: 'ZM'
          }, {
            name: 'Zimbabwe',
            code: 'ZW'
          }];
        }
      }
    }
  });
  tokenfield.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626055837461
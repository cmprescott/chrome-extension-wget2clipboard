// SAMPLE
this.manifest = {
  "name": "Wget2Clipboard",
  "icon": "../../icons/icon48.png",
  "settings": [
    // ----------------------------
    // System wide settings
    // ----------------------------
    {
      "tab": i18n.get("system"),
      "group": i18n.get("os"),
      "name": "osRadioButtons",
      "type": "radioButtons",
      //"label": "Wget will be run on:",
      "options": [
      {"value": "Windows"},
      {"value": "Linux"}
      ]
    },
    {
      "tab": i18n.get("system"),
      "group": i18n.get("os"),
      "name": "osSystem",
      "type": "description",
      "text": i18n.get("description")
    },
    {
      "tab": i18n.get("system"),
      "group": "Command Prompt",
      "name": "escapeChar",
      "type": "text",
      "label":"Escape character:",
      "text": "^"
    },
    {
      "tab": i18n.get("system"),
      "group": "Command Prompt",
      "name": "additionalCommandChar",
      "type": "text",
      "label": "Additional command character:",
      "text": "&"
    },
    {
      "tab": i18n.get("system"),
      "group": "Command Prompt",
      "name": "nextLineChar",
      "type": "text",
      "label":"Continue to next line character:",
      "text": "\\"
    },
    // ----------------------------
    // Wget Settings
    // ----------------------------
    {
      "tab": "Wget",
      "group": "Path",
      "name": "pathToExec",
      "type": "text",
      //"label": ":",
      "text": "Command or Path of executable to run Wget"
    },
    {
      "tab": "Wget",
      "group": "Parameters",
      "name": "domainWhitelist",
      "type": "text",
      "label": "Whitelist domains:",
      "text": i18n.get("x-characters")
    },
    {
      "tab": "Wget",
      "group": "Parameters",
      "name": "useCookies",
      "type": "checkbox",
      "label": "Use Cookies?"
    },
    {
      "tab": "Wget",
      "group": "Parameters",
      "name": "ignoreSSL",
      "type": "checkbox",
      "label": "Ignore SSL?"
    },
    // ----------------------------
    // Advertisements?
    // ----------------------------
    {
      "tab": "Top Monitor Deals",
      "group": "Command Prompt",
      "name": "additionalCommandChar",
      "type": "text",
      "label": "Additional command character:",
      "text": i18n.get("x-characters")
    },
    // ----------------------------
    // About
    // ----------------------------
    {
      "tab": "About",
      "group": "Command Prompt",
      "name": "additionalCommandChar",
      "type": "text",
      "label": "Additional command character:",
      "text": i18n.get("x-characters")
    },
    
    // Examples
    {
      "tab": i18n.get("information"),
      "group": i18n.get("login"),
      "name": "username",
      "type": "text",
      "label": i18n.get("username"),
      "text": i18n.get("x-characters")
    },
    {
      "tab": i18n.get("information"),
      "group": i18n.get("login"),
      "name": "password",
      "type": "text",
      "label": i18n.get("password"),
      "text": i18n.get("x-characters-pw"),
      "masked": true
    },
    {
      "tab": i18n.get("information"),
      "group": i18n.get("login"),
      "name": "myDescription",
      "type": "description",
      "text": i18n.get("description")
    },
    {
      "tab": i18n.get("information"),
      "group": i18n.get("logout"),
      "name": "myCheckbox",
      "type": "checkbox",
      "label": i18n.get("enable")
    },
    {
      "tab": i18n.get("information"),
      "group": i18n.get("logout"),
      "name": "myButton",
      "type": "button",
      "label": i18n.get("disconnect"),
      "text": i18n.get("logout")
    },
    {
      "tab": "Details",
      "group": "Sound",
      "name": "noti_volume",
      "type": "slider",
      "label": "Notification volume:",
      "max": 1,
      "min": 0,
      "step": 0.01,
      "display": true,
      "displayModifier": function (value) {
        return (value * 100).floor() + "%";
      }
    },
    {
      "tab": "Details",
      "group": "Sound",
      "name": "sound_volume",
      "type": "slider",
      "label": "Sound volume:",
      "max": 100,
      "min": 0,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "%";
      }
    },
    {
      "tab": "Details",
      "group": "Food",
      "name": "myPopupButton",
      "type": "popupButton",
      "label": "Soup 1 should be:",
      "options": {
        "groups": [
          "Hot", "Cold",
        ],
        "values": [
          {
            "value": "hot",
            "text": "Very hot",
            "group": "Hot",
          },
          {
            "value": "Medium",
            "group": 1,
          },
          {
            "value": "Cold",
            "group": 2,
          },
          ["Non-existing"]
        ],
      },
    },
    {
      "tab": "Details",
      "group": "Food",
      "name": "myListBox",
      "type": "listBox",
      "label": "Soup 2 should be:",
      "options": [
        ["hot", "Hot and yummy"],
        ["cold"]
      ]
    },
    {
      "tab": "Details",
      "group": "Food",
      "name": "myRadioButtons",
      "type": "radioButtons",
      "label": "Soup 3 should be:",
      "options": [
        ["hot", "Hot and yummy"],
        ["cold"]
      ]
    }
  ],
  "alignment": [
    [
      "escapeChar",
      "additionalCommandChar",
      "nextLineChar"
    ],
    [
      "username",
      "password"
    ],
    [
      "noti_volume",
      "sound_volume"
    ]
  ]
};

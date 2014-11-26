/**
 * Namespace for the chrome extension
 *
 * @type {Wget2Clipboard|*|{handler: {onClick: {}, tabLoad: {}, tabUpdated: {}}, model: {command: {}, echo: {}, files: {}, netscapeCookies: {}, wget: {}}, util: {}, var: {domainList: {}, netscapeCookies: {}, settings: {}}}}
 */
var Wget2Clipboard = Wget2Clipboard ||
{
  handler: {
    onClick : {},
    tabLoad : {},
    tabUpdated : {}
  },
  model: {
    Command : {
      Delete : {},
      Echo : {},
      Wget : {}
    },
    File : {},
    NetscapeCookie : {}
  },
  util: {
    copy: {},
    escapeForConsole: {},
    escapeJs: {},
    parseDomain: {}
  },
  var: {
    cookiesFile : {},
    domainList : {},
    netscapeCookies : [],
    settings : {}
  }
};

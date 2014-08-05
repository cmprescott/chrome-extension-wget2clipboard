/**
 * Copies string to clipboard as plain text
 *
 * @param {string} str including javascript escape characters to copy to the clipboard
 */
Wget2Clipboard.util.copy = (function(str) {
  document.oncopy = function(event) {
    event.clipboardData.setData("text/plain", str);
    event.preventDefault();
  };
  document.execCommand("Copy", false, null);
});

/**
 *
 * @param text
 * @returns {*}
 */
Wget2Clipboard.util.escapeJS = (function(text) {
  // only need to escape valid text or text with URI's
  if (!text || !text.indexOf("\"")) {
    return text;
  }
  else {
    return encodeURIComponent(text);
  }
});

/**
 *
 * @param text
 * @returns {*}
 */
Wget2Clipboard.util.escapeForConsole = (function(text) {
  if (!text) {
    return text;
  }
  // need to unescape URI's since we are exiting JS use
  else if(text.indexOf("\"")) {
    return decodeURIComponent(text);
  }
  // need to escape unquoted |'s in non parameters
  else {
    // TODO -- Parameterize this and make not for windows only
    return String(text).replace(/\|/g, "^|");
  }
});

/**
 * Strips a url to only display the domain name
 *
 * @param {string} url complete url including protocol
 * @return {string} domain of url (no protocol)
 */
Wget2Clipboard.util.parseDomain = (function(url) {
  var server, parts, isIp, domain;

  // remove http://, https://, ftp://, etc
  server = url.match(/:\/\/(.[^/:#?]+)/)[1];
  parts = server.split(".");
  isIp = !isNaN(parseInt(server.replace(".", ""), 10));

  if (parts.length <= 1 || isIp) {
    domain = server;
  } else {
    //search second level domain suffixes
    var domains = [];
    domains[0] = parts[parts.length - 1];
    for (i = 1; i < parts.length; i++) {
      domains[i] = parts[parts.length - i - 1] + "." + domains[i - 1];
      //domainList defines big list of second level domains
      if (!Wget2Clipboard.var.domainList.hasOwnProperty(domains[i])) {
        domain = domains[i];
        break;
      }
    }
    if (typeof (domain) == "undefined") {
      domain = server;
    }
  }
  return domain;
});

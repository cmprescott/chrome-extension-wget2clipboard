/**
 *
 * @param {Array} cookies set the persistent tab cookies
 */
Wget2Clipboard.var.setNetscapeCookies = (function(cookies) {
  Wget2Clipboard.var.netscapeCookies = cookies.map(Wget2Clipboard.model.NetscapeCookies);
});

/**
 *
 * @type {Function}
 */
Wget2Clipboard.var.getNetscapeCookies = (function() {
  return Wget2Clipboard.var.netscapeCookies || [];
});
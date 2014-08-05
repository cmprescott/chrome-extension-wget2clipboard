/**
 * @param {Array|Cookie} cookies set the persistent tab cookies
 * @type {Function}
 */
Wget2Clipboard.var.setNetscapeCookies = (function(cookies) {
  Wget2Clipboard.var.netscapeCookies = cookies.map(
    function(cookie) {
      return new Wget2Clipboard.model.NetscapeCookie(cookie);
    }
  );
});

/**
 *
 * @type {Function}
 */
Wget2Clipboard.var.getNetscapeCookies = (function() {
  return Wget2Clipboard.var.netscapeCookies || [];
});
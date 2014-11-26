/**
 * Creates a Netscape format cookie from a Chrome cookie
 *
 * @param {Cookie} cookie google chrome cookie
 * @constructor
 */
Wget2Clipboard.model.NetscapeCookie = (function(cookie) {
  this.domain = cookie.domain;
  this.expirationDate = (cookie.expirationDate ? cookie.expirationDate : "0"); // cast to string
  this.hostOnly = (!cookie.hostOnly).toString().toUpperCase();
  this.name = cookie.name;
  this.path = cookie.path;
  this.secure = cookie.secure.toString().toUpperCase();
  this.value = cookie.value;
});

/**
 * Overrides the default toString()
 * @returns {string} netscape cookie as a string
 */
Wget2Clipboard.model.NetscapeCookie.prototype.toString = (function() {
  return [
    this.domain,
    this.hostOnly,
    this.path,
    this.secure,
    this.expirationDate,
    this.name,
    this.value].join("    ");
});

/**
 * Used to map an array to Netscape Cookies
 *
 * @param cookie
 * @constructor
 */
Wget2Clipboard.model.NetscapeCookies = (function(cookie) {
  return new Wget2Clipboard.model.NetscapeCookie(cookie);
});
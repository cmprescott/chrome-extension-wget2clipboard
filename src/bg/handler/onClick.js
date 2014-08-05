/**
 * Handles when user right click on "Copy Wget command" on a link
 * @type {Function}
 */
Wget2Clipboard.handler.onClick.copyCommandsToClipboard = (function(info, tab) {
  // Copy the '1-liner' command to the clipboard
  Wget2Clipboard.util.copy(
    Wget2Clipboard.handler.onClick.generateCommands(tab.url, info.linkUrl, Wget2Clipboard.var.getNetscapeCookies())
  );
});

/**
 * @param {String} tabUrl the current tab's URL
 * @param {String} targetUrl URL user right clicked on
 * @param {Array|NetscapeCookie} cookies the cookie's associated with the current tab
 * @returns {String} commands to save netscape netscapeCookies (if necessary), use Wget to download, and delete netscapeCookies file
 */
Wget2Clipboard.handler.onClick.generateCommands = (function(tabUrl, targetUrl, cookies) {
  var writeCookiesCommands, deleteCookiesCommand, wgetCommand;

  writeCookiesCommands = cookies.map(Wget2Clipboard.model.Command.Echos);
  writeCookiesCommands = writeCookiesCommands.map(Wget2Clipboard.var.redirectToCookiesFile);
  wgetCommand = [new Wget2Clipboard.model.Command.Wget(tabUrl, targetUrl, cookies)];
  deleteCookiesCommand = cookies.length > 0 ? [new Wget2Clipboard.model.Command.Delete(Wget2Clipboard.var.cookiesFile)] : [];

  return writeCookiesCommands.concat(wgetCommand).concat(deleteCookiesCommand).join(" & ^\r\n");
});


/**
 * Handles when user right click on "Copy Wget command" on a link
 * @type {Function}
 */
Wget2Clipboard.handler.onClick.copyCommandsToClipboard = (function(info, tab) {
  /**
   * @param {String} tabUrl the current tab's URL
   * @param {String} targetUrl URL user right clicked on
   * @param {Array|NetscapeCookie} cookies the cookie's associated with the current tab
   * @returns {String} commands to save netscape netscapeCookies (if necessary), use Wget to download, and delete netscapeCookies file
   */
  var generateCommands = (function(tabUrl, targetUrl, cookies) {
    var echoCookieCommands, echoCookieToFileCommands, deleteCookieFileCommand, wgetCommand;

    echoCookieCommands = cookies.map(Wget2Clipboard.model.Command.Echos);
    echoCookieToFileCommands = Wget2Clipboard.util.redirectCommandsToFile(echoCookieCommands, Wget2Clipboard.var.cookiesFile);
    wgetCommand = [new Wget2Clipboard.model.Command.Wget(tabUrl, targetUrl, cookies)];
    deleteCookieFileCommand = cookies.length > 0 ? [new Wget2Clipboard.model.Command.Delete(Wget2Clipboard.var.cookiesFile)] : [];

    return echoCookieToFileCommands.concat(wgetCommand).concat(deleteCookieFileCommand).join(" & ^\r\n");
  });

  // Copy the '1-liner' command to the clipboard
  Wget2Clipboard.util.copy(
    generateCommands(tab.url, info.linkUrl, Wget2Clipboard.var.getNetscapeCookies())
  );
});

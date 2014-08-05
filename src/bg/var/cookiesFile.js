/**
 *
 * @param c
 */

Wget2Clipboard.var.cookiesFile = new Wget2Clipboard.model.File("cookies.txt");

Wget2Clipboard.var.redirectToCookiesFile = (function(command) {
  command.redirectOutputTo(Wget2Clipboard.var.cookiesFile);
  return command;
});

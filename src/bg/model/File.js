/**
 *
 * @param path
 * @returns {File}
 * @constructor
 */
Wget2Clipboard.model.File = (function(path) {
  this.path = path || "NOT_NAMED.txt";
});

Wget2Clipboard.model.File.prototype.redirectCommands = (function(commands) {
  command.redirectOutputTo(Wget2Clipboard.var.cookiesFile);
  return command;
});

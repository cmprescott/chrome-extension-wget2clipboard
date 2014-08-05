/**
 *
 * @param {Object} exec
 * @param {Object} parameters
 */
Wget2Clipboard.model.Command = (function(exec, parameters) {
  this.exec = Wget2Clipboard.util.escapeJS(exec) || "";
  this.parameters = parameters ? parameters.map(Wget2Clipboard.util.escapeJS) : [];
});

/**
 *
 * @param {File} file -- file to redirect the command's output to
 */
Wget2Clipboard.model.Command.prototype.redirectOutputTo = (function(file) {
  this.parameters.concat(" >> " + file.path);
});

/**
 * Combine exec and parameters to 1 array and join using the line seperator and newlines
 *
 * @return {String} concatenated exec & parameters
 */
Wget2Clipboard.model.Command.prototype.toString = (function() {
  return [this.exec].concat(this.parameters).map(Wget2Clipboard.util.escapeForConsole).join(" ");
});

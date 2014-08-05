/**
 *
 * @param File
 * @constructor
 */
Wget2Clipboard.model.Command.Delete = (function(File) {
  Wget2Clipboard.model.Command.call(
    this,
    Wget2Clipboard.model.Command.Delete.exec(File)
  );
});

Wget2Clipboard.model.Command.Delete.prototype = new Wget2Clipboard.model.Command();
Wget2Clipboard.model.Command.Delete.prototype.constructor = Wget2Clipboard.model.Command.Delete;

/**
 *
 * @type {Function}
 */
Wget2Clipboard.model.Command.Delete.exec = (function(File) {
  return "del " + File.path;
});
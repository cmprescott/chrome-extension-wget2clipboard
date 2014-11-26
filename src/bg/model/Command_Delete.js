/**
 *
 * @param File
 * @constructor
 */
Wget2Clipboard.model.Command.Delete = (function(File) {
  /**
   *
   * @type {Function}
   */
  var exec = (function(File) {
    return "del " + File.path;
  });

  /**
   * call Super() constr
   */
  Wget2Clipboard.model.Command.call(
      this,
      exec(File)
  );
});

Wget2Clipboard.model.Command.Delete.prototype = new Wget2Clipboard.model.Command();
Wget2Clipboard.model.Command.Delete.prototype.constructor = Wget2Clipboard.model.Command.Delete;

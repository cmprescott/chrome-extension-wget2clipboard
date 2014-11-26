/**
 * Creates the echo command (outputs to console)
 *
 * @param obj object to write out
 * @returns {Wget2Clipboard.model.Command.Echo} Echo Command object
 * @constructor
 */
Wget2Clipboard.model.Command.Echo = (function(obj) {
  /**
   * @return {string} the echo command
   */
  var exec = (function(obj) {
    return "echo " + obj.toString();
  });

  /**
   * call Super() constr
   */
  Wget2Clipboard.model.Command.call(
      this,
      exec(obj),
      null
  );
});

/**
 * Used to map an array to Echo commands
 *
 * @param obj
 * @constructor
 */
Wget2Clipboard.model.Command.Echos = (function(obj) {
  return new Wget2Clipboard.model.Command.Echo(obj);
});

Wget2Clipboard.model.Command.Echo.prototype = new Wget2Clipboard.model.Command(null, null);
Wget2Clipboard.model.Command.Echo.prototype.constructor = Wget2Clipboard.model.Command.Echo;

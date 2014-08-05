/**
 * Creates the echo command (outputs to console)
 *
 * @param obj object to write out
 * @returns {Command} Echo Command object
 * @constructor
 */
Wget2Clipboard.model.Command.Echo = (function(obj) {
  Wget2Clipboard.model.Command.call(
    this,
    Wget2Clipboard.model.Command.Echo.exec(obj)
  );
});

Wget2Clipboard.model.Command.Echo.prototype = new Wget2Clipboard.model.Command();
Wget2Clipboard.model.Command.Echo.prototype.constructor = Wget2Clipboard.model.Command.Echo;

/**
 * Used to map an array to Echo commands
 *
 * @param obj
 * @constructor
 */
Wget2Clipboard.model.Command.Echos = (function(obj) {
  return new Wget2Clipboard.model.Command.Echo(obj);
});

/**
 * @return {String} the echo command
 */
Wget2Clipboard.model.Command.Echo.exec = (function(obj) {
  return "echo " + obj.toString();
});

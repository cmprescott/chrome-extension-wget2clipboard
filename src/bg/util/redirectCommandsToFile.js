/**
 *
 * @type {Function}
 */
Wget2Clipboard.util.redirectCommandsToFile = (function(commands, file) {
    return commands.map(
        function(command) {
            command.redirectOutputTo(file);
            return command;
        }
    );
});
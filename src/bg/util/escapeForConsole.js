/**
 *
 * @param text
 * @returns {*}
 */
Wget2Clipboard.util.escapeForConsole = (function(text) {
    if (!text) {
        return text;
    }
    // need to unescape URI's since we are exiting JS use
    else if(text.indexOf("\"")) {
        return decodeURIComponent(text);
    }
    // need to escape unquoted |'s in non parameters
    else {
        // TODO -- Parameterize this and make not for windows only
        return String(text).replace(/\|/g, "^|");
    }
});
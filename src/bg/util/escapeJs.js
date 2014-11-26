/**
 *
 * @param text
 * @returns {*}
 */
Wget2Clipboard.util.escapeJS = (function(text) {
    // only need to escape valid text or text with URI's
    if (!text || !text.indexOf("\"")) {
        return text;
    }
    else {
        return encodeURIComponent(text);
    }
});

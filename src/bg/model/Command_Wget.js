/**
 * Creates a Wget command for a target automagically filling the...
 * continue, referrer, user-agent, cookies, no-check-cert parameters
 *
 * @param {string} tabUrl current URL of tab
 * @param {string} targetUrl URL to download
 * @param {Array|Wget2Clipboard.model.NetscapeCookie} cookies array of netscape cookies associated with domain
 * @return {Wget2Clipboard.model.Command.Wget} Wget command & parameters
 * @constructor
 */
Wget2Clipboard.model.Command.Wget = (function (tabUrl, targetUrl, cookies) {

    /**
     * @returns {string} path to Win wget default install
     */
    var exec = (function() {
        return "call \"C:\\Program Files (x86)\\GnuWin32\\" + "bin\\wget.exe\"";
    });
    /**
     *
     * @param {string|null} tabUrl url of current tab
     * @param {string|null} targetUrl url to download
     * @param {Array|Wget2Clipboard.model.NetscapeCookie} cookies cookies associated with domain
     * @returns {Array} Wget parameters
     */
    var parameters = (function(tabUrl, targetUrl, cookies) {
        return ["--continue \"" + targetUrl + "\""]
            .concat("--user-agent=\"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092416 Firefox/3.0.3\"")
            .concat("--referer=\"" + tabUrl + "\"")
            .concat(cookies.length > 0 ? "--load-cookies cookies.txt" : [])
            .concat("--no-check-certificate")
            .concat("-O " + targetUrl.substring(targetUrl.lastIndexOf("/") + 1));
    });

    /**
     * call Super() constr
     */
    Wget2Clipboard.model.Command.call(
        this,
        exec(),
        parameters(tabUrl, targetUrl, cookies)
    );
});

Wget2Clipboard.model.Command.Wget.prototype = new Wget2Clipboard.model.Command(null, null);
Wget2Clipboard.model.Command.Wget.prototype.constructor = Wget2Clipboard.model.Command.Wget;

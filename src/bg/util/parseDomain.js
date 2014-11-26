/**
 * Strips a url to only display the domain name
 *
 * @param {string} url complete url including protocol
 * @return {string} domain of url (no protocol)
 */
Wget2Clipboard.util.parseDomain = (function(url) {
    var server, parts, isIp, domain, i;

    // remove http://, https://, ftp://, etc
    server = url.match(/:\/\/(.[^/:#?]+)/)[1];
    parts = server.split(".");
    isIp = !isNaN(parseInt(server.replace(".", ""), 10));

    if (parts.length <= 1 || isIp) {
        domain = server;
    } else {
        //search second level domain suffixes
        var domains = [];
        domains[0] = parts[parts.length - 1];
        for (i = 1; i < parts.length; i++) {
            domains[i] = parts[parts.length - i - 1] + "." + domains[i - 1];
            //domainList defines big list of second level domains
            if (!Wget2Clipboard.var.domainList.hasOwnProperty(domains[i])) {
                domain = domains[i];
                break;
            }
        }
        if (typeof (domain) == "undefined") {
            domain = server;
        }
    }
    return domain;
});


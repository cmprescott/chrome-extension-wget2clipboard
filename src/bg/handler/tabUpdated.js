/**
 * On tab update get text format cookies in the tab's domain
 *
 * @param tabId
 * @param changeInfo
 * @param tab
 */
Wget2Clipboard.handler.tabUpdated = (function(tabId, changeInfo, tab) {
  // After tab loads, then save the netscape cookies
  if (changeInfo.status === 'complete') {
    chrome.cookies.getAll(
      { domain : Wget2Clipboard.util.parseDomain(tab.url) },
      Wget2Clipboard.var.setNetscapeCookies
    );
  }
});

/**
 * (New URL) Get domain's cookies in netscape on update
 */
chrome.tabs.onUpdated.addListener(Wget2Clipboard.handler.tabUpdated);

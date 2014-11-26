/**
 * On tab load bind a context menu to generate a wget command when right click on links
 *
 * @param tabs
 */
Wget2Clipboard.handler.tabLoad = (function(tabs) {
  chrome.contextMenus.create({
    "title": "Wget2Clipboard",
    "contexts": ["link"],
    "onclick": Wget2Clipboard.handler.onClick.copyCommandsToClipboard
  });
});

/**
 * (New Tab) Query the current tab on new tab to create context menu
 */
chrome.tabs.query({currentWindow: true, active: true}, Wget2Clipboard.handler.tabLoad);


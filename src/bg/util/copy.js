/**
 * Copies string to clipboard as plain text
 *
 * @param {string} str including javascript escape characters to copy to the clipboard
 */
Wget2Clipboard.util.copy = (function(str) {
  document.oncopy = function(event) {
    event.clipboardData.setData("text/plain", str);
    event.preventDefault();
  };
  document.execCommand("Copy", false, null);
});

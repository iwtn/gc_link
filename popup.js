document.addEventListener("DOMContentLoaded", () => {
  console.log('hoge');
  chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, function (tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });
});

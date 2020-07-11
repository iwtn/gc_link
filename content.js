chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
    }
    return true;
  }
);

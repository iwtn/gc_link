chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {
      const elm = document.querySelector('.RDlrG');
      console.log(elm);

      let res = {};
      if (elm) {
        res.eventId = document.querySelector('.RDlrG div[data-eventid]').dataset.eventid;
      } else {
        res.eventId = null;
      }
      sendResponse(res);
    }
    return true;
  }
);

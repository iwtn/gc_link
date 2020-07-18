chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {
      const elm = document.querySelector('.RDlrG');

      let res = {};
      if (elm) {
        res.eventId = elm.querySelector('div[data-eventid]').dataset.eventid;
        res.text = elm.querySelector('div[data-text]').dataset.text;
        res.date = elm.querySelector('.DN1TJ').innerText;
      } else {
        res.eventId = null;
      }
      sendResponse(res);
    }
    return true;
  }
);

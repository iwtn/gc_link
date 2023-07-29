chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getData") {
    const elm = document.querySelector('.RDlrG');
    let res = {};
    if (elm) {
      res.eventId = elm.querySelector('div[data-eventid]').dataset.eventid;
      res.text = elm.querySelector('.UfeRlc').dataset.text;
      res.date = elm.querySelector('.AzuXid').innerText;
    } else {
      res.eventId = null;
    }
    sendResponse(res);
    return true
  }
});

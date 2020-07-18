const preUel = 'https://www.google.com/calendar/event?eid=';

const copyLink = (tag) => {
  const copyFunc = (event) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(tag);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
  }
  return copyFunc;
}

const makeCopyBtn = (tag) => {
  const btn = document.createElement('button');
  btn.addEventListener('click', copyLink(tag));
  btn.innerText = 'Copy';
  return btn;
}

const makeLiTag = (tag) => {
  const li = document.createElement('li');
  li.appendChild(makeCopyBtn(tag));
  li.appendChild(tag);
  return li;
}

const makeLinkTag = (text, url) => {
  const aTag = document.createElement('a');
  aTag.setAttribute('href', url);
  aTag.setAttribute('target', '_blank');
  aTag.innerHTML = text;

  return makeLiTag(aTag);
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      const view = document.getElementById('eventUrl');
      if (response.eventId) {
        url = preUel + response.eventId;
        text = response.text;
        date = response.date;
        view.appendChild(makeLinkTag(url, url));
        view.appendChild(makeLinkTag(text, url));
        view.appendChild(makeLinkTag(date, url));
        view.appendChild(makeLinkTag(text + ' (' + date + ')', url));
      } else {
        view.innerHTML = 'Click on the schedule you want to create a URL for.';
      }
    });
  });
});

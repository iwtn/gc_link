const preUel = 'https://www.google.com/calendar/event?eid=';

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      const view = document.getElementById('eventUrl');
      if (response.eventId) {
        url = preUel + response.eventId;
        view.innerHTML = '<a href="' + url + '" target="_blank">' + url + '</a>';
      } else {
        view.innerHTML = 'Event id is not found';
      }
    });
  });
});

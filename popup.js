const schedule = document.querySelector('.RDlrG');
console.log(schedule);

if (schedule) {
} else {
  console.log('Select schedule');
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="orange"'
  });

  chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, function (tabs) {

    console.log(tabs[0]);
    const url = new URL(tabs[0].url);
  });
});

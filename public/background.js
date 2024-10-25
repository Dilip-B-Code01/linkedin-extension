let sendingRequests = false;
let requestCount = 0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "start") {
    sendingRequests = true;
    requestCount = 0;
    sendResponse({ status: "started" });
    connectionSent();
  } else if (request.action === "stop") {
    sendingRequests = false;
    sendResponse({ status: "stopped" });
  }
});

function connectionSent() {
  if (sendingRequests) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func: () => {
            const connectButtons = document.querySelectorAll(
              'button[aria-label^="Invite"]'
            );
            if (connectButtons.length > 0) {
              connectButtons[0].click();
              return true;
            }
            return false;
          },
        },
        (results) => {
          if (results[0].result) {
            requestCount++;
            chrome.runtime.sendMessage({
              action: "updateCount",
              count: requestCount,
            });
            setTimeout(connectionSent, 2000);
          } else {
            sendingRequests = false;
          }
        }
      );
    });
  }
}

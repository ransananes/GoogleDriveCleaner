document.addEventListener("DOMContentLoaded", function () {
    let isExtensionRunning;
    const bt = document.getElementById("bttc");
  
    // Retrieve the value from chrome.storage.local
    chrome.storage.local.get("isRunning", function (data) {
      isExtensionRunning = data.isRunning !== null ? data.isRunning : false;
      updateButtonText(isExtensionRunning); // Update button text based on retrieved value
    });
  
    bt.addEventListener("click", function () {
      // Toggle the extension state and update button text
      isExtensionRunning = !isExtensionRunning;
      updateButtonText(isExtensionRunning);
  
      // Send message and update storage based on the toggled state
      const action = isExtensionRunning ? "start" : "stop";
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action });
        chrome.storage.local.set({ isRunning: isExtensionRunning }, function () {});
      });
    });
  
    // Function to update button text based on extension state
    function updateButtonText(isRunning) {
      bt.textContent = isRunning ? "Stop" : "Start";
    }
  });

 
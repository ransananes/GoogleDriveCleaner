function performDeleteAction() {
  const button = document.querySelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.ksBjEc.lKxP2d.LQeN7.EYdxJe.G0UrO');


  if (!button) {
    console.log("Button not found. Couldn't delete all.");
    return;
  }

  button.click();

  const divExists = document.getElementsByClassName(
    "VfPpkd-MPu53c VfPpkd-MPu53c-OWXEXe-dgl2Hf Ne8lhe swXlm az2ine VfPpkd-MPu53c-OWXEXe-mWPk3d"
  )[0];
  if (divExists) {
    // Find the checkbox element under the parent
    const checkbox = divExists.firstElementChild;
    // Check if the checkbox element exists
    if (checkbox) {
      checkbox.click();
    } else {
      console.log("Checkbox not found under the specified parent.");
      return;
    }

    const deleteButton = document.getElementsByClassName(
      "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 vAfTB"
    )[0];

    if (deleteButton) {
      deleteButton.click();
    }
  }

  function exitPopup() {
    const exitButton = document.getElementsByClassName(
      "VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ mN1ivc RfaMpf"
    )[0];

    if (exitButton) {
      exitButton.click();
      return;
    }
    setTimeout(exitPopup, 100); // Check again after 100 milliseconds
  }

  exitPopup();
}

// handles the intervals
let intervalId = null; // To store the interval ID

function handleInterval() {
  if (!intervalId) {
    intervalId = setInterval(performDeleteAction, 5000); // Start function every 5 seconds
  } else {
    clearInterval(intervalId); // Stop the interval if already running
    intervalId = null; // Reset the interval ID
  }
}

let extensionActive = false;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  handleInterval();
});

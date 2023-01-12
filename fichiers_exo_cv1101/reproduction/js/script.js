const windowFeatures = "left=100,top=100,width=320,height=320";
let windowObjectReference = null;
let previousURL;

function openRequestedSingleTab(url) {
    if (windowObjectReference === null || windowObjectReference.closed) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
    } else if (previousURL !== url) {
      windowObjectReference = window.open(url, "SingleSecondaryWindowName", windowFeatures);
      windowObjectReference.focus();
    } else {
      windowObjectReference.focus();
    };
    previousURL = url;
  }

  const links = document.querySelectorAll("a[target='SingleSecondaryWindowName']");

  for (const link of links) {
    link.addEventListener("click", (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    }, false);
  }
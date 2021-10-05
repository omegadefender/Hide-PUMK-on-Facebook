const node = document.body;
const config = { childList: true, subtree: true };

let observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
     let url = window.location.href;
     if (mutation.addedNodes.length && url != 'https://www.facebook.com/friends') {
        checkOptions('pumk2', hidePUMK)
        //hidePUMK();
        hideSuggestedGroups();
    }
  })
});

observer.observe(node, config);

function checkOptions(key, callback) {
  chrome.storage.sync.get(key, function(options) {
    callback(options[key])
  })
}

function hidePUMK(oVal) {
  const optVal = oVal
  let pumkdiv = document.querySelector('[aria-label="People you may know"]');
  let xpath = "//span[text() = 'People you may know']/../../../../../../../..";
  let pumkTextDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (pumkdiv != null && optVal) {
      pumkdiv.remove();
      pumkTextDiv.remove();
  }
}

function hideSuggestedGroups() {
  let xpath = "//span[text() = 'Suggested for you']/../../../../../../../../../../..";
  let sugGroupsDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
  if (sugGroupsDiv != null) {
    sugGroupsDiv.remove();
  }  
}
const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    const url = window.location.href;
    const urlIdex = url.indexOf(".")
    const change = mutation.addedNodes.length
    if (change && url == 'https://www.facebook.com/') {
      checkOptions('pumk1', hidePUMK)
      checkOptions('sugGroups', hideSuggestedGroups)
    }
    if (change && urlIdex != -1) {
      checkOptions('pumk2', hidePUMK)
    }
  })
});

observer.observe(node, config);

function checkOptions(key, callback) {
  chrome.storage.sync.get(key, function(options) {
    callback(options[key])
  })
}

function hidePUMK(value) {
  const xpath = "//span[text() = 'People you may know']/../../../../../../../.."
  const pumkDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (pumkDiv != null && value) {    
    pumkDiv.remove()
    console.log("Pumk removed")
  }
}

function hideSuggestedGroups(value) {
  let xpath = "//span[text() = 'Suggested for you']/../../../../../../../../../../.."
  let sugGroupsDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (sugGroupsDiv != null && value) {
    sugGroupsDiv.remove()
    console.log("sugGroups Removed")
  }  
}
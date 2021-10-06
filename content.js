const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    const change = mutation.addedNodes.length
    const url = urlChopper(window.location.href)
    const urlIdex = url.indexOf(".")   
    if (change && url == '') {
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

function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

function hidePUMK(value) {
  const xpath = "//span[text() = 'People you may know']/../../../../../../../.."
  const pumkDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (pumkDiv != null && value) {    
    pumkDiv.remove()
  }
}

function hideSuggestedGroups(value) {
  const xpath = "//span[text() = 'Suggested for you']/../../../../../../../../../../.."
  const sugGroupsDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (sugGroupsDiv != null && value) {
    sugGroupsDiv.remove()
    console.log("sugGroups Removed")
  }  
}
const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    const change = mutation.addedNodes.length
    const url = urlChopper(window.location.href)
    const urlIdex = url.indexOf(".")   
    if (change && url == '') {
      checkOption('pumk1', pumk)
      checkOption('sugGroups', suggestedForYou)
      checkOption('stories', stories)
      checkOption('rooms', rooms)
    }
    if (change && urlIdex != -1) {
      checkOption('pumk2', hidePUMK)
    }
  })
});

observer.observe(node, config);

function checkOption(key, callback) {
  chrome.storage.sync.get(key, function(options) {
    callback(options[key])
  })
}

function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

function pumk(value) {
  const xpath = "//span[text() = 'People you may know']/../../../../../../../.."
  const pumkDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (pumkDiv != null && value) {    
    pumkDiv.remove()
  }
}

function suggestedForYou(value) {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null && value) {
    div.remove()
    console.log("A 'Suggested for you' feature has been removed")
  }  
}

function stories(value) {
  const div = document.querySelector('[data-pagelet="Stories"]')
  if (div != null && value) {
    div.remove()
  }
}

function rooms(value) {
  const xpath = "//span[text() = 'Create Room']/ancestor::*[15]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null && value) {
    div.remove()
  }
}
const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    const change = mutation.addedNodes.length
    const url = urlChopper(window.location.href)
    const urlIdex = url.indexOf(".")   
    if (change > 0 && url == '') {
      checkOption('pumk1', pumk)
      checkOption('sfu', sfu)
      checkOption('stories', stories)
      checkOption('rooms', rooms)
      checkOption('cw', cw)
      checkOption('nmp', nmp)
    }
    if (change > 0 && urlIdex != -1) {
      checkOption('pumk2', pumk)
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

function pumk(setting) {
  const xpath = "//span[text() = 'People you may know']/ancestor::*[11]"
  const pumkDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (pumkDiv != null && setting) {    
    pumkDiv.remove()
  }
}

function sfu(setting) {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null && setting) {
    div.remove()
    console.log("A 'Suggested for you' feature has been removed")
  }  
}

function stories(setting) {
  const div = document.querySelector('[data-pagelet="Stories"]')
  if (div != null && setting) {
    div.remove()
  }
}

function rooms(setting) {
  const xpath = "//span[text() = 'Create Room']/ancestor::*[15]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null && setting) {
    div.remove()
  }
}

function cw(setting) {
  const xpath = "//span[text() = 'Continue watching']/ancestor::*[13]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null && setting) {
    div.remove()
    console.log("Continue watching has been removed")
  }
}

function nmp(setting) {
  const div = document.querySelector('[role="article"]')
  console.log(div)
  if (div != null && setting) {
    div.remove()
  }
}
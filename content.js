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
    else if (change > 0 && url == 'friends') {
      checkOption('pumk3', pumk)
    }
    else if (change > 0 && urlIdex != -1) {
      checkOption('pumk2', pumk)
    }
    else if (change > 0 && url.includes("watch")) {
      checkOption('watchFeed', watchFeed)
      }
    else if (change > 0 && url == "groups/feed/") {
      groups()
    }
  })
})

observer.observe(node, config);

function checkOption(key, callback) {
  chrome.storage.sync.get(key, function(options) {
    if (options[key]) {
      callback()
    }    
  })
}

function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

//This function hides 'People you may know'
function pumk() {  
  let xpath = "//span[text() = 'People you may know']/ancestor::*[11]"
  let div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  const url = urlChopper(window.location.href)
  if (url != 'friends' && div != null) {
    div.remove()
  }
  else if (url == 'friends' && div != null) {
    let xpath = "//span[text() = 'People you may know']/ancestor::*[12]"
    let div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    div.remove()
  }
}

//This function hides 'Suggested for you'
function sfu() {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }  
}

//This function hides 'Stories'
function stories() {
  const div = document.querySelector('[data-pagelet="Stories"]')
  if (div != null) {
    div.remove()
  }
}

//This function hides 'rooms'
function rooms() {
  const xpath = "//span[text() = 'Create Room']/ancestor::*[15]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

//This function hides 'continue watching'
function cw() {
  const xpath = "//span[text() = 'Continue watching']/ancestor::*[13]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

//This function hides 'watch feed'
function watchFeed() {
  const div = document.querySelector('[aria-label="Videos on Facebook Watch"]')
  if (div != null) {
    div.remove()
  }
}

//This function hides 'groups'
function groups() {
  const div = document.querySelector('[aria-label="Preview of a group"]')
  if (div != null) {
    div.remove()
  }
}

//This function hides 'No more posts'
/*function nmp() {
  const div = document.querySelector('[role="article"]')
  if (div != null) {
    div.remove()
  }
}*/
checkOption('watchFeed', watch_top_menu)

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
      checkOption('storiesReelsRooms', storiesReelsRooms)
      checkOption('reelsAndShortVideos', reelsAndShortVideos)
      checkOption('cw', cw)
      checkOption('autoClickSeeMore', auto_click_see_more)
      checkOption('removeSeeLess', remove_see_less)
      checkOption('watchFeed', watch_sidebar)
      checkOption('reels', reels)
      checkOption('groups', groups)      
    }
    else if (change > 0 && url == 'friends') {
      checkOption('pumk3', pumk)
    }
    else if (change > 0 && urlIdex != -1) {
      checkOption('pumk2', pumk)
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

//This function hides 'Suggested for you' from everywhere
function sfu() {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }  
}

//This funtion hides 'Stories/Reels/Rooms' from the top of the homepage
function storiesReelsRooms() {
  const div = document.querySelector('[data-pagelet="TopOfHome"]')
  if (div != null) {
    div.remove()
  }
}

//This funtion hides 'Reels and short videos'
function reelsAndShortVideos() {
  const xpath = "//span[text() = 'Reels and short videos']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function reels() {
  const divXPath = "//span[text() = 'Reels']/ancestor::li"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
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
function watch_sidebar() {  
  const divXPath = "//span[text() = 'Watch']/ancestor::li"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function watch_top_menu() {
  const watchLITopXPath = "//a[contains(@aria-label, 'Watch')]/ancestor::li"
  const watchLITop = document.evaluate(watchLITopXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  watchLITop.remove()
}

//This function hides 'groups'
function groups() {
  const divXPath = "//span[text() = 'Groups']/ancestor::li"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function auto_click_see_more() {
  let divXPath = "//span[text() = 'See more']"
  let div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.click()
  }
}

function remove_see_less() {
  const divXPath = "//span[text() = 'See less']/ancestor::*[9]"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}
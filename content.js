//options sorting
let nav_bar_options = []
let home_page_options = []

chrome.storage.sync.get(function(options) {
  Object.keys(options).forEach(key => {
    if (options[key]) {
      if (key.includes("NavBar")) {
        nav_bar_options.push(this[key])
      } else if (key.includes("HomePage")) {
        home_page_options.push(this[key])
        console.log(this[key], key)
      }
    }     
  })    
})

console.log(home_page_options)

//observer settings and operations
function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length > 0) {
      nav_bar_options.forEach(function (filter) {
        filter()
      })
      const url = urlChopper(window.location.href)
      const urlIdex = url.indexOf(".")
      if ((url == '' || url == '?sk=h_chr')) {
        home_page_options.forEach(function (filter) {
          filter()
        })
        checkOption('pumk1', pumk)  
      }
      else if (url == 'friends') {
        checkOption('pumk3', pumk)
      }
      else if (urlIdex != -1) {
        checkOption('pumk2', pumk)
      }
      else if (url == 'groups/feed/') {
        checkOption('suggestedPostsGroupsFeed', suggested_posts_groups_feed)
      }      
    }
  })
})

observer.observe(node, config);

//Helper functions
function checkOption(key, callback) {
  chrome.storage.sync.get(key, function(options) {
    if (options[key]) {
      callback()
    }    
  })
}

//Hides 'People you may know' across the site
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

//Top Menu options
function videoNavBar() {
  const xPath = "//a[contains(@aria-label, 'Video')]/ancestor::li"
  const li = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (li != null) {
    li.remove()
  } 
}

//Home Page Options
function suggestedForYouHomePage() {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function reelsAndShortVideosHomePage() {
  const xpath = "//span[text() = 'Reels and short videos']/ancestor::*[17]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function storiesHomePage() {
  const div = document.querySelector('[data-pagelet="Stories"]')
  if (div != null) {
    div.remove()
  }
}

function followHomePage() {
  const xpath = "//span[text() = 'Follow']/ancestor::*[26]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function videoPlaylistHomePage() {
  const xpath = "//span[text() = ' posted a video to the playlist ']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function isInHomePage() {
  const xpath = "//span[text() = ' is in ']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function isAtHomePage() {
  const xpath = "//span[text() = ' is at ']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function andHomePage() {
  const xpath = "//span[text() = ' and ']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function sponsoredAdHomePage() {
  const xpath = "//div[contains(@class, 'sponsored_ad')]/ancestor::*[4]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function albumHomePage() {
  const xpath = "//span[text() = 'Album ']/ancestor::*[22]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function addedANewPhotoToTheAlbumHomePage() {
  const xpath = "//span[text() = ' added a new photo to the album ']/ancestor::*[24]"
  const div = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
} 

//Side bar options
function groupsHomePage() {
  const divXPath = "//span[text() = 'Groups']/ancestor::li"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function autoClickSeeMoreHomePage() {
  const divXPath = "//span[text() = 'See more']/ancestor::div[6]"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.click()
  }
}

function removeSeeLessHomePage() {
  const divXPath = "//span[text() = 'See less']/ancestor::*[9]"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}

function videoHomePage() {
  const xPath = "//span[text() = 'Video']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function findFriendsHomePage() {
  const xPath = "//span[text() = 'Find friends']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function memoriesHomePage() {
  const xPath = "//span[text() = 'Memories']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function gamingVideoHomePage() {
  const xPath = "//span[text() = 'Gaming video']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function savedHomePage() {
  const xPath = "//span[text() = 'Saved']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function eventsHomePage() {
  const xPath = "//span[text() = 'Events']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function adsManagerHomePage() {
  const xPath = "//span[text() = 'Ads Manager']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function bloodDonationsHomePage() {
  const xPath = "//span[text() = 'Blood Donations']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function climateScienceCentreHomePage() {
  const xPath = "//span[text() = 'Climate Science Centre']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function fundraisersHomePage() {
  const xPath = "//span[text() = 'Fundraisers']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function marketplaceHomePage() {
  const xPath = "//span[text() = 'Marketplace']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function messengerHomePage() {
  const xPath = "//span[text() = 'Messenger']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function messengerKidsHomePage() {
  const xPath = "//span[text() = 'Messenger Kids']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function metaQuestHomePage() {
  const xPath = "//span[text() = 'Meta Quest']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function ordersPaymentsHomePage() {
  const xPath = "//span[text() = 'Orders and payments']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function pagesHomePage() {
  const xPath = "//span[text() = 'Pages']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function playGamesHomePage() {
  const xPath = "//span[text() = 'Play games']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function recentAdActivityHomePage() {
  const xPath = "//span[text() = 'Recent ad activity']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function yourProfileHomePage() {
  const xPath = "//div[@class='x1iyjqo2']/ul[1]"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

//hides suggested posts from public groups from the groups page feed
function suggested_posts_groups_feed() {
  const xPath = "//span[text() = 'Suggested post from a public group']/ancestor::div[8]"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  }
}
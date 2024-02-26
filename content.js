//options sorting
let site_wide_options = []
let home_page_options = []
let group_page_options = []

chrome.storage.sync.get(function(options) {
  Object.keys(options).forEach(key => {
    if (options[key]) {
      if (key.includes("SiteWide")) {
        site_wide_options.push(this[key])
      } else if (key.includes("HomePage")) {
        home_page_options.push(this[key])
      } else if (key.includes("GroupsPage")) {
        group_page_options.push(this[key])
      }
    }     
  })    
})

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
      site_wide_options.forEach(function (filter) {
        filter()
      })
      const url = urlChopper(window.location.href)
      if ((url == '' || url == '?sk=h_chr')) {
        home_page_options.forEach(function (filter) {
          filter()
        }) 
      }
      else if (url == 'groups/feed/') {
        group_page_options.forEach(function (filter) {
          filter()
        })
      }      
    }
  })
})

observer.observe(node, config);

//Debug Functions
function getFuncName() {
  return getFuncName.caller.name
}

//SiteWide options
function pumkSiteWide() {
  const url = urlChopper(window.location.href)  
  let xpath = "//span[text() = 'People you may know']"
  let html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null && url == '') {
    xpath = "//span[text() = 'People you may know']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    html.remove()
  }
  else if (html != null && url == 'friends') {
    xpath = "//span[text() = 'People you may know']/ancestor::*[13]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    html.remove()
  }
  else if (html != null && url != 'friends' && url != '') {
    xpath = "//span[text() = 'People you may know']/ancestor::*[8]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    html.remove()
  }
}

function videoSiteWide() {
  const xPath = "//a[contains(@aria-label, 'Video')]/ancestor::li"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  } 
}

//Home Page News Feed Options
function sponsoredAdHomePage() {
  const xpath = "//div[contains(@class, 'sponsored_ad')]/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function suggestedForYouHomePage() {
  const xpath = "//span[text() = 'Suggested for you']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function reelsAndShortVideosHomePage() {
  const xpath = "//span[text() = 'Reels and short videos']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function storiesHomePage() {
  const query = document.querySelector('[data-pagelet="Stories"]')  
  if (query != null) {
    const html = query.closest("div")
    html.remove()
  }
}

function followHomePage() {
  const xpath = "//span[text() = 'Follow']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function paidPartnershipHomePage() {
  const xpath = "//span[text() = 'Paid partnership']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function videoPlaylistHomePage() {
  const xpath = "//span[text() = ' posted a video to the playlist ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function isInHomePage() {
  const xpath = "//span[text() = ' is in ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function isAtHomePage() {
  const xpath = "//span[text() = ' is at ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function andHomePage() {
  const xpath = "//span[text() = ' and ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function albumHomePage() {
  const xpath = "//span[text() = 'Album ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function addedANewPhotoToTheAlbumHomePage() {
  const xpath = "//span[text() = ' added a new photo to the album ']/ancestor::div[contains(@data-pagelet, 'FeedUnit_')]"
  const html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
} 

//Side bar options
function autoClickSeeMoreHomePage() {
  const xPath = "//span[text() = 'See more']/ancestor::div[6]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.click()
  }
}

function groupsHomePage() {
  const divXPath = "//span[text() = 'Groups']/ancestor::li"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function removeSeeLessHomePage() {
  const divXPath = "//span[text() = 'See less']/ancestor::*[9]"
  const div = document.evaluate(divXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  }
}

function videoHomePage() {
  const xPath = "//span[text() = 'Video']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function findFriendsHomePage() {
  const xPath = "//span[text() = 'Find friends']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function memoriesHomePage() {
  const xPath = "//span[text() = 'Memories']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function gamingVideoHomePage() {
  const xPath = "//span[text() = 'Gaming video']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function savedHomePage() {
  const xPath = "//span[text() = 'Saved']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function eventsHomePage() {
  const xPath = "//span[text() = 'Events']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function adsManagerHomePage() {
  const xPath = "//span[text() = 'Ads Manager']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function bloodDonationsHomePage() {
  const xPath = "//span[text() = 'Blood Donations']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function climateScienceCentreHomePage() {
  const xPath = "//span[text() = 'Climate Science Centre']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function fundraisersHomePage() {
  const xPath = "//span[text() = 'Fundraisers']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function marketplaceHomePage() {
  const xPath = "//span[text() = 'Marketplace']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function messengerHomePage() {
  const xPath = "//span[text() = 'Messenger']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function messengerKidsHomePage() {
  const xPath = "//span[text() = 'Messenger Kids']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function metaQuestHomePage() {
  const xPath = "//span[text() = 'Meta Quest']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function ordersPaymentsHomePage() {
  const xPath = "//span[text() = 'Orders and payments']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function pagesHomePage() {
  const xPath = "//span[text() = 'Pages']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function playGamesHomePage() {
  const xPath = "//span[text() = 'Play games']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

function recentAdActivityHomePage() {
  const xPath = "//span[text() = 'Recent ad activity']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}
function yourProfileHomePage() {
  const xPath = "//div[@class='x1iyjqo2']/ul[1]"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
    console.log(getFuncName())
  } 
}

//Groups Feed options
function suggestedPostsGroupsPage() {
  const xPath = "//span[text() = 'Suggested post from a public group']/ancestor::div[contains(@data-pagelet, 'GroupsFeed_')]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function suggestedForYouGroupsPage() {
  const xPath = "//span[text() = 'Suggested for you']/ancestor::div[contains(@data-pagelet, 'GroupsFeed_')]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function friendsGroupsGroupsPage() {
  const xPath = "//span[text() = \"Friends' groups\"]/ancestor::div[contains(@data-pagelet, 'GroupsFeed_')]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}
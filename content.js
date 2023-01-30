checkOption('watchTopMenu', watch_top_menu)
checkOption('gamingTopMenu', gaming_top_menu)

const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    const change = mutation.addedNodes.length
    const url = urlChopper(window.location.href)
    const urlIdex = url.indexOf(".")
    if (change > 0 && (url == '' || url == '?sk=h_chr')) {
      checkOption('pumk1', pumk)
      checkOption('sfu', sfu)
      checkOption('storiesReelsRooms', storiesReelsRooms)
      checkOption('reelsAndShortVideos', reelsAndShortVideos)
      checkOption('cw', cw)
      checkOption('autoClickSeeMore', auto_click_see_more)
      checkOption('removeSeeLess', remove_see_less)
      checkOption('yourProfileSidebar', your_profile_sidebar)
      checkOption('findFriendsSidebar', find_friends_sidebar)
      checkOption('mostRecentSidebar', most_recent_sidebar)
      checkOption('groups', groups) 
      checkOption('memoriesSidebar', memories_sidebar)
      checkOption('watchSidebar', watch_sidebar)      
      checkOption('reels', reels)
      checkOption('suggestEdits', suggest_edits)
      checkOption('gamingVideo', gaming_video)
      checkOption('savedSidebar', saved_sidebar)
      checkOption('eventsSidebar', events_sidebar)
      checkOption('adCentreSidebar', ad_centre_sidebar)
      checkOption('adsManagerSidebar', ads_manager_sidebar)
      checkOption('bloodDonationsSidebar', blood_donations_sidebar)
      checkOption('climateScienceCentre', climate_science_centre)
      checkOption('crisisResponseSidebar', crisis_response_sidebar)
      checkOption('emotionalHealthSidebar', emotional_health_sidebar)
      checkOption('favouritesSidebar', favourites_sidebar)
      checkOption('fundraisersSidebar', fundraisers_sidebar)
      checkOption('liveVideosSidebar', live_videos_sidebar)
      checkOption('marketplaceSidebar', marketplace_sidebar)
      checkOption('messengerSidebar', messenger_sidebar)
      checkOption('messengerKidsSidebar', messenger_kids_sidebar)
      checkOption('metaQuestSidebar', meta_quest_sidebar)
      checkOption('ordersPaymentsSidebar', orders_payments_sidebar)
      checkOption('pagesSidebar', pages_sidebar)
      checkOption('playGamesSidebar', play_games_sidebar)
      checkOption('recentAdActivitySidebar', recent_ad_activity_sidebar)        
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
  const xPath = "//a[contains(@aria-label, 'Watch')]/ancestor::li"
  const li = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  li.remove()
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

function gaming_top_menu() {
  const xPath = "//a[contains(@aria-label, 'Gaming')]/ancestor::li"
  const li = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  li.remove()
}

function find_friends_sidebar() {
  const xPath = "//span[text() = 'Find friends']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function most_recent_sidebar() {
  const xPath = "//span[text() = 'Most recent']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function memories_sidebar() {
  const xPath = "//span[text() = 'Memories']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function suggest_edits() {
  const xPath = "//span[text() = 'Suggest Edits']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function gaming_video() {
  const xPath = "//span[text() = 'Gaming video']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function saved_sidebar() {
  const xPath = "//span[text() = 'Saved']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function events_sidebar() {
  const xPath = "//span[text() = 'Events']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function ad_centre_sidebar() {
  const xPath = "//span[text() = 'Ad Centre']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function ads_manager_sidebar() {
  const xPath = "//span[text() = 'Ads Manager']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function blood_donations_sidebar() {
  const xPath = "//span[text() = 'Blood Donations']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function climate_science_centre() {
  const xPath = "//span[text() = 'Climate Science Centre']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function crisis_response_sidebar() {
  const xPath = "//span[text() = 'Crisis Response']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function emotional_health_sidebar() {
  const xPath = "//span[text() = 'Emotional Health']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function favourites_sidebar() {
  const xPath = "//span[text() = 'Favourites']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function fundraisers_sidebar() {
  const xPath = "//span[text() = 'Fundraisers']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function live_videos_sidebar() {
  const xPath = "//span[text() = 'Live videos']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function marketplace_sidebar() {
  const xPath = "//span[text() = 'Marketplace']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function messenger_sidebar() {
  const xPath = "//span[text() = 'Messenger']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function messenger_kids_sidebar() {
  const xPath = "//span[text() = 'Messenger Kids']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function meta_quest_sidebar() {
  const xPath = "//span[text() = 'Meta Quest']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function orders_payments_sidebar() {
  const xPath = "//span[text() = 'Orders and payments']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function pages_sidebar() {
  const xPath = "//span[text() = 'Pages']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function play_games_sidebar() {
  const xPath = "//span[text() = 'Play games']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function recent_ad_activity_sidebar() {
  const xPath = "//span[text() = 'Recent ad activity']/ancestor::li"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}

function your_profile_sidebar() {
  const xPath = "//div[contains(@class, 'x1iyjqo2')]/ul[1]"
  const div = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (div != null) {
    div.remove()
  } 
}
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

function onRemoved() {
  console.log("Zucker Ext - Defunct options removed");
}

function onError(e) {
  console.log(e);
}

let defunctOptions = ["sponsoredAdHomePage", "metaQuestHomePage"]
let removeDefunctOptions = chrome.storage.sync.remove(defunctOptions);
removeDefunctOptions.then(onRemoved, onError);

//observer settings and operations
function urlChopper(url) {
  const str = "https://www.facebook.com/"
  const newurl = url.replace(str, '')
  return newurl
}

function htmlChopper(xPath) {
  const element = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (element != null) {
    element.remove()
  }  
}

const node = document.body
const config = { childList: true, subtree: true }

let observer = new MutationObserver(function(mutations, observer) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length > 0) {
      const url = urlChopper(window.location.href)
      site_wide_options.forEach(function (option) {
        if (option.length = 1){
          option(url)
        } else {
          option()
        }        
      })      
      if ((url == '' || url == '?sk=h_chr')) {
        home_page_options.forEach(function (option) {
          option()
        }) 
      }
      else if (url == 'groups/feed/') {
        group_page_options.forEach(function (option) {
          option()
        })
      }      
    }
  })
})

observer.observe(node, config);

//SiteWide options
function sponsoredAdsSiteWide(url) {
  if (url == '') {
    const xPath_feed = "//div[contains(@class, 'sponsored_ad')]/ancestor::div[contains(@class, 'x1lliihq')]"
    const xPath_right_rail = "//span[text() = 'Sponsored']/ancestor::div[8]"
    htmlChopper(xPath_feed)
    htmlChopper(xPath_right_rail)
  } else if (url.includes('?filter=all&sk=h_chr')){
    //Feeds
    const xPath = "//div[contains(@class, 'sponsored_ad')]/ancestor::div[contains(@class, 'x1lliihq')]"
    htmlChopper(xPath) 
  } else if (url.includes('marketplace')) {
      //marketplace
      const marketplace_items = document.querySelector('div[aria-label="Collection of Marketplace items"]') 
      let browse_feed_array = []
      browse_feed_array = marketplace_items.querySelectorAll('div[class=""]')
      browse_feed_array.forEach((upsell_feed => {
        const xpath_text = ".//a[contains(@href, '/ads/about/?entry_product=ad_preferences')]/ancestor::div[1]"
        const xpath_image = ".//a[contains(@href, '/ads/about/?entry_product=ad_preferences')]/ancestor::div[5]/div[2]/div"
        const html_text = document.evaluate(xpath_text, upsell_feed, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        const html_image = document.evaluate(xpath_image, upsell_feed, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        if (html_text != null) {
          html_text.remove()
          html_image.remove()
        }
      }))
    }
}

function pumkSiteWide(url) {  
  let xpath = ""
  let html = null
  if (url == '') {
    xpath = "//span[text() = 'People you may know']/ancestor::div[contains(@class, 'x1lliihq')]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue 
  } else if (url.includes("friends")) {
    xpath = "//span[text() = 'People you may know']/ancestor::div[9]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  } else {
    xpath = "//span[text() = 'People you may know']/ancestor::div[7]"
    html = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  }
  if (html != null) {
    html.remove()
  }    
}

function videoSiteWide() {
  const xPath = "//a[contains(@aria-label, 'Video')]/ancestor::li"
  htmlChopper(xPath)
}

function gamingSiteWide() {
  const xPath = "//a[contains(@aria-label, 'Gaming')]/ancestor::li"
  htmlChopper(xPath)
}

//Home Page News Feed Options
function joinHomePage() {
  const xPath = "//span[text() = 'Join']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function storiesHomePage() {
  const xPath = "//a[contains(@href, '/stories/create/')]/ancestor::div[10]"
  htmlChopper(xPath)
}

function reelsAndShortVideosHomePage() {
  const xPath = "//span[text() = 'Reels and short videos']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function suggestedForYouHomePage() {
  const xPath = "//span[text() = 'Suggested for you']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function followHomePage() {
  const xPath = "//span[text() = 'Follow']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function paidPartnershipHomePage() {
  const xPath = "//span[text() = 'Paid partnership']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function videoPlaylistHomePage() {
  const xPath = "//span[text() = ' posted a video to the playlist ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function isInHomePage() {
  const xPath = "//span[text() = ' is in ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function isAtHomePage() {
  const xPath = "//span[text() = ' is at ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function andHomePage() {
  const xPath = "//span[text() = ' and ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function albumHomePage() {
  const xPath = "//span[text() = 'Album ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
}

function addedANewPhotoToTheAlbumHomePage() {
  const xPath = "//span[text() = ' added a new photo to the album ']/ancestor::div[contains(@class, 'x1lliihq')]"
  htmlChopper(xPath)
} 

//Side bar options
function autoClickSeeMoreHomePage() {
  const xPath = "//span[text() = 'See more']/ancestor::div[6]"
  htmlChopper(xPath)
}

function removeSeeLessHomePage() {
  const xPath = "//span[text() = 'See less']/ancestor::div[contains(@data-visualcompletion, 'ignore-dynamic')][1]"
  htmlChopper(xPath)
}

function findFriendsHomePage() {
  const xPath = "//span[text() = 'Find friends']/ancestor::li"
  htmlChopper(xPath)
}

//feeds should go here

function groupsHomePage() {
  const xPath = "//span[text() = 'Groups']/ancestor::li"
  htmlChopper(xPath)
}

function videoHomePage() {
  const xPath = "//span[text() = 'Video']/ancestor::li"
  htmlChopper(xPath)
}

function memoriesHomePage() {
  const xPath = "//span[text() = 'Memories']/ancestor::li"
  htmlChopper(xPath)
}

function gamingVideoHomePage() {
  const xPath = "//span[text() = 'Gaming video']/ancestor::li"
  htmlChopper(xPath)
}

function savedHomePage() {
  const xPath = "//span[text() = 'Saved']/ancestor::li"
  htmlChopper(xPath)
}

function eventsHomePage() {
  const xPath = "//span[text() = 'Events']/ancestor::li"
  htmlChopper(xPath)
}

function adsManagerHomePage() {
  const xPath = "//span[text() = 'Ads Manager']/ancestor::li"
  htmlChopper(xPath)
}

function bloodDonationsHomePage() {
  const xPath = "//span[text() = 'Blood Donations']/ancestor::li"
  htmlChopper(xPath)
}

function climateScienceCentreHomePage() {
  const xPath = "//span[text() = 'Climate Science Centre']/ancestor::li"
  htmlChopper(xPath) 
}

function fundraisersHomePage() {
  const xPath = "//span[text() = 'Fundraisers']/ancestor::li"
  htmlChopper(xPath) 
}

function marketplaceHomePage() {
  const xPath = "//span[text() = 'Marketplace']/ancestor::li"
  htmlChopper(xPath)
}

function messengerHomePage() {
  const xPath = "//span[text() = 'Messenger']/ancestor::li"
  htmlChopper(xPath) 
}

function messengerKidsHomePage() {
  const xPath = "//span[text() = 'Messenger Kids']/ancestor::li"
  htmlChopper(xPath) 
}

function metaQuest3SHomePage() {
  const xPath = "//span[text() = 'Meta Quest 3S']/ancestor::li"
  htmlChopper(xPath)
}

function ordersPaymentsHomePage() {
  const xPath = "//span[text() = 'Orders and payments']/ancestor::li"
  htmlChopper(xPath)
}

function pagesHomePage() {
  const xPath = "//span[text() = 'Pages']/ancestor::li"
  htmlChopper(xPath) 
}

function playGamesHomePage() {
  const xPath = "//span[text() = 'Play games']/ancestor::li"
  htmlChopper(xPath)
}

function recentAdActivityHomePage() {
  const xPath = "//span[text() = 'Recent ad activity']/ancestor::li"
  htmlChopper(xPath)
}

function birthdaysHomePage() {
  const xPath = "//span[text() = 'Birthdays']/ancestor::li"
  htmlChopper(xPath)
}

function reelsHomePage() {
  const xPath = "//span[text() = 'Reels']/ancestor::li"
  htmlChopper(xPath)  
}

function feedsHomePage() {
  const xPath = "//span[text() = 'Feeds']/ancestor::li"
  htmlChopper(xPath)  
}

/*deprecated as this searches from the top and breaks the whole sidebar
function yourProfileHomePage() {
  const left_sidebar_xpath = "//div[contains(@aria-label, 'Shortcuts')]/descendant::li[1]"
  const left_sidebar_html = document.evaluate(left_sidebar_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (left_sidebar_html != null) {
    left_sidebar_html.remove()
  } 
}
*/

//Groups Feed options
function suggestedPostsGroupsPage() {
  const xPath = "//span[text() = 'Suggested post from a public group']/ancestor::div[19]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function suggestedForYouGroupsPage() {
  const xPath = "//span[text() = 'Suggested for you']/ancestor::div[17]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}

function friendsGroupsGroupsPage() {
  const xPath = "//span[text() = \"Friends' groups\"]/ancestor::div[]"
  const html = document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  if (html != null) {
    html.remove()
  }
}
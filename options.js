const saveButton = document.getElementById('save')

function save_options() {
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const pumkFriends = document.getElementById('pumk3').checked
  const sfu = document.getElementById('sfu').checked
  const storiesReelsRooms = document.getElementById('storiesReelsRooms').checked
  const reelsAndShortVideos = document.getElementById('reelsAndShortVideos').checked
  const reels = document.getElementById('reels').checked
  const cw = document.getElementById('cw').checked
  const watchTopMenu = document.getElementById('watchTopMenu').checked
  const watchSidebar = document.getElementById('watchSidebar').checked
  const groups = document.getElementById('groups').checked
  const autoClickSeeMore = document.getElementById('autoClickSeeMore').checked
  const removeSeeLess = document.getElementById('removeSeeLess').checked
  const gamingTopMenu = document.getElementById('gamingTopMenu').checked
  const findFriendsSidebar = document.getElementById('findFriendsSidebar').checked
  const mostRecentSidebar = document.getElementById('mostRecentSidebar').checked
  const memoriesSidebar = document.getElementById('memoriesSidebar').checked
  const suggestEdits = document.getElementById('suggestEdits').checked
  const gamingVideo = document.getElementById('gamingVideo').checked
  const savedSidebar = document.getElementById('savedSidebar').checked
  const eventsSidebar = document.getElementById('eventsSidebar').checked
  const adCentreSidebar = document.getElementById('adCentreSidebar').checked
  const adsManagerSidebar = document.getElementById('adsManagerSidebar').checked
  const bloodDonationsSidebar = document.getElementById('bloodDonationsSidebar').checked
  const climateScienceCentre = document.getElementById('climateScienceCentre').checked
  const crisisResponseSidebar = document.getElementById('crisisResponseSidebar').checked
  const emotionalHealthSidebar = document.getElementById('emotionalHealthSidebar').checked
  const favouritesSidebar = document.getElementById('favouritesSidebar').checked
  const fundraisersSidebar = document.getElementById('fundraisersSidebar').checked
  const liveVideosSidebar = document.getElementById('liveVideosSidebar').checked
  const marketplaceSidebar = document.getElementById('marketplaceSidebar').checked
  const messengerSidebar = document.getElementById('messengerSidebar').checked
  const messengerKidsSidebar = document.getElementById('messengerKidsSidebar').checked
  const metaQuestSidebar = document.getElementById('metaQuestSidebar').checked
  const ordersPaymentsSidebar = document.getElementById('ordersPaymentsSidebar').checked
  const pagesSidebar = document.getElementById('pagesSidebar').checked
  const playGamesSidebar = document.getElementById('playGamesSidebar').checked
  const recentAdActivitySidebar = document.getElementById('recentAdActivitySidebar').checked
  const yourProfileSidebar = document.getElementById('yourProfileSidebar').checked
  const storiesLeftSidebar = document.getElementById('storiesLeftSidebar').checked
  const suggestedPostsGroupsFeed = document.getElementById('suggestedPostsGroupsFeed').checked

  chrome.storage.sync.set({
    pumk1: pumkNews,
    pumk2: pumkProfile,
    pumk3: pumkFriends,
    sfu: sfu,
    storiesReelsRooms: storiesReelsRooms,
    reelsAndShortVideos: reelsAndShortVideos,
    reels: reels,
    cw: cw,
    watchTopMenu: watchTopMenu,
    watchSidebar: watchSidebar,
    groups: groups,
    autoClickSeeMore: autoClickSeeMore,
    removeSeeLess: removeSeeLess,
    gamingTopMenu: gamingTopMenu,
    findFriendsSidebar: findFriendsSidebar,
    mostRecentSidebar: mostRecentSidebar,
    memoriesSidebar: memoriesSidebar,
    suggestEdits: suggestEdits,
    gamingVideo: gamingVideo,
    savedSidebar: savedSidebar,
    eventsSidebar: eventsSidebar,
    adCentreSidebar: adCentreSidebar,
    adsManagerSidebar: adsManagerSidebar,
    bloodDonationsSidebar: bloodDonationsSidebar,
    climateScienceCentre: climateScienceCentre,
    crisisResponseSidebar: crisisResponseSidebar,
    emotionalHealthSidebar: emotionalHealthSidebar,
    favouritesSidebar: favouritesSidebar,
    fundraisersSidebar: fundraisersSidebar,
    liveVideosSidebar: liveVideosSidebar,
    marketplaceSidebar: marketplaceSidebar,
    messengerSidebar: messengerSidebar,
    messengerKidsSidebar: messengerKidsSidebar,
    metaQuestSidebar: metaQuestSidebar,
    ordersPaymentsSidebar: ordersPaymentsSidebar,
    pagesSidebar: pagesSidebar,
    playGamesSidebar: playGamesSidebar,
    recentAdActivitySidebar: recentAdActivitySidebar,
    yourProfileSidebar: yourProfileSidebar,
    storiesLeftSidebar: storiesLeftSidebar,
    suggestedPostsGroupsFeed: suggestedPostsGroupsFeed
  }, function() {
    const status = document.getElementById('status')
    status.textContent = 'Options saved. You may need to reload to see effects'
    setTimeout(function() {
      status.textContent = ''
    }, 6000);
  });
}
  
function restore_options() {
  chrome.storage.sync.get({
    pumk1: true,
    pumk2: true,
    pumk3: false,
    sfu: true,
    storiesReelsRooms: true,
    reelsAndShortVideos: true,
    reels: false,
    cw: true,
    watchTopMenu: false,
    watchSidebar: false,
    groups: false,
    autoClickSeeMore: false,
    removeSeeLess: false,
    gamingTopMenu: false,
    findFriendsSidebar: false,
    mostRecentSidebar: false,
    memoriesSidebar: false,
    suggestEdits: false,
    gamingVideo: false,
    savedSidebar: false,
    eventsSidebar: false,
    adCentreSidebar: false,
    adsManagerSidebar: false,
    bloodDonationsSidebar: false,
    climateScienceCentre: false,
    crisisResponseSidebar: false,
    emotionalHealthSidebar: false,
    favouritesSidebar: false,
    fundraisersSidebar: false,
    liveVideosSidebar: false,
    marketplaceSidebar: false,
    messengerSidebar: false,
    messengerKidsSidebar: false,
    metaQuestSidebar: false,
    ordersPaymentsSidebar: false,
    pagesSidebar: false,
    playGamesSidebar: false,
    recentAdActivitySidebar: false,
    yourProfileSidebar: false,
    storiesLeftSidebar: false,
    suggestedPostsGroupsFeed: false
}, function(items) {
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('sfu').checked = items.sfu
    document.getElementById('storiesReelsRooms').checked = items.storiesReelsRooms
    document.getElementById('reelsAndShortVideos').checked = items.reelsAndShortVideos
    document.getElementById('reels').checked = items.reels
    document.getElementById('cw').checked = items.cw
    document.getElementById('watchTopMenu').checked = items.watchTopMenu
    document.getElementById('watchSidebar').checked = items.watchSidebar
    document.getElementById('groups').checked = items.groups
    document.getElementById('autoClickSeeMore').checked = items.autoClickSeeMore
    document.getElementById('removeSeeLess').checked = items.removeSeeLess
    document.getElementById('gamingTopMenu').checked = items.gamingTopMenu
    document.getElementById('findFriendsSidebar').checked = items.findFriendsSidebar
    document.getElementById('mostRecentSidebar').checked = items.mostRecentSidebar
    document.getElementById('memoriesSidebar').checked = items.memoriesSidebar
    document.getElementById('suggestEdits').checked = items.suggestEdits
    document.getElementById('gamingVideo').checked = items.gamingVideo
    document.getElementById('savedSidebar').checked = items.savedSidebar
    document.getElementById('eventsSidebar').checked = items.eventsSidebar
    document.getElementById('adCentreSidebar').checked = items.adCentreSidebar
    document.getElementById('adsManagerSidebar').checked = items.adsManagerSidebar
    document.getElementById('bloodDonationsSidebar').checked = items.bloodDonationsSidebar
    document.getElementById('climateScienceCentre').checked = items.climateScienceCentre
    document.getElementById('crisisResponseSidebar').checked = items.crisisResponseSidebar
    document.getElementById('emotionalHealthSidebar').checked = items.emotionalHealthSidebar
    document.getElementById('favouritesSidebar').checked = items.favouritesSidebar
    document.getElementById('fundraisersSidebar').checked = items.fundraisersSidebar
    document.getElementById('liveVideosSidebar').checked = items.liveVideosSidebar
    document.getElementById('marketplaceSidebar').checked = items.marketplaceSidebar
    document.getElementById('messengerSidebar').checked = items.messengerSidebar
    document.getElementById('messengerKidsSidebar').checked = items.messengerKidsSidebar
    document.getElementById('metaQuestSidebar').checked = items.metaQuestSidebar
    document.getElementById('ordersPaymentsSidebar').checked = items.ordersPaymentsSidebar
    document.getElementById('pagesSidebar').checked = items.pagesSidebar
    document.getElementById('playGamesSidebar').checked = items.playGamesSidebar
    document.getElementById('recentAdActivitySidebar').checked = items.recentAdActivitySidebar
    document.getElementById('yourProfileSidebar').checked = items.yourProfileSidebar
    document.getElementById('storiesLeftSidebar').checked = items.storiesLeftSidebar
    document.getElementById('suggestedPostsGroupsFeed').checked = items.suggestedPostsGroupsFeed
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)
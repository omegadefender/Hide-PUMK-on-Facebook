const saveButton = document.getElementById('save')

function save_options() {
  const videoNavBar = document.getElementById('videoNavBar').checked
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const pumkFriends = document.getElementById('pumk3').checked
  const suggestedForYou = document.getElementById('suggestedForYou').checked
  const reelsAndShortVideosHomePage = document.getElementById('reelsAndShortVideosHomePage').checked
  const stories = document.getElementById('stories').checked
  const followHomePage = document.getElementById('followHomePage').checked
  const videoPlaylist = document.getElementById('videoPlaylist').checked
  const isIn = document.getElementById('isIn').checked
  const isAt = document.getElementById('isAt').checked
  const and = document.getElementById('and').checked
  const sponsoredAd = document.getElementById('sponsoredAd').checked
  const album = document.getElementById('album').checked
  const addedANewPhotoToTheAlbum = document.getElementById('addedANewPhotoToTheAlbum').checked 
  const groups = document.getElementById('groups').checked
  const autoClickSeeMore = document.getElementById('autoClickSeeMore').checked
  const removeSeeLess = document.getElementById('removeSeeLess').checked
  const videoSidebar = document.getElementById('videoSidebar').checked  
  const findFriendsSidebar = document.getElementById('findFriendsSidebar').checked
  const memoriesSidebar = document.getElementById('memoriesSidebar').checked
  const gamingVideo = document.getElementById('gamingVideo').checked
  const savedSidebar = document.getElementById('savedSidebar').checked
  const eventsSidebar = document.getElementById('eventsSidebar').checked
  const adsManagerSidebar = document.getElementById('adsManagerSidebar').checked
  const bloodDonationsSidebar = document.getElementById('bloodDonationsSidebar').checked
  const climateScienceCentre = document.getElementById('climateScienceCentre').checked
  const fundraisersSidebar = document.getElementById('fundraisersSidebar').checked
  const marketplaceSidebar = document.getElementById('marketplaceSidebar').checked
  const messengerSidebar = document.getElementById('messengerSidebar').checked
  const messengerKidsSidebar = document.getElementById('messengerKidsSidebar').checked
  const metaQuestSidebar = document.getElementById('metaQuestSidebar').checked
  const ordersPaymentsSidebar = document.getElementById('ordersPaymentsSidebar').checked
  const pagesSidebar = document.getElementById('pagesSidebar').checked
  const playGamesSidebar = document.getElementById('playGamesSidebar').checked
  const recentAdActivitySidebar = document.getElementById('recentAdActivitySidebar').checked
  const yourProfileSidebar = document.getElementById('yourProfileSidebar').checked
  const suggestedPostsGroupsFeed = document.getElementById('suggestedPostsGroupsFeed').checked

  chrome.storage.sync.set({
    videoNavBar: videoNavBar,
    pumk1: pumkNews,
    pumk2: pumkProfile,
    pumk3: pumkFriends,
    suggestedForYou: suggestedForYou,
    reelsAndShortVideosHomePage: reelsAndShortVideosHomePage,
    stories: stories,
    followHomePage: followHomePage,
    videoPlaylist: videoPlaylist,
    isIn: isIn,
    isAt: isAt,
    and: and,
    sponsoredAd: sponsoredAd,
    album: album,
    addedANewPhotoToTheAlbum: addedANewPhotoToTheAlbum,
    groups: groups,
    autoClickSeeMore: autoClickSeeMore,
    removeSeeLess: removeSeeLess,
    videoSidebar: videoSidebar,
    findFriendsSidebar: findFriendsSidebar,
    memoriesSidebar: memoriesSidebar,
    gamingVideo: gamingVideo,
    savedSidebar: savedSidebar,
    eventsSidebar: eventsSidebar,
    adsManagerSidebar: adsManagerSidebar,
    bloodDonationsSidebar: bloodDonationsSidebar,
    climateScienceCentre: climateScienceCentre,
    fundraisersSidebar: fundraisersSidebar,
    marketplaceSidebar: marketplaceSidebar,
    messengerSidebar: messengerSidebar,
    messengerKidsSidebar: messengerKidsSidebar,
    metaQuestSidebar: metaQuestSidebar,
    ordersPaymentsSidebar: ordersPaymentsSidebar,
    pagesSidebar: pagesSidebar,
    playGamesSidebar: playGamesSidebar,
    recentAdActivitySidebar: recentAdActivitySidebar,
    yourProfileSidebar: yourProfileSidebar,
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
    videoNavBar: true,
    pumk1: true,
    pumk2: true,
    pumk3: false,
    suggestedForYou: true,
    reelsAndShortVideosHomePage: true,
    stories: true,
    followHomePage: true,
    videoPlaylist: true,
    isIn: true,
    isAt: true,
    and: true,
    sponsoredAd: true,
    album: true,
    addedANewPhotoToTheAlbum: true,
    groups: false,
    autoClickSeeMore: false,
    removeSeeLess: false,
    videoSidebar: false,
    findFriendsSidebar: false,
    memoriesSidebar: false,
    gamingVideo: false,
    savedSidebar: false,
    eventsSidebar: false,
    adsManagerSidebar: false,
    bloodDonationsSidebar: false,
    climateScienceCentre: false,
    fundraisersSidebar: false,
    marketplaceSidebar: false,
    messengerSidebar: false,
    messengerKidsSidebar: false,
    metaQuestSidebar: false,
    ordersPaymentsSidebar: false,
    pagesSidebar: false,
    playGamesSidebar: false,
    recentAdActivitySidebar: false,
    yourProfileSidebar: false,
    suggestedPostsGroupsFeed: false
}, function(items) {  
    document.getElementById('videoNavBar').checked = items.videoNavBar
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('suggestedForYou').checked = items.suggestedForYou
    document.getElementById('stories').checked = items.stories
    document.getElementById('followHomePage').checked = items.followHomePage
    document.getElementById('videoPlaylist').checked = items.videoPlaylist
    document.getElementById('isIn').checked = items.isIn
    document.getElementById('isAt').checked = items.isAt
    document.getElementById('and').checked = items.and
    document.getElementById('sponsoredAd').checked = items.sponsoredAd
    document.getElementById('album').checked = items.album
    document.getElementById('addedANewPhotoToTheAlbum').checked = items.addedANewPhotoToTheAlbum                
    document.getElementById('reelsAndShortVideosHomePage').checked = items.reelsAndShortVideosHomePage    
    document.getElementById('groups').checked = items.groups
    document.getElementById('autoClickSeeMore').checked = items.autoClickSeeMore
    document.getElementById('removeSeeLess').checked = items.removeSeeLess
    document.getElementById('videoSidebar').checked = items.videoSidebar
    document.getElementById('findFriendsSidebar').checked = items.findFriendsSidebar
    document.getElementById('memoriesSidebar').checked = items.memoriesSidebar
    document.getElementById('gamingVideo').checked = items.gamingVideo
    document.getElementById('savedSidebar').checked = items.savedSidebar
    document.getElementById('eventsSidebar').checked = items.eventsSidebar
    document.getElementById('adsManagerSidebar').checked = items.adsManagerSidebar
    document.getElementById('bloodDonationsSidebar').checked = items.bloodDonationsSidebar
    document.getElementById('climateScienceCentre').checked = items.climateScienceCentre
    document.getElementById('fundraisersSidebar').checked = items.fundraisersSidebar
    document.getElementById('marketplaceSidebar').checked = items.marketplaceSidebar
    document.getElementById('messengerSidebar').checked = items.messengerSidebar
    document.getElementById('messengerKidsSidebar').checked = items.messengerKidsSidebar
    document.getElementById('metaQuestSidebar').checked = items.metaQuestSidebar
    document.getElementById('ordersPaymentsSidebar').checked = items.ordersPaymentsSidebar
    document.getElementById('pagesSidebar').checked = items.pagesSidebar
    document.getElementById('playGamesSidebar').checked = items.playGamesSidebar
    document.getElementById('recentAdActivitySidebar').checked = items.recentAdActivitySidebar
    document.getElementById('yourProfileSidebar').checked = items.yourProfileSidebar
    document.getElementById('suggestedPostsGroupsFeed').checked = items.suggestedPostsGroupsFeed
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)
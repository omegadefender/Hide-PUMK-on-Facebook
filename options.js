const saveButton = document.getElementById('save')

function save_options() {
  const videoNavBar = document.getElementById('videoNavBar').checked
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const pumkFriends = document.getElementById('pumk3').checked
  const suggestedForYouHomePage = document.getElementById('suggestedForYouHomePage').checked
  const reelsAndShortVideosHomePage = document.getElementById('reelsAndShortVideosHomePage').checked
  const storiesHomePage = document.getElementById('storiesHomePage').checked
  const followHomePage = document.getElementById('followHomePage').checked
  const videoPlaylistHomePage = document.getElementById('videoPlaylistHomePage').checked
  const isInHomePage = document.getElementById('isInHomePage').checked
  const isAtHomePage = document.getElementById('isAtHomePage').checked
  const andHomePage = document.getElementById('andHomePage').checked
  const sponsoredAdHomePage = document.getElementById('sponsoredAdHomePage').checked
  const albumHomePage = document.getElementById('albumHomePage').checked
  const addedANewPhotoToTheAlbumHomePage = document.getElementById('addedANewPhotoToTheAlbumHomePage').checked 
  const groupsHomePage = document.getElementById('groupsHomePage').checked
  const autoClickSeeMoreHomePage = document.getElementById('autoClickSeeMoreHomePage').checked
  const removeSeeLessHomePage = document.getElementById('removeSeeLessHomePage').checked
  const videoHomePage = document.getElementById('videoHomePage').checked  
  const findFriendsHomePage = document.getElementById('findFriendsHomePage').checked
  const memoriesHomePage = document.getElementById('memoriesHomePage').checked
  const gamingVideoHomePage = document.getElementById('gamingVideoHomePage').checked
  const savedHomePage = document.getElementById('savedHomePage').checked
  const eventsHomePage = document.getElementById('eventsHomePage').checked
  const adsManagerHomePage = document.getElementById('adsManagerHomePage').checked
  const bloodDonationsHomePage = document.getElementById('bloodDonationsHomePage').checked
  const climateScienceCentreHomePage = document.getElementById('climateScienceCentreHomePage').checked
  const fundraisersHomePage = document.getElementById('fundraisersHomePage').checked
  const marketplaceHomePage = document.getElementById('marketplaceHomePage').checked
  const messengerHomePage = document.getElementById('messengerHomePage').checked
  const messengerKidsHomePage = document.getElementById('messengerKidsHomePage').checked
  const metaQuestHomePage = document.getElementById('metaQuestHomePage').checked
  const ordersPaymentsHomePage = document.getElementById('ordersPaymentsHomePage').checked
  const pagesHomePage = document.getElementById('pagesHomePage').checked
  const playGamesHomePage = document.getElementById('playGamesHomePage').checked
  const recentAdActivityHomePage = document.getElementById('recentAdActivityHomePage').checked
  const yourProfileHomePage = document.getElementById('yourProfileHomePage').checked
  const suggestedPostsGroupsFeed = document.getElementById('suggestedPostsGroupsFeed').checked

  chrome.storage.sync.set({
    videoNavBar: videoNavBar,
    pumk1: pumkNews,
    pumk2: pumkProfile,
    pumk3: pumkFriends,
    suggestedForYouHomePage: suggestedForYouHomePage,
    reelsAndShortVideosHomePage: reelsAndShortVideosHomePage,
    storiesHomePage: storiesHomePage,
    followHomePage: followHomePage,
    videoPlaylistHomePage: videoPlaylistHomePage,
    isInHomePage: isInHomePage,
    isAtHomePage: isAtHomePage,
    andHomePage: andHomePage,
    sponsoredAdHomePage: sponsoredAdHomePage,
    albumHomePage: albumHomePage,
    addedANewPhotoToTheAlbumHomePage: addedANewPhotoToTheAlbumHomePage,
    groupsHomePage: groupsHomePage,
    autoClickSeeMoreHomePage: autoClickSeeMoreHomePage,
    removeSeeLessHomePage: removeSeeLessHomePage,
    videoHomePage: videoHomePage,
    findFriendsHomePage: findFriendsHomePage,
    memoriesHomePage: memoriesHomePage,
    gamingVideoHomePage: gamingVideoHomePage,
    savedHomePage: savedHomePage,
    eventsHomePage: eventsHomePage,
    adsManagerHomePage: adsManagerHomePage,
    bloodDonationsHomePage: bloodDonationsHomePage,
    climateScienceCentreHomePage: climateScienceCentreHomePage,
    fundraisersHomePage: fundraisersHomePage,
    marketplaceHomePage: marketplaceHomePage,
    messengerHomePage: messengerHomePage,
    messengerKidsHomePage: messengerKidsHomePage,
    metaQuestHomePage: metaQuestHomePage,
    ordersPaymentsHomePage: ordersPaymentsHomePage,
    pagesHomePage: pagesHomePage,
    playGamesHomePage: playGamesHomePage,
    recentAdActivityHomePage: recentAdActivityHomePage,
    yourProfileHomePage: yourProfileHomePage,
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
    suggestedForYouHomePage: true,
    reelsAndShortVideosHomePage: true,
    storiesHomePage: true,
    followHomePage: true,
    videoPlaylistHomePage: true,
    isInHomePage: true,
    isAtHomePage: true,
    andHomePage: true,
    sponsoredAdHomePage: true,
    albumHomePage: true,
    addedANewPhotoToTheAlbumHomePage: true,
    groupsHomePage: false,
    autoClickSeeMoreHomePage: false,
    removeSeeLessHomePage: false,
    videoHomePage: false,
    findFriendsHomePage: false,
    memoriesHomePage: false,
    gamingVideoHomePage: false,
    savedHomePage: false,
    eventsHomePage: false,
    adsManagerHomePage: false,
    bloodDonationsHomePage: false,
    climateScienceCentreHomePage: false,
    fundraisersHomePage: false,
    marketplaceHomePage: false,
    messengerHomePage: false,
    messengerKidsHomePage: false,
    metaQuestHomePage: false,
    ordersPaymentsHomePage: false,
    pagesHomePage: false,
    playGamesHomePage: false,
    recentAdActivityHomePage: false,
    yourProfileHomePage: true,
    suggestedPostsGroupsFeed: false
}, function(items) {  
    document.getElementById('videoNavBar').checked = items.videoNavBar
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('suggestedForYouHomePage').checked = items.suggestedForYouHomePage
    document.getElementById('storiesHomePage').checked = items.storiesHomePage
    document.getElementById('followHomePage').checked = items.followHomePage
    document.getElementById('videoPlaylistHomePage').checked = items.videoPlaylistHomePage
    document.getElementById('isInHomePage').checked = items.isInHomePage
    document.getElementById('isAtHomePage').checked = items.isAtHomePage
    document.getElementById('andHomePage').checked = items.andHomePage
    document.getElementById('sponsoredAdHomePage').checked = items.sponsoredAdHomePage
    document.getElementById('albumHomePage').checked = items.albumHomePage
    document.getElementById('addedANewPhotoToTheAlbumHomePage').checked = items.addedANewPhotoToTheAlbumHomePage                
    document.getElementById('reelsAndShortVideosHomePage').checked = items.reelsAndShortVideosHomePage    
    document.getElementById('groupsHomePage').checked = items.groupsHomePage
    document.getElementById('autoClickSeeMoreHomePage').checked = items.autoClickSeeMoreHomePage
    document.getElementById('removeSeeLessHomePage').checked = items.removeSeeLessHomePage
    document.getElementById('videoHomePage').checked = items.videoHomePage
    document.getElementById('findFriendsHomePage').checked = items.findFriendsHomePage
    document.getElementById('memoriesHomePage').checked = items.memoriesHomePage
    document.getElementById('gamingVideoHomePage').checked = items.gamingVideoHomePage
    document.getElementById('savedHomePage').checked = items.savedHomePage
    document.getElementById('eventsHomePage').checked = items.eventsHomePage
    document.getElementById('adsManagerHomePage').checked = items.adsManagerHomePage
    document.getElementById('bloodDonationsHomePage').checked = items.bloodDonationsHomePage
    document.getElementById('climateScienceCentreHomePage').checked = items.climateScienceCentreHomePage
    document.getElementById('fundraisersHomePage').checked = items.fundraisersHomePage
    document.getElementById('marketplaceHomePage').checked = items.marketplaceHomePage
    document.getElementById('messengerHomePage').checked = items.messengerHomePage
    document.getElementById('messengerKidsHomePage').checked = items.messengerKidsHomePage
    document.getElementById('metaQuestHomePage').checked = items.metaQuestHomePage
    document.getElementById('ordersPaymentsHomePage').checked = items.ordersPaymentsHomePage
    document.getElementById('pagesHomePage').checked = items.pagesHomePage
    document.getElementById('playGamesHomePage').checked = items.playGamesHomePage
    document.getElementById('recentAdActivityHomePage').checked = items.recentAdActivityHomePage
    document.getElementById('yourProfileHomePage').checked = items.yourProfileHomePage
    document.getElementById('suggestedPostsGroupsFeed').checked = items.suggestedPostsGroupsFeed
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)
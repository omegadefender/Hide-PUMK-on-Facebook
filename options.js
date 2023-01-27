const saveButton = document.getElementById('save')

function save_options() {
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const pumkFriends = document.getElementById('pumk3').checked
  const sfu = document.getElementById('sfu').checked
  const storiesReelsRooms = document.getElementById('storiesReelsRooms').checked
  const reelsAndShortVideos = document.getElementById('reelsAndShortVideos').checked
  const cw = document.getElementById('cw').checked
  const watchFeed = document.getElementById('watchFeed').checked
  chrome.storage.sync.set({
    pumk1: pumkNews,
    pumk2: pumkProfile,
    pumk3: pumkFriends,
    sfu: sfu,
    storiesReelsRooms: storiesReelsRooms,
    reelsAndShortVideos: reelsAndShortVideos,
    cw: cw,
    watchFeed: watchFeed
  }, function() {
    const status = document.getElementById('status')
    status.textContent = 'Options saved. You may need to reload to see effects'
    setTimeout(function() {
      status.textContent = ''
    }, 2000);
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
    cw: true,
    watchFeed: false
}, function(items) {
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('sfu').checked = items.sfu
    document.getElementById('storiesReelsRooms').checked = items.storiesReelsRooms
    document.getElementById('reelsAndShortVideos').checked = items.reelsAndShortVideos
    document.getElementById('cw').checked = items.cw
    document.getElementById('watchFeed').checked = items.watchFeed
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
if (saveButton){
  saveButton.addEventListener('click', save_options)
}

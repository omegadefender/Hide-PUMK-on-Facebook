const saveButton = document.getElementById('save')

function save_options() {
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const pumkFriends = document.getElementById('pumk3').checked
  const sfu = document.getElementById('sfu').checked
  const stories = document.getElementById('stories').checked
  const rooms = document.getElementById('rooms').checked
  const cw = document.getElementById('cw').checked
  const nmp = document.getElementById('nmp').checked
  const watchFeed = document.getElementById('watchFeed').checked
  chrome.storage.sync.set({
    pumk1: pumkNews,
    pumk2: pumkProfile,
    pumk3: pumkFriends,
    sfu: sfu,
    stories: stories,
    rooms: rooms,
    cw: cw,
    nmp: nmp,
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
    stories: true,
    rooms: true,
    cw: true,
    nmp: true,
    watchFeed: false
}, function(items) {
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('pumk3').checked = items.pumk3
    document.getElementById('sfu').checked = items.sfu
    document.getElementById('stories').checked = items.stories
    document.getElementById('rooms').checked = items.rooms
    document.getElementById('cw').checked = items.cw
    document.getElementById('nmp').checked = items.nmp
    document.getElementById('watchFeed').checked = items.watchFeed
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)
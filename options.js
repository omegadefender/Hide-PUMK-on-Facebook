const saveButton = document.getElementById('save')

function save_options() {
  const pumkNews = document.getElementById('pumk1').checked
  const pumkProfile = document.getElementById('pumk2').checked
  const sfu = document.getElementById('sfu').checked
  const stories = document.getElementById('stories').checked
  const rooms = document.getElementById('rooms').checked
  const cw = document.getElementById('cw').checked
  const nmp = document.getElementById('nmp').checked
  chrome.storage.sync.set({
    pumk1: pumkNews,
    pumk2: pumkProfile,
    sfu: sfu,
    stories: stories,
    rooms: rooms,
    cw: cw,
    nmp: nmp
  }, function() {
    const status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(function() {
      status.textContent = ''
    }, 1000);
  });
}
  
function restore_options() {
  chrome.storage.sync.get({
    pumk1: true,
    pumk2: true,
    sfu: true,
    stories: true,
    rooms: true,
    cw: true,
    nmp: true
}, function(items) {
    document.getElementById('pumk1').checked = items.pumk1
    document.getElementById('pumk2').checked = items.pumk2
    document.getElementById('sfu').checked = items.sfu
    document.getElementById('stories').checked = items.stories
    document.getElementById('rooms').checked = items.rooms
    document.getElementById('cw').checked = items.cw
    document.getElementById('nmp').checked = items.nmp
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options)
saveButton.addEventListener('click', save_options)
const saveButton = document.getElementById('save')

function save_options() {
  const pumkNews = document.getElementById('pumk1').checked;
  const pumkProfile = document.getElementById('pumk2').checked;
  const sugGroups = document.getElementById('sugGroups').checked;
  chrome.storage.sync.set({
    pumk1: pumkNews,
    pumk2: pumkProfile,
    sugGroups: sugGroups
  }, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
  
function restore_options() {
  chrome.storage.sync.get({
    pumk1: true,
    pumk2: true,
    sugGroups: true
}, function(items) {
    document.getElementById('pumk1').checked = items.pumk1;
    document.getElementById('pumk2').checked = items.pumk2;
    document.getElementById('sugGroups').checked = items.sugGroups
  });
}
  
document.addEventListener('DOMContentLoaded', restore_options);
saveButton.addEventListener('click', save_options);
// Saves options to chrome.storage
function saveOptions() {
  const autoSave = document.getElementById('autoSave').checked;
  const darkMode = document.getElementById('darkMode').checked;
  const customCommand = document.getElementById('customCommand').value;

  chrome.storage.sync.set({
    autoSave: autoSave,
    darkMode: darkMode,
    customCommand: customCommand
  }, () => {
    console.log('Settings saved');
  });
}

// Restores saved settings from chrome.storage
function restoreOptions() {
  chrome.storage.sync.get(['autoSave', 'darkMode', 'customCommand'], (items) => {
    document.getElementById('autoSave').checked = items.autoSave || false;
    document.getElementById('darkMode').checked = items.darkMode || false;
    document.getElementById('customCommand').value = items.customCommand || '';
  });
}

// Reset settings to default values
function resetOptions() {
  chrome.storage.sync.set({
    autoSave: false,
    darkMode: false,
    customCommand: ''
  }, () => {
    restoreOptions(); // Reload defaults into the form
  });
}

// Event listeners
document.getElementById('saveBtn').addEventListener('click', saveOptions);
document.getElementById('resetBtn').addEventListener('click', resetOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);

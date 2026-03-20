const fs = require('fs');
const path = require('path');
const os = require('os');

const SETTINGS_DIR = path.join(os.homedir(), '.wa-tui');
const SETTINGS_PATH = path.join(SETTINGS_DIR, 'settings.json');

function loadSettings() {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, 'utf8');
    const data = JSON.parse(raw);
    return data && typeof data === 'object' ? data : {};
  } catch {
    return {};
  }
}

function saveSettings(partial) {
  try {
    fs.mkdirSync(SETTINGS_DIR, { recursive: true });
    const prev = loadSettings();
    const next = { ...prev, ...partial };
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(next, null, 2), 'utf8');
    return next;
  } catch (e) {
    console.error('wa-tui: could not save settings', e.message);
    return loadSettings();
  }
}

module.exports = {
  SETTINGS_PATH,
  loadSettings,
  saveSettings
};

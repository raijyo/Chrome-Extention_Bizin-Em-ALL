# Bizin-Em-All

Chrome extension that forces web pages to render with Bizin Gothic family fonts.

## Features

- Applies Bizin font stack to all pages at `document_start`
- Popup toggle to switch ON/OFF
- State is persisted with `chrome.storage.local`
- Preserves Material Icons / Material Symbols font families

## Install (Developer Mode)

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this repository folder

## Usage

- Open the extension popup from Chrome toolbar
- Turn the toggle ON/OFF
- Reload target page if needed

## Test

```bash
npm test
```

## Project Files

- `manifest.json`: extension manifest (MV3)
- `content.js`: font injection/removal logic
- `popup.html` / `popup.js` / `popup.css`: popup UI and storage sync
- `tests/`: Node.js tests for content and popup logic

## Notes

This extension requests `<all_urls>` host permission so it can apply styles on all websites.

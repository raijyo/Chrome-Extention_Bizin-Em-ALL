(() => {
  const STORAGE_KEY = "enabled";
  const STYLE_ID = "bizin-em-all-style";
  const FONT_STACK = '"Bizin Gothic", "BIZ UDGothic", "BIZ UDPGothic", "Yu Gothic UI", "Yu Gothic", sans-serif';

  function getStyleElement() {
    return document.getElementById(STYLE_ID);
  }

  function applyForcedFont() {
    if (getStyleElement()) {
      return;
    }

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      :root,
      :root *,
      :root *::before,
      :root *::after {
        font-family: ${FONT_STACK} !important;
      }
    `;

    const target = document.head || document.documentElement;
    if (target) {
      target.appendChild(style);
    }
  }

  function removeForcedFont() {
    const style = getStyleElement();
    if (style) {
      style.remove();
    }
  }

  function setEnabled(enabled) {
    if (enabled) {
      applyForcedFont();
      return;
    }
    removeForcedFont();
  }

  chrome.storage.local.get({ [STORAGE_KEY]: true }, (result) => {
    setEnabled(Boolean(result[STORAGE_KEY]));
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local" || !changes[STORAGE_KEY]) {
      return;
    }

    setEnabled(Boolean(changes[STORAGE_KEY].newValue));
  });
})();

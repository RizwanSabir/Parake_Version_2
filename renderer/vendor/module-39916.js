// vendor/module-39916.js — webpack module 39916
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  const n = Math.round(e);
  return Math.max(0, Math.min(t.FONT_SIZE_CLASSES.length - 1, n));
}
(t.DEFAULT_FONT_SIZE_INDEX = t.FONT_SIZE_LABELS = t.FONT_SIZE_CLASSES = void 0),
  (t.clampFontSizeIndex = n),
  (t.fontSizeClass = function (e) {
    return t.FONT_SIZE_CLASSES[n(e)] ?? "text-base";
  }),
  (t.fontSizePercent = function (e) {
    return 75 + 25 * n(e) + "%";
  }),
  (t.FONT_SIZE_CLASSES = ["text-xs", "text-base", "text-xl", "text-2xl"]),
  (t.FONT_SIZE_LABELS = ["Small", "Default", "Large", "Extra large"]),
  (t.DEFAULT_FONT_SIZE_INDEX = 1);

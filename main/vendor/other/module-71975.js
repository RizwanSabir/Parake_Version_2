// vendor/other/module-71975.js — webpack module 71975
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.DEFAULT_FONT_SIZE_INDEX = t.j0 = void 0),
  (t.clampFontSizeIndex = function (e) {
    const n = Math.round(e);
    return Math.max(0, Math.min(t.j0.length - 1, n));
  }),
  (t.j0 = ["text-xs", "text-base", "text-xl", "text-2xl"]),
  (t.DEFAULT_FONT_SIZE_INDEX = 1);

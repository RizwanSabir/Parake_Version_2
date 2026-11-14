// vendor/module-29863.js — webpack module 29863
// params: (e, t) = (module, exports, require)
"use strict";
t.locationFromPoint = function (e, t) {
  const r = Math.max(1, t.width),
    o = Math.max(1, t.height),
    i = Math.min(Math.max(e.x, 0), r - 1),
    a = Math.min(Math.max(e.y, 0), o - 1),
    s = Math.min(2, Math.floor((i / r) * 3));
  return `${a < o / 2 ? "top" : "bottom"}-${n[s]}`;
};
const n = ["left", "center", "right"];

// vendor/module-39009.js — webpack module 39009
// params: (e, t) = (module, exports, require)
"use strict";
(t.NO_OFFSET = void 0),
  (t.clampOffset = i),
  (t.offsetFromRect = function (e, t, n) {
    const r = Math.max(1, n.width),
      o = Math.max(1, n.height),
      a = t.endsWith("left")
        ? e.left
        : t.endsWith("right")
          ? r - (e.left + e.width)
          : e.left + e.width / 2 - r / 2,
      s = t.startsWith("top") ? e.top : o - (e.top + e.height);
    return i(t, { x: a / r, y: s / o });
  }),
  (t.fitInWindow = function (e, t) {
    return {
      x: Math.max(0, Math.min(e.left, t.width - e.width)),
      y: Math.max(0, Math.min(e.top, t.height - e.height)),
    };
  }),
  (t.offsetInsets = function (e, t) {
    const { x: n, y: r } = i(e, t),
      o = e.startsWith("top") ? { top: r, bottom: 0 } : { top: 0, bottom: r };
    return e.endsWith("left")
      ? { ...o, left: n, right: 0 }
      : e.endsWith("right")
        ? { ...o, left: 0, right: n }
        : n >= 0
          ? { ...o, left: 2 * n, right: 0 }
          : { ...o, left: 0, right: -2 * n };
  }),
  (t.NO_OFFSET = { x: 0, y: 0 });
const n = 1 / 3,
  r = 1 / 6;
function o(e, t, n) {
  return Number.isFinite(e) ? Math.min(Math.max(e, t), n) : 0;
}
function i(e, t) {
  return {
    x: e.endsWith("center") ? o(t.x, -r, r) : o(t.x, 0, n),
    y: o(t.y, 0, 0.5),
  };
}

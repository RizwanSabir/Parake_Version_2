// vendor/module-60645.js — webpack module 60645
// params: (e, t) = (module, exports, require)
"use strict";
t.installWindowErrorReporting = function (e) {
  window.addEventListener(
    "error",
    (e) => {
      r(e.message) && (e.stopImmediatePropagation(), e.preventDefault());
    },
    !0,
  ),
    (window.onerror = (t) => {
      r(t) || e(t);
    });
};
const n = [
  "ResizeObserver loop limit exceeded",
  "ResizeObserver loop completed with undelivered notifications",
];
function r(e) {
  return "string" == typeof e && n.some((t) => e.includes(t));
}

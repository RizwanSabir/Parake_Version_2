// vendor/module-29993.js — webpack module 29993
// params: (e, t, n) = (module, exports, require)
"use strict";
function r(e) {
  return e && "object" == typeof e
    ? "position" in e || "type" in e
      ? i(e.position)
      : "start" in e || "end" in e
        ? i(e)
        : "line" in e || "column" in e
          ? o(e)
          : ""
    : "";
}
function o(e) {
  return a(e && e.line) + ":" + a(e && e.column);
}
function i(e) {
  return o(e && e.start) + "-" + o(e && e.end);
}
function a(e) {
  return e && "number" == typeof e ? e : 1;
}
n.d(t, { L: () => r });

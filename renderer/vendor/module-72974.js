// vendor/module-72974.js — webpack module 72974
// params: (e, t) = (module, exports, require)
"use strict";
(t.setServerClock = function (e, t) {
  const r = e.getTime() - t;
  n = Math.abs(r) < 5e3 ? 0 : r;
}),
  (t.toServerMs = r),
  (t.serverNow = function () {
    return new Date(r(Date.now()));
  });
let n = 0;
function r(e) {
  return e + n;
}

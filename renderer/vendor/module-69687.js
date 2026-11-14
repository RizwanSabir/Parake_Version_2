// vendor/module-69687.js — webpack module 69687
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  return !e.isEndedOrExpired || "regular_call" === e.mode;
}
(t.canEditCallSession = n),
  (t.canEditCallSessionFully = function (e) {
    return n(e) && !e.isEndedOrExpired;
  });

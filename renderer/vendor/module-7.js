// vendor/module-7.js — webpack module 7
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  return e.rewardCredits > 0;
}
(t.isAppReviewSlotSpent = function (e) {
  return (
    "approved" === e.status || "asked" === e.status || 0 === e.attemptsLeft
  );
}),
  (t.isPaidAppReviewSlot = n);

// app/lib/earn-credits-opened-from-param.js — webpack module 8875
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.EARN_CREDITS_OPENED_FROM_PARAM = t.EARN_CREDITS_TITLE = void 0),
  (t.owesEarnCreditsPrompt = function (e, t) {
    return (
      !!e &&
      !("available" !== e.company && !t) &&
      (0, r.rewardedReviewCards)(e).length > 0
    );
  }),
  (t.earnCreditsRewardParts = function (e) {
    return {
      reviews:
        1 === e.length ? "One quick review" : `${e.length} quick reviews`,
      credits: i(o(e), { free: !0 }),
    };
  });
const r = n(34008 /* app/lib/rewarded-review-cards */);
function o(e) {
  return e.reduce((e, t) => e + t.credits, 0);
}
function i(e, { free: t = !1 } = {}) {
  return `${e} ${t ? "free " : ""}${e > 0 && e <= 1 ? "credit" : "credits"}`;
}
(t.EARN_CREDITS_TITLE = "Earn free credits"),
  (t.EARN_CREDITS_OPENED_FROM_PARAM = "openedFrom");

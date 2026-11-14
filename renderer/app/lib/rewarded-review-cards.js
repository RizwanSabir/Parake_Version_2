// app/lib/rewarded-review-cards.js — webpack module 34008
// params: (e, t, n) = (module, exports, require)
"use strict";
t.rewardedReviewCards = function (e) {
  return (function (e) {
    const t = [],
      n = e.companyName?.trim();
    if (
      ("available" === e.company &&
        t.push({
          kind: "company",
          title: n
            ? `Rate your interview at ${n}`
            : "Rate the company you interviewed with",
          label: n ? `Rate ${n}` : "Rate the company",
          rewarded: !1,
          credits: 0,
        }),
      e.app && !(0, o.isAppReviewSlotSpent)(e.app))
    ) {
      const n = (function (e) {
        const { label: t } = r.APP_REVIEW_PLATFORMS[e.platform];
        switch (e.ask) {
          case "review":
            return `Rate us on ${t}`;
          case "upvote":
            return `Upvote us on ${t}`;
          case "upvote_comment":
            return `Upvote and comment on ${t}`;
        }
      })(e.app);
      t.push({
        kind: "app",
        title: n,
        label: n,
        rewarded: (0, o.isPaidAppReviewSlot)(e.app),
        credits: e.app.rewardCredits,
      });
    }
    return t;
  })(e).filter((e) => e.rewarded);
};
const r = n(88094 /* app/lib/app-review-platforms */),
  o = n(7 /* vendor/module-7 */);

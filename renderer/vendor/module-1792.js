// vendor/module-1792.js — webpack module 1792
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.initialMicFallbackState = t.x = t.FIX_RECHECK_MS = void 0),
  (t.nextMicFallbackState = function (e, t) {
    const {
        nowMs: n,
        tally: a,
        isMock: s,
        micOnly: l,
        platform: c,
        callAppOpen: u,
        shareState: d,
      } = t,
      p = a.callShareLines > 0;
    if (e.card) {
      if (l) return i(e, "micOnly");
      if (p) return i(e, "heard");
      if (u && (0, o.isOffer)(e.card.message)) {
        const t = (0, o.checkComputerAudio)({
          platform: c,
          moment: e.card.moment,
          shareState: d,
          callAppOpen: u,
          offerDeclined: e.offerDeclined,
          micWordsEnough: !0,
        });
        return t && !(0, o.isOffer)(t)
          ? {
              state: {
                ...e,
                card: { message: t, moment: e.card.moment, atMs: n },
              },
              closedBy: "replaced",
            }
          : i(e, "call-app");
      }
      return { state: e };
    }
    if (s || l || p) return { state: e };
    const f = null !== e.recheckAtMs && n >= e.recheckAtMs;
    if (e.minuteChecked && !f) return { state: e };
    const h = (0, r.callUnderWayAtMs)(a);
    if (null === h || n < h) return { state: e };
    if ("starting" === d || "failed" === d) return { state: e };
    const m = (0, o.checkComputerAudio)({
      platform: c,
      moment: "minute",
      shareState: d,
      callAppOpen: u,
      offerDeclined: e.offerDeclined,
      micWordsEnough: !0,
    });
    return {
      state: {
        ...e,
        minuteChecked: !0,
        recheckAtMs: null,
        card: m ? { message: m, moment: "minute", atMs: n } : null,
      },
    };
  }),
  (t.nextMicFallbackCheckAtMs = function (e, t) {
    if (e.card) return null;
    const n = [
      e.minuteChecked ? null : (0, r.callUnderWayAtMs)(t),
      e.recheckAtMs,
    ].filter((e) => null !== e);
    return n.length > 0 ? Math.min(...n) : null;
  }),
  (t.micCheckDueAtMs = function (e) {
    return null === e.firstCallShareAtMs || e.shareWords < 90
      ? null
      : e.firstCallShareAtMs + t.x;
  });
const r = n(57135 /* vendor/module-57135 */),
  o = n(35670 /* vendor/module-35670 */);
function i(e, t) {
  return { state: { ...e, card: null }, closedBy: t };
}
(t.FIX_RECHECK_MS = 6e4),
  (t.x = 18e4),
  (t.initialMicFallbackState = (e) => ({
    card: null,
    minuteChecked: !1,
    recheckAtMs: null,
    offerDeclined: e,
  }));

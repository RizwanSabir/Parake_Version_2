// app/components/earn-credits-toast.js — webpack module 94885
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EarnCreditsToast = function (e) {
  const t = (0, o.c)(23),
    { callSessionId: n, cards: h, platform: m, openWeb: g, onClose: y } = e;
  let v, b, S;
  t[0] !== n || t[1] !== h || t[2] !== m
    ? ((v = () => {
        (0, l.trackClientEvent)(c.mixpanelEvents.earnCredits.shown, {
          callSessionId: n,
          surface: p.DESKTOP_TOAST_SURFACE,
          cards: h.map(f),
          platform: m,
        });
      }),
      (t[0] = n),
      (t[1] = h),
      (t[2] = m),
      (t[3] = v))
    : (v = t[3]),
    t[4] !== n ? ((b = [n]), (t[4] = n), (t[5] = b)) : (b = t[5]),
    (0, i.useEffect)(v, b),
    t[6] !== y || t[7] !== g
      ? ((S = function () {
          g(), y();
        }),
        (t[6] = y),
        (t[7] = g),
        (t[8] = S))
      : (S = t[8]);
  const _ = S;
  let x;
  t[9] !== n || t[10] !== y
    ? ((x = function () {
        (0, l.trackClientEvent)(c.mixpanelEvents.earnCredits.dismissed, {
          callSessionId: n,
          surface: p.DESKTOP_TOAST_SURFACE,
        }),
          y();
      }),
      (t[9] = n),
      (t[10] = y),
      (t[11] = x))
    : (x = t[11]);
  const w = x;
  let E;
  t[12] !== h
    ? ((E = (0, u.earnCreditsRewardParts)(h)), (t[12] = h), (t[13] = E))
    : (E = t[13]);
  const T = E;
  let k, C, I, A;
  return (
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = (0, r.jsx)(a.GoldSheen, { className: "-z-10" })),
        (C = (0, r.jsx)(s.Typography, {
          className: "font-medium whitespace-nowrap",
          children: u.EARN_CREDITS_TITLE,
        })),
        (t[14] = k),
        (t[15] = C))
      : ((k = t[14]), (C = t[15])),
    t[16] !== _
      ? ((I = (0, r.jsxs)("button", {
          type: "button",
          onClick: _,
          className:
            "bg-gold-card shadow-gold-ring hover:shadow-gold-ring-strong text-gold-card-ink relative isolate shrink-0 cursor-pointer overflow-hidden rounded-xl px-3 py-2 transition-[box-shadow] active:scale-[0.97]",
          children: [k, C],
        })),
        (t[16] = _),
        (t[17] = I))
      : (I = t[17]),
    t[18] !== w || t[19] !== T.credits || t[20] !== T.reviews || t[21] !== I
      ? ((A = (0, r.jsx)(d.Notification, {
          duration: 1 / 0,
          title: T.credits,
          body: T.reviews,
          primaryAction: I,
          onClose: w,
        })),
        (t[18] = w),
        (t[19] = T.credits),
        (t[20] = T.reviews),
        (t[21] = I),
        (t[22] = A))
      : (A = t[22]),
    A
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(78856 /* app/components/gold-sheen */),
  s = n(34483 /* app/components/typography-variants */),
  l = n(87093 /* vendor/module-87093 */),
  c = n(22764 /* vendor/module-22764 */),
  u = n(8875 /* app/lib/earn-credits-opened-from-param */),
  d = n(50341 /* app/components/notification */),
  p = n(72992 /* vendor/module-72992 */);
function f(e) {
  return e.kind;
}

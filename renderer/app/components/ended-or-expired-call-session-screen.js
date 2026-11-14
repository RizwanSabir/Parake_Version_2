// app/components/ended-or-expired-call-session-screen.js — webpack module 86656
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EndedOrExpiredCallSessionScreen = function (e) {
  const t = (0, o.c)(14),
    {
      callSession: n,
      onBackClick: c,
      onStartAnotherMockClick: u,
      onExtendClick: d,
      extendingSession: p,
    } = e,
    { apiConfig: f } = (0, l.useApiConfig)(),
    { data: h } = (0, s.useCreditsQuery)(),
    m = (h?.callCredits ?? 0) >= a.SESSION_CREDIT_COST || n.isPlanSession,
    g = `${f.url}/dashboard/upgrade`;
  let y;
  t[0] !== g
    ? ((y = { url: g, openInNewTab: !0 }), (t[0] = g), (t[1] = y))
    : (y = t[1]);
  const v = !h;
  let b;
  return (
    t[2] !== n.continueWindowEndsAt ||
    t[3] !== n.isFreeSession ||
    t[4] !== n.isMock ||
    t[5] !== n.isPlanSession ||
    t[6] !== m ||
    t[7] !== p ||
    t[8] !== c ||
    t[9] !== d ||
    t[10] !== u ||
    t[11] !== y ||
    t[12] !== v
      ? ((b = (0, r.jsx)("div", {
          className: "bg-card rounded-window-card border p-4",
          children: (0, r.jsx)(i.ContinueSessionPanel, {
            isPlanSession: n.isPlanSession,
            isFreeSession: n.isFreeSession,
            isMock: n.isMock,
            onStartAnotherMock: u,
            canContinue: m,
            isBusy: p,
            onContinue: d,
            purchasePath: y,
            continueWindowEndsAt: n.continueWindowEndsAt,
            isLoading: v,
            onBack: c,
          }),
        })),
        (t[2] = n.continueWindowEndsAt),
        (t[3] = n.isFreeSession),
        (t[4] = n.isMock),
        (t[5] = n.isPlanSession),
        (t[6] = m),
        (t[7] = p),
        (t[8] = c),
        (t[9] = d),
        (t[10] = u),
        (t[11] = y),
        (t[12] = v),
        (t[13] = b))
      : (b = t[13]),
    b
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(43771 /* app/components/continue-session-panel */),
  a = n(46852 /* vendor/module-46852 */),
  s = n(71107 /* app/hooks/use-credits-query */),
  l = n(8932 /* app/components/api-config-provider */);

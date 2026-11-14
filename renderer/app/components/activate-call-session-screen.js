// app/components/activate-call-session-screen.js — webpack module 21699
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ActivateCallSessionScreen = function (e) {
  const t = (0, o.c)(26),
    { onBackClick: n, onSelect: d, isPlanLoading: p, mode: f, isMock: h } = e,
    { apiConfig: m } = (0, s.useApiConfig)(),
    { data: g } = c.api.user.get.useQuery(),
    [y, v] = (0, i.useState)(u);
  let b, S;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((b = () => {
        const e = setInterval(() => v(new Date()), 1e3);
        return () => clearInterval(e);
      }),
      (S = []),
      (t[0] = b),
      (t[1] = S))
    : ((b = t[0]), (S = t[1])),
    (0, i.useEffect)(b, S);
  const _ = g?.nextTrialSessionAllowedAt,
    x = !_ || _ < y;
  let w;
  t[2] !== _ || t[3] !== y
    ? ((w = _
        ? (0, l.millisecondsToTimeString)(_.getTime() - y.getTime())
        : ""),
      (t[2] = _),
      (t[3] = y),
      (t[4] = w))
    : (w = t[4]);
  const E = w,
    T = g?.callCredits ?? 0,
    k = g?.freeSessionsLeft ?? 0;
  let C, I;
  t[5] !== d
    ? ((C = () => d(!1)), (I = () => d(!0)), (t[5] = d), (t[6] = C), (t[7] = I))
    : ((C = t[6]), (I = t[7]));
  const A = !g || p,
    O = `${m.url}/dashboard/upgrade`;
  let R;
  t[8] !== O
    ? ((R = { url: O, openInNewTab: !0 }), (t[8] = O), (t[9] = R))
    : (R = t[9]);
  const M = g?.freeMockSessionAvailable ?? !1;
  let P, N;
  return (
    t[10] !== d
      ? ((P = (e) => {
          const { free: t } = e;
          return d(t);
        }),
        (t[10] = d),
        (t[11] = P))
      : (P = t[11]),
    t[12] !== x ||
    t[13] !== h ||
    t[14] !== f ||
    t[15] !== n ||
    t[16] !== R ||
    t[17] !== M ||
    t[18] !== P ||
    t[19] !== T ||
    t[20] !== k ||
    t[21] !== C ||
    t[22] !== I ||
    t[23] !== A ||
    t[24] !== E
      ? ((N = (0, r.jsx)("div", {
          className: "bg-card rounded-window-card border p-4",
          children: (0, r.jsx)(a.SessionTypeChooser, {
            callCredits: T,
            freeSessionsLeft: k,
            freeSessionAllowed: x,
            timeLeftForFreeSession: E,
            onSelectPaid: C,
            onSelectFree: I,
            mode: f,
            isActivating: !1,
            isLoading: A,
            purchasePath: R,
            onBack: n,
            isMock: h,
            freeMockAvailable: M,
            onSelectMock: P,
          }),
        })),
        (t[12] = x),
        (t[13] = h),
        (t[14] = f),
        (t[15] = n),
        (t[16] = R),
        (t[17] = M),
        (t[18] = P),
        (t[19] = T),
        (t[20] = k),
        (t[21] = C),
        (t[22] = I),
        (t[23] = A),
        (t[24] = E),
        (t[25] = N))
      : (N = t[25]),
    N
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(52353 /* app/components/on-click-52353 */),
  s = n(8932 /* app/components/api-config-provider */),
  l = n(45222 /* vendor/module-45222 */),
  c = n(46998 /* app/components/trpcreact-provider */);
function u() {
  return new Date();
}

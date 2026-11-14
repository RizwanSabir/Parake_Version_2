// app/components/payment-failed-notice.js — webpack module 71247
// params: (e, t, n) = (module, exports, require)
"use strict";
t.PaymentFailedNotice = function (e) {
  const t = (0, o.c)(12),
    { className: n } = e,
    { apiConfig: u } = (0, l.useApiConfig)();
  let d;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((d = { refetchOnMount: !1 }), (t[0] = d))
    : (d = t[0]);
  const { data: p, refetch: f } = c.api.subscription.getState.useQuery(
    void 0,
    d,
  );
  let h;
  t[1] !== p ? ((h = (0, s.isPastDue)(p)), (t[1] = p), (t[2] = h)) : (h = t[2]);
  const m = h;
  let g, y, v, b;
  return (
    t[3] !== m || t[4] !== f
      ? ((g = () => {
          if (!m) return;
          const e = () => {
            f({ cancelRefetch: !1 });
          };
          return (
            window.addEventListener("focus", e),
            () => window.removeEventListener("focus", e)
          );
        }),
        (y = [m, f]),
        (t[3] = m),
        (t[4] = f),
        (t[5] = g),
        (t[6] = y))
      : ((g = t[5]), (y = t[6])),
    (0, i.useEffect)(g, y),
    m
      ? (t[7] !== u.url
          ? ((v = () => window.open(`${u.url}/dashboard/profile`)),
            (t[7] = u.url),
            (t[8] = v))
          : (v = t[8]),
        t[9] !== n || t[10] !== v
          ? ((b = (0, r.jsx)(a.PaymentFailedBanner, {
              onUpdateClick: v,
              className: n,
            })),
            (t[9] = n),
            (t[10] = v),
            (t[11] = b))
          : (b = t[11]),
        b)
      : null
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(64026 /* vendor/module-64026 */),
  s = n(7994 /* vendor/module-7994 */),
  l = n(8932 /* app/components/api-config-provider */),
  c = n(46998 /* app/components/trpcreact-provider */);

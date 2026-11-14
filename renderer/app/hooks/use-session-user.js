// app/hooks/use-session-user.js — webpack module 50567
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useSessionUser = function () {
  const e = (0, r.c)(10);
  let t;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((t = { retry: !1 }), (e[0] = t))
    : (t = e[0]);
  const {
      data: n,
      isLoading: s,
      error: l,
    } = a.api.user.get.useQuery(void 0, t),
    [c, u] = (0, o.useState)(!1);
  let d;
  e[1] !== n?.id || e[2] !== l
    ? ((d = () => {
        l ? i.ServerError.isUnauthorized(l) && u(!0) : n?.id && u(!1);
      }),
      (e[1] = n?.id),
      (e[2] = l),
      (e[3] = d))
    : (d = e[3]);
  const p = n?.id;
  let f;
  e[4] !== l || e[5] !== p
    ? ((f = [l, p]), (e[4] = l), (e[5] = p), (e[6] = f))
    : (f = e[6]),
    (0, o.useEffect)(d, f);
  const h = c ? void 0 : n;
  let m;
  return (
    e[7] !== s || e[8] !== h
      ? ((m = { user: h, isLoading: s }), (e[7] = s), (e[8] = h), (e[9] = m))
      : (m = e[9]),
    m
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(353 /* vendor/module-353 */),
  a = n(46998 /* app/components/trpcreact-provider */);

// app/components/credits-button.js — webpack module 82683
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreditsButton = function () {
  const e = (0, o.c)(25),
    { apiConfig: t } = (0, d.useApiConfig)(),
    { data: n, error: m, isLoading: g } = (0, u.useCreditsQuery)();
  let y;
  e[0] !== m || e[1] !== n
    ? ((y = (0, p.resolveIsLoggedIn)(n, m)), (e[0] = m), (e[1] = n), (e[2] = y))
    : (y = e[2]);
  const v = y;
  let b;
  e[3] !== v ? ((b = { enabled: v }), (e[3] = v), (e[4] = b)) : (b = e[4]);
  const { data: S, isLoading: _ } = f.api.subscription.getState.useQuery(
    void 0,
    b,
  );
  if (!v) return null;
  if (g || _) {
    let t;
    return (
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(h.Button, {
            size: "sm",
            className: "flex-row items-center gap-1",
            disabled: !0,
            children: (0, r.jsx)(a.Spinner, { className: "h-4" }),
          })),
          (e[5] = t))
        : (t = e[5]),
      t
    );
  }
  const x = n?.callCredits;
  let w;
  e[6] !== x
    ? ((w = (0, l.clampCreditsForDisplay)(x)), (e[6] = x), (e[7] = w))
    : (w = e[7]);
  const E = w;
  let T;
  e[8] !== S || e[9] !== n?.lifetimePurchasedAt
    ? ((T = (0, c.coversCalls)(S) || n?.lifetimePurchasedAt),
      (e[8] = S),
      (e[9] = n?.lifetimePurchasedAt),
      (e[10] = T))
    : (T = e[10]);
  const k = Boolean(T),
    C = k || Boolean(E) ? "outline" : "default",
    I = `${t.url}/dashboard/upgrade`;
  let A;
  e[11] !== k
    ? ((A = k
        ? (0, r.jsx)(i.InfinityIcon, { className: "h-4 w-4" })
        : (0, r.jsx)(i.Coins, { className: "h-4 w-4" })),
      (e[11] = k),
      (e[12] = A))
    : (A = e[12]);
  const O = k ? null : E ? `${E} Credits` : "Buy credits";
  let R, M;
  e[13] !== I || e[14] !== A || e[15] !== O
    ? ((R = (0, r.jsxs)("a", {
        href: I,
        target: "_blank",
        children: [A, O],
      })),
      (e[13] = I),
      (e[14] = A),
      (e[15] = O),
      (e[16] = R))
    : (R = e[16]),
    e[17] !== C || e[18] !== R
      ? ((M = (0, r.jsx)(s.TooltipTrigger, {
          render: (0, r.jsx)(h.Button, {
            size: "sm",
            variant: C,
            className: "flex-row items-center gap-1",
            render: R,
          }),
        })),
        (e[17] = C),
        (e[18] = R),
        (e[19] = M))
      : (M = e[19]);
  const P = k ? "Unlimited sessions" : "Click to buy credits";
  let N, D;
  return (
    e[20] !== P
      ? ((N = (0, r.jsx)(s.TooltipContent, { children: P })),
        (e[20] = P),
        (e[21] = N))
      : (N = e[21]),
    e[22] !== M || e[23] !== N
      ? ((D = (0, r.jsxs)(s.Tooltip, { children: [M, N] })),
        (e[22] = M),
        (e[23] = N),
        (e[24] = D))
      : (D = e[24]),
    D
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(15201 /* app/components/spinner */),
  s = n(58055 /* app/components/tooltip */),
  l = n(52216 /* vendor/module-52216 */),
  c = n(7994 /* vendor/module-7994 */),
  u = n(71107 /* app/hooks/use-credits-query */),
  d = n(8932 /* app/components/api-config-provider */),
  p = n(17544 /* vendor/module-17544 */),
  f = n(46998 /* app/components/trpcreact-provider */),
  h = n(99683 /* vendor/module-99683 */);

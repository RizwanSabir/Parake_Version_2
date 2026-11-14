// app/components/login-screen.js — webpack module 6525
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LoginScreen = function (e) {
  const t = (0, o.c)(29),
    { onSetAuthToken: n, minimize: f } = e,
    m = (0, c.useBrand)(),
    { locationOnScreen: g } = (0, u.useLocationOnScreen)(),
    { apiConfig: y } = (0, l.useApiConfig)(),
    { url: v, bypassToken: b, environment: S } = y;
  let _;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = { retry: !1, retryOnMount: !1 }), (t[0] = _))
    : (_ = t[0]);
  const { isLoading: x } = d.api.user.get.useQuery(void 0, _),
    [w, E] = (0, i.useState)(!1),
    [T, k] = (0, i.useState)("");
  let C;
  t[1] !== g || t[2] !== f
    ? ((C = (e) => {
        e.metaKey || e.ctrlKey
          ? (e.preventDefault(), E(!0))
          : "top-center" === g && f();
      }),
      (t[1] = g),
      (t[2] = f),
      (t[3] = C))
    : (C = t[3]);
  const I = C;
  let A;
  t[4] !== T || t[5] !== n
    ? ((A = (e) => {
        e.metaKey || e.ctrlKey ? E(!1) : n(T);
      }),
      (t[4] = T),
      (t[5] = n),
      (t[6] = A))
    : (A = t[6]);
  const O = A;
  let R;
  t[7] !== b || t[8] !== S || t[9] !== v
    ? ((R = function () {
        const e = new URL(`${v}/auth/desktop`);
        return (
          e.searchParams.set("protocol", h),
          b &&
            (0, p.requiresBypassToken)(S) &&
            e.searchParams.set("x-vercel-protection-bypass", b),
          e.toString()
        );
      }),
      (t[7] = b),
      (t[8] = S),
      (t[9] = v),
      (t[10] = R))
    : (R = t[10]);
  const M = R;
  let P;
  t[11] !== m.name
    ? ((P = (0, r.jsx)("h1", {
        className: "text-xl font-medium",
        children: m.name,
      })),
      (t[11] = m.name),
      (t[12] = P))
    : (P = t[12]);
  const N = w
    ? "Enter your authentication token manually."
    : `Login to your ${m.name} account to start your interview.`;
  let D, j, L, F;
  return (
    t[13] !== N
      ? ((D = (0, r.jsx)("p", {
          className: "text-muted-foreground",
          children: N,
        })),
        (t[13] = N),
        (t[14] = D))
      : (D = t[14]),
    t[15] !== P || t[16] !== D
      ? ((j = (0, r.jsxs)("div", {
          className: "flex flex-col items-center justify-center gap-2",
          children: [P, D],
        })),
        (t[15] = P),
        (t[16] = D),
        (t[17] = j))
      : (j = t[17]),
    t[18] !== T ||
    t[19] !== M ||
    t[20] !== I ||
    t[21] !== O ||
    t[22] !== x ||
    t[23] !== n ||
    t[24] !== w
      ? ((L = w
          ? (0, r.jsxs)("div", {
              className: "flex w-full flex-col gap-2",
              children: [
                (0, r.jsx)(s.Input, {
                  type: "text",
                  placeholder: "Auth token",
                  value: T,
                  onChange: (e) => k(e.target.value),
                  onKeyDown: (e) => {
                    "Enter" === e.key && n(T);
                  },
                }),
                (0, r.jsx)(a.Button, {
                  variant: "default",
                  className: "w-full",
                  onClick: O,
                  children: "Set auth token",
                }),
              ],
            })
          : (0, r.jsx)(a.Button, {
              className: "w-full",
              loading: x,
              render: (0, r.jsx)("a", {
                href: M(),
                target: "_blank",
                onClick: I,
              }),
              children: "Login",
            })),
        (t[18] = T),
        (t[19] = M),
        (t[20] = I),
        (t[21] = O),
        (t[22] = x),
        (t[23] = n),
        (t[24] = w),
        (t[25] = L))
      : (L = t[25]),
    t[26] !== L || t[27] !== j
      ? ((F = (0, r.jsxs)("div", {
          className:
            "bg-card rounded-window-card flex flex-col items-center justify-center gap-4 border p-4",
          children: [j, L],
        })),
        (t[26] = L),
        (t[27] = j),
        (t[28] = F))
      : (F = t[28]),
    F
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(99683 /* vendor/module-99683 */),
  s = n(51371 /* vendor/module-51371 */),
  l = n(8932 /* app/components/api-config-provider */),
  c = n(74920 /* app/lib/apply-brand-attribute */),
  u = n(63324 /* app/components/location-on-screen-provider */),
  d = n(46998 /* app/components/trpcreact-provider */),
  p = n(54049 /* app/lib/api-urls */),
  f = n(43286 /* app/lib/desktop-brand */),
  h = (0, f.deepLinkScheme)(f.DESKTOP_BRAND, !0);

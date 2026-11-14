// app/components/on-select.js — webpack module 5207
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ApiEnvironmentMenu = function () {
  const e = (0, o.c)(35),
    { apiConfig: t, updateApiConfig: n } = (0, l.useApiConfig)(),
    [i, u] = (0, a.useState)(!1),
    g = t.environment,
    y = d[g],
    v = p;
  let b;
  e[0] !== t || e[1] !== n
    ? ((b = function (e) {
        if ("custom" === e) return;
        const r = c.API_URLS[e];
        n({ ...t, environment: e, url: r }), u(!1);
      }),
      (e[0] = t),
      (e[1] = n),
      (e[2] = b))
    : (b = e[2]);
  const S = b;
  let _, x, w, E;
  e[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = (0, r.jsx)("div", { className: "bg-border my-1 h-px" })),
      (x = (0, r.jsx)("div", {
        className:
          "text-muted-foreground px-2 pb-1 text-[11px] font-semibold tracking-wide uppercase",
        children: "API URL",
      })),
      (e[3] = _),
      (e[4] = x))
    : ((_ = e[3]), (x = e[4])),
    e[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((w = () => u(h)), (e[5] = w))
      : (w = e[5]),
    e[6] !== g ? ((E = f(g)), (e[6] = g), (e[7] = E)) : (E = e[7]);
  const T = `h-2 w-2 shrink-0 rounded-full ${E}`;
  let k, C, I;
  e[8] !== T
    ? ((k = (0, r.jsx)("span", { className: T })), (e[8] = T), (e[9] = k))
    : (k = e[9]),
    e[10] !== y
      ? ((C = (0, r.jsx)("span", {
          className: "text-foreground font-medium",
          children: y,
        })),
        (e[10] = y),
        (e[11] = C))
      : (C = e[11]),
    e[12] !== k || e[13] !== C
      ? ((I = (0, r.jsxs)("span", {
          className: "flex min-w-0 items-center gap-2 text-left",
          children: [k, C],
        })),
        (e[12] = k),
        (e[13] = C),
        (e[14] = I))
      : (I = e[14]);
  const A = i ? "Close" : "Change";
  let O, R;
  e[15] !== A
    ? ((O = (0, r.jsx)("span", {
        className: "text-muted-foreground text-xs font-medium",
        children: A,
      })),
      (e[15] = A),
      (e[16] = O))
    : (O = e[16]),
    e[17] !== O || e[18] !== I
      ? ((R = (0, r.jsx)("div", {
          className: "px-1 pb-1",
          children: (0, r.jsxs)(s.Button, {
            type: "button",
            variant: "ghost",
            className:
              "h-auto w-full justify-between rounded-md px-2 py-1.5 font-normal",
            onClick: w,
            children: [I, O],
          }),
        })),
        (e[17] = O),
        (e[18] = I),
        (e[19] = R))
      : (R = e[19]);
  const M =
    "grid transition-[grid-template-rows] duration-200 ease-out " +
    (i ? "grid-rows-[1fr]" : "grid-rows-[0fr]");
  let P;
  e[20] === Symbol.for("react.memo_cache_sentinel")
    ? ((P = (0, r.jsx)("div", {
        className: "bg-border mx-2 mb-1 h-px",
      })),
      (e[20] = P))
    : (P = e[20]);
  const N =
    "space-y-1 px-1 pb-1 transition duration-200 ease-out " +
    (i ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0");
  let D, j, L, F;
  return (
    e[21] !== t || e[22] !== S || e[23] !== g || e[24] !== n
      ? ((D = v.map((e) => {
          const o = g === e;
          return (0, r.jsx)(
            m,
            {
              environment: e,
              isSelected: o,
              initialToken: t.bypassToken,
              onSelect: () => S(e),
              onConfirm: (r) => {
                const { token: o, url: i } = r,
                  a = "custom" === e ? i : c.API_URLS[e];
                n({ ...t, environment: e, url: a, bypassToken: o }), u(!1);
              },
            },
            e,
          );
        })),
        (e[21] = t),
        (e[22] = S),
        (e[23] = g),
        (e[24] = n),
        (e[25] = D))
      : (D = e[25]),
    e[26] !== N || e[27] !== D
      ? ((j = (0, r.jsxs)("div", {
          className: "overflow-hidden",
          children: [P, (0, r.jsx)("div", { className: N, children: D })],
        })),
        (e[26] = N),
        (e[27] = D),
        (e[28] = j))
      : (j = e[28]),
    e[29] !== M || e[30] !== j
      ? ((L = (0, r.jsx)("div", { className: M, children: j })),
        (e[29] = M),
        (e[30] = j),
        (e[31] = L))
      : (L = e[31]),
    e[32] !== R || e[33] !== L
      ? ((F = (0, r.jsxs)(r.Fragment, { children: [_, x, R, L] })),
        (e[32] = R),
        (e[33] = L),
        (e[34] = F))
      : (F = e[34]),
    F
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(99683 /* vendor/module-99683 */),
  l = n(8932 /* app/components/api-config-provider */),
  c = n(54049 /* app/lib/api-urls */),
  u = n(5467 /* app/components/api-access-dialog */),
  d = {
    localhost: "Localhost",
    staging: "Staging",
    production: "Production",
    custom: "Custom",
  },
  p = ["staging", "production", "custom"];
function f(e) {
  return "localhost" === e
    ? "bg-emerald-500"
    : "staging" === e
      ? "bg-amber-500"
      : "production" === e
        ? "bg-slate-500"
        : "bg-violet-500";
}
function h(e) {
  return !e;
}
function m(e) {
  const t = (0, o.c)(27),
    {
      environment: n,
      isSelected: l,
      initialToken: p,
      onSelect: h,
      onConfirm: m,
    } = e,
    [g, y] = (0, a.useState)(!1);
  let v;
  t[0] !== n
    ? ((v = (0, c.requiresBypassToken)(n)), (t[0] = n), (t[1] = v))
    : (v = t[1]);
  const b = v;
  let S, _;
  t[2] !== b || t[3] !== h
    ? ((S = () => {
        b ? y(!0) : h();
      }),
      (t[2] = b),
      (t[3] = h),
      (t[4] = S))
    : (S = t[4]),
    t[5] !== n ? ((_ = f(n)), (t[5] = n), (t[6] = _)) : (_ = t[6]);
  const x = `h-2 w-2 shrink-0 rounded-full ${_}`;
  let w;
  t[7] !== x
    ? ((w = (0, r.jsx)("span", { className: x })), (t[7] = x), (t[8] = w))
    : (w = t[8]);
  const E = d[n];
  let T, k, C, I, A;
  return (
    t[9] !== w || t[10] !== E
      ? ((T = (0, r.jsxs)("span", {
          className: "flex items-center gap-2 text-left",
          children: [w, E],
        })),
        (t[9] = w),
        (t[10] = E),
        (t[11] = T))
      : (T = t[11]),
    t[12] !== l
      ? ((k =
          l &&
          (0, r.jsx)(i.Check, {
            className: "text-foreground h-4 w-4",
          })),
        (t[12] = l),
        (t[13] = k))
      : (k = t[13]),
    t[14] !== S || t[15] !== T || t[16] !== k
      ? ((C = (0, r.jsxs)(s.Button, {
          type: "button",
          variant: "ghost",
          className:
            "h-auto w-full justify-between rounded-md px-2 py-1.5 font-normal",
          onClick: S,
          children: [T, k],
        })),
        (t[14] = S),
        (t[15] = T),
        (t[16] = k),
        (t[17] = C))
      : (C = t[17]),
    t[18] !== n || t[19] !== p || t[20] !== b || t[21] !== g || t[22] !== m
      ? ((I =
          b &&
          (0, r.jsx)(u.ApiAccessDialog, {
            open: g,
            environment: n,
            initialToken: p,
            onOpenChange: y,
            onCancel: () => y(!1),
            onConfirm: (e) => {
              m(e), y(!1);
            },
          })),
        (t[18] = n),
        (t[19] = p),
        (t[20] = b),
        (t[21] = g),
        (t[22] = m),
        (t[23] = I))
      : (I = t[23]),
    t[24] !== I || t[25] !== C
      ? ((A = (0, r.jsxs)(r.Fragment, { children: [C, I] })),
        (t[24] = I),
        (t[25] = C),
        (t[26] = A))
      : (A = t[26]),
    A
  );
}

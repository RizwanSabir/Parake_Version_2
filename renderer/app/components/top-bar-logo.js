// app/components/top-bar-logo.js — webpack module 32148
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TopBarLogo = function (e) {
  const t = (0, o.c)(18),
    { onMinimize: n, onPointerDown: f } = e,
    [h, m] = (0, i.useState)(!1),
    g = (0, c.useBrand)(),
    { data: y } = (0, u.useVersion)(),
    { apiConfig: v } = (0, l.useApiConfig)(),
    b = !1;
  let S;
  t[0] !== n
    ? ((S = function (e) {
        (e.metaKey || e.ctrlKey) && e.shiftKey ? m(p) : n();
      }),
      (t[0] = n),
      (t[1] = S))
    : (S = t[1]);
  const _ = S,
    x = `Hide ${g.name}`;
  let w, E, T;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = (0, r.jsx)(s.Logo, {})), (t[2] = w))
    : (w = t[2]),
    t[3] !== v ? ((E = b), (t[3] = v), (t[4] = E)) : (E = t[4]),
    t[5] !== _ || t[6] !== f || t[7] !== x || t[8] !== E
      ? ((T = (0, r.jsx)(a.TooltipTrigger, {
          render: (0, r.jsxs)("button", {
            type: "button",
            "aria-label": x,
            onClick: _,
            onPointerDown: f,
            className:
              "focus-visible:ring-ring relative inline-flex rounded-md outline-none focus-visible:ring-1",
            children: [w, E],
          }),
        })),
        (t[5] = _),
        (t[6] = f),
        (t[7] = x),
        (t[8] = E),
        (t[9] = T))
      : (T = t[9]);
  const k = y ? `Hide · ${y}` : "Hide";
  let C, I, A;
  return (
    t[10] !== k
      ? ((C = (0, r.jsx)(a.TooltipContent, { children: k })),
        (t[10] = k),
        (t[11] = C))
      : (C = t[11]),
    t[12] !== T || t[13] !== C
      ? ((I = (0, r.jsxs)(a.Tooltip, { children: [T, C] })),
        (t[12] = T),
        (t[13] = C),
        (t[14] = I))
      : (I = t[14]),
    t[15] !== h || t[16] !== I
      ? ((A = (0, r.jsx)(d.DebugToolsMenu, {
          open: h,
          onOpenChange: m,
          canEditApiEnvironment: b,
          children: I,
        })),
        (t[15] = h),
        (t[16] = I),
        (t[17] = A))
      : (A = t[17]),
    A
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(58055 /* app/components/tooltip */),
  s = n(55233 /* app/components/logo */),
  l = n(8932 /* app/components/api-config-provider */),
  c = n(74920 /* app/lib/apply-brand-attribute */),
  u = n(50272 /* app/lib/os-version-raw */),
  d = n(15078 /* app/components/debug-tools-menu */);
function p(e) {
  return !e;
}

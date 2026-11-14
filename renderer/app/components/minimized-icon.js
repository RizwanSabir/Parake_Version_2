// app/components/minimized-icon.js — webpack module 8593
// params: (e, t, n) = (module, exports, require)
"use strict";
t.MinimizedIcon = function (e) {
  const t = (0, o.c)(11),
    { onClick: n } = e,
    c = (0, l.useDragHandle)(),
    u = (0, s.useBrand)();
  let d, p, f, h, m;
  return (
    t[0] !== c
      ? ((d = (e) => c?.onPointerDown(e, "circle")), (t[0] = c), (t[1] = d))
      : (d = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = (0, r.jsx)(a.Logo, { noText: !0, height: 36 })), (t[2] = p))
      : (p = t[2]),
    t[3] !== n || t[4] !== d
      ? ((f = (0, r.jsx)(i.TooltipTrigger, {
          render: (0, r.jsx)("div", {
            onClick: n,
            onPointerDown: d,
            className:
              "hover:bg-accent bg-card max-w-max rounded-(--radius-disc) border p-0.5",
            children: p,
          }),
        })),
        (t[3] = n),
        (t[4] = d),
        (t[5] = f))
      : (f = t[5]),
    t[6] !== u.name
      ? ((h = (0, r.jsx)(i.TooltipContent, { children: u.name })),
        (t[6] = u.name),
        (t[7] = h))
      : (h = t[7]),
    t[8] !== f || t[9] !== h
      ? ((m = (0, r.jsxs)(i.Tooltip, { children: [f, h] })),
        (t[8] = f),
        (t[9] = h),
        (t[10] = m))
      : (m = t[10]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(58055 /* app/components/tooltip */),
  a = n(55233 /* app/components/logo */),
  s = n(74920 /* app/lib/apply-brand-attribute */),
  l = n(37438 /* app/hooks/use-drag-handle */);

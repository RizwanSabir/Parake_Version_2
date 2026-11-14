// app/components/star-method-switch.js — webpack module 49241
// params: (e, t, n) = (module, exports, require)
"use strict";
t.StarMethodSwitch = function (e) {
  const t = (0, o.c)(17),
    { checked: n, onCheckedChange: d, className: p } = e,
    f = (0, a.useId)();
  let h, m, g, y, v, b, S;
  return (
    t[0] !== p
      ? ((h = (0, s.cn)("flex items-center gap-1.5", p)),
        (t[0] = p),
        (t[1] = h))
      : (h = t[1]),
    t[2] !== f
      ? ((m = (0, r.jsx)(l.Label, {
          htmlFor: f,
          className: "gap-1 font-normal",
          children: "Enable STAR Method",
        })),
        (t[2] = f),
        (t[3] = m))
      : (m = t[3]),
    t[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = (0, r.jsxs)(u.Tooltip, {
          children: [
            (0, r.jsx)(u.TooltipTrigger, {
              render: (0, r.jsx)(i.Info, {
                className: "text-muted-foreground h-3 w-3",
              }),
            }),
            (0, r.jsx)(u.TooltipContent, {
              className: "max-w-xs text-center",
              children:
                "Structure behavioral answers with the STAR method: Situation, Task, Action, Result. Other questions are unaffected.",
            }),
          ],
        })),
        (t[4] = g))
      : (g = t[4]),
    t[5] !== m
      ? ((y = (0, r.jsxs)("span", {
          className: "flex items-center gap-1.5",
          children: [m, g],
        })),
        (t[5] = m),
        (t[6] = y))
      : (y = t[6]),
    t[7] !== d
      ? ((v = (e) => d(!0 === e)), (t[7] = d), (t[8] = v))
      : (v = t[8]),
    t[9] !== n || t[10] !== f || t[11] !== v
      ? ((b = (0, r.jsx)(c.Switch, {
          id: f,
          checked: n,
          onCheckedChange: v,
        })),
        (t[9] = n),
        (t[10] = f),
        (t[11] = v),
        (t[12] = b))
      : (b = t[12]),
    t[13] !== h || t[14] !== y || t[15] !== b
      ? ((S = (0, r.jsxs)("div", { className: h, children: [y, b] })),
        (t[13] = h),
        (t[14] = y),
        (t[15] = b),
        (t[16] = S))
      : (S = t[16]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(47856 /* app/components/label */),
  c = n(88364 /* app/components/switch */),
  u = n(58055 /* app/components/tooltip */);

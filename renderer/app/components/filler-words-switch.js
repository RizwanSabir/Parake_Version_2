// app/components/filler-words-switch.js — webpack module 7157
// params: (e, t, n) = (module, exports, require)
"use strict";
t.FillerWordsSwitch = function (e) {
  const t = (0, o.c)(22),
    { checked: n, onCheckedChange: d, disabled: p, className: f } = e,
    h = (0, a.useId)(),
    m = p && "opacity-50";
  let g, y, v;
  t[0] !== f || t[1] !== m
    ? ((g = (0, s.cn)("flex items-center gap-1.5", m, f)),
      (t[0] = f),
      (t[1] = m),
      (t[2] = g))
    : (g = t[2]),
    t[3] !== h
      ? ((y = (0, r.jsx)(l.Label, {
          htmlFor: h,
          className: "gap-1 font-normal",
          children: "Use filler words",
        })),
        (t[3] = h),
        (t[4] = y))
      : (y = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = (0, r.jsx)(u.TooltipTrigger, {
          render: (0, r.jsx)(i.Info, {
            className: "text-muted-foreground h-3 w-3",
          }),
        })),
        (t[5] = v))
      : (v = t[5]);
  const b = p
    ? "Writes the script the way people actually speak, with the small pauses and connectives real speech carries. Only for the Full script format."
    : "Writes the script the way people actually speak, with the small pauses and connectives real speech carries.";
  let S, _, x, w, E;
  return (
    t[6] !== b
      ? ((S = (0, r.jsxs)(u.Tooltip, {
          children: [
            v,
            (0, r.jsx)(u.TooltipContent, {
              className: "max-w-xs text-center",
              children: b,
            }),
          ],
        })),
        (t[6] = b),
        (t[7] = S))
      : (S = t[7]),
    t[8] !== y || t[9] !== S
      ? ((_ = (0, r.jsxs)("span", {
          className: "flex items-center gap-1.5",
          children: [y, S],
        })),
        (t[8] = y),
        (t[9] = S),
        (t[10] = _))
      : (_ = t[10]),
    t[11] !== d
      ? ((x = (e) => d(!0 === e)), (t[11] = d), (t[12] = x))
      : (x = t[12]),
    t[13] !== n || t[14] !== p || t[15] !== h || t[16] !== x
      ? ((w = (0, r.jsx)(c.Switch, {
          id: h,
          checked: n,
          disabled: p,
          onCheckedChange: x,
        })),
        (t[13] = n),
        (t[14] = p),
        (t[15] = h),
        (t[16] = x),
        (t[17] = w))
      : (w = t[17]),
    t[18] !== g || t[19] !== _ || t[20] !== w
      ? ((E = (0, r.jsxs)("div", { className: g, children: [_, w] })),
        (t[18] = g),
        (t[19] = _),
        (t[20] = w),
        (t[21] = E))
      : (E = t[21]),
    E
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

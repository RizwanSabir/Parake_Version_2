// app/components/session-timer-face.js — webpack module 85090
// params: (e, t, n) = (module, exports, require)
"use strict";
t.SessionTimerFace = function (e) {
  const t = (0, o.c)(22),
    { clock: n, isFreeSession: s, isExtendingSession: l, large: c } = e,
    u = void 0 !== c && c ? "size-4" : "size-3.5";
  let d, p;
  t[0] !== u
    ? ((d = (0, a.cn)("shrink-0", u)), (t[0] = u), (t[1] = d))
    : (d = t[1]),
    t[2] !== d
      ? ((p = (0, r.jsx)(i.Clock, { className: d })), (t[2] = d), (t[3] = p))
      : (p = t[3]);
  const f = `${n.face.length}ch`;
  let h;
  t[4] !== f ? ((h = { minWidth: f }), (t[4] = f), (t[5] = h)) : (h = t[5]);
  const m = l ? "invisible" : void 0;
  let g, y, v, b, S;
  return (
    t[6] !== n.face || t[7] !== m
      ? ((g = (0, r.jsx)("span", { className: m, children: n.face })),
        (t[6] = n.face),
        (t[7] = m),
        (t[8] = g))
      : (g = t[8]),
    t[9] !== l
      ? ((y = l
          ? (0, r.jsx)(i.Loader2, {
              className: "absolute inset-0 m-auto size-4 animate-spin",
              "aria-label": "Extending",
            })
          : null),
        (t[9] = l),
        (t[10] = y))
      : (y = t[10]),
    t[11] !== h || t[12] !== g || t[13] !== y
      ? ((v = (0, r.jsxs)("span", {
          className: "relative inline-block text-center tabular-nums",
          style: h,
          children: [g, y],
        })),
        (t[11] = h),
        (t[12] = g),
        (t[13] = y),
        (t[14] = v))
      : (v = t[14]),
    t[15] !== n.direction || t[16] !== s
      ? ((b =
          "down" === n.direction && s
            ? (0, r.jsx)("span", {
                className: "text-muted-foreground text-sm",
                children: "(Free)",
              })
            : null),
        (t[15] = n.direction),
        (t[16] = s),
        (t[17] = b))
      : (b = t[17]),
    t[18] !== v || t[19] !== b || t[20] !== p
      ? ((S = (0, r.jsxs)(r.Fragment, { children: [p, v, b] })),
        (t[18] = v),
        (t[19] = b),
        (t[20] = p),
        (t[21] = S))
      : (S = t[21]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */);

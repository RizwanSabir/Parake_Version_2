// app/components/preview-card.js — webpack module 15115
// params: (e, t, n) = (module, exports, require)
(t.PreviewCard = function (e) {
  const t = (0, o.c)(2);
  let n;
  return (
    t[0] !== e
      ? ((n = (0, r.jsx)(i.PreviewCard.Root, {
          "data-slot": "preview-card",
          ...e,
        })),
        (t[0] = e),
        (t[1] = n))
      : (n = t[1]),
    n
  );
}),
  (t.PreviewCardTrigger = function (e) {
    const t = (0, o.c)(8);
    let n, a, s;
    t[0] !== e
      ? (({ delay: a, closeDelay: s, ...n } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = a),
        (t[3] = s))
      : ((n = t[1]), (a = t[2]), (s = t[3]));
    const l = void 0 === a ? 100 : a,
      c = void 0 === s ? 100 : s;
    let u;
    return (
      t[4] !== c || t[5] !== l || t[6] !== n
        ? ((u = (0, r.jsx)(i.PreviewCard.Trigger, {
            "data-slot": "preview-card-trigger",
            delay: l,
            closeDelay: c,
            ...n,
          })),
          (t[4] = c),
          (t[5] = l),
          (t[6] = n),
          (t[7] = u))
        : (u = t[7]),
      u
    );
  }),
  (t.PreviewCardContent = function (e) {
    const t = (0, o.c)(16);
    let n, s, l, c, u;
    t[0] !== e
      ? (({ className: n, side: l, sideOffset: c, align: u, ...s } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = s),
        (t[3] = l),
        (t[4] = c),
        (t[5] = u))
      : ((n = t[1]), (s = t[2]), (l = t[3]), (c = t[4]), (u = t[5]));
    const d = void 0 === l ? "top" : l,
      p = void 0 === c ? 6 : c,
      f = void 0 === u ? "center" : u;
    let h, m, g;
    return (
      t[6] !== n
        ? ((h = (0, a.cn)(
            "bg-popover text-popover-foreground rounded-lg border p-1 shadow-(--shadow-popup) transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0",
            n,
          )),
          (t[6] = n),
          (t[7] = h))
        : (h = t[7]),
      t[8] !== s || t[9] !== h
        ? ((m = (0, r.jsx)(i.PreviewCard.Popup, {
            "data-slot": "preview-card-content",
            className: h,
            ...s,
          })),
          (t[8] = s),
          (t[9] = h),
          (t[10] = m))
        : (m = t[10]),
      t[11] !== f || t[12] !== d || t[13] !== p || t[14] !== m
        ? ((g = (0, r.jsx)(i.PreviewCard.Portal, {
            children: (0, r.jsx)(i.PreviewCard.Positioner, {
              align: f,
              side: d,
              sideOffset: p,
              collisionPadding: 8,
              className: "isolate z-50",
              children: m,
            }),
          })),
          (t[11] = f),
          (t[12] = d),
          (t[13] = p),
          (t[14] = m),
          (t[15] = g))
        : (g = t[15]),
      g
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(95969 /* vendor/module-95969 */),
  a = n(29113 /* vendor/module-29113 */);

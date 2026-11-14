// app/components/attachment-row.js — webpack module 37725
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AttachmentRow = function (e) {
  const t = (0, o.c)(23),
    {
      label: n,
      description: c,
      fileCount: u,
      onPress: d,
      disabled: p,
      className: f,
    } = e,
    h = void 0 === u ? 0 : u,
    m = void 0 !== p && p,
    g = Math.min(h, 3),
    y = 0 === g,
    v = y && "border-dashed";
  let b, S, _, x, w, E, T, k;
  return (
    t[0] !== f || t[1] !== v
      ? ((b = (0, a.cn)(
          "border-border bg-background flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg border px-3 py-2.5 text-left",
          v,
          "hover:bg-accent transition-[background-color,border-color,scale] duration-(--duration-base) active:scale-[0.99] motion-reduce:transition-none",
          "focus-ring outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          "motion-reduce:transition-none",
          f,
        )),
        (t[0] = f),
        (t[1] = v),
        (t[2] = b))
      : (b = t[2]),
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = { transitionTimingFunction: s.EASE_OUT_CSS }), (t[3] = S))
      : (S = t[3]),
    t[4] !== g || t[5] !== y
      ? ((_ = y
          ? (0, r.jsx)("span", {
              className:
                "text-muted-foreground flex size-9 shrink-0 items-center justify-center",
              children: (0, r.jsx)(i.Plus, { className: "size-4" }),
            })
          : (0, r.jsx)("span", {
              className: "flex shrink-0 items-center",
              children: Array.from({ length: g }, (e, t) =>
                (0, r.jsx)(
                  "span",
                  {
                    className: (0, a.cn)(
                      "bg-accent-secondary border-border text-muted-foreground flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border",
                      t < g - 1 && "-mr-3.5",
                    ),
                    children: (0, r.jsx)(i.FileText, {
                      className: "size-4.5",
                    }),
                  },
                  t,
                ),
              ),
            })),
        (t[4] = g),
        (t[5] = y),
        (t[6] = _))
      : (_ = t[6]),
    t[7] !== n
      ? ((x = (0, r.jsx)(l.Typography, {
          variant: "meta",
          truncate: !0,
          className: "font-medium",
          children: n,
        })),
        (t[7] = n),
        (t[8] = x))
      : (x = t[8]),
    t[9] !== c
      ? ((w = (0, r.jsx)(l.Typography, {
          variant: "label",
          className: "text-muted-foreground truncate leading-4",
          children: c,
        })),
        (t[9] = c),
        (t[10] = w))
      : (w = t[10]),
    t[11] !== x || t[12] !== w
      ? ((E = (0, r.jsxs)("span", {
          className: "flex min-w-0 flex-1 flex-col gap-1 overflow-hidden",
          children: [x, w],
        })),
        (t[11] = x),
        (t[12] = w),
        (t[13] = E))
      : (E = t[13]),
    t[14] !== y
      ? ((T =
          !y &&
          (0, r.jsx)(i.ChevronRight, {
            className: "text-muted-foreground size-5 shrink-0",
          })),
        (t[14] = y),
        (t[15] = T))
      : (T = t[15]),
    t[16] !== m ||
    t[17] !== d ||
    t[18] !== T ||
    t[19] !== b ||
    t[20] !== _ ||
    t[21] !== E
      ? ((k = (0, r.jsxs)("button", {
          type: "button",
          onClick: d,
          disabled: m,
          className: b,
          style: S,
          children: [_, E, T],
        })),
        (t[16] = m),
        (t[17] = d),
        (t[18] = T),
        (t[19] = b),
        (t[20] = _),
        (t[21] = E),
        (t[22] = k))
      : (k = t[22]),
    k
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(146 /* vendor/module-146 */),
  l = n(34483 /* app/components/typography-variants */);

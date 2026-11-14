// app/components/empty-state.js — webpack module 34603
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EmptyState = function (e) {
  const t = (0, o.c)(19),
    {
      icon: n,
      pixelIcon: c,
      illustration: u,
      title: d,
      description: p,
      action: f,
      actionInBottomBar: h,
    } = e,
    m = void 0 !== h && h;
  let g, y, v, b, S, _, x;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = (0, r.jsx)(a.CardSpotlight, { feather: !0 })), (t[0] = g))
      : (g = t[0]),
    t[1] !== n || t[2] !== u || t[3] !== c
      ? ((y = u
          ? (0, r.jsx)("div", {
              className: "phone:mb-5 mb-2",
              children: u,
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                n &&
                  (0, r.jsx)(s.EmptyMedia, {
                    variant: "glyph",
                    className: (0, i.cn)(
                      "mb-1",
                      c && "[display:var(--empty-glyph-line)]!",
                    ),
                    children: n,
                  }),
                c &&
                  (0, r.jsx)(s.EmptyMedia, {
                    variant: "pixel",
                    className: "mb-1",
                    children: c,
                  }),
              ],
            })),
        (t[1] = n),
        (t[2] = u),
        (t[3] = c),
        (t[4] = y))
      : (y = t[4]),
    t[5] !== d
      ? ((v =
          d &&
          (0, r.jsx)(l.Typography, {
            variant: "title-sm",
            className: "phone:text-lg phone:leading-7",
            render: (0, r.jsx)("h3", { children: d }),
          })),
        (t[5] = d),
        (t[6] = v))
      : (v = t[6]),
    t[7] !== p
      ? ((b = (0, r.jsx)(l.Typography, {
          variant: "body",
          render: (0, r.jsx)("div", {
            className:
              "text-muted-foreground flex max-w-[392px] flex-col gap-1",
            children: p,
          }),
        })),
        (t[7] = p),
        (t[8] = b))
      : (b = t[8]),
    t[9] !== y || t[10] !== v || t[11] !== b
      ? ((S = (0, r.jsxs)(s.EmptyHeader, {
          "data-spotlight-quiet": !0,
          className: "phone:gap-0 max-w-none gap-1",
          children: [y, v, b],
        })),
        (t[9] = y),
        (t[10] = v),
        (t[11] = b),
        (t[12] = S))
      : (S = t[12]),
    t[13] !== f || t[14] !== m
      ? ((_ =
          f &&
          (0, r.jsx)(s.EmptyContent, {
            "data-spotlight-controls": !0,
            className: (0, i.cn)("text-wrap", m && "phone:hidden"),
            children: f,
          })),
        (t[13] = f),
        (t[14] = m),
        (t[15] = _))
      : (_ = t[15]),
    t[16] !== S || t[17] !== _
      ? ((x = (0, r.jsxs)(s.Empty, {
          className:
            "phone:px-6 relative isolate h-full flex-initial gap-6 overflow-hidden p-0 text-wrap",
          children: [g, S, _],
        })),
        (t[16] = S),
        (t[17] = _),
        (t[18] = x))
      : (x = t[18]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(38255 /* app/components/card-spotlight */),
  s = n(8905 /* app/components/empty */),
  l = n(34483 /* app/components/typography-variants */);

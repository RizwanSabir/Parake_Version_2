// app/components/spinner.js — webpack module 15201
// params: (e, t, n) = (module, exports, require)
"use strict";
t.Spinner = function (e) {
  const t = (0, o.c)(14);
  let n, l, c, u, d, p, f, h;
  return (
    t[0] !== e
      ? (({ className: n, label: l, ...c } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = l),
        (t[3] = c))
      : ((n = t[1]), (l = t[2]), (c = t[3])),
    t[4] !== l
      ? ((u =
          void 0 === l
            ? { "aria-hidden": !0 }
            : { role: "status", "aria-label": l }),
        (t[4] = l),
        (t[5] = u))
      : (u = t[5]),
    t[6] !== n
      ? ((d = (0, i.cn)(
          "[container-type:inline-size] relative inline-flex aspect-square size-4 shrink-0 align-middle",
          n,
        )),
        (t[6] = n),
        (t[7] = d))
      : (d = t[7]),
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = (0, r.jsx)("span", {
          "aria-hidden": "true",
          className:
            "absolute inset-0 [display:var(--spinner-ring)] animate-spin rounded-full border-[length:1px] border-transparent border-y-current motion-reduce:animate-none @min-[20px]:border-[length:1.5px] @min-[32px]:border-[length:2px]",
        })),
        (t[8] = p))
      : (p = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = (0, r.jsx)("svg", {
          "aria-hidden": "true",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          className:
            "absolute inset-0 [display:var(--spinner-diamond)]! size-full",
          children: a.map(s),
        })),
        (t[9] = f))
      : (f = t[9]),
    t[10] !== c || t[11] !== u || t[12] !== d
      ? ((h = (0, r.jsxs)("span", {
          "data-slot": "spinner",
          ...u,
          className: d,
          ...c,
          children: [p, f],
        })),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d),
        (t[13] = h))
      : (h = t[13]),
    h
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = [
    [8, 0],
    [12, 4],
    [16, 8],
    [12, 12],
    [8, 16],
    [4, 12],
    [0, 8],
    [4, 4],
  ];
function s(e, t) {
  const [n, o] = e;
  return (0, r.jsx)(
    "rect",
    {
      x: n,
      y: o,
      width: "4",
      height: "4",
      className: "animate-spinner-pixel motion-reduce:animate-none",
      style: { animationDelay: 0.1 * t + "s" },
    },
    `${n}-${o}`,
  );
}

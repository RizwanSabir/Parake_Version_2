// app/components/live-session-button.js — webpack module 11575
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LiveSessionButton = function (e) {
  const t = (0, o.c)(30);
  let n, s, l, c, u, d, p;
  t[0] !== e
    ? (({
        children: n,
        shortcut: u,
        shortcutPosition: d,
        transparent: p,
        className: l,
        childrenClassName: s,
        ...c
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u),
      (t[6] = d),
      (t[7] = p))
    : ((n = t[1]),
      (s = t[2]),
      (l = t[3]),
      (c = t[4]),
      (u = t[5]),
      (d = t[6]),
      (p = t[7]));
  const f = void 0 === d ? "right" : d,
    h = void 0 !== p && p ? "glass-quiet" : "glass";
  let m, g, y, v, b, S;
  return (
    t[8] !== l
      ? ((m = (0, i.cn)("p-1", l)), (t[8] = l), (t[9] = m))
      : (m = t[9]),
    t[10] !== u || t[11] !== f
      ? ((g =
          u &&
          "left" === f &&
          (0, r.jsx)("span", {
            className:
              "flex h-full items-center justify-center rounded-(--radius-tag) bg-black/8 px-2 dark:bg-white/10",
            children: u,
          })),
        (t[10] = u),
        (t[11] = f),
        (t[12] = g))
      : (g = t[12]),
    t[13] !== n || t[14] !== s || t[15] !== u || t[16] !== f
      ? ((y =
          void 0 !== n &&
          (0, r.jsx)("span", {
            className: (0, i.cn)(
              u ? ("left" === f ? "mr-1.5" : "ml-1.5") : "mx-[3px]",
              s,
            ),
            children: n,
          })),
        (t[13] = n),
        (t[14] = s),
        (t[15] = u),
        (t[16] = f),
        (t[17] = y))
      : (y = t[17]),
    t[18] !== u || t[19] !== f
      ? ((v =
          u &&
          "right" === f &&
          (0, r.jsx)("span", {
            className:
              "flex h-full items-center justify-center rounded-lg bg-black/8 px-2 dark:bg-white/10",
            children: u,
          })),
        (t[18] = u),
        (t[19] = f),
        (t[20] = v))
      : (v = t[20]),
    t[21] !== g || t[22] !== y || t[23] !== v
      ? ((b = (0, r.jsxs)("span", {
          className: "flex h-full flex-row items-center gap-1.5",
          children: [g, y, v],
        })),
        (t[21] = g),
        (t[22] = y),
        (t[23] = v),
        (t[24] = b))
      : (b = t[24]),
    t[25] !== c || t[26] !== h || t[27] !== m || t[28] !== b
      ? ((S = (0, r.jsx)(a.Button, {
          variant: h,
          size: "sm",
          className: m,
          ...c,
          children: b,
        })),
        (t[25] = c),
        (t[26] = h),
        (t[27] = m),
        (t[28] = b),
        (t[29] = S))
      : (S = t[29]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(99683 /* vendor/module-99683 */);

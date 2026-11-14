// app/components/transparent-screen.js — webpack module 87807
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TransparentScreen = function (e) {
  const t = (0, o.c)(15);
  let n, s, l, c;
  t[0] !== e
    ? (({ className: n, transparent: c, style: l, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l),
      (t[4] = c))
    : ((n = t[1]), (s = t[2]), (l = t[3]), (c = t[4]));
  const u = void 0 === c || c,
    { overlayOpacity: d } = (0, a.useOverlayOpacity)(),
    p = u ? "true" : void 0;
  let f;
  t[5] !== n
    ? ((f = (0, i.cn)(
        "rounded-(--radius-window) border border-[0.5px] border-black/12 bg-white/(--overlay-opacity) p-1 text-neutral-900 dark:border-white/12 dark:bg-neutral-950/(--overlay-opacity) dark:text-white",
        n,
      )),
      (t[5] = n),
      (t[6] = f))
    : (f = t[6]);
  const h = d - 10 + "%";
  let m;
  t[7] !== l || t[8] !== h
    ? ((m = { "--overlay-opacity": h, ...l }),
      (t[7] = l),
      (t[8] = h),
      (t[9] = m))
    : (m = t[9]);
  const g = m;
  let y;
  return (
    t[10] !== s || t[11] !== p || t[12] !== f || t[13] !== g
      ? ((y = (0, r.jsx)("div", {
          "data-transparent": p,
          className: f,
          style: g,
          ...s,
        })),
        (t[10] = s),
        (t[11] = p),
        (t[12] = f),
        (t[13] = g),
        (t[14] = y))
      : (y = t[14]),
    y
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(30551 /* app/hooks/use-overlay-opacity */);

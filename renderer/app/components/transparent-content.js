// app/components/transparent-content.js — webpack module 26468
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TransparentContent = function (e) {
  const t = (0, o.c)(11);
  let n, s;
  t[0] !== e
    ? (({ className: n, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = s))
    : ((n = t[1]), (s = t[2]));
  const { overlayOpacity: l } = (0, a.useOverlayOpacity)();
  let c;
  t[3] !== n
    ? ((c = (0, i.cn)(
        "rounded-(--radius-window-card) border-black/12 bg-neutral-100/(--overlay-opacity) text-neutral-900 dark:border-white/12 dark:bg-neutral-900/(--overlay-opacity) dark:text-white",
        n,
      )),
      (t[3] = n),
      (t[4] = c))
    : (c = t[4]);
  const u = `${l}%`;
  let d;
  t[5] !== u
    ? ((d = { "--overlay-opacity": u }), (t[5] = u), (t[6] = d))
    : (d = t[6]);
  const p = d;
  let f;
  return (
    t[7] !== s || t[8] !== c || t[9] !== p
      ? ((f = (0, r.jsx)("div", {
          "data-transparent": "true",
          className: c,
          style: p,
          ...s,
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = p),
        (t[10] = f))
      : (f = t[10]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(30551 /* app/hooks/use-overlay-opacity */);

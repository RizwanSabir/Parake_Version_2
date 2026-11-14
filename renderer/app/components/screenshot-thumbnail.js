// app/components/screenshot-thumbnail.js — webpack module 88577
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ScreenshotThumbnail = function (e) {
  const t = (0, o.c)(10),
    { url: n, index: s, onRemove: l } = e,
    c = `Screenshot ${s + 1}`;
  let u;
  t[0] !== c || t[1] !== n
    ? ((u = (0, r.jsx)("img", {
        src: n,
        alt: c,
        className: "block h-full w-auto object-cover",
      })),
      (t[0] = c),
      (t[1] = n),
      (t[2] = u))
    : (u = t[2]);
  const d = `Remove screenshot ${s + 1}`;
  let p, f, h;
  return (
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = (0, r.jsx)(i.X, { className: "size-3" })), (t[3] = p))
      : (p = t[3]),
    t[4] !== l || t[5] !== d
      ? ((f = (0, r.jsx)("button", {
          type: "button",
          onMouseDown: a,
          onClick: l,
          "aria-label": d,
          className:
            "absolute top-0.5 right-0.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-(--radius-disc) bg-neutral-900/80 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-900 focus-visible:opacity-100",
          children: p,
        })),
        (t[4] = l),
        (t[5] = d),
        (t[6] = f))
      : (f = t[6]),
    t[7] !== u || t[8] !== f
      ? ((h = (0, r.jsxs)("div", {
          className:
            "group relative h-14 shrink-0 overflow-hidden rounded-lg border border-[0.5px] border-black/6 bg-black/5 dark:border-white/6 dark:bg-black/30",
          children: [u, f],
        })),
        (t[7] = u),
        (t[8] = f),
        (t[9] = h))
      : (h = t[9]),
    h
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */);
function a(e) {
  return e.preventDefault();
}

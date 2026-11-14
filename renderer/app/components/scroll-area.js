// app/components/scroll-area.js — webpack module 11801
// params: (e, t, n) = (module, exports, require)
t.ScrollArea = function (e) {
  const t = (0, o.c)(28);
  let n, s, l, d, p, f, h, m;
  t[0] !== e
    ? (({
        className: s,
        edge: d,
        contentClassName: l,
        viewportClassName: h,
        viewportRef: m,
        focusRing: f,
        children: n,
        ...p
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l),
      (t[4] = d),
      (t[5] = p),
      (t[6] = f),
      (t[7] = h),
      (t[8] = m))
    : ((n = t[1]),
      (s = t[2]),
      (l = t[3]),
      (d = t[4]),
      (p = t[5]),
      (f = t[6]),
      (h = t[7]),
      (m = t[8]));
  const g = void 0 === f || f;
  let y;
  t[9] !== s || t[10] !== d
    ? ((y = (0, a.cn)("relative", [d ?? []].flat().map(c), s)),
      (t[9] = s),
      (t[10] = d),
      (t[11] = y))
    : (y = t[11]);
  const v = g && "focus-ring [--focus-ring-offset:-2px]";
  let b, S, _, x, w, E;
  return (
    t[12] !== v || t[13] !== h
      ? ((b = (0, a.cn)(
          "size-full [scrollbar-width:none] rounded-[inherit] outline-none [&::-webkit-scrollbar]:hidden",
          v,
          h,
        )),
        (t[12] = v),
        (t[13] = h),
        (t[14] = b))
      : (b = t[14]),
    t[15] !== n || t[16] !== l
      ? ((S = (0, r.jsx)(i.ScrollArea.Content, {
          "data-slot": "scroll-area-content",
          className: l,
          children: n,
        })),
        (t[15] = n),
        (t[16] = l),
        (t[17] = S))
      : (S = t[17]),
    t[18] !== b || t[19] !== S || t[20] !== m
      ? ((_ = (0, r.jsx)(i.ScrollArea.Viewport, {
          ref: m,
          "data-slot": "scroll-area-viewport",
          className: b,
          children: S,
        })),
        (t[18] = b),
        (t[19] = S),
        (t[20] = m),
        (t[21] = _))
      : (_ = t[21]),
    t[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((x = (0, r.jsx)(u, {})),
        (w = (0, r.jsx)(i.ScrollArea.Corner, {})),
        (t[22] = x),
        (t[23] = w))
      : ((x = t[22]), (w = t[23])),
    t[24] !== p || t[25] !== y || t[26] !== _
      ? ((E = (0, r.jsxs)(i.ScrollArea.Root, {
          "data-slot": "scroll-area",
          className: y,
          ...p,
          children: [_, x, w],
        })),
        (t[24] = p),
        (t[25] = y),
        (t[26] = _),
        (t[27] = E))
      : (E = t[27]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(22169 /* vendor/module-22169 */),
  a = n(29113 /* vendor/module-29113 */),
  s =
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:opacity-0 before:shadow-xs before:transition-opacity before:duration-200 data-overflow-y-start:before:opacity-100 motion-reduce:before:transition-none",
  l = {
    shadow: s,
    rule: `before:bg-border ${s}`,
    feather:
      "after:from-background after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-10 after:bg-linear-to-t after:to-transparent after:opacity-0 after:transition-opacity after:duration-200 data-overflow-y-end:after:opacity-100",
  };
function c(e) {
  return l[e];
}
function u(e) {
  const t = (0, o.c)(13);
  let n, s, l;
  t[0] !== e
    ? (({ className: n, orientation: l, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l))
    : ((n = t[1]), (s = t[2]), (l = t[3]));
  const c = void 0 === l ? "vertical" : l,
    u = "vertical" === c && "h-full w-1",
    d = "horizontal" === c && "h-1 w-full flex-col";
  let p, f, h;
  return (
    t[4] !== n || t[5] !== u || t[6] !== d
      ? ((p = (0, a.cn)(
          "bg-accent flex touch-none rounded-(--radius-thumb) select-none",
          u,
          d,
          n,
        )),
        (t[4] = n),
        (t[5] = u),
        (t[6] = d),
        (t[7] = p))
      : (p = t[7]),
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = (0, r.jsx)(i.ScrollArea.Thumb, {
          "data-slot": "scroll-area-thumb",
          className:
            "bg-foreground/30 relative flex-1 rounded-(--radius-thumb)",
        })),
        (t[8] = f))
      : (f = t[8]),
    t[9] !== c || t[10] !== s || t[11] !== p
      ? ((h = (0, r.jsx)(i.ScrollArea.Scrollbar, {
          "data-slot": "scroll-area-scrollbar",
          orientation: c,
          className: p,
          ...s,
          children: f,
        })),
        (t[9] = c),
        (t[10] = s),
        (t[11] = p),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}

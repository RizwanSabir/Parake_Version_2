// vendor/module-36795.js — webpack module 36795
// params: (e, t, n) = (module, exports, require)
t.AnimatedHeight = function (e) {
  const t = (0, o.c)(12),
    { className: n, children: s } = e,
    l = (0, i.useRef)(null),
    [c, u] = (0, i.useState)(void 0);
  let d, p, f, h, m, g;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = () => {
          const e = l.current;
          if (!e) return;
          const t = new ResizeObserver((e) => {
            const [t] = e;
            t && u(Math.ceil(t.borderBoxSize[0]?.blockSize ?? 0));
          });
          return t.observe(e), () => t.disconnect();
        }),
        (p = []),
        (t[0] = d),
        (t[1] = p))
      : ((d = t[0]), (p = t[1])),
    (0, i.useEffect)(d, p),
    t[2] !== n
      ? ((f = (0, a.cn)(
          "overflow-hidden transition-[height] duration-(--duration-slow) ease-(--ease-out-strong) motion-reduce:transition-none",
          n,
        )),
        (t[2] = n),
        (t[3] = f))
      : (f = t[3]),
    t[4] !== c ? ((h = { height: c }), (t[4] = c), (t[5] = h)) : (h = t[5]),
    t[6] !== s
      ? ((m = (0, r.jsx)("div", { ref: l, children: s })),
        (t[6] = s),
        (t[7] = m))
      : (m = t[7]),
    t[8] !== f || t[9] !== h || t[10] !== m
      ? ((g = (0, r.jsx)("div", {
          className: f,
          style: h,
          children: m,
        })),
        (t[8] = f),
        (t[9] = h),
        (t[10] = m),
        (t[11] = g))
      : (g = t[11]),
    g
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */);

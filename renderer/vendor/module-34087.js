// vendor/module-34087.js — webpack module 34087
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getSnapPointSwipeMovement = function (e, t) {
    const n = e + t;
    return n >= 0 ? t : -Math.sqrt(-n) - e;
  }),
  (t.useDrawerSnapPoints = function () {
    const { store: e } = (0, c.useDialogRootContext)(),
      {
        snapPoints: t,
        activeSnapPoint: n,
        setActiveSnapPoint: r,
        popupHeight: p,
      } = (0, u.useDrawerRootContext)(),
      f = e.useState("viewportElement"),
      [h, m] = o.useState(0),
      [g, y] = o.useState(16),
      v = (0, a.useStableCallback)(() => {
        const e = (0, s.ownerDocument)(f).documentElement;
        f && m(f.offsetHeight), f || m(e.clientHeight);
        const t = parseFloat(getComputedStyle(e).fontSize);
        Number.isFinite(t) && y(t);
      });
    (0, i.useIsoLayoutEffect)(() => {
      if ((v(), !f || "function" != typeof ResizeObserver)) return;
      const e = new ResizeObserver(v);
      return (
        e.observe(f),
        () => {
          e.disconnect();
        }
      );
    }, [v, f]);
    const b = o.useMemo(() => {
        if (!t || 0 === t.length || h <= 0 || p <= 0) return [];
        const e = Math.min(p, h);
        if (!Number.isFinite(e) || e <= 0) return [];
        const n = t
          .map((t) => {
            const n = d(t, h, g);
            if (null === n || !Number.isFinite(n)) return null;
            const r = (0, l.clamp)(n, 0, e);
            return {
              value: t,
              height: r,
              offset: Math.max(0, p - r),
            };
          })
          .filter((e) => Boolean(e));
        if (n.length <= 1) return n;
        const r = [],
          o = [];
        for (let e = n.length - 1; e >= 0; e -= 1) {
          const t = n[e];
          o.some((e) => Math.abs(e - t.height) <= 1) ||
            (o.push(t.height), r.push(t));
        }
        return r.reverse(), r;
      }, [p, g, t, h]),
      S = o.useMemo(() => {
        if (void 0 === n) return b[0];
        if (null === n) return;
        const e = b.find((e) => Object.is(e.value, n));
        if (e) return e;
        const t = Math.min(p, h),
          r = d(n, h, g);
        return null !== r && Number.isFinite(r)
          ? ((function (e, t) {
              let n = null,
                r = 1 / 0;
              for (const o of t) {
                const t = Math.abs(o.height - e);
                t < r && ((r = t), (n = o));
              }
              return n;
            })((0, l.clamp)(r, 0, t), b) ?? void 0)
          : void 0;
      }, [n, p, b, g, h]);
    return {
      snapPoints: t,
      activeSnapPoint: n,
      setActiveSnapPoint: r,
      popupHeight: p,
      viewportHeight: h,
      resolvedSnapPoints: b,
      activeSnapPointOffset: S?.offset ?? null,
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(854 /* vendor/module-854 */),
  l = n(41153 /* vendor/module-41153 */),
  c = n(90498 /* vendor/module-90498 */),
  u = n(14714 /* vendor/module-14714 */);
function d(e, t, n) {
  if (!Number.isFinite(t) || t <= 0) return null;
  if ("number" == typeof e)
    return Number.isFinite(e) ? (e <= 1 ? (0, l.clamp)(e, 0, 1) * t : e) : null;
  const r = e.trim();
  if (r.endsWith("px")) {
    const e = Number.parseFloat(r);
    return Number.isFinite(e) ? e : null;
  }
  if (r.endsWith("rem")) {
    const e = Number.parseFloat(r);
    return Number.isFinite(e) ? e * n : null;
  }
  return null;
}

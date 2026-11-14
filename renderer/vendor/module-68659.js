// vendor/module-68659.js — webpack module 68659
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.resolveThumbCollision = function ({
    behavior: e,
    values: t,
    currentValues: n,
    initialValues: i,
    pressedIndex: a,
    nextValue: s,
    min: l,
    max: c,
    step: u,
    minStepsBetweenValues: d,
  }) {
    const p = n ?? t,
      f = i ?? t;
    if (!(p.length > 1)) return { value: s, thumbIndex: 0, didSwap: !1 };
    const h = u * d;
    switch (e) {
      case "swap": {
        const e = p[a],
          t = 1e-7,
          n = p.slice(),
          i = n[a - 1],
          m = n[a + 1],
          g = null != i ? i + h : l,
          y = null != m ? m - h : c,
          v = (0, r.clamp)(s, g, y),
          b = Number(v.toFixed(12));
        n[a] = b;
        const S = s > e && null != m && s >= m - t;
        if (!(S || (s < e && null != i && s <= i + t)))
          return { value: n, thumbIndex: a, didSwap: !1 };
        const _ = S ? a + 1 : a - 1,
          x = n.map((e, t) => {
            if (t === a) return b;
            const n = f[t];
            return null != n ? n : p[t];
          });
        let w = s;
        w = S ? Math.max(s, n[_]) : Math.min(s, n[_]);
        const E = (0, o.getPushedThumbValues)({
            values: n,
            index: _,
            nextValue: w,
            min: l,
            max: c,
            step: u,
            minStepsBetweenValues: d,
            initialValues: x,
          }),
          T = S ? _ - 1 : _ + 1;
        if (T >= 0 && T < E.length) {
          const e = E[T - 1],
            t = E[T + 1];
          let n = null != e ? e + h : l;
          n = Math.max(n, l + T * h);
          let o = null != t ? t - h : c;
          o = Math.min(o, c - (E.length - 1 - T) * h);
          const i = (0, r.clamp)(b, n, o);
          E[T] = Number(i.toFixed(12));
        }
        return { value: E, thumbIndex: _, didSwap: !0 };
      }
      case "push":
        return {
          value: (0, o.getPushedThumbValues)({
            values: p,
            index: a,
            nextValue: s,
            min: l,
            max: c,
            step: u,
            minStepsBetweenValues: d,
          }),
          thumbIndex: a,
          didSwap: !1,
        };
      default: {
        const e = p.slice(),
          t = e[a - 1],
          n = e[a + 1],
          o = null != t ? t + h : l,
          i = null != n ? n - h : c,
          u = (0, r.clamp)(s, o, i);
        return (
          (e[a] = Number(u.toFixed(12))),
          { value: e, thumbIndex: a, didSwap: !1 }
        );
      }
    }
  });
var r = n(41153 /* vendor/module-41153 */),
  o = n(33886 /* vendor/module-33886 */);

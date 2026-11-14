// vendor/module-38767.js — webpack module 38767
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.baseArrow = t.arrow = void 0);
var r = n(28229 /* vendor/module-28229 */);
const o = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
        x: n,
        y: o,
        placement: i,
        rects: a,
        platform: s,
        elements: l,
        middlewareData: c,
      } = t,
      {
        element: u,
        padding: d = 0,
        offsetParent: p = "real",
      } = (0, r.evaluate)(e, t) || {};
    if (null == u) return {};
    const f = (0, r.getPaddingObject)(d),
      h = { x: n, y: o },
      m = (0, r.getAlignmentAxis)(i),
      g = (0, r.getAxisLength)(m),
      y = await s.getDimensions(u),
      v = "y" === m,
      b = v ? "top" : "left",
      S = v ? "bottom" : "right",
      _ = v ? "clientHeight" : "clientWidth",
      x = a.reference[g] + a.reference[m] - h[m] - a.floating[g],
      w = h[m] - a.reference[m],
      E = "real" === p ? await s.getOffsetParent?.(u) : l.floating;
    let T = l.floating[_] || a.floating[g];
    (T && (await s.isElement?.(E))) || (T = l.floating[_] || a.floating[g]);
    const k = x / 2 - w / 2,
      C = T / 2 - y[g] / 2 - 1,
      I = Math.min(f[b], C),
      A = Math.min(f[S], C),
      O = I,
      R = T - y[g] - A,
      M = T / 2 - y[g] / 2 + k,
      P = (0, r.clamp)(O, M, R),
      N =
        !c.arrow &&
        null != (0, r.getAlignment)(i) &&
        M !== P &&
        a.reference[g] / 2 - (M < O ? I : A) - y[g] / 2 < 0,
      D = N ? (M < O ? M - O : M - R) : 0;
    return {
      [m]: h[m] + D,
      data: {
        [m]: P,
        centerOffset: M - P - D,
        ...(N && { alignmentOffset: D }),
      },
      reset: N,
    };
  },
});
(t.baseArrow = o), (t.arrow = (e, t) => ({ ...o(e), options: [e, t] }));

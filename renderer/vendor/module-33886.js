// vendor/module-33886.js — webpack module 33886
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getPushedThumbValues = function ({
    values: e,
    index: t,
    nextValue: n,
    min: o,
    max: i,
    step: a,
    minStepsBetweenValues: s,
    initialValues: l,
  }) {
    if (0 === e.length) return [];
    const c = e.slice(),
      u = a * s,
      d = c.length - 1,
      p = l ?? e,
      f = o + t * u,
      h = i - (d - t) * u;
    c[t] = (0, r.clamp)(n, f, h);
    for (let e = t + 1; e <= d; e += 1) {
      const t = c[e - 1] + u,
        n = i - (d - e) * u,
        o = p[e] ?? c[e];
      let a = Math.max(c[e], t);
      o < a && (a = Math.max(o, t)), (c[e] = (0, r.clamp)(a, t, n));
    }
    for (let e = t - 1; e >= 0; e -= 1) {
      const t = c[e + 1] - u,
        n = o + e * u,
        i = p[e] ?? c[e];
      let a = Math.min(c[e], t);
      i > a && (a = Math.min(i, t)), (c[e] = (0, r.clamp)(a, n, t));
    }
    for (let e = 0; e <= d; e += 1) c[e] = Number(c[e].toFixed(12));
    return c;
  });
var r = n(41153 /* vendor/module-41153 */);

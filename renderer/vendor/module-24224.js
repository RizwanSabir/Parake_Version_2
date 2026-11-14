// vendor/module-24224.js — webpack module 24224
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.safePolygon = function (e = {}) {
    const { blockPointerEvents: t = !1 } = e,
      n = new o.Timeout(),
      c = ({
        x: e,
        y: t,
        placement: o,
        elements: c,
        onClose: p,
        nodeId: f,
        tree: h,
      }) => {
        const m = o?.split("-")[0];
        let g = !1,
          y = null,
          v = null,
          b = "undefined" != typeof performance ? performance.now() : 0;
        return function (o) {
          n.clear();
          const S = c.domReference,
            _ = c.floating;
          if (!S || !_ || null == m || null == e || null == t) return;
          const { clientX: x, clientY: w } = o,
            E = (0, i.getTarget)(o),
            T = "mouseleave" === o.type,
            k = (0, i.contains)(_, E),
            C = (0, i.contains)(S, E);
          if (k && ((g = !0), !T)) return;
          if (C && ((g = !1), !T)) return void (g = !0);
          if (
            T &&
            (0, r.isElement)(o.relatedTarget) &&
            (0, i.contains)(_, o.relatedTarget)
          )
            return;
          function I() {
            return Boolean(
              h && (0, a.getNodeChildren)(h.nodesRef.current, f).length > 0,
            );
          }
          function A() {
            I() || (n.clear(), p());
          }
          if (I()) return;
          const O = S.getBoundingClientRect(),
            R = _.getBoundingClientRect(),
            M = e > R.right - R.width / 2,
            P = t > R.bottom - R.height / 2,
            N = R.width > O.width,
            D = R.height > O.height,
            j = (N ? O : R).left,
            L = (N ? O : R).right,
            F = (D ? O : R).top,
            U = (D ? O : R).bottom;
          if (
            ("top" === m && t >= O.bottom - 1) ||
            ("bottom" === m && t <= O.top + 1) ||
            ("left" === m && e >= O.right - 1) ||
            ("right" === m && e <= O.left + 1)
          )
            return void A();
          let B = !1;
          switch (m) {
            case "top":
              B = d(x, w, j, O.top + 1, L, R.bottom - 1);
              break;
            case "bottom":
              B = d(x, w, j, R.top + 1, L, O.bottom - 1);
              break;
            case "left":
              B = d(x, w, R.right - 1, U, O.left + 1, F);
              break;
            case "right":
              B = d(x, w, O.right - 1, U, R.left + 1, F);
          }
          if (B) return;
          if (
            g &&
            !(function (e, t, n) {
              return (
                e >= n.x &&
                e <= n.x + n.width &&
                t >= n.y &&
                t <= n.y + n.height
              );
            })(x, w, O)
          )
            return void A();
          if (
            !T &&
            (function (e, t) {
              const n = performance.now(),
                r = n - b;
              if (null === y || null === v || 0 === r)
                return (y = e), (v = t), (b = n), !1;
              const o = e - y,
                i = t - v;
              return (y = e), (v = t), (b = n), o * o + i * i < r * r * s;
            })(x, w)
          )
            return void A();
          let z = !1;
          switch (m) {
            case "top": {
              const n = N ? 0.25 : 2,
                r = N || M ? e + n : e - n,
                o = N ? e - n : M ? e + n : e - n,
                i = t + l + 1,
                a = M || N ? R.bottom - l : R.top,
                s = M ? (N ? R.bottom - l : R.top) : R.bottom - l;
              z = u(x, w, r, i, o, i, R.left, a, R.right, s);
              break;
            }
            case "bottom": {
              const n = N ? 0.25 : 2,
                r = N || M ? e + n : e - n,
                o = N ? e - n : M ? e + n : e - n,
                i = t - l,
                a = M || N ? R.top + l : R.bottom,
                s = M ? (N ? R.top + l : R.bottom) : R.top + l;
              z = u(x, w, r, i, o, i, R.left, a, R.right, s);
              break;
            }
            case "left": {
              const n = D ? 0.25 : 2,
                r = D || P ? t + n : t - n,
                o = D ? t - n : P ? t + n : t - n,
                i = e + l + 1,
                a = P || D ? R.right - l : R.left,
                s = P ? (D ? R.right - l : R.left) : R.right - l;
              z = u(x, w, a, R.top, s, R.bottom, i, r, i, o);
              break;
            }
            case "right": {
              const n = D ? 0.25 : 2,
                r = D || P ? t + n : t - n,
                o = D ? t - n : P ? t + n : t - n,
                i = e - l,
                a = P || D ? R.left + l : R.right,
                s = P ? (D ? R.left + l : R.right) : R.left + l;
              z = u(x, w, i, r, i, o, a, R.top, s, R.bottom);
              break;
            }
          }
          z ? g || n.start(40, A) : A();
        };
      };
    return (c.__options = { ...e, blockPointerEvents: t }), c;
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(54807 /* vendor/module-54807 */),
  i = n(80475 /* vendor/module-80475 */),
  a = n(43650 /* vendor/module-43650 */);
const s = 0.1 * 0.1,
  l = 0.5;
function c(e, t, n, r, o, i) {
  return r >= t != i >= t && e <= ((o - n) * (t - r)) / (i - r) + n;
}
function u(e, t, n, r, o, i, a, s, l, u) {
  let d = !1;
  return (
    c(e, t, n, r, o, i) && (d = !d),
    c(e, t, o, i, a, s) && (d = !d),
    c(e, t, a, s, l, u) && (d = !d),
    c(e, t, l, u, n, r) && (d = !d),
    d
  );
}
function d(e, t, n, r, o, i) {
  const a = Math.min(n, o),
    s = Math.max(n, o),
    l = Math.min(r, i),
    c = Math.max(r, i);
  return e >= a && e <= s && t >= l && t <= c;
}

// vendor/module-31517.js — webpack module 31517
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t, n) {
  return e + (t - e) * n;
}
function r(e) {
  return e - Math.floor(e);
}
function o(e, t) {
  const n = Math.floor(e),
    r = Math.floor(t);
  let o = e - n,
    a = t - r;
  (o = o * o * (3 - 2 * o)), (a = a * a * (3 - 2 * a));
  const s = i(n, r),
    l = i(n + 1, r),
    c = i(n, r + 1);
  return s + (l - s) * o + (c - s) * a + (s - l - c + i(n + 1, r + 1)) * o * a;
}
function i(e, t) {
  const n = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t);
  return n - Math.floor(n);
}
function a(e, t) {
  const n = Math.PI * (3 - Math.sqrt(5)),
    r = 1 - (2 * (e + 0.5)) / t,
    o = Math.sqrt(1 - r * r),
    i = e * n;
  return [o * Math.cos(i), r, o * Math.sin(i)];
}
function s(e, t) {
  return Math.atan2(Math.sin(e - t), Math.cos(e - t));
}
function l(e, t, n, r, o) {
  const i = Math.sin(t),
    a = Math.cos(t),
    s = Math.sin(e),
    l = Math.cos(e);
  return (e, t, c) => {
    const u = -e * s + c * l;
    return [n + (e * l + c * s) * o, r - (t * a - u * i) * o, t * i + u * a];
  };
}
function c(e, t, n, r) {
  if (!r) {
    const r = Math.round(255 * (n ? 1 - e : e));
    return `rgba(${r},${r},${r},${t})`;
  }
  const o = (t) => Math.round(n ? t * (1 - e) : t + (255 - t) * e);
  return `rgba(${o(r.r)},${o(r.g)},${o(r.b)},${t})`;
}
function u(e, t, n = 0.3) {
  const r = [];
  for (const t of e) (t.a ?? 1) < 0.02 || ((t.r = Math.max(n, t.r)), r.push(t));
  return (
    r.sort((e, t) => e.z - t.z),
    { dots: r, lines: t.filter((e) => (e.a ?? 1) >= 0.02) }
  );
}
function d(e, t, n, r) {
  t.lines.length &&
    (function (e, t, n, r) {
      for (const o of t) {
        const t = o.a ?? 1,
          i = Math.min(1, Math.max(0, o.white));
        (e.strokeStyle = c(i, t, n, r)),
          (e.lineWidth = o.w),
          e.beginPath(),
          e.moveTo(o.x1, o.y1),
          e.lineTo(o.x2, o.y2),
          e.stroke();
      }
    })(e, t.lines, n, r),
    (function (e, t, n, r = 0.3, o) {
      for (const r of t) {
        const t = r.a ?? 1,
          i = Math.min(1, Math.max(0, r.white));
        (e.fillStyle = c(i, t, n, o)),
          e.beginPath(),
          e.arc(r.x, r.y, r.r, 0, 2 * Math.PI),
          e.fill();
      }
    })(e, t.dots, n, 0.3, r);
}
function p(e, t) {
  return (e / 300) ** t;
}
const f = [
    ["latRings", "lonDensity"],
    ["rings", "lonDensity"],
    ["lanes", "segs"],
  ],
  h = ["orbitN", "ghostN", "nodeN", "strandN", "signals"],
  m = ["iconD"],
  g = [
    "rBase",
    "rDepth",
    "rActive",
    "rDot",
    "ghostR",
    "partR",
    "partRDepth",
    "nodeR",
    "nodeRDepth",
  ];
function y(e, t) {
  const n = { ...e },
    r = new Set(),
    o = Math.sqrt(t);
  for (const [e, t] of f) {
    const i = n[e],
      a = n[t];
    null == i ||
      null == a ||
      r.has(e) ||
      r.has(t) ||
      ((n[e] = Math.max(2, Math.round(i * o))),
      (n[t] = Math.max(2, Math.round(a * o))),
      r.add(e),
      r.add(t));
  }
  for (const e of h) {
    const o = n[e];
    null == o || 0 === o || r.has(e) || (n[e] = Math.max(1, Math.round(o * t)));
  }
  for (const e of m) {
    const r = n[e];
    null != r && (n[e] = Math.max(0.02, r * t));
  }
  return n;
}
function v(e, t) {
  const n = { ...e };
  for (const e of g) {
    const r = n[e];
    null != r && (n[e] = r * t);
  }
  return (n.rSizeMul = (n.rSizeMul ?? 1) * t), n;
}
const b = {
  globe: {
    latRings: 17,
    lonDensity: 44,
    rBase: 0.6,
    rDepth: 1.7,
    rBoost: 1,
    inkFar: 0.62,
    inkSpan: 0.54,
    rsPow: 0.6,
    rMin: 0.3,
  },
  orbits: {
    orbitN: 12,
    ghostN: 40,
    ghostR: 0.9,
    ghostA: 0.5,
    particles: 3,
    partR: 1.2,
    partRDepth: 1.6,
    rsPow: 0.6,
    rMin: 0.3,
  },
  rubik: {
    latRings: 15,
    lonDensity: 40,
    moveCount: 14,
    rBase: 0.6,
    rDepth: 1.7,
    rActive: 0.3,
    inkFar: 0.62,
    inkSpan: 0.54,
    rsPow: 0.6,
    rMin: 0.3,
  },
  wave: {
    rings: 15,
    lonDensity: 40,
    rBase: 0.6,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3,
  },
  web: {
    nodeN: 30,
    thr: 0.72,
    signals: 5,
    nodeR: 1.4,
    nodeRDepth: 1.8,
    lineW: 0.8,
    rsPow: 0.6,
    rMin: 0.3,
  },
  braid: {
    strandN: 52,
    turns: 3,
    ghostN: 150,
    rBase: 1.2,
    rDepth: 1.8,
    rsPow: 0.6,
    rMin: 0.3,
  },
  ribbon: {
    lanes: 5,
    segs: 88,
    ghostN: 150,
    rBase: 1.1,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3,
  },
  ring: {
    lanes: 5,
    segs: 88,
    ghostN: 0,
    faceOn: 1,
    rBase: 1.1,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3,
  },
  morph: { rDot: 0.021, iconD: 1, rMin: 0.25 },
};
function S(e, t, n) {
  let [r, o, i] = e,
    a = !1;
  for (let e = 0; e < t.length; e++) {
    if (n.amount[e] <= 0) continue;
    const s = t[e],
      l = 0 === s.axis ? r : 1 === s.axis ? o : i;
    if (l < s.lo || l >= s.hi) continue;
    e === n.active && (a = !0);
    const c = s.ang * n.amount[e],
      u = Math.cos(c),
      d = Math.sin(c);
    if (0 === s.axis) {
      const e = o * u - i * d;
      (i = o * d + i * u), (o = e);
    } else if (1 === s.axis) {
      const e = r * u + i * d;
      (i = -r * d + i * u), (r = e);
    } else {
      const e = r * u - o * d;
      (o = r * d + o * u), (r = e);
    }
  }
  return [r, o, i, a];
}
function _(e) {
  const t = e.length,
    n = [];
  let r = 0;
  for (let o = 0; o < t; o++) {
    const i = e[o],
      a = e[(o + 1) % t],
      s = Math.hypot(a[0] - i[0], a[1] - i[1]);
    n.push(s), (r += s);
  }
  return (o) => {
    let i = o * r,
      a = 0;
    for (; i > n[a] && a < t - 1; ) (i -= n[a]), a++;
    const s = e[a],
      l = e[(a + 1) % t],
      c = n[a] ? Math.min(1, i / n[a]) : 0;
    return [s[0] + (l[0] - s[0]) * c, s[1] + (l[1] - s[1]) * c];
  };
}
const x = [
    (e) => {
      const t = -Math.PI / 2 + 2 * e * Math.PI;
      return [0.24 * Math.cos(t), 0.24 * Math.sin(t)];
    },
    _([
      [0, -0.26],
      [0.24, 0.16],
      [-0.24, 0.16],
    ]),
    _([
      [0, -0.2],
      [0.2, -0.2],
      [0.2, 0.2],
      [-0.2, 0.2],
      [-0.2, -0.2],
    ]),
  ],
  w = 2.3,
  E = (e, t, n) => {
    const r = e / 2,
      o = e / 2,
      i = (e / 2) * 0.78,
      s = n.spin ?? 1,
      c = l(0.1 * t * s, 0.3, r, o, 1),
      d = p(e, n.rsPow ?? 0.6),
      f = [],
      h = n.ghostN ?? 150;
    for (let e = 0; e < h; e++) {
      const t = a(e, h),
        [n, r, o] = c(t[0] * i, t[1] * i, t[2] * i),
        s = (o / i + 1) / 2;
      f.push({
        x: n,
        y: r,
        z: o,
        r: 0.8 * d,
        white: 0.78,
        a: 0.1 + 0.22 * s,
      });
    }
    const m = 0.24 * t * s,
      g = n.faceOn ? -0.3 : 0.55 + 0.3 * Math.sin(0.18 * t) * s,
      y = Math.cos(m),
      v = Math.sin(m),
      b = -v * Math.sin(g),
      S = Math.cos(g),
      _ = y * Math.sin(g),
      x = 0 * _ - v * S,
      w = v * b - y * _,
      E = y * S - 0 * b,
      T = 0.23 * (n.wobMul ?? 1),
      k = n.faceOn ? i / (1 + 0.85 * T) : i,
      C = n.lanes ?? 5,
      I = n.segs ?? 88,
      A = Math.max(1, Math.round(C * (n.bandMul ?? 1)));
    for (let e = 0; e < A; e++) {
      const r = 0.075 * (e - (A - 1) / 2),
        o = Math.abs(e - (A - 1) / 2) / Math.max(1, (A - 1) / 2);
      for (let a = 0; a < I; a++) {
        const s = (a / I) * 2 * Math.PI,
          l =
            (0.16 * Math.sin(3 * s - 1.7 * t + 0.22 * e) +
              0.07 * Math.sin(5 * s + 1.1 * t)) *
            (n.wobMul ?? 1),
          u = n.faceOn ? 1 + l : 1,
          p = n.faceOn ? r : r + l,
          h = y * Math.cos(s) + b * Math.sin(s) + x * p,
          m = 0 * Math.cos(s) + S * Math.sin(s) + w * p,
          g = v * Math.cos(s) + _ * Math.sin(s) + E * p,
          T = Math.sqrt(h * h + m * m + g * g),
          C = k * u,
          [A, O, R] = c((h / T) * C, (m / T) * C, (g / T) * C),
          M = (R / i + 1) / 2;
        f.push({
          x: A,
          y: O,
          z: R,
          r: ((n.rBase ?? 1.1) + (n.rDepth ?? 1.7) * M) * (1 - 0.25 * o) * d,
          white: 0.52 - 0.44 * M + 0.18 * o,
          a: 0.4 + 0.6 * M,
        });
      }
    }
    return u(f, [], n.rMin);
  },
  T = {
    orbits: (e, t, n) => {
      const r = (e / 2) * 0.82,
        o = l(0.12 * t, 0.3, e / 2, e / 2, 1),
        a = p(e, n.rsPow ?? 0.6),
        s = [],
        c = n.orbitN ?? 12,
        d = n.ghostN ?? 40,
        f = n.particles ?? 3;
      for (let e = 0; e < c; e++) {
        const l = i(e, 1.7),
          c = i(e, 5.2),
          u = i(e, 8.9),
          p = r * (0.45 + 0.52 * l),
          h = 2 * l * Math.PI,
          m = Math.acos(2 * c - 1),
          g = Math.sin(m) * Math.cos(h),
          y = Math.cos(m),
          v = Math.sin(m) * Math.sin(h);
        let b = -y,
          S = g;
        const _ = 0,
          x = Math.max(1e-6, Math.sqrt(b * b + S * S));
        (b /= x), (S /= x);
        const w = y * _ - v * S,
          E = v * b - g * _,
          T = g * S - y * b,
          k = (0.25 + 0.55 * u) * (u > 0.5 ? 1 : -1);
        for (let e = 0; e < d; e++) {
          const t = (e / d) * 2 * Math.PI,
            [r, i, l] = o(
              (b * Math.cos(t) + w * Math.sin(t)) * p,
              (S * Math.cos(t) + E * Math.sin(t)) * p,
              (_ * Math.cos(t) + T * Math.sin(t)) * p,
            ),
            c = (l / p + 1) / 2;
          s.push({
            x: r,
            y: i,
            z: l,
            r: (n.ghostR ?? 0.9) * a,
            white: 0.72,
            a: (n.ghostA ?? 0.5) * (0.4 + 0.6 * c),
          });
        }
        for (let e = 0; e < f; e++) {
          const r = t * k + (e / f) * 2 * Math.PI + 6 * c,
            [i, l, u] = o(
              (b * Math.cos(r) + w * Math.sin(r)) * p,
              (S * Math.cos(r) + E * Math.sin(r)) * p,
              (_ * Math.cos(r) + T * Math.sin(r)) * p,
            ),
            d = (u / p + 1) / 2;
          s.push({
            x: i,
            y: l,
            z: u,
            r: ((n.partR ?? 1.2) + (n.partRDepth ?? 1.6) * d) * a,
            white: 0.3 - 0.22 * d,
          });
        }
      }
      return u(s, [], n.rMin);
    },
    globe: (e, t, n) => {
      const r = e / 2,
        o = e / 2,
        i = (e / 2) * 0.82,
        a = l(0.5 * t, 0.4 + 0.06 * Math.sin(0.35 * t), r, o, i),
        c = t * (0.5 + 1.2 * (n.scanMul ?? 1)),
        d = p(e, n.rsPow ?? 0.6),
        f = n.dimBase ?? 1,
        h = [],
        m = n.latRings ?? 17,
        g = n.lonDensity ?? 44;
      for (let e = 0; e <= m; e++) {
        const r = -Math.PI / 2 + (e / m) * Math.PI,
          o = Math.cos(r),
          i = Math.sin(r),
          l = Math.max(1, Math.round(Math.abs(o) * g));
        for (let e = 0; e < l; e++) {
          const r = (e / l) * 2 * Math.PI,
            [u, p, m] = a(o * Math.cos(r), i, o * Math.sin(r)),
            g = (m + 1) / 2,
            y = s(r + 0.5 * t, c),
            v = Math.exp((-y * y) / 0.18) * Math.max(0, m);
          h.push({
            x: u,
            y: p,
            z: m,
            r:
              ((n.rBase ?? 0.6) + (n.rDepth ?? 1.7) * g + (n.rBoost ?? 1) * v) *
              d,
            white: (n.inkFar ?? 0.62) - (n.inkSpan ?? 0.54) * g,
            a: f + (1 - f) * Math.min(1, v),
          });
        }
      }
      return u(h, [], n.rMin);
    },
    rubik: (e, t, n) => {
      const r = e / 2,
        o = e / 2,
        a = (e / 2) * 0.82,
        s = l(0.55 * t, 0.35 + 0.1 * Math.sin(0.9 * t), r, o, a),
        c = p(e, n.rsPow ?? 0.6),
        d = n.moveCount ?? 14,
        f = (function (e) {
          const t = [];
          for (let n = 0; n < e; n++) {
            const e = Math.min(2, Math.floor(3 * i(n, 2.3))),
              r = 0.5 * Math.min(3, Math.floor(4 * i(n, 5.9))) - 1,
              o = i(n, 7.7) < 0.5 ? 1 : -1;
            t.push({
              axis: e,
              lo: r,
              hi: r + 0.5,
              ang: (o * Math.PI) / 2,
            });
          }
          return t;
        })(d),
        h = (function (e, t, n) {
          const r = e % (2 * t * n + 1.2),
            o = new Array(t).fill(0);
          let i = -1;
          if (r < 2 * t * n) {
            const e = Math.floor(r / n),
              a = (r - e * n) / n,
              s = 1 - (1 - Math.min(1, a / 0.7)) ** 3;
            if (e < t) {
              for (let t = 0; t < e; t++) o[t] = 1;
              (o[e] = s), (i = e);
            } else {
              const n = 2 * t - 1 - e;
              for (let e = 0; e < n; e++) o[e] = 1;
              (o[n] = 1 - s), (i = n);
            }
          }
          return { amount: o, active: i };
        })(t, d, 0.42),
        m = [],
        g = n.latRings ?? 15,
        y = n.lonDensity ?? 40;
      for (let e = 0; e <= g; e++) {
        const t = -Math.PI / 2 + (e / g) * Math.PI,
          r = Math.cos(t),
          o = Math.sin(t),
          i = Math.max(1, Math.round(Math.abs(r) * y));
        for (let e = 0; e < i; e++) {
          const t = (e / i) * 2 * Math.PI,
            [a, l, u, d] = S([r * Math.cos(t), o, r * Math.sin(t)], f, h),
            [p, g, y] = s(a, l, u),
            v = (y + 1) / 2;
          m.push({
            x: p,
            y: g,
            z: y,
            r:
              ((n.rBase ?? 0.6) +
                (n.rDepth ?? 1.7) * v +
                (d ? (n.rActive ?? 0.3) : 0)) *
              c,
            white:
              (n.inkFar ?? 0.62) - (n.inkSpan ?? 0.54) * v - (d ? 0.14 : 0),
          });
        }
      }
      return u(m, [], n.rMin);
    },
    wave: (e, t, n) => {
      const r = (e / 2) * 0.874,
        o = l(0.18 * t, 0.38, e / 2, e / 2, 1),
        i = p(e, n.rsPow ?? 0.6),
        a = [],
        s = n.rings ?? 15,
        c = n.lonDensity ?? 40;
      for (let e = 0; e <= s; e++) {
        const l = -Math.PI / 2 + (e / s) * Math.PI,
          u = Math.cos(l),
          d = Math.sin(l),
          p =
            0.62 * Math.sin(2.1 * t - 0.52 * e) +
            0.38 * Math.sin(1.27 * t + 0.83 * e),
          f = r * (0.88 + 0.105 * p),
          h = Math.max(1, Math.round(Math.abs(u) * c));
        for (let e = 0; e < h; e++) {
          const t = (e / h) * 2 * Math.PI,
            [s, l, c] = o(u * Math.cos(t) * f, d * f, u * Math.sin(t) * f),
            m = (c / r + 1) / 2,
            g = Math.max(0, p);
          a.push({
            x: s,
            y: l,
            z: c,
            r: ((n.rBase ?? 0.6) + (n.rDepth ?? 1.7) * m) * (1 + 0.4 * g) * i,
            white: 0.66 - 0.56 * m - 0.1 * g,
          });
        }
      }
      return u(a, [], n.rMin);
    },
    web: (e, t, s) => {
      const c = l(
          0.12 * t,
          0.32,
          e / 2,
          e / 2,
          (e / 2) * 0.8 * (s.spread ?? 1),
        ),
        d = p(e, s.rsPow ?? 0.6),
        f = s.nodeN ?? 30,
        h = s.thr ?? 0.72,
        m = s.nodeR ?? 1.4,
        g = s.nodeRDepth ?? 1.8,
        y = [];
      for (let e = 0; e < f; e++) {
        const n = a(e, f),
          r = n[0] + 0.3 * (o(0.31 * e + 9, 0.24 * t) - 0.5) * 2,
          i = n[1] + 0.3 * (o(0.53 * e + 27, 0.21 * t) - 0.5) * 2,
          s = n[2] + 0.3 * (o(0.77 * e + 55, 0.27 * t) - 0.5) * 2,
          l = Math.sqrt(r * r + i * i + s * s);
        y.push([r / l, i / l, s / l]);
      }
      const v = [],
        b = [];
      for (let e = 0; e < f; e++)
        for (let t = e + 1; t < f; t++) {
          const n = y[e][0] - y[t][0],
            r = y[e][1] - y[t][1],
            o = y[e][2] - y[t][2],
            i = Math.sqrt(n * n + r * r + o * o);
          if (i >= h) continue;
          const [a, l, u] = c(y[e][0], y[e][1], y[e][2]),
            [p, f, m] = c(y[t][0], y[t][1], y[t][2]),
            g = ((u + m) / 2 + 1) / 2;
          v.push({
            x1: a,
            y1: l,
            x2: p,
            y2: f,
            white: 0.42,
            a: (1 - i / h) * (0.3 + 0.55 * g),
            w: Math.max(0.6, (s.lineW ?? 0.8) * d),
          });
        }
      for (let e = 0; e < f; e++) {
        const [n, r, o] = c(y[e][0], y[e][1], y[e][2]),
          i = (o + 1) / 2,
          a = 1 + 0.25 * Math.sin(1.4 * t + 2.7 * e);
        b.push({
          x: n,
          y: r,
          z: o,
          r: (m + g * i) * a * d,
          white: 0.55 - 0.45 * i,
        });
      }
      const S = s.signals ?? 5;
      for (let e = 0; e < S; e++) {
        const o = Math.floor(0.55 * t + 7.31 * e),
          a = Math.floor(i(o, 3.1 * e + 1.7) * f),
          s = Math.floor(i(o, 5.7 * e + 4.2) * f);
        if (a === s) continue;
        const l = r(0.55 * t + 7.31 * e),
          u = n(y[a][0], y[s][0], l),
          p = n(y[a][1], y[s][1], l),
          h = n(y[a][2], y[s][2], l),
          v = Math.max(1e-6, Math.sqrt(u * u + p * p + h * h)),
          [S, _, x] = c(u / v, p / v, h / v),
          w = (x + 1) / 2;
        b.push({
          x: S,
          y: _,
          z: x,
          r: (1.5 * m + g * w) * d,
          white: 0.05,
          a: 0.5 + 0.5 * w,
        });
      }
      return u(b, v, s.rMin);
    },
    braid: (e, t, n) => {
      const o = (e / 2) * 0.76,
        i = l(0.4 * t, 0.3, e / 2, e / 2, 1),
        s = p(e, n.rsPow ?? 0.6),
        c = [],
        d = n.ghostN ?? 150;
      for (let e = 0; e < d; e++) {
        const t = a(e, d),
          [n, r, l] = i(t[0] * o, t[1] * o, t[2] * o),
          u = (l / o + 1) / 2;
        c.push({
          x: n,
          y: r,
          z: l,
          r: 0.8 * s,
          white: 0.78,
          a: 0.1 + 0.22 * u,
        });
      }
      const f = n.strandN ?? 52,
        h = n.turns ?? 3;
      for (let e = 0; e < 3; e++) {
        const a = (e / 3) * 2 * Math.PI;
        for (let e = 0; e < f; e++) {
          const l = 0.96 * (2 * r(e / f + 0.045 * t) - 1),
            u = Math.sqrt(Math.max(0, 1 - l * l)),
            d = Math.min(1, (1 - Math.abs(l)) / 0.1),
            p = l * Math.PI * h + a,
            m = 1 + 0.075 * Math.sin(l * Math.PI * h * 2 + 2 * a + 0.8 * t),
            g = u * o * m,
            [y, v, b] = i(Math.cos(p) * g, l * o * m, Math.sin(p) * g),
            S = (b / o + 1) / 2;
          c.push({
            x: y,
            y: v,
            z: b,
            r: ((n.rBase ?? 1.2) + (n.rDepth ?? 1.8) * S) * s,
            white: 0.55 - 0.45 * S,
            a: d * (0.45 + 0.55 * S),
          });
        }
      }
      return u(c, [], n.rMin);
    },
    ribbon: E,
    ring: E,
    morph: (e, t, n) => {
      const r = x.length,
        o = t % (w * r),
        i =
          null != n.shape && n.shape >= 0 && n.shape < r
            ? Math.floor(n.shape)
            : -1,
        a = i >= 0 ? i : Math.floor(o / w),
        s = i >= 0 ? t % w : o - a * w,
        l = i >= 0 ? 0 : s > 1.4 ? (c = (s - 1.4) / 0.9) * c * (3 - 2 * c) : 0;
      var c;
      const d = n.spread ?? 1,
        p = x[a],
        f = i >= 0 ? p : x[(a + 1) % r],
        h = 160,
        m = [];
      for (let e = 0; e < h; e++) {
        const t = e / h,
          n = p(t),
          r = f(t);
        m.push([
          (n[0] + (r[0] - n[0]) * l) * d,
          (n[1] + (r[1] - n[1]) * l) * d,
        ]);
      }
      const g = [];
      let y = 0;
      for (let e = 0; e < h; e++) {
        const t = m[e],
          n = m[(e + 1) % h],
          r = Math.hypot(n[0] - t[0], n[1] - t[1]);
        g.push(r), (y += r);
      }
      const v = ((b = n.iconD ?? 1), Math.max(6, Math.round(34 * b)));
      var b;
      const S = 1.35 * (n.rDot ?? 0.021) * d,
        _ = 1 + 0.02 * Math.sin(3.1 * s),
        E = [],
        T = e / 2;
      let k = 0,
        C = 0;
      for (let t = 0; t < v; t++) {
        const n = (t / v) * y;
        for (; C + g[k] < n && k < 159; ) (C += g[k]), k++;
        const r = m[k],
          o = m[(k + 1) % h],
          i = g[k] ? Math.min(1, (n - C) / g[k]) : 0,
          a = (r[0] + (o[0] - r[0]) * i) * _,
          s = (r[1] + (o[1] - r[1]) * i) * _;
        E.push({
          x: T + a * e,
          y: T + s * e,
          z: 0,
          r: Math.max(0.35, S * e),
          white: 0.1,
        });
      }
      return u(E, [], n.rMin);
    },
  },
  k = Object.fromEntries(
    Object.entries(T).map(([e, t]) => [
      e,
      (e, n, r, o, i) => d(e, t(n, r, i), o),
    ]),
  ),
  C = {
    working: "orbits",
    searching: "globe",
    solving: "rubik",
    listening: "wave",
    connecting: "web",
    weaving: "braid",
    composing: "ribbon",
    breathing: "ring",
    shaping: "morph",
  },
  I = {
    orbits: {
      64: { speed: 1.885, count: 1, size: 1 },
      32: { speed: 2.9072, count: 0.4251, size: 1.6849 },
      20: { speed: 3.9, count: 0.238, size: 2.4 },
    },
    globe: {
      64: {
        speed: 2.015,
        count: 0.42,
        size: 1.15,
        extra: { scanMul: 4.08, dimBase: 0.45 },
      },
      32: {
        speed: 2.3803,
        count: 0.1839,
        size: 1.4769,
        extra: { scanMul: 4.2301, dimBase: 0.45 },
      },
      20: {
        speed: 2.665,
        count: 0.105,
        size: 1.75,
        extra: { scanMul: 4.335, dimBase: 0.45 },
      },
    },
    rubik: {
      64: { speed: 1.82, count: 0.35, size: 1.05 },
      32: { speed: 1.8964, count: 0.1537, size: 1.4951 },
      20: { speed: 1.95, count: 0.088, size: 1.9 },
    },
    wave: {
      64: { speed: 4.388, count: 0.341, size: 1 },
      32: { speed: 4.1512, count: 0.169, size: 1.3232 },
      20: { speed: 3.998, count: 0.105, size: 1.6 },
    },
    web: {
      64: { speed: 3.315, count: 1.35, size: 0.95 },
      32: { speed: 5.0104, count: 0.4942, size: 1.2571 },
      20: { speed: 6.63, count: 0.25, size: 1.52 },
    },
    braid: {
      64: { speed: 1.625, count: 0.5, size: 1 },
      32: { speed: 2.2234, count: 0.2056, size: 1.2011 },
      20: { speed: 2.75, count: 0.1125, size: 1.36 },
    },
    ribbon: {
      64: {
        speed: 2.34,
        count: 0.25,
        size: 0.85,
        extra: { spin: 0, bandMul: 3.9, wobMul: 1 },
      },
      32: {
        speed: 2.7776,
        count: 0.0969,
        size: 0.9766,
        extra: { spin: 0, bandMul: 4.49, wobMul: 1 },
      },
      20: {
        speed: 3.12,
        count: 0.051,
        size: 1.073,
        extra: { spin: 0, bandMul: 4.94, wobMul: 1 },
      },
    },
    ring: {
      64: {
        speed: 3.24,
        count: 0.25,
        size: 0.956,
        extra: { spin: 0, bandMul: 3.627, wobMul: 0.368 },
      },
      32: {
        speed: 3.5517,
        count: 0.0678,
        size: 1.31,
        extra: { spin: 0, bandMul: 3.8265, wobMul: 0.4751 },
      },
      20: {
        speed: 3.78,
        count: 0.028,
        size: 1.622,
        extra: { spin: 0, bandMul: 3.968, wobMul: 0.565 },
      },
    },
    morph: {
      64: {
        speed: 2.405,
        count: 0.702,
        size: 0.395,
        extra: { spread: 1.45 },
      },
      32: {
        speed: 2.2057,
        count: 0.5937,
        size: 0.6916,
        extra: { spread: 1.45 },
      },
      20: {
        speed: 2.08,
        count: 0.53,
        size: 1.011,
        extra: { spread: 1.45 },
      },
    },
  },
  A = new Map();
(t.MODE_DRAWS = k),
  (t.MODE_FRAMES = T),
  (t.STATE_TO_MODE = C),
  (t.angleDelta = s),
  (t.countDots = function (e) {
    let t = 0;
    const n = new Set();
    for (const [r, o] of f) {
      const i = e[r],
        a = e[o];
      null == i ||
        null == a ||
        n.has(r) ||
        n.has(o) ||
        ((t += i * a), n.add(r), n.add(o));
    }
    for (const r of h) {
      const o = e[r];
      null == o || 0 === o || n.has(r) || (t += o);
    }
    return Math.round(t);
  }),
  (t.fibDir = a),
  (t.finalizeFrame = u),
  (t.frac = r),
  (t.hashD = i),
  (t.lerp = n),
  (t.makeProj = l),
  (t.paintFrame = d),
  (t.radiusScale = p),
  (t.resolvePreset = function (e, t) {
    const n = `${e}-${t}`,
      r = A.get(n);
    if (r) return r;
    const o = C[e],
      i = I[o][t];
    let a = { ...b[o] };
    1 !== i.count && (a = y(a, i.count)),
      1 !== i.size && (a = v(a, i.size)),
      i.extra && (a = { ...a, ...i.extra });
    const s = { mode: o, speed: i.speed, opts: a };
    return A.set(n, s), s;
  }),
  (t.scaleCounts = y),
  (t.scaleRadii = v),
  (t.vnoise = o);

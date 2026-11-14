// vendor/module-7083.js — webpack module 7083
// params: (t, e, r) = (module, exports, require)
"use strict";
function i(t, e, r) {
  if (t && t.length) {
    const [i, o] = e,
      n = (Math.PI / 180) * r,
      a = Math.cos(n),
      s = Math.sin(n);
    for (const e of t) {
      const [t, r] = e;
      (e[0] = (t - i) * a - (r - o) * s + i),
        (e[1] = (t - i) * s + (r - o) * a + o);
    }
  }
}
function o(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function n(t, e, r, n = 1) {
  const a = r,
    s = Math.max(e, 0.1),
    l = t[0] && t[0][0] && "number" == typeof t[0][0] ? [t] : t,
    h = [0, 0];
  if (a) for (const t of l) i(t, h, a);
  const c = (function (t, e, r) {
    const i = [];
    for (const e of t) {
      const t = [...e];
      o(t[0], t[t.length - 1]) || t.push([t[0][0], t[0][1]]),
        t.length > 2 && i.push(t);
    }
    const n = [];
    e = Math.max(e, 0.1);
    const a = [];
    for (const t of i)
      for (let e = 0; e < t.length - 1; e++) {
        const r = t[e],
          i = t[e + 1];
        if (r[1] !== i[1]) {
          const t = Math.min(r[1], i[1]);
          a.push({
            ymin: t,
            ymax: Math.max(r[1], i[1]),
            x: t === r[1] ? r[0] : i[0],
            islope: (i[0] - r[0]) / (i[1] - r[1]),
          });
        }
      }
    if (
      (a.sort((t, e) =>
        t.ymin < e.ymin
          ? -1
          : t.ymin > e.ymin
            ? 1
            : t.x < e.x
              ? -1
              : t.x > e.x
                ? 1
                : t.ymax === e.ymax
                  ? 0
                  : (t.ymax - e.ymax) / Math.abs(t.ymax - e.ymax),
      ),
      !a.length)
    )
      return n;
    let s = [],
      l = a[0].ymin,
      h = 0;
    for (; s.length || a.length; ) {
      if (a.length) {
        let t = -1;
        for (let e = 0; e < a.length && !(a[e].ymin > l); e++) t = e;
        a.splice(0, t + 1).forEach((t) => {
          s.push({ s: l, edge: t });
        });
      }
      if (
        ((s = s.filter((t) => !(t.edge.ymax <= l))),
        s.sort((t, e) =>
          t.edge.x === e.edge.x
            ? 0
            : (t.edge.x - e.edge.x) / Math.abs(t.edge.x - e.edge.x),
        ),
        (1 !== r || h % e == 0) && s.length > 1)
      )
        for (let t = 0; t < s.length; t += 2) {
          const e = t + 1;
          if (e >= s.length) break;
          const r = s[t].edge,
            i = s[e].edge;
          n.push([
            [Math.round(r.x), l],
            [Math.round(i.x), l],
          ]);
        }
      (l += r),
        s.forEach((t) => {
          t.edge.x = t.edge.x + r * t.edge.islope;
        }),
        h++;
    }
    return n;
  })(l, s, n);
  if (a) {
    for (const t of l) i(t, h, -a);
    !(function (t, e, r) {
      const o = [];
      t.forEach((t) => o.push(...t)), i(o, e, r);
    })(c, h, -a);
  }
  return c;
}
function a(t, e) {
  var r;
  const i = e.hachureAngle + 90;
  let o = e.hachureGap;
  o < 0 && (o = 4 * e.strokeWidth), (o = Math.round(Math.max(o, 0.1)));
  let a = 1;
  return (
    e.roughness >= 1 &&
      ((null === (r = e.randomizer) || void 0 === r ? void 0 : r.next()) ||
        Math.random()) > 0.7 &&
      (a = o),
    n(t, o, i, a || 1)
  );
}
r.d(e, { A: () => ot });
class s {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, e) {
    return this._fillPolygons(t, e);
  }
  _fillPolygons(t, e) {
    const r = a(t, e);
    return { type: "fillSketch", ops: this.renderLines(r, e) };
  }
  renderLines(t, e) {
    const r = [];
    for (const i of t)
      r.push(
        ...this.helper.doubleLineOps(i[0][0], i[0][1], i[1][0], i[1][1], e),
      );
    return r;
  }
}
function l(t) {
  const e = t[0],
    r = t[1];
  return Math.sqrt(Math.pow(e[0] - r[0], 2) + Math.pow(e[1] - r[1], 2));
}
class h extends s {
  fillPolygons(t, e) {
    let r = e.hachureGap;
    r < 0 && (r = 4 * e.strokeWidth), (r = Math.max(r, 0.1));
    const i = a(t, Object.assign({}, e, { hachureGap: r })),
      o = (Math.PI / 180) * e.hachureAngle,
      n = [],
      s = 0.5 * r * Math.cos(o),
      h = 0.5 * r * Math.sin(o);
    for (const [t, e] of i)
      l([t, e]) &&
        n.push([[t[0] - s, t[1] + h], [...e]], [[t[0] + s, t[1] - h], [...e]]);
    return { type: "fillSketch", ops: this.renderLines(n, e) };
  }
}
class c extends s {
  fillPolygons(t, e) {
    const r = this._fillPolygons(t, e),
      i = Object.assign({}, e, { hachureAngle: e.hachureAngle + 90 }),
      o = this._fillPolygons(t, i);
    return (r.ops = r.ops.concat(o.ops)), r;
  }
}
class d {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, e) {
    const r = a(t, (e = Object.assign({}, e, { hachureAngle: 0 })));
    return this.dotsOnLines(r, e);
  }
  dotsOnLines(t, e) {
    const r = [];
    let i = e.hachureGap;
    i < 0 && (i = 4 * e.strokeWidth), (i = Math.max(i, 0.1));
    let o = e.fillWeight;
    o < 0 && (o = e.strokeWidth / 2);
    const n = i / 4;
    for (const a of t) {
      const t = l(a),
        s = t / i,
        h = Math.ceil(s) - 1,
        c = t - h * i,
        d = (a[0][0] + a[1][0]) / 2 - i / 4,
        u = Math.min(a[0][1], a[1][1]);
      for (let t = 0; t < h; t++) {
        const a = u + c + t * i,
          s = d - n + 2 * Math.random() * n,
          l = a - n + 2 * Math.random() * n,
          h = this.helper.ellipse(s, l, o, o, e);
        r.push(...h.ops);
      }
    }
    return { type: "fillSketch", ops: r };
  }
}
class u {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, e) {
    const r = a(t, e);
    return { type: "fillSketch", ops: this.dashedLine(r, e) };
  }
  dashedLine(t, e) {
    const r =
        e.dashOffset < 0
          ? e.hachureGap < 0
            ? 4 * e.strokeWidth
            : e.hachureGap
          : e.dashOffset,
      i =
        e.dashGap < 0
          ? e.hachureGap < 0
            ? 4 * e.strokeWidth
            : e.hachureGap
          : e.dashGap,
      o = [];
    return (
      t.forEach((t) => {
        const n = l(t),
          a = Math.floor(n / (r + i)),
          s = (n + i - a * (r + i)) / 2;
        let h = t[0],
          c = t[1];
        h[0] > c[0] && ((h = t[1]), (c = t[0]));
        const d = Math.atan((c[1] - h[1]) / (c[0] - h[0]));
        for (let t = 0; t < a; t++) {
          const n = t * (r + i),
            a = n + r,
            l = [
              h[0] + n * Math.cos(d) + s * Math.cos(d),
              h[1] + n * Math.sin(d) + s * Math.sin(d),
            ],
            c = [
              h[0] + a * Math.cos(d) + s * Math.cos(d),
              h[1] + a * Math.sin(d) + s * Math.sin(d),
            ];
          o.push(...this.helper.doubleLineOps(l[0], l[1], c[0], c[1], e));
        }
      }),
      o
    );
  }
}
class p {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, e) {
    const r = e.hachureGap < 0 ? 4 * e.strokeWidth : e.hachureGap,
      i = e.zigzagOffset < 0 ? r : e.zigzagOffset,
      o = a(t, (e = Object.assign({}, e, { hachureGap: r + i })));
    return { type: "fillSketch", ops: this.zigzagLines(o, i, e) };
  }
  zigzagLines(t, e, r) {
    const i = [];
    return (
      t.forEach((t) => {
        const o = l(t),
          n = Math.round(o / (2 * e));
        let a = t[0],
          s = t[1];
        a[0] > s[0] && ((a = t[1]), (s = t[0]));
        const h = Math.atan((s[1] - a[1]) / (s[0] - a[0]));
        for (let t = 0; t < n; t++) {
          const o = 2 * t * e,
            n = 2 * (t + 1) * e,
            s = Math.sqrt(2 * Math.pow(e, 2)),
            l = [a[0] + o * Math.cos(h), a[1] + o * Math.sin(h)],
            c = [a[0] + n * Math.cos(h), a[1] + n * Math.sin(h)],
            d = [
              l[0] + s * Math.cos(h + Math.PI / 4),
              l[1] + s * Math.sin(h + Math.PI / 4),
            ];
          i.push(
            ...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], r),
            ...this.helper.doubleLineOps(d[0], d[1], c[0], c[1], r),
          );
        }
      }),
      i
    );
  }
}
const g = {};
class f {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed
      ? ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31
      : Math.random();
  }
}
const y = {
  A: 7,
  a: 7,
  C: 6,
  c: 6,
  H: 1,
  h: 1,
  L: 2,
  l: 2,
  M: 2,
  m: 2,
  Q: 4,
  q: 4,
  S: 4,
  s: 4,
  T: 2,
  t: 2,
  V: 1,
  v: 1,
  Z: 0,
  z: 0,
};
function m(t, e) {
  return t.type === e;
}
function x(t) {
  const e = [],
    r = (function (t) {
      const e = new Array();
      for (; "" !== t; )
        if (t.match(/^([ \t\r\n,]+)/)) t = t.substr(RegExp.$1.length);
        else if (t.match(/^([aAcChHlLmMqQsStTvVzZ])/))
          (e[e.length] = { type: 0, text: RegExp.$1 }),
            (t = t.substr(RegExp.$1.length));
        else {
          if (
            !t.match(
              /^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/,
            )
          )
            return [];
          (e[e.length] = { type: 1, text: `${parseFloat(RegExp.$1)}` }),
            (t = t.substr(RegExp.$1.length));
        }
      return (e[e.length] = { type: 2, text: "" }), e;
    })(t);
  let i = "BOD",
    o = 0,
    n = r[o];
  for (; !m(n, 2); ) {
    let a = 0;
    const s = [];
    if ("BOD" === i) {
      if ("M" !== n.text && "m" !== n.text) return x("M0,0" + t);
      o++, (a = y[n.text]), (i = n.text);
    } else m(n, 1) ? (a = y[i]) : (o++, (a = y[n.text]), (i = n.text));
    if (!(o + a < r.length)) throw new Error("Path data ended short");
    for (let t = o; t < o + a; t++) {
      const e = r[t];
      if (!m(e, 1)) throw new Error("Param not a number: " + i + "," + e.text);
      s[s.length] = +e.text;
    }
    if ("number" != typeof y[i]) throw new Error("Bad segment: " + i);
    {
      const t = { key: i, data: s };
      e.push(t),
        (o += a),
        (n = r[o]),
        "M" === i && (i = "L"),
        "m" === i && (i = "l");
    }
  }
  return e;
}
function C(t) {
  let e = 0,
    r = 0,
    i = 0,
    o = 0;
  const n = [];
  for (const { key: a, data: s } of t)
    switch (a) {
      case "M":
        n.push({ key: "M", data: [...s] }), ([e, r] = s), ([i, o] = s);
        break;
      case "m":
        (e += s[0]),
          (r += s[1]),
          n.push({ key: "M", data: [e, r] }),
          (i = e),
          (o = r);
        break;
      case "L":
        n.push({ key: "L", data: [...s] }), ([e, r] = s);
        break;
      case "l":
        (e += s[0]), (r += s[1]), n.push({ key: "L", data: [e, r] });
        break;
      case "C":
        n.push({ key: "C", data: [...s] }), (e = s[4]), (r = s[5]);
        break;
      case "c": {
        const t = s.map((t, i) => (i % 2 ? t + r : t + e));
        n.push({ key: "C", data: t }), (e = t[4]), (r = t[5]);
        break;
      }
      case "Q":
        n.push({ key: "Q", data: [...s] }), (e = s[2]), (r = s[3]);
        break;
      case "q": {
        const t = s.map((t, i) => (i % 2 ? t + r : t + e));
        n.push({ key: "Q", data: t }), (e = t[2]), (r = t[3]);
        break;
      }
      case "A":
        n.push({ key: "A", data: [...s] }), (e = s[5]), (r = s[6]);
        break;
      case "a":
        (e += s[5]),
          (r += s[6]),
          n.push({
            key: "A",
            data: [s[0], s[1], s[2], s[3], s[4], e, r],
          });
        break;
      case "H":
        n.push({ key: "H", data: [...s] }), (e = s[0]);
        break;
      case "h":
        (e += s[0]), n.push({ key: "H", data: [e] });
        break;
      case "V":
        n.push({ key: "V", data: [...s] }), (r = s[0]);
        break;
      case "v":
        (r += s[0]), n.push({ key: "V", data: [r] });
        break;
      case "S":
        n.push({ key: "S", data: [...s] }), (e = s[2]), (r = s[3]);
        break;
      case "s": {
        const t = s.map((t, i) => (i % 2 ? t + r : t + e));
        n.push({ key: "S", data: t }), (e = t[2]), (r = t[3]);
        break;
      }
      case "T":
        n.push({ key: "T", data: [...s] }), (e = s[0]), (r = s[1]);
        break;
      case "t":
        (e += s[0]), (r += s[1]), n.push({ key: "T", data: [e, r] });
        break;
      case "Z":
      case "z":
        n.push({ key: "Z", data: [] }), (e = i), (r = o);
    }
  return n;
}
function b(t) {
  const e = [];
  let r = "",
    i = 0,
    o = 0,
    n = 0,
    a = 0,
    s = 0,
    l = 0;
  for (const { key: h, data: c } of t) {
    switch (h) {
      case "M":
        e.push({ key: "M", data: [...c] }), ([i, o] = c), ([n, a] = c);
        break;
      case "C":
        e.push({ key: "C", data: [...c] }),
          (i = c[4]),
          (o = c[5]),
          (s = c[2]),
          (l = c[3]);
        break;
      case "L":
        e.push({ key: "L", data: [...c] }), ([i, o] = c);
        break;
      case "H":
        (i = c[0]), e.push({ key: "L", data: [i, o] });
        break;
      case "V":
        (o = c[0]), e.push({ key: "L", data: [i, o] });
        break;
      case "S": {
        let t = 0,
          n = 0;
        "C" === r || "S" === r
          ? ((t = i + (i - s)), (n = o + (o - l)))
          : ((t = i), (n = o)),
          e.push({ key: "C", data: [t, n, ...c] }),
          (s = c[0]),
          (l = c[1]),
          (i = c[2]),
          (o = c[3]);
        break;
      }
      case "T": {
        const [t, n] = c;
        let a = 0,
          h = 0;
        "Q" === r || "T" === r
          ? ((a = i + (i - s)), (h = o + (o - l)))
          : ((a = i), (h = o));
        const d = i + (2 * (a - i)) / 3,
          u = o + (2 * (h - o)) / 3,
          p = t + (2 * (a - t)) / 3,
          g = n + (2 * (h - n)) / 3;
        e.push({ key: "C", data: [d, u, p, g, t, n] }),
          (s = a),
          (l = h),
          (i = t),
          (o = n);
        break;
      }
      case "Q": {
        const [t, r, n, a] = c,
          h = i + (2 * (t - i)) / 3,
          d = o + (2 * (r - o)) / 3,
          u = n + (2 * (t - n)) / 3,
          p = a + (2 * (r - a)) / 3;
        e.push({ key: "C", data: [h, d, u, p, n, a] }),
          (s = t),
          (l = r),
          (i = n),
          (o = a);
        break;
      }
      case "A": {
        const t = Math.abs(c[0]),
          r = Math.abs(c[1]),
          n = c[2],
          a = c[3],
          s = c[4],
          l = c[5],
          h = c[6];
        0 === t || 0 === r
          ? (e.push({ key: "C", data: [i, o, l, h, l, h] }), (i = l), (o = h))
          : (i === l && o === h) ||
            (w(i, o, l, h, t, r, n, a, s).forEach(function (t) {
              e.push({ key: "C", data: t });
            }),
            (i = l),
            (o = h));
        break;
      }
      case "Z":
        e.push({ key: "Z", data: [] }), (i = n), (o = a);
    }
    r = h;
  }
  return e;
}
function k(t, e, r) {
  return [t * Math.cos(r) - e * Math.sin(r), t * Math.sin(r) + e * Math.cos(r)];
}
function w(t, e, r, i, o, n, a, s, l, h) {
  const c = ((d = a), (Math.PI * d) / 180);
  var d;
  let u = [],
    p = 0,
    g = 0,
    f = 0,
    y = 0;
  if (h) [p, g, f, y] = h;
  else {
    ([t, e] = k(t, e, -c)), ([r, i] = k(r, i, -c));
    const a = (t - r) / 2,
      h = (e - i) / 2;
    let d = (a * a) / (o * o) + (h * h) / (n * n);
    d > 1 && ((d = Math.sqrt(d)), (o *= d), (n *= d));
    const u = o * o,
      m = n * n,
      x = u * m - u * h * h - m * a * a,
      C = u * h * h + m * a * a,
      b = (s === l ? -1 : 1) * Math.sqrt(Math.abs(x / C));
    (f = (b * o * h) / n + (t + r) / 2),
      (y = (b * -n * a) / o + (e + i) / 2),
      (p = Math.asin(parseFloat(((e - y) / n).toFixed(9)))),
      (g = Math.asin(parseFloat(((i - y) / n).toFixed(9)))),
      t < f && (p = Math.PI - p),
      r < f && (g = Math.PI - g),
      p < 0 && (p = 2 * Math.PI + p),
      g < 0 && (g = 2 * Math.PI + g),
      l && p > g && (p -= 2 * Math.PI),
      !l && g > p && (g -= 2 * Math.PI);
  }
  let m = g - p;
  if (Math.abs(m) > (120 * Math.PI) / 180) {
    const t = g,
      e = r,
      s = i;
    (g =
      l && g > p
        ? p + ((120 * Math.PI) / 180) * 1
        : p + ((120 * Math.PI) / 180) * -1),
      (u = w(
        (r = f + o * Math.cos(g)),
        (i = y + n * Math.sin(g)),
        e,
        s,
        o,
        n,
        a,
        0,
        l,
        [g, t, f, y],
      ));
  }
  m = g - p;
  const x = Math.cos(p),
    C = Math.sin(p),
    b = Math.cos(g),
    S = Math.sin(g),
    T = Math.tan(m / 4),
    B = (4 / 3) * o * T,
    v = (4 / 3) * n * T,
    _ = [t, e],
    A = [t + B * C, e - v * x],
    F = [r + B * S, i - v * b],
    L = [r, i];
  if (((A[0] = 2 * _[0] - A[0]), (A[1] = 2 * _[1] - A[1]), h))
    return [A, F, L].concat(u);
  {
    u = [A, F, L].concat(u);
    const t = [];
    for (let e = 0; e < u.length; e += 3) {
      const r = k(u[e][0], u[e][1], c),
        i = k(u[e + 1][0], u[e + 1][1], c),
        o = k(u[e + 2][0], u[e + 2][1], c);
      t.push([r[0], r[1], i[0], i[1], o[0], o[1]]);
    }
    return t;
  }
}
const S = {
  randOffset: function (t, e) {
    return I(t, e);
  },
  randOffsetWithRange: function (t, e, r) {
    return D(t, e, r);
  },
  ellipse: function (t, e, r, i, o) {
    return A(t, e, o, _(r, i, o)).opset;
  },
  doubleLineOps: function (t, e, r, i, o) {
    return K(t, e, r, i, o, !0);
  },
};
function T(t, e, r, i, o) {
  return { type: "path", ops: K(t, e, r, i, o) };
}
function B(t, e, r) {
  const i = (t || []).length;
  if (i > 2) {
    const o = [];
    for (let e = 0; e < i - 1; e++)
      o.push(...K(t[e][0], t[e][1], t[e + 1][0], t[e + 1][1], r));
    return (
      e && o.push(...K(t[i - 1][0], t[i - 1][1], t[0][0], t[0][1], r)),
      { type: "path", ops: o }
    );
  }
  return 2 === i
    ? T(t[0][0], t[0][1], t[1][0], t[1][1], r)
    : { type: "path", ops: [] };
}
function v(t, e) {
  if (t.length) {
    const r = "number" == typeof t[0][0] ? [t] : t,
      i = P(r[0], 1 * (1 + 0.2 * e.roughness), e),
      o = e.disableMultiStroke
        ? []
        : P(r[0], 1.5 * (1 + 0.22 * e.roughness), E(e));
    for (let t = 1; t < r.length; t++) {
      const n = r[t];
      if (n.length) {
        const t = P(n, 1 * (1 + 0.2 * e.roughness), e),
          r = e.disableMultiStroke
            ? []
            : P(n, 1.5 * (1 + 0.22 * e.roughness), E(e));
        for (const e of t) "move" !== e.op && i.push(e);
        for (const t of r) "move" !== t.op && o.push(t);
      }
    }
    return { type: "path", ops: i.concat(o) };
  }
  return { type: "path", ops: [] };
}
function _(t, e, r) {
  const i = Math.sqrt(
      2 * Math.PI * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2),
    ),
    o = Math.ceil(
      Math.max(r.curveStepCount, (r.curveStepCount / Math.sqrt(200)) * i),
    ),
    n = (2 * Math.PI) / o;
  let a = Math.abs(t / 2),
    s = Math.abs(e / 2);
  const l = 1 - r.curveFitting;
  return (a += I(a * l, r)), (s += I(s * l, r)), { increment: n, rx: a, ry: s };
}
function A(t, e, r, i) {
  const [o, n] = z(
    i.increment,
    t,
    e,
    i.rx,
    i.ry,
    1,
    i.increment * D(0.1, D(0.4, 1, r), r),
    r,
  );
  let a = R(o, null, r);
  if (!r.disableMultiStroke && 0 !== r.roughness) {
    const [o] = z(i.increment, t, e, i.rx, i.ry, 1.5, 0, r),
      n = R(o, null, r);
    a = a.concat(n);
  }
  return { estimatedPoints: n, opset: { type: "path", ops: a } };
}
function F(t, e, r, i, o, n, a, s, l) {
  const h = t,
    c = e;
  let d = Math.abs(r / 2),
    u = Math.abs(i / 2);
  (d += I(0.01 * d, l)), (u += I(0.01 * u, l));
  let p = o,
    g = n;
  for (; p < 0; ) (p += 2 * Math.PI), (g += 2 * Math.PI);
  g - p > 2 * Math.PI && ((p = 0), (g = 2 * Math.PI));
  const f = (2 * Math.PI) / l.curveStepCount,
    y = Math.min(f / 2, (g - p) / 2),
    m = N(y, h, c, d, u, p, g, 1, l);
  if (!l.disableMultiStroke) {
    const t = N(y, h, c, d, u, p, g, 1.5, l);
    m.push(...t);
  }
  return (
    a &&
      (s
        ? m.push(
            ...K(h, c, h + d * Math.cos(p), c + u * Math.sin(p), l),
            ...K(h, c, h + d * Math.cos(g), c + u * Math.sin(g), l),
          )
        : m.push(
            { op: "lineTo", data: [h, c] },
            {
              op: "lineTo",
              data: [h + d * Math.cos(p), c + u * Math.sin(p)],
            },
          )),
    { type: "path", ops: m }
  );
}
function L(t, e) {
  const r = b(C(x(t))),
    i = [];
  let o = [0, 0],
    n = [0, 0];
  for (const { key: t, data: a } of r)
    switch (t) {
      case "M":
        (n = [a[0], a[1]]), (o = [a[0], a[1]]);
        break;
      case "L":
        i.push(...K(n[0], n[1], a[0], a[1], e)), (n = [a[0], a[1]]);
        break;
      case "C": {
        const [t, r, o, s, l, h] = a;
        i.push(...W(t, r, o, s, l, h, n, e)), (n = [l, h]);
        break;
      }
      case "Z":
        i.push(...K(n[0], n[1], o[0], o[1], e)), (n = [o[0], o[1]]);
    }
  return { type: "path", ops: i };
}
function M(t, e) {
  const r = [];
  for (const i of t)
    if (i.length) {
      const t = e.maxRandomnessOffset || 0,
        o = i.length;
      if (o > 2) {
        r.push({
          op: "move",
          data: [i[0][0] + I(t, e), i[0][1] + I(t, e)],
        });
        for (let n = 1; n < o; n++)
          r.push({
            op: "lineTo",
            data: [i[n][0] + I(t, e), i[n][1] + I(t, e)],
          });
      }
    }
  return { type: "fillPath", ops: r };
}
function $(t, e) {
  return (function (t, e) {
    let r = t.fillStyle || "hachure";
    if (!g[r])
      switch (r) {
        case "zigzag":
          g[r] || (g[r] = new h(e));
          break;
        case "cross-hatch":
          g[r] || (g[r] = new c(e));
          break;
        case "dots":
          g[r] || (g[r] = new d(e));
          break;
        case "dashed":
          g[r] || (g[r] = new u(e));
          break;
        case "zigzag-line":
          g[r] || (g[r] = new p(e));
          break;
        default:
          (r = "hachure"), g[r] || (g[r] = new s(e));
      }
    return g[r];
  })(e, S).fillPolygons(t, e);
}
function E(t) {
  const e = Object.assign({}, t);
  return (e.randomizer = void 0), t.seed && (e.seed = t.seed + 1), e;
}
function O(t) {
  return (
    t.randomizer || (t.randomizer = new f(t.seed || 0)), t.randomizer.next()
  );
}
function D(t, e, r, i = 1) {
  return r.roughness * i * (O(r) * (e - t) + t);
}
function I(t, e, r = 1) {
  return D(-t, t, e, r);
}
function K(t, e, r, i, o, n = !1) {
  const a = n ? o.disableMultiStrokeFill : o.disableMultiStroke,
    s = q(t, e, r, i, o, !0, !1);
  if (a) return s;
  const l = q(t, e, r, i, o, !0, !0);
  return s.concat(l);
}
function q(t, e, r, i, o, n, a) {
  const s = Math.pow(t - r, 2) + Math.pow(e - i, 2),
    l = Math.sqrt(s);
  let h = 1;
  h = l < 200 ? 1 : l > 500 ? 0.4 : -0.0016668 * l + 1.233334;
  let c = o.maxRandomnessOffset || 0;
  c * c * 100 > s && (c = l / 10);
  const d = c / 2,
    u = 0.2 + 0.2 * O(o);
  let p = (o.bowing * o.maxRandomnessOffset * (i - e)) / 200,
    g = (o.bowing * o.maxRandomnessOffset * (t - r)) / 200;
  (p = I(p, o, h)), (g = I(g, o, h));
  const f = [],
    y = () => I(d, o, h),
    m = () => I(c, o, h),
    x = o.preserveVertices;
  return (
    n &&
      (a
        ? f.push({
            op: "move",
            data: [t + (x ? 0 : y()), e + (x ? 0 : y())],
          })
        : f.push({
            op: "move",
            data: [t + (x ? 0 : I(c, o, h)), e + (x ? 0 : I(c, o, h))],
          })),
    a
      ? f.push({
          op: "bcurveTo",
          data: [
            p + t + (r - t) * u + y(),
            g + e + (i - e) * u + y(),
            p + t + 2 * (r - t) * u + y(),
            g + e + 2 * (i - e) * u + y(),
            r + (x ? 0 : y()),
            i + (x ? 0 : y()),
          ],
        })
      : f.push({
          op: "bcurveTo",
          data: [
            p + t + (r - t) * u + m(),
            g + e + (i - e) * u + m(),
            p + t + 2 * (r - t) * u + m(),
            g + e + 2 * (i - e) * u + m(),
            r + (x ? 0 : m()),
            i + (x ? 0 : m()),
          ],
        }),
    f
  );
}
function P(t, e, r) {
  if (!t.length) return [];
  const i = [];
  i.push([t[0][0] + I(e, r), t[0][1] + I(e, r)]),
    i.push([t[0][0] + I(e, r), t[0][1] + I(e, r)]);
  for (let o = 1; o < t.length; o++)
    i.push([t[o][0] + I(e, r), t[o][1] + I(e, r)]),
      o === t.length - 1 && i.push([t[o][0] + I(e, r), t[o][1] + I(e, r)]);
  return R(i, null, r);
}
function R(t, e, r) {
  const i = t.length,
    o = [];
  if (i > 3) {
    const n = [],
      a = 1 - r.curveTightness;
    o.push({ op: "move", data: [t[1][0], t[1][1]] });
    for (let e = 1; e + 2 < i; e++) {
      const r = t[e];
      (n[0] = [r[0], r[1]]),
        (n[1] = [
          r[0] + (a * t[e + 1][0] - a * t[e - 1][0]) / 6,
          r[1] + (a * t[e + 1][1] - a * t[e - 1][1]) / 6,
        ]),
        (n[2] = [
          t[e + 1][0] + (a * t[e][0] - a * t[e + 2][0]) / 6,
          t[e + 1][1] + (a * t[e][1] - a * t[e + 2][1]) / 6,
        ]),
        (n[3] = [t[e + 1][0], t[e + 1][1]]),
        o.push({
          op: "bcurveTo",
          data: [n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]],
        });
    }
    if (e && 2 === e.length) {
      const t = r.maxRandomnessOffset;
      o.push({ op: "lineTo", data: [e[0] + I(t, r), e[1] + I(t, r)] });
    }
  } else
    3 === i
      ? (o.push({ op: "move", data: [t[1][0], t[1][1]] }),
        o.push({
          op: "bcurveTo",
          data: [t[1][0], t[1][1], t[2][0], t[2][1], t[2][0], t[2][1]],
        }))
      : 2 === i && o.push(...q(t[0][0], t[0][1], t[1][0], t[1][1], r, !0, !0));
  return o;
}
function z(t, e, r, i, o, n, a, s) {
  const l = [],
    h = [];
  if (0 === s.roughness) {
    (t /= 4), h.push([e + i * Math.cos(-t), r + o * Math.sin(-t)]);
    for (let n = 0; n <= 2 * Math.PI; n += t) {
      const t = [e + i * Math.cos(n), r + o * Math.sin(n)];
      l.push(t), h.push(t);
    }
    h.push([e + i * Math.cos(0), r + o * Math.sin(0)]),
      h.push([e + i * Math.cos(t), r + o * Math.sin(t)]);
  } else {
    const c = I(0.5, s) - Math.PI / 2;
    h.push([
      I(n, s) + e + 0.9 * i * Math.cos(c - t),
      I(n, s) + r + 0.9 * o * Math.sin(c - t),
    ]);
    const d = 2 * Math.PI + c - 0.01;
    for (let a = c; a < d; a += t) {
      const t = [I(n, s) + e + i * Math.cos(a), I(n, s) + r + o * Math.sin(a)];
      l.push(t), h.push(t);
    }
    h.push([
      I(n, s) + e + i * Math.cos(c + 2 * Math.PI + 0.5 * a),
      I(n, s) + r + o * Math.sin(c + 2 * Math.PI + 0.5 * a),
    ]),
      h.push([
        I(n, s) + e + 0.98 * i * Math.cos(c + a),
        I(n, s) + r + 0.98 * o * Math.sin(c + a),
      ]),
      h.push([
        I(n, s) + e + 0.9 * i * Math.cos(c + 0.5 * a),
        I(n, s) + r + 0.9 * o * Math.sin(c + 0.5 * a),
      ]);
  }
  return [h, l];
}
function N(t, e, r, i, o, n, a, s, l) {
  const h = n + I(0.1, l),
    c = [];
  c.push([
    I(s, l) + e + 0.9 * i * Math.cos(h - t),
    I(s, l) + r + 0.9 * o * Math.sin(h - t),
  ]);
  for (let n = h; n <= a; n += t)
    c.push([I(s, l) + e + i * Math.cos(n), I(s, l) + r + o * Math.sin(n)]);
  return (
    c.push([e + i * Math.cos(a), r + o * Math.sin(a)]),
    c.push([e + i * Math.cos(a), r + o * Math.sin(a)]),
    R(c, null, l)
  );
}
function W(t, e, r, i, o, n, a, s) {
  const l = [],
    h = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + 0.3];
  let c = [0, 0];
  const d = s.disableMultiStroke ? 1 : 2,
    u = s.preserveVertices;
  for (let p = 0; p < d; p++)
    0 === p
      ? l.push({ op: "move", data: [a[0], a[1]] })
      : l.push({
          op: "move",
          data: [a[0] + (u ? 0 : I(h[0], s)), a[1] + (u ? 0 : I(h[0], s))],
        }),
      (c = u ? [o, n] : [o + I(h[p], s), n + I(h[p], s)]),
      l.push({
        op: "bcurveTo",
        data: [
          t + I(h[p], s),
          e + I(h[p], s),
          r + I(h[p], s),
          i + I(h[p], s),
          c[0],
          c[1],
        ],
      });
  return l;
}
function j(t) {
  return [...t];
}
function H(t, e = 0) {
  const r = t.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (3 === r) i.push(j(t[0]), j(t[1]), j(t[2]), j(t[2]));
  else {
    const r = [];
    r.push(t[0], t[0]);
    for (let e = 1; e < t.length; e++)
      r.push(t[e]), e === t.length - 1 && r.push(t[e]);
    const o = [],
      n = 1 - e;
    i.push(j(r[0]));
    for (let t = 1; t + 2 < r.length; t++) {
      const e = r[t];
      (o[0] = [e[0], e[1]]),
        (o[1] = [
          e[0] + (n * r[t + 1][0] - n * r[t - 1][0]) / 6,
          e[1] + (n * r[t + 1][1] - n * r[t - 1][1]) / 6,
        ]),
        (o[2] = [
          r[t + 1][0] + (n * r[t][0] - n * r[t + 2][0]) / 6,
          r[t + 1][1] + (n * r[t][1] - n * r[t + 2][1]) / 6,
        ]),
        (o[3] = [r[t + 1][0], r[t + 1][1]]),
        i.push(o[1], o[2], o[3]);
    }
  }
  return i;
}
function U(t, e) {
  return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2);
}
function Y(t, e, r) {
  const i = U(e, r);
  if (0 === i) return U(t, e);
  let o = ((t[0] - e[0]) * (r[0] - e[0]) + (t[1] - e[1]) * (r[1] - e[1])) / i;
  return (o = Math.max(0, Math.min(1, o))), U(t, G(e, r, o));
}
function G(t, e, r) {
  return [t[0] + (e[0] - t[0]) * r, t[1] + (e[1] - t[1]) * r];
}
function X(t, e, r, i) {
  const o = i || [];
  if (
    (function (t, e) {
      const r = t[e + 0],
        i = t[e + 1],
        o = t[e + 2],
        n = t[e + 3];
      let a = 3 * i[0] - 2 * r[0] - n[0];
      a *= a;
      let s = 3 * i[1] - 2 * r[1] - n[1];
      s *= s;
      let l = 3 * o[0] - 2 * n[0] - r[0];
      l *= l;
      let h = 3 * o[1] - 2 * n[1] - r[1];
      return (h *= h), a < l && (a = l), s < h && (s = h), a + s;
    })(t, e) < r
  ) {
    const r = t[e + 0];
    o.length
      ? ((n = o[o.length - 1]), (a = r), Math.sqrt(U(n, a)) > 1 && o.push(r))
      : o.push(r),
      o.push(t[e + 3]);
  } else {
    const i = 0.5,
      n = t[e + 0],
      a = t[e + 1],
      s = t[e + 2],
      l = t[e + 3],
      h = G(n, a, i),
      c = G(a, s, i),
      d = G(s, l, i),
      u = G(h, c, i),
      p = G(c, d, i),
      g = G(u, p, i);
    X([n, h, u, g], 0, r, o), X([g, p, d, l], 0, r, o);
  }
  var n, a;
  return o;
}
function V(t, e) {
  return Z(t, 0, t.length, e);
}
function Z(t, e, r, i, o) {
  const n = o || [],
    a = t[e],
    s = t[r - 1];
  let l = 0,
    h = 1;
  for (let i = e + 1; i < r - 1; ++i) {
    const e = Y(t[i], a, s);
    e > l && ((l = e), (h = i));
  }
  return (
    Math.sqrt(l) > i
      ? (Z(t, e, h + 1, i, n), Z(t, h, r, i, n))
      : (n.length || n.push(a), n.push(s)),
    n
  );
}
function Q(t, e = 0.15, r) {
  const i = [],
    o = (t.length - 1) / 3;
  for (let r = 0; r < o; r++) X(t, 3 * r, e, i);
  return r && r > 0 ? Z(i, 0, i.length, r) : i;
}
const J = "none";
class tt {
  constructor(t) {
    (this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: "#000",
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: "hachure",
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: !1,
      disableMultiStrokeFill: !1,
      preserveVertices: !1,
      fillShapeRoughnessGain: 0.8,
    }),
      (this.config = t || {}),
      this.config.options &&
        (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, e, r) {
    return { shape: t, sets: e || [], options: r || this.defaultOptions };
  }
  line(t, e, r, i, o) {
    const n = this._o(o);
    return this._d("line", [T(t, e, r, i, n)], n);
  }
  rectangle(t, e, r, i, o) {
    const n = this._o(o),
      a = [],
      s = (function (t, e, r, i, o) {
        return (function (t, e) {
          return B(t, !0, e);
        })(
          [
            [t, e],
            [t + r, e],
            [t + r, e + i],
            [t, e + i],
          ],
          o,
        );
      })(t, e, r, i, n);
    if (n.fill) {
      const o = [
        [t, e],
        [t + r, e],
        [t + r, e + i],
        [t, e + i],
      ];
      "solid" === n.fillStyle ? a.push(M([o], n)) : a.push($([o], n));
    }
    return n.stroke !== J && a.push(s), this._d("rectangle", a, n);
  }
  ellipse(t, e, r, i, o) {
    const n = this._o(o),
      a = [],
      s = _(r, i, n),
      l = A(t, e, n, s);
    if (n.fill)
      if ("solid" === n.fillStyle) {
        const r = A(t, e, n, s).opset;
        (r.type = "fillPath"), a.push(r);
      } else a.push($([l.estimatedPoints], n));
    return n.stroke !== J && a.push(l.opset), this._d("ellipse", a, n);
  }
  circle(t, e, r, i) {
    const o = this.ellipse(t, e, r, r, i);
    return (o.shape = "circle"), o;
  }
  linearPath(t, e) {
    const r = this._o(e);
    return this._d("linearPath", [B(t, !1, r)], r);
  }
  arc(t, e, r, i, o, n, a = !1, s) {
    const l = this._o(s),
      h = [],
      c = F(t, e, r, i, o, n, a, !0, l);
    if (a && l.fill)
      if ("solid" === l.fillStyle) {
        const a = Object.assign({}, l);
        a.disableMultiStroke = !0;
        const s = F(t, e, r, i, o, n, !0, !1, a);
        (s.type = "fillPath"), h.push(s);
      } else
        h.push(
          (function (t, e, r, i, o, n, a) {
            const s = t,
              l = e;
            let h = Math.abs(r / 2),
              c = Math.abs(i / 2);
            (h += I(0.01 * h, a)), (c += I(0.01 * c, a));
            let d = o,
              u = n;
            for (; d < 0; ) (d += 2 * Math.PI), (u += 2 * Math.PI);
            u - d > 2 * Math.PI && ((d = 0), (u = 2 * Math.PI));
            const p = (u - d) / a.curveStepCount,
              g = [];
            for (let t = d; t <= u; t += p)
              g.push([s + h * Math.cos(t), l + c * Math.sin(t)]);
            return (
              g.push([s + h * Math.cos(u), l + c * Math.sin(u)]),
              g.push([s, l]),
              $([g], a)
            );
          })(t, e, r, i, o, n, l),
        );
    return l.stroke !== J && h.push(c), this._d("arc", h, l);
  }
  curve(t, e) {
    const r = this._o(e),
      i = [],
      o = v(t, r);
    if (r.fill && r.fill !== J)
      if ("solid" === r.fillStyle) {
        const e = v(
          t,
          Object.assign(Object.assign({}, r), {
            disableMultiStroke: !0,
            roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0,
          }),
        );
        i.push({ type: "fillPath", ops: this._mergedShape(e.ops) });
      } else {
        const e = [],
          o = t;
        if (o.length) {
          const t = "number" == typeof o[0][0] ? [o] : o;
          for (const i of t)
            i.length < 3
              ? e.push(...i)
              : 3 === i.length
                ? e.push(
                    ...Q(
                      H([i[0], i[0], i[1], i[2]]),
                      10,
                      (1 + r.roughness) / 2,
                    ),
                  )
                : e.push(...Q(H(i), 10, (1 + r.roughness) / 2));
        }
        e.length && i.push($([e], r));
      }
    return r.stroke !== J && i.push(o), this._d("curve", i, r);
  }
  polygon(t, e) {
    const r = this._o(e),
      i = [],
      o = B(t, !0, r);
    return (
      r.fill &&
        ("solid" === r.fillStyle ? i.push(M([t], r)) : i.push($([t], r))),
      r.stroke !== J && i.push(o),
      this._d("polygon", i, r)
    );
  }
  path(t, e) {
    const r = this._o(e),
      i = [];
    if (!t) return this._d("path", i, r);
    t = (t || "")
      .replace(/\n/g, " ")
      .replace(/(-\s)/g, "-")
      .replace("/(ss)/g", " ");
    const o = r.fill && "transparent" !== r.fill && r.fill !== J,
      n = r.stroke !== J,
      a = !!(r.simplification && r.simplification < 1),
      s = (function (t, e, r) {
        const i = b(C(x(t))),
          o = [];
        let n = [],
          a = [0, 0],
          s = [];
        const l = () => {
            s.length >= 4 && n.push(...Q(s, 1)), (s = []);
          },
          h = () => {
            l(), n.length && (o.push(n), (n = []));
          };
        for (const { key: t, data: e } of i)
          switch (t) {
            case "M":
              h(), (a = [e[0], e[1]]), n.push(a);
              break;
            case "L":
              l(), n.push([e[0], e[1]]);
              break;
            case "C":
              if (!s.length) {
                const t = n.length ? n[n.length - 1] : a;
                s.push([t[0], t[1]]);
              }
              s.push([e[0], e[1]]), s.push([e[2], e[3]]), s.push([e[4], e[5]]);
              break;
            case "Z":
              l(), n.push([a[0], a[1]]);
          }
        if ((h(), !r)) return o;
        const c = [];
        for (const t of o) {
          const e = V(t, r);
          e.length && c.push(e);
        }
        return c;
      })(t, 0, a ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2),
      l = L(t, r);
    if (o)
      if ("solid" === r.fillStyle)
        if (1 === s.length) {
          const e = L(
            t,
            Object.assign(Object.assign({}, r), {
              disableMultiStroke: !0,
              roughness: r.roughness
                ? r.roughness + r.fillShapeRoughnessGain
                : 0,
            }),
          );
          i.push({ type: "fillPath", ops: this._mergedShape(e.ops) });
        } else i.push(M(s, r));
      else i.push($(s, r));
    return (
      n &&
        (a
          ? s.forEach((t) => {
              i.push(B(t, !1, r));
            })
          : i.push(l)),
      this._d("path", i, r)
    );
  }
  opsToPath(t, e) {
    let r = "";
    for (const i of t.ops) {
      const t =
        "number" == typeof e && e >= 0
          ? i.data.map((t) => +t.toFixed(e))
          : i.data;
      switch (i.op) {
        case "move":
          r += `M${t[0]} ${t[1]} `;
          break;
        case "bcurveTo":
          r += `C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;
          break;
        case "lineTo":
          r += `L${t[0]} ${t[1]} `;
      }
    }
    return r.trim();
  }
  toPaths(t) {
    const e = t.sets || [],
      r = t.options || this.defaultOptions,
      i = [];
    for (const t of e) {
      let e = null;
      switch (t.type) {
        case "path":
          e = {
            d: this.opsToPath(t),
            stroke: r.stroke,
            strokeWidth: r.strokeWidth,
            fill: J,
          };
          break;
        case "fillPath":
          e = {
            d: this.opsToPath(t),
            stroke: J,
            strokeWidth: 0,
            fill: r.fill || J,
          };
          break;
        case "fillSketch":
          e = this.fillSketch(t, r);
      }
      e && i.push(e);
    }
    return i;
  }
  fillSketch(t, e) {
    let r = e.fillWeight;
    return (
      r < 0 && (r = e.strokeWidth / 2),
      {
        d: this.opsToPath(t),
        stroke: e.fill || J,
        strokeWidth: r,
        fill: J,
      }
    );
  }
  _mergedShape(t) {
    return t.filter((t, e) => 0 === e || "move" !== t.op);
  }
}
class et {
  constructor(t, e) {
    (this.canvas = t),
      (this.ctx = this.canvas.getContext("2d")),
      (this.gen = new tt(e));
  }
  draw(t) {
    const e = t.sets || [],
      r = t.options || this.getDefaultOptions(),
      i = this.ctx,
      o = t.options.fixedDecimalPlaceDigits;
    for (const n of e)
      switch (n.type) {
        case "path":
          i.save(),
            (i.strokeStyle = "none" === r.stroke ? "transparent" : r.stroke),
            (i.lineWidth = r.strokeWidth),
            r.strokeLineDash && i.setLineDash(r.strokeLineDash),
            r.strokeLineDashOffset &&
              (i.lineDashOffset = r.strokeLineDashOffset),
            this._drawToContext(i, n, o),
            i.restore();
          break;
        case "fillPath": {
          i.save(), (i.fillStyle = r.fill || "");
          const e =
            "curve" === t.shape || "polygon" === t.shape || "path" === t.shape
              ? "evenodd"
              : "nonzero";
          this._drawToContext(i, n, o, e), i.restore();
          break;
        }
        case "fillSketch":
          this.fillSketch(i, n, r);
      }
  }
  fillSketch(t, e, r) {
    let i = r.fillWeight;
    i < 0 && (i = r.strokeWidth / 2),
      t.save(),
      r.fillLineDash && t.setLineDash(r.fillLineDash),
      r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset),
      (t.strokeStyle = r.fill || ""),
      (t.lineWidth = i),
      this._drawToContext(t, e, r.fixedDecimalPlaceDigits),
      t.restore();
  }
  _drawToContext(t, e, r, i = "nonzero") {
    t.beginPath();
    for (const i of e.ops) {
      const e =
        "number" == typeof r && r >= 0
          ? i.data.map((t) => +t.toFixed(r))
          : i.data;
      switch (i.op) {
        case "move":
          t.moveTo(e[0], e[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
          break;
        case "lineTo":
          t.lineTo(e[0], e[1]);
      }
    }
    "fillPath" === e.type ? t.fill(i) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, e, r, i, o) {
    const n = this.gen.line(t, e, r, i, o);
    return this.draw(n), n;
  }
  rectangle(t, e, r, i, o) {
    const n = this.gen.rectangle(t, e, r, i, o);
    return this.draw(n), n;
  }
  ellipse(t, e, r, i, o) {
    const n = this.gen.ellipse(t, e, r, i, o);
    return this.draw(n), n;
  }
  circle(t, e, r, i) {
    const o = this.gen.circle(t, e, r, i);
    return this.draw(o), o;
  }
  linearPath(t, e) {
    const r = this.gen.linearPath(t, e);
    return this.draw(r), r;
  }
  polygon(t, e) {
    const r = this.gen.polygon(t, e);
    return this.draw(r), r;
  }
  arc(t, e, r, i, o, n, a = !1, s) {
    const l = this.gen.arc(t, e, r, i, o, n, a, s);
    return this.draw(l), l;
  }
  curve(t, e) {
    const r = this.gen.curve(t, e);
    return this.draw(r), r;
  }
  path(t, e) {
    const r = this.gen.path(t, e);
    return this.draw(r), r;
  }
}
const rt = "http://www.w3.org/2000/svg";
class it {
  constructor(t, e) {
    (this.svg = t), (this.gen = new tt(e));
  }
  draw(t) {
    const e = t.sets || [],
      r = t.options || this.getDefaultOptions(),
      i = this.svg.ownerDocument || window.document,
      o = i.createElementNS(rt, "g"),
      n = t.options.fixedDecimalPlaceDigits;
    for (const a of e) {
      let e = null;
      switch (a.type) {
        case "path":
          (e = i.createElementNS(rt, "path")),
            e.setAttribute("d", this.opsToPath(a, n)),
            e.setAttribute("stroke", r.stroke),
            e.setAttribute("stroke-width", r.strokeWidth + ""),
            e.setAttribute("fill", "none"),
            r.strokeLineDash &&
              e.setAttribute(
                "stroke-dasharray",
                r.strokeLineDash.join(" ").trim(),
              ),
            r.strokeLineDashOffset &&
              e.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          (e = i.createElementNS(rt, "path")),
            e.setAttribute("d", this.opsToPath(a, n)),
            e.setAttribute("stroke", "none"),
            e.setAttribute("stroke-width", "0"),
            e.setAttribute("fill", r.fill || ""),
            ("curve" !== t.shape && "polygon" !== t.shape) ||
              e.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          e = this.fillSketch(i, a, r);
      }
      e && o.appendChild(e);
    }
    return o;
  }
  fillSketch(t, e, r) {
    let i = r.fillWeight;
    i < 0 && (i = r.strokeWidth / 2);
    const o = t.createElementNS(rt, "path");
    return (
      o.setAttribute("d", this.opsToPath(e, r.fixedDecimalPlaceDigits)),
      o.setAttribute("stroke", r.fill || ""),
      o.setAttribute("stroke-width", i + ""),
      o.setAttribute("fill", "none"),
      r.fillLineDash &&
        o.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()),
      r.fillLineDashOffset &&
        o.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`),
      o
    );
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, e) {
    return this.gen.opsToPath(t, e);
  }
  line(t, e, r, i, o) {
    const n = this.gen.line(t, e, r, i, o);
    return this.draw(n);
  }
  rectangle(t, e, r, i, o) {
    const n = this.gen.rectangle(t, e, r, i, o);
    return this.draw(n);
  }
  ellipse(t, e, r, i, o) {
    const n = this.gen.ellipse(t, e, r, i, o);
    return this.draw(n);
  }
  circle(t, e, r, i) {
    const o = this.gen.circle(t, e, r, i);
    return this.draw(o);
  }
  linearPath(t, e) {
    const r = this.gen.linearPath(t, e);
    return this.draw(r);
  }
  polygon(t, e) {
    const r = this.gen.polygon(t, e);
    return this.draw(r);
  }
  arc(t, e, r, i, o, n, a = !1, s) {
    const l = this.gen.arc(t, e, r, i, o, n, a, s);
    return this.draw(l);
  }
  curve(t, e) {
    const r = this.gen.curve(t, e);
    return this.draw(r);
  }
  path(t, e) {
    const r = this.gen.path(t, e);
    return this.draw(r);
  }
}
var ot = {
  canvas: (t, e) => new et(t, e),
  svg: (t, e) => new it(t, e),
  generator: (t) => new tt(t),
  newSeed: () => tt.newSeed(),
};

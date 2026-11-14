// vendor/module-72514.js — webpack module 72514
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  pe: () => _,
  PX: () => rt,
  ru: () => J,
  Un: () => tt,
  $t: () => ht,
  Sm: () => ut,
  C4: () => dt,
  $C: () => U,
  rY: () => pt,
  u1: () => at,
  sM: () => j,
  KL: () => gt,
  Ib: () => O,
  dq: () => nt,
  I5: () => lt,
  yT: () => G,
  vU: () => $,
  _K: () => ct,
  bH: () => Z,
});
var i = r(8679 /* vendor/module-8679 */),
  o = r(27166 /* vendor/module-27166 */),
  n = r(79456 /* vendor/module-79456 */),
  a = r(8041 /* vendor/module-8041 */),
  s = r(27197 /* vendor/module-27197 */);
function l(t, e) {
  if ("function" != typeof t || (null != e && "function" != typeof e))
    throw new TypeError("Expected a function");
  const r = function (...i) {
    const o = e ? e.apply(this, i) : i[0],
      n = r.cache;
    if (n.has(o)) return n.get(o);
    const a = t.apply(this, i);
    return (r.cache = n.set(o, a) || n), a;
  };
  return (r.cache = new (l.Cache || Map)()), r;
}
function h() {}
l.Cache = Map;
var c = r(35349 /* vendor/module-35349 */),
  d = r(56813 /* vendor/module-56813 */);
function u(t) {
  return Object.getOwnPropertySymbols(t).filter((e) =>
    Object.prototype.propertyIsEnumerable.call(t, e),
  );
}
var p = r(721 /* vendor/module-721 */);
function g(t) {
  return "__proto__" === t;
}
function f(t) {
  if ("object" != typeof t) return !1;
  if (null == t) return !1;
  if (null === Object.getPrototypeOf(t)) return !0;
  if ("[object Object]" !== Object.prototype.toString.call(t)) {
    const e = t[Symbol.toStringTag];
    return (
      null != e &&
      !!Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable &&
      t.toString() === `[object ${e}]`
    );
  }
  let e = t;
  for (; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
var y = r(8850 /* vendor/module-8850 */),
  m = r(87125 /* vendor/module-87125 */);
function x(t, e, r, i = new Map(), o = void 0) {
  const n = o?.(t, e, r, i);
  if (void 0 !== n) return n;
  if ((0, c.s)(t)) return t;
  if (i.has(t)) return i.get(t);
  if (Array.isArray(t)) {
    const e = new Array(t.length);
    i.set(t, e);
    for (let n = 0; n < t.length; n++) e[n] = x(t[n], n, r, i, o);
    return (
      Object.hasOwn(t, "index") && (e.index = t.index),
      Object.hasOwn(t, "input") && (e.input = t.input),
      e
    );
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const e = new RegExp(t.source, t.flags);
    return (e.lastIndex = t.lastIndex), e;
  }
  if (t instanceof Map) {
    const e = new Map();
    i.set(t, e);
    for (const [n, a] of t) e.set(n, x(a, n, r, i, o));
    return e;
  }
  if (t instanceof Set) {
    const e = new Set();
    i.set(t, e);
    for (const n of t) e.add(x(n, void 0, r, i, o));
    return e;
  }
  if ((0, p.P)(t)) return t.subarray();
  if ((0, d.i)(t)) {
    const e = new (Object.getPrototypeOf(t).constructor)(t.length);
    i.set(t, e);
    for (let n = 0; n < t.length; n++) e[n] = x(t[n], n, r, i, o);
    return e;
  }
  if (
    t instanceof ArrayBuffer ||
    ("undefined" != typeof SharedArrayBuffer && t instanceof SharedArrayBuffer)
  )
    return t.slice(0);
  if (t instanceof DataView) {
    const e = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if ("undefined" != typeof File && t instanceof File) {
    const e = new File([t], t.name, { type: t.type });
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if ("undefined" != typeof Blob && t instanceof Blob) {
    const e = new Blob([t], { type: t.type });
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if (t instanceof Error) {
    const e = structuredClone(t);
    return (
      i.set(t, e),
      (e.message = t.message),
      (e.name = t.name),
      (e.stack = t.stack),
      (e.cause = t.cause),
      (e.constructor = t.constructor),
      C(e, t, r, i, o),
      e
    );
  }
  if (t instanceof Boolean) {
    const e = new Boolean(t.valueOf());
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if (t instanceof Number) {
    const e = new Number(t.valueOf());
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if (t instanceof String) {
    const e = new String(t.valueOf());
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  if (
    "object" == typeof t &&
    (function (t) {
      switch ((0, y.b)(t)) {
        case m.R_:
        case m.Uw:
        case m.cT:
        case m.iq:
        case m.$V:
        case m.vC:
        case m.ri:
        case m.ML:
        case m.XZ:
        case m.i1:
        case m._u:
        case m.pj:
        case m.kj:
        case m.GX:
        case m.Av:
        case m.NA:
        case m.OG:
        case m.VP:
        case m.Qb:
        case m.q:
        case m.x6:
        case m.ZR:
          return !0;
        default:
          return !1;
      }
    })(t)
  ) {
    const e = Object.create(Object.getPrototypeOf(t));
    return i.set(t, e), C(e, t, r, i, o), e;
  }
  return t;
}
function C(t, e, r = t, i, o) {
  const n = [...Object.keys(e), ...u(e)];
  for (let a = 0; a < n.length; a++) {
    const s = n[a],
      l = Object.getOwnPropertyDescriptor(t, s);
    (null == l || l.writable) && (t[s] = x(e[s], s, r, i, o));
  }
}
function b(t) {
  return (function (t, e) {
    return (function (t, e) {
      return x(t, void 0, t, new Map(), e);
    })(t, (r, i, o, n) => {
      const a = e?.(r, i, o, n);
      if (void 0 !== a) return a;
      if ("object" == typeof t) {
        if (
          "[object Object]" === (0, y.b)(t) &&
          "function" != typeof t.constructor
        ) {
          const e = {};
          return n.set(t, e), C(e, t, o, n), e;
        }
        switch (Object.prototype.toString.call(t)) {
          case m.kj:
          case m.OG:
          case m.$V: {
            const e = new t.constructor(t?.valueOf());
            return C(e, t), e;
          }
          case m.R_: {
            const e = {};
            return (
              C(e, t),
              (e.length = t.length),
              (e[Symbol.iterator] = t[Symbol.iterator]),
              e
            );
          }
          default:
            return;
        }
      }
    });
  })(t);
}
var k = r(52578 /* vendor/module-52578 */);
function w(t) {
  return "object" == typeof t && null !== t;
}
var S = r(8081 /* vendor/module-8081 */);
function T(t) {
  return w(t) && (0, S.X)(t);
}
var B = r(76076 /* vendor/module-76076 */);
function v(t, e, r, i) {
  if (((0, c.s)(t) && (t = Object(t)), null == e || "object" != typeof e))
    return t;
  if (i.has(e))
    return (function (t) {
      if ((0, c.s)(t)) return t;
      if (
        Array.isArray(t) ||
        (0, d.i)(t) ||
        t instanceof ArrayBuffer ||
        ("undefined" != typeof SharedArrayBuffer &&
          t instanceof SharedArrayBuffer)
      )
        return t.slice(0);
      const e = Object.getPrototypeOf(t);
      if (null == e) return Object.assign(Object.create(e), t);
      const r = e.constructor;
      if (t instanceof Date || t instanceof Map || t instanceof Set)
        return new r(t);
      if (t instanceof RegExp) {
        const e = new r(t);
        return (e.lastIndex = t.lastIndex), e;
      }
      if (t instanceof DataView) return new r(t.buffer.slice(0));
      if (t instanceof Error) {
        let e;
        return (
          (e =
            t instanceof AggregateError
              ? new r(t.errors, t.message, { cause: t.cause })
              : new r(t.message, { cause: t.cause })),
          (e.stack = t.stack),
          Object.assign(e, t),
          e
        );
      }
      return "undefined" != typeof File && t instanceof File
        ? new r([t], t.name, {
            type: t.type,
            lastModified: t.lastModified,
          })
        : "object" == typeof t
          ? Object.assign(Object.create(e), t)
          : t;
    })(i.get(e));
  if ((i.set(e, t), Array.isArray(e))) {
    e = e.slice();
    for (let t = 0; t < e.length; t++) e[t] = e[t] ?? void 0;
  }
  const o = [...Object.keys(e), ...u(e)];
  for (let n = 0; n < o.length; n++) {
    const a = o[n];
    if (g(a)) continue;
    let s = e[a],
      l = t[a];
    if (
      ((0, k.N)(s) && (s = { ...s }),
      (0, k.N)(l) && (l = { ...l }),
      (0, p.P)(s) && (s = b(s)),
      Array.isArray(s))
    )
      if (Array.isArray(l)) {
        const t = [],
          e = Reflect.ownKeys(l);
        for (let r = 0; r < e.length; r++) {
          const i = e[r];
          t[i] = l[i];
        }
        l = t;
      } else if (T(l)) {
        const t = [];
        for (let e = 0; e < l.length; e++) t[e] = l[e];
        l = t;
      } else l = [];
    const h = r(l, s, a, t, e, i);
    void 0 !== h
      ? (t[a] = h)
      : Array.isArray(s) ||
          (w(l) && w(s) && (f(l) || f(s) || (0, B.i)(l) || (0, B.i)(s)))
        ? (t[a] = v(l, s, r, i))
        : null == l && f(s)
          ? (t[a] = v({}, s, r, i))
          : null == l && (0, B.i)(s)
            ? (t[a] = b(s))
            : (void 0 !== l && void 0 === s) || (t[a] = s);
  }
  return t;
}
var _ = "​",
  A = {
    curveBasis: s.qrM,
    curveBasisClosed: s.Yu4,
    curveBasisOpen: s.IA3,
    curveBumpX: s.Wi0,
    curveBumpY: s.PGM,
    curveBundle: s.OEq,
    curveCardinalClosed: s.olC,
    curveCardinalOpen: s.IrU,
    curveCardinal: s.y8u,
    curveCatmullRomClosed: s.Q7f,
    curveCatmullRomOpen: s.cVp,
    curveCatmullRom: s.oDi,
    curveLinear: s.lUB,
    curveLinearClosed: s.Lx9,
    curveMonotoneX: s.nVG,
    curveMonotoneY: s.uxU,
    curveNatural: s.Xf2,
    curveStep: s.GZz,
    curveStepAfter: s.UPb,
    curveStepBefore: s.dyv,
  },
  F =
    /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,
  L = (0, n.K)(function (t, e) {
    const r = M(t, /(?:init\b)|(?:initialize\b)/);
    let o = {};
    if (Array.isArray(r)) {
      const t = r.map((t) => t.args);
      (0, i.$i)(t), (o = (0, i.hH)(o, [...t]));
    } else o = r.args;
    if (!o) return;
    let n = (0, i.Ch)(t, e);
    const a = "config";
    return (
      void 0 !== o[a] &&
        ("flowchart-v2" === n && (n = "flowchart"), (o[n] = o[a]), delete o[a]),
      o
    );
  }, "detectInit"),
  M = (0, n.K)(function (t, e = null) {
    try {
      const r = new RegExp(`[%]{2}(?![{]${F.source})(?=[}][%]{2}).*\n`, "ig");
      let n;
      (t = t.trim().replace(r, "").replace(/'/gm, '"')),
        o.R.debug(
          `Detecting diagram directive${null !== e ? " type:" + e : ""} based on the text:${t}`,
        );
      const a = [];
      for (; null !== (n = i.DB.exec(t)); )
        if (
          (n.index === i.DB.lastIndex && i.DB.lastIndex++,
          (n && !e) || (e && n[1]?.match(e)) || (e && n[2]?.match(e)))
        ) {
          const t = n[1] ? n[1] : n[2],
            e = n[3] ? n[3].trim() : n[4] ? JSON.parse(n[4].trim()) : null;
          a.push({ type: t, args: e });
        }
      return 0 === a.length
        ? { type: t, args: null }
        : 1 === a.length
          ? a[0]
          : a;
    } catch (r) {
      return (
        o.R.error(
          `ERROR: ${r.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`,
        ),
        { type: void 0, args: null }
      );
    }
  }, "detectDirective"),
  $ = (0, n.K)(function (t) {
    return t.replace(i.DB, "");
  }, "removeDirectives"),
  E = (0, n.K)(function (t, e) {
    for (const [r, i] of e.entries()) if (i.match(t)) return r;
    return -1;
  }, "isSubstringInArray");
function O(t, e) {
  if (!t) return e;
  const r = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return A[r] ?? e;
}
function D(t, e) {
  const r = t.trim();
  if (r) return "loose" !== e.securityLevel ? (0, a.J)(r) : r;
}
(0, n.K)(O, "interpolateToCurve"), (0, n.K)(D, "formatUrl");
var I = (0, n.K)((t, ...e) => {
  const r = t.split("."),
    i = r.length - 1,
    n = r[i];
  let a = window;
  for (let e = 0; e < i; e++)
    if (((a = a[r[e]]), !a))
      return void o.R.error(`Function name: ${t} not found in window`);
  a[n](...e);
}, "runFunc");
function K(t, e) {
  return t && e
    ? Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    : 0;
}
function q(t) {
  let e,
    r = 0;
  return (
    t.forEach((t) => {
      (r += K(t, e)), (e = t);
    }),
    z(t, r / 2)
  );
}
function P(t) {
  return 1 === t.length ? t[0] : q(t);
}
(0, n.K)(K, "distance"),
  (0, n.K)(q, "traverseEdge"),
  (0, n.K)(P, "calcLabelPosition");
var R = (0, n.K)((t, e = 2) => {
    const r = Math.pow(10, e);
    return Math.round(t * r) / r;
  }, "roundNumber"),
  z = (0, n.K)((t, e) => {
    let r,
      i = e;
    for (const e of t) {
      if (r) {
        const t = K(e, r);
        if (0 === t) return r;
        if (t < i) i -= t;
        else {
          const o = i / t;
          if (o <= 0) return r;
          if (o >= 1) return { x: e.x, y: e.y };
          if (o > 0 && o < 1)
            return {
              x: R((1 - o) * r.x + o * e.x, 5),
              y: R((1 - o) * r.y + o * e.y, 5),
            };
        }
      }
      r = e;
    }
    throw new Error("Could not find a suitable point for the given distance");
  }, "calculatePoint"),
  N = (0, n.K)((t, e, r) => {
    o.R.info(`our points ${JSON.stringify(e)}`),
      e[0] !== r && (e = e.reverse());
    const i = z(e, 25),
      n = t ? 10 : 5,
      a = Math.atan2(e[0].y - i.y, e[0].x - i.x),
      s = { x: 0, y: 0 };
    return (
      (s.x = Math.sin(a) * n + (e[0].x + i.x) / 2),
      (s.y = -Math.cos(a) * n + (e[0].y + i.y) / 2),
      s
    );
  }, "calcCardinalityPosition");
function W(t, e, r) {
  const i = structuredClone(r);
  o.R.info("our points", i),
    "start_left" !== e && "start_right" !== e && i.reverse();
  const n = z(i, 25 + t),
    a = 10 + 0.5 * t,
    s = Math.atan2(i[0].y - n.y, i[0].x - n.x),
    l = { x: 0, y: 0 };
  return (
    "start_left" === e
      ? ((l.x = Math.sin(s + Math.PI) * a + (i[0].x + n.x) / 2),
        (l.y = -Math.cos(s + Math.PI) * a + (i[0].y + n.y) / 2))
      : "end_right" === e
        ? ((l.x = Math.sin(s - Math.PI) * a + (i[0].x + n.x) / 2),
          (l.y = -Math.cos(s - Math.PI) * a + (i[0].y + n.y) / 2))
        : ((l.x = Math.sin(s) * a + (i[0].x + n.x) / 2),
          (l.y = -Math.cos(s) * a + (i[0].y + n.y) / 2)),
    l
  );
}
function j(t) {
  let e = "",
    r = "";
  for (const i of t)
    void 0 !== i &&
      (i.startsWith("color:") || i.startsWith("text-align:")
        ? (r = r + i + ";")
        : (e = e + i + ";"));
  return { style: e, labelStyle: r };
}
(0, n.K)(W, "calcTerminalLabelPosition"), (0, n.K)(j, "getStylesFromArray");
var H = 0,
  U = (0, n.K)(
    () => (H++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + H),
    "generateId",
  );
function Y(t) {
  let e = "";
  for (let r = 0; r < t; r++)
    e += "0123456789abcdef".charAt(Math.floor(16 * Math.random()));
  return e;
}
(0, n.K)(Y, "makeRandomHex");
var G = (0, n.K)((t) => Y(t.length), "random"),
  X = (0, n.K)(function () {
    return {
      x: 0,
      y: 0,
      fill: void 0,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: void 0,
      text: "",
    };
  }, "getTextObj"),
  V = (0, n.K)(function (t, e) {
    const r = e.text.replace(i.Y2.lineBreakRegex, " "),
      [, o] = lt(e.fontSize),
      n = t.append("text");
    n.attr("x", e.x),
      n.attr("y", e.y),
      n.style("text-anchor", e.anchor),
      n.style("font-family", e.fontFamily),
      n.style("font-size", o),
      n.style("font-weight", e.fontWeight),
      n.attr("fill", e.fill),
      void 0 !== e.class && n.attr("class", e.class);
    const a = n.append("tspan");
    return (
      a.attr("x", e.x + 2 * e.textMargin), a.attr("fill", e.fill), a.text(r), n
    );
  }, "drawSimpleText"),
  Z = l(
    (t, e, r) => {
      if (!t) return t;
      if (
        ((r = Object.assign(
          {
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Arial",
            joinWith: "<br/>",
          },
          r,
        )),
        i.Y2.hasBreaks(t))
      )
        return t;
      const o = t.split(" ").filter(Boolean),
        n = [];
      let a = "";
      return (
        o.forEach((t, i) => {
          const s = tt(`${t} `, r),
            l = tt(a, r);
          if (s > e) {
            const { hyphenatedStrings: i, remainingWord: o } = Q(t, e, "-", r);
            n.push(a, ...i), (a = o);
          } else
            l + s >= e
              ? (n.push(a), (a = t))
              : (a = [a, t].filter(Boolean).join(" "));
          i + 1 === o.length && n.push(a);
        }),
        n.filter((t) => "" !== t).join(r.joinWith)
      );
    },
    (t, e, r) =>
      `${t}${e}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`,
  ),
  Q = l(
    (t, e, r = "-", i) => {
      i = Object.assign(
        { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
        i,
      );
      const o = [...t],
        n = [];
      let a = "";
      return (
        o.forEach((t, s) => {
          const l = `${a}${t}`;
          if (tt(l, i) >= e) {
            const t = s + 1,
              e = o.length === t,
              i = `${l}${r}`;
            n.push(e ? l : i), (a = "");
          } else a = l;
        }),
        { hyphenatedStrings: n, remainingWord: a }
      );
    },
    (t, e, r = "-", i) =>
      `${t}${e}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`,
  );
function J(t, e) {
  return rt(t, e).height;
}
function tt(t, e) {
  return rt(t, e).width;
}
(0, n.K)(J, "calculateTextHeight"), (0, n.K)(tt, "calculateTextWidth");
var et,
  rt = l(
    (t, e) => {
      const {
        fontSize: r = 12,
        fontFamily: o = "Arial",
        fontWeight: n = 400,
      } = e;
      if (!t) return { width: 0, height: 0 };
      const [, a] = lt(r),
        l = ["sans-serif", o],
        h = t.split(i.Y2.lineBreakRegex),
        c = [],
        d = (0, s.Ltv)("body");
      if (!d.remove) return { width: 0, height: 0, lineHeight: 0 };
      const u = d.append("svg");
      for (const t of l) {
        let e = 0;
        const r = { width: 0, height: 0, lineHeight: 0 };
        for (const i of h) {
          const o = X();
          o.text = i || _;
          const s = V(u, o)
              .style("font-size", a)
              .style("font-weight", n)
              .style("font-family", t),
            l = (s._groups || s)[0][0].getBBox();
          if (0 === l.width && 0 === l.height)
            throw new Error("svg element not in render tree");
          (r.width = Math.round(Math.max(r.width, l.width))),
            (e = Math.round(l.height)),
            (r.height += e),
            (r.lineHeight = Math.round(Math.max(r.lineHeight, e)));
        }
        c.push(r);
      }
      return (
        u.remove(),
        c[
          isNaN(c[1].height) ||
          isNaN(c[1].width) ||
          isNaN(c[1].lineHeight) ||
          (c[0].height > c[1].height &&
            c[0].width > c[1].width &&
            c[0].lineHeight > c[1].lineHeight)
            ? 0
            : 1
        ]
      );
    },
    (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`,
  ),
  it = class {
    constructor(t = !1, e) {
      (this.count = 0),
        (this.count = e ? e.length : 0),
        (this.next = t ? () => this.count++ : () => Date.now());
    }
    static {
      (0, n.K)(this, "InitIDGenerator");
    }
  },
  ot = (0, n.K)(function (t) {
    return (
      (et = et || document.createElement("div")),
      (t = escape(t)
        .replace(/%26/g, "&")
        .replace(/%23/g, "#")
        .replace(/%3B/g, ";")),
      (et.innerHTML = t),
      unescape(et.textContent)
    );
  }, "entityDecode");
function nt(t) {
  return "str" in t;
}
function at(t) {
  return t instanceof Error ? t.message : String(t);
}
(0, n.K)(nt, "isDetailedError"), (0, n.K)(at, "getErrorMessage");
var st = (0, n.K)((t, e, r, i) => {
    if (!i) return;
    const o = t.node()?.getBBox();
    o &&
      t
        .append("text")
        .text(i)
        .attr("text-anchor", "middle")
        .attr("x", o.x + o.width / 2)
        .attr("y", -r)
        .attr("class", e);
  }, "insertTitle"),
  lt = (0, n.K)((t) => {
    if ("number" == typeof t) return [t, t + "px"];
    const e = parseInt(t ?? "", 10);
    return Number.isNaN(e)
      ? [void 0, void 0]
      : t === String(e)
        ? [e, t + "px"]
        : [e, t];
  }, "parseFontSize");
function ht(t, e) {
  return (function (t, ...e) {
    return (function (t, ...e) {
      const r = e.slice(0, -1),
        i = e[e.length - 1];
      let o = t;
      for (let t = 0; t < r.length; t++) o = v(o, r[t], i, new Map());
      return o;
    })(t, ...e, h);
  })({}, t, e);
}
(0, n.K)(ht, "cleanAndMerge");
var ct = {
    assignWithDepth: i.hH,
    wrapLabel: Z,
    calculateTextHeight: J,
    calculateTextWidth: tt,
    calculateTextDimensions: rt,
    cleanAndMerge: ht,
    detectInit: L,
    detectDirective: M,
    isSubstringInArray: E,
    interpolateToCurve: O,
    calcLabelPosition: P,
    calcCardinalityPosition: N,
    calcTerminalLabelPosition: W,
    formatUrl: D,
    getStylesFromArray: j,
    generateId: U,
    random: G,
    runFunc: I,
    entityDecode: ot,
    insertTitle: st,
    isLabelCoordinateInPath: ft,
    parseFontSize: lt,
    InitIDGenerator: it,
  },
  dt = (0, n.K)(function (t) {
    let e = t;
    return (
      (e = e.replace(/style.*:\S*#.*;/g, function (t) {
        return t.substring(0, t.length - 1);
      })),
      (e = e.replace(/classDef.*:\S*#.*;/g, function (t) {
        return t.substring(0, t.length - 1);
      })),
      (e = e.replace(/#\w+;/g, function (t) {
        const e = t.substring(1, t.length - 1);
        return /^\+?\d+$/.test(e) ? "ﬂ°°" + e + "¶ß" : "ﬂ°" + e + "¶ß";
      })),
      e
    );
  }, "encodeEntities"),
  ut = (0, n.K)(function (t) {
    return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  }, "decodeEntities"),
  pt = (0, n.K)(
    (t, e, { counter: r = 0, prefix: i, suffix: o }, n) =>
      n || `${i ? `${i}_` : ""}${t}_${e}_${r}${o ? `_${o}` : ""}`,
    "getEdgeId",
  );
function gt(t) {
  return t ?? null;
}
function ft(t, e) {
  const r = Math.round(t.x),
    i = Math.round(t.y),
    o = e.replace(/(\d+\.\d+)/g, (t) => Math.round(parseFloat(t)).toString());
  return o.includes(r.toString()) || o.includes(i.toString());
}
(0, n.K)(gt, "handleUndefinedAttr"), (0, n.K)(ft, "isLabelCoordinateInPath");

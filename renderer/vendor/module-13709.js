// vendor/module-13709.js — webpack module 13709
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { Ay: () => p });
const r = "object" == typeof self ? self : globalThis,
  o = (e, t) => {
    switch (e) {
      case "Function":
      case "SharedWorker":
      case "Worker":
      case "eval":
      case "setInterval":
      case "setTimeout":
        throw new TypeError("unable to deserialize " + e);
    }
    return new r[e](t);
  },
  i = (e) =>
    ((e, t) => {
      const n = (t, n) => (e.set(n, t), t),
        r = (i) => {
          if (e.has(i)) return e.get(i);
          const [a, s] = t[i];
          switch (a) {
            case 0:
            case -1:
              return n(s, i);
            case 1: {
              const e = n([], i);
              for (const t of s) e.push(r(t));
              return e;
            }
            case 2: {
              const e = n({}, i);
              for (const [t, n] of s) e[r(t)] = r(n);
              return e;
            }
            case 3:
              return n(new Date(s), i);
            case 4: {
              const { source: e, flags: t } = s;
              return n(new RegExp(e, t), i);
            }
            case 5: {
              const e = n(new Map(), i);
              for (const [t, n] of s) e.set(r(t), r(n));
              return e;
            }
            case 6: {
              const e = n(new Set(), i);
              for (const t of s) e.add(r(t));
              return e;
            }
            case 7: {
              const { name: e, message: t } = s;
              return n(o(e, t), i);
            }
            case 8:
              return n(BigInt(s), i);
            case "BigInt":
              return n(Object(BigInt(s)), i);
            case "ArrayBuffer":
              return n(new Uint8Array(s).buffer, s);
            case "DataView": {
              const { buffer: e } = new Uint8Array(s);
              return n(new DataView(e), s);
            }
          }
          return n(o(a, s), i);
        };
      return r;
    })(
      new Map(),
      e,
    )(0),
  a = "",
  { toString: s } = {},
  { keys: l } = Object,
  c = (e) => {
    const t = typeof e;
    if ("object" !== t || !e) return [0, t];
    const n = s.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [1, a];
      case "Object":
        return [2, a];
      case "Date":
        return [3, a];
      case "RegExp":
        return [4, a];
      case "Map":
        return [5, a];
      case "Set":
        return [6, a];
      case "DataView":
        return [1, n];
    }
    return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
  },
  u = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
  d = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return (
      ((e, t, n, r) => {
        const o = (e, t) => {
            const o = r.push(e) - 1;
            return n.set(t, o), o;
          },
          i = (r) => {
            if (n.has(r)) return n.get(r);
            let [a, s] = c(r);
            switch (a) {
              case 0: {
                let t = r;
                switch (s) {
                  case "bigint":
                    (a = 8), (t = r.toString());
                    break;
                  case "function":
                  case "symbol":
                    if (e) throw new TypeError("unable to serialize " + s);
                    t = null;
                    break;
                  case "undefined":
                    return o([-1], r);
                }
                return o([a, t], r);
              }
              case 1: {
                if (s) {
                  let e = r;
                  return (
                    "DataView" === s
                      ? (e = new Uint8Array(r.buffer))
                      : "ArrayBuffer" === s && (e = new Uint8Array(r)),
                    o([s, [...e]], r)
                  );
                }
                const e = [],
                  t = o([a, e], r);
                for (const t of r) e.push(i(t));
                return t;
              }
              case 2: {
                if (s)
                  switch (s) {
                    case "BigInt":
                      return o([s, r.toString()], r);
                    case "Boolean":
                    case "Number":
                    case "String":
                      return o([s, r.valueOf()], r);
                  }
                if (t && "toJSON" in r) return i(r.toJSON());
                const n = [],
                  d = o([a, n], r);
                for (const t of l(r))
                  (!e && u(c(r[t]))) || n.push([i(t), i(r[t])]);
                return d;
              }
              case 3:
                return o([a, r.toISOString()], r);
              case 4: {
                const { source: e, flags: t } = r;
                return o([a, { source: e, flags: t }], r);
              }
              case 5: {
                const t = [],
                  n = o([a, t], r);
                for (const [n, o] of r)
                  (e || (!u(c(n)) && !u(c(o)))) && t.push([i(n), i(o)]);
                return n;
              }
              case 6: {
                const t = [],
                  n = o([a, t], r);
                for (const n of r) (!e && u(c(n))) || t.push(i(n));
                return n;
              }
            }
            const { message: d } = r;
            return o([a, { name: s, message: d }], r);
          };
        return i;
      })(
        !(t || n),
        !!t,
        new Map(),
        r,
      )(e),
      r
    );
  },
  p =
    "function" == typeof structuredClone
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? i(d(e, t)) : structuredClone(e)
      : (e, t) => i(d(e, t));

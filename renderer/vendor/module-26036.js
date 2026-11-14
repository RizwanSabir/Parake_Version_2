// vendor/module-26036.js — webpack module 26036
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, {
  addConsumeAwareSignal: () => j,
  addToEnd: () => R,
  addToStart: () => M,
  ensureQueryFn: () => N,
  functionalUpdate: () => p,
  hashKey: () => S,
  hashQueryKeyByOptions: () => b,
  isPlainArray: () => T,
  isPlainObject: () => k,
  isServer: () => u,
  isValidTimeout: () => f,
  keepPreviousData: () => O,
  matchMutation: () => v,
  matchQuery: () => y,
  noop: () => d,
  partialMatchKey: () => _,
  replaceData: () => A,
  replaceEqualDeep: () => w,
  resolveQueryBoolean: () => g,
  resolveStaleTime: () => m,
  shallowEqualObjects: () => E,
  shouldThrowError: () => D,
  skipToken: () => P,
  sleep: () => I,
  timeUntilStale: () => h,
}),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(97167 /* vendor/module-97167 */),
  u = "undefined" == typeof window || "Deno" in globalThis;
function d() {}
function p(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function f(e) {
  return "number" == typeof e && e >= 0 && e !== 1 / 0;
}
function h(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function m(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function g(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function y(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: a,
    stale: s,
  } = e;
  if (a)
    if (r) {
      if (t.queryHash !== b(a, t.options)) return !1;
    } else if (!_(t.queryKey, a)) return !1;
  if ("all" !== n) {
    const e = t.isActive();
    if ("active" === n && !e) return !1;
    if ("inactive" === n && e) return !1;
  }
  return !(
    ("boolean" == typeof s && t.isStale() !== s) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function v(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (S(t.options.mutationKey) !== S(i)) return !1;
    } else if (!_(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function b(e, t) {
  return (t?.queryKeyHashFn || S)(e);
}
function S(e) {
  return JSON.stringify(e, (e, t) =>
    k(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function _(e, t) {
  return (
    e === t ||
    (typeof e == typeof t &&
      !(!e || !t || "object" != typeof e || "object" != typeof t) &&
      Object.keys(t).every((n) => _(e[n], t[n])))
  );
}
var x = Object.prototype.hasOwnProperty;
function w(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  const r = T(e) && T(t);
  if (!(r || (k(e) && k(t)))) return t;
  const o = (r ? e : Object.keys(e)).length,
    i = r ? t : Object.keys(t),
    a = i.length,
    s = r ? new Array(a) : {};
  let l = 0;
  for (let c = 0; c < a; c++) {
    const a = r ? c : i[c],
      u = e[a],
      d = t[a];
    if (u === d) {
      (s[a] = u), (r ? c < o : x.call(e, a)) && l++;
      continue;
    }
    if (
      null === u ||
      null === d ||
      "object" != typeof u ||
      "object" != typeof d
    ) {
      s[a] = d;
      continue;
    }
    const p = w(u, d, n + 1);
    (s[a] = p), p === u && l++;
  }
  return o === a && l === o ? e : s;
}
function E(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function T(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function k(e) {
  if (!C(e)) return !1;
  const t = e.constructor;
  if (void 0 === t) return !0;
  const n = t.prototype;
  return (
    !!C(n) &&
    !!n.hasOwnProperty("isPrototypeOf") &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function C(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function I(e) {
  return new Promise((t) => {
    c.timeoutManager.setTimeout(t, e);
  });
}
function A(e, t, n) {
  return "function" == typeof n.structuralSharing
    ? n.structuralSharing(e, t)
    : !1 !== n.structuralSharing
      ? w(e, t)
      : t;
}
function O(e) {
  return e;
}
function R(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function M(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var P = Symbol();
function N(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : e.queryFn && e.queryFn !== P
      ? e.queryFn
      : () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`));
}
function D(e, t) {
  return "function" == typeof e ? e(...t) : !!e;
}
function j(e, t, n) {
  let r,
    o = !1;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (r ??= t()),
        o ||
          ((o = !0),
          r.aborted ? n() : r.addEventListener("abort", n, { once: !0 })),
        r
      ),
    }),
    e
  );
}

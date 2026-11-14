// vendor/module-72421.js — webpack module 72421
// params: (e) = (module, exports, require)
"use strict";
var t,
  n = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty,
  a = {};
((e, t) => {
  for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
})(a, {
  defaultThrowOnError: () => s,
  ensureSuspenseTimers: () => l,
  fetchOptimistic: () => d,
  shouldSuspend: () => u,
  willFetch: () => c,
}),
  (e.exports =
    ((t = a),
    ((e, t, a, s) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let a of o(t))
          i.call(e, a) ||
            void 0 === a ||
            n(e, a, {
              get: () => t[a],
              enumerable: !(s = r(t, a)) || s.enumerable,
            });
      return e;
    })(n({}, "__esModule", { value: !0 }), t)));
var s = (e, t) => void 0 === t.state.data,
  l = (e) => {
    if (e.suspense) {
      const t = 1e3,
        n = (e) => ("static" === e ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      (e.staleTime = "function" == typeof r ? (...e) => n(r(...e)) : n(r)),
        "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, t));
    }
  },
  c = (e, t) => e.isLoading && e.isFetching && !t,
  u = (e, t) => e?.suspense && t.isPending,
  d = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });

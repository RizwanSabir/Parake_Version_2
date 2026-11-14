// vendor/module-79317.js — webpack module 79317
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(75122 /* vendor/module-75122 */),
  a =
    "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
t.shouldPropagateTraceForUrl = function (e, t, n) {
  if ("string" != typeof e || !t) return !0;
  const s = n?.get(e);
  if (void 0 !== s) return r.DEBUG_BUILD && !s && o.debug.log(a, e), s;
  const l = i.stringMatchesSomePattern(e, t);
  return n?.set(e, l), r.DEBUG_BUILD && !l && o.debug.log(a, e), l;
};

// vendor/other/module-1698.js — webpack module 1698
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(75122 /* vendor/other/module-75122 */),
  s =
    "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
t.shouldPropagateTraceForUrl = function (e, t, n) {
  if ("string" != typeof e || !t) return !0;
  const a = n?.get(e);
  if (void 0 !== a) return r.DEBUG_BUILD && !a && o.debug.log(s, e), a;
  const c = i.stringMatchesSomePattern(e, t);
  return n?.set(e, c), r.DEBUG_BUILD && !c && o.debug.log(s, e), c;
};

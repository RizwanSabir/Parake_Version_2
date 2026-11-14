// vendor/module-72925.js — webpack module 72925
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */);
t.hasSpansEnabled = function (e) {
  if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
  const t = e || r.getClient()?.getOptions();
  return !(!t || (null == t.tracesSampleRate && !t.tracesSampler));
};

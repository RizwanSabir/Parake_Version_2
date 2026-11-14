// vendor/module-30401.js — webpack module 30401
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/module-68020 */),
  o = n(88422 /* vendor/module-88422 */),
  i = "_sentryScope",
  a = "_sentryIsolationScope",
  s = Symbol.for("sentry.otelSourceInference"),
  l = Symbol.for("sentry.otelSourceExplicitlySet"),
  c = Symbol.for("sentry.tracerProviderSpan");
(t.getCapturedScopesOnSpan = function (e) {
  const t = e;
  return { scope: t[i], isolationScope: o.derefWeakRef(t[a]) };
}),
  (t.markSpanAsTracerProviderSpan = function (e) {
    r.addNonEnumerableProperty(e, c, !0);
  }),
  (t.markSpanForOtelSourceInference = function (e) {
    r.addNonEnumerableProperty(e, s, !0);
  }),
  (t.markSpanSourceAsExplicit = function (e) {
    r.addNonEnumerableProperty(e, l, !0);
  }),
  (t.setCapturedScopesOnSpan = function (e, t, n) {
    e &&
      (r.addNonEnumerableProperty(e, a, o.makeWeakRef(n)),
      r.addNonEnumerableProperty(e, i, t));
  }),
  (t.spanIsTracerProviderSpan = function (e) {
    return !0 === e[c];
  }),
  (t.spanShouldInferOtelSource = function (e) {
    return !0 === e[s];
  }),
  (t.spanSourceWasExplicitlySet = function (e) {
    return !0 === e[l];
  });

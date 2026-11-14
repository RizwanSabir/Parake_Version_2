// vendor/other/module-30401.js — webpack module 30401
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/other/module-68020 */),
  o = n(88422 /* vendor/other/module-88422 */),
  i = "_sentryScope",
  s = "_sentryIsolationScope",
  a = Symbol.for("sentry.otelSourceInference"),
  c = Symbol.for("sentry.otelSourceExplicitlySet"),
  u = Symbol.for("sentry.tracerProviderSpan");
(t.getCapturedScopesOnSpan = function (e) {
  const t = e;
  return { scope: t[i], isolationScope: o.derefWeakRef(t[s]) };
}),
  (t.markSpanAsTracerProviderSpan = function (e) {
    r.addNonEnumerableProperty(e, u, !0);
  }),
  (t.markSpanForOtelSourceInference = function (e) {
    r.addNonEnumerableProperty(e, a, !0);
  }),
  (t.markSpanSourceAsExplicit = function (e) {
    r.addNonEnumerableProperty(e, c, !0);
  }),
  (t.setCapturedScopesOnSpan = function (e, t, n) {
    e &&
      (r.addNonEnumerableProperty(e, s, o.makeWeakRef(n)),
      r.addNonEnumerableProperty(e, i, t));
  }),
  (t.spanIsTracerProviderSpan = function (e) {
    return !0 === e[u];
  }),
  (t.spanShouldInferOtelSource = function (e) {
    return !0 === e[a];
  }),
  (t.spanSourceWasExplicitlySet = function (e) {
    return !0 === e[c];
  });

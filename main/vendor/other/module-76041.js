// vendor/other/module-76041.js — webpack module 76041
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/other/module-64289 */),
  o = n(16973 /* vendor/other/module-16973 */),
  i = n(75457 /* vendor/other/module-75457 */),
  s = n(73802 /* vendor/other/module-73802 */);
let a;
function c() {
  return a?.();
}
function u() {
  const e = o.getMainCarrier();
  return r.getAsyncContextStrategy(e).getCurrentScope();
}
(t.getClient = function () {
  return u().getClient();
}),
  (t.getCurrentScope = u),
  (t.getExternalPropagationContext = c),
  (t.getGlobalScope = function () {
    return o.getGlobalSingleton("globalScope", () => new i.Scope());
  }),
  (t.getIsolationScope = function () {
    const e = o.getMainCarrier();
    return r.getAsyncContextStrategy(e).getIsolationScope();
  }),
  (t.getTraceContextFromScope = function (e) {
    const t = c();
    if (t) return { trace_id: t.traceId, span_id: t.spanId };
    const n = e.getPropagationContext(),
      { traceId: r, parentSpanId: o, propagationSpanId: i } = n,
      a = { trace_id: r, span_id: i || s.generateSpanId() };
    return o && (a.parent_span_id = o), a;
  }),
  (t.hasExternalPropagationContext = function () {
    return void 0 !== a;
  }),
  (t.registerExternalPropagationContext = function (e) {
    a = e;
  }),
  (t.withIsolationScope = function (...e) {
    const t = o.getMainCarrier(),
      n = r.getAsyncContextStrategy(t);
    if (2 === e.length) {
      const [t, r] = e;
      return t ? n.withSetIsolationScope(t, r) : n.withIsolationScope(r);
    }
    return n.withIsolationScope(e[0]);
  }),
  (t.withScope = function (...e) {
    const t = o.getMainCarrier(),
      n = r.getAsyncContextStrategy(t);
    if (2 === e.length) {
      const [t, r] = e;
      return t ? n.withSetScope(t, r) : n.withScope(r);
    }
    return n.withScope(e[0]);
  });

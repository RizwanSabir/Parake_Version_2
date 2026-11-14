// vendor/module-76041.js — webpack module 76041
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/module-64289 */),
  o = n(16973 /* vendor/module-16973 */),
  i = n(75457 /* vendor/module-75457 */),
  a = n(73802 /* vendor/module-73802 */);
let s;
function l() {
  return s?.();
}
function c() {
  const e = o.getMainCarrier();
  return r.getAsyncContextStrategy(e).getCurrentScope();
}
(t.getClient = function () {
  return c().getClient();
}),
  (t.getCurrentScope = c),
  (t.getExternalPropagationContext = l),
  (t.getGlobalScope = function () {
    return o.getGlobalSingleton("globalScope", () => new i.Scope());
  }),
  (t.getIsolationScope = function () {
    const e = o.getMainCarrier();
    return r.getAsyncContextStrategy(e).getIsolationScope();
  }),
  (t.getTraceContextFromScope = function (e) {
    const t = l();
    if (t) return { trace_id: t.traceId, span_id: t.spanId };
    const n = e.getPropagationContext(),
      { traceId: r, parentSpanId: o, propagationSpanId: i } = n,
      s = { trace_id: r, span_id: i || a.generateSpanId() };
    return o && (s.parent_span_id = o), s;
  }),
  (t.hasExternalPropagationContext = function () {
    return void 0 !== s;
  }),
  (t.registerExternalPropagationContext = function (e) {
    s = e;
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

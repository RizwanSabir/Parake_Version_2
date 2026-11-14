// vendor/other/module-99971.js — webpack module 99971
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = "dataloader",
  l = Symbol("sentry.dataloader.wrapped");
function d(e, t) {
  const n = e?.name;
  return n ? `${u}.${t} ${n}` : `${u}.${t}`;
}
function p(e) {
  return Array.isArray(e)
    ? e.map((e) => String(e))
    : null == e
      ? void 0
      : [String(e)];
}
function f(e, t, n) {
  const r = "load" === t || "loadMany" === t || "batch" === t;
  return {
    name: d(e, t),
    kind: "batch" === t ? void 0 : i.SPAN_KIND.CLIENT,
    op: r ? "cache.get" : void 0,
    onlyIfParent: !0,
    attributes: {
      [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.dataloader",
      [o.CACHE_KEY]: r ? p(n) : void 0,
    },
  };
}
function h(e, t) {
  c.bindTracingChannelToSpan(
    r.tracingChannel(e),
    (e) => g(e.self, t, e.arguments[0]),
    { requiresParentSpan: !0 },
  );
}
function g(e, t, n) {
  return i.startInactiveSpan(f(e, t, n));
}
const m = i.defineIntegration(() => ({
  name: "Dataloader",
  setupOnce() {
    r.tracingChannel &&
      (s.DEBUG_BUILD &&
        i.debug.log(
          "[orchestrion:dataloader] subscribing to dataloader tracing channels",
        ),
      i.waitForTracingChannelBinding(() => {
        r
          .tracingChannel(a.CHANNELS.DATALOADER_CONSTRUCT)
          .start.subscribe((e) => {
            const t = e,
              n = t.arguments[0];
            if ("function" != typeof n || n[l]) return;
            const r = n,
              o = function (...e) {
                return i.startSpan(
                  {
                    ...f(this, "batch", e[0]),
                    links: this._batch?.spanLinks,
                  },
                  () => r.apply(this, e),
                );
              };
            (o[l] = !0), (t.arguments[0] = o);
          }),
          (function () {
            const e = r.tracingChannel(a.CHANNELS.DATALOADER_LOAD);
            c.bindTracingChannelToSpan(
              e,
              (e) => g(e.self, "load", e.arguments[0]),
              { requiresParentSpan: !0 },
            ),
              e.end.subscribe((e) => {
                const t = e,
                  n = t._sentrySpan,
                  r = t.self?._batch;
                n &&
                  r &&
                  n.isRecording() &&
                  (r.spanLinks ?? (r.spanLinks = [])).push({
                    context: n.spanContext(),
                  });
              });
          })(),
          h(a.CHANNELS.DATALOADER_LOAD_MANY, "loadMany"),
          h(a.CHANNELS.DATALOADER_PRIME, "prime"),
          h(a.CHANNELS.DATALOADER_CLEAR, "clear"),
          h(a.CHANNELS.DATALOADER_CLEAR_ALL, "clearAll");
      }));
  },
}));
t.dataloaderChannelIntegration = m;

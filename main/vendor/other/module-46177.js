// vendor/other/module-46177.js — webpack module 46177
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(61337 /* vendor/other/module-61337 */),
  s = n(34369 /* vendor/other/module-34369 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(8506 /* vendor/other/module-8506 */),
  u = n(15343 /* vendor/other/module-15343 */),
  l = n(12417 /* vendor/other/module-12417 */),
  d = new WeakMap();
let p = !1;
function f(e, t, n, r) {
  return s.startMongooseLegacySpan({
    collection: e,
    modelName: t,
    operation: n,
    origin: "auto.db.orchestrion.mongoose",
    parentSpan: r,
  });
}
function h(e) {
  return r.tracingChannel(e);
}
function g(e, t) {
  l.bindTracingChannelToSpan(r.tracingChannel(e), (e) => {
    const n = e.self;
    if (n) return t(n);
  });
}
function m(e) {
  const t = o.getActiveSpan();
  e && t && d.set(e, t);
}
const _ = o.defineIntegration(() => ({
  name: "Mongoose",
  setupOnce() {
    r.tracingChannel &&
      o.waitForTracingChannelBinding(() => {
        i.subscribeMongooseDiagnosticChannels(r.tracingChannel),
          (function () {
            if (!p) {
              (p = !0),
                u.DEBUG_BUILD &&
                  o.debug.log(
                    "[orchestrion:mongoose] subscribing to injected channels",
                  );
              for (const e of c.MONGOOSE_CONTEXT_CAPTURE_CHANNELS)
                h(e).subscribe({
                  start(e) {
                    m(e.self);
                  },
                });
              h(a.CHANNELS.MONGOOSE_MODEL_AGGREGATE).subscribe({
                end(e) {
                  const t = e.result;
                  t && "object" == typeof t && m(t);
                },
              }),
                g(a.CHANNELS.MONGOOSE_QUERY_EXEC, (e) => {
                  const t = e;
                  return f(
                    t.mongooseCollection,
                    t.model?.modelName,
                    t.op ?? "exec",
                    d.get(e),
                  );
                }),
                g(a.CHANNELS.MONGOOSE_AGGREGATE_EXEC, (e) => {
                  const t = e._model;
                  return f(t?.collection, t?.modelName, "aggregate", d.get(e));
                }),
                g(a.CHANNELS.MONGOOSE_MODEL_SAVE, (e) => {
                  const t = e.constructor;
                  return f(t.collection, t.modelName, "save");
                }),
                g(a.CHANNELS.MONGOOSE_MODEL_REMOVE, (e) => {
                  const t = e.constructor;
                  return f(t.collection, t.modelName, "remove");
                }),
                g(a.CHANNELS.MONGOOSE_MODEL_INSERT_MANY, (e) => {
                  const t = e;
                  return f(t.collection, t.modelName, "insertMany");
                }),
                g(a.CHANNELS.MONGOOSE_MODEL_BULK_WRITE, (e) => {
                  const t = e;
                  return f(t.collection, t.modelName, "bulkWrite");
                });
            }
          })();
      });
  },
}));
t.mongooseChannelIntegration = _;

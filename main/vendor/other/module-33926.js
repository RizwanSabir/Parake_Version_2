// vendor/other/module-33926.js — webpack module 33926
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(85834 /* vendor/other/module-85834 */),
  s = n(12417 /* vendor/other/module-12417 */),
  a = o.defineIntegration(() => ({
    name: "GenericPool",
    setupOnce() {
      r.tracingChannel &&
        o.waitForTracingChannelBinding(() => {
          s.bindTracingChannelToSpan(
            r.tracingChannel(i.CHANNELS.GENERIC_POOL_ACQUIRE),
            () =>
              o.startInactiveSpan({
                name: "generic-pool.acquire",
                attributes: {
                  [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.db.orchestrion.generic_pool",
                },
              }),
          );
        });
    },
  }));
t.genericPoolChannelIntegration = a;

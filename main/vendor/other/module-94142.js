// vendor/other/module-94142.js — webpack module 94142
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = o.defineIntegration(() => ({
    name: "LruMemoizer",
    setupOnce() {
      r.tracingChannel &&
        (i.DEBUG_BUILD &&
          o.debug.log(
            `[orchestrion:lru-memoizer] subscribing to channel "${s.CHANNELS.LRU_MEMOIZER_LOAD}"`,
          ),
        o.waitForTracingChannelBinding(() => {
          a.bindTracingChannelToSpan(
            r.tracingChannel(s.CHANNELS.LRU_MEMOIZER_LOAD),
            () => {},
          );
        }));
    },
  }));
t.lruMemoizerChannelIntegration = c;

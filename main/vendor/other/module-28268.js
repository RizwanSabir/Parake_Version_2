// vendor/other/module-28268.js — webpack module 28268
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(22600 /* vendor/other/module-22600 */),
  c = o.defineIntegration(() => ({
    name: "Hapi",
    setupOnce() {
      r.tracingChannel &&
        (i.DEBUG_BUILD &&
          o.debug.log(
            `[orchestrion:hapi] subscribing to channels "${s.CHANNELS.HAPI_ROUTE}" / "${s.CHANNELS.HAPI_EXT}"`,
          ),
        r.tracingChannel(s.CHANNELS.HAPI_ROUTE).subscribe({
          start(e) {
            const t = e;
            a.wrapRouteArguments(t.arguments, t.self?.realm?.plugin);
          },
          end() {},
          asyncStart() {},
          asyncEnd() {},
          error() {},
        }),
        r.tracingChannel(s.CHANNELS.HAPI_EXT).subscribe({
          start(e) {
            const t = e;
            a.wrapExtArguments(t.arguments, t.self?.realm?.plugin);
          },
          end() {},
          asyncStart() {},
          asyncEnd() {},
          error() {},
        }));
    },
  }));
t.hapiChannelIntegration = c;

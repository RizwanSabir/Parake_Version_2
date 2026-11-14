// vendor/other/module-31921.js — webpack module 31921
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(64673 /* vendor/other/module-64673 */),
  s = n(27134 /* vendor/other/module-27134 */),
  a = n(73137 /* vendor/other/module-73137 */),
  c = n(56943 /* vendor/other/module-56943 */),
  u = n(29097 /* vendor/other/module-29097 */),
  l = n(19449 /* vendor/other/module-19449 */),
  d = "Redis",
  p = s.generateInstrumentOnce(
    `${d}.IORedis`,
    () =>
      new u.IORedisInstrumentation({
        responseHook: c.cacheResponseHook,
      }),
  ),
  f = s.generateInstrumentOnce(
    `${d}.Redis`,
    () =>
      new l.RedisInstrumentation({
        responseHook: c.cacheResponseHook,
      }),
  ),
  h = Object.assign(
    () => {
      (a.isDiagnosticsChannelInjectionEnabled() && o.tracingChannel) ||
        (p(), f());
    },
    { id: d },
  ),
  g = r.defineIntegration((e = {}) =>
    r.extendIntegration(
      i.redisIntegration({ responseHook: c.cacheResponseHook }),
      {
        name: d,
        setupOnce() {
          c.setRedisOptions(e), h();
        },
      },
    ),
  );
Object.defineProperty(t, "_redisOptions", {
  enumerable: !0,
  get: () => c._redisOptions,
}),
  (t.cacheResponseHook = c.cacheResponseHook),
  (t.instrumentRedis = h),
  (t.redisIntegration = g);

// vendor/other/module-79809.js — webpack module 79809
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(44846 /* vendor/other/module-44846 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(27134 /* vendor/other/module-27134 */),
  a = n(5545 /* vendor/other/module-5545 */),
  c = n(15280 /* vendor/other/module-15280 */),
  u = n(85425 /* vendor/other/module-85425 */),
  l = 1e6,
  d = Symbol.for("opentelemetry.js.api.1");
function p(e) {
  if (r.trace.setGlobalTracerProvider(e)) return !0;
  const t = globalThis,
    n = t[d];
  if (n && !n.trace) {
    if (
      (c.DEBUG_BUILD &&
        i.debug.warn(
          "Replaced a pre-existing OpenTelemetry API registry that was created by a different @opentelemetry/api version and would have blocked tracing. If you want to manage OpenTelemetry yourself, set `skipOpenTelemetrySetup: true` in `Sentry.init()`.",
        ),
      (t[d] = void 0),
      !r.trace.setGlobalTracerProvider(e))
    )
      return !1;
    const o = t[d];
    if (o) {
      const { propagation: e, context: r, ...i } = n;
      t[d] = { ...i, ...o };
    }
    return !0;
  }
  return !1;
}
function f(e, t = {}) {
  if (
    !e.getOptions().openTelemetryBasicTracerProvider &&
    !t.spanProcessors?.length
  )
    return (function (e) {
      const t = new a.SentryTracerProvider({
        resource: a.getSentryResource("node"),
      });
      if (!p(t))
        return (
          c.DEBUG_BUILD &&
            i.debug.warn(
              "Could not register SentryTracerProvider because another OpenTelemetry tracer provider is already registered.",
            ),
          [void 0, void 0]
        );
      a.setIsSetup("SentryTracerProvider"),
        r.propagation.setGlobalPropagator(new a.SentryPropagator());
      const n = new s.SentryContextManager();
      return (
        r.context.setGlobalContextManager(n),
        e.on("spanEnd", (e) => {
          a.applyOtelSpanData(e, { finalizeStatus: !0 });
        }),
        i.hasSpanStreamingEnabled(e) &&
          e.on("preprocessSpan", a.backfillStreamedSpanDataFromOtel),
        e.on("preprocessEvent", (e) => {
          "transaction" === e.type &&
            (e.contexts = {
              ...e.contexts,
              otel: {
                resource: t.resource?.attributes,
                ...e.contexts?.otel,
              },
            });
        }),
        [t, n.getAsyncLocalStorageLookup()]
      );
    })(e);
  const n = new o.BasicTracerProvider({
    sampler: new a.SentrySampler(e),
    resource: a.getSentryResource("node"),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new a.SentrySpanProcessor({
        timeout: h(e.getOptions().maxSpanWaitDuration),
        client: e,
      }),
      ...(t.spanProcessors || []),
    ],
  });
  p(n), r.propagation.setGlobalPropagator(new a.SentryPropagator());
  const u = new s.SentryContextManager();
  return (
    r.context.setGlobalContextManager(u), [n, u.getAsyncLocalStorageLookup()]
  );
}
function h(e) {
  if (null != e) {
    if (e > l)
      return (
        c.DEBUG_BUILD &&
          i.debug.warn(
            "`maxSpanWaitDuration` is too high, using the maximum value of 1000000",
          ),
        l
      );
    if (!(e <= 0 || Number.isNaN(e))) return e;
    c.DEBUG_BUILD &&
      i.debug.warn(
        "`maxSpanWaitDuration` must be a positive number, using default value instead.",
      );
  }
}
(t._clampSpanProcessorTimeout = h),
  (t.initOpenTelemetry = function (e, t = {}) {
    e.getOptions().debug && s.setupOpenTelemetryLogger();
    const [n, r] = f(e, t);
    (e.traceProvider = n), (e.asyncLocalStorageLookup = r);
  }),
  (t.preloadOpenTelemetry = function (e = {}) {
    const { debug: t } = e;
    t && i.debug.enable(),
      s.initializeEsmLoader(),
      (function (e) {
        const t = u.getOpenTelemetryInstrumentationToPreload();
        return e
          ? t.filter((t) => {
              const n = t.id;
              return e.some((e) => n === e || n.startsWith(`${e}.`));
            })
          : t;
      })(e.integrations).forEach((e) => {
        e(), t && i.debug.log(`[Sentry] Preloaded ${e.id} instrumentation`);
      });
  }),
  (t.setupOtel = f);

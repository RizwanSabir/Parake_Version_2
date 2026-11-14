// vendor/other/module-73153.js — webpack module 73153
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(5545 /* vendor/other/module-5545 */),
  i = n(14052 /* vendor/other/module-14052 */),
  s = n(77177 /* vendor/other/module-77177 */),
  a = n(25031 /* vendor/other/module-25031 */),
  c = n(78904 /* vendor/other/module-78904 */),
  u = n(6265 /* vendor/other/module-6265 */),
  l = n(6316 /* vendor/other/module-6316 */),
  d = n(11153 /* vendor/other/module-11153 */),
  p = n(34820 /* vendor/other/module-34820 */),
  f = n(10999 /* vendor/other/module-10999 */),
  h = n(34813 /* vendor/other/module-34813 */),
  g = n(79757 /* vendor/other/module-79757 */),
  m = n(39544 /* vendor/other/module-39544 */),
  _ = n(24833 /* vendor/other/module-24833 */),
  S = n(79665 /* vendor/other/module-79665 */),
  E = n(4289 /* vendor/other/module-4289 */),
  y = n(27948 /* vendor/other/module-27948 */),
  T = n(87113 /* vendor/other/module-87113 */),
  b = n(65562 /* vendor/other/module-65562 */),
  I = n(1877 /* vendor/other/module-1877 */);
function v() {
  return [
    r.inboundFiltersIntegration(),
    r.functionToStringIntegration(),
    r.linkedErrorsIntegration(),
    r.requestDataIntegration(),
    S.systemErrorIntegration(),
    r.conversationIdIntegration(),
    _.consoleIntegration(),
    u.httpIntegration(),
    p.nativeNodeFetchIntegration(),
    f.onUncaughtExceptionIntegration(),
    h.onUnhandledRejectionIntegration(),
    c.contextLinesIntegration(),
    l.localVariablesIntegration(),
    a.nodeContextIntegration(),
    s.childProcessIntegration(),
    g.processSessionIntegration(),
    d.modulesIntegration(),
  ];
}
function A(e = {}, t) {
  const n = (function (e, t) {
    const n = (function (e) {
        if (void 0 !== e) return e;
        const t = T.getSentryRelease();
        return void 0 !== t ? t : void 0;
      })(e.release),
      o = y.getSpotlightConfig(e.spotlight),
      i = (function (e) {
        if (void 0 !== e) return e;
        const t = process.env.SENTRY_TRACES_SAMPLE_RATE;
        if (!t) return;
        const n = parseFloat(t);
        return isFinite(n) ? n : void 0;
      })(e.tracesSampleRate),
      s = {
        ...e,
        dsn: e.dsn ?? process.env.SENTRY_DSN,
        environment: e.environment ?? process.env.SENTRY_ENVIRONMENT,
        sendClientReports: e.sendClientReports ?? !0,
        transport: e.transport ?? E.makeNodeTransport,
        stackParser: r.stackParserFromStackParserOptions(
          e.stackParser || T.defaultStackParser,
        ),
        release: n,
        tracesSampleRate: i,
        spotlight: o,
        debug: r.envToBool(e.debug ?? process.env.SENTRY_DEBUG),
      },
      a = e.integrations,
      c = e.defaultIntegrations ?? t(s),
      u = r.getIntegrationsToSetup({
        defaultIntegrations: c,
        integrations: a,
      });
    return { ...s, integrations: u };
  })(e, t);
  !0 === n.debug &&
    (i.DEBUG_BUILD ? r.debug.enable() : r.consoleSandbox(() => {})),
    !1 !== n.registerEsmLoaderHooks && I.initializeEsmLoader(),
    o.setOpenTelemetryContextAsyncContextStrategy(n),
    r.getCurrentScope().update(n.initialScope),
    n.spotlight &&
      !n.integrations.some(({ name: e }) => e === m.INTEGRATION_NAME) &&
      n.integrations.push(
        m.spotlightIntegration({
          sidecarUrl: "string" == typeof n.spotlight ? n.spotlight : void 0,
        }),
      ),
    r.applySdkMetadata(n, "node-core");
  const s = new b.NodeClient(n);
  return (
    r.getCurrentScope().setClient(s),
    s.init(),
    r.debug.log("SDK initialized from CommonJS"),
    s.startClientReportTracking(),
    (function () {
      if (!1 !== r.envToBool(process.env.SENTRY_USE_ENVIRONMENT)) {
        const e = process.env.SENTRY_TRACE,
          t = process.env.SENTRY_BAGGAGE,
          n = r.propagationContextFromHeaders(e, t);
        r.getCurrentScope().setPropagationContext(n);
      }
    })(),
    o.enhanceDscWithOpenTelemetryRootSpanName(s),
    o.setupEventContextTrace(s),
    process.env.VERCEL &&
      process.on("SIGTERM", async () => {
        await s.flush(200);
      }),
    s
  );
}
(t.getDefaultIntegrations = v),
  (t.init = function (e = {}) {
    return A(e, v);
  }),
  (t.initWithoutDefaultIntegrations = function (e = {}) {
    return A(e, () => []);
  }),
  (t.validateOpenTelemetrySetup = function () {
    if (!i.DEBUG_BUILD) return;
    const e = o.openTelemetrySetupCheck(),
      t = ["SentryContextManager", "SentryPropagator"],
      n = e.includes("SentryTracerProvider");
    r.hasSpansEnabled() && !n && t.push("SentrySpanProcessor");
    for (const n of t)
      e.includes(n) ||
        r.debug.error(
          `You have to set up the ${n}. Without this, the OpenTelemetry & Sentry integration will not work properly.`,
        );
    n ||
      e.includes("SentrySampler") ||
      r.debug.warn(
        "You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`.",
      );
  });

// vendor/other/module-13177.js — webpack module 13177
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = n(57230 /* vendor/other/module-57230 */),
  s = n(39053 /* vendor/other/module-39053 */),
  a = n(9674 /* vendor/other/module-9674 */),
  c = n(96495 /* vendor/other/module-96495 */),
  u = n(12050 /* vendor/other/module-12050 */),
  l = n(47490 /* vendor/other/module-47490 */),
  d = n(51156 /* vendor/other/module-51156 */),
  p = n(88516 /* vendor/other/module-88516 */),
  f = "BrowserTracing",
  h =
    /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
function g() {
  const e = s.WINDOW.navigator;
  return !!e?.userAgent && h.test(e.userAgent);
}
const m = {
  ...r.TRACING_DEFAULTS,
  instrumentNavigation: !0,
  instrumentPageLoad: !0,
  markBackgroundSpan: !0,
  enableLongTask: !0,
  enableLongAnimationFrame: !0,
  enableInp: !0,
  ignoreResourceSpans: [],
  ignorePerformanceApiSpans: [],
  detectRedirects: !0,
  linkPreviousTrace: "in-memory",
  consistentTraceSampling: !1,
  enableReportPageLoaded: !1,
  _experiments: {},
  ...d.defaultRequestInstrumentationOptions,
};
function _(e, t, n) {
  e.emit("startPageLoadSpan", t, n),
    r.getCurrentScope().setTransactionName(t.name);
  const o = b(e);
  return o && e.emit("afterStartPageLoadSpan", o), o;
}
function S(e, t, n) {
  const { url: o, isRedirect: i } = n || {};
  e.emit("beforeStartNavigationSpan", t, { isRedirect: i, url: o }),
    e.emit("startNavigationSpan", t, { isRedirect: i, url: o });
  const a = r.getCurrentScope();
  return (
    a.setTransactionName(t.name),
    o &&
      !i &&
      a.setSDKProcessingMetadata({
        normalizedRequest: { ...s.getHttpRequestData(), url: o },
      }),
    b(e)
  );
}
function E(e) {
  const t = s.WINDOW.document,
    n = t?.querySelector(`meta[name=${e}]`);
  return n?.getAttribute("content") || void 0;
}
function y(e) {
  const t = s.WINDOW.performance?.getEntriesByType?.("navigation")[0],
    n = t?.serverTiming?.find((t) => t.name === e);
  return n?.description;
}
const T = "_sentry_idleSpan";
function b(e) {
  return e[T];
}
function I(e, t) {
  r.addNonEnumerableProperty(e, T, t);
}
(t.BROWSER_TRACING_INTEGRATION_ID = f),
  (t.browserTracingIntegration = (e = {}) => {
    "enableElementTiming" in e && r.consoleSandbox(() => {});
    const t = { name: void 0, source: void 0 },
      n = s.WINDOW.document,
      {
        enableInp: h,
        enableLongTask: T,
        enableLongAnimationFrame: v,
        _experiments: {
          enableInteractions: A,
          enableStandaloneClsSpans: N,
          enableStandaloneLcpSpans: R,
        },
        beforeStartSpan: C,
        idleTimeout: O,
        finalTimeout: w,
        childSpanTimeout: k,
        markBackgroundSpan: P,
        traceFetch: L,
        traceXHR: x,
        trackFetchStreamPerformance: M,
        shouldCreateSpanForRequest: D,
        enableHTTPTimings: U,
        ignoreResourceSpans: B,
        ignorePerformanceApiSpans: G,
        instrumentPageLoad: F,
        instrumentNavigation: j,
        detectRedirects: H,
        linkPreviousTrace: W,
        consistentTraceSampling: V,
        enableReportPageLoaded: $,
        onRequestSpanStart: Y,
        onRequestSpanEnd: q,
      } = { ...m, ...e },
      K = g();
    let X, Z;
    function z(e, i, s = !0, a) {
      const c = "pageload" === i.op,
        u = i.name,
        l = C ? C(i) : i,
        d = r.parseStringToURLObject(a || r.getLocationHref()),
        f = {
          ...(d?.pathname && { [p.URL_PATH]: d.pathname }),
          ...(d && !r.isURLObjectRelative(d) && { [p.URL_FULL]: d.href }),
          ...l.attributes,
        };
      if (
        (u !== l.name && (f[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom"),
        (l.attributes = f),
        !s)
      ) {
        const e = r.dateTimestampInSeconds();
        return void r.startInactiveSpan({ ...l, startTime: e }).end(e);
      }
      (t.name = l.name), (t.source = f[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]);
      const h = r.startIdleSpan(l, {
        idleTimeout: O,
        finalTimeout: w,
        childSpanTimeout: k,
        disableAutoFinish: c,
        beforeSpanEnd: (t) => {
          o.addPerformanceEntries(t, {
            ignoreResourceSpans: B,
            ignorePerformanceApiSpans: G,
            spanStreamingEnabled: r.hasSpanStreamingEnabled(e),
          }),
            I(e, void 0);
          const n = r.getCurrentScope(),
            i = n.getPropagationContext();
          n.setPropagationContext({
            ...i,
            traceId: h.spanContext().traceId,
            sampled: r.spanIsSampled(h),
            dsc: r.getDynamicSamplingContextFromSpan(t),
          }),
            c && (Z = void 0);
        },
        trimIdleSpanEndTimestamp: !$,
      });
      function g() {
        n &&
          ["interactive", "complete"].includes(n.readyState) &&
          (e.emit("idleSpanEnableAutoFinish", h),
          n.removeEventListener("readystatechange", g));
      }
      c && $ && (Z = h),
        I(e, h),
        c && !$ && n && (n.addEventListener("readystatechange", g), g());
    }
    return {
      name: f,
      setup(e) {
        if (K)
          i.DEBUG_BUILD &&
            r.debug.log(
              "[Tracing] Skipping browserTracingIntegration setup for bot user agent.",
            );
        else {
          if (
            (r.registerSpanErrorInstrumentation(),
            v &&
            r.GLOBAL_OBJ.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes?.includes(
              "long-animation-frame",
            )
              ? o.startTrackingLongAnimationFrames()
              : T && o.startTrackingLongTasks(),
            A && o.startTrackingInteractions(),
            H && n)
          ) {
            const e = () => {
              X = r.timestampInSeconds();
            };
            addEventListener("click", e, { capture: !0 }),
              addEventListener("keydown", e, {
                capture: !0,
                passive: !0,
              });
          }
          e.on("startNavigationSpan", (n, o) => {
            if (r.getClient() !== e) return;
            if (o?.isRedirect)
              return (
                i.DEBUG_BUILD &&
                  r.debug.warn(
                    "[Tracing] Detected redirect, navigation span will not be the root span, but a child span.",
                  ),
                void z(e, { op: "navigation.redirect", ...n }, !1, o.url)
              );
            (X = void 0),
              t(),
              r.getIsolationScope().setPropagationContext({
                traceId: r.generateTraceId(),
                sampleRand: Math.random(),
                propagationSpanId: r.hasSpansEnabled()
                  ? void 0
                  : r.generateSpanId(),
              });
            const s = r.getCurrentScope();
            s.setPropagationContext({
              traceId: r.generateTraceId(),
              sampleRand: Math.random(),
              propagationSpanId: r.hasSpansEnabled()
                ? void 0
                : r.generateSpanId(),
            }),
              s.setSDKProcessingMetadata({
                normalizedRequest: void 0,
              }),
              z(
                e,
                {
                  op: "navigation",
                  ...n,
                  parentSpan: null,
                  forceTransaction: !0,
                },
                !0,
                o?.url,
              );
          }),
            e.on("startPageLoadSpan", (n, o = {}) => {
              if (r.getClient() !== e) return;
              t();
              const i = o.sentryTrace || E("sentry-trace") || y("sentry-trace"),
                a = o.baggage || E("baggage") || y("baggage"),
                c = r.propagationContextFromHeaders(i, a),
                u = r.getCurrentScope();
              u.setPropagationContext(c),
                r.hasSpansEnabled() ||
                  (u.getPropagationContext().propagationSpanId =
                    r.generateSpanId()),
                u.setSDKProcessingMetadata({
                  normalizedRequest: s.getHttpRequestData(),
                }),
                z(e, { op: "pageload", ...n });
            }),
            e.on("endPageloadSpan", () => {
              $ &&
                Z &&
                (Z.setAttribute(
                  r.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
                  "reportPageLoaded",
                ),
                Z.end());
            });
        }
        function t() {
          const t = b(e);
          t &&
            !r.spanToJSON(t).timestamp &&
            (i.DEBUG_BUILD &&
              r.debug.log(
                `[Tracing] Finishing current active span with op: ${r.spanToJSON(t).op}`,
              ),
            t.setAttribute(
              r.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
              "cancelled",
            ),
            t.end());
        }
      },
      afterAllSetup(e) {
        if (K) return;
        e.addIntegration &&
          !e.getIntegrationByName?.(c.WEB_VITALS_INTEGRATION_NAME) &&
          e.addIntegration(
            c.webVitalsIntegration({
              ignore: h ? [] : ["inp"],
              _experiments: {
                enableStandaloneClsSpans: N,
                enableStandaloneLcpSpans: R,
              },
            }),
          );
        let n = r.getLocationHref();
        if (
          ("off" !== W &&
            l.linkTraces(e, {
              linkPreviousTrace: W,
              consistentTraceSampling: V,
            }),
          s.WINDOW.location)
        ) {
          if (F) {
            const t = r.browserPerformanceTimeOrigin();
            _(e, {
              name: s.WINDOW.location.pathname,
              startTime: t ? t / 1e3 : void 0,
              attributes: {
                [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser",
              },
            });
          }
          j &&
            o.addHistoryInstrumentationHandler(({ to: t, from: o }) => {
              if (void 0 === o && -1 !== n?.indexOf(t))
                return void (n = void 0);
              n = void 0;
              const i = r.parseStringToURLObject(t),
                a = b(e),
                c =
                  a &&
                  H &&
                  (function (e, t) {
                    const n = r.spanToJSON(e),
                      o = r.dateTimestampInSeconds();
                    return (
                      !(o - n.start_timestamp > 1.5) && !(t && o - t <= 1.5)
                    );
                  })(a, X);
              S(
                e,
                {
                  name: i?.pathname || s.WINDOW.location.pathname,
                  attributes: {
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                      "auto.navigation.browser",
                  },
                },
                { url: t, isRedirect: c },
              );
            });
        }
        P && u.registerBackgroundTabDetection(),
          A &&
            (function (e, t, n, o, a) {
              let c;
              s.WINDOW.document &&
                addEventListener(
                  "click",
                  () => {
                    const s = "ui.action.click",
                      u = b(e);
                    if (u) {
                      const e = r.spanToJSON(u).op;
                      if (["navigation", "pageload"].includes(e))
                        return void (
                          i.DEBUG_BUILD &&
                          r.debug.warn(
                            `[Tracing] Did not create ${s} span because a pageload or navigation span is in progress.`,
                          )
                        );
                    }
                    c &&
                      (c.setAttribute(
                        r.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
                        "interactionInterrupted",
                      ),
                      c.end(),
                      (c = void 0)),
                      a.name
                        ? (c = r.startIdleSpan(
                            {
                              name: a.name,
                              op: s,
                              attributes: {
                                [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]:
                                  a.source || "url",
                              },
                            },
                            {
                              idleTimeout: t,
                              finalTimeout: n,
                              childSpanTimeout: o,
                            },
                          ))
                        : i.DEBUG_BUILD &&
                          r.debug.warn(
                            `[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`,
                          );
                  },
                  { capture: !0 },
                );
            })(e, O, w, k, t),
          d.instrumentOutgoingRequests(e, {
            traceFetch: L,
            traceXHR: x,
            tracePropagationTargets: e.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: D,
            enableHTTPTimings: U,
            onRequestSpanStart: Y,
            onRequestSpanEnd: q,
          }),
          M && e.addIntegration(a.fetchStreamPerformanceIntegration());
      },
    };
  }),
  (t.getMetaContent = E),
  (t.getServerTiming = y),
  (t.isBotUserAgent = g),
  (t.startBrowserTracingNavigationSpan = S),
  (t.startBrowserTracingPageLoadSpan = _);

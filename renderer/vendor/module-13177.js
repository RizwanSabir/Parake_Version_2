// vendor/module-13177.js — webpack module 13177
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(57230 /* vendor/module-57230 */),
  a = n(39053 /* vendor/module-39053 */),
  s = n(9674 /* vendor/module-9674 */),
  l = n(96495 /* vendor/module-96495 */),
  c = n(12050 /* vendor/module-12050 */),
  u = n(47490 /* vendor/module-47490 */),
  d = n(51156 /* vendor/module-51156 */),
  p = n(88516 /* vendor/module-88516 */),
  f = "BrowserTracing",
  h =
    /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
function m() {
  const e = a.WINDOW.navigator;
  return !!e?.userAgent && h.test(e.userAgent);
}
const g = {
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
function y(e, t, n) {
  e.emit("startPageLoadSpan", t, n),
    r.getCurrentScope().setTransactionName(t.name);
  const o = x(e);
  return o && e.emit("afterStartPageLoadSpan", o), o;
}
function v(e, t, n) {
  const { url: o, isRedirect: i } = n || {};
  e.emit("beforeStartNavigationSpan", t, { isRedirect: i, url: o }),
    e.emit("startNavigationSpan", t, { isRedirect: i, url: o });
  const s = r.getCurrentScope();
  return (
    s.setTransactionName(t.name),
    o &&
      !i &&
      s.setSDKProcessingMetadata({
        normalizedRequest: { ...a.getHttpRequestData(), url: o },
      }),
    x(e)
  );
}
function b(e) {
  const t = a.WINDOW.document,
    n = t?.querySelector(`meta[name=${e}]`);
  return n?.getAttribute("content") || void 0;
}
function S(e) {
  const t = a.WINDOW.performance?.getEntriesByType?.("navigation")[0],
    n = t?.serverTiming?.find((t) => t.name === e);
  return n?.description;
}
const _ = "_sentry_idleSpan";
function x(e) {
  return e[_];
}
function w(e, t) {
  r.addNonEnumerableProperty(e, _, t);
}
(t.BROWSER_TRACING_INTEGRATION_ID = f),
  (t.browserTracingIntegration = (e = {}) => {
    "enableElementTiming" in e && r.consoleSandbox(() => {});
    const t = { name: void 0, source: void 0 },
      n = a.WINDOW.document,
      {
        enableInp: h,
        enableLongTask: _,
        enableLongAnimationFrame: E,
        _experiments: {
          enableInteractions: T,
          enableStandaloneClsSpans: k,
          enableStandaloneLcpSpans: C,
        },
        beforeStartSpan: I,
        idleTimeout: A,
        finalTimeout: O,
        childSpanTimeout: R,
        markBackgroundSpan: M,
        traceFetch: P,
        traceXHR: N,
        trackFetchStreamPerformance: D,
        shouldCreateSpanForRequest: j,
        enableHTTPTimings: L,
        ignoreResourceSpans: F,
        ignorePerformanceApiSpans: U,
        instrumentPageLoad: B,
        instrumentNavigation: z,
        detectRedirects: H,
        linkPreviousTrace: V,
        consistentTraceSampling: q,
        enableReportPageLoaded: G,
        onRequestSpanStart: W,
        onRequestSpanEnd: $,
      } = { ...g, ...e },
      Y = m();
    let K, Z;
    function Q(e, i, a = !0, s) {
      const l = "pageload" === i.op,
        c = i.name,
        u = I ? I(i) : i,
        d = r.parseStringToURLObject(s || r.getLocationHref()),
        f = {
          ...(d?.pathname && { [p.URL_PATH]: d.pathname }),
          ...(d && !r.isURLObjectRelative(d) && { [p.URL_FULL]: d.href }),
          ...u.attributes,
        };
      if (
        (c !== u.name && (f[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom"),
        (u.attributes = f),
        !a)
      ) {
        const e = r.dateTimestampInSeconds();
        return void r.startInactiveSpan({ ...u, startTime: e }).end(e);
      }
      (t.name = u.name), (t.source = f[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]);
      const h = r.startIdleSpan(u, {
        idleTimeout: A,
        finalTimeout: O,
        childSpanTimeout: R,
        disableAutoFinish: l,
        beforeSpanEnd: (t) => {
          o.addPerformanceEntries(t, {
            ignoreResourceSpans: F,
            ignorePerformanceApiSpans: U,
            spanStreamingEnabled: r.hasSpanStreamingEnabled(e),
          }),
            w(e, void 0);
          const n = r.getCurrentScope(),
            i = n.getPropagationContext();
          n.setPropagationContext({
            ...i,
            traceId: h.spanContext().traceId,
            sampled: r.spanIsSampled(h),
            dsc: r.getDynamicSamplingContextFromSpan(t),
          }),
            l && (Z = void 0);
        },
        trimIdleSpanEndTimestamp: !G,
      });
      function m() {
        n &&
          ["interactive", "complete"].includes(n.readyState) &&
          (e.emit("idleSpanEnableAutoFinish", h),
          n.removeEventListener("readystatechange", m));
      }
      l && G && (Z = h),
        w(e, h),
        l && !G && n && (n.addEventListener("readystatechange", m), m());
    }
    return {
      name: f,
      setup(e) {
        if (Y)
          i.DEBUG_BUILD &&
            r.debug.log(
              "[Tracing] Skipping browserTracingIntegration setup for bot user agent.",
            );
        else {
          if (
            (r.registerSpanErrorInstrumentation(),
            E &&
            r.GLOBAL_OBJ.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes?.includes(
              "long-animation-frame",
            )
              ? o.startTrackingLongAnimationFrames()
              : _ && o.startTrackingLongTasks(),
            T && o.startTrackingInteractions(),
            H && n)
          ) {
            const e = () => {
              K = r.timestampInSeconds();
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
                void Q(e, { op: "navigation.redirect", ...n }, !1, o.url)
              );
            (K = void 0),
              t(),
              r.getIsolationScope().setPropagationContext({
                traceId: r.generateTraceId(),
                sampleRand: Math.random(),
                propagationSpanId: r.hasSpansEnabled()
                  ? void 0
                  : r.generateSpanId(),
              });
            const a = r.getCurrentScope();
            a.setPropagationContext({
              traceId: r.generateTraceId(),
              sampleRand: Math.random(),
              propagationSpanId: r.hasSpansEnabled()
                ? void 0
                : r.generateSpanId(),
            }),
              a.setSDKProcessingMetadata({
                normalizedRequest: void 0,
              }),
              Q(
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
              const i = o.sentryTrace || b("sentry-trace") || S("sentry-trace"),
                s = o.baggage || b("baggage") || S("baggage"),
                l = r.propagationContextFromHeaders(i, s),
                c = r.getCurrentScope();
              c.setPropagationContext(l),
                r.hasSpansEnabled() ||
                  (c.getPropagationContext().propagationSpanId =
                    r.generateSpanId()),
                c.setSDKProcessingMetadata({
                  normalizedRequest: a.getHttpRequestData(),
                }),
                Q(e, { op: "pageload", ...n });
            }),
            e.on("endPageloadSpan", () => {
              G &&
                Z &&
                (Z.setAttribute(
                  r.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
                  "reportPageLoaded",
                ),
                Z.end());
            });
        }
        function t() {
          const t = x(e);
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
        if (Y) return;
        e.addIntegration &&
          !e.getIntegrationByName?.(l.WEB_VITALS_INTEGRATION_NAME) &&
          e.addIntegration(
            l.webVitalsIntegration({
              ignore: h ? [] : ["inp"],
              _experiments: {
                enableStandaloneClsSpans: k,
                enableStandaloneLcpSpans: C,
              },
            }),
          );
        let n = r.getLocationHref();
        if (
          ("off" !== V &&
            u.linkTraces(e, {
              linkPreviousTrace: V,
              consistentTraceSampling: q,
            }),
          a.WINDOW.location)
        ) {
          if (B) {
            const t = r.browserPerformanceTimeOrigin();
            y(e, {
              name: a.WINDOW.location.pathname,
              startTime: t ? t / 1e3 : void 0,
              attributes: {
                [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser",
              },
            });
          }
          z &&
            o.addHistoryInstrumentationHandler(({ to: t, from: o }) => {
              if (void 0 === o && -1 !== n?.indexOf(t))
                return void (n = void 0);
              n = void 0;
              const i = r.parseStringToURLObject(t),
                s = x(e),
                l =
                  s &&
                  H &&
                  (function (e, t) {
                    const n = r.spanToJSON(e),
                      o = r.dateTimestampInSeconds();
                    return (
                      !(o - n.start_timestamp > 1.5) && !(t && o - t <= 1.5)
                    );
                  })(s, K);
              v(
                e,
                {
                  name: i?.pathname || a.WINDOW.location.pathname,
                  attributes: {
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                      "auto.navigation.browser",
                  },
                },
                { url: t, isRedirect: l },
              );
            });
        }
        M && c.registerBackgroundTabDetection(),
          T &&
            (function (e, t, n, o, s) {
              let l;
              a.WINDOW.document &&
                addEventListener(
                  "click",
                  () => {
                    const a = "ui.action.click",
                      c = x(e);
                    if (c) {
                      const e = r.spanToJSON(c).op;
                      if (["navigation", "pageload"].includes(e))
                        return void (
                          i.DEBUG_BUILD &&
                          r.debug.warn(
                            `[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`,
                          )
                        );
                    }
                    l &&
                      (l.setAttribute(
                        r.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
                        "interactionInterrupted",
                      ),
                      l.end(),
                      (l = void 0)),
                      s.name
                        ? (l = r.startIdleSpan(
                            {
                              name: s.name,
                              op: a,
                              attributes: {
                                [r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]:
                                  s.source || "url",
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
                            `[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`,
                          );
                  },
                  { capture: !0 },
                );
            })(e, A, O, R, t),
          d.instrumentOutgoingRequests(e, {
            traceFetch: P,
            traceXHR: N,
            tracePropagationTargets: e.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: j,
            enableHTTPTimings: L,
            onRequestSpanStart: W,
            onRequestSpanEnd: $,
          }),
          D && e.addIntegration(s.fetchStreamPerformanceIntegration());
      },
    };
  }),
  (t.getMetaContent = b),
  (t.getServerTiming = S),
  (t.isBotUserAgent = m),
  (t.startBrowserTracingNavigationSpan = v),
  (t.startBrowserTracingPageLoadSpan = y);

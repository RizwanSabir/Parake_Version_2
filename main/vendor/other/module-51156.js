// vendor/other/module-51156.js — webpack module 51156
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = n(1404 /* vendor/other/module-1404 */),
  s = n(88516 /* vendor/other/module-88516 */),
  a = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  };
function c(e, t) {
  const { url: n } = r.spanToJSON(e).data;
  if (!n || "string" != typeof n) return;
  let s = () => {
    setTimeout(a);
  };
  if (r.hasSpanStreamingEnabled(t)) {
    const t = e.end.bind(e);
    e.end = (e) => {
      const n = e ?? r.timestampInSeconds();
      let o = !1;
      const i = () => {
        o || ((o = !0), setTimeout(a), t(n), clearTimeout(c));
      };
      s = i;
      const c = setTimeout(i, 300);
    };
  }
  const a = o.addPerformanceInstrumentationHandler(
    "resource",
    ({ entries: t }) => {
      t.forEach((t) => {
        i.isPerformanceResourceTiming(t) &&
          t.name.endsWith(n) &&
          (e.setAttributes(o.resourceTimingToSpanAttributes(t)), s());
      });
    },
  );
}
function u(e, t) {
  const n = r.getLocationHref();
  if (n) {
    let o, i;
    try {
      (o = new URL(e, n)), (i = new URL(n).origin);
    } catch {
      return !1;
    }
    const s = o.origin === i;
    return t
      ? r.stringMatchesSomePattern(o.toString(), t) ||
          (s && r.stringMatchesSomePattern(o.pathname, t))
      : s;
  }
  {
    const n = !!e.match(/^\/(?!\/)/);
    return t ? r.stringMatchesSomePattern(e, t) : n;
  }
}
(t.defaultRequestInstrumentationOptions = a),
  (t.instrumentOutgoingRequests = function (e, t) {
    const {
        traceFetch: n,
        traceXHR: l,
        shouldCreateSpanForRequest: d,
        enableHTTPTimings: p,
        tracePropagationTargets: f,
        onRequestSpanStart: h,
        onRequestSpanEnd: g,
      } = { ...a, ...t },
      m = "function" == typeof d ? d : (e) => !0,
      _ = (e) => u(e, f),
      S = {},
      E = e.getOptions().propagateTraceparent;
    n &&
      r.addFetchInstrumentationHandler((t) => {
        const n = r.instrumentFetchRequest(t, m, _, S, {
          propagateTraceparent: E,
          onRequestSpanEnd: g,
        });
        if (n) {
          const o = i.getFullURL(t.fetchData.url),
            a = o ? r.parseUrl(o).host : void 0,
            u = o ? r.stripDataUrlContent(o) : void 0;
          n.setAttributes({
            [s.HTTP_URL]: u,
            [s.URL_FULL]: u,
            "server.address": a,
          }),
            p && c(n, e),
            h?.(n, { headers: t.headers });
        }
      }),
      l &&
        o.addXhrInstrumentationHandler((t) => {
          const n = (function (e, t, n, a, c, u) {
            const l = e.xhr,
              d = l?.[o.SENTRY_XHR_DATA_KEY];
            if (!l || l.__sentry_own_request__ || !d) return;
            const { url: p, method: f } = d,
              h = r.hasSpansEnabled() && t(p);
            if (e.endTimestamp) {
              const t = l.__sentry_xhr_span_id__;
              if (!t) return;
              const n = a[t];
              return void (
                n &&
                (h &&
                  void 0 !== d.status_code &&
                  (r.setHttpStatus(n, d.status_code),
                  n.end(),
                  u?.(n, {
                    headers: i.createHeadersSafely(
                      o.parseXhrResponseHeaders(l),
                    ),
                    error: e.error,
                  })),
                delete a[t])
              );
            }
            const g = i.getFullURL(p),
              m = g ? r.parseUrl(g) : r.parseUrl(p),
              _ = g ? r.stripDataUrlContent(g) : void 0,
              S = r.stripDataUrlContent(r.stripUrlQueryAndFragment(p)),
              E = r.getClient(),
              y = !!r.getActiveSpan(),
              T = y || (!!E && r.hasSpanStreamingEnabled(E)),
              b =
                h && T
                  ? r.startInactiveSpan({
                      name: `${f} ${S}`,
                      attributes: {
                        url: r.stripDataUrlContent(p),
                        type: "xhr",
                        "http.method": f,
                        "http.url": _,
                        [s.URL_FULL]: _,
                        "server.address": m?.host,
                        [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                          "auto.http.browser",
                        [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
                        ...(m?.search && { "http.query": m?.search }),
                        ...(m?.hash && { "http.fragment": m?.hash }),
                      },
                    })
                  : new r.SentryNonRecordingSpan(),
              I = r.spanIsIgnored(b) && y ? void 0 : b;
            return (
              h && !T && E?.recordDroppedEvent("no_parent_span", "span"),
              (l.__sentry_xhr_span_id__ = b.spanContext().spanId),
              (a[l.__sentry_xhr_span_id__] = b),
              n(p) &&
                (function (e, t, n) {
                  const {
                    "sentry-trace": o,
                    baggage: s,
                    traceparent: a,
                  } = r.getTraceData({
                    span: t,
                    propagateTraceparent: n,
                  });
                  o &&
                    (function (e, t, n, r) {
                      const o = e.__sentry_xhr_v3__?.request_headers;
                      if (!o?.["sentry-trace"] && e.setRequestHeader)
                        try {
                          if (
                            (e.setRequestHeader("sentry-trace", t),
                            r &&
                              !o?.traceparent &&
                              e.setRequestHeader("traceparent", r),
                            n)
                          ) {
                            const t = o?.baggage;
                            (t && i.baggageHeaderHasSentryValues(t)) ||
                              e.setRequestHeader("baggage", n);
                          }
                        } catch {}
                    })(e, o, s, a);
                })(l, r.hasSpansEnabled() && T ? I : void 0, c),
              E && E.emit("beforeOutgoingRequestSpan", b, e),
              b
            );
          })(t, m, _, S, E, g);
          n &&
            (p && c(n, e),
            h?.(n, {
              headers: i.createHeadersSafely(
                t.xhr.__sentry_xhr_v3__?.request_headers,
              ),
            }));
        });
  }),
  (t.shouldAttachHeaders = u);

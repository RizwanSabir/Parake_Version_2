// vendor/module-51156.js — webpack module 51156
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(1404 /* vendor/module-1404 */),
  a = n(88516 /* vendor/module-88516 */),
  s = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  };
function l(e, t) {
  const { url: n } = r.spanToJSON(e).data;
  if (!n || "string" != typeof n) return;
  let a = () => {
    setTimeout(s);
  };
  if (r.hasSpanStreamingEnabled(t)) {
    const t = e.end.bind(e);
    e.end = (e) => {
      const n = e ?? r.timestampInSeconds();
      let o = !1;
      const i = () => {
        o || ((o = !0), setTimeout(s), t(n), clearTimeout(l));
      };
      a = i;
      const l = setTimeout(i, 300);
    };
  }
  const s = o.addPerformanceInstrumentationHandler(
    "resource",
    ({ entries: t }) => {
      t.forEach((t) => {
        i.isPerformanceResourceTiming(t) &&
          t.name.endsWith(n) &&
          (e.setAttributes(o.resourceTimingToSpanAttributes(t)), a());
      });
    },
  );
}
function c(e, t) {
  const n = r.getLocationHref();
  if (n) {
    let o, i;
    try {
      (o = new URL(e, n)), (i = new URL(n).origin);
    } catch {
      return !1;
    }
    const a = o.origin === i;
    return t
      ? r.stringMatchesSomePattern(o.toString(), t) ||
          (a && r.stringMatchesSomePattern(o.pathname, t))
      : a;
  }
  {
    const n = !!e.match(/^\/(?!\/)/);
    return t ? r.stringMatchesSomePattern(e, t) : n;
  }
}
(t.defaultRequestInstrumentationOptions = s),
  (t.instrumentOutgoingRequests = function (e, t) {
    const {
        traceFetch: n,
        traceXHR: u,
        shouldCreateSpanForRequest: d,
        enableHTTPTimings: p,
        tracePropagationTargets: f,
        onRequestSpanStart: h,
        onRequestSpanEnd: m,
      } = { ...s, ...t },
      g = "function" == typeof d ? d : (e) => !0,
      y = (e) => c(e, f),
      v = {},
      b = e.getOptions().propagateTraceparent;
    n &&
      r.addFetchInstrumentationHandler((t) => {
        const n = r.instrumentFetchRequest(t, g, y, v, {
          propagateTraceparent: b,
          onRequestSpanEnd: m,
        });
        if (n) {
          const o = i.getFullURL(t.fetchData.url),
            s = o ? r.parseUrl(o).host : void 0,
            c = o ? r.stripDataUrlContent(o) : void 0;
          n.setAttributes({
            [a.HTTP_URL]: c,
            [a.URL_FULL]: c,
            "server.address": s,
          }),
            p && l(n, e),
            h?.(n, { headers: t.headers });
        }
      }),
      u &&
        o.addXhrInstrumentationHandler((t) => {
          const n = (function (e, t, n, s, l, c) {
            const u = e.xhr,
              d = u?.[o.SENTRY_XHR_DATA_KEY];
            if (!u || u.__sentry_own_request__ || !d) return;
            const { url: p, method: f } = d,
              h = r.hasSpansEnabled() && t(p);
            if (e.endTimestamp) {
              const t = u.__sentry_xhr_span_id__;
              if (!t) return;
              const n = s[t];
              return void (
                n &&
                (h &&
                  void 0 !== d.status_code &&
                  (r.setHttpStatus(n, d.status_code),
                  n.end(),
                  c?.(n, {
                    headers: i.createHeadersSafely(
                      o.parseXhrResponseHeaders(u),
                    ),
                    error: e.error,
                  })),
                delete s[t])
              );
            }
            const m = i.getFullURL(p),
              g = m ? r.parseUrl(m) : r.parseUrl(p),
              y = m ? r.stripDataUrlContent(m) : void 0,
              v = r.stripDataUrlContent(r.stripUrlQueryAndFragment(p)),
              b = r.getClient(),
              S = !!r.getActiveSpan(),
              _ = S || (!!b && r.hasSpanStreamingEnabled(b)),
              x =
                h && _
                  ? r.startInactiveSpan({
                      name: `${f} ${v}`,
                      attributes: {
                        url: r.stripDataUrlContent(p),
                        type: "xhr",
                        "http.method": f,
                        "http.url": y,
                        [a.URL_FULL]: y,
                        "server.address": g?.host,
                        [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                          "auto.http.browser",
                        [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
                        ...(g?.search && { "http.query": g?.search }),
                        ...(g?.hash && { "http.fragment": g?.hash }),
                      },
                    })
                  : new r.SentryNonRecordingSpan(),
              w = r.spanIsIgnored(x) && S ? void 0 : x;
            return (
              h && !_ && b?.recordDroppedEvent("no_parent_span", "span"),
              (u.__sentry_xhr_span_id__ = x.spanContext().spanId),
              (s[u.__sentry_xhr_span_id__] = x),
              n(p) &&
                (function (e, t, n) {
                  const {
                    "sentry-trace": o,
                    baggage: a,
                    traceparent: s,
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
                    })(e, o, a, s);
                })(u, r.hasSpansEnabled() && _ ? w : void 0, l),
              b && b.emit("beforeOutgoingRequestSpan", x, e),
              x
            );
          })(t, g, y, v, b, m);
          n &&
            (p && l(n, e),
            h?.(n, {
              headers: i.createHeadersSafely(
                t.xhr.__sentry_xhr_v3__?.request_headers,
              ),
            }));
        });
  }),
  (t.shouldAttachHeaders = c);

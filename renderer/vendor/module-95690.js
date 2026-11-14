// vendor/module-95690.js — webpack module 95690
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(42123 /* vendor/module-42123 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(76041 /* vendor/module-76041 */),
  s = n(72925 /* vendor/module-72925 */),
  l = n(41194 /* vendor/module-41194 */),
  c = n(48120 /* vendor/module-48120 */),
  u = n(82954 /* vendor/module-82954 */),
  d = n(87660 /* vendor/module-87660 */),
  p = n(73802 /* vendor/module-73802 */),
  f = n(77481 /* vendor/module-77481 */),
  h = n(97190 /* vendor/module-97190 */),
  m = n(12724 /* vendor/module-12724 */),
  g = n(19648 /* vendor/module-19648 */),
  y = n(88516 /* vendor/module-88516 */),
  v = n(93979 /* vendor/module-93979 */),
  b = "Http.Server",
  S = new WeakMap(),
  _ = Symbol.for("sentry_http_server_instrumented");
function x(e, t) {
  const n = t.emit;
  if (n === S.get(t)) return;
  const r = new Proxy(n, {
    apply(t, n, r) {
      const [s, ...m] = r;
      if ("request" !== s) return t.apply(n, r);
      const g = a.getClient(),
        [y, v] = m;
      if (
        !g ||
        !(function (e) {
          return !e[_] && (e[_] = !0);
        })(y)
      )
        return t.apply(n, r);
      o.DEBUG_BUILD && i.debug.log(b, "Handling incoming request");
      const S = a.getIsolationScope().clone();
      S.setClient(g);
      const x = y.socket?.remoteAddress,
        w = y.url || "/",
        E = l.httpRequestToRequestData(y),
        {
          maxRequestBodySize: T = "medium",
          ignoreRequestBody: k,
          sessions: C = !0,
          sessionFlushingDelayMS: I = 6e4,
        } = e;
      "none" === T || k?.(w, y) || c.patchRequestToCaptureBody(y, S, T, b),
        S.setSDKProcessingMetadata({
          normalizedRequest: E,
          ipAddress: x,
        });
      const A = `${(y.method || "GET").toUpperCase()} ${u.stripUrlQueryAndFragment(w)}`;
      return (
        S.setTransactionName(A),
        C &&
          d.recordRequestSession(g, {
            requestIsolationScope: S,
            response: v,
            sessionFlushingDelayMS: I ?? 6e4,
          }),
        a.withIsolationScope(S, () => {
          const o = E.headers?.["sentry-trace"],
            i = E.headers?.baggage,
            s = Array.isArray(o) ? o[0] : o;
          return f.continueTrace(
            { sentryTrace: s, baggage: Array.isArray(i) ? i[0] : i },
            () => {
              const o = a.getCurrentScope().getPropagationContext();
              (o.propagationSpanId = p.generateSpanId()),
                s ||
                  ((o.traceId = p.generateTraceId()),
                  (o.sampleRand = h.safeMathRandom())),
                v.once("close", () => {
                  S.setContext("response", {
                    status_code: v.statusCode,
                  });
                });
              const i = e.wrapServerEmitRequest;
              let l = !1;
              return (
                i
                  ? i(y, v, E, () => {
                      l = t.apply(n, r);
                    })
                  : (l = t.apply(n, r)),
                l
              );
            },
          );
        })
      );
    },
  });
  S.set(t, r), (t.emit = r);
}
function w(e) {
  const t = u.stripUrlQueryAndFragment(e);
  return (
    !!t.match(
      /\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot|webp|avif)$/,
    ) ||
    !!t.match(
      /^\/(robots\.txt|sitemap\.xml|manifest\.json|browserconfig\.xml)$/,
    )
  );
}
function E(e) {
  const { headers: t } = e,
    n = t["content-length"],
    r = n ? parseInt(String(n), 10) : -1,
    o = t["content-encoding"];
  return r >= 0
    ? o && "identity" !== o
      ? { "http.request_content_length": r }
      : { "http.request_content_length_uncompressed": r }
    : {};
}
(t.getHttpServerSubscriptions = function (e) {
  const t = e.wrapServerEmitRequest,
    n = (function (e) {
      const {
        wrapServerEmitRequest: t,
        ignoreIncomingRequests: n,
        ignoreStaticAssets: r = !0,
        onSpanCreated: s,
        errorMonitor: c = "error",
        onSpanEnd: d,
      } = e;
      return (e, p, h, b) => {
        return "undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__
          ? t
            ? t(e, p, h, S)
            : S()
          : b();
        function S() {
          const t = a.getIsolationScope().getClient();
          if (!t) return b();
          if (
            (function (
              e,
              { ignoreStaticAssets: t, ignoreIncomingRequests: n },
            ) {
              const r = e.url,
                o = e.method?.toUpperCase();
              return (
                "OPTIONS" === o ||
                "HEAD" === o ||
                !r ||
                !(!t || "GET" !== o || !w(r)) ||
                !!n?.(r, e)
              );
            })(e, {
              ignoreStaticAssets: r,
              ignoreIncomingRequests: n,
            })
          )
            return (
              o.DEBUG_BUILD &&
                i.debug.log(
                  "Http.SentryServerSpans",
                  "Skipping span creation for incoming request",
                  e.url,
                ),
              b()
            );
          const S = h.url || e.url || "/",
            _ = u.parseStringToURLObject(S),
            x = _ ? _.pathname : u.stripUrlQueryAndFragment(S),
            T = (e.method || "GET").toUpperCase(),
            k = `${T} ${x}`,
            C = e.headers,
            I = C["user-agent"],
            A = C["x-forwarded-for"],
            O = e.httpVersion,
            R = C.host,
            M = R?.replace(/^(.*)(:[0-9]{1,5})/, "$1") || "localhost",
            P = S.startsWith("https") ? "https" : "http",
            { socket: N } = e,
            {
              localAddress: D,
              localPort: j,
              remoteAddress: L,
              remotePort: F,
            } = N ?? {};
          return f.startSpanManual(
            {
              name: k,
              kind: v.SPAN_KIND.SERVER,
              attributes: {
                [m.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.server",
                [m.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.server",
                [m.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                "http.route": x,
                "otel.kind": "SERVER",
                "net.host.ip": D,
                "net.host.port": j,
                "net.peer.ip": L,
                "net.peer.port": F,
                "sentry.http.prefetch":
                  ((U = e),
                  "1" === U.headers["next-router-prefetch"] || void 0),
                [y.URL_FULL]: _ && !u.isURLObjectRelative(_) ? _.href : void 0,
                [y.URL_PATH]: _?.pathname ?? x,
                [y.HTTP_URL]: S,
                "http.method": T,
                "http.target": _ ? `${_.pathname}${_.search}` : x,
                "http.host": R,
                "net.host.name": M,
                "http.client_ip":
                  "string" == typeof A ? A.split(",")[0] : void 0,
                "http.user_agent": I,
                "http.scheme": P,
                "http.flavor": O,
                "net.transport":
                  "QUIC" === O?.toUpperCase() ? "ip_udp" : "ip_tcp",
                ...E(e),
                ...l.httpHeadersToSpanAttributes(
                  h.headers || {},
                  t.getDataCollectionOptions(),
                ),
              },
            },
            (n) => {
              s?.(n, e, p);
              let r = !1;
              function o(o) {
                r ||
                  ((r = !0),
                  n.setAttributes({
                    "http.status_text": p.statusMessage?.toUpperCase(),
                    "http.response.status_code": p.statusCode,
                    "http.status_code": p.statusCode,
                    ...l.httpHeadersToSpanAttributes(
                      l.headersToDict(p.headers),
                      t?.getDataCollectionOptions() ?? !1,
                      "response",
                    ),
                  }),
                  n.setStatus(o),
                  d?.(n, e, p),
                  n.end());
              }
              p.once("close", () => {
                o(g.getSpanStatusFromHttpCode(p.statusCode));
              }),
                p.once(c, () => {
                  const e = g.getSpanStatusFromHttpCode(p.statusCode);
                  o(
                    e.code === g.SPAN_STATUS_ERROR
                      ? e
                      : { code: g.SPAN_STATUS_ERROR },
                  );
                }),
                b();
            },
          );
          var U;
        }
      };
    })(e),
    c = {
      ...e,
      wrapServerEmitRequest(r, o, i, l) {
        const c = a.getClient()?.getOptions();
        (e.spans ?? (c && s.hasSpansEnabled(c)))
          ? n(r, o, i, l)
          : t
            ? t(r, o, i, l)
            : l();
      },
    };
  return {
    [r.HTTP_ON_SERVER_REQUEST]: (e) => {
      const { server: t } = e;
      x(c, t);
    },
  };
}),
  (t.instrumentServer = x),
  (t.isStaticAssetRequest = w);

// vendor/other/module-73309.js — webpack module 73309
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(42123 /* vendor/other/module-42123 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(76041 /* vendor/other/module-76041 */),
  a = n(72925 /* vendor/other/module-72925 */),
  c = n(41194 /* vendor/other/module-41194 */),
  u = n(48120 /* vendor/other/module-48120 */),
  l = n(82954 /* vendor/other/module-82954 */),
  d = n(87660 /* vendor/other/module-87660 */),
  p = n(73802 /* vendor/other/module-73802 */),
  f = n(77481 /* vendor/other/module-77481 */),
  h = n(97190 /* vendor/other/module-97190 */),
  g = n(12724 /* vendor/other/module-12724 */),
  m = n(19648 /* vendor/other/module-19648 */),
  _ = n(88516 /* vendor/other/module-88516 */),
  S = n(93979 /* vendor/other/module-93979 */),
  E = "Http.Server",
  y = new WeakMap(),
  T = Symbol.for("sentry_http_server_instrumented");
function b(e, t) {
  const n = t.emit;
  if (n === y.get(t)) return;
  const r = new Proxy(n, {
    apply(t, n, r) {
      const [a, ...g] = r;
      if ("request" !== a) return t.apply(n, r);
      const m = s.getClient(),
        [_, S] = g;
      if (
        !m ||
        !(function (e) {
          return !e[T] && (e[T] = !0);
        })(_)
      )
        return t.apply(n, r);
      o.DEBUG_BUILD && i.debug.log(E, "Handling incoming request");
      const y = s.getIsolationScope().clone();
      y.setClient(m);
      const b = _.socket?.remoteAddress,
        I = _.url || "/",
        v = c.httpRequestToRequestData(_),
        {
          maxRequestBodySize: A = "medium",
          ignoreRequestBody: N,
          sessions: R = !0,
          sessionFlushingDelayMS: C = 6e4,
        } = e;
      "none" === A || N?.(I, _) || u.patchRequestToCaptureBody(_, y, A, E),
        y.setSDKProcessingMetadata({
          normalizedRequest: v,
          ipAddress: b,
        });
      const O = `${(_.method || "GET").toUpperCase()} ${l.stripUrlQueryAndFragment(I)}`;
      return (
        y.setTransactionName(O),
        R &&
          d.recordRequestSession(m, {
            requestIsolationScope: y,
            response: S,
            sessionFlushingDelayMS: C ?? 6e4,
          }),
        s.withIsolationScope(y, () => {
          const o = v.headers?.["sentry-trace"],
            i = v.headers?.baggage,
            a = Array.isArray(o) ? o[0] : o;
          return f.continueTrace(
            { sentryTrace: a, baggage: Array.isArray(i) ? i[0] : i },
            () => {
              const o = s.getCurrentScope().getPropagationContext();
              (o.propagationSpanId = p.generateSpanId()),
                a ||
                  ((o.traceId = p.generateTraceId()),
                  (o.sampleRand = h.safeMathRandom())),
                S.once("close", () => {
                  y.setContext("response", {
                    status_code: S.statusCode,
                  });
                });
              const i = e.wrapServerEmitRequest;
              let c = !1;
              return (
                i
                  ? i(_, S, v, () => {
                      c = t.apply(n, r);
                    })
                  : (c = t.apply(n, r)),
                c
              );
            },
          );
        })
      );
    },
  });
  y.set(t, r), (t.emit = r);
}
function I(e) {
  const t = l.stripUrlQueryAndFragment(e);
  return (
    !!t.match(
      /\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot|webp|avif)$/,
    ) ||
    !!t.match(
      /^\/(robots\.txt|sitemap\.xml|manifest\.json|browserconfig\.xml)$/,
    )
  );
}
function v(e) {
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
        onSpanCreated: a,
        errorMonitor: u = "error",
        onSpanEnd: d,
      } = e;
      return (e, p, h, E) => {
        return "undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__
          ? t
            ? t(e, p, h, y)
            : y()
          : E();
        function y() {
          const t = s.getIsolationScope().getClient();
          if (!t) return E();
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
                !(!t || "GET" !== o || !I(r)) ||
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
              E()
            );
          const y = h.url || e.url || "/",
            T = l.parseStringToURLObject(y),
            b = T ? T.pathname : l.stripUrlQueryAndFragment(y),
            A = (e.method || "GET").toUpperCase(),
            N = `${A} ${b}`,
            R = e.headers,
            C = R["user-agent"],
            O = R["x-forwarded-for"],
            w = e.httpVersion,
            k = R.host,
            P = k?.replace(/^(.*)(:[0-9]{1,5})/, "$1") || "localhost",
            L = y.startsWith("https") ? "https" : "http",
            { socket: x } = e,
            {
              localAddress: M,
              localPort: D,
              remoteAddress: U,
              remotePort: B,
            } = x ?? {};
          return f.startSpanManual(
            {
              name: N,
              kind: S.SPAN_KIND.SERVER,
              attributes: {
                [g.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.server",
                [g.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.server",
                [g.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                "http.route": b,
                "otel.kind": "SERVER",
                "net.host.ip": M,
                "net.host.port": D,
                "net.peer.ip": U,
                "net.peer.port": B,
                "sentry.http.prefetch":
                  ((G = e),
                  "1" === G.headers["next-router-prefetch"] || void 0),
                [_.URL_FULL]: T && !l.isURLObjectRelative(T) ? T.href : void 0,
                [_.URL_PATH]: T?.pathname ?? b,
                [_.HTTP_URL]: y,
                "http.method": A,
                "http.target": T ? `${T.pathname}${T.search}` : b,
                "http.host": k,
                "net.host.name": P,
                "http.client_ip":
                  "string" == typeof O ? O.split(",")[0] : void 0,
                "http.user_agent": C,
                "http.scheme": L,
                "http.flavor": w,
                "net.transport":
                  "QUIC" === w?.toUpperCase() ? "ip_udp" : "ip_tcp",
                ...v(e),
                ...c.httpHeadersToSpanAttributes(
                  h.headers || {},
                  t.getDataCollectionOptions(),
                ),
              },
            },
            (n) => {
              a?.(n, e, p);
              let r = !1;
              function o(o) {
                r ||
                  ((r = !0),
                  n.setAttributes({
                    "http.status_text": p.statusMessage?.toUpperCase(),
                    "http.response.status_code": p.statusCode,
                    "http.status_code": p.statusCode,
                    ...c.httpHeadersToSpanAttributes(
                      c.headersToDict(p.headers),
                      t?.getDataCollectionOptions() ?? !1,
                      "response",
                    ),
                  }),
                  n.setStatus(o),
                  d?.(n, e, p),
                  n.end());
              }
              p.once("close", () => {
                o(m.getSpanStatusFromHttpCode(p.statusCode));
              }),
                p.once(u, () => {
                  const e = m.getSpanStatusFromHttpCode(p.statusCode);
                  o(
                    e.code === m.SPAN_STATUS_ERROR
                      ? e
                      : { code: m.SPAN_STATUS_ERROR },
                  );
                }),
                E();
            },
          );
          var G;
        }
      };
    })(e),
    u = {
      ...e,
      wrapServerEmitRequest(r, o, i, c) {
        const u = s.getClient()?.getOptions();
        (e.spans ?? (u && a.hasSpansEnabled(u)))
          ? n(r, o, i, c)
          : t
            ? t(r, o, i, c)
            : c();
      },
    };
  return {
    [r.HTTP_ON_SERVER_REQUEST]: (e) => {
      const { server: t } = e;
      b(u, t);
    },
  };
}),
  (t.instrumentServer = b),
  (t.isStaticAssetRequest = I);

// vendor/other/module-99279.js — webpack module 99279
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(78474 /* external/node_events */),
  o = n(80781 /* vendor/other/module-80781 */),
  i = n(39454 /* vendor/other/module-39454 */),
  s = n(88516 /* vendor/other/module-88516 */),
  a = n(96137 /* vendor/other/module-96137 */),
  c = n(14052 /* vendor/other/module-14052 */),
  u = n(39254 /* vendor/other/module-39254 */),
  l = "Http.ServerSpans";
function d(e) {
  const t = a.stripUrlQueryAndFragment(e);
  return (
    !!t.match(
      /\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot|webp|avif)$/,
    ) ||
    !!t.match(
      /^\/(robots\.txt|sitemap\.xml|manifest\.json|browserconfig\.xml)$/,
    )
  );
}
function p(e) {
  const t = (function (e) {
    const t = e["content-length"];
    if (void 0 === t) return null;
    const n = parseInt(t, 10);
    return isNaN(n) ? null : n;
  })(e.headers);
  return null == t
    ? {}
    : (function (e) {
          const t = e["content-encoding"];
          return !!t && "identity" !== t;
        })(e.headers)
      ? { "http.request_content_length": t }
      : { "http.request_content_length_uncompressed": t };
}
(t.httpServerSpansIntegration = (e = {}) => {
  const t = e.ignoreStaticAssets ?? !0,
    n = e.ignoreIncomingRequests,
    f = e.ignoreStatusCodes ?? [
      [401, 404],
      [301, 303],
      [305, 399],
    ],
    { onSpanCreated: h } = e,
    {
      requestHook: g,
      responseHook: m,
      applyCustomAttributesOnSpan: _,
    } = e.instrumentation ?? {};
  return {
    name: l,
    setup(e) {
      ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) &&
        e.on("httpServerRequest", (f, S, E) => {
          const y = f,
            T = S;
          u.addStartSpanCallback(y, (u) => {
            if (
              (function (
                e,
                { ignoreStaticAssets: t, ignoreIncomingRequests: n },
              ) {
                if (a.isTracingSuppressed()) return !0;
                const r = e.url,
                  o = e.method?.toUpperCase();
                return (
                  "OPTIONS" === o ||
                  "HEAD" === o ||
                  !r ||
                  !(!t || "GET" !== o || !d(r)) ||
                  !!n?.(r, e)
                );
              })(y, {
                ignoreStaticAssets: t,
                ignoreIncomingRequests: n,
              })
            )
              return (
                c.DEBUG_BUILD &&
                  a.debug.log(
                    l,
                    "Skipping span creation for incoming request",
                    y.url,
                  ),
                u()
              );
            const f = E.url || y.url || "/",
              S = a.parseStringToURLObject(f),
              b = y.headers,
              I = b["user-agent"],
              v = b["x-forwarded-for"],
              A = y.httpVersion,
              N = b.host,
              R = N?.replace(/^(.*)(:[0-9]{1,5})/, "$1") || "localhost",
              C = f.startsWith("https") ? "https" : "http",
              O = E.method || y.method?.toUpperCase() || "GET",
              w = S ? S.pathname : a.stripUrlQueryAndFragment(f),
              k = `${O} ${w}`,
              P = a.startInactiveSpan({
                name: k,
                kind: a.SPAN_KIND.SERVER,
                attributes: {
                  [a.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.server",
                  [a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.http",
                  [s.SENTRY_HTTP_PREFETCH]:
                    ((L = y),
                    "1" === L.headers["next-router-prefetch"] || void 0),
                  [s.URL_FULL]:
                    S && !a.isURLObjectRelative(S) ? S.href : void 0,
                  [s.URL_PATH]: S?.pathname ?? w,
                  [s.HTTP_URL]: f,
                  [s.HTTP_METHOD]: E.method,
                  [s.HTTP_TARGET]: S ? `${S.pathname}${S.search}` : w,
                  [s.HTTP_HOST]: N,
                  [s.NET_HOST_NAME]: R,
                  [s.HTTP_CLIENT_IP]:
                    "string" == typeof v ? v.split(",")[0] : void 0,
                  [s.HTTP_USER_AGENT]: I,
                  [s.HTTP_SCHEME]: C,
                  [s.HTTP_FLAVOR]: A,
                  [s.NET_TRANSPORT]:
                    "QUIC" === A?.toUpperCase() ? "ip_udp" : "ip_tcp",
                  ...p(y),
                  ...a.httpHeadersToSpanAttributes(
                    E.headers || {},
                    e.getDataCollectionOptions(),
                  ),
                },
              });
            var L;
            g?.(P, y), m?.(P, T), _?.(P, y, T), h?.(P, y, T);
            const x = { type: i.RPCType.HTTP, span: P };
            return a.withActiveSpan(P, () =>
              o.context.with(i.setRPCMetadata(o.context.active(), x), () => {
                a.bindScopeToEmitter(y), a.bindScopeToEmitter(T);
                let e = !1;
                function t(t) {
                  if (e) return;
                  e = !0;
                  const n = (function (e, t, n) {
                    const { socket: r } = e,
                      { statusCode: o, statusMessage: a } = t,
                      c = {
                        [s.HTTP_RESPONSE_STATUS_CODE]: o,
                        [s.HTTP_STATUS_CODE]: o,
                        "http.status_text": a?.toUpperCase(),
                      };
                    if (r) {
                      const {
                        localAddress: e,
                        localPort: t,
                        remoteAddress: n,
                        remotePort: o,
                      } = r;
                      (c[s.NET_HOST_IP] = e),
                        (c[s.NET_HOST_PORT] = t),
                        (c[s.NET_PEER_IP] = n),
                        (c[s.NET_PEER_PORT] = o);
                    }
                    if (
                      ((c[s.HTTP_STATUS_CODE] = o),
                      (c["http.status_text"] = (a || "").toUpperCase()),
                      n?.type === i.RPCType.HTTP && void 0 !== n.route)
                    ) {
                      const e = n.route;
                      c[s.HTTP_ROUTE] = e;
                    }
                    return c;
                  })(y, T, x);
                  P.setAttributes(n), P.setStatus(t), P.end();
                  const r = n["http.route"];
                  r &&
                    a
                      .getIsolationScope()
                      .setTransactionName(
                        `${y.method?.toUpperCase() || "GET"} ${r}`,
                      );
                }
                return (
                  T.on("close", () => {
                    t(a.getSpanStatusFromHttpCode(T.statusCode));
                  }),
                  T.on(r.errorMonitor, () => {
                    const e = a.getSpanStatusFromHttpCode(T.statusCode);
                    t(
                      e.code === a.SPAN_STATUS_ERROR
                        ? e
                        : { code: a.SPAN_STATUS_ERROR },
                    );
                  }),
                  u()
                );
              }),
            );
          });
        });
    },
    processEvent(e) {
      if ("transaction" === e.type) {
        const t = e.contexts?.trace?.data?.["http.response.status_code"];
        if ("number" == typeof t) {
          if (
            (function (e, t) {
              return t.some((t) => {
                if ("number" == typeof t) return t === e;
                const [n, r] = t;
                return e >= n && e <= r;
              });
            })(t, f)
          )
            return (
              c.DEBUG_BUILD &&
                a.debug.log("Dropping transaction due to status code", t),
              null
            );
          e.contexts = {
            ...e.contexts,
            response: { ...e.contexts?.response, status_code: t },
          };
        }
      }
      return e;
    },
    afterAllSetup(e) {
      c.DEBUG_BUILD &&
        (e.getIntegrationByName("Http") &&
          a.debug.warn(
            "It seems that you have manually added `httpServerSpansIntegration` while `httpIntegration` is also present. Make sure to remove `httpIntegration` when adding `httpServerSpansIntegration`.",
          ),
        e.getIntegrationByName("Http.Server") ||
          a.debug.error(
            "It seems that you have manually added `httpServerSpansIntegration` without adding `httpServerIntegration`. This is a requiement for spans to be created - please add the `httpServerIntegration` integration.",
          ));
    },
  };
}),
  (t.isStaticAssetRequest = d);

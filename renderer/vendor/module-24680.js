// vendor/module-24680.js — webpack module 24680
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(18433 /* vendor/module-18433 */),
  s = n(41194 /* vendor/module-41194 */),
  l = n(94257 /* vendor/module-94257 */),
  c = n(63479 /* vendor/module-63479 */),
  u = n(88516 /* vendor/module-88516 */),
  d = o.defineIntegration((e = {}) => {
    function t(t) {
      const n = t.getDataCollectionOptions(),
        r = {
          ...n,
          ...(!0 === e.include?.cookies && !1 === n.cookies && { cookies: !0 }),
          ...(!0 === e.include?.headers &&
            !1 === n.httpHeaders.request && {
              httpHeaders: { ...n.httpHeaders, request: !0 },
            }),
        };
      return {
        dataCollection: r,
        include: {
          cookies: !1 !== r.cookies,
          data: !0,
          headers: !1 !== r.httpHeaders.request,
          ip: r.userInfo,
          query_string: !1 !== r.urlQueryParams,
          url: !0,
          ...e.include,
        },
      };
    }
    return {
      name: "RequestData",
      processEvent(e, n, r) {
        const { sdkProcessingMetadata: o = {} } = e,
          { normalizedRequest: i, ipAddress: a } = o,
          { include: s } = t(r);
        return (
          i &&
            (function (e, t, n, r) {
              if (((e.request = { ...e.request, ...p(t, r) }), r.ip)) {
                const r =
                  (t.headers && l.getClientIPAddress(t.headers)) || n.ipAddress;
                r && (e.user = { ...e.user, ip_address: r });
              }
            })(e, i, { ipAddress: a }, s),
          e
        );
      },
      processSegmentSpan(e, n) {
        const { sdkProcessingMetadata: o = {} } = r
            .getIsolationScope()
            .getScopeData(),
          { normalizedRequest: a, ipAddress: d } = o;
        if (!a) return;
        const { include: f, dataCollection: h } = t(n);
        !(function (e, t, n, r, o) {
          const a = p(t, r),
            d = {};
          if (
            (a.url && (d[u.URL_FULL] = a.url),
            a.method && (d["http.request.method"] = a.method),
            a.query_string &&
              (d[u.URL_QUERY] = (function (e) {
                if ("string" == typeof e) return e || void 0;
                return (
                  (Array.isArray(e) ? e : Object.entries(e))
                    .map(([e, t]) => `${e}=${t}`)
                    .join("&") || void 0
                );
              })(a.query_string)),
            c.safeSetSpanJSONAttributes(e, d),
            a.cookies && Object.keys(a.cookies).length > 0)
          ) {
            const t = Object.entries(a.cookies)
                .map(([e, t]) => `${e}=${t}`)
                .join("; "),
              n = s.httpHeadersToSpanAttributes({ cookie: t }, o, "request");
            c.safeSetSpanJSONAttributes(e, n);
          }
          if (a.headers) {
            const t = s.httpHeadersToSpanAttributes(a.headers, o, "request");
            c.safeSetSpanJSONAttributes(e, t);
          }
          if (null != a.data) {
            const t =
              "string" == typeof a.data ? a.data : JSON.stringify(a.data);
            t &&
              c.safeSetSpanJSONAttributes(e, {
                "http.request.body.data": t,
              });
          }
          if (r.ip) {
            const r =
              (t.headers && l.getClientIPAddress(t.headers)) || n || void 0;
            r &&
              c.safeSetSpanJSONAttributes(e, {
                [i.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: r,
              });
          }
        })(e, a, d, f, h);
      },
    };
  });
function p(e, t) {
  const n = {},
    r = { ...e.headers };
  if (t.headers && ((n.headers = r), t.cookies || delete r.cookie, !t.ip)) {
    const e = new Set(l.ipHeaderNames.map((e) => e.toLowerCase()));
    for (const t of Object.keys(r)) e.has(t.toLowerCase()) && delete r[t];
  }
  if (((n.method = e.method), t.url && (n.url = e.url), t.cookies)) {
    const t = e.cookies || (r?.cookie ? a.parseCookie(r.cookie) : void 0);
    n.cookies = t || {};
  }
  return (
    t.query_string && (n.query_string = e.query_string),
    t.data && (n.data = e.data),
    n
  );
}
t.requestDataIntegration = d;

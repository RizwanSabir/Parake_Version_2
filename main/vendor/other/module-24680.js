// vendor/other/module-24680.js — webpack module 24680
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(18433 /* vendor/other/module-18433 */),
  a = n(41194 /* vendor/other/module-41194 */),
  c = n(94257 /* vendor/other/module-94257 */),
  u = n(85860 /* vendor/other/module-85860 */),
  l = n(88516 /* vendor/other/module-88516 */),
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
          { normalizedRequest: i, ipAddress: s } = o,
          { include: a } = t(r);
        return (
          i &&
            (function (e, t, n, r) {
              if (((e.request = { ...e.request, ...p(t, r) }), r.ip)) {
                const r =
                  (t.headers && c.getClientIPAddress(t.headers)) || n.ipAddress;
                r && (e.user = { ...e.user, ip_address: r });
              }
            })(e, i, { ipAddress: s }, a),
          e
        );
      },
      processSegmentSpan(e, n) {
        const { sdkProcessingMetadata: o = {} } = r
            .getIsolationScope()
            .getScopeData(),
          { normalizedRequest: s, ipAddress: d } = o;
        if (!s) return;
        const { include: f, dataCollection: h } = t(n);
        !(function (e, t, n, r, o) {
          const s = p(t, r),
            d = {};
          if (
            (s.url && (d[l.URL_FULL] = s.url),
            s.method && (d["http.request.method"] = s.method),
            s.query_string &&
              (d[l.URL_QUERY] = (function (e) {
                if ("string" == typeof e) return e || void 0;
                return (
                  (Array.isArray(e) ? e : Object.entries(e))
                    .map(([e, t]) => `${e}=${t}`)
                    .join("&") || void 0
                );
              })(s.query_string)),
            u.safeSetSpanJSONAttributes(e, d),
            s.cookies && Object.keys(s.cookies).length > 0)
          ) {
            const t = Object.entries(s.cookies)
                .map(([e, t]) => `${e}=${t}`)
                .join("; "),
              n = a.httpHeadersToSpanAttributes({ cookie: t }, o, "request");
            u.safeSetSpanJSONAttributes(e, n);
          }
          if (s.headers) {
            const t = a.httpHeadersToSpanAttributes(s.headers, o, "request");
            u.safeSetSpanJSONAttributes(e, t);
          }
          if (null != s.data) {
            const t =
              "string" == typeof s.data ? s.data : JSON.stringify(s.data);
            t &&
              u.safeSetSpanJSONAttributes(e, {
                "http.request.body.data": t,
              });
          }
          if (r.ip) {
            const r =
              (t.headers && c.getClientIPAddress(t.headers)) || n || void 0;
            r &&
              u.safeSetSpanJSONAttributes(e, {
                [i.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: r,
              });
          }
        })(e, s, d, f, h);
      },
    };
  });
function p(e, t) {
  const n = {},
    r = { ...e.headers };
  if (t.headers && ((n.headers = r), t.cookies || delete r.cookie, !t.ip)) {
    const e = new Set(c.ipHeaderNames.map((e) => e.toLowerCase()));
    for (const t of Object.keys(r)) e.has(t.toLowerCase()) && delete r[t];
  }
  if (((n.method = e.method), t.url && (n.url = e.url), t.cookies)) {
    const t = e.cookies || (r?.cookie ? s.parseCookie(r.cookie) : void 0);
    n.cookies = t || {};
  }
  return (
    t.query_string && (n.query_string = e.query_string),
    t.data && (n.data = e.data),
    n
  );
}
t.requestDataIntegration = d;

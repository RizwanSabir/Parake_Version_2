// vendor/other/module-64569.js — webpack module 64569
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31637 /* external/diagnostics_channel */),
  o = n(87016 /* external/url */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(98957 /* vendor/other/module-98957 */),
  a = n(88516 /* vendor/other/module-88516 */),
  c = n(14052 /* vendor/other/module-14052 */),
  u = "http.request.method_original",
  l = [],
  d = new WeakMap(),
  p = new WeakMap(),
  f = new i.LRUMap(100);
function h(e, t) {
  try {
    return e();
  } catch (e) {
    return void t(e);
  }
}
function g(e, t) {
  const [n = 0, o = 0] = process.version
    .replace("v", "")
    .split(".")
    .map((e) => Number(e));
  n > 18 || (18 === n && o >= 19)
    ? l.push(r.subscribe?.(e, t))
    : l.push(r.channel(e).subscribe(t));
}
function m(e) {
  const t = new Map();
  if (Array.isArray(e.headers))
    for (let n = 0; n < e.headers.length; n += 2) {
      const r = e.headers[n],
        o = e.headers[n + 1];
      "string" == typeof r && void 0 !== o && t.set(r.toLowerCase(), o);
    }
  else if ("string" == typeof e.headers) {
    const n = e.headers.split("\r\n");
    for (const e of n) {
      if (!e) continue;
      const n = e.indexOf(":");
      if (-1 === n) continue;
      const r = e.substring(0, n).toLowerCase(),
        o = e.substring(n + 1).trim(),
        i = t.get(r);
      i && Array.isArray(i) ? i.push(o) : i ? t.set(r, [i, o]) : t.set(r, o);
    }
  }
  return t;
}
t.instrumentUndici = function (e = {}) {
  l.length ||
    (g("undici:request:create", (t) =>
      (function (e, { request: t }) {
        const n = (function (e, t = "/") {
            const n = `${e}`;
            return n.endsWith("/") && t.startsWith("/")
              ? `${n}${t.slice(1)}`
              : n.endsWith("/") || t.startsWith("/")
                ? `${n}${t}`
                : `${n}/${t}`;
          })(t.origin, t.path),
          r = h(
            () => !!e.ignoreOutgoingRequests?.(n),
            (e) =>
              e &&
              c.DEBUG_BUILD &&
              i.debug.error("caught ignoreOutgoingRequests error: ", e),
          ),
          l = i.isTracingSuppressed() || !!r;
        if ((p.set(t, l), !e.spans))
          return void (
            !1 === e.tracePropagation ||
            l ||
            s.addTracePropagationHeadersToFetchRequest(t, f)
          );
        if ("CONNECT" === t.method || r) return;
        let g;
        try {
          g = new o.URL(t.path, t.origin);
        } catch (e) {
          return void (
            c.DEBUG_BUILD && i.debug.warn("could not determine url.full:", e)
          );
        }
        const _ = g.protocol.replace(":", ""),
          S =
            (y = t.method).toUpperCase() in
            {
              CONNECT: !0,
              OPTIONS: !0,
              HEAD: !0,
              GET: !0,
              POST: !0,
              PUT: !0,
              PATCH: !0,
              DELETE: !0,
              TRACE: !0,
              QUERY: !0,
            }
              ? y.toUpperCase()
              : "_OTHER",
          E = {
            [a.HTTP_REQUEST_METHOD]: S,
            [u]: t.method,
            [a.URL_FULL]: g.toString(),
            [a.URL_PATH]: g.pathname,
            [a.URL_QUERY]: g.search,
            [a.URL_SCHEME]: _,
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch",
          };
        var y;
        if (n.startsWith("data:")) {
          const e = i.stripDataUrlContent(n);
          (E["http.url"] = e),
            (E[a.URL_FULL] = e),
            (E[i.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME] =
              `${t.method || "GET"} ${e}`);
        }
        const T = g.hostname,
          b = g.port || { https: "443", http: "80" }[_];
        (E[a.SERVER_ADDRESS] = T),
          b && !isNaN(Number(b)) && (E[a.SERVER_PORT] = Number(b));
        const I = m(t).get("user-agent");
        if (I) {
          const e = Array.isArray(I) ? I[I.length - 1] : I;
          E[a.USER_AGENT_ORIGINAL] = e;
        }
        const v = i.getClient(),
          A = i.startInactiveSpan({
            name: "_OTHER" === S ? "HTTP" : S,
            kind: i.SPAN_KIND.CLIENT,
            attributes: E,
            onlyIfParent: !v || !i.hasSpanStreamingEnabled(v),
          });
        h(
          () => e.requestHook?.(A, t),
          (e) =>
            e &&
            c.DEBUG_BUILD &&
            i.debug.error("caught requestHook error: ", e),
        ),
          s.addTracePropagationHeadersToFetchRequest(t, f, A),
          d.set(t, A);
      })(e, t),
    ),
    g("undici:client:sendHeaders", (t) =>
      (function (e, { request: t, socket: n }) {
        const r = d.get(t);
        if (!r) return;
        const { remoteAddress: o, remotePort: i } = n,
          s = {
            [a.NETWORK_PEER_ADDRESS]: o,
            [a.NETWORK_PEER_PORT]: i,
          };
        if (e.headersToSpanAttributes?.requestHeaders) {
          const n = new Set(
              e.headersToSpanAttributes.requestHeaders.map((e) =>
                e.toLowerCase(),
              ),
            ),
            r = m(t);
          for (const [e, t] of r.entries())
            if (n.has(e)) {
              const n = Array.isArray(t) ? t : [t];
              s[`http.request.header.${e}`] = n;
            }
        }
        r.setAttributes(s);
      })(e, t),
    ),
    g("undici:request:headers", (t) =>
      (function (e, { request: t, response: n }) {
        !1 !== e.breadcrumbs && !p.get(t) && s.addFetchRequestBreadcrumb(t, n);
        const r = d.get(t);
        if (!r) return;
        const o = { [a.HTTP_RESPONSE_STATUS_CODE]: n.statusCode };
        if (
          (h(
            () => e.responseHook?.(r, { request: t, response: n }),
            (e) =>
              e &&
              c.DEBUG_BUILD &&
              i.debug.error("caught responseHook error: ", e),
          ),
          e.headersToSpanAttributes?.responseHeaders)
        ) {
          const t = new Set();
          e.headersToSpanAttributes?.responseHeaders.forEach((e) =>
            t.add(e.toLowerCase()),
          );
          for (let e = 0; e < n.headers.length; e += 2) {
            const r = n.headers[e],
              i = n.headers[e + 1];
            if (void 0 === r || void 0 === i) continue;
            const s = r.toString().toLowerCase(),
              a = i;
            if (t.has(s)) {
              const e = `http.response.header.${s}`;
              Object.prototype.hasOwnProperty.call(o, e)
                ? o[e].push(a.toString())
                : (o[e] = [a.toString()]);
            }
          }
        }
        r.setAttributes(o),
          n.statusCode >= 400 &&
            r.setStatus(i.getSpanStatusFromHttpCode(n.statusCode));
      })(e, t),
    ),
    g("undici:request:trailers", (e) =>
      (function ({ request: e }) {
        const t = d.get(e);
        t && (t.end(), d.delete(e));
      })(e),
    ),
    g("undici:request:error", (e) =>
      (function ({ request: e, error: t }) {
        const n = d.get(e);
        n &&
          (n.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: t.message,
          }),
          n.end(),
          d.delete(e));
      })(e),
    ));
};

// vendor/module-41194.js — webpack module 41194
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(83453 /* vendor/module-83453 */),
  a = n(20216 /* vendor/module-20216 */),
  s = n(93593 /* vendor/module-93593 */),
  l = n(98050 /* vendor/module-98050 */),
  c = 1048576,
  u = [
    "text/",
    "application/json",
    "application/x-www-form-urlencoded",
    "application/xml",
    "application/graphql",
  ];
function d(e) {
  return "small" === e ? 1e3 : "medium" === e ? 1e4 : c;
}
function p(e) {
  const t = {};
  try {
    e.forEach((e, n) => {
      "string" == typeof e && (t[n] = e);
    });
  } catch {}
  return t;
}
function f(e) {
  const t = Object.create(null);
  try {
    Object.entries(e).forEach(([e, n]) => {
      "string" == typeof n
        ? (t[e] = n)
        : "number" == typeof n && (t[e] = String(n));
    });
  } catch {}
  return t;
}
function h(e) {
  return e.replace(/-/g, "_");
}
function m(e, t) {
  const n = e.indexOf(";"),
    r = t && -1 !== n ? e.substring(0, n) : e,
    o = t ? [r] : r.split("; "),
    i = {};
  for (const e of o) {
    const t = e.indexOf("="),
      n = (-1 !== t ? e.substring(0, t) : e).toLowerCase(),
      r = -1 !== t ? e.substring(t + 1) : "";
    i[n] = r;
  }
  return i;
}
function g(e) {
  if (e)
    try {
      const t = new URL(e, "http://s.io").search.slice(1);
      return t.length ? t : void 0;
    } catch {
      return;
    }
}
(t.MAX_BODY_BYTE_LENGTH = c),
  (t.captureBodyFromWinterCGRequest = async function (e, t, n) {
    try {
      const i = e.headers.get("content-type");
      if (
        !(function (e) {
          if (!e) return !1;
          const t = e.toLowerCase();
          return u.some((e) => t.includes(e));
        })(i)
      )
        return void (
          r.DEBUG_BUILD &&
          o.debug.log("Skipping body capture for non-textual content type:", i)
        );
      if (!e.body) return;
      const a = e.headers.get("content-length"),
        s = d(n);
      if (a) {
        const e = parseInt(a, 10);
        if (!isNaN(e) && e > c)
          return void (
            r.DEBUG_BUILD &&
            o.debug.log("Skipping body capture: body too large", e)
          );
      }
      const p = e.clone().text(),
        f = new Promise((e) => {
          l.safeUnref(setTimeout(() => e(null), 2e3));
        }),
        h = await Promise.race([p, f]);
      if (null === h)
        return void (
          r.DEBUG_BUILD && o.debug.log("Timeout reading request body")
        );
      if (!h) return;
      const m = new TextEncoder().encode(h),
        g = m.length;
      let y;
      (y = g > s ? `${new TextDecoder().decode(m.slice(0, s - 3))}...` : h),
        t.setSDKProcessingMetadata({
          normalizedRequest: { data: y },
        }),
        r.DEBUG_BUILD && o.debug.log("Captured request body:", g, "bytes");
    } catch (e) {
      r.DEBUG_BUILD && o.debug.error("Error capturing request body:", e);
    }
  }),
  (t.extractQueryParamsFromUrl = g),
  (t.getMaxBodyByteLength = d),
  (t.headersToDict = f),
  (t.httpHeadersToSpanAttributes = function (e, t = !1, n = "request") {
    const r = "boolean" == typeof t ? i.defaultPiiToCollectionOptions(t) : t,
      o = "request" === n ? r.httpHeaders.request : r.httpHeaders.response,
      l = r.cookies,
      c = `http.${n}.header.`,
      u = {};
    try {
      const t = {};
      for (const [n, r] of Object.entries(e)) {
        if (null == r) continue;
        const e = n.toLowerCase();
        if ("cookie" === e || "set-cookie" === e) {
          if (!1 === l) continue;
          if ("string" == typeof r && "" !== r) {
            const t = m(r, "set-cookie" === e),
              n = s.filterKeyValueData(t, l, a.SENSITIVE_COOKIE_NAME_SNIPPETS);
            for (const [t, r] of Object.entries(n))
              u[`${c}${h(e)}.${h(t)}`] = r;
          } else u[`${c}${h(e)}`] = a.FILTERED_VALUE;
        } else {
          if (!1 === o) continue;
          Array.isArray(r)
            ? (t[e] = r.map((e) => (null != e ? String(e) : e)).join(";"))
            : "string" == typeof r && (t[e] = r);
        }
      }
      if (!1 !== o) {
        const e = s.filterKeyValueData(t, o);
        for (const [t, n] of Object.entries(e)) u[`${c}${h(t)}`] = n;
      }
    } catch {}
    return u;
  }),
  (t.httpRequestToRequestData = function (e) {
    const t = e.headers || {},
      n =
        ("string" == typeof t["x-forwarded-host"]
          ? t["x-forwarded-host"]
          : void 0) || ("string" == typeof t.host ? t.host : void 0),
      r =
        ("string" == typeof t["x-forwarded-proto"]
          ? t["x-forwarded-proto"]
          : void 0) ||
        e.protocol ||
        (e.socket?.encrypted ? "https" : "http"),
      o = e.url || "",
      i = (function ({ url: e, protocol: t, host: n }) {
        return e?.startsWith("http") ? e : e && n ? `${t}://${n}${e}` : void 0;
      })({ url: o, host: n, protocol: r }),
      a = e.body || void 0,
      s = e.cookies;
    return {
      url: i,
      method: e.method,
      query_string: g(o),
      headers: f(t),
      cookies: s,
      data: a,
    };
  }),
  (t.winterCGHeadersToDict = p),
  (t.winterCGRequestToRequestData = function (e) {
    const t = p(e.headers);
    return {
      method: e.method,
      url: e.url,
      query_string: g(e.url),
      headers: t,
    };
  });

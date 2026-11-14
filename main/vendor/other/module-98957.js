// vendor/other/module-98957.js — webpack module 98957
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = "sentry-trace",
  i = "baggage";
function s(e, t) {
  let n = -1;
  for (let o = 0; o < e.length; o += 2) {
    if (e[o] !== t) continue;
    if (-1 === n) {
      n = o;
      continue;
    }
    const s = e[n + 1];
    if (t === i && s) {
      const t = r.mergeBaggageHeaders(e[o + 1], s);
      t && (e[n + 1] = t);
    }
    e.splice(o, 2), (o -= 2);
  }
}
function a(e, t) {
  return e.findIndex((e, n) => n % 2 == 0 && e === t);
}
function c(e, t = "/") {
  try {
    return new URL(t, e).toString();
  } catch {
    const n = `${e}`;
    return n.endsWith("/") && t.startsWith("/")
      ? `${n}${t.slice(1)}`
      : n.endsWith("/") || t.startsWith("/")
        ? `${n}${t}`
        : `${n}/${t}`;
  }
}
(t.addFetchRequestBreadcrumb = function (e, t) {
  const n = (function (e) {
      try {
        const t = c(e.origin, e.path),
          n = r.parseUrl(t),
          o = {
            url: r.getSanitizedUrlString(n),
            "http.method": e.method || "GET",
          };
        return (
          n.search && (o["http.query"] = n.search),
          n.hash && (o["http.fragment"] = n.hash),
          o
        );
      } catch {
        return {};
      }
    })(e),
    o = t.statusCode,
    i = r.getBreadcrumbLogLevelFromHttpStatusCode(o);
  r.addBreadcrumb(
    {
      category: "http",
      data: { status_code: o, ...n },
      type: "http",
      level: i,
    },
    { event: "response", request: e, response: t },
  );
}),
  (t.addTracePropagationHeadersToFetchRequest = function (e, t, n) {
    const u = c(e.origin, e.path),
      { tracePropagationTargets: l, propagateTraceparent: d } =
        r.getClient()?.getOptions() || {};
    if (!r.shouldPropagateTraceForUrl(u, l, t)) return;
    const p = n && r.spanIsIgnored(n) && r.getActiveSpan() ? void 0 : n,
      f = p
        ? r.withActiveSpan(p, () => r.getTraceData({ propagateTraceparent: d }))
        : r.getTraceData({ propagateTraceparent: d });
    if (!f) return;
    const { "sentry-trace": h, baggage: g, traceparent: m } = f,
      _ = Array.isArray(e.headers)
        ? (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              n % 2 == 0
                ? t.push("string" == typeof r ? r : String(r))
                : t.push(Array.isArray(r) ? r.join(", ") : (r ?? ""));
            }
            return t;
          })(e.headers)
        : (function (e) {
            const t = e.split("\r\n"),
              n = [];
            for (const e of t)
              try {
                const t = e.indexOf(":");
                if (-1 === t) continue;
                const r = e.slice(0, t).trim(),
                  o = e.slice(t + 1).trim();
                r && n.push(r, o);
              } catch {
                r.debug.warn(
                  `Failed to convert string request header to array header: ${e}`,
                );
              }
            return n;
          })(e.headers);
    if ((s(_, o), s(_, i), d && s(_, "traceparent"), -1 === a(_, o))) {
      h && _.push(o, h),
        m && -1 === a(_, "traceparent") && _.push("traceparent", m);
      const e = a(_, i);
      if (g && -1 === e) _.push(i, g);
      else if (g) {
        const t = _[e + 1],
          n = r.mergeBaggageHeaders(t, g);
        n && (_[e + 1] = n);
      }
    }
    Array.isArray(e.headers)
      ? e.headers.splice(0, e.headers.length, ..._)
      : (e.headers = (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 2) {
            const r = e[n],
              o = e[n + 1];
            r && null != o && t.push(`${r}: ${o}`);
          }
          return t.length ? t.join("\r\n").concat("\r\n") : "";
        })(_));
  }),
  (t.getAbsoluteUrl = c);

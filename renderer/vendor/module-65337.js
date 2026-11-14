// vendor/module-65337.js — webpack module 65337
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/module-88516 */),
  o = n(76041 /* vendor/module-76041 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(38862 /* vendor/module-38862 */),
  s = n(19648 /* vendor/module-19648 */),
  l = n(23295 /* vendor/module-23295 */),
  c = n(72925 /* vendor/module-72925 */),
  u = n(63059 /* vendor/module-63059 */),
  d = n(32997 /* vendor/module-32997 */),
  p = n(91159 /* vendor/module-91159 */),
  f = n(77481 /* vendor/module-77481 */),
  h = n(17442 /* vendor/module-17442 */),
  m = n(82954 /* vendor/module-82954 */);
function g(e, t, n) {
  const r = "object" == typeof n && null !== n ? n.onRequestSpanEnd : void 0;
  r?.(e, { headers: t.response?.headers, error: t.error });
}
function y(e, t, n, r) {
  const o = h.getTraceData({ span: n, propagateTraceparent: r }),
    i = o["sentry-trace"],
    a = o.baggage,
    s = o.traceparent;
  if (!i) return;
  const c = t.headers || (l.isRequest(e) ? e.headers : void 0);
  if (c) {
    if (
      ((u = c), "undefined" != typeof Headers && l.isInstanceOf(u, Headers))
    ) {
      const e = new Headers(c);
      if (
        (e.get("sentry-trace") || e.set("sentry-trace", i),
        r && s && !e.get("traceparent") && e.set("traceparent", s),
        a)
      ) {
        const t = e.get("baggage");
        t ? v(t) || e.set("baggage", `${t},${a}`) : e.set("baggage", a);
      }
      return e;
    }
    if (
      (function (e) {
        return (
          !!Array.isArray(e) &&
          e.every(
            (e) =>
              Array.isArray(e) && 2 === e.length && "string" == typeof e[0],
          )
        );
      })(c)
    ) {
      const e = [...c];
      e.find((e) => "sentry-trace" === e[0]) || e.push(["sentry-trace", i]),
        r &&
          s &&
          !e.find((e) => "traceparent" === e[0]) &&
          e.push(["traceparent", s]);
      const t = c.find(
        (e) => "baggage" === e[0] && "string" == typeof e[1] && v(e[1]),
      );
      return a && !t && e.push(["baggage", a]), e;
    }
    {
      const e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
        t = "traceparent" in c ? c.traceparent : void 0,
        n = "baggage" in c ? c.baggage : void 0,
        o = n ? (Array.isArray(n) ? [...n] : [n]) : [],
        l = n && (Array.isArray(n) ? n.find((e) => v(e)) : v(n));
      a && !l && o.push(a);
      const u = Object.assign({}, c, {
        "sentry-trace": e ?? i,
        ...(o.length > 0 && { baggage: o.join(",") }),
      });
      return r && s && !t && (u.traceparent = s), u;
    }
  }
  return {
    "sentry-trace": i,
    ...(a && { baggage: a }),
    ...(s && { traceparent: s }),
  };
  var u;
}
function v(e) {
  return (
    "string" == typeof e &&
    e.split(",").some((e) => e.trim().startsWith(d.SENTRY_BAGGAGE_KEY_PREFIX))
  );
}
function b(e, t, n) {
  if (e.startsWith("data:"))
    return {
      name: `${t} ${m.stripDataUrlContent(e)}`,
      attributes: S(e, void 0, t, n),
    };
  const r = m.parseStringToURLObject(e);
  return {
    name: `${t} ${r ? m.getSanitizedUrlStringFromUrlObject(r) : e}`,
    attributes: S(e, r, t, n),
  };
}
function S(e, t, n, o) {
  const a = {
    url: m.stripDataUrlContent(e),
    type: "fetch",
    "http.method": n,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: o,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
  };
  return (
    t &&
      (m.isURLObjectRelative(t) ||
        ((a[r.HTTP_URL] = m.stripDataUrlContent(t.href)),
        (a[r.URL_FULL] = m.stripDataUrlContent(t.href)),
        (a["server.address"] = t.host)),
      t.search && (a["http.query"] = t.search),
      t.hash && (a["http.fragment"] = t.hash)),
    a
  );
}
(t._INTERNAL_getTracingHeadersForFetchRequest = y),
  (t._callOnRequestSpanEnd = g),
  (t.instrumentFetchRequest = function (e, t, n, r, i) {
    if (!e.fetchData) return;
    const { method: l, url: d } = e.fetchData,
      h = c.hasSpansEnabled() && t(d);
    if (e.endTimestamp) {
      const t = e.fetchData.__span;
      if (!t) return;
      const n = r[t];
      return void (
        n &&
        (h &&
          ((function (e, t) {
            if (t.response) {
              s.setHttpStatus(e, t.response.status);
              const n = t.response?.headers?.get("content-length");
              if (n) {
                const t = parseInt(n);
                t > 0 && e.setAttribute("http.response_content_length", t);
              }
            } else
              t.error &&
                e.setStatus({
                  code: s.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            e.end();
          })(n, e),
          g(n, e, i)),
        delete r[t])
      );
    }
    const {
        spanOrigin: m = "auto.http.browser",
        propagateTraceparent: v = !1,
      } = "object" == typeof i ? i : { spanOrigin: i },
      S = o.getClient(),
      _ = !!a.getActiveSpan(),
      x = _ || (!!S && p.hasSpanStreamingEnabled(S)),
      w =
        h && x
          ? f.startInactiveSpan(b(d, l, m))
          : new u.SentryNonRecordingSpan(),
      E = f.spanIsIgnored(w) && _ ? void 0 : w;
    if (
      (h && !x && S?.recordDroppedEvent("no_parent_span", "span"),
      (e.fetchData.__span = w.spanContext().spanId),
      (r[w.spanContext().spanId] = w),
      n(e.fetchData.url))
    ) {
      const t = e.args[0],
        n = { ...(e.args[1] || {}) },
        r = y(t, n, c.hasSpansEnabled() && x ? E : void 0, v);
      r && ((e.args[1] = n), (n.headers = r));
    }
    if (S) {
      const t = {
        input: e.args,
        response: e.response,
        startTimestamp: e.startTimestamp,
        endTimestamp: e.endTimestamp,
      };
      S.emit("beforeOutgoingRequestSpan", w, t);
    }
    return w;
  });

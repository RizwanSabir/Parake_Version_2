// vendor/other/module-65337.js — webpack module 65337
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(76041 /* vendor/other/module-76041 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(38862 /* vendor/other/module-38862 */),
  a = n(19648 /* vendor/other/module-19648 */),
  c = n(23295 /* vendor/other/module-23295 */),
  u = n(72925 /* vendor/other/module-72925 */),
  l = n(63059 /* vendor/other/module-63059 */),
  d = n(32997 /* vendor/other/module-32997 */),
  p = n(91159 /* vendor/other/module-91159 */),
  f = n(77481 /* vendor/other/module-77481 */),
  h = n(17442 /* vendor/other/module-17442 */),
  g = n(82954 /* vendor/other/module-82954 */);
function m(e, t, n) {
  const r = "object" == typeof n && null !== n ? n.onRequestSpanEnd : void 0;
  r?.(e, { headers: t.response?.headers, error: t.error });
}
function _(e, t, n, r) {
  const o = h.getTraceData({ span: n, propagateTraceparent: r }),
    i = o["sentry-trace"],
    s = o.baggage,
    a = o.traceparent;
  if (!i) return;
  const u = t.headers || (c.isRequest(e) ? e.headers : void 0);
  if (u) {
    if (
      ((l = u), "undefined" != typeof Headers && c.isInstanceOf(l, Headers))
    ) {
      const e = new Headers(u);
      if (
        (e.get("sentry-trace") || e.set("sentry-trace", i),
        r && a && !e.get("traceparent") && e.set("traceparent", a),
        s)
      ) {
        const t = e.get("baggage");
        t ? S(t) || e.set("baggage", `${t},${s}`) : e.set("baggage", s);
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
      })(u)
    ) {
      const e = [...u];
      e.find((e) => "sentry-trace" === e[0]) || e.push(["sentry-trace", i]),
        r &&
          a &&
          !e.find((e) => "traceparent" === e[0]) &&
          e.push(["traceparent", a]);
      const t = u.find(
        (e) => "baggage" === e[0] && "string" == typeof e[1] && S(e[1]),
      );
      return s && !t && e.push(["baggage", s]), e;
    }
    {
      const e = "sentry-trace" in u ? u["sentry-trace"] : void 0,
        t = "traceparent" in u ? u.traceparent : void 0,
        n = "baggage" in u ? u.baggage : void 0,
        o = n ? (Array.isArray(n) ? [...n] : [n]) : [],
        c = n && (Array.isArray(n) ? n.find((e) => S(e)) : S(n));
      s && !c && o.push(s);
      const l = Object.assign({}, u, {
        "sentry-trace": e ?? i,
        ...(o.length > 0 && { baggage: o.join(",") }),
      });
      return r && a && !t && (l.traceparent = a), l;
    }
  }
  return {
    "sentry-trace": i,
    ...(s && { baggage: s }),
    ...(a && { traceparent: a }),
  };
  var l;
}
function S(e) {
  return (
    "string" == typeof e &&
    e.split(",").some((e) => e.trim().startsWith(d.SENTRY_BAGGAGE_KEY_PREFIX))
  );
}
function E(e, t, n) {
  if (e.startsWith("data:"))
    return {
      name: `${t} ${g.stripDataUrlContent(e)}`,
      attributes: y(e, void 0, t, n),
    };
  const r = g.parseStringToURLObject(e);
  return {
    name: `${t} ${r ? g.getSanitizedUrlStringFromUrlObject(r) : e}`,
    attributes: y(e, r, t, n),
  };
}
function y(e, t, n, o) {
  const s = {
    url: g.stripDataUrlContent(e),
    type: "fetch",
    "http.method": n,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: o,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
  };
  return (
    t &&
      (g.isURLObjectRelative(t) ||
        ((s[r.HTTP_URL] = g.stripDataUrlContent(t.href)),
        (s[r.URL_FULL] = g.stripDataUrlContent(t.href)),
        (s["server.address"] = t.host)),
      t.search && (s["http.query"] = t.search),
      t.hash && (s["http.fragment"] = t.hash)),
    s
  );
}
(t._INTERNAL_getTracingHeadersForFetchRequest = _),
  (t._callOnRequestSpanEnd = m),
  (t.instrumentFetchRequest = function (e, t, n, r, i) {
    if (!e.fetchData) return;
    const { method: c, url: d } = e.fetchData,
      h = u.hasSpansEnabled() && t(d);
    if (e.endTimestamp) {
      const t = e.fetchData.__span;
      if (!t) return;
      const n = r[t];
      return void (
        n &&
        (h &&
          ((function (e, t) {
            if (t.response) {
              a.setHttpStatus(e, t.response.status);
              const n = t.response?.headers?.get("content-length");
              if (n) {
                const t = parseInt(n);
                t > 0 && e.setAttribute("http.response_content_length", t);
              }
            } else
              t.error &&
                e.setStatus({
                  code: a.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            e.end();
          })(n, e),
          m(n, e, i)),
        delete r[t])
      );
    }
    const {
        spanOrigin: g = "auto.http.browser",
        propagateTraceparent: S = !1,
      } = "object" == typeof i ? i : { spanOrigin: i },
      y = o.getClient(),
      T = !!s.getActiveSpan(),
      b = T || (!!y && p.hasSpanStreamingEnabled(y)),
      I =
        h && b
          ? f.startInactiveSpan(E(d, c, g))
          : new l.SentryNonRecordingSpan(),
      v = f.spanIsIgnored(I) && T ? void 0 : I;
    if (
      (h && !b && y?.recordDroppedEvent("no_parent_span", "span"),
      (e.fetchData.__span = I.spanContext().spanId),
      (r[I.spanContext().spanId] = I),
      n(e.fetchData.url))
    ) {
      const t = e.args[0],
        n = { ...(e.args[1] || {}) },
        r = _(t, n, u.hasSpansEnabled() && b ? v : void 0, S);
      r && ((e.args[1] = n), (n.headers = r));
    }
    if (y) {
      const t = {
        input: e.args,
        response: e.response,
        startTimestamp: e.startTimestamp,
        endTimestamp: e.endTimestamp,
      };
      y.emit("beforeOutgoingRequestSpan", I, t);
    }
    return I;
  });

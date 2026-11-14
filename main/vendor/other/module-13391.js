// vendor/other/module-13391.js — webpack module 13391
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(44846 /* vendor/other/module-44846 */),
  a = n(39454 /* vendor/other/module-39454 */),
  c = "sentry.parentIsRemote",
  u = "sentry.graphql.operation";
function l(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
      ? e.parentSpanContext?.spanId
      : void 0;
}
function d(e) {
  const t = e;
  return o.isObjectLike(t.attributes);
}
function p(e) {
  return "number" == typeof e.kind;
}
function f(e) {
  return !!e.status;
}
function h(e) {
  return !!e.name;
}
function g(e) {
  if (!d(e)) return {};
  const t = e.attributes[i.URL_FULL] || e.attributes[i.HTTP_URL],
    n = {
      url: t,
      "http.method":
        e.attributes[i.HTTP_REQUEST_METHOD] || e.attributes[i.HTTP_METHOD],
    };
  !n["http.method"] && n.url && (n["http.method"] = "GET");
  try {
    if ("string" == typeof t) {
      const e = o.parseUrl(t);
      (n.url = o.getSanitizedUrlString(e)),
        e.search && (n["http.query"] = e.search),
        e.hash && (n["http.fragment"] = e.hash);
    }
  } catch {}
  return n;
}
function m(e) {
  return p(e) ? e.kind : r.SpanKind.INTERNAL;
}
const _ = "sentry-trace",
  S = "baggage",
  E = "sentry.dsc",
  y = "sentry.sampled_not_recording",
  T = "sentry.url",
  b = "sentry.ignored",
  I = "sentry.segment_ignored",
  v = r.createContextKey("sentry_scopes"),
  A = r.createContextKey("sentry_fork_isolation_scope"),
  N = r.createContextKey("sentry_fork_set_scope"),
  R = r.createContextKey("sentry_fork_set_isolation_scope"),
  C = "_scopeContext";
function O(e) {
  return e.getValue(v);
}
function w(e, t) {
  return e.setValue(v, t);
}
function k(e) {
  return o.derefWeakRef(e[C]);
}
function P(e) {
  const { traceFlags: t, traceState: n } = e,
    i = !!n && "1" === n.get(y);
  if (t === r.TraceFlags.SAMPLED) return !0;
  if (i) return !1;
  const s = n ? n.get(E) : void 0,
    a = s ? o.baggageHeaderToDynamicSamplingContext(s) : void 0;
  return "true" === a?.sampled || ("false" !== a?.sampled && void 0);
}
function L(e, t) {
  const n = e.spanContext(),
    r = o.getRootSpan(e),
    i = P(n);
  return void 0 !== i
    ? i
    : !o.spanIsIgnored(r) &&
        (o.hasSpansEnabled(t?.getOptions()) &&
        !n.isRemote &&
        o.spanIsSentrySpan(r)
          ? o.spanIsSampled(e)
          : void 0);
}
function x(e, t, n) {
  const s = t[i.HTTP_REQUEST_METHOD] || t[i.HTTP_METHOD];
  if (s)
    return (function ({ name: e, kind: t, attributes: n }, i) {
      const s = ["http"];
      switch (t) {
        case r.SpanKind.CLIENT:
          s.push("client");
          break;
        case r.SpanKind.SERVER:
          s.push("server");
      }
      n["sentry.http.prefetch"] && s.push("prefetch");
      const {
        urlPath: a,
        url: c,
        query: l,
        fragment: d,
        hasRoute: p,
      } = D(n, t);
      if (!a) return { ...U(e, n), op: s.join(".") };
      const f = n[u],
        h = `${i} ${a}`,
        g = f
          ? `${h} (${(function (e) {
              if (Array.isArray(e)) {
                const t = e.slice().sort();
                return t.length <= 5
                  ? t.join(", ")
                  : `${t.slice(0, 5).join(", ")}, +${t.length - 5}`;
              }
              return `${e}`;
            })(f)})`
          : h,
        m = p || "/" === a ? "route" : "url",
        _ = {};
      c && (_.url = c),
        l && (_["http.query"] = l.slice(1)),
        d && (_["http.fragment"] = d.slice(1));
      const S = t === r.SpanKind.CLIENT || t === r.SpanKind.SERVER,
        E = !`${n[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || "manual"}`.startsWith(
          "auto",
        ),
        y = "custom" === n[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
        T = n[o.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
        b = !y && null == T && (S || !E),
        { description: I, source: v } = b
          ? { description: g, source: m }
          : U(e, n);
      return { op: s.join("."), description: I, source: v, data: _ };
    })({ attributes: t, name: e, kind: n }, s);
  const a = t[i.DB_SYSTEM_NAME] || t[i.DB_SYSTEM],
    c =
      "string" == typeof t[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
      t[o.SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith("cache.");
  if (a && !c)
    return (function ({ attributes: e, name: t }) {
      const n = e[o.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
      if ("string" == typeof n)
        return {
          op: "db",
          description: n,
          source: e[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || "custom",
        };
      if ("custom" === e[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE])
        return { op: "db", description: t, source: "custom" };
      const r = e[i.DB_STATEMENT];
      return {
        op: "db",
        description: r ? r.toString() : t,
        source: "task",
      };
    })({ attributes: t, name: e });
  const l =
    "custom" === t[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ? "custom" : "route";
  if (t[i.RPC_SERVICE]) return { ...U(e, t, "route"), op: "rpc" };
  if (t[i.MESSAGING_SYSTEM]) return { ...U(e, t, l), op: "message" };
  const d = t[i.FAAS_TRIGGER];
  return d
    ? { ...U(e, t, l), op: d.toString() }
    : { op: void 0, description: e, source: "custom" };
}
function M(e) {
  let t, n;
  if (d(e)) (t = e.attributes), (n = h(e) ? e.name : "<unknown>");
  else {
    const r = "function" == typeof e.spanContext ? o.spanToJSON(e) : void 0;
    (t = r?.data || {}), (n = h(e) ? e.name : r?.description || "<unknown>");
  }
  return x(n, t, m(e));
}
function D(e, t) {
  const n = e[i.HTTP_TARGET],
    s = e[i.HTTP_URL] || e[i.URL_FULL],
    a = e[i.HTTP_ROUTE],
    c = "string" == typeof s ? o.parseUrl(s) : void 0,
    u = c ? o.getSanitizedUrlString(c) : void 0,
    l = c?.search || void 0,
    d = c?.hash || void 0;
  return "string" == typeof a
    ? { urlPath: a, url: u, query: l, fragment: d, hasRoute: !0 }
    : t === r.SpanKind.SERVER && "string" == typeof n
      ? {
          urlPath: o.stripUrlQueryAndFragment(n),
          url: u,
          query: l,
          fragment: d,
          hasRoute: !1,
        }
      : c
        ? { urlPath: u, url: u, query: l, fragment: d, hasRoute: !1 }
        : "string" == typeof n
          ? {
              urlPath: o.stripUrlQueryAndFragment(n),
              url: u,
              query: l,
              fragment: d,
              hasRoute: !1,
            }
          : {
              urlPath: void 0,
              url: u,
              query: l,
              fragment: d,
              hasRoute: !1,
            };
}
function U(e, t, n = "custom") {
  const r = t[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || n,
    i = t[o.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  return i && "string" == typeof i
    ? { description: i, source: r }
    : { description: e, source: r };
}
function B() {
  return r.trace.getActiveSpan();
}
const G = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
class F {
  constructor() {
    this._internalState = new Map();
  }
  set(e, t) {
    const n = this._clone();
    return (
      n._internalState.has(e) && n._internalState.delete(e),
      n._internalState.set(e, t),
      n
    );
  }
  unset(e) {
    const t = this._clone();
    return t._internalState.delete(e), t;
  }
  get(e) {
    return this._internalState.get(e);
  }
  serialize() {
    return Array.from(this._internalState.keys())
      .reverse()
      .map((e) => `${e}=${this._internalState.get(e)}`)
      .join(",");
  }
  _clone() {
    const e = new F();
    return (e._internalState = new Map(this._internalState)), e;
  }
}
function j({ dsc: e, sampled: t }) {
  const n = e ? o.dynamicSamplingContextToSentryBaggageHeader(e) : void 0,
    r = new F(),
    i = n ? r.set(E, n) : r;
  return !1 === t ? i.set(y, "1") : i;
}
const H = new Set();
function W(e) {
  H.add(e);
}
class V extends a.W3CBaggagePropagator {
  constructor() {
    super(),
      W("SentryPropagator"),
      (this._urlMatchesTargetsMap = new o.LRUMap(100));
  }
  inject(e, t, n) {
    if (a.isTracingSuppressed(e))
      return void (
        G &&
        o.debug.log(
          "[Tracing] Not injecting trace data for url because tracing is suppressed.",
        )
      );
    const s = r.trace.getSpan(e),
      c =
        s &&
        (function (e) {
          const t = o.spanToJSON(e).data,
            n = t[i.HTTP_URL] || t[i.URL_FULL];
          if ("string" == typeof n) return n;
          const r = e.spanContext().traceState?.get(T);
          return r || void 0;
        })(s),
      { tracePropagationTargets: u, propagateTraceparent: l } =
        o.getClient()?.getOptions() || {};
    if (!o.shouldPropagateTraceForUrl(c, u, this._urlMatchesTargetsMap))
      return void (
        G &&
        o.debug.log(
          "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:",
          c,
        )
      );
    const d = (function (e) {
        try {
          const t = e[S];
          return Array.isArray(t) ? t.join(",") : t;
        } catch {
          return;
        }
      })(t),
      p = (function (e) {
        try {
          return e[_];
        } catch {
          return;
        }
      })(t);
    let f = r.propagation.getBaggage(e) || r.propagation.createBaggage({});
    const {
      dynamicSamplingContext: h,
      traceId: g,
      spanId: m,
      sampled: E,
    } = $(e);
    if (d) {
      const e = o.parseBaggageHeader(d);
      e &&
        Object.entries(e).forEach(([e, t]) => {
          (!p && e.startsWith(o.SENTRY_BAGGAGE_KEY_PREFIX)) ||
            (f = f.setEntry(e, { value: t }));
        });
    }
    !p &&
      h &&
      (f = Object.entries(h).reduce(
        (e, [t, n]) =>
          n
            ? e.setEntry(`${o.SENTRY_BAGGAGE_KEY_PREFIX}${t}`, {
                value: n,
              })
            : e,
        f,
      )),
      !p &&
        g &&
        g !== r.INVALID_TRACEID &&
        (n.set(t, _, o.generateSentryTraceHeader(g, m, E)),
        l && n.set(t, "traceparent", o.generateTraceparentHeader(g, m, E))),
      super.inject(r.propagation.setBaggage(e, f), t, n);
  }
  extract(e, t, n) {
    const r = n.get(t, _),
      o = n.get(t, S);
    return q(
      Y(e, {
        sentryTrace: r ? (Array.isArray(r) ? r[0] : r) : void 0,
        baggage: o,
      }),
    );
  }
  fields() {
    return [_, S, "traceparent"];
  }
}
function $(e, t = {}) {
  const n = r.trace.getSpan(e);
  if (n?.spanContext().isRemote) {
    const e = n.spanContext();
    return {
      dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(n),
      traceId: e.traceId,
      spanId: void 0,
      sampled: P(e),
    };
  }
  if (n) {
    const e = n.spanContext();
    return {
      dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(n),
      traceId: e.traceId,
      spanId: e.spanId,
      sampled: L(n, t.client),
    };
  }
  const i = t.scope || O(e)?.scope || o.getCurrentScope(),
    s = t.client || o.getClient(),
    a = i.getPropagationContext();
  return {
    dynamicSamplingContext: s
      ? o.getDynamicSamplingContextFromScope(s, i)
      : void 0,
    traceId: a.traceId,
    spanId: a.propagationSpanId,
    sampled: a.sampled,
  };
}
function Y(e, { sentryTrace: t, baggage: n }) {
  const i = o.propagationContextFromHeaders(t, n),
    { traceId: s, parentSpanId: a, sampled: c, dsc: u } = i,
    l = o.getClient(),
    d = o.baggageHeaderToDynamicSamplingContext(n);
  if (!a || (l && !o.shouldContinueTrace(l, d?.org_id))) return e;
  const p = (function ({ spanId: e, traceId: t, sampled: n, dsc: o }) {
    const i = j({ dsc: o, sampled: n });
    return {
      traceId: t,
      spanId: e,
      isRemote: !0,
      traceFlags: n ? r.TraceFlags.SAMPLED : r.TraceFlags.NONE,
      traceState: i,
    };
  })({ traceId: s, spanId: a, sampled: c, dsc: u });
  return r.trace.setSpanContext(e, p);
}
function q(e) {
  const t = O(e);
  return w(e, {
    scope: t ? t.scope : o.getCurrentScope().clone(),
    isolationScope: t ? t.isolationScope : o.getIsolationScope(),
  });
}
function K(e, t, n) {
  const i = Q(),
    { name: s, parentSpan: c } = e;
  return se(c)(() => {
    const c = re(e.scope, e.forceTransaction),
      u = e.onlyIfParent && !r.trace.getSpan(c),
      l = u ? a.suppressTracing(c) : c;
    u && o.getClient()?.recordDroppedEvent("no_parent_span", "span");
    const d = ee(e);
    if (!o.hasSpansEnabled()) {
      const e = a.isTracingSuppressed(l) ? l : a.suppressTracing(l);
      return r.context.with(e, () =>
        i.startActiveSpan(
          s,
          d,
          e,
          (e) => (
            ne(e),
            r.context.with(c, () =>
              o.handleCallbackErrors(
                () => t(e),
                () => {
                  void 0 === o.spanToJSON(e).status &&
                    e.setStatus({ code: r.SpanStatusCode.ERROR });
                },
                n ? () => e.end() : void 0,
              ),
            )
          ),
        ),
      );
    }
    return i.startActiveSpan(
      s,
      d,
      l,
      (e) => (
        ne(e),
        o.handleCallbackErrors(
          () => t(e),
          () => {
            void 0 === o.spanToJSON(e).status &&
              e.setStatus({ code: r.SpanStatusCode.ERROR });
          },
          n ? () => e.end() : void 0,
        )
      ),
    );
  });
}
function X(e, t) {
  return K(e, t, !0);
}
function Z(e, t) {
  return K(e, (e) => t(e, () => e.end()), !1);
}
function z(e) {
  const t = Q(),
    { name: n, parentSpan: i } = e;
  return se(i)(() => {
    const i = re(e.scope, e.forceTransaction),
      s = e.onlyIfParent && !r.trace.getSpan(i);
    let c = s ? a.suppressTracing(i) : i;
    s && o.getClient()?.recordDroppedEvent("no_parent_span", "span");
    const u = ee(e);
    o.hasSpansEnabled() ||
      (c = a.isTracingSuppressed(c) ? c : a.suppressTracing(c));
    const l = t.startSpan(n, u, c);
    return ne(l), l;
  });
}
function J(e, t) {
  const n = e
    ? r.trace.setSpan(r.context.active(), e)
    : r.trace.deleteSpan(r.context.active());
  return r.context.with(n, () => t(o.getCurrentScope()));
}
function Q() {
  const e = o.getClient();
  return e?.tracer || r.trace.getTracer("@sentry/opentelemetry", o.SDK_VERSION);
}
function ee(e) {
  const { startTime: t, attributes: n, kind: r, op: i, links: s } = e,
    a = "number" == typeof t ? te(t) : t;
  return {
    attributes: i ? { [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: i, ...n } : n,
    kind: r,
    links: s,
    startTime: a,
  };
}
function te(e) {
  return e < 9999999999 ? 1e3 * e : e;
}
function ne(e) {
  const t = e.end.bind(e);
  e.end = (e) => t("number" == typeof e ? te(e) : e);
}
function re(e, t) {
  const n = (function (e) {
      if (e) {
        const t = k(e);
        if (t) return t;
      }
      return r.context.active();
    })(e),
    i = r.trace.getSpan(n);
  if (!i) return n;
  if (!t) return n;
  const s = r.trace.deleteSpan(n),
    { spanId: a, traceId: c } = i.spanContext(),
    u = P(i.spanContext()),
    l = o.getRootSpan(i),
    d = j({
      dsc: o.getDynamicSamplingContextFromSpan(l),
      sampled: u,
    }),
    p = {
      traceId: c,
      spanId: a,
      isRemote: !0,
      traceFlags: u ? r.TraceFlags.SAMPLED : r.TraceFlags.NONE,
      traceState: d,
    };
  return r.trace.setSpanContext(s, p);
}
function oe(e, t) {
  return (function (e, t, n) {
    const o = q(Y(e, t));
    return r.context.with(o, n);
  })(r.context.active(), e, t);
}
function ie(e) {
  const t = o.generateTraceId(),
    n = o.generateSpanId(),
    i = {
      traceId: t,
      spanId: n,
      isRemote: !0,
      traceFlags: r.TraceFlags.NONE,
    },
    s = r.trace.setSpanContext(r.context.active(), i);
  return r.context.with(
    s,
    () => (
      o.getCurrentScope().setPropagationContext({
        traceId: t,
        sampleRand: o._INTERNAL_safeMathRandom(),
      }),
      e()
    ),
  );
}
function se(e) {
  return void 0 !== e ? (t) => J(e, t) : (e) => e();
}
function ae(e) {
  const t = a.suppressTracing(r.context.active());
  return r.context.with(t, e);
}
function ce(e) {
  const t = e ? k(e) : r.context.active();
  return !!t && a.isTracingSuppressed(t);
}
function ue(e, t) {
  const n = r.trace.getSpan(e);
  let i;
  if ("1" === n?.spanContext().traceState?.get(b)) {
    const n = r.trace.deleteSpan(e),
      o = r.trace.getSpan(t);
    i = o ? r.trace.setSpan(n, o) : n;
  } else i = e;
  const s = O(i),
    a = s?.scope || o.getCurrentScope(),
    c = s?.isolationScope || o.getIsolationScope(),
    u = !0 === i.getValue(A),
    l = i.getValue(N),
    d = i.getValue(R),
    p = l || a.clone(),
    f = w(i, { scope: p, isolationScope: d || (u ? c.clone() : c) })
      .deleteValue(A)
      .deleteValue(N)
      .deleteValue(R);
  return (
    (function (e, t) {
      o.addNonEnumerableProperty(e, C, o.makeWeakRef(t));
    })(p, f),
    f
  );
}
function le(e) {
  return !0 === e.attributes[c] ? void 0 : l(e);
}
function de(e, t) {
  const n = t.spanContext().spanId,
    r = le(t);
  if (!r) return void pe(e, { id: n, span: t, children: [] });
  const o = (function (e, t) {
      const n = e.get(t);
      return n || pe(e, { id: t, children: [] });
    })(e, r),
    i = pe(e, { id: n, span: t, parentNode: o, children: [] });
  o.children.push(i);
}
function pe(e, t) {
  const n = e.get(t.id);
  return n?.span
    ? n
    : n && !n.span
      ? ((n.span = t.span), (n.parentNode = t.parentNode), n)
      : (e.set(t.id, t), t);
}
const fe = {
    1: "cancelled",
    2: "unknown_error",
    3: "invalid_argument",
    4: "deadline_exceeded",
    5: "not_found",
    6: "already_exists",
    7: "permission_denied",
    8: "resource_exhausted",
    9: "failed_precondition",
    10: "aborted",
    11: "out_of_range",
    12: "unimplemented",
    13: "internal_error",
    14: "unavailable",
    15: "data_loss",
    16: "unauthenticated",
  },
  he = (e) => Object.values(fe).includes(e);
function ge(e) {
  const t = d(e) ? e.attributes : {},
    n = f(e) ? e.status : void 0;
  if (n) {
    if (n.code === r.SpanStatusCode.OK) return { code: o.SPAN_STATUS_OK };
    if (n.code === r.SpanStatusCode.ERROR) {
      if (void 0 === n.message) {
        const e = me(t);
        if (e) return e;
      }
      return n.message && he(n.message)
        ? { code: o.SPAN_STATUS_ERROR, message: n.message }
        : { code: o.SPAN_STATUS_ERROR, message: "internal_error" };
    }
  }
  return (
    me(t) ||
    (n?.code === r.SpanStatusCode.UNSET
      ? { code: o.SPAN_STATUS_OK }
      : { code: o.SPAN_STATUS_ERROR, message: "unknown_error" })
  );
}
function me(e) {
  const t = e[i.HTTP_RESPONSE_STATUS_CODE] || e[i.HTTP_STATUS_CODE],
    n = e[i.RPC_GRPC_STATUS_CODE],
    r = "number" == typeof t ? t : "string" == typeof t ? parseInt(t) : void 0;
  return "number" == typeof r
    ? o.getSpanStatusFromHttpCode(r)
    : "string" == typeof n
      ? {
          code: o.SPAN_STATUS_ERROR,
          message: fe[n] || "unknown_error",
        }
      : void 0;
}
class _e {
  constructor(e) {
    (this._finishedSpanBucketSize = e?.timeout || 300),
      (this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(
        void 0,
      )),
      (this._lastCleanupTimestampInS = Math.floor(
        o._INTERNAL_safeDateNow() / 1e3,
      )),
      (this._spansToBucketEntry = new WeakMap()),
      (this._sentSpans = new o.LRUMap(1e4)),
      (this._debouncedFlush = o.debounce(this.flush.bind(this), 1, {
        maxWait: 100,
      }));
  }
  export(e) {
    const t = Math.floor(o._INTERNAL_safeDateNow() / 1e3);
    if (this._lastCleanupTimestampInS !== t) {
      let e = 0;
      this._finishedSpanBuckets.forEach((n, r) => {
        n &&
          n.timestampInS <= t - this._finishedSpanBucketSize &&
          ((e += n.spans.size), (this._finishedSpanBuckets[r] = void 0));
      }),
        e > 0 &&
          G &&
          o.debug.log(
            `SpanExporter dropped ${e} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`,
          ),
        (this._lastCleanupTimestampInS = t);
    }
    const n = t % this._finishedSpanBucketSize,
      r = this._finishedSpanBuckets[n] || {
        timestampInS: t,
        spans: new Set(),
      };
    (this._finishedSpanBuckets[n] = r),
      r.spans.add(e),
      this._spansToBucketEntry.set(e, r);
    const i = le(e);
    (i && !this._sentSpans.get(i)) || this._debouncedFlush();
  }
  flush() {
    const e = this._finishedSpanBuckets.flatMap((e) =>
        e ? Array.from(e.spans) : [],
      ),
      t = this._maybeSend(e),
      n = t.size,
      r = e.length - n;
    G &&
      o.debug.log(
        `SpanExporter exported ${n} spans, ${r} spans are waiting for their parent spans to finish`,
      );
    for (const e of t) {
      this._sentSpans.set(e.spanContext().spanId, 1);
      const t = this._spansToBucketEntry.get(e);
      t && t.spans.delete(e);
    }
    this._debouncedFlush.cancel();
  }
  clear() {
    (this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0)),
      this._sentSpans.clear(),
      this._debouncedFlush.cancel();
  }
  _maybeSend(e) {
    const t = (function (e) {
        const t = new Map();
        for (const n of e) de(t, n);
        return Array.from(t, function ([e, t]) {
          return t;
        });
      })(e),
      n = new Set(),
      r = this._getCompletedRootNodes(t);
    for (const e of r) {
      const t = e.span;
      n.add(t);
      const r = Se(t);
      if (e.parentNode && this._sentSpans.get(e.parentNode.id)) {
        const e = r.contexts?.trace?.data;
        e && (e["sentry.parent_span_already_sent"] = !0);
      }
      const i = r.spans || [];
      let s = !1;
      for (const t of e.children) Ee(t, i, n) && (s = !0);
      (r.spans =
        i.length > 1e3
          ? i
              .sort((e, t) => e.start_timestamp - t.start_timestamp)
              .slice(0, 1e3)
          : i),
        s &&
          (r.sdkProcessingMetadata = {
            ...r.sdkProcessingMetadata,
            hasGenAiSpans: !0,
          });
      const a = o.timedEventsToMeasurements(t.events);
      a && (r.measurements = a), o.captureEvent(r);
    }
    return n;
  }
  _nodeIsCompletedRootNodeOrHasSentParent(e) {
    return !(
      !e.span ||
      (e.parentNode && !this._sentSpans.get(e.parentNode.id))
    );
  }
  _getCompletedRootNodes(e) {
    return e.filter((e) => this._nodeIsCompletedRootNodeOrHasSentParent(e));
  }
}
function Se(e) {
  const {
      op: t,
      description: n,
      data: r,
      origin: s = "manual",
      source: a,
    } = ye(e),
    c = o.getCapturedScopesOnSpan(e),
    u = e.attributes[o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE],
    d = {
      [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: a,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: u,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: s,
      ...r,
      ...Te(e.attributes),
    },
    { links: p } = e,
    { traceId: f, spanId: h } = e.spanContext(),
    g = l(e),
    m = ge(e),
    _ = {
      parent_span_id: g,
      span_id: h,
      trace_id: f,
      data: d,
      origin: s,
      op: t,
      status: o.getStatusMessage(m),
      links: o.convertSpanLinksForEnvelope(p),
    },
    S = d[i.HTTP_RESPONSE_STATUS_CODE],
    E = "number" == typeof S ? { response: { status_code: S } } : void 0;
  return {
    contexts: {
      trace: _,
      otel: { resource: e.resource.attributes },
      ...E,
    },
    spans: [],
    start_timestamp: o.spanTimeInputToSeconds(e.startTime),
    timestamp: o.spanTimeInputToSeconds(e.endTime),
    transaction: n,
    type: "transaction",
    sdkProcessingMetadata: {
      capturedSpanScope: c.scope,
      capturedSpanIsolationScope: c.isolationScope,
      sampleRate: u,
      dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(e),
    },
    ...(a && { transaction_info: { source: a } }),
  };
}
function Ee(e, t, n) {
  const r = e.span;
  if ((r && n.add(r), !r)) {
    let r = !1;
    return (
      e.children.forEach((e) => {
        Ee(e, t, n) && (r = !0);
      }),
      r
    );
  }
  const i = r.spanContext().spanId,
    s = r.spanContext().traceId,
    a = l(r),
    { attributes: c, startTime: u, endTime: d, links: p } = r,
    { op: f, description: h, data: g, origin: m = "manual" } = ye(r),
    _ = {
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: m,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: f,
      ...Te(c),
      ...g,
    },
    S = ge(r),
    E = {
      span_id: i,
      trace_id: s,
      data: _,
      description: h,
      parent_span_id: a,
      start_timestamp: o.spanTimeInputToSeconds(u),
      timestamp: o.spanTimeInputToSeconds(d) || void 0,
      status: o.getStatusMessage(S),
      op: f,
      origin: m,
      measurements: o.timedEventsToMeasurements(r.events),
      links: o.convertSpanLinksForEnvelope(p),
    };
  t.push(E);
  let y = !!f?.startsWith("gen_ai.");
  return (
    e.children.forEach((e) => {
      Ee(e, t, n) && (y = !0);
    }),
    y
  );
}
function ye(e) {
  const {
      op: t,
      source: n,
      origin: r,
    } = (function (e) {
      const t = e.attributes;
      return {
        origin: t[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        op: t[o.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        source: t[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      };
    })(e),
    { op: i, description: s, source: a, data: c } = M(e);
  return {
    op: t || i,
    description: s,
    source: n || a,
    origin: r,
    data: { ...c, ...be(e) },
  };
}
function Te(e) {
  const t = { ...e };
  return (
    delete t[o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE],
    delete t[c],
    delete t[o.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
    t
  );
}
function be(e) {
  const t = e.attributes,
    n = {};
  e.kind !== r.SpanKind.INTERNAL && (n["otel.kind"] = r.SpanKind[e.kind]);
  const o = t[i.HTTP_STATUS_CODE];
  o && (n[i.HTTP_RESPONSE_STATUS_CODE] = o);
  const s = g(e);
  return (
    s.url && (n.url = s.url),
    s["http.query"] && (n["http.query"] = s["http.query"].slice(1)),
    s["http.fragment"] && (n["http.fragment"] = s["http.fragment"].slice(1)),
    n
  );
}
function Ie(e, t) {
  const n = e.attributes ?? {},
    r = t?.spanKind ?? o.SPAN_KIND.INTERNAL,
    { op: s, description: a, source: c, data: u } = x(e.name, n, r);
  (e.name = a),
    o.safeSetSpanJSONAttributes(e, {
      [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: s,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: c,
      [i.SENTRY_ORIGIN]: "manual",
      ...u,
    }),
    r !== o.SPAN_KIND.INTERNAL &&
      o.safeSetSpanJSONAttributes(e, {
        "otel.kind": o.spanKindToName(r),
      });
}
function ve({
  decision: e,
  context: t,
  spanAttributes: n,
  sampleRand: o,
  downstreamTraceSampleRate: a,
  ignoredChildSpan: c,
  ignoredSegmentSpan: u,
}) {
  let l = (function (e, t) {
    const n = r.trace.getSpan(e),
      o = n?.spanContext();
    let s = o?.traceState || new F();
    const a = t[i.HTTP_URL] || t[i.URL_FULL];
    return a && "string" == typeof a && (s = s.set(T, a)), s;
  })(t, n);
  return (
    void 0 !== a && (l = l.set("sentry.sample_rate", `${a}`)),
    void 0 !== o && (l = l.set("sentry.sample_rand", `${o}`)),
    c && (l = l.set(b, "1")),
    u && (l = l.set(I, "1")),
    null == e
      ? { decision: s.SamplingDecision.NOT_RECORD, traceState: l }
      : e === s.SamplingDecision.NOT_RECORD
        ? { decision: e, traceState: l.set(y, "1") }
        : { decision: e, traceState: l }
  );
}
function Ae(e, t = {}) {
  const n = o.spanToJSON(e),
    i = n.data,
    s = e.kind ?? r.SpanKind.INTERNAL,
    a = o.spanShouldInferOtelSource(e),
    c = void 0 !== i[o.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
    u = a && !c && !o.spanSourceWasExplicitlySet(e),
    l =
      u && "custom" === i[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
        ? { ...i, [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: void 0 }
        : i,
    d = x(n.description || "<unknown>", l, s);
  if (
    (s !== r.SpanKind.INTERNAL &&
      void 0 === i["otel.kind"] &&
      e.setAttribute("otel.kind", r.SpanKind[s]),
    d.op &&
      void 0 === i[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
      e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_OP, d.op),
    void 0 !== d.source &&
      "custom" !== d.source &&
      (t.finalizeStatus || "url" !== d.source) &&
      (void 0 === n.parent_span_id || s === r.SpanKind.SERVER) &&
      (void 0 === i[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || u) &&
      e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, d.source),
    d.data &&
      Object.entries(d.data).forEach(([t, n]) => {
        void 0 !== n && void 0 === i[t] && e.setAttribute(t, n);
      }),
    t.finalizeStatus)
  ) {
    Ne(e, i);
    const t = o.getClient();
    !(function (e, t, n, r) {
      void 0 !== n
        ? r ||
          "ok" === n ||
          he(n) ||
          e.setStatus({
            code: o.SPAN_STATUS_ERROR,
            message: "internal_error",
          })
        : e.setStatus(me(t) || { code: o.SPAN_STATUS_OK });
    })(e, i, n.status, !!t && o.hasSpanStreamingEnabled(t));
  }
  a &&
    d.description !== n.description &&
    ("custom" !== i[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || u) &&
    e.updateName(d.description);
}
function Ne(e, t) {
  const n = t[i.HTTP_STATUS_CODE];
  void 0 === t[i.HTTP_RESPONSE_STATUS_CODE] &&
    void 0 !== n &&
    (e.setAttribute(i.HTTP_RESPONSE_STATUS_CODE, n),
    (t[i.HTTP_RESPONSE_STATUS_CODE] = n));
}
class Re {
  startSpan(e, t = {}, n) {
    const i = n || r.context.active(),
      s = t.root ? void 0 : r.trace.getSpan(i);
    if (a.isTracingSuppressed(i)) return this._createNonRecordingSpan(s);
    const c = this._startSentrySpan(e, t, s, void 0 !== n);
    return (
      o.markSpanAsTracerProviderSpan(c),
      (function (e, t) {
        o.addNonEnumerableProperty(e, "kind", t ?? r.SpanKind.INTERNAL);
      })(c, t.kind),
      void 0 === t.attributes?.[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] &&
        o.markSpanForOtelSourceInference(c),
      Ae(c),
      c
    );
  }
  startActiveSpan(e, t, n, i) {
    const s = "function" == typeof t ? {} : t,
      a = "function" == typeof n || void 0 === n ? r.context.active() : n,
      c = "function" == typeof t ? t : "function" == typeof n ? n : i,
      u = this.startSpan(e, s, a),
      l = o.getCapturedScopesOnSpan(u).isolationScope,
      d = (e) => (l ? e.setValue(R, l) : e);
    return o.spanIsIgnored(u) && r.trace.getSpan(a)
      ? r.context.with(d(a), () => c(u))
      : r.context.with(
          d(r.trace.setSpan(a, u)),
          () => (o._INTERNAL_setSpanForScope(o.getCurrentScope(), u), c(u)),
        );
  }
  _startSentrySpan(e, t, n, r) {
    const i = {
      name: e,
      attributes: t.attributes,
      links: t.links,
      startTime: t.startTime,
    };
    return t.root
      ? o.startNewTrace(() =>
          o._INTERNAL_startInactiveSpan({ ...i, parentSpan: null }),
        )
      : n?.spanContext().isRemote
        ? this._startRootSpanWithRemoteParent(i, n)
        : n
          ? o._INTERNAL_startInactiveSpan({ ...i, parentSpan: n })
          : o.startNewTrace(() =>
              o._INTERNAL_startInactiveSpan({
                ...i,
                parentSpan: r ? null : void 0,
              }),
            );
  }
  _startRootSpanWithRemoteParent(e, t) {
    const { spanId: n, traceId: r, traceState: i } = t.spanContext(),
      s = o.getDynamicSamplingContextFromSpan(t),
      a = "string" == typeof s.sample_rand ? Number(s.sample_rand) : void 0,
      c = !!i?.get(E);
    return o.withScope(
      (i) => (
        i.setPropagationContext({
          traceId: r,
          parentSpanId: n,
          sampled: P(t.spanContext()),
          dsc: c ? s : void 0,
          sampleRand:
            "number" != typeof a || Number.isNaN(a)
              ? o._INTERNAL_safeMathRandom()
              : a,
        }),
        o._INTERNAL_setSpanForScope(i, void 0),
        o._INTERNAL_startInactiveSpan({ ...e, parentSpan: null })
      ),
    );
  }
  _createNonRecordingSpan(e) {
    const t = new o.SentryNonRecordingSpan({
      traceId: e?.spanContext().traceId,
    });
    return (
      e && o.addChildSpanToSpan(e, t),
      o.setCapturedScopesOnSpan(t, o.getCurrentScope(), o.getIsolationScope()),
      t
    );
  }
}
const Ce = "telemetry.sdk.language",
  Oe = "telemetry.sdk.name",
  we = "telemetry.sdk.version",
  ke = "service.namespace";
class Pe {
  constructor(e) {
    this._attributes = e;
  }
  get attributes() {
    return this._attributes;
  }
  merge(e) {
    return e ? new Pe({ ...this._attributes, ...e.attributes }) : this;
  }
  getRawAttributes() {
    return Object.entries(this._attributes);
  }
}
function Le({ span: e, scope: t, client: n, propagateTraceparent: i } = {}) {
  let s = (t && k(t)) ?? r.context.active();
  if (e) {
    const { scope: t } = o.getCapturedScopesOnSpan(e);
    s = (t && k(t)) || r.trace.setSpan(r.context.active(), e);
  }
  const {
      traceId: a,
      spanId: c,
      sampled: u,
      dynamicSamplingContext: l,
    } = $(s, { scope: t, client: n }),
    d = {
      "sentry-trace": o.generateSentryTraceHeader(a, c, u),
      baggage: o.dynamicSamplingContextToSentryBaggageHeader(l),
    };
  return i && (d.traceparent = o.generateTraceparentHeader(a, c, u)), d;
}
(t.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = u),
  (t.SENTRY_SCOPES_CONTEXT_KEY = v),
  (t.SENTRY_TRACE_STATE_CHILD_IGNORED = b),
  (t.SentryPropagator = V),
  (t.SentrySampler = class {
    constructor(e) {
      (this._client = e),
        (this._isSpanStreaming = o.hasSpanStreamingEnabled(e)),
        W("SentrySampler");
    }
    shouldSample(e, t, n, a, c, u) {
      const l = this._client.getOptions(),
        { ignoreSpans: d } = l,
        p = (function (e) {
          const t = r.trace.getSpan(e);
          return t && r.isSpanContextValid(t.spanContext()) ? t : void 0;
        })(e),
        f = p?.spanContext();
      if (!o.hasSpansEnabled(l))
        return ve({
          decision: void 0,
          context: e,
          spanAttributes: c,
        });
      const h = c[i.HTTP_METHOD] || c[i.HTTP_REQUEST_METHOD];
      if (
        a === r.SpanKind.CLIENT &&
        h &&
        (!p || f?.isRemote) &&
        !this._isSpanStreaming
      )
        return (
          this._client.recordDroppedEvent("no_parent_span", "span"),
          ve({ decision: void 0, context: e, spanAttributes: c })
        );
      const g = p
        ? (function (e, t, n) {
            const i = e.spanContext();
            if (r.isSpanContextValid(i) && i.traceId === t) {
              if (i.isRemote) {
                const t = P(e.spanContext());
                return (
                  G &&
                    o.debug.log(
                      `[Tracing] Inheriting remote parent's sampled decision for ${n}: ${t}`,
                    ),
                  t
                );
              }
              const t = P(i);
              return (
                G &&
                  o.debug.log(
                    `[Tracing] Inheriting parent's sampled decision for ${n}: ${t}`,
                  ),
                t
              );
            }
          })(p, t, n)
        : void 0;
      if (p && !f?.isRemote) {
        if (this._isSpanStreaming) {
          if (g && d?.length) {
            const { description: t, op: r } = x(n, c, a);
            if (
              o.shouldIgnoreSpan(
                {
                  description: t,
                  op: c[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? r,
                  attributes: c,
                },
                d,
              )
            )
              return (
                this._client.recordDroppedEvent("ignored", "span"),
                ve({
                  decision: s.SamplingDecision.NOT_RECORD,
                  context: e,
                  spanAttributes: c,
                  ignoredChildSpan: !0,
                })
              );
          }
          if (!g) {
            const e = "1" === f?.traceState?.get(I);
            this._client.recordDroppedEvent(
              e ? "ignored" : "sample_rate",
              "span",
            );
          }
        }
        return ve({
          decision: g
            ? s.SamplingDecision.RECORD_AND_SAMPLED
            : s.SamplingDecision.NOT_RECORD,
          context: e,
          spanAttributes: c,
        });
      }
      const { description: m, data: _, op: S } = x(n, c, a),
        y = { ..._, ...c };
      if (
        (S && (y[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] = S),
        this._isSpanStreaming &&
          d?.length &&
          o.shouldIgnoreSpan(
            {
              description: m,
              op: y[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? S,
              attributes: y,
            },
            d,
          ))
      )
        return (
          this._client.recordDroppedEvent("ignored", "span"),
          ve({
            decision: s.SamplingDecision.NOT_RECORD,
            context: e,
            spanAttributes: c,
            ignoredSegmentSpan: !0,
          })
        );
      const T = { decision: !0 };
      if (
        (this._client.emit(
          "beforeSampling",
          {
            spanAttributes: y,
            spanName: m,
            parentSampled: g,
            parentContext: f,
          },
          T,
        ),
        !T.decision)
      )
        return ve({
          decision: void 0,
          context: e,
          spanAttributes: c,
        });
      const { isolationScope: b } = O(e) ?? {},
        v = f?.traceState ? f.traceState.get(E) : void 0,
        A = v ? o.baggageHeaderToDynamicSamplingContext(v) : void 0,
        N = o.parseSampleRate(A?.sample_rand) ?? o._INTERNAL_safeMathRandom(),
        [R, C, w] = o.sampleSpan(
          l,
          {
            name: m,
            attributes: y,
            normalizedRequest:
              b?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled: g,
            parentSampleRate: o.parseSampleRate(A?.sample_rate),
          },
          N,
        ),
        k = `${h}`.toUpperCase();
      return "OPTIONS" === k || "HEAD" === k
        ? (G &&
            o.debug.log(
              `[Tracing] Not sampling span because HTTP method is '${k}' for ${n}`,
            ),
          ve({
            decision: s.SamplingDecision.NOT_RECORD,
            context: e,
            spanAttributes: c,
            sampleRand: N,
            downstreamTraceSampleRate: 0,
          }))
        : (R ||
            void 0 !== g ||
            (G &&
              o.debug.log(
                "[Tracing] Discarding root span because its trace was not chosen to be sampled.",
              ),
            this._client.recordDroppedEvent(
              "sample_rate",
              this._isSpanStreaming ? "span" : "transaction",
            )),
          {
            ...ve({
              decision: R
                ? s.SamplingDecision.RECORD_AND_SAMPLED
                : s.SamplingDecision.NOT_RECORD,
              context: e,
              spanAttributes: c,
              sampleRand: N,
              downstreamTraceSampleRate: w ? C : void 0,
            }),
            attributes: {
              [o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: w ? C : void 0,
            },
          });
    }
    toString() {
      return "SentrySampler";
    }
  }),
  (t.SentrySpanProcessor = class {
    constructor(e) {
      (this._unsubscribePreprocessSpan = void 0),
        W("SentrySpanProcessor"),
        (this._exporter = new _e(e)),
        (this._client = e?.client ?? o.getClient()),
        this._client &&
          o.hasSpanStreamingEnabled(this._client) &&
          (this._unsubscribePreprocessSpan = this._client.on(
            "preprocessSpan",
            Ie,
          ));
    }
    async forceFlush() {
      this._exporter.flush();
    }
    async shutdown() {
      this._unsubscribePreprocessSpan?.(), this._exporter.clear();
    }
    onStart(e, t) {
      const n = r.trace.getSpan(t);
      let i = O(t);
      n && !n.spanContext().isRemote && o.addChildSpanToSpan(n, e),
        n?.spanContext().isRemote && e.setAttribute(c, !0),
        t === r.ROOT_CONTEXT &&
          (i = {
            scope: o.getDefaultCurrentScope(),
            isolationScope: o.getDefaultIsolationScope(),
          }),
        i && o.setCapturedScopesOnSpan(e, i.scope, i.isolationScope),
        o.logSpanStart(e),
        this._client?.emit("spanStart", e);
    }
    onEnd(e) {
      o.logSpanEnd(e),
        this._client?.emit("spanEnd", e),
        this._client && o.hasSpanStreamingEnabled(this._client)
          ? this._client.emit("afterSpanEnd", e)
          : this._exporter.export(e);
    }
  }),
  (t.SentryTracerProvider = class {
    constructor(e = {}) {
      (this._tracers = new Map()), (this.resource = e.resource);
    }
    getTracer(e, t, n) {
      const r = JSON.stringify([e, t, n]),
        o = this._tracers.get(r);
      if (o) return o;
      const i = new Re();
      return this._tracers.set(r, i), i;
    }
    forceFlush() {
      return Promise.resolve();
    }
    shutdown() {
      return Promise.resolve();
    }
  }),
  (t.applyOtelSpanData = Ae),
  (t.backfillStreamedSpanDataFromOtel = Ie),
  (t.buildContextWithSentryScopes = ue),
  (t.continueTrace = oe),
  (t.enhanceDscWithOpenTelemetryRootSpanName = function (e) {
    e.on("createDsc", (t, n) => {
      if (!n) return;
      const r = o.spanToJSON(n),
        i = r.data[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
        s = L(n, e);
      if (!1 === s) delete t.transaction;
      else if (r.description) {
        const { description: e } = M(n);
        "url" !== i && e && (t.transaction = e);
      }
      o.hasSpansEnabled() && (t.sampled = null == s ? void 0 : String(s));
    });
  }),
  (t.getActiveSpan = B),
  (t.getRequestSpanData = g),
  (t.getScopesFromContext = O),
  (t.getSentryResource = function (e) {
    const t = "undefined" != typeof process ? process.env : {},
      n = t.OTEL_SERVICE_NAME,
      r = (function (e) {
        if (!e) return {};
        const t = {};
        for (const n of e.split(",")) {
          const e = n.indexOf("=");
          if (-1 === e) continue;
          const r = n.substring(0, e).trim(),
            o = n.substring(e + 1).trim();
          if (r)
            try {
              t[r] = decodeURIComponent(o);
            } catch {
              t[r] = o;
            }
        }
        return t;
      })(t.OTEL_RESOURCE_ATTRIBUTES);
    return new Pe({
      [ke]: "sentry",
      [i.SERVICE_NAME]: e,
      ...r,
      ...(n ? { [i.SERVICE_NAME]: n } : {}),
      [i.SERVICE_VERSION]: o.SDK_VERSION,
      [Ce]: a.SDK_INFO[Ce],
      [Oe]: a.SDK_INFO[Oe],
      [we]: a.SDK_INFO[we],
    });
  }),
  (t.getSpanKind = m),
  (t.getTraceContextForScope = function (e, t) {
    const n = k(t),
      i = n && r.trace.getSpan(n),
      s = i ? o.spanToTraceContext(i) : o.getTraceContextFromScope(t);
    return [
      i
        ? o.getDynamicSamplingContextFromSpan(i)
        : o.getDynamicSamplingContextFromScope(e, t),
      s,
    ];
  }),
  (t.isSentryRequestSpan = function (e) {
    if (!d(e)) return !1;
    const { attributes: t } = e,
      n = t[i.HTTP_URL] || t[i.URL_FULL];
    return !!n && o.isSentryRequestUrl(n.toString(), o.getClient());
  }),
  (t.openTelemetrySetupCheck = function () {
    return Array.from(H);
  }),
  (t.setIsSetup = W),
  (t.setOpenTelemetryContextAsyncContextStrategy = function (e) {
    function t() {
      return (
        O(r.context.active()) || {
          scope: o.getDefaultCurrentScope(),
          isolationScope: o.getDefaultIsolationScope(),
        }
      );
    }
    function n() {
      return t().scope;
    }
    function i() {
      return t().isolationScope;
    }
    o.setAsyncContextStrategy({
      withScope: function (e) {
        const t = r.context.active();
        return r.context.with(t, () => e(n()));
      },
      withSetScope: function (e, t) {
        const n = k(e) || r.context.active();
        return r.context.with(n.setValue(N, e), () => t(e));
      },
      withSetIsolationScope: function (e, t) {
        const n = r.context.active();
        return r.context.with(n.setValue(R, e), () => t(i()));
      },
      withIsolationScope: function (e) {
        const t = r.context.active();
        return r.context.with(t.setValue(A, !0), () => e(i()));
      },
      getCurrentScope: n,
      getIsolationScope: i,
      startSpan: X,
      startSpanManual: Z,
      startInactiveSpan: z,
      getActiveSpan: B,
      suppressTracing: ae,
      isTracingSuppressed: ce,
      getTraceData: Le,
      continueTrace: oe,
      startNewTrace: ie,
      withActiveSpan: J,
      getTracingChannelBinding: e?.getTracingChannelBinding,
    });
  }),
  (t.setupEventContextTrace = function (e) {
    e.on("preprocessEvent", (e) => {
      const t = B();
      if (!t || "transaction" === e.type) return;
      e.contexts = { trace: o.spanToTraceContext(t), ...e.contexts };
      const n = o.getRootSpan(t);
      return (
        (e.sdkProcessingMetadata = {
          dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(n),
          ...e.sdkProcessingMetadata,
        }),
        e
      );
    });
  }),
  (t.spanHasAttributes = d),
  (t.spanHasEvents = function (e) {
    const t = e;
    return Array.isArray(t.events);
  }),
  (t.spanHasKind = p),
  (t.spanHasName = h),
  (t.spanHasParentId = function (e) {
    return !!l(e);
  }),
  (t.spanHasStatus = f),
  (t.startInactiveSpan = z),
  (t.startSpan = X),
  (t.startSpanManual = Z),
  (t.suppressTracing = ae),
  (t.withActiveSpan = J),
  (t.wrapClientClass = function (e) {
    return class extends e {
      constructor(...e) {
        super(...e);
      }
      get tracer() {
        if (this._tracer) return this._tracer;
        const e = o.SDK_VERSION,
          t = r.trace.getTracer("@sentry/opentelemetry", e);
        return (this._tracer = t), t;
      }
      async flush(e) {
        const t = this.traceProvider;
        return await t?.forceFlush(), super.flush(e);
      }
    };
  }),
  (t.wrapContextManagerClass = function (e) {
    return class extends e {
      constructor(...e) {
        super(...e), W("SentryContextManager");
      }
      with(e, t, n, ...r) {
        const o = ue(e, this.active());
        return super.with(o, t, n, ...r);
      }
      getAsyncLocalStorageLookup() {
        return {
          asyncLocalStorage: this._asyncLocalStorage,
          contextSymbol: v,
        };
      }
    };
  }),
  (t.wrapSamplingDecision = ve);

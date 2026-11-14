// vendor/module-38862.js — webpack module 38862
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/module-64289 */),
  o = n(2084 /* vendor/module-2084 */),
  i = n(16973 /* vendor/module-16973 */),
  a = n(76041 /* vendor/module-76041 */),
  s = n(12724 /* vendor/module-12724 */),
  l = n(19648 /* vendor/module-19648 */),
  c = n(30401 /* vendor/module-30401 */),
  u = n(68020 /* vendor/module-68020 */),
  d = n(73802 /* vendor/module-73802 */),
  p = n(19410 /* vendor/module-19410 */),
  f = n(73253 /* vendor/module-73253 */),
  h = n(58637 /* vendor/module-58637 */),
  m = n(33836 /* vendor/module-33836 */);
let g = !1;
function y(e) {
  return e && e.length > 0
    ? e.map(
        ({
          context: { spanId: e, traceId: t, traceFlags: n, ...r },
          attributes: o,
        }) => ({
          span_id: e,
          trace_id: t,
          sampled: 1 === n,
          attributes: o,
          ...r,
        }),
      )
    : void 0;
}
function v(e) {
  return e?.length
    ? e.map(
        ({
          context: { spanId: e, traceId: t, traceFlags: n },
          attributes: r,
        }) => ({
          span_id: e,
          trace_id: t,
          sampled: 1 === n,
          attributes: r,
        }),
      )
    : void 0;
}
function b(e) {
  return "number" == typeof e
    ? S(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? S(e.getTime())
        : p.timestampInSeconds();
}
function S(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function _(e) {
  if (E(e)) return e.getSpanJSON();
  const { spanId: t, traceId: n } = e.spanContext();
  if (w(e)) {
    const {
      attributes: r,
      startTime: o,
      name: i,
      endTime: a,
      status: l,
      links: c,
    } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: i,
      parent_span_id: x(e),
      start_timestamp: b(o),
      timestamp: b(a) || void 0,
      status: k(l),
      op: r[s.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      origin: r[s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      links: y(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function x(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
      ? e.parentSpanContext?.spanId
      : void 0;
}
function w(e) {
  const t = e;
  return !!(t.attributes && t.startTime && t.name && t.endTime && t.status);
}
function E(e) {
  return "function" == typeof e.getSpanJSON;
}
function T(e) {
  const { traceFlags: t } = e.spanContext();
  return 1 === t;
}
function k(e) {
  if (e && e.code !== l.SPAN_STATUS_UNSET)
    return e.code === l.SPAN_STATUS_OK ? "ok" : e.message || "internal_error";
}
function C(e) {
  return e &&
    e.code !== l.SPAN_STATUS_OK &&
    e.code !== l.SPAN_STATUS_UNSET &&
    "cancelled" !== e.message
    ? "error"
    : "ok";
}
function I(e, t) {
  const n = "error" === C(t) ? t?.message : void 0;
  return {
    ...(n && { [s.SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE]: n }),
    ...e,
  };
}
const A = "_sentryChildSpans",
  O = "_sentryRootSpan",
  R = M;
function M(e) {
  return e[O] || e;
}
(t.INTERNAL_getSegmentSpan = M),
  (t.TRACE_FLAG_NONE = 0),
  (t.TRACE_FLAG_SAMPLED = 1),
  (t.addChildSpanToSpan = function (e, t) {
    const n = e[O] || e;
    u.addNonEnumerableProperty(t, O, n),
      e[A] ? e[A].add(t) : u.addNonEnumerableProperty(e, A, new Set([t]));
  }),
  (t.addStatusMessageAttribute = I),
  (t.convertSpanLinksForEnvelope = y),
  (t.getActiveSpan = function () {
    const e = i.getMainCarrier(),
      t = r.getAsyncContextStrategy(e);
    return t.getActiveSpan
      ? t.getActiveSpan()
      : m._getSpanForScope(a.getCurrentScope());
  }),
  (t.getRootSpan = R),
  (t.getSimpleStatus = C),
  (t.getSpanDescendants = function (e) {
    const t = new Set();
    return (
      (function e(n) {
        if (!t.has(n) && T(n)) {
          t.add(n);
          const r = n[A] ? Array.from(n[A]) : [];
          for (const t of r) e(t);
        }
      })(e),
      Array.from(t)
    );
  }),
  (t.getStatusMessage = k),
  (t.getStreamedSpanLinks = v),
  (t.removeChildSpanFromSpan = function (e, t) {
    e[A] && e[A].delete(t);
  }),
  (t.showSpanDropWarning = function () {
    g || (h.consoleSandbox(() => {}), (g = !0));
  }),
  (t.spanIsSampled = T),
  (t.spanIsSentrySpan = E),
  (t.spanTimeInputToSeconds = b),
  (t.spanToJSON = _),
  (t.spanToStreamedSpanJSON = function (e) {
    if (E(e)) return e.getStreamedSpanJSON();
    const { spanId: t, traceId: n } = e.spanContext();
    if (w(e)) {
      const {
        attributes: r,
        startTime: o,
        name: i,
        endTime: a,
        status: s,
        links: l,
      } = e;
      return {
        name: i,
        span_id: t,
        trace_id: n,
        parent_span_id: x(e),
        start_timestamp: b(o),
        end_timestamp: b(a),
        is_segment: e === M(e),
        status: C(s),
        attributes: I(r, s),
        links: v(l),
      };
    }
    return {
      span_id: t,
      trace_id: n,
      start_timestamp: 0,
      name: "",
      end_timestamp: 0,
      status: "ok",
      is_segment: e === M(e),
    };
  }),
  (t.spanToTraceContext = function (e) {
    const { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
      o = r ? t : _(e).parent_span_id,
      i = c.getCapturedScopesOnSpan(e).scope;
    return {
      parent_span_id: o,
      span_id: r
        ? i?.getPropagationContext().propagationSpanId || d.generateSpanId()
        : t,
      trace_id: n,
    };
  }),
  (t.spanToTraceHeader = function (e) {
    const { traceId: t, spanId: n } = e.spanContext(),
      r = T(e);
    return f.generateSentryTraceHeader(t, n, r);
  }),
  (t.spanToTraceparentHeader = function (e) {
    const { traceId: t, spanId: n } = e.spanContext(),
      r = T(e);
    return f.generateTraceparentHeader(t, n, r);
  }),
  (t.spanToTransactionTraceContext = function (e) {
    const { spanId: t, traceId: n } = e.spanContext(),
      {
        data: r,
        op: o,
        parent_span_id: i,
        status: a,
        origin: s,
        links: l,
      } = _(e);
    return {
      parent_span_id: i,
      span_id: t,
      trace_id: n,
      data: r,
      op: o,
      status: a,
      origin: s,
      links: l,
    };
  }),
  (t.streamedSpanJsonToSerializedSpan = function (e) {
    return {
      ...e,
      attributes: o.serializeAttributes(e.attributes),
      links: e.links?.map((e) => ({
        ...e,
        attributes: o.serializeAttributes(e.attributes),
      })),
    };
  }),
  (t.updateSpanName = function (e, t) {
    e.updateName(t),
      e.setAttributes({
        [s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
        [s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: t,
      });
  });

// vendor/other/module-38862.js — webpack module 38862
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/other/module-64289 */),
  o = n(2084 /* vendor/other/module-2084 */),
  i = n(16973 /* vendor/other/module-16973 */),
  s = n(76041 /* vendor/other/module-76041 */),
  a = n(12724 /* vendor/other/module-12724 */),
  c = n(19648 /* vendor/other/module-19648 */),
  u = n(30401 /* vendor/other/module-30401 */),
  l = n(68020 /* vendor/other/module-68020 */),
  d = n(73802 /* vendor/other/module-73802 */),
  p = n(19410 /* vendor/other/module-19410 */),
  f = n(73253 /* vendor/other/module-73253 */),
  h = n(58637 /* vendor/other/module-58637 */),
  g = n(33836 /* vendor/other/module-33836 */);
let m = !1;
function _(e) {
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
function S(e) {
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
function E(e) {
  return "number" == typeof e
    ? y(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? y(e.getTime())
        : p.timestampInSeconds();
}
function y(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function T(e) {
  if (v(e)) return e.getSpanJSON();
  const { spanId: t, traceId: n } = e.spanContext();
  if (I(e)) {
    const {
      attributes: r,
      startTime: o,
      name: i,
      endTime: s,
      status: c,
      links: u,
    } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: i,
      parent_span_id: b(e),
      start_timestamp: E(o),
      timestamp: E(s) || void 0,
      status: N(c),
      op: r[a.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      origin: r[a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      links: _(u),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function b(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
      ? e.parentSpanContext?.spanId
      : void 0;
}
function I(e) {
  const t = e;
  return !!(t.attributes && t.startTime && t.name && t.endTime && t.status);
}
function v(e) {
  return "function" == typeof e.getSpanJSON;
}
function A(e) {
  const { traceFlags: t } = e.spanContext();
  return 1 === t;
}
function N(e) {
  if (e && e.code !== c.SPAN_STATUS_UNSET)
    return e.code === c.SPAN_STATUS_OK ? "ok" : e.message || "internal_error";
}
function R(e) {
  return e &&
    e.code !== c.SPAN_STATUS_OK &&
    e.code !== c.SPAN_STATUS_UNSET &&
    "cancelled" !== e.message
    ? "error"
    : "ok";
}
function C(e, t) {
  const n = "error" === R(t) ? t?.message : void 0;
  return {
    ...(n && { [a.SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE]: n }),
    ...e,
  };
}
const O = "_sentryChildSpans",
  w = "_sentryRootSpan",
  k = P;
function P(e) {
  return e[w] || e;
}
(t.INTERNAL_getSegmentSpan = P),
  (t.TRACE_FLAG_NONE = 0),
  (t.TRACE_FLAG_SAMPLED = 1),
  (t.addChildSpanToSpan = function (e, t) {
    const n = e[w] || e;
    l.addNonEnumerableProperty(t, w, n),
      e[O] ? e[O].add(t) : l.addNonEnumerableProperty(e, O, new Set([t]));
  }),
  (t.addStatusMessageAttribute = C),
  (t.convertSpanLinksForEnvelope = _),
  (t.getActiveSpan = function () {
    const e = i.getMainCarrier(),
      t = r.getAsyncContextStrategy(e);
    return t.getActiveSpan
      ? t.getActiveSpan()
      : g._getSpanForScope(s.getCurrentScope());
  }),
  (t.getRootSpan = k),
  (t.getSimpleStatus = R),
  (t.getSpanDescendants = function (e) {
    const t = new Set();
    return (
      (function e(n) {
        if (!t.has(n) && A(n)) {
          t.add(n);
          const r = n[O] ? Array.from(n[O]) : [];
          for (const t of r) e(t);
        }
      })(e),
      Array.from(t)
    );
  }),
  (t.getStatusMessage = N),
  (t.getStreamedSpanLinks = S),
  (t.removeChildSpanFromSpan = function (e, t) {
    e[O] && e[O].delete(t);
  }),
  (t.showSpanDropWarning = function () {
    m || (h.consoleSandbox(() => {}), (m = !0));
  }),
  (t.spanIsSampled = A),
  (t.spanIsSentrySpan = v),
  (t.spanTimeInputToSeconds = E),
  (t.spanToJSON = T),
  (t.spanToStreamedSpanJSON = function (e) {
    if (v(e)) return e.getStreamedSpanJSON();
    const { spanId: t, traceId: n } = e.spanContext();
    if (I(e)) {
      const {
        attributes: r,
        startTime: o,
        name: i,
        endTime: s,
        status: a,
        links: c,
      } = e;
      return {
        name: i,
        span_id: t,
        trace_id: n,
        parent_span_id: b(e),
        start_timestamp: E(o),
        end_timestamp: E(s),
        is_segment: e === P(e),
        status: R(a),
        attributes: C(r, a),
        links: S(c),
      };
    }
    return {
      span_id: t,
      trace_id: n,
      start_timestamp: 0,
      name: "",
      end_timestamp: 0,
      status: "ok",
      is_segment: e === P(e),
    };
  }),
  (t.spanToTraceContext = function (e) {
    const { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
      o = r ? t : T(e).parent_span_id,
      i = u.getCapturedScopesOnSpan(e).scope;
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
      r = A(e);
    return f.generateSentryTraceHeader(t, n, r);
  }),
  (t.spanToTraceparentHeader = function (e) {
    const { traceId: t, spanId: n } = e.spanContext(),
      r = A(e);
    return f.generateTraceparentHeader(t, n, r);
  }),
  (t.spanToTransactionTraceContext = function (e) {
    const { spanId: t, traceId: n } = e.spanContext(),
      {
        data: r,
        op: o,
        parent_span_id: i,
        status: s,
        origin: a,
        links: c,
      } = T(e);
    return {
      parent_span_id: i,
      span_id: t,
      trace_id: n,
      data: r,
      op: o,
      status: s,
      origin: a,
      links: c,
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
        [a.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
        [a.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: t,
      });
  });

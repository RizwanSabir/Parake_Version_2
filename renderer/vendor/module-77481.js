// vendor/module-77481.js — webpack module 77481
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/module-64289 */),
  o = n(16973 /* vendor/module-16973 */),
  i = n(76041 /* vendor/module-76041 */),
  a = n(75703 /* vendor/module-75703 */),
  s = n(12724 /* vendor/module-12724 */),
  l = n(32997 /* vendor/module-32997 */),
  c = n(58637 /* vendor/module-58637 */),
  u = n(46901 /* vendor/module-46901 */),
  d = n(72925 /* vendor/module-72925 */),
  p = n(51644 /* vendor/module-51644 */),
  f = n(91159 /* vendor/module-91159 */),
  h = n(18828 /* vendor/module-18828 */),
  m = n(73802 /* vendor/module-73802 */),
  g = n(97190 /* vendor/module-97190 */),
  y = n(33836 /* vendor/module-33836 */),
  v = n(38862 /* vendor/module-38862 */),
  b = n(73253 /* vendor/module-73253 */),
  S = n(60169 /* vendor/module-60169 */),
  _ = n(68621 /* vendor/module-68621 */),
  x = n(6199 /* vendor/module-6199 */),
  w = n(63059 /* vendor/module-63059 */),
  E = n(41013 /* vendor/module-41013 */),
  T = n(19648 /* vendor/module-19648 */),
  k = n(30401 /* vendor/module-30401 */),
  C = "__SENTRY_SUPPRESS_TRACING__";
function I(e) {
  const t = N(e),
    { forceTransaction: n, parentSpan: r } = e;
  return (
    e.scope
      ? (t) => i.withScope(e.scope, t)
      : void 0 !== r
        ? (e) => A(r, e)
        : (e) => e()
  )(() => {
    const o = i.getCurrentScope(),
      a = L(o, r),
      s = i.getClient();
    return e.onlyIfParent && !a
      ? M(o, s)
      : P({
          parentSpan: a,
          spanArguments: t,
          forceTransaction: n,
          scope: o,
        });
  });
}
function A(e, t) {
  const n = D();
  return n.withActiveSpan
    ? n.withActiveSpan(e, t)
    : i.withScope((n) => (y._setSpanForScope(n, e || void 0), t(n)));
}
function O(e = i.getCurrentScope()) {
  const t = D();
  return t.isTracingSuppressed
    ? t.isTracingSuppressed(e)
    : !0 === e.getScopeData().sdkProcessingMetadata[C];
}
function R(e) {
  const t = D();
  return t.startNewTrace
    ? t.startNewTrace(e)
    : i.withScope(
        (t) => (
          t.setPropagationContext({
            traceId: m.generateTraceId(),
            sampleRand: g.safeMathRandom(),
          }),
          a.DEBUG_BUILD &&
            c.debug.log(
              `Starting a new trace with id ${t.getPropagationContext().traceId}`,
            ),
          A(null, e)
        ),
      );
}
function M(e, t) {
  t?.recordDroppedEvent("no_parent_span", "span");
  const n = new w.SentryNonRecordingSpan({
    traceId: e.getPropagationContext().traceId,
  });
  return k.setCapturedScopesOnSpan(n, e, i.getIsolationScope()), n;
}
function P({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  const o = i.getIsolationScope();
  if (!d.hasSpansEnabled()) {
    const t = {
        ...o.getPropagationContext(),
        ...r.getPropagationContext(),
      },
      i = e ? e.spanContext().traceId : t.traceId,
      a = new w.SentryNonRecordingSpan({ traceId: i });
    return (
      e && !n && v.addChildSpanToSpan(e, a),
      k.setCapturedScopesOnSpan(a, r, o),
      a
    );
  }
  const a = i.getClient();
  if (
    (function (e, t) {
      const n = e?.getOptions().ignoreSpans;
      return (
        !!(e && f.hasSpanStreamingEnabled(e) && n?.length) &&
        p.shouldIgnoreSpan(
          {
            description: t.name || "",
            op: t.attributes?.[s.SEMANTIC_ATTRIBUTE_SENTRY_OP] || t.op,
            attributes: t.attributes,
          },
          n,
        )
      );
    })(a, t)
  ) {
    O(r) || a?.recordDroppedEvent("ignored", "span");
    const t = new w.SentryNonRecordingSpan({
      dropReason: "ignored",
      traceId: e?.spanContext().traceId ?? r.getPropagationContext().traceId,
    });
    return (
      e && !n && v.addChildSpanToSpan(e, t),
      k.setCapturedScopesOnSpan(t, r, o),
      t
    );
  }
  let l;
  if (e && !n)
    (l = (function (e, t, n, r) {
      const { spanId: o, traceId: a } = e.spanContext(),
        s = O(t),
        l = !s && v.spanIsSampled(e),
        c = l
          ? new E.SentrySpan({
              ...n,
              parentSpanId: o,
              traceId: a,
              sampled: l,
            })
          : new w.SentryNonRecordingSpan({ traceId: a });
      v.addChildSpanToSpan(e, c), k.setCapturedScopesOnSpan(c, t, r);
      const u = i.getClient();
      return u
        ? (f.hasSpanStreamingEnabled(u) &&
            w.spanIsNonRecordingSpan(c) &&
            (w.spanIsNonRecordingSpan(e) && e.dropReason
              ? ((c.dropReason = e.dropReason),
                u.recordDroppedEvent(e.dropReason, "span"))
              : s ||
                ((c.dropReason = "sample_rate"),
                u.recordDroppedEvent("sample_rate", "span"))),
          u.emit("spanStart", c),
          n.endTimestamp && (u.emit("spanEnd", c), u.emit("afterSpanEnd", c)),
          c)
        : c;
    })(e, r, t, o)),
      v.addChildSpanToSpan(e, l);
  else if (e) {
    const n = S.getDynamicSamplingContextFromSpan(e),
      { traceId: i, spanId: a } = e.spanContext(),
      s = v.spanIsSampled(e);
    (l = j({ traceId: i, parentSpanId: a, ...t }, r, o, s)),
      S.freezeDscOnSpan(l, n);
  } else {
    const {
      traceId: e,
      dsc: n,
      parentSpanId: i,
      sampled: a,
    } = {
      ...o.getPropagationContext(),
      ...r.getPropagationContext(),
    };
    (l = j({ traceId: e, parentSpanId: i, ...t }, r, o, a)),
      n && S.freezeDscOnSpan(l, n);
  }
  return _.logSpanStart(l), l;
}
function N(e) {
  const t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    const n = { ...t };
    return (
      (n.startTimestamp = v.spanTimeInputToSeconds(e.startTime)),
      delete n.startTime,
      n
    );
  }
  return t;
}
function D() {
  const e = o.getMainCarrier();
  return r.getAsyncContextStrategy(e);
}
function j(e, t, n, r) {
  const o = i.getClient(),
    l = o?.getOptions() || {},
    { name: u = "" } = e,
    d = {
      spanAttributes: { ...e.attributes },
      spanName: u,
      parentSampled: r,
    };
  o?.emit("beforeSampling", d, { decision: !1 });
  const p = d.parentSampled ?? r,
    m = d.spanAttributes,
    g = t.getPropagationContext(),
    y = O(t),
    [v, b, S] = y
      ? [!1]
      : x.sampleSpan(
          l,
          {
            name: u,
            parentSampled: p,
            attributes: m,
            normalizedRequest:
              n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: h.parseSampleRate(g.dsc?.sample_rate),
          },
          g.sampleRand,
        ),
    _ = new E.SentrySpan({
      ...e,
      attributes: {
        [s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
        [s.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]:
          void 0 !== b && S ? b : void 0,
        ...m,
      },
      sampled: v,
    });
  return (
    v ||
      !o ||
      y ||
      (a.DEBUG_BUILD &&
        c.debug.log(
          "[Tracing] Discarding root span because its trace was not chosen to be sampled.",
        ),
      o.recordDroppedEvent(
        "sample_rate",
        f.hasSpanStreamingEnabled(o) ? "span" : "transaction",
      )),
    k.setCapturedScopesOnSpan(_, t, n),
    o && o.emit("spanStart", _),
    _
  );
}
function L(e, t) {
  if (t) return t;
  if (null === t) return;
  const n = y._getSpanForScope(e);
  if (!n) return;
  const r = i.getClient();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan
    ? v.getRootSpan(n)
    : n;
}
function F(e) {
  return void 0 !== e ? (t) => A(e, t) : (e) => e();
}
function U(e) {
  return w.spanIsNonRecordingSpan(e) && "ignored" === e.dropReason;
}
(t.SUPPRESS_TRACING_KEY = C),
  (t._INTERNAL_startInactiveSpan = function (e) {
    return I(e);
  }),
  (t.continueTrace = (e, t) => {
    const n = o.getMainCarrier(),
      a = r.getAsyncContextStrategy(n);
    if (a.continueTrace) return a.continueTrace(e, t);
    const { sentryTrace: s, baggage: c } = e,
      u = i.getClient(),
      d = l.baggageHeaderToDynamicSamplingContext(c);
    return u && !b.shouldContinueTrace(u, d?.org_id)
      ? R(t)
      : i.withScope((e) => {
          const n = b.propagationContextFromHeaders(s, c);
          return e.setPropagationContext(n), y._setSpanForScope(e, void 0), t();
        });
  }),
  (t.isTracingSuppressed = O),
  (t.spanIsIgnored = U),
  (t.startInactiveSpan = function (e) {
    const t = D();
    return t.startInactiveSpan ? t.startInactiveSpan(e) : I(e);
  }),
  (t.startNewTrace = R),
  (t.startSpan = function (e, t) {
    const n = D();
    if (n.startSpan) return n.startSpan(e, t);
    const r = N(e),
      { forceTransaction: o, parentSpan: a, scope: s } = e,
      l = s?.clone();
    return i.withScope(l, () =>
      F(a)(() => {
        const n = i.getCurrentScope(),
          s = L(n, a),
          l = i.getClient(),
          c =
            e.onlyIfParent && !s
              ? M(n, l)
              : P({
                  parentSpan: s,
                  spanArguments: r,
                  forceTransaction: o,
                  scope: n,
                });
        return (
          (U(c) && s) || y._setSpanForScope(n, c),
          u.handleCallbackErrors(
            () => t(c),
            () => {
              const { status: e } = v.spanToJSON(c);
              !c.isRecording() ||
                (e && "ok" !== e) ||
                c.setStatus({
                  code: T.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            },
            () => {
              c.end();
            },
          )
        );
      }),
    );
  }),
  (t.startSpanManual = function (e, t) {
    const n = D();
    if (n.startSpanManual) return n.startSpanManual(e, t);
    const r = N(e),
      { forceTransaction: o, parentSpan: a, scope: s } = e,
      l = s?.clone();
    return i.withScope(l, () =>
      F(a)(() => {
        const n = i.getCurrentScope(),
          s = L(n, a),
          l =
            e.onlyIfParent && !s
              ? M(n, i.getClient())
              : P({
                  parentSpan: s,
                  spanArguments: r,
                  forceTransaction: o,
                  scope: n,
                });
        return (
          (U(l) && s) || y._setSpanForScope(n, l),
          u.handleCallbackErrors(
            () => t(l, () => l.end()),
            () => {
              const { status: e } = v.spanToJSON(l);
              !l.isRecording() ||
                (e && "ok" !== e) ||
                l.setStatus({
                  code: T.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            },
          )
        );
      }),
    );
  }),
  (t.suppressTracing = function (e) {
    const t = D();
    return t.suppressTracing
      ? t.suppressTracing(e)
      : i.withScope((t) => {
          t.setSDKProcessingMetadata({ [C]: !0 });
          const n = e();
          return t.setSDKProcessingMetadata({ [C]: void 0 }), n;
        });
  }),
  (t.withActiveSpan = A);

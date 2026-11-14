// vendor/other/module-77481.js — webpack module 77481
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/other/module-64289 */),
  o = n(16973 /* vendor/other/module-16973 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(75703 /* vendor/other/module-75703 */),
  a = n(12724 /* vendor/other/module-12724 */),
  c = n(32997 /* vendor/other/module-32997 */),
  u = n(58637 /* vendor/other/module-58637 */),
  l = n(46901 /* vendor/other/module-46901 */),
  d = n(72925 /* vendor/other/module-72925 */),
  p = n(51644 /* vendor/other/module-51644 */),
  f = n(91159 /* vendor/other/module-91159 */),
  h = n(18828 /* vendor/other/module-18828 */),
  g = n(73802 /* vendor/other/module-73802 */),
  m = n(97190 /* vendor/other/module-97190 */),
  _ = n(33836 /* vendor/other/module-33836 */),
  S = n(38862 /* vendor/other/module-38862 */),
  E = n(73253 /* vendor/other/module-73253 */),
  y = n(60169 /* vendor/other/module-60169 */),
  T = n(68621 /* vendor/other/module-68621 */),
  b = n(6199 /* vendor/other/module-6199 */),
  I = n(63059 /* vendor/other/module-63059 */),
  v = n(41013 /* vendor/other/module-41013 */),
  A = n(19648 /* vendor/other/module-19648 */),
  N = n(30401 /* vendor/other/module-30401 */),
  R = "__SENTRY_SUPPRESS_TRACING__";
function C(e) {
  const t = x(e),
    { forceTransaction: n, parentSpan: r } = e;
  return (
    e.scope
      ? (t) => i.withScope(e.scope, t)
      : void 0 !== r
        ? (e) => O(r, e)
        : (e) => e()
  )(() => {
    const o = i.getCurrentScope(),
      s = U(o, r),
      a = i.getClient();
    return e.onlyIfParent && !s
      ? P(o, a)
      : L({
          parentSpan: s,
          spanArguments: t,
          forceTransaction: n,
          scope: o,
        });
  });
}
function O(e, t) {
  const n = M();
  return n.withActiveSpan
    ? n.withActiveSpan(e, t)
    : i.withScope((n) => (_._setSpanForScope(n, e || void 0), t(n)));
}
function w(e = i.getCurrentScope()) {
  const t = M();
  return t.isTracingSuppressed
    ? t.isTracingSuppressed(e)
    : !0 === e.getScopeData().sdkProcessingMetadata[R];
}
function k(e) {
  const t = M();
  return t.startNewTrace
    ? t.startNewTrace(e)
    : i.withScope(
        (t) => (
          t.setPropagationContext({
            traceId: g.generateTraceId(),
            sampleRand: m.safeMathRandom(),
          }),
          s.DEBUG_BUILD &&
            u.debug.log(
              `Starting a new trace with id ${t.getPropagationContext().traceId}`,
            ),
          O(null, e)
        ),
      );
}
function P(e, t) {
  t?.recordDroppedEvent("no_parent_span", "span");
  const n = new I.SentryNonRecordingSpan({
    traceId: e.getPropagationContext().traceId,
  });
  return N.setCapturedScopesOnSpan(n, e, i.getIsolationScope()), n;
}
function L({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  const o = i.getIsolationScope();
  if (!d.hasSpansEnabled()) {
    const t = {
        ...o.getPropagationContext(),
        ...r.getPropagationContext(),
      },
      i = e ? e.spanContext().traceId : t.traceId,
      s = new I.SentryNonRecordingSpan({ traceId: i });
    return (
      e && !n && S.addChildSpanToSpan(e, s),
      N.setCapturedScopesOnSpan(s, r, o),
      s
    );
  }
  const s = i.getClient();
  if (
    (function (e, t) {
      const n = e?.getOptions().ignoreSpans;
      return (
        !!(e && f.hasSpanStreamingEnabled(e) && n?.length) &&
        p.shouldIgnoreSpan(
          {
            description: t.name || "",
            op: t.attributes?.[a.SEMANTIC_ATTRIBUTE_SENTRY_OP] || t.op,
            attributes: t.attributes,
          },
          n,
        )
      );
    })(s, t)
  ) {
    w(r) || s?.recordDroppedEvent("ignored", "span");
    const t = new I.SentryNonRecordingSpan({
      dropReason: "ignored",
      traceId: e?.spanContext().traceId ?? r.getPropagationContext().traceId,
    });
    return (
      e && !n && S.addChildSpanToSpan(e, t),
      N.setCapturedScopesOnSpan(t, r, o),
      t
    );
  }
  let c;
  if (e && !n)
    (c = (function (e, t, n, r) {
      const { spanId: o, traceId: s } = e.spanContext(),
        a = w(t),
        c = !a && S.spanIsSampled(e),
        u = c
          ? new v.SentrySpan({
              ...n,
              parentSpanId: o,
              traceId: s,
              sampled: c,
            })
          : new I.SentryNonRecordingSpan({ traceId: s });
      S.addChildSpanToSpan(e, u), N.setCapturedScopesOnSpan(u, t, r);
      const l = i.getClient();
      return l
        ? (f.hasSpanStreamingEnabled(l) &&
            I.spanIsNonRecordingSpan(u) &&
            (I.spanIsNonRecordingSpan(e) && e.dropReason
              ? ((u.dropReason = e.dropReason),
                l.recordDroppedEvent(e.dropReason, "span"))
              : a ||
                ((u.dropReason = "sample_rate"),
                l.recordDroppedEvent("sample_rate", "span"))),
          l.emit("spanStart", u),
          n.endTimestamp && (l.emit("spanEnd", u), l.emit("afterSpanEnd", u)),
          u)
        : u;
    })(e, r, t, o)),
      S.addChildSpanToSpan(e, c);
  else if (e) {
    const n = y.getDynamicSamplingContextFromSpan(e),
      { traceId: i, spanId: s } = e.spanContext(),
      a = S.spanIsSampled(e);
    (c = D({ traceId: i, parentSpanId: s, ...t }, r, o, a)),
      y.freezeDscOnSpan(c, n);
  } else {
    const {
      traceId: e,
      dsc: n,
      parentSpanId: i,
      sampled: s,
    } = {
      ...o.getPropagationContext(),
      ...r.getPropagationContext(),
    };
    (c = D({ traceId: e, parentSpanId: i, ...t }, r, o, s)),
      n && y.freezeDscOnSpan(c, n);
  }
  return T.logSpanStart(c), c;
}
function x(e) {
  const t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    const n = { ...t };
    return (
      (n.startTimestamp = S.spanTimeInputToSeconds(e.startTime)),
      delete n.startTime,
      n
    );
  }
  return t;
}
function M() {
  const e = o.getMainCarrier();
  return r.getAsyncContextStrategy(e);
}
function D(e, t, n, r) {
  const o = i.getClient(),
    c = o?.getOptions() || {},
    { name: l = "" } = e,
    d = {
      spanAttributes: { ...e.attributes },
      spanName: l,
      parentSampled: r,
    };
  o?.emit("beforeSampling", d, { decision: !1 });
  const p = d.parentSampled ?? r,
    g = d.spanAttributes,
    m = t.getPropagationContext(),
    _ = w(t),
    [S, E, y] = _
      ? [!1]
      : b.sampleSpan(
          c,
          {
            name: l,
            parentSampled: p,
            attributes: g,
            normalizedRequest:
              n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: h.parseSampleRate(m.dsc?.sample_rate),
          },
          m.sampleRand,
        ),
    T = new v.SentrySpan({
      ...e,
      attributes: {
        [a.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
        [a.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]:
          void 0 !== E && y ? E : void 0,
        ...g,
      },
      sampled: S,
    });
  return (
    S ||
      !o ||
      _ ||
      (s.DEBUG_BUILD &&
        u.debug.log(
          "[Tracing] Discarding root span because its trace was not chosen to be sampled.",
        ),
      o.recordDroppedEvent(
        "sample_rate",
        f.hasSpanStreamingEnabled(o) ? "span" : "transaction",
      )),
    N.setCapturedScopesOnSpan(T, t, n),
    o && o.emit("spanStart", T),
    T
  );
}
function U(e, t) {
  if (t) return t;
  if (null === t) return;
  const n = _._getSpanForScope(e);
  if (!n) return;
  const r = i.getClient();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan
    ? S.getRootSpan(n)
    : n;
}
function B(e) {
  return void 0 !== e ? (t) => O(e, t) : (e) => e();
}
function G(e) {
  return I.spanIsNonRecordingSpan(e) && "ignored" === e.dropReason;
}
(t.SUPPRESS_TRACING_KEY = R),
  (t._INTERNAL_startInactiveSpan = function (e) {
    return C(e);
  }),
  (t.continueTrace = (e, t) => {
    const n = o.getMainCarrier(),
      s = r.getAsyncContextStrategy(n);
    if (s.continueTrace) return s.continueTrace(e, t);
    const { sentryTrace: a, baggage: u } = e,
      l = i.getClient(),
      d = c.baggageHeaderToDynamicSamplingContext(u);
    return l && !E.shouldContinueTrace(l, d?.org_id)
      ? k(t)
      : i.withScope((e) => {
          const n = E.propagationContextFromHeaders(a, u);
          return e.setPropagationContext(n), _._setSpanForScope(e, void 0), t();
        });
  }),
  (t.isTracingSuppressed = w),
  (t.spanIsIgnored = G),
  (t.startInactiveSpan = function (e) {
    const t = M();
    return t.startInactiveSpan ? t.startInactiveSpan(e) : C(e);
  }),
  (t.startNewTrace = k),
  (t.startSpan = function (e, t) {
    const n = M();
    if (n.startSpan) return n.startSpan(e, t);
    const r = x(e),
      { forceTransaction: o, parentSpan: s, scope: a } = e,
      c = a?.clone();
    return i.withScope(c, () =>
      B(s)(() => {
        const n = i.getCurrentScope(),
          a = U(n, s),
          c = i.getClient(),
          u =
            e.onlyIfParent && !a
              ? P(n, c)
              : L({
                  parentSpan: a,
                  spanArguments: r,
                  forceTransaction: o,
                  scope: n,
                });
        return (
          (G(u) && a) || _._setSpanForScope(n, u),
          l.handleCallbackErrors(
            () => t(u),
            () => {
              const { status: e } = S.spanToJSON(u);
              !u.isRecording() ||
                (e && "ok" !== e) ||
                u.setStatus({
                  code: A.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            },
            () => {
              u.end();
            },
          )
        );
      }),
    );
  }),
  (t.startSpanManual = function (e, t) {
    const n = M();
    if (n.startSpanManual) return n.startSpanManual(e, t);
    const r = x(e),
      { forceTransaction: o, parentSpan: s, scope: a } = e,
      c = a?.clone();
    return i.withScope(c, () =>
      B(s)(() => {
        const n = i.getCurrentScope(),
          a = U(n, s),
          c =
            e.onlyIfParent && !a
              ? P(n, i.getClient())
              : L({
                  parentSpan: a,
                  spanArguments: r,
                  forceTransaction: o,
                  scope: n,
                });
        return (
          (G(c) && a) || _._setSpanForScope(n, c),
          l.handleCallbackErrors(
            () => t(c, () => c.end()),
            () => {
              const { status: e } = S.spanToJSON(c);
              !c.isRecording() ||
                (e && "ok" !== e) ||
                c.setStatus({
                  code: A.SPAN_STATUS_ERROR,
                  message: "internal_error",
                });
            },
          )
        );
      }),
    );
  }),
  (t.suppressTracing = function (e) {
    const t = M();
    return t.suppressTracing
      ? t.suppressTracing(e)
      : i.withScope((t) => {
          t.setSDKProcessingMetadata({ [R]: !0 });
          const n = e();
          return t.setSDKProcessingMetadata({ [R]: void 0 }), n;
        });
  }),
  (t.withActiveSpan = O);

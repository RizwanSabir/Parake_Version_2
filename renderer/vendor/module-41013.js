// vendor/module-41013.js — webpack module 41013
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(56997 /* vendor/module-56997 */),
  a = n(12724 /* vendor/module-12724 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(73802 /* vendor/module-73802 */),
  c = n(38862 /* vendor/module-38862 */),
  u = n(19410 /* vendor/module-19410 */),
  d = n(60169 /* vendor/module-60169 */),
  p = n(68621 /* vendor/module-68621 */),
  f = n(36216 /* vendor/module-36216 */),
  h = n(19458 /* vendor/module-19458 */),
  m = n(91159 /* vendor/module-91159 */),
  g = n(30401 /* vendor/module-30401 */);
class y {
  constructor(e = {}) {
    (this._traceId = e.traceId || l.generateTraceId()),
      (this._spanId = e.spanId || l.generateSpanId()),
      (this._startTime = e.startTimestamp || u.timestampInSeconds()),
      (this._links = e.links),
      (this._attributes = {}),
      this.setAttributes({
        [a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
        [a.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
        ...e.attributes,
      }),
      (this._name = e.name),
      e.parentSpanId && (this._parentSpanId = e.parentSpanId),
      "sampled" in e && (this._sampled = e.sampled),
      e.endTimestamp && (this._endTime = e.endTimestamp),
      (this._events = []),
      (this._isStandaloneSpan = e.isStandalone),
      this._endTime && this._onSpanEnded();
  }
  addLink(e) {
    return (
      this._frozen || (this._links ? this._links.push(e) : (this._links = [e])),
      this
    );
  }
  addLinks(e) {
    return (
      this._frozen ||
        (this._links ? this._links.push(...e) : (this._links = e)),
      this
    );
  }
  recordException(e, t) {}
  spanContext() {
    const { _spanId: e, _traceId: t, _sampled: n } = this;
    return {
      spanId: e,
      traceId: t,
      traceFlags: n ? c.TRACE_FLAG_SAMPLED : c.TRACE_FLAG_NONE,
    };
  }
  setAttribute(e, t) {
    return (
      this._frozen ||
        (void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t),
        e === a.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE &&
          void 0 !== t &&
          g.spanShouldInferOtelSource(this) &&
          g.markSpanSourceAsExplicit(this)),
      this
    );
  }
  setAttributes(e) {
    return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
  }
  updateStartTime(e) {
    this._frozen || (this._startTime = c.spanTimeInputToSeconds(e));
  }
  setStatus(e) {
    return this._frozen || (this._status = e), this;
  }
  updateName(e) {
    return (
      this._frozen ||
        ((this._name = e),
        g.spanShouldInferOtelSource(this) ||
          this.setAttribute(a.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom")),
      this
    );
  }
  end(e) {
    this._endTime ||
      ((this._endTime = c.spanTimeInputToSeconds(e)),
      p.logSpanEnd(this),
      this._onSpanEnded()),
      (this._frozen = g.spanIsTracerProviderSpan(this));
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[a.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: c.getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      profile_id: this._attributes[a.SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[a.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: f.timedEventsToMeasurements(this._events),
      is_segment:
        (this._isStandaloneSpan && c.getRootSpan(this) === this) || void 0,
      segment_id: this._isStandaloneSpan
        ? c.getRootSpan(this).spanContext().spanId
        : void 0,
      links: c.convertSpanLinksForEnvelope(this._links),
    };
  }
  getStreamedSpanJSON() {
    return {
      name: this._name ?? "",
      span_id: this._spanId,
      trace_id: this._traceId,
      parent_span_id: this._parentSpanId,
      start_timestamp: this._startTime,
      end_timestamp: this._endTime ?? this._startTime,
      is_segment: this._isStandaloneSpan || this === c.getRootSpan(this),
      status: c.getSimpleStatus(this._status),
      attributes: c.addStatusMessageAttribute(this._attributes, this._status),
      links: c.getStreamedSpanLinks(this._links),
    };
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(e, t, n) {
    if (this._frozen) return this;
    o.DEBUG_BUILD && s.debug.log("[Tracing] Adding an event to span:", e);
    const r = v(t) ? t : n || u.timestampInSeconds(),
      i = v(t) ? {} : t || {},
      a = {
        name: e,
        time: c.spanTimeInputToSeconds(r),
        attributes: i,
      };
    return this._events.push(a), this;
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const e = r.getClient();
    e &&
      (e.emit("spanEnd", this),
      this._isStandaloneSpan || e.emit("afterSpanEnd", this));
    const t = c.getRootSpan(this),
      n = this._isStandaloneSpan || this === t;
    if (this._isStandaloneSpan)
      return void (this._sampled
        ? (function (e) {
            const t = r.getClient();
            if (!t) return;
            const n = e[1];
            n && 0 !== n.length
              ? t.sendEnvelope(e)
              : t.recordDroppedEvent("before_send", "span");
          })(i.createSpanEnvelope([this], e))
        : (o.DEBUG_BUILD &&
            s.debug.log(
              "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
            ),
          e && e.recordDroppedEvent("sample_rate", "span")));
    if (!n) {
      const e = h.getSegmentSpanCaptureStrategy();
      if (e) {
        const n = g.getCapturedScopesOnSpan(this).scope || r.getCurrentScope();
        e.onChildSpanEnded(
          this,
          t,
          (e) => this._convertSpanToTransaction(e),
          n,
        );
      }
      return;
    }
    if (e && m.hasSpanStreamingEnabled(e))
      return void e.emit("afterSegmentSpanEnd", this);
    const a = g.getCapturedScopesOnSpan(this).scope || r.getCurrentScope(),
      l = h.getSegmentSpanCaptureStrategy();
    if (l) l.onSegmentSpanEnded((e) => this._convertSpanToTransaction(e), a);
    else {
      const e = this._convertSpanToTransaction();
      e && a.captureEvent(e);
    }
  }
  _convertSpanToTransaction(e = {}) {
    if (!b(c.spanToJSON(this))) return;
    this._name ||
      (o.DEBUG_BUILD &&
        s.debug.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>"));
    const { scope: t, isolationScope: n } = g.getCapturedScopesOnSpan(this),
      r = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (!0 !== this._sampled) return;
    e.onSpanCaptured?.(this);
    const i = [];
    for (const t of c.getSpanDescendants(this)) {
      if (t === this || S(t) || e.isSpanAlreadyCaptured?.(t)) continue;
      const n = c.spanToJSON(t);
      b(n) && (e.onSpanCaptured?.(t), i.push(n));
    }
    const l = this._attributes[a.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[a.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    let u = !1;
    i.forEach((e) => {
      delete e.data[a.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
        e.op?.startsWith("gen_ai.") && (u = !0);
    });
    const p = {
        contexts: { trace: c.spanToTransactionTraceContext(this) },
        spans:
          i.length > 1e3
            ? i
                .sort((e, t) => e.start_timestamp - t.start_timestamp)
                .slice(0, 1e3)
            : i,
        start_timestamp: this._startTime,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          capturedSpanScope: t,
          capturedSpanIsolationScope: n,
          dynamicSamplingContext: d.getDynamicSamplingContextFromSpan(this),
          hasGenAiSpans: u,
        },
        request: r,
        ...(l && { transaction_info: { source: l } }),
      },
      h = f.timedEventsToMeasurements(this._events);
    return (
      h &&
        Object.keys(h).length &&
        (o.DEBUG_BUILD &&
          s.debug.log(
            "[Measurements] Adding measurements to transaction event",
            JSON.stringify(h, void 0, 2),
          ),
        (p.measurements = h)),
      p
    );
  }
}
function v(e) {
  return (e && "number" == typeof e) || e instanceof Date || Array.isArray(e);
}
function b(e) {
  return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id);
}
function S(e) {
  return e instanceof y && e.isStandaloneSpan();
}
t.SentrySpan = y;

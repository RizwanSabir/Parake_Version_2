// vendor/other/module-41013.js — webpack module 41013
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(56997 /* vendor/other/module-56997 */),
  s = n(12724 /* vendor/other/module-12724 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(73802 /* vendor/other/module-73802 */),
  u = n(38862 /* vendor/other/module-38862 */),
  l = n(19410 /* vendor/other/module-19410 */),
  d = n(60169 /* vendor/other/module-60169 */),
  p = n(68621 /* vendor/other/module-68621 */),
  f = n(36216 /* vendor/other/module-36216 */),
  h = n(19458 /* vendor/other/module-19458 */),
  g = n(91159 /* vendor/other/module-91159 */),
  m = n(30401 /* vendor/other/module-30401 */);
class _ {
  constructor(e = {}) {
    (this._traceId = e.traceId || c.generateTraceId()),
      (this._spanId = e.spanId || c.generateSpanId()),
      (this._startTime = e.startTimestamp || l.timestampInSeconds()),
      (this._links = e.links),
      (this._attributes = {}),
      this.setAttributes({
        [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
        [s.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
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
      traceFlags: n ? u.TRACE_FLAG_SAMPLED : u.TRACE_FLAG_NONE,
    };
  }
  setAttribute(e, t) {
    return (
      this._frozen ||
        (void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t),
        e === s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE &&
          void 0 !== t &&
          m.spanShouldInferOtelSource(this) &&
          m.markSpanSourceAsExplicit(this)),
      this
    );
  }
  setAttributes(e) {
    return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
  }
  updateStartTime(e) {
    this._frozen || (this._startTime = u.spanTimeInputToSeconds(e));
  }
  setStatus(e) {
    return this._frozen || (this._status = e), this;
  }
  updateName(e) {
    return (
      this._frozen ||
        ((this._name = e),
        m.spanShouldInferOtelSource(this) ||
          this.setAttribute(s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom")),
      this
    );
  }
  end(e) {
    this._endTime ||
      ((this._endTime = u.spanTimeInputToSeconds(e)),
      p.logSpanEnd(this),
      this._onSpanEnded()),
      (this._frozen = m.spanIsTracerProviderSpan(this));
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: u.getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      profile_id: this._attributes[s.SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[s.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: f.timedEventsToMeasurements(this._events),
      is_segment:
        (this._isStandaloneSpan && u.getRootSpan(this) === this) || void 0,
      segment_id: this._isStandaloneSpan
        ? u.getRootSpan(this).spanContext().spanId
        : void 0,
      links: u.convertSpanLinksForEnvelope(this._links),
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
      is_segment: this._isStandaloneSpan || this === u.getRootSpan(this),
      status: u.getSimpleStatus(this._status),
      attributes: u.addStatusMessageAttribute(this._attributes, this._status),
      links: u.getStreamedSpanLinks(this._links),
    };
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(e, t, n) {
    if (this._frozen) return this;
    o.DEBUG_BUILD && a.debug.log("[Tracing] Adding an event to span:", e);
    const r = S(t) ? t : n || l.timestampInSeconds(),
      i = S(t) ? {} : t || {},
      s = {
        name: e,
        time: u.spanTimeInputToSeconds(r),
        attributes: i,
      };
    return this._events.push(s), this;
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const e = r.getClient();
    e &&
      (e.emit("spanEnd", this),
      this._isStandaloneSpan || e.emit("afterSpanEnd", this));
    const t = u.getRootSpan(this),
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
            a.debug.log(
              "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
            ),
          e && e.recordDroppedEvent("sample_rate", "span")));
    if (!n) {
      const e = h.getSegmentSpanCaptureStrategy();
      if (e) {
        const n = m.getCapturedScopesOnSpan(this).scope || r.getCurrentScope();
        e.onChildSpanEnded(
          this,
          t,
          (e) => this._convertSpanToTransaction(e),
          n,
        );
      }
      return;
    }
    if (e && g.hasSpanStreamingEnabled(e))
      return void e.emit("afterSegmentSpanEnd", this);
    const s = m.getCapturedScopesOnSpan(this).scope || r.getCurrentScope(),
      c = h.getSegmentSpanCaptureStrategy();
    if (c) c.onSegmentSpanEnded((e) => this._convertSpanToTransaction(e), s);
    else {
      const e = this._convertSpanToTransaction();
      e && s.captureEvent(e);
    }
  }
  _convertSpanToTransaction(e = {}) {
    if (!E(u.spanToJSON(this))) return;
    this._name ||
      (o.DEBUG_BUILD &&
        a.debug.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>"));
    const { scope: t, isolationScope: n } = m.getCapturedScopesOnSpan(this),
      r = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (!0 !== this._sampled) return;
    e.onSpanCaptured?.(this);
    const i = [];
    for (const t of u.getSpanDescendants(this)) {
      if (t === this || y(t) || e.isSpanAlreadyCaptured?.(t)) continue;
      const n = u.spanToJSON(t);
      E(n) && (e.onSpanCaptured?.(t), i.push(n));
    }
    const c = this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    let l = !1;
    i.forEach((e) => {
      delete e.data[s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
        e.op?.startsWith("gen_ai.") && (l = !0);
    });
    const p = {
        contexts: { trace: u.spanToTransactionTraceContext(this) },
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
          hasGenAiSpans: l,
        },
        request: r,
        ...(c && { transaction_info: { source: c } }),
      },
      h = f.timedEventsToMeasurements(this._events);
    return (
      h &&
        Object.keys(h).length &&
        (o.DEBUG_BUILD &&
          a.debug.log(
            "[Measurements] Adding measurements to transaction event",
            JSON.stringify(h, void 0, 2),
          ),
        (p.measurements = h)),
      p
    );
  }
}
function S(e) {
  return (e && "number" == typeof e) || e instanceof Date || Array.isArray(e);
}
function E(e) {
  return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id);
}
function y(e) {
  return e instanceof _ && e.isStandaloneSpan();
}
t.SentrySpan = _;

// vendor/module-63059.js — webpack module 63059
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/module-68020 */),
  o = n(73802 /* vendor/module-73802 */),
  i = n(38862 /* vendor/module-38862 */),
  a = Symbol.for("sentry.nonRecordingSpan");
(t.SentryNonRecordingSpan = class {
  constructor(e = {}) {
    (this._traceId = e.traceId || o.generateTraceId()),
      (this._spanId = e.spanId || o.generateSpanId()),
      (this.dropReason = e.dropReason),
      r.addNonEnumerableProperty(this, a, !0);
  }
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: i.TRACE_FLAG_NONE,
    };
  }
  end(e) {}
  setAttribute(e, t) {
    return this;
  }
  setAttributes(e) {
    return this;
  }
  setStatus(e) {
    return this;
  }
  updateName(e) {
    return this;
  }
  isRecording() {
    return !1;
  }
  addEvent(e, t, n) {
    return this;
  }
  addLink(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, t) {}
}),
  (t.spanIsNonRecordingSpan = function (e) {
    return !!e && !0 === e[a];
  });

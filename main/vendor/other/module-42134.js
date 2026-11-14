// vendor/other/module-42134.js — webpack module 42134
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(98050 /* vendor/other/module-98050 */),
  s = n(60169 /* vendor/other/module-60169 */),
  a = n(66516 /* vendor/other/module-66516 */),
  c = n(39999 /* vendor/other/module-39999 */);
t.SpanBuffer = class {
  constructor(e, t) {
    (this._traceBuckets = new Map()), (this._client = e);
    const {
      maxSpanLimit: n,
      flushInterval: r,
      maxTraceWeightInBytes: o,
    } = t ?? {};
    (this._maxSpanLimit = n && n > 0 && n <= 1e3 ? n : 1e3),
      (this._flushInterval = r && r > 0 ? r : 5e3),
      (this._maxTraceWeight = o && o > 0 ? o : 5e6),
      this._client.on("flush", () => {
        this.drain();
      }),
      this._client.on("close", () => {
        this._traceBuckets.forEach((e) => {
          clearTimeout(e.timeout);
        }),
          this._traceBuckets.clear();
      });
  }
  add(e) {
    const t = e.trace_id;
    let n = this._traceBuckets.get(t);
    n ||
      ((n = {
        spans: new Set(),
        size: 0,
        timeout: i.safeUnref(
          setTimeout(() => {
            this.flush(t);
          }, this._flushInterval),
        ),
      }),
      this._traceBuckets.set(t, n)),
      n.spans.add(e),
      (n.size += c.estimateSerializedSpanSizeInBytes(e)),
      (n.spans.size >= this._maxSpanLimit || n.size >= this._maxTraceWeight) &&
        this.flush(t);
  }
  drain() {
    this._traceBuckets.size &&
      (r.DEBUG_BUILD &&
        o.debug.log(
          `Flushing span tree map with ${this._traceBuckets.size} traces`,
        ),
      this._traceBuckets.forEach((e, t) => {
        this.flush(t);
      }));
  }
  flush(e) {
    const t = this._traceBuckets.get(e);
    if (!t) return;
    if (!t.spans.size) return void this._removeTrace(e);
    const n = Array.from(t.spans),
      i = n[0]?._segmentSpan;
    if (!i)
      return (
        r.DEBUG_BUILD &&
          o.debug.warn(
            "No segment span reference found on span JSON, cannot compute DSC",
          ),
        void this._removeTrace(e)
      );
    const c = s.getDynamicSamplingContextFromSpan(i),
      u = n.map((e) => {
        const { _segmentSpan: t, ...n } = e;
        return n;
      }),
      l = a.createStreamedSpanEnvelope(u, c, this._client);
    r.DEBUG_BUILD &&
      o.debug.log(
        `Sending span envelope for trace ${e} with ${u.length} spans`,
      ),
      this._client.sendEnvelope(l).then(null, (e) => {
        r.DEBUG_BUILD &&
          o.debug.error("Error while sending streamed span envelope:", e);
      }),
      this._removeTrace(e);
  }
  _removeTrace(e) {
    const t = this._traceBuckets.get(e);
    t && clearTimeout(t.timeout), this._traceBuckets.delete(e);
  }
};

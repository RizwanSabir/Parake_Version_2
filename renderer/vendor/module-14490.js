// vendor/module-14490.js — webpack module 14490
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38862 /* vendor/module-38862 */);
t.spanJsonToSerializedStreamedSpan = function (e) {
  const t = {
    trace_id: e.trace_id,
    span_id: e.span_id,
    parent_span_id: e.parent_span_id,
    name: e.description || "",
    start_timestamp: e.start_timestamp,
    end_timestamp: e.timestamp || e.start_timestamp,
    status:
      e.status && "ok" !== e.status && "cancelled" !== e.status
        ? "error"
        : "ok",
    is_segment: !1,
    attributes: { ...e.data },
    links: e.links,
  };
  return r.streamedSpanJsonToSerializedSpan(t);
};

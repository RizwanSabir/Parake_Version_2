// vendor/module-93911.js — webpack module 93911
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/module-12724 */);
(t.convertSpanJsonToTransactionEvent = function (e) {
  return {
    type: "transaction",
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && {
            [r.SEMANTIC_ATTRIBUTE_PROFILE_ID]: e.profile_id,
          }),
          ...(e.exclusive_time && {
            [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: e.exclusive_time,
          }),
        },
      },
    },
    measurements: e.measurements,
  };
}),
  (t.convertTransactionEventToSpanJson = function (e) {
    const {
      trace_id: t,
      parent_span_id: n,
      span_id: o,
      status: i,
      origin: a,
      data: s,
      op: l,
    } = e.contexts?.trace ?? {};
    return {
      data: s ?? {},
      description: e.transaction,
      op: l,
      parent_span_id: n,
      span_id: o ?? "",
      start_timestamp: e.start_timestamp ?? 0,
      status: i,
      timestamp: e.timestamp,
      trace_id: t ?? "",
      origin: a,
      profile_id: s?.[r.SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: s?.[r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: e.measurements,
      is_segment: !0,
    };
  });

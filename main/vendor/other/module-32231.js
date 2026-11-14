// vendor/other/module-32231.js — webpack module 32231
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(37631 /* vendor/other/module-37631 */);
function a(e, t) {
  const n = e?.[t];
  if (null != n) return Array.isArray(n) ? n[0]?.toString() : n.toString();
}
(t.endSpansOnPromise = function (e, t) {
  return Promise.resolve(t)
    .catch((t) => {
      let n,
        r = s.ERROR_TYPE_VALUE_OTHER;
      throw (
        ("string" == typeof t || void 0 === t
          ? (n = t)
          : "object" == typeof t &&
            Object.prototype.hasOwnProperty.call(t, "message") &&
            ((n = t.message), (r = t.constructor.name)),
        e.forEach((e) => {
          e.setAttribute(o.ERROR_TYPE, r),
            e.setStatus({ code: i.SPAN_STATUS_ERROR, message: n });
        }),
        t)
      );
    })
    .finally(() => {
      e.forEach((e) => e.end());
    });
}),
  (t.getHeaderAsString = a),
  (t.getLinksFromHeaders = function (e) {
    const t = a(e, "sentry-trace");
    if (!t) return;
    const {
      traceId: n,
      parentSpanId: o,
      sampled: s,
    } = i.propagationContextFromHeaders(t, a(e, "baggage"));
    return o
      ? [
          {
            context: {
              traceId: n,
              spanId: o,
              isRemote: !0,
              traceFlags: s ? r.TraceFlags.SAMPLED : r.TraceFlags.NONE,
            },
          },
        ]
      : void 0;
  }),
  (t.startConsumerSpan = function ({
    topic: e,
    message: t,
    operationType: n,
    links: r,
    attributes: a,
  }) {
    const c = n === s.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? "poll" : n;
    return i.startInactiveSpan({
      name: `${c} ${e}`,
      kind:
        n === s.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE
          ? i.SPAN_KIND.CLIENT
          : i.SPAN_KIND.CONSUMER,
      links: r,
      attributes: {
        ...a,
        [o.MESSAGING_SYSTEM]: s.MESSAGING_SYSTEM_VALUE_KAFKA,
        [o.MESSAGING_DESTINATION_NAME]: e,
        [o.MESSAGING_OPERATION_TYPE]: n,
        [o.MESSAGING_OPERATION_NAME]: c,
        [s.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: t?.key ? String(t.key) : void 0,
        [s.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]:
          !(!t?.key || null !== t.value) || void 0,
        [s.ATTR_MESSAGING_KAFKA_OFFSET]: t?.offset,
        ...(t
          ? {
              [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                "auto.kafkajs.otel.consumer",
            }
          : {}),
      },
    });
  }),
  (t.startProducerSpan = function (e, t) {
    const n = i.startInactiveSpan({
      name: `send ${e}`,
      kind: i.SPAN_KIND.PRODUCER,
      attributes: {
        [o.MESSAGING_SYSTEM]: s.MESSAGING_SYSTEM_VALUE_KAFKA,
        [o.MESSAGING_DESTINATION_NAME]: e,
        [s.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: t.key ? String(t.key) : void 0,
        [s.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]:
          !(!t.key || null !== t.value) || void 0,
        [s.ATTR_MESSAGING_DESTINATION_PARTITION_ID]:
          void 0 !== t.partition ? String(t.partition) : void 0,
        [o.MESSAGING_OPERATION_NAME]: "send",
        [o.MESSAGING_OPERATION_TYPE]: s.MESSAGING_OPERATION_TYPE_VALUE_SEND,
        [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.kafkajs.otel.producer",
      },
    });
    t.headers = t.headers ?? {};
    const r = i.getTraceData({ span: n });
    return (
      r["sentry-trace"] && (t.headers["sentry-trace"] = r["sentry-trace"]),
      r.baggage && (t.headers.baggage = r.baggage),
      n
    );
  });

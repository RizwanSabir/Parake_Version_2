// vendor/other/module-18481.js — webpack module 18481
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(59625 /* vendor/other/module-59625 */);
function s(e, t) {
  const n = e?.[t];
  if (null != n) return Array.isArray(n) ? n[0]?.toString() : n.toString();
}
function a(e, t) {
  let n,
    s = i.ERROR_TYPE_VALUE_OTHER;
  "string" == typeof t || void 0 === t
    ? (n = t)
    : "object" == typeof t &&
      null !== t &&
      Object.prototype.hasOwnProperty.call(t, "message") &&
      ((n = t.message), (s = t.constructor.name)),
    e.forEach((e) => {
      e.setAttribute(r.ERROR_TYPE, s),
        e.setStatus({ code: o.SPAN_STATUS_ERROR, message: n });
    });
}
(t.applyErrorToSpans = a),
  (t.endSpansOnPromise = function (e, t) {
    return Promise.resolve(t)
      .catch((t) => {
        throw (a(e, t), t);
      })
      .finally(() => {
        e.forEach((e) => e.end());
      });
  }),
  (t.getHeaderAsString = s),
  (t.getLinksFromHeaders = function (e) {
    const t = s(e, "sentry-trace");
    if (!t) return;
    const {
      traceId: n,
      parentSpanId: r,
      sampled: i,
    } = o.propagationContextFromHeaders(t, s(e, "baggage"));
    return r
      ? [
          {
            context: {
              traceId: n,
              spanId: r,
              isRemote: !0,
              traceFlags: i ? 1 : 0,
            },
          },
        ]
      : void 0;
  }),
  (t.startConsumerSpan = function ({
    topic: e,
    message: t,
    operationType: n,
    links: s,
    attributes: a,
  }) {
    const c = n === i.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE ? "poll" : n;
    return o.startInactiveSpan({
      name: `${c} ${e}`,
      op: "message",
      kind:
        n === i.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE
          ? o.SPAN_KIND.CLIENT
          : o.SPAN_KIND.CONSUMER,
      links: s,
      attributes: {
        ...a,
        [r.MESSAGING_SYSTEM]: i.MESSAGING_SYSTEM_VALUE_KAFKA,
        [r.MESSAGING_DESTINATION_NAME]: e,
        [r.MESSAGING_OPERATION_TYPE]: n,
        [r.MESSAGING_OPERATION_NAME]: c,
        [i.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: t?.key ? String(t.key) : void 0,
        [i.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]:
          !(!t?.key || null !== t.value) || void 0,
        [i.ATTR_MESSAGING_KAFKA_OFFSET]: t?.offset,
        ...(t
          ? {
              [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                "auto.kafkajs.orchestrion.consumer",
            }
          : {}),
      },
    });
  }),
  (t.startProducerSpan = function (e, t) {
    const n = o.startInactiveSpan({
      name: `send ${e}`,
      op: "message",
      kind: o.SPAN_KIND.PRODUCER,
      attributes: {
        [r.MESSAGING_SYSTEM]: i.MESSAGING_SYSTEM_VALUE_KAFKA,
        [r.MESSAGING_DESTINATION_NAME]: e,
        [i.ATTR_MESSAGING_KAFKA_MESSAGE_KEY]: t.key ? String(t.key) : void 0,
        [i.ATTR_MESSAGING_KAFKA_MESSAGE_TOMBSTONE]:
          !(!t.key || null !== t.value) || void 0,
        [i.ATTR_MESSAGING_DESTINATION_PARTITION_ID]:
          void 0 !== t.partition ? String(t.partition) : void 0,
        [r.MESSAGING_OPERATION_NAME]: "send",
        [r.MESSAGING_OPERATION_TYPE]: i.MESSAGING_OPERATION_TYPE_VALUE_SEND,
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
          "auto.kafkajs.orchestrion.producer",
      },
    });
    t.headers = t.headers ?? {};
    const s = o.getTraceData({ span: n });
    return (
      s["sentry-trace"] && (t.headers["sentry-trace"] = s["sentry-trace"]),
      s.baggage && (t.headers.baggage = s.baggage),
      n
    );
  });

// vendor/other/module-5002.js — webpack module 5002
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(59625 /* vendor/other/module-59625 */),
  s = n(18481 /* vendor/other/module-18481 */),
  a = Symbol("sentry-kafkajs-consumer-callback-wrapped");
(t.isWrappedConsumerCallback = function (e) {
  return "function" == typeof e && !0 === e[a];
}),
  (t.wrapEachBatch = function (e) {
    const t = function (t) {
      const n = o.startNewTrace(() =>
        s.startConsumerSpan({
          topic: t.batch.topic,
          message: void 0,
          operationType: i.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE,
          attributes: {
            [r.MESSAGING_BATCH_MESSAGE_COUNT]: t.batch.messages.length,
            [i.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(
              t.batch.partition,
            ),
          },
        }),
      );
      return o.withActiveSpan(n, () => {
        const r = [n];
        t.batch.messages.forEach((e) => {
          r.push(
            s.startConsumerSpan({
              topic: t.batch.topic,
              message: e,
              operationType: i.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
              links: s.getLinksFromHeaders(e.headers),
              attributes: {
                [i.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(
                  t.batch.partition,
                ),
              },
            }),
          );
        });
        const o = e.call(this, t);
        return s.endSpansOnPromise(r, o);
      });
    };
    return (t[a] = !0), t;
  }),
  (t.wrapEachMessage = function (e) {
    const t = function (t) {
      const n = s.getHeaderAsString(t.message.headers, "sentry-trace"),
        r = s.getHeaderAsString(t.message.headers, "baggage");
      return o.continueTrace({ sentryTrace: n, baggage: r }, () => {
        const n = s.startConsumerSpan({
            topic: t.topic,
            message: t.message,
            operationType: i.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
            attributes: {
              [i.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(t.partition),
            },
          }),
          r = o.withActiveSpan(n, () => e.call(this, t));
        return s.endSpansOnPromise([n], r);
      });
    };
    return (t[a] = !0), t;
  });

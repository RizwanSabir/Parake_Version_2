// vendor/other/module-65120.js — webpack module 65120
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(37631 /* vendor/other/module-37631 */),
  a = n(32231 /* vendor/other/module-32231 */);
class c extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-kafkajs", i.SDK_VERSION, e);
  }
  init() {
    const e = (e) => {
      r.isWrapped(e?.Kafka?.prototype.producer) &&
        this._unwrap(e.Kafka.prototype, "producer"),
        r.isWrapped(e?.Kafka?.prototype.consumer) &&
          this._unwrap(e.Kafka.prototype, "consumer");
    };
    return new r.InstrumentationNodeModuleDefinition(
      "kafkajs",
      [">=0.3.0 <3"],
      (t) => (
        e(t),
        this._wrap(t?.Kafka?.prototype, "producer", this._getProducerPatch()),
        this._wrap(t?.Kafka?.prototype, "consumer", this._getConsumerPatch()),
        t
      ),
      e,
    );
  }
  _getConsumerPatch() {
    const e = this;
    return (t) =>
      function (...n) {
        const o = t.apply(this, n);
        return (
          r.isWrapped(o.run) && e._unwrap(o, "run"),
          e._wrap(o, "run", e._getConsumerRunPatch()),
          o
        );
      };
  }
  _getProducerPatch() {
    const e = this;
    return (t) =>
      function (...n) {
        const o = t.apply(this, n);
        return (
          r.isWrapped(o.sendBatch) && e._unwrap(o, "sendBatch"),
          e._wrap(o, "sendBatch", e._getSendBatchPatch()),
          r.isWrapped(o.send) && e._unwrap(o, "send"),
          e._wrap(o, "send", e._getSendPatch()),
          r.isWrapped(o.transaction) && e._unwrap(o, "transaction"),
          e._wrap(o, "transaction", e._getProducerTransactionPatch()),
          o
        );
      };
  }
  _getConsumerRunPatch() {
    const e = this;
    return (t) =>
      function (...n) {
        const o = n[0];
        return (
          o?.eachMessage &&
            (r.isWrapped(o.eachMessage) && e._unwrap(o, "eachMessage"),
            e._wrap(o, "eachMessage", e._getConsumerEachMessagePatch())),
          o?.eachBatch &&
            (r.isWrapped(o.eachBatch) && e._unwrap(o, "eachBatch"),
            e._wrap(o, "eachBatch", e._getConsumerEachBatchPatch())),
          t.call(this, o)
        );
      };
  }
  _getConsumerEachMessagePatch() {
    return (e) =>
      function (...t) {
        const n = t[0],
          r = a.getHeaderAsString(n.message.headers, "sentry-trace"),
          o = a.getHeaderAsString(n.message.headers, "baggage");
        return i.continueTrace({ sentryTrace: r, baggage: o }, () => {
          const r = a.startConsumerSpan({
              topic: n.topic,
              message: n.message,
              operationType: s.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
              attributes: {
                [s.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(
                  n.partition,
                ),
              },
            }),
            o = i.withActiveSpan(r, () => e.apply(this, t));
          return a.endSpansOnPromise([r], o);
        });
      };
  }
  _getConsumerEachBatchPatch() {
    return (e) =>
      function (...t) {
        const n = t[0],
          r = i.startNewTrace(() =>
            a.startConsumerSpan({
              topic: n.batch.topic,
              message: void 0,
              operationType: s.MESSAGING_OPERATION_TYPE_VALUE_RECEIVE,
              attributes: {
                [o.MESSAGING_BATCH_MESSAGE_COUNT]: n.batch.messages.length,
                [s.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(
                  n.batch.partition,
                ),
              },
            }),
          );
        return i.withActiveSpan(r, () => {
          const o = [r];
          n.batch.messages.forEach((e) => {
            o.push(
              a.startConsumerSpan({
                topic: n.batch.topic,
                message: e,
                operationType: s.MESSAGING_OPERATION_TYPE_VALUE_PROCESS,
                links: a.getLinksFromHeaders(e.headers),
                attributes: {
                  [s.ATTR_MESSAGING_DESTINATION_PARTITION_ID]: String(
                    n.batch.partition,
                  ),
                },
              }),
            );
          });
          const i = e.apply(this, t);
          return a.endSpansOnPromise(o, i);
        });
      };
  }
  _getProducerTransactionPatch() {
    const e = this;
    return (t) =>
      function (...n) {
        const r = i.startInactiveSpan({ name: "transaction" }),
          o = t.apply(this, n);
        return (
          o
            .then((t) => {
              const n = t.send;
              t.send = function (...t) {
                return i.withActiveSpan(r, () =>
                  e
                    ._getSendPatch()(n)
                    .apply(this, t)
                    .catch((e) => {
                      throw (
                        (r.setStatus({
                          code: i.SPAN_STATUS_ERROR,
                          message: e?.message,
                        }),
                        e)
                      );
                    }),
                );
              };
              const o = t.sendBatch;
              t.sendBatch = function (...t) {
                return i.withActiveSpan(r, () =>
                  e
                    ._getSendBatchPatch()(o)
                    .apply(this, t)
                    .catch((e) => {
                      throw (
                        (r.setStatus({
                          code: i.SPAN_STATUS_ERROR,
                          message: e?.message,
                        }),
                        e)
                      );
                    }),
                );
              };
              const s = t.commit;
              t.commit = function (...e) {
                const t = s.apply(this, e).then(() => {
                  r.setStatus({ code: i.SPAN_STATUS_OK });
                });
                return a.endSpansOnPromise([r], t);
              };
              const c = t.abort;
              t.abort = function (...e) {
                const t = c.apply(this, e);
                return a.endSpansOnPromise([r], t);
              };
            })
            .catch((e) => {
              r.setStatus({
                code: i.SPAN_STATUS_ERROR,
                message: e?.message,
              }),
                r.end();
            }),
          o
        );
      };
  }
  _getSendBatchPatch() {
    return (e) =>
      function (...t) {
        const n = t[0].topicMessages || [],
          r = [];
        n.forEach((e) => {
          e.messages.forEach((t) => {
            r.push(a.startProducerSpan(e.topic, t));
          });
        });
        const o = e.apply(this, t);
        return a.endSpansOnPromise(r, o);
      };
  }
  _getSendPatch() {
    return (e) =>
      function (...t) {
        const n = t[0],
          r = n.messages.map((e) => a.startProducerSpan(n.topic, e)),
          o = e.apply(this, t);
        return a.endSpansOnPromise(r, o);
      };
  }
}
t.KafkaJsInstrumentation = c;

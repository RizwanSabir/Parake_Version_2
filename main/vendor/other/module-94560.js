// vendor/other/module-94560.js — webpack module 94560
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(5002 /* vendor/other/module-5002 */),
  c = n(18481 /* vendor/other/module-18481 */),
  u = o.defineIntegration(() => ({
    name: "Kafka",
    setupOnce() {
      r.tracingChannel &&
        (i.DEBUG_BUILD &&
          o.debug.log(
            `[orchestrion:kafkajs] subscribing to channels "${s.CHANNELS.KAFKAJS_SEND_BATCH}", "${s.CHANNELS.KAFKAJS_CONSUMER_RUN}"`,
          ),
        (function () {
          const e = r.tracingChannel(s.CHANNELS.KAFKAJS_SEND_BATCH),
            t = {
              start(e) {
                const t = [];
                (e.arguments[0]?.topicMessages ?? []).forEach((e) => {
                  e.messages.forEach((n) => {
                    t.push(c.startProducerSpan(e.topic, n));
                  });
                }),
                  (e._sentrySpans = t);
              },
              error(e) {
                e._sentrySpans && c.applyErrorToSpans(e._sentrySpans, e.error);
              },
              asyncEnd(e) {
                e._sentrySpans?.forEach((e) => e.end());
              },
            };
          e.subscribe(t);
        })(),
        (function () {
          const e = r.tracingChannel(s.CHANNELS.KAFKAJS_CONSUMER_RUN),
            t = {
              start(e) {
                const t = e.arguments[0];
                t &&
                  "object" == typeof t &&
                  ("function" != typeof t.eachMessage ||
                    a.isWrappedConsumerCallback(t.eachMessage) ||
                    (t.eachMessage = a.wrapEachMessage(t.eachMessage)),
                  "function" != typeof t.eachBatch ||
                    a.isWrappedConsumerCallback(t.eachBatch) ||
                    (t.eachBatch = a.wrapEachBatch(t.eachBatch)));
              },
            };
          e.subscribe(t);
        })());
    },
  }));
t.kafkajsChannelIntegration = u;

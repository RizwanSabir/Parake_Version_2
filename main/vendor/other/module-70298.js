// vendor/other/module-70298.js — webpack module 70298
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "send_batch",
      module: {
        name: "kafkajs",
        versionRange: ">=2.0.0 <3",
        filePath: "src/producer/messageProducer.js",
      },
      functionQuery: { expressionName: "sendBatch", kind: "Async" },
    },
    {
      channelName: "consumer_run",
      module: {
        name: "kafkajs",
        versionRange: ">=2.0.0 <3",
        filePath: "src/consumer/index.js",
      },
      functionQuery: { expressionName: "run", kind: "Async" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.kafkajsChannels = {
  KAFKAJS_SEND_BATCH: "orchestrion:kafkajs:send_batch",
  KAFKAJS_CONSUMER_RUN: "orchestrion:kafkajs:consumer_run",
}),
  (t.kafkajsConfig = r),
  (t.kafkajsSubscribeInjection = o);

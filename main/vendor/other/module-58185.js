// vendor/other/module-58185.js — webpack module 58185
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = { name: "amqplib", versionRange: ">=0.5.5 <2" },
  i = [
    {
      channelName: "publish",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "publish",
        kind: "Sync",
      },
    },
    {
      channelName: "confirmPublish",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "ConfirmChannel",
        methodName: "publish",
        kind: "Callback",
      },
    },
    {
      channelName: "consume",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "consume",
        kind: "Async",
      },
    },
    {
      channelName: "dispatch",
      module: { ...o, filePath: "lib/channel.js" },
      functionQuery: {
        className: "BaseChannel",
        methodName: "dispatchMessage",
        kind: "Sync",
      },
    },
    {
      channelName: "ack",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "ack",
        kind: "Sync",
      },
    },
    {
      channelName: "nack",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "nack",
        kind: "Sync",
      },
    },
    {
      channelName: "reject",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "reject",
        kind: "Sync",
      },
    },
    {
      channelName: "ackAll",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "ackAll",
        kind: "Sync",
      },
    },
    {
      channelName: "nackAll",
      module: { ...o, filePath: "lib/channel_model.js" },
      functionQuery: {
        className: "Channel",
        methodName: "nackAll",
        kind: "Sync",
      },
    },
    {
      channelName: "connect",
      module: { ...o, filePath: "lib/connect.js" },
      functionQuery: { functionName: "connect", kind: "Callback" },
    },
  ],
  s = r.toSubscribeInjections(i);
(t.amqplibChannels = {
  AMQPLIB_PUBLISH: "orchestrion:amqplib:publish",
  AMQPLIB_CONFIRM_PUBLISH: "orchestrion:amqplib:confirmPublish",
  AMQPLIB_CONSUME: "orchestrion:amqplib:consume",
  AMQPLIB_DISPATCH: "orchestrion:amqplib:dispatch",
  AMQPLIB_ACK: "orchestrion:amqplib:ack",
  AMQPLIB_NACK: "orchestrion:amqplib:nack",
  AMQPLIB_REJECT: "orchestrion:amqplib:reject",
  AMQPLIB_ACK_ALL: "orchestrion:amqplib:ackAll",
  AMQPLIB_NACK_ALL: "orchestrion:amqplib:nackAll",
  AMQPLIB_CONNECT: "orchestrion:amqplib:connect",
}),
  (t.amqplibConfig = i),
  (t.amqplibSubscribeInjection = s);

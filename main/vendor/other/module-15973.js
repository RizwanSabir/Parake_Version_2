// vendor/other/module-15973.js — webpack module 15973
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "acquire",
      module: {
        name: "generic-pool",
        versionRange: ">=3.0.0 <4",
        filePath: "lib/Pool.js",
      },
      functionQuery: {
        className: "Pool",
        methodName: "acquire",
        kind: "Auto",
      },
    },
    {
      channelName: "acquire",
      module: {
        name: "generic-pool",
        versionRange: ">=2.4.0 <3",
        filePath: "lib/generic-pool.js",
      },
      functionQuery: { expressionName: "acquire", kind: "Callback" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.genericPoolChannels = {
  GENERIC_POOL_ACQUIRE: "orchestrion:generic-pool:acquire",
}),
  (t.genericPoolConfig = r),
  (t.genericPoolSubscribeInjection = o);

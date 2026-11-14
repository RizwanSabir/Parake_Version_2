// vendor/other/module-22952.js — webpack module 22952
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = [
    ...["lib/redis.js", "built/redis.js", "built/redis/index.js"].flatMap(
      (e) => [
        {
          channelName: "command",
          module: {
            name: "ioredis",
            versionRange: ">=2.0.0 <5.0.0",
            filePath: e,
          },
          functionQuery: {
            expressionName: "sendCommand",
            kind: "Async",
          },
        },
        {
          channelName: "connect",
          module: {
            name: "ioredis",
            versionRange: ">=2.0.0 <5.0.0",
            filePath: e,
          },
          functionQuery: { expressionName: "connect", kind: "Async" },
        },
      ],
    ),
    {
      channelName: "command",
      module: {
        name: "ioredis",
        versionRange: ">=5.0.0 <5.11.0",
        filePath: "built/Redis.js",
      },
      functionQuery: {
        className: "Redis",
        methodName: "sendCommand",
        kind: "Async",
      },
    },
    {
      channelName: "connect",
      module: {
        name: "ioredis",
        versionRange: ">=5.0.0 <5.11.0",
        filePath: "built/Redis.js",
      },
      functionQuery: {
        className: "Redis",
        methodName: "connect",
        kind: "Async",
      },
    },
  ],
  i = r.toSubscribeInjections(o);
(t.ioredisChannels = {
  IOREDIS_COMMAND: "orchestrion:ioredis:command",
  IOREDIS_CONNECT: "orchestrion:ioredis:connect",
}),
  (t.ioredisConfig = o),
  (t.ioredisSubscribeInjection = i);

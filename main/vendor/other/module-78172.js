// vendor/other/module-78172.js — webpack module 78172
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "command",
      module: {
        name: "redis",
        versionRange: ">=2.6.0 <4",
        filePath: "index.js",
      },
      functionQuery: {
        expressionName: "internal_send_command",
        kind: "Sync",
      },
    },
    {
      channelName: "executor",
      module: {
        name: "@redis/client",
        versionRange: "^1.0.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "commandsExecutor",
        kind: "Async",
      },
    },
    {
      channelName: "command",
      module: {
        name: "@redis/client",
        versionRange: "^1.0.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "sendCommand",
        kind: "Async",
      },
    },
    {
      channelName: "connect",
      module: {
        name: "@redis/client",
        versionRange: "^1.0.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "connect",
        kind: "Async",
      },
    },
    {
      channelName: "command",
      module: {
        name: "@redis/client",
        versionRange: ">=5.0.0 <5.12.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "sendCommand",
        kind: "Async",
      },
    },
    {
      channelName: "connect",
      module: {
        name: "@redis/client",
        versionRange: ">=5.0.0 <5.12.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "connect",
        kind: "Async",
      },
    },
    {
      channelName: "multi",
      module: {
        name: "@redis/client",
        versionRange: ">=5.0.0 <5.12.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "_executeMulti",
        kind: "Async",
      },
    },
    {
      channelName: "pipeline",
      module: {
        name: "@redis/client",
        versionRange: ">=5.0.0 <5.12.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "_executePipeline",
        kind: "Async",
      },
    },
    {
      channelName: "batch",
      module: {
        name: "@redis/client",
        versionRange: "^1.0.0",
        filePath: "dist/lib/client/index.js",
      },
      functionQuery: {
        className: "RedisClient",
        methodName: "multiExecutor",
        kind: "Async",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.redisChannels = {
  REDIS_COMMAND: "orchestrion:redis:command",
  NODE_REDIS_COMMAND: "orchestrion:@redis/client:command",
  NODE_REDIS_EXECUTOR: "orchestrion:@redis/client:executor",
  NODE_REDIS_CONNECT: "orchestrion:@redis/client:connect",
  NODE_REDIS_MULTI: "orchestrion:@redis/client:multi",
  NODE_REDIS_PIPELINE: "orchestrion:@redis/client:pipeline",
  NODE_REDIS_BATCH: "orchestrion:@redis/client:batch",
}),
  (t.redisConfig = r),
  (t.redisSubscribeInjection = o);

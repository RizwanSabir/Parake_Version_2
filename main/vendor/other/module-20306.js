// vendor/other/module-20306.js — webpack module 20306
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "query",
      module: {
        name: "pg",
        versionRange: ">=8.0.3 <9",
        filePath: "lib/client.js",
      },
      functionQuery: {
        className: "Client",
        methodName: "query",
        kind: "Auto",
      },
    },
    {
      channelName: "connect",
      module: {
        name: "pg",
        versionRange: ">=8.0.3 <9",
        filePath: "lib/client.js",
      },
      functionQuery: {
        className: "Client",
        methodName: "connect",
        kind: "Auto",
      },
    },
    {
      channelName: "query",
      module: {
        name: "pg",
        versionRange: ">=8.0.3 <9",
        filePath: "lib/native/client.js",
      },
      functionQuery: { expressionName: "query", kind: "Auto" },
    },
    {
      channelName: "connect",
      module: {
        name: "pg",
        versionRange: ">=8.0.3 <9",
        filePath: "lib/native/client.js",
      },
      functionQuery: { expressionName: "connect", kind: "Auto" },
    },
    {
      channelName: "connect",
      module: {
        name: "pg-pool",
        versionRange: ">=2.0.0 <4",
        filePath: "index.js",
      },
      functionQuery: {
        className: "Pool",
        methodName: "connect",
        kind: "Auto",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.pgChannels = {
  PG_QUERY: "orchestrion:pg:query",
  PG_CONNECT: "orchestrion:pg:connect",
  PGPOOL_CONNECT: "orchestrion:pg-pool:connect",
}),
  (t.pgConfig = r),
  (t.pgSubscribeInjection = o);

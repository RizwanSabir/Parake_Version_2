// vendor/other/module-95337.js — webpack module 95337
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = { name: "mongodb" },
  i = [
    {
      channelName: "command",
      module: {
        ...o,
        versionRange: ">=6.4.0 <8",
        filePath: "lib/cmap/connection.js",
      },
      functionQuery: { methodName: "command", kind: "Async" },
    },
    {
      channelName: "command",
      module: {
        ...o,
        versionRange: ">=4.0.0 <6.4",
        filePath: "lib/cmap/connection.js",
      },
      functionQuery: { methodName: "command", kind: "Callback" },
    },
    {
      channelName: "checkout",
      module: {
        ...o,
        versionRange: ">=4.0.0 <6.4",
        filePath: "lib/cmap/connection_pool.js",
      },
      functionQuery: { methodName: "checkOut", kind: "Callback" },
    },
    ...["insert", "update", "remove"].map((e) => ({
      channelName: `v3_${e}`,
      module: {
        ...o,
        versionRange: ">=3.3.0 <4",
        filePath: "lib/core/wireprotocol/index.js",
      },
      functionQuery: { expressionName: e, kind: "Callback" },
    })),
    {
      channelName: "v3_command",
      module: {
        ...o,
        versionRange: ">=3.3.0 <4",
        filePath: "lib/core/wireprotocol/command.js",
      },
      functionQuery: { functionName: "command", kind: "Callback" },
    },
    {
      channelName: "v3_query",
      module: {
        ...o,
        versionRange: ">=3.3.0 <4",
        filePath: "lib/core/wireprotocol/query.js",
      },
      functionQuery: { functionName: "query", kind: "Callback" },
    },
    {
      channelName: "v3_get_more",
      module: {
        ...o,
        versionRange: ">=3.3.0 <4",
        filePath: "lib/core/wireprotocol/get_more.js",
      },
      functionQuery: { functionName: "getMore", kind: "Callback" },
    },
  ],
  s = r.toSubscribeInjections(i);
(t.mongodbChannels = {
  MONGODB_COMMAND: "orchestrion:mongodb:command",
  MONGODB_CHECKOUT: "orchestrion:mongodb:checkout",
  MONGODB_V3_INSERT: "orchestrion:mongodb:v3_insert",
  MONGODB_V3_UPDATE: "orchestrion:mongodb:v3_update",
  MONGODB_V3_REMOVE: "orchestrion:mongodb:v3_remove",
  MONGODB_V3_COMMAND: "orchestrion:mongodb:v3_command",
  MONGODB_V3_QUERY: "orchestrion:mongodb:v3_query",
  MONGODB_V3_GET_MORE: "orchestrion:mongodb:v3_get_more",
}),
  (t.mongodbConfig = i),
  (t.mongodbSubscribeInjection = s);

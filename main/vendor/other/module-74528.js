// vendor/other/module-74528.js — webpack module 74528
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = ["src", "cjs/src"].flatMap((e) => [
    {
      channelName: "handle",
      module: {
        name: "postgres",
        versionRange: ">=3.0.0 <4",
        filePath: `${e}/query.js`,
      },
      functionQuery: {
        className: "Query",
        methodName: "handle",
        kind: "Async",
      },
    },
    {
      channelName: "connection",
      module: {
        name: "postgres",
        versionRange: ">=3.0.0 <4",
        filePath: `${e}/connection.js`,
      },
      functionQuery: { functionName: "Connection", kind: "Sync" },
    },
    {
      channelName: "execute",
      module: {
        name: "postgres",
        versionRange: ">=3.0.0 <4",
        filePath: `${e}/connection.js`,
      },
      functionQuery: { functionName: "execute", kind: "Sync" },
    },
    {
      channelName: "connect",
      module: {
        name: "postgres",
        versionRange: ">=3.0.0 <4",
        filePath: `${e}/connection.js`,
      },
      functionQuery: { methodName: "connect", kind: "Sync" },
    },
  ]),
  i = r.toSubscribeInjections(o);
(t.postgresJsChannels = {
  POSTGRESJS_HANDLE: "orchestrion:postgres:handle",
  POSTGRESJS_CONNECTION: "orchestrion:postgres:connection",
  POSTGRESJS_EXECUTE: "orchestrion:postgres:execute",
  POSTGRESJS_CONNECT: "orchestrion:postgres:connect",
}),
  (t.postgresJsConfig = o),
  (t.postgresJsSubscribeInjection = i);

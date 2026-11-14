// vendor/other/module-22223.js — webpack module 22223
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "query",
      module: {
        name: "mysql2",
        versionRange: ">=1.4.2 <3.11.5",
        filePath: "lib/connection.js",
      },
      functionQuery: {
        className: "Connection",
        methodName: "query",
        kind: "Callback",
      },
    },
    {
      channelName: "execute",
      module: {
        name: "mysql2",
        versionRange: ">=1.4.2 <3.11.5",
        filePath: "lib/connection.js",
      },
      functionQuery: {
        className: "Connection",
        methodName: "execute",
        kind: "Callback",
      },
    },
    {
      channelName: "query",
      module: {
        name: "mysql2",
        versionRange: ">=3.11.5 <3.20.0",
        filePath: "lib/base/connection.js",
      },
      functionQuery: {
        className: "BaseConnection",
        methodName: "query",
        kind: "Callback",
      },
    },
    {
      channelName: "execute",
      module: {
        name: "mysql2",
        versionRange: ">=3.11.5 <3.20.0",
        filePath: "lib/base/connection.js",
      },
      functionQuery: {
        className: "BaseConnection",
        methodName: "execute",
        kind: "Callback",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.mysql2Channels = {
  MYSQL2_QUERY: "orchestrion:mysql2:query",
  MYSQL2_EXECUTE: "orchestrion:mysql2:execute",
}),
  (t.mysql2Config = r),
  (t.mysql2SubscribeInjection = o);

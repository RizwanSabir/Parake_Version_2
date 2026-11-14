// vendor/other/module-15837.js — webpack module 15837
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "query",
      module: {
        name: "mysql",
        versionRange: ">=2.0.0 <3",
        filePath: "lib/Connection.js",
      },
      functionQuery: { expressionName: "query", kind: "Auto" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.mysqlChannels = { MYSQL_QUERY: "orchestrion:mysql:query" }),
  (t.mysqlConfig = r),
  (t.mysqlSubscribeInjection = o);

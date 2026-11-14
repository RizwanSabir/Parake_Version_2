// vendor/other/module-23275.js — webpack module 23275
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = "knex",
  i = ["queryBuilder", "schemaBuilder", "raw"],
  s = [
    ...[
      {
        filePath: "lib/execution/runner.js",
        versionRange: ">=0.22.0 <4",
      },
      { filePath: "lib/runner.js", versionRange: ">=0.10.0 <0.22.0" },
      { filePath: "src/runner.js", versionRange: ">=0.18.0 <0.19.0" },
    ].map(({ filePath: e, versionRange: t }) =>
      (function (e, t) {
        return {
          channelName: "query",
          module: { name: o, versionRange: t, filePath: e },
          functionQuery: {
            className: "Runner",
            methodName: "query",
            kind: "Async",
          },
        };
      })(e, t),
    ),
    ...[
      { filePath: "lib/client.js", versionRange: ">=0.10.0 <4" },
      { filePath: "src/client.js", versionRange: ">=0.18.0 <0.19.0" },
    ].flatMap(({ filePath: e, versionRange: t }) =>
      i.map((n) =>
        (function (e, t, n) {
          return {
            channelName: e,
            module: { name: o, versionRange: n, filePath: t },
            functionQuery: {
              className: "Client",
              methodName: e,
              kind: "Sync",
            },
          };
        })(n, e, t),
      ),
    ),
  ],
  a = r.toSubscribeInjections(s);
(t.knexChannels = {
  KNEX_QUERY: "orchestrion:knex:query",
  KNEX_QUERY_BUILDER: "orchestrion:knex:queryBuilder",
  KNEX_SCHEMA_BUILDER: "orchestrion:knex:schemaBuilder",
  KNEX_RAW: "orchestrion:knex:raw",
}),
  (t.knexConfig = s),
  (t.knexSubscribeInjection = a);

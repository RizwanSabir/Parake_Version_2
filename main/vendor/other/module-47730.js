// vendor/other/module-47730.js — webpack module 47730
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = [
    "connect",
    "execSql",
    "execSqlBatch",
    "callProcedure",
    "execBulkLoad",
    "prepare",
    "execute",
  ].map((e) => ({
    channelName: e,
    module: {
      name: "tedious",
      versionRange: ">=1.11.0 <20",
      filePath: "lib/connection.js",
    },
    functionQuery: {
      className: "Connection",
      methodName: e,
      kind: "Sync",
    },
  })),
  i = r.toSubscribeInjections(o);
(t.tediousChannels = {
  TEDIOUS_CONNECT: "orchestrion:tedious:connect",
  TEDIOUS_EXEC_SQL: "orchestrion:tedious:execSql",
  TEDIOUS_EXEC_SQL_BATCH: "orchestrion:tedious:execSqlBatch",
  TEDIOUS_CALL_PROCEDURE: "orchestrion:tedious:callProcedure",
  TEDIOUS_EXEC_BULK_LOAD: "orchestrion:tedious:execBulkLoad",
  TEDIOUS_PREPARE: "orchestrion:tedious:prepare",
  TEDIOUS_EXECUTE: "orchestrion:tedious:execute",
}),
  (t.tediousConfig = o),
  (t.tediousSubscribeInjection = i);

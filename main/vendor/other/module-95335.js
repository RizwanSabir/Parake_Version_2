// vendor/other/module-95335.js — webpack module 95335
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(78474 /* external/node_events */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(88516 /* vendor/other/module-88516 */),
  a = n(15343 /* vendor/other/module-15343 */),
  c = n(85834 /* vendor/other/module-85834 */),
  u = "db.sql.table",
  l = Symbol("sentry.orchestrion.tedious.current-database");
function d(e) {
  Object.defineProperty(this, l, {
    value: e,
    writable: !0,
    configurable: !0,
  });
}
function p() {
  this.removeListener("databaseChange", d);
}
function f(e, t) {
  o.tracingChannel(e).start.subscribe((e) => {
    const n = e,
      o = n.self,
      a = n.arguments[0];
    if (!(o && a instanceof r.EventEmitter)) return;
    let c = 0,
      d = 0;
    const p = () => {
        d++;
      },
      f = () => {
        c++;
      },
      g = o[l],
      m = (function (e) {
        if (
          "sp_prepare" === e.sqlTextOrProcedure &&
          null != e.parametersByName?.stmt?.value
        ) {
          const t = e.parametersByName.stmt.value;
          return "string" == typeof t ? t : void 0;
        }
        return e.sqlTextOrProcedure;
      })(a),
      _ = {
        [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.tedious",
        [s.DB_SYSTEM]: "mssql",
        [s.DB_NAME]: g,
        [s.DB_USER]:
          o.config?.userName ?? o.config?.authentication?.options?.userName,
        [s.DB_STATEMENT]: m,
        [u]: a.table,
        [s.NET_PEER_NAME]: o.config?.server,
        [s.NET_PEER_PORT]: o.config?.options?.port,
      },
      S = i.startInactiveSpan({
        name: h(t, g, m, a.table),
        kind: i.SPAN_KIND.CLIENT,
        op: "db",
        attributes: _,
      }),
      E = (function () {
        let e = !1;
        return (...t) => {
          e ||
            ((e = !0),
            ((e) => {
              a.removeListener("done", p),
                a.removeListener("doneInProc", p),
                a.removeListener("doneProc", f),
                a.removeListener("error", E),
                o.removeListener("end", E),
                S.setAttribute("tedious.procedure_count", c),
                S.setAttribute("tedious.statement_count", d),
                e &&
                  S.setStatus({
                    code: i.SPAN_STATUS_ERROR,
                    message: e.message,
                  }),
                S.end();
            })(...t));
        };
      })();
    if (
      (a.on("done", p),
      a.on("doneInProc", p),
      a.on("doneProc", f),
      a.once("error", E),
      o.on("end", E),
      "function" == typeof a.callback)
    ) {
      const e = a.callback;
      a.callback = function (...t) {
        return E(t[0]), e.apply(this, t);
      };
    }
  });
}
function h(e, t, n, r) {
  return "execBulkLoad" === e && r && t
    ? `${e} ${r} ${t}`
    : "callProcedure" === e
      ? t
        ? `${e} ${n} ${t}`
        : `${e} ${n}`
      : t
        ? `${e} ${t}`
        : e;
}
const g = i.defineIntegration(() => ({
  name: "Tedious",
  setupOnce() {
    o.tracingChannel &&
      (a.DEBUG_BUILD &&
        i.debug.log(
          `[orchestrion:tedious] subscribing to channel "${c.CHANNELS.TEDIOUS_EXEC_SQL}"`,
        ),
      i.waitForTracingChannelBinding(() => {
        o.tracingChannel(c.CHANNELS.TEDIOUS_CONNECT).start.subscribe((e) => {
          const t = e.self;
          t &&
            (d.call(t, t.config?.options?.database),
            t.removeListener("databaseChange", d),
            t.on("databaseChange", d),
            t.removeListener("end", p),
            t.once("end", p));
        }),
          f(c.CHANNELS.TEDIOUS_EXEC_SQL, "execSql"),
          f(c.CHANNELS.TEDIOUS_EXEC_SQL_BATCH, "execSqlBatch"),
          f(c.CHANNELS.TEDIOUS_CALL_PROCEDURE, "callProcedure"),
          f(c.CHANNELS.TEDIOUS_EXEC_BULK_LOAD, "execBulkLoad"),
          f(c.CHANNELS.TEDIOUS_PREPARE, "prepare"),
          f(c.CHANNELS.TEDIOUS_EXECUTE, "execute");
      }));
  },
}));
t.tediousChannelIntegration = g;

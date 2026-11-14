// vendor/other/module-67796.js — webpack module 67796
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "db.system",
  u = "db.connection_string",
  l = "db.name",
  d = "db.user",
  p = "db.statement",
  f = "net.peer.name",
  h = "net.peer.port";
function g(e, t, n) {
  let r = `jdbc:mysql://${e || "localhost"}`;
  return "number" == typeof t && (r += `:${t}`), n && (r += `/${n}`), r;
}
const m = o.defineIntegration(() => ({
  name: "Mysql",
  setupOnce() {
    r.tracingChannel &&
      (i.DEBUG_BUILD &&
        o.debug.log(
          `[orchestrion:mysql] subscribing to channel "${s.CHANNELS.MYSQL_QUERY}"`,
        ),
      o.waitForTracingChannelBinding(() => {
        a.bindTracingChannelToSpan(
          r.tracingChannel(s.CHANNELS.MYSQL_QUERY),
          (e) => {
            const t = (function (e) {
                if ("string" == typeof e) return e;
                if (o.isObjectLike(e) && "sql" in e) {
                  const t = e.sql;
                  return "string" == typeof t ? t : void 0;
                }
              })(e.arguments[0]),
              {
                host: n,
                port: r,
                database: i,
                user: s,
              } = (function (e) {
                const t = e?.config?.connectionConfig ?? e?.config ?? {};
                return {
                  host: t.host,
                  port: t.port,
                  database: t.database,
                  user: t.user,
                };
              })(e.self),
              a = "string" == typeof r ? parseInt(r, 10) : r,
              m = "number" == typeof a && !isNaN(a);
            return (
              (e._sentryCallerScope = o.getCurrentScope()),
              o.startInactiveSpan({
                name: t ?? "mysql.query",
                kind: o.SPAN_KIND.CLIENT,
                op: "db",
                attributes: {
                  [c]: "mysql",
                  [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.db.orchestrion.mysql",
                  [u]: g(n, m ? a : void 0, i),
                  ...(i ? { [l]: i } : {}),
                  ...(s ? { [d]: s } : {}),
                  ...(t ? { [p]: t } : {}),
                  ...(n ? { [f]: n } : {}),
                  ...(m ? { [h]: a } : {}),
                },
              })
            );
          },
          {
            deferSpanEnd({ data: e, end: t }) {
              const n = e.result;
              if (
                !n ||
                "object" != typeof n ||
                !("on" in (r = n)) ||
                "function" != typeof r.on
              )
                return !1;
              var r;
              const i = e._sentryCallerScope;
              return (
                i && o.bindScopeToEmitter(n, i),
                n.on("error", (e) => t(e)),
                n.on("end", () => t()),
                !0
              );
            },
          },
        );
      }));
  },
}));
t.mysqlChannelIntegration = m;

// vendor/other/module-70196.js — webpack module 70196
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(72739 /* vendor/other/module-72739 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = n(88516 /* vendor/other/module-88516 */);
function u(e) {
  a.bindTracingChannelToSpan(
    r.tracingChannel(e),
    (e) => {
      const t = (function (e) {
        if ("string" == typeof e) return e;
        if (o.isObjectLike(e) && "sql" in e) {
          const t = e.sql;
          return "string" == typeof t ? t : void 0;
        }
      })(e.arguments[0]);
      return o.startInactiveSpan({
        name: t ?? "mysql2.query",
        kind: o.SPAN_KIND.CLIENT,
        attributes: {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.mysql2",
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
          [c.DB_SYSTEM]: "mysql",
          ...l(e.self?.config),
          [c.DB_STATEMENT]: t || void 0,
        },
      });
    },
    { requiresParentSpan: !0 },
  );
}
function l(e) {
  const {
      host: t,
      port: n,
      database: r,
      user: o,
    } = e?.connectionConfig ?? e ?? {},
    i = "string" == typeof n ? parseInt(n, 10) : n,
    s = "number" == typeof i && !isNaN(i);
  return {
    [c.DB_NAME]: r || void 0,
    [c.DB_USER]: o || void 0,
    [c.NET_PEER_NAME]: t || void 0,
    [c.NET_PEER_PORT]: s ? i : void 0,
  };
}
const d = o.defineIntegration(() => ({
  name: "Mysql2",
  setupOnce() {
    r.tracingChannel &&
      o.waitForTracingChannelBinding(() => {
        i.subscribeMysql2DiagnosticChannels(r.tracingChannel),
          u(s.CHANNELS.MYSQL2_QUERY),
          u(s.CHANNELS.MYSQL2_EXECUTE);
      });
  },
}));
t.mysql2ChannelIntegration = d;

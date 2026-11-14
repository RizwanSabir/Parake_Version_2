// vendor/other/module-72739.js — webpack module 72739
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(12417 /* vendor/other/module-12417 */),
  s = "mysql2:query",
  a = "mysql2:execute",
  c = "mysql2:connect",
  u = "mysql2:pool:connect",
  l = "auto.db.mysql2.diagnostic_channel",
  d = "mysql",
  p = /^\s*(\w+)/;
function f(e, t) {
  i.bindTracingChannelToSpan(
    e(t),
    (e) => {
      const t = e.query ? o._INTERNAL_sanitizeSqlQuery(e.query) : void 0,
        n = t?.match(p)?.[1]?.toUpperCase();
      return o.startInactiveSpan({
        name: t || "mysql2.query",
        attributes: {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
          [r.DB_SYSTEM_NAME]: d,
          [r.DB_QUERY_TEXT]: t,
          [r.DB_OPERATION_NAME]: n,
          [r.DB_NAMESPACE]: e.database || void 0,
          [r.SERVER_ADDRESS]: e.serverAddress,
          [r.SERVER_PORT]: e.serverPort,
        },
      });
    },
    { requiresParentSpan: !0 },
  );
}
function h(e, t, n) {
  i.bindTracingChannelToSpan(
    e(t),
    (e) =>
      o.startInactiveSpan({
        name: n,
        attributes: {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
          [r.DB_SYSTEM_NAME]: d,
          [r.DB_NAMESPACE]: e.database || void 0,
          [r.SERVER_ADDRESS]: e.serverAddress,
          [r.SERVER_PORT]: e.serverPort,
        },
      }),
    { requiresParentSpan: !0 },
  );
}
(t.MYSQL2_DC_CHANNEL_CONNECT = c),
  (t.MYSQL2_DC_CHANNEL_EXECUTE = a),
  (t.MYSQL2_DC_CHANNEL_POOL_CONNECT = u),
  (t.MYSQL2_DC_CHANNEL_QUERY = s),
  (t.subscribeMysql2DiagnosticChannels = function (e) {
    f(e, s), f(e, a), h(e, c, "mysql2.connect"), h(e, u, "mysql2.pool.connect");
  });

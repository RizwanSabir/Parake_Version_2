// vendor/other/module-68627.js — webpack module 68627
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "db.system",
  u = "db.name",
  l = "db.connection_string",
  d = "db.user",
  p = "db.statement",
  f = "net.peer.name",
  h = "net.peer.port",
  g = "db.postgresql.plan",
  m = "db.postgresql.idle.timeout.millis",
  _ = "db.postgresql.max.client",
  S = "postgresql";
function E(e, t, { deferStreamedResult: n = !1 } = {}) {
  i.DEBUG_BUILD &&
    o.debug.log(`[orchestrion:pg] subscribing to channel "${e}"`),
    a.bindTracingChannelToSpan(
      r.tracingChannel(e),
      (e) => (
        (e._sentryCallerScope = o.getCurrentScope()),
        o.startInactiveSpan({ ...t(e), kind: o.SPAN_KIND.CLIENT })
      ),
      n
        ? {
            requiresParentSpan: !0,
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
          }
        : { requiresParentSpan: !0 },
    );
}
function y(e) {
  const t = e.self?.connectionParameters ?? {},
    n = (function (e) {
      const t = e[0];
      if ("string" == typeof t) return { text: t };
      if (o.isObjectLike(t) && "string" == typeof t.text) {
        const e = t;
        return { text: e.text, name: e.name };
      }
    })(e.arguments);
  return {
    name: n?.text ?? "pg.query",
    op: "db",
    attributes: {
      ...I(t),
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.postgres",
      [p]: n?.text || void 0,
      [g]: "string" == typeof n?.name ? n.name : void 0,
    },
  };
}
function T(e) {
  return {
    name: "pg.connect",
    op: "db",
    attributes: I(e.self?.connectionParameters ?? {}),
  };
}
function b(e) {
  return {
    name: "pg-pool.connect",
    op: "db",
    attributes: v(e.self?.options ?? {}),
  };
}
function I(e) {
  return {
    [c]: S,
    [l]: A(e),
    [u]: e.database,
    [d]: e.user,
    [f]: e.host,
    [h]: Number.isInteger(e.port) ? e.port : void 0,
  };
}
function v(e) {
  let t;
  try {
    t = e.connectionString ? new URL(e.connectionString) : void 0;
  } catch {
    t = void 0;
  }
  const n = t?.pathname.slice(1) || e.database,
    r = t?.hostname || e.host,
    o = Number(t?.port) || (Number.isInteger(e.port) ? e.port : void 0),
    i = t?.username || e.user;
  return {
    [c]: S,
    [l]: A(e),
    [m]: e.idleTimeoutMillis,
    [_]: e.max,
    [u]: n,
    [h]: o,
    [f]: r || void 0,
    [d]: i || void 0,
  };
}
function A(e) {
  if (e.connectionString)
    try {
      const t = new URL(e.connectionString);
      return (t.username = ""), (t.password = ""), t.toString();
    } catch {
      return "postgresql://localhost:5432/";
    }
  return `postgresql://${e.host || "localhost"}:${e.port || 5432}/${e.database || ""}`;
}
const N = o.defineIntegration((e = {}) => ({
  name: "Postgres",
  setupOnce() {
    r.tracingChannel &&
      o.waitForTracingChannelBinding(() => {
        E(s.CHANNELS.PG_QUERY, y, { deferStreamedResult: !0 }),
          e.ignoreConnectSpans ||
            (E(s.CHANNELS.PG_CONNECT, T), E(s.CHANNELS.PGPOOL_CONNECT, b));
      });
  },
}));
t.postgresChannelIntegration = N;

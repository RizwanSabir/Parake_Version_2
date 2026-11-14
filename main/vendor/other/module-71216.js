// vendor/other/module-71216.js — webpack module 71216
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = "db.sql.table",
  l = Symbol("sentry.orchestrion.knex.parent-span");
function d(e) {
  r.tracingChannel(e).end.subscribe((e) => {
    const t = e.result;
    if (!t || "object" != typeof t || l in t) return;
    const n = o.getActiveSpan();
    n && Object.defineProperty(t, l, { value: n });
  });
}
function p(e, t, n) {
  return t && e ? (n ? `${t} ${e}.${n}` : `${t} ${e}`) : e;
}
function f(e) {
  const t = e?._single?.table;
  return t && "object" == typeof t ? f(t) : "string" == typeof t ? t : void 0;
}
function h(e) {
  if (e)
    try {
      return new URL(e).hostname || void 0;
    } catch {
      return;
    }
}
function g(e) {
  if (e)
    try {
      const t = new URL(e).port;
      return t ? parseInt(t, 10) : void 0;
    } catch {
      return;
    }
}
const m = o.defineIntegration(() => ({
  name: "Knex",
  setupOnce() {
    r.tracingChannel &&
      (s.DEBUG_BUILD &&
        o.debug.log(
          `[orchestrion:knex] subscribing to channel "${a.CHANNELS.KNEX_QUERY}"`,
        ),
      o.waitForTracingChannelBinding(() => {
        d(a.CHANNELS.KNEX_QUERY_BUILDER),
          d(a.CHANNELS.KNEX_SCHEMA_BUILDER),
          d(a.CHANNELS.KNEX_RAW),
          c.bindTracingChannelToSpan(
            r.tracingChannel(a.CHANNELS.KNEX_QUERY),
            (e) => {
              const t = e.self,
                n = t?.builder,
                r = n?.[l] ?? o.getActiveSpan();
              if (!r) return;
              const s = e.arguments[0],
                a = t?.client,
                c = a?.config?.connection,
                d = c?.connectionString,
                m = f(n),
                _ = s?.method,
                S =
                  c?.filename ||
                  c?.database ||
                  (function (e) {
                    if (e)
                      try {
                        const t = new URL(e).pathname?.replace(/^\//, "");
                        return t || void 0;
                      } catch {
                        return;
                      }
                  })(d),
                E = {
                  [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                    "auto.db.orchestrion.knex",
                  "knex.version": e.moduleVersion,
                  [i.DB_SYSTEM]:
                    ((y = a?.driverName),
                    "sqlite3" === y ? "sqlite" : "pg" === y ? "postgresql" : y),
                  [u]: m,
                  [i.DB_OPERATION]: _,
                  [i.DB_USER]: c?.user,
                  [i.DB_NAME]: S,
                  [i.NET_PEER_NAME]: c?.host ?? h(d),
                  [i.NET_PEER_PORT]: c?.port ?? g(d),
                  [i.NET_TRANSPORT]:
                    ":memory:" === c?.filename ? "inproc" : void 0,
                  [i.DB_STATEMENT]:
                    null != s?.sql ? o.truncate(s.sql, 1021) : void 0,
                };
              var y;
              return o.startInactiveSpan({
                name: p(S, _, m) ?? "knex.query",
                kind: o.SPAN_KIND.CLIENT,
                op: "db",
                parentSpan: r,
                attributes: E,
              });
            },
            {
              beforeSpanEnd(e, t) {
                if ("error" in t) {
                  const n = (function (e) {
                    const t = e.error;
                    if (
                      !t ||
                      "object" != typeof t ||
                      "string" != typeof t.message
                    )
                      return;
                    const n = t.message,
                      r = e.arguments[0];
                    if (!r?.sql) return n;
                    try {
                      const t = (function (e) {
                        if (e) {
                          const t = e.client;
                          if (t) {
                            if (t._formatQuery) return t._formatQuery.bind(t);
                            if (t.SqlString)
                              return t.SqlString.format.bind(t.SqlString);
                          }
                          if (e.builder?.toString)
                            return e.builder.toString.bind(e.builder);
                        }
                        return () => "<noop formatter>";
                      })(e.self)(r.sql, r.bindings || []);
                      return n.replace(`${t} - `, "");
                    } catch {
                      return n;
                    }
                  })(t);
                  void 0 !== n &&
                    e.setStatus({
                      code: o.SPAN_STATUS_ERROR,
                      message: n,
                    });
                }
              },
            },
          );
      }));
  },
}));
t.knexChannelIntegration = m;

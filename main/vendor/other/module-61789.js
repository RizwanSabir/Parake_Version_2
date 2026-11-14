// vendor/other/module-61789.js — webpack module 61789
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(86135 /* vendor/other/module-86135 */),
  u = n(12417 /* vendor/other/module-12417 */),
  l = "db.connection_string";
function d(e) {
  return { host: e?.options?.host, port: e?.options?.port };
}
function p(e, t) {
  return {
    [o.DB_SYSTEM]: "redis",
    [l]: `redis://${e}:${t}`,
    [o.NET_PEER_NAME]: e,
    [o.NET_PEER_PORT]: t,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.orchestrion.redis",
  };
}
const f = new WeakSet();
function h(e) {
  const t = e.arguments?.[0];
  if (!t || "object" != typeof t) return;
  if (f.has(t)) return;
  f.add(t);
  const { host: n, port: r } = d(e.self),
    s = c.defaultDbStatementSerializer(t.name, t.args ?? []);
  return i.startInactiveSpan({
    name: s,
    op: "db",
    attributes: { ...p(n, r), [o.DB_STATEMENT]: s },
  });
}
const g = i.defineIntegration((e = {}) => {
  const t = e.responseHook;
  return {
    name: "IORedis",
    setupOnce() {
      if (!r.tracingChannel) return;
      s.DEBUG_BUILD &&
        i.debug.log(
          `[orchestrion:ioredis] subscribing to "${a.CHANNELS.IOREDIS_COMMAND}"/"${a.CHANNELS.IOREDIS_CONNECT}"`,
        );
      const e = r.tracingChannel(a.CHANNELS.IOREDIS_COMMAND),
        n = r.tracingChannel(a.CHANNELS.IOREDIS_CONNECT);
      i.waitForTracingChannelBinding(() => {
        u.bindTracingChannelToSpan(e, h, {
          requiresParentSpan: !0,
          beforeSpanEnd(e, n) {
            if ("error" in n || !t) return;
            const r = n.arguments?.[0];
            r &&
              (function (e, t, n, r) {
                try {
                  e(t, n.name, n.args, r);
                } catch {}
              })(t, e, r, n.result);
          },
        }),
          u.bindTracingChannelToSpan(
            n,
            (e) => {
              const { host: t, port: n } = d(e.self);
              return i.startInactiveSpan({
                name: "connect",
                op: "db",
                attributes: {
                  ...p(t, n),
                  [o.DB_STATEMENT]: "connect",
                },
              });
            },
            { requiresParentSpan: !0 },
          );
      });
    },
  };
});
(t.ioredisChannelIntegration = g), (t.startIORedisCommandSpan = h);

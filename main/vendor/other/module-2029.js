// vendor/other/module-2029.js — webpack module 2029
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(12417 /* vendor/other/module-12417 */),
  s = "node-redis:command",
  a = "node-redis:batch",
  c = "node-redis:connect",
  u = "ioredis:command",
  l = "ioredis:connect",
  d = "auto.db.redis.diagnostic_channel",
  p = "redis";
function f(e, t, n, s) {
  i.bindTracingChannelToSpan(
    e(t),
    (e) => {
      const t = n(e),
        i = t.length ? `${e.command} ${t.join(" ")}` : e.command;
      return o.startInactiveSpan({
        name: `redis-${e.command}`,
        attributes: {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
          [r.DB_SYSTEM_NAME]: p,
          [r.DB_QUERY_TEXT]: i,
          ...(null != e.serverAddress
            ? { [r.SERVER_ADDRESS]: e.serverAddress }
            : {}),
          ...(null != e.serverPort ? { [r.SERVER_PORT]: e.serverPort } : {}),
        },
      });
    },
    {
      beforeSpanEnd(e, t) {
        "error" in t ||
          (function (e, t, n, r, o) {
            if (e)
              try {
                e(t, n, r, o);
              } catch {}
          })(s, e, t.command, n(t), t.result);
      },
    },
  );
}
function h(e, t, n) {
  i.bindTracingChannelToSpan(e(t), (e) =>
    o.startInactiveSpan({
      name: n(e),
      attributes: {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
        [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
        [r.DB_SYSTEM_NAME]: p,
        ...(Number(e.batchSize) > 1
          ? { [r.DB_OPERATION_BATCH_SIZE]: e.batchSize }
          : {}),
        ...(null != e.serverAddress
          ? { [r.SERVER_ADDRESS]: e.serverAddress }
          : {}),
        ...(null != e.serverPort ? { [r.SERVER_PORT]: e.serverPort } : {}),
      },
    }),
  );
}
function g(e, t) {
  i.bindTracingChannelToSpan(e(t), (e) =>
    o.startInactiveSpan({
      name: "redis-connect",
      attributes: {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
        [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis.connect",
        [r.DB_SYSTEM_NAME]: p,
        ...(null != e.serverAddress
          ? { [r.SERVER_ADDRESS]: e.serverAddress }
          : {}),
        ...(null != e.serverPort ? { [r.SERVER_PORT]: e.serverPort } : {}),
      },
    }),
  );
}
(t.IOREDIS_DC_CHANNEL_COMMAND = u),
  (t.IOREDIS_DC_CHANNEL_CONNECT = l),
  (t.REDIS_DC_CHANNEL_BATCH = a),
  (t.REDIS_DC_CHANNEL_COMMAND = s),
  (t.REDIS_DC_CHANNEL_CONNECT = c),
  (t.subscribeRedisDiagnosticChannels = function (e, t) {
    f(e, s, (e) => e.args.slice(1), t),
      h(e, a, (e) => ("PIPELINE" === e.batchMode ? "PIPELINE" : "MULTI")),
      g(e, c),
      f(e, u, (e) => e.args, t),
      g(e, l);
  });

// vendor/other/module-94301.js — webpack module 94301
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
  l = "auto.db.orchestrion.redis",
  d = "db.connection_string",
  p = "redis";
function f(e, t) {
  t &&
    e.setStatus({
      code: i.SPAN_STATUS_ERROR,
      message: t instanceof Error ? t.message : String(t),
    }),
    e.end();
}
function h(e, t, n, r, o) {
  if (e)
    try {
      e(t, n, r, o);
    } catch {}
}
function g(e) {
  if ("string" == typeof e && e)
    try {
      const t = new URL(e);
      return (
        t.searchParams.delete("user_pwd"),
        (t.username = ""),
        (t.password = ""),
        t.href
      );
    } catch {
      return;
    }
}
function m(e) {
  return {
    [o.DB_SYSTEM]: p,
    [o.NET_PEER_NAME]: e?.socket?.host,
    [o.NET_PEER_PORT]: e?.socket?.port,
    [d]: g(e?.url),
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l,
  };
}
function _(e, t, n) {
  return i.startInactiveSpan({
    name: `redis-${e}`,
    kind: i.SPAN_KIND.CLIENT,
    attributes: {
      ...n,
      [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
      [o.DB_STATEMENT]: c.defaultDbStatementSerializer(e, t),
    },
  });
}
function S(e, t, n) {
  const o = r.tracingChannel(e);
  u.bindTracingChannelToSpan(
    o,
    (e) => {
      const n = t(e);
      if (!n?.length) return;
      const r = String(n[0]),
        o = e.self?.options;
      return _(r, n.slice(1), m(o));
    },
    {
      beforeSpanEnd(e, r) {
        if ("error" in r || !n) return;
        const o = t(r);
        o?.length && h(n, e, String(o[0]), o.slice(1), r.result);
      },
    },
  );
}
function E(e) {
  const t = e.arguments?.[0];
  return Array.isArray(t) ? t : void 0;
}
function y(e) {
  const t = e.arguments?.[0],
    n = e.arguments?.[1];
  if ("function" == typeof t?.transformArguments && Array.isArray(n))
    try {
      return t.transformArguments(
        ...(function (e) {
          const t = e[0];
          return i.isObjectLike(t) && Object.getOwnPropertySymbols(t).length > 0
            ? e.slice(1)
            : e;
        })(n),
      );
    } catch {
      return;
    }
}
function T(e, t) {
  const n = r.tracingChannel(e);
  u.bindTracingChannelToSpan(n, (e) => {
    const n = e.arguments?.[0],
      r = Array.isArray(n) ? n.length : void 0,
      s = e.self?.options?.socket;
    return i.startInactiveSpan({
      name: t(e),
      kind: i.SPAN_KIND.CLIENT,
      attributes: {
        [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l,
        [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db.redis",
        [o.DB_SYSTEM_NAME]: p,
        ...(r && r > 1 ? { [o.DB_OPERATION_BATCH_SIZE]: r } : {}),
        ...(null != s?.host ? { [o.SERVER_ADDRESS]: s.host } : {}),
        ...(null != s?.port ? { [o.SERVER_PORT]: s.port } : {}),
      },
    });
  });
}
const b = i.defineIntegration((e = {}) => {
  const t = e.responseHook;
  return {
    name: "RedisChannel",
    setupOnce() {
      r.tracingChannel &&
        (s.DEBUG_BUILD &&
          i.debug.log(
            `[orchestrion:redis] subscribing to "${a.CHANNELS.REDIS_COMMAND}" and node-redis channels`,
          ),
        (function (e) {
          const t = () => {};
          r.tracingChannel(a.CHANNELS.REDIS_COMMAND).subscribe({
            end: t,
            asyncStart: t,
            asyncEnd: t,
            start(t) {
              const n = t.arguments?.[0];
              if (!n || "object" != typeof n) return;
              const r = n.callback;
              if ("function" != typeof r) return;
              const s = t.self,
                a = {
                  [o.DB_SYSTEM]: p,
                  [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l,
                };
              (a[o.NET_PEER_NAME] = s?.connection_options?.host),
                (a[o.NET_PEER_PORT] = s?.connection_options?.port),
                s?.address && (a[d] = `redis://${s.address}`);
              const c = _(n.command, n.args ?? [], a);
              t._sentrySpan = c;
              const u = i.getActiveSpan();
              n.callback = function (t, o) {
                t || h(e, c, n.command, n.args ?? [], o), f(c, t);
                const s = arguments;
                return i.withActiveSpan(u ?? null, () => r.apply(this, s));
              };
            },
            error(e) {
              const t = e._sentrySpan;
              t && f(t, e.error);
            },
          });
        })(t),
        i.waitForTracingChannelBinding(() => {
          S(a.CHANNELS.NODE_REDIS_COMMAND, E, t),
            S(a.CHANNELS.NODE_REDIS_EXECUTOR, y, t),
            (function () {
              const e = r.tracingChannel(a.CHANNELS.NODE_REDIS_CONNECT);
              u.bindTracingChannelToSpan(e, (e) => {
                const t = e.self?.options;
                return i.startInactiveSpan({
                  name: "redis-connect",
                  kind: i.SPAN_KIND.CLIENT,
                  attributes: {
                    ...m(t),
                    [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
                  },
                });
              });
            })(),
            T(a.CHANNELS.NODE_REDIS_MULTI, () => "MULTI"),
            T(a.CHANNELS.NODE_REDIS_PIPELINE, () => "PIPELINE"),
            T(a.CHANNELS.NODE_REDIS_BATCH, (e) =>
              void 0 !== e.arguments?.[2] ? "MULTI" : "PIPELINE",
            );
        }));
    },
  };
});
t.redisChannelIntegration = b;

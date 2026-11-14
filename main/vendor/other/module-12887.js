// vendor/other/module-12887.js — webpack module 12887
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = () => {},
  l = Symbol.for("sentry.query.from.instrumented.sql"),
  d = Symbol("sentryPostgresJsSpan"),
  p = Symbol("sentryPostgresJsConnectionAttrsSet"),
  f = Symbol("sentryPostgresJsSpanEnded"),
  h = new WeakMap(),
  g = [];
function m(e) {
  const t = e.result,
    n = e.arguments?.[0];
  if (!t || "object" != typeof t || !n) return;
  const r = i._INTERNAL_buildPostgresConnectionContext(n);
  h.set(t, r),
    (function (e) {
      g.some(
        (t) =>
          t.ATTR_SERVER_ADDRESS === e.ATTR_SERVER_ADDRESS &&
          t.ATTR_SERVER_PORT === e.ATTR_SERVER_PORT &&
          t.ATTR_DB_NAMESPACE === e.ATTR_DB_NAMESPACE,
      ) || g.push(e);
    })(r);
}
function _(e, t, n) {
  const r = t;
  r[p] || ((r[p] = !0), i._INTERNAL_setPostgresConnectionAttributes(e, n));
}
function S(e) {
  const t = e.self,
    n = e.arguments?.[0];
  if (!t || !n) return;
  const r = n[d],
    o = h.get(t);
  r && o && _(r, n, o);
}
const E = i.defineIntegration((e = {}) => {
  const { requireParentSpan: t, requestHook: n } = e;
  return {
    name: "PostgresJs",
    setupOnce() {
      r.tracingChannel &&
        (s.DEBUG_BUILD &&
          i.debug.log(
            `[orchestrion:postgresjs] subscribing to "${a.CHANNELS.POSTGRESJS_HANDLE}"`,
          ),
        r.tracingChannel(a.CHANNELS.POSTGRESJS_CONNECTION).subscribe({
          start: u,
          asyncStart: u,
          asyncEnd: u,
          error: u,
          end: m,
        }),
        r.tracingChannel(a.CHANNELS.POSTGRESJS_EXECUTE).subscribe({
          end: u,
          asyncStart: u,
          asyncEnd: u,
          error: u,
          start: S,
        }),
        r.tracingChannel(a.CHANNELS.POSTGRESJS_CONNECT).subscribe({
          end: u,
          asyncStart: u,
          asyncEnd: u,
          error: u,
          start: S,
        }),
        i.waitForTracingChannelBinding(() => {
          c.bindTracingChannelToSpan(
            r.tracingChannel(a.CHANNELS.POSTGRESJS_HANDLE),
            (e) => {
              const t = e.self;
              if (!t) return;
              if (!0 === t.executed || t[l]) return;
              const r = i._INTERNAL_reconstructPostgresQuery(t.strings),
                a = i._INTERNAL_sanitizeSqlQuery(r),
                c = i.startInactiveSpan({
                  name: a || "postgresjs.query",
                  op: "db",
                  kind: i.SPAN_KIND.CLIENT,
                  attributes: {
                    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                      "auto.db.orchestrion.postgresjs",
                    [o.DB_SYSTEM_NAME]: "postgres",
                    [o.DB_QUERY_TEXT]: a,
                  },
                });
              t[d] = c;
              const u = 1 === g.length ? g[0] : void 0;
              if ((u && _(c, t, u), n))
                try {
                  n(c, a, u);
                } catch (e) {
                  c.setAttribute("sentry.hook.error", "requestHook failed"),
                    s.DEBUG_BUILD &&
                      i.debug.error(
                        "[orchestrion:postgresjs] error in requestHook:",
                        e,
                      );
                }
              return (
                (function (e, t, n) {
                  const r = e.self;
                  if (!r) return;
                  const a = () => {
                      e[f] = !0;
                    },
                    c = r.resolve;
                  "function" == typeof c &&
                    (r.resolve = function (...e) {
                      a();
                      try {
                        const r = e[0]?.command;
                        i._INTERNAL_setPostgresOperationName(t, n, r), t.end();
                      } catch (e) {
                        s.DEBUG_BUILD &&
                          i.debug.error(
                            "[orchestrion:postgresjs] error ending span in resolve:",
                            e,
                          );
                      }
                      return c.apply(this, e);
                    });
                  const u = r.reject;
                  "function" == typeof u &&
                    (r.reject = function (...e) {
                      a();
                      try {
                        const r = e[0];
                        t.setStatus({
                          code: i.SPAN_STATUS_ERROR,
                          message: r?.message || "unknown_error",
                        }),
                          t.setAttribute(
                            "db.response.status_code",
                            r?.code || "unknown",
                          ),
                          t.setAttribute(o.ERROR_TYPE, r?.name || "unknown"),
                          i._INTERNAL_setPostgresOperationName(t, n),
                          t.end();
                      } catch (e) {
                        s.DEBUG_BUILD &&
                          i.debug.error(
                            "[orchestrion:postgresjs] error ending span in reject:",
                            e,
                          );
                      }
                      return u.apply(this, e);
                    });
                })(e, c, a),
                c
              );
            },
            {
              requiresParentSpan: !1 !== t,
              deferSpanEnd: ({ data: e }) => !!e[f] || !("error" in e),
            },
          );
        }));
    },
  };
});
t.postgresJsChannelIntegration = E;

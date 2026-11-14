// vendor/other/module-23151.js — webpack module 23151
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = "router",
  u = "middleware",
  l = Symbol("sentry.koa.layer-patched");
let d = !1;
function p(e, t, n, r) {
  const a = t ? c : u;
  return !0 === e[l] ||
    n.includes(a) ||
    "GeneratorFunction" === e.constructor.name ||
    "AsyncGeneratorFunction" === e.constructor.name
    ? e
    : ((e[l] = !0),
      (n, l) => {
        if (!o.getActiveSpan()) return e(n, l);
        const d = (function (e, t, n, r) {
          return n
            ? {
                attributes: {
                  [i.KOA_NAME]: r?.toString(),
                  [i.KOA_TYPE]: c,
                  [i.HTTP_ROUTE]: r?.toString(),
                },
                name: e._matchedRouteName || `router - ${r}`,
              }
            : {
                attributes: {
                  [i.KOA_NAME]: t.name || "middleware",
                  [i.KOA_TYPE]: u,
                  [i.CODE_FUNCTION_NAME]: t.name || "middleware",
                },
                name: `middleware - ${t.name}`,
              };
        })(n, e, t, r);
        n._matchedRoute &&
          (function (e) {
            const t = o.getActiveSpan();
            if (!t) return;
            const n = o.getRootSpan(t);
            n &&
              "http.server" ===
                o.spanToJSON(n).data[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
              n.setAttribute(i.HTTP_ROUTE, e);
          })(n._matchedRoute.toString());
        const p = d.attributes[i.KOA_NAME],
          f = "string" == typeof p ? p || "< unknown >" : d.name;
        return o.startSpan(
          {
            name: f,
            op: `${a}.koa`,
            attributes: {
              ...d.attributes,
              [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.orchestrion.koa",
            },
          },
          () => {
            const t = d.attributes[i.HTTP_ROUTE];
            if (o.getIsolationScope() === o.getDefaultIsolationScope())
              s.DEBUG_BUILD &&
                o.debug.warn(
                  "Isolation scope is default isolation scope - skipping setting transactionName",
                );
            else if (t) {
              const e = n.request?.method?.toUpperCase() || "GET";
              o.getIsolationScope().setTransactionName(`${e} ${t}`);
            }
            return e(n, l);
          },
        );
      });
}
const f = o.defineIntegration((e = {}) => {
  const t = e.ignoreLayersType ?? [];
  return {
    name: "Koa",
    setupOnce() {
      r.tracingChannel &&
        !d &&
        ((d = !0),
        s.DEBUG_BUILD &&
          o.debug.log(
            `[orchestrion:koa] subscribing to channel "${a.CHANNELS.KOA_USE}"`,
          ),
        r.tracingChannel(a.CHANNELS.KOA_USE).subscribe({
          start(e) {
            !(function (e, t) {
              const n = e.arguments[0];
              "function" == typeof n &&
                (e.arguments[0] = (function (e, t) {
                  return e.router
                    ? (function (e, t) {
                        const n = e.router,
                          r = n?.stack ?? [];
                        for (const e of r) {
                          const n = e.path,
                            r = e.stack;
                          r.forEach((e, o) => {
                            r[o] = p(e, !0, t, n);
                          });
                        }
                        return e;
                      })(e, t)
                    : p(e, !1, t);
                })(n, t));
            })(e, t);
          },
          end() {},
          asyncStart() {},
          asyncEnd() {},
          error() {},
        }));
    },
  };
});
t.koaChannelIntegration = f;

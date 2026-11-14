// vendor/other/module-74344.js — webpack module 74344
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(15280 /* vendor/other/module-15280 */),
  a = n(701 /* vendor/other/module-701 */),
  c = n(93118 /* vendor/other/module-93118 */),
  u = "Hono",
  l = i.generateInstrumentOnce(
    u,
    () =>
      new c.HonoInstrumentation({
        responseHook: (e) => {
          !(function (e) {
            const t = o.spanToJSON(e).data,
              n = t[a.AttributeNames.HONO_TYPE];
            if (t[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !n) return;
            e.setAttributes({
              [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hono",
              [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${n}.hono`,
            });
            const i = t[a.AttributeNames.HONO_NAME];
            if (
              ("string" == typeof i && e.updateName(i),
              o.getIsolationScope() === o.getDefaultIsolationScope())
            )
              return void (
                s.DEBUG_BUILD &&
                o.debug.warn(
                  "Isolation scope is default isolation scope - skipping setting transactionName",
                )
              );
            const c = t[r.HTTP_ROUTE],
              u = t[r.HTTP_REQUEST_METHOD];
            "string" == typeof c &&
              "string" == typeof u &&
              o.getIsolationScope().setTransactionName(`${u} ${c}`);
          })(e);
        },
      }),
  ),
  d = o.defineIntegration(() => ({
    name: u,
    setupOnce() {
      l();
    },
  }));
function p(e) {
  return e.res.status >= 500;
}
(t.honoIntegration = d),
  (t.instrumentHono = l),
  (t.setupHonoErrorHandler = function (e, t) {
    e.use(async function (e, t) {
      const n = o.httpRequestToRequestData(e.req);
      o.getIsolationScope().setSDKProcessingMetadata({ normalizedRequest: n }),
        await t();
    }),
      e.use(
        (function (e) {
          return async function (t, n) {
            await n(),
              (e?.shouldHandleError || p)(t) &&
                (t.res.sentry = o.captureException(t.error, {
                  mechanism: {
                    type: "auto.middleware.hono",
                    handled: !1,
                  },
                }));
          };
        })(t),
      ),
      i.ensureIsWrapped(e.use, "hono");
  });

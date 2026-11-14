// vendor/other/module-20902.js — webpack module 20902
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(15343 /* vendor/other/module-15343 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(53788 /* vendor/other/module-53788 */);
function a(e, t, n, r) {
  const a =
    (function () {
      const e = i.getClient();
      return e?.getIntegrationByName(s.INTEGRATION_NAME);
    })()?.getShouldHandleError() || s.defaultShouldHandleError;
  "diagnostics-channel" === r && (this.diagnosticsChannelExists = !0),
    this.diagnosticsChannelExists && "onError-hook" === r
      ? o.DEBUG_BUILD &&
        i.debug.warn(
          "Fastify error handler was already registered via diagnostics channel.",
          "You can safely remove `setupFastifyErrorHandler` call and set `shouldHandleError` on the integration options.",
        )
      : a(e, t, n) &&
        i.captureException(e, {
          mechanism: { handled: !1, type: "auto.function.fastify" },
        });
}
(t.handleFastifyError = a),
  (t.subscribeToFastifyErrorChannel = function () {
    r.subscribe("tracing:fastify.request.handler:error", (e) => {
      const { error: t, request: n, reply: r } = e;
      a.call(a, t, n, r, "diagnostics-channel");
    });
  });

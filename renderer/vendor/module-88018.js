// vendor/module-88018.js — webpack module 88018
// params: (e, t, n) = (module, exports, require)
const r = n(22608 /* vendor/module-22608 */),
  o = n(96137 /* vendor/module-96137 */),
  i = n(24840 /* vendor/module-24840 */),
  a = n(7488 /* vendor/module-7488 */),
  s = n(43843 /* vendor/module-43843 */);
function l(e) {
  return [
    ...r
      .getDefaultIntegrations(e)
      .filter(
        (e) => "BrowserSession" !== e.name && "CultureContext" !== e.name,
      ),
    i.scopeToMainIntegration(),
  ];
}
(t.getDefaultIntegrations = l),
  (t.init = function (e = {}, t = r.init) {
    window?.__SENTRY__RENDERER_INIT__
      ? o.debug.warn(
          "The browser SDK has already been initialized.\nIf init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer",
        )
      : ((window.__SENTRY__RENDERER_INIT__ = !0),
        (e.sendClientReports = !1),
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = l(e)),
        void 0 === e.stackParser &&
          (e.stackParser = a.electronRendererStackParser),
        void 0 === e.ipcNamespace && (e.ipcNamespace = "sentry-ipc"),
        void 0 === e.dsn && (e.dsn = "https://12345@dummy.dsn/12345"),
        void 0 === e.transport && (e.transport = s.makeRendererTransport),
        delete e.initialScope,
        t(e));
  });

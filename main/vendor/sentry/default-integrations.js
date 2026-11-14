// vendor/sentry/default-integrations.js — webpack module 58988
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(41302 /* vendor/other/module-41302 */),
  a = n(3327 /* vendor/other/module-3327 */),
  c = n(37739 /* vendor/other/module-37739 */),
  u = n(88892 /* vendor/sentry/child-process-integration */),
  l = n(91741 /* vendor/sentry/electron-breadcrumbs */),
  d = n(91588 /* vendor/other/module-91588 */),
  p = n(64942 /* vendor/other/module-64942 */),
  f = n(54772 /* vendor/sentry/main-process-session */),
  h = n(65506 /* vendor/other/module-65506 */),
  g = n(26440 /* vendor/other/module-26440 */),
  m = n(96673 /* vendor/other/module-96673 */),
  _ = n(28219 /* vendor/sentry/preload-injection */),
  S = n(50593 /* vendor/sentry/renderer-event-loop-block */),
  E = n(76916 /* vendor/other/module-76916 */),
  y = n(59144 /* vendor/sentry/screenshots */),
  T = n(51686 /* vendor/sentry/minidump-integration */),
  b = n(9642 /* vendor/sentry/ipc-and-breadcrumbs */),
  I = n(78982 /* vendor/other/module-78982 */),
  v = n(67838 /* vendor/sentry/renderer-stack-frames */),
  A = n(86281 /* vendor/sentry/offline-transport */),
  N = n(13964 /* vendor/other/module-13964 */);
function R(e) {
  const t = [
    T.sentryMinidumpIntegration(),
    l.electronBreadcrumbsIntegration(),
    h.electronNetIntegration(),
    d.electronContextIntegration(),
    u.childProcessIntegration(),
    m.onUncaughtExceptionIntegration(),
    _.preloadInjectionIntegration(),
    c.additionalContextIntegration(),
    y.screenshotsIntegration(),
    p.gpuContextIntegration(),
    S.rendererEventLoopBlockIntegration(),
    f.mainProcessSessionIntegration(),
    o.eventFiltersIntegration(),
    o.functionToStringIntegration(),
    o.linkedErrorsIntegration(),
    o.consoleIntegration(),
    o.nativeNodeFetchIntegration(),
    o.onUnhandledRejectionIntegration(),
    o.contextLinesIntegration(),
    o.localVariablesIntegration(),
    o.nodeContextIntegration({ cloudResource: !1 }),
    g.normalizePathsIntegration(),
  ];
  return (
    e.attachScreenshot && t.push(y.screenshotsIntegration()),
    e.enableRendererProfiling && t.push(E.rendererProfilingIntegration()),
    t
  );
}
const C = [
  { userAdded: "ElectronMinidump", toRemove: "SentryMinidump" },
  {
    userAdded: "BrowserWindowSession",
    toRemove: "MainProcessSession",
  },
];
(t.getDefaultIntegrations = R),
  (t.init = function (e) {
    const [t = 0] = process.versions.electron.split(".").map(Number);
    if (t < 23)
      throw new Error("Sentry Electron SDK requires Electron 23 or higher");
    const n = (function (e) {
        const t = null != e.dataCollection || !!e.sendDefaultPii;
        return (e.dataCollection ?? {}).userInfo ?? t;
      })(e),
      c = {
        _metadata: { sdk: a.getSdkInfo(n) },
        ipcMode: s.IPCMode.Both,
        ipcNamespace: "sentry-ipc",
        release: a.getDefaultReleaseName(),
        environment: a.getDefaultEnvironment(),
        defaultIntegrations: R(e),
        transport: A.makeElectronOfflineTransport(),
        transportOptions: {},
        getSessions: () => [i.session.defaultSession],
        ...e,
        stackParser: r.stackParserFromStackParserOptions(
          e.stackParser || v.defaultStackParser,
        ),
        includeServerName: !1,
      },
      u = { ...c, integrations: r.getIntegrationsToSetup(c) };
    u.debug && r.debug.enable(),
      (function (e) {
        for (const { userAdded: t, toRemove: n } of C)
          e.integrations.some((e) => e.name === t) &&
            (e.integrations = e.integrations.filter((e) => e.name !== n));
      })(u),
      N.configureUtilityProcessIPC(),
      o.setNodeAsyncContextStrategy();
    const l = o.getCurrentScope();
    l.update(u.initialScope);
    const d = new o.NodeClient(u);
    n && d.on("beforeSendSession", r.addAutoIpAddressToSession),
      d.on("beforeCaptureLog", (e) => {
        e.attributes = {
          ...e.attributes,
          "electron.process": "browser",
          ...I.getOsDeviceLogAttributes(d),
        };
      }),
      l.setClient(d),
      d.init(),
      b.configureIPC(d, u),
      u.skipOpenTelemetrySetup || o.initOpenTelemetry(d);
  });

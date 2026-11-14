// vendor/sentry/electron-breadcrumbs.js — webpack module 91741
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(89840 /* vendor/other/module-89840 */),
  a = {
    app: (e) => !e.startsWith("remote-"),
    autoUpdater: () => !0,
    webContents: (e) =>
      ["dom-ready", "context-menu", "load-url", "destroyed"].includes(e),
    browserWindow: (e) =>
      [
        "closed",
        "close",
        "unresponsive",
        "responsive",
        "show",
        "blur",
        "focus",
        "hide",
        "maximize",
        "minimize",
        "restore",
        "enter-full-screen",
        "leave-full-screen",
      ].includes(e),
    screen: () => !0,
    powerMonitor: () => !0,
    captureWindowTitles: !1,
  };
function c(e) {
  return Object.keys(e).reduce((t, n) => {
    if ("captureWindowTitles" === n) t[n] = !!e[n];
    else {
      const r = e[n];
      Array.isArray(r)
        ? (t[n] = (e) => r.includes(e))
        : ("function" != typeof r && !1 !== r) || (t[n] = r);
    }
    return t;
  }, {});
}
const u = r.defineIntegration((e = {}) => {
  const t = { ...a, ...c(e) };
  return {
    name: "ElectronBreadcrumbs",
    setup(e) {
      const n = e.getOptions(),
        a = !!n?.enableLogs;
      function c(e, n, i, c) {
        const u = e.emit.bind(e);
        e.emit = (e, ...l) => {
          if (i && i(e)) {
            const i = {
              category: "electron",
              message: `${n}.${e}`,
              timestamp: new Date().getTime() / 1e3,
              type: "ui",
            };
            c &&
              ((i.data = { ...s.getRendererProperties(c) }),
              !t.captureWindowTitles && i.data?.title && delete i.data?.title),
              r.addBreadcrumb(i);
            const u = { "sentry.origin": "auto.electron.events" };
            i.data?.id && (u.id = i.data.id),
              i.data?.url && (u.url = i.data.url),
              a && o.logger.info(o.logger.fmt`electron.${n}.${e}`, u);
          }
          return u(e, ...l);
        };
      }
      s.trackRendererProperties(),
        i.app.whenReady().then(
          () => {
            t.screen && c(i.screen, "screen", t.screen),
              t.powerMonitor &&
                c(i.powerMonitor, "powerMonitor", t.powerMonitor);
          },
          () => {},
        ),
        t.app && c(i.app, "app", t.app),
        t.autoUpdater && c(i.autoUpdater, "autoUpdater", t.autoUpdater),
        t.browserWindow &&
          i.app.on("browser-window-created", (e, r) => {
            const o = r.webContents.id;
            c(
              r,
              n?.getRendererName?.(r.webContents) || "window",
              t.browserWindow,
              o,
            );
          }),
        t.webContents &&
          i.app.on("web-contents-created", (e, r) => {
            const o = r.id;
            c(r, n?.getRendererName?.(r) || "renderer", t.webContents, o);
          });
    },
  };
});
t.electronBreadcrumbsIntegration = u;

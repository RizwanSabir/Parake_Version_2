// vendor/electron-debug.js — webpack module 97100
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.r(t),
  n.d(t, {
    default: () => S,
    devTools: () => h,
    openDevTools: () => g,
    refresh: () => m,
  });
const r = require("node:process");
var o = n(84157 /* external/electron */),
  i = n(70188 /* vendor/electron-localshortcut */);
if ("string" == typeof o)
  throw new TypeError("Not running in an Electron environment!");
const { env: s } = process,
  a = "ELECTRON_IS_DEV" in s,
  c = 1 === Number.parseInt(s.ELECTRON_IS_DEV, 10),
  u = a ? c : !o.app.isPackaged,
  l = "darwin" === r.platform,
  d = new Map();
function p(e) {
  return e && (!0 === e.isEnabled || (null === e.isEnabled && u));
}
async function f(e = o.BrowserWindow.getFocusedWindow()) {
  await o.app.whenReady(),
    e
      ? (i.register(e, "CommandOrControl+Shift+C", _),
        i.register(e, l ? "Command+Alt+I" : "Control+Shift+I", h),
        i.register(e, "F12", h),
        i.register(e, "CommandOrControl+R", m),
        i.register(e, "F5", m))
      : (i.register("CommandOrControl+Shift+C", _),
        i.register(l ? "Command+Alt+I" : "Control+Shift+I", h),
        i.register("F12", h),
        i.register("CommandOrControl+R", m),
        i.register("F5", m));
}
function h(e = o.BrowserWindow.getFocusedWindow()) {
  e &&
    (function (e = o.BrowserWindow.getFocusedWindow()) {
      if (e) {
        const { webContents: t } = e;
        t.isDevToolsOpened() ? t.closeDevTools() : t.openDevTools(d.get(e));
      }
    })(e);
}
function g(e = o.BrowserWindow.getFocusedWindow()) {
  e && e.webContents.openDevTools(d.get(e));
}
function m(e = o.BrowserWindow.getFocusedWindow()) {
  e && e.webContents.reloadIgnoringCache();
}
function _() {
  const e = o.BrowserWindow.getFocusedWindow(),
    t = () => {
      e.devToolsWebContents.executeJavaScript(
        "DevToolsAPI.enterInspectElementMode()",
      );
    };
  e &&
    (e.webContents.isDevToolsOpened()
      ? t()
      : (e.webContents.once("devtools-opened", t), e.openDevTools()));
}
function S(e) {
  if (
    !(e = {
      isEnabled: null,
      showDevTools: !0,
      devToolsMode: "previous",
      ...e,
    }).windowSelector
  ) {
    if (!p(e)) return;
    f();
  }
  o.app.on("browser-window-created", (t, n) => {
    n.webContents.once("dom-ready", () => {
      const t = (function (e, t) {
        if (!t.windowSelector) return t;
        const n = t.windowSelector(e);
        return !0 === n ? t : !1 === n ? { isEnabled: !1 } : { ...t, ...n };
      })(n, e);
      "previous" !== t.devToolsMode &&
        d.set(n, { ...d.get(n), mode: t.devToolsMode }),
        p(t) && (t.windowSelector && f(n), t.showDevTools && g(n));
    });
  });
}

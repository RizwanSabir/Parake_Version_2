// app/lib/desktop-theme-store.js — webpack module 58443
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.desktopThemeStore = void 0), (t.resolveInitialTheme = o);
const r = n(42527 /* vendor/module-42527 */);
function o(e) {
  return (0, r.resolveTheme)(
    window.electron.initialThemeSettings[e],
    (0, r.getSystemTheme)(),
  );
}
t.desktopThemeStore = {
  read: (e) => ({
    theme: window.electron.initialThemeSettings[e],
    resolved: o(e),
  }),
  write: (e, t) => {
    window.electron.ipcRendererProxy.invoke("renderer/set-theme", {
      scope: e,
      theme: t,
    });
  },
};

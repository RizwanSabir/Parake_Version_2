// vendor/sentry/browser-window-session.js — webpack module 30658
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(66383 /* vendor/sentry/session-tracking */),
  s = r.defineIntegration((e = {}) => {
    let t = { name: "inactive" };
    function n() {
      if (
        (function () {
          for (const e of o.BrowserWindow.getAllWindows())
            if (
              !e.isDestroyed() &&
              e.webContents &&
              !e.webContents.isDestroyed() &&
              e.isFocused() &&
              e.isVisible()
            )
              return !0;
          return !1;
        })()
      )
        "inactive" === t.name
          ? i.startSession(!0)
          : "timeout" === t.name && clearTimeout(t.timer),
          (t = { name: "active" });
      else if ("active" === t.name) {
        const n = 1e3 * (e.backgroundTimeoutSeconds ?? 30),
          r = setTimeout(() => {
            "timeout" === t.name &&
              ((t = { name: "inactive" }), i.endSession().catch(() => {}));
          }, n).unref();
        t = { name: "timeout", timer: r };
      }
    }
    return {
      name: "BrowserWindowSession",
      setup() {
        o.app.on("browser-window-created", (e, t) => {
          t.on("focus", n),
            t.on("blur", n),
            t.on("show", n),
            t.on("hide", n),
            t.once("closed", () => {
              t.removeListener("focus", n),
                t.removeListener("blur", n),
                t.removeListener("show", n),
                t.removeListener("hide", n);
            });
        }),
          i.endSessionOnExit();
      },
    };
  });
t.browserWindowSessionIntegration = s;

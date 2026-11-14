// app/next-auth-cookie.js — webpack module 33181
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.setNextAuthCookie = async function (e, t) {
    const { url: n } = (0, s.getApiConfig)();
    if (e) {
      if (t) {
        o.default.info("Setting auth cookie for token: <hidden>");
        const r = Math.floor(Date.now() / 1e3) + 2592e3;
        try {
          await e.webContents.session.cookies.set({
            url: n,
            name: "__Secure-next-auth.session-token",
            value: t,
            domain: new URL(n).hostname,
            path: "/",
            secure: !0,
            httpOnly: !0,
            sameSite: "no_restriction",
            expirationDate: r,
          }),
            await e.webContents.session.cookies.set({
              url: n,
              name: "next-auth.session-token",
              value: t,
              domain: new URL(n).hostname,
              path: "/",
              secure: !0,
              httpOnly: !0,
              sameSite: "no_restriction",
              expirationDate: r,
            }),
            o.default.info("Auth cookies set successfully");
        } catch (e) {
          o.default.error("Error setting auth cookies:", e);
        }
      } else
        o.default.info("Clearing auth cookie"),
          await e.webContents.session.cookies.remove(
            n,
            "__Secure-next-auth.session-token",
          ),
          await e.webContents.session.cookies.remove(
            n,
            "next-auth.session-token",
          );
      await e.webContents.session.cookies.flushStore(),
        o.default.info("Cookies flushed to disk"),
        i.ipcMainProxy.emit(e, "main/auth-token-was-updated", t),
        o.default.info("Auth cookie update notification sent to renderer");
    } else o.default.error("Cannot set auth cookie – mainWindow not ready yet");
  });
const o = r(n(57686 /* vendor/electron-log/index */)),
  i = n(9596 /* app/ipc-main-proxy */),
  s = n(2510 /* app/api-config-store */);

// app/protocol-url-handler.js — webpack module 93155
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.handleProtocolUrl = async function (e) {
    o.default.info("Received protocol URL:", e);
    const t = `${a.PROTOCOL}://`;
    if (!e.startsWith(t)) return void o.default.info("Invalid protocol");
    const n = e.replace(t, "");
    o.default.info("URL without prefix:", n);
    const [r = "", u] = n.split("?"),
      l = r.replace(/\/+$/, ""),
      d = u ? decodeURIComponent(u) : "";
    o.default.info("Decoded query string:", d);
    const p = new URLSearchParams(d);
    if ("auth" === l) {
      const t = p.get("payload");
      if ((o.default.info("Extracted payload:", t), t))
        try {
          let n = t;
          try {
            const e = decodeURIComponent(t);
            e !== t && ((n = e), o.default.info("Further decoded payload:", n));
          } catch {
            o.default.info("Payload does not need further decoding");
          }
          const r = JSON.parse(
            Buffer.from(n, "base64").toString("utf8"),
          ).authToken;
          r
            ? (o.default.info("Received auth token from protocol"),
              a.mainWindow
                ? (await (0, c.setNextAuthCookie)(a.mainWindow, r),
                  (0, a.setInitialProtocolUrl)(null))
                : (0, a.setInitialProtocolUrl)(e),
              (0, s.createOrFocusMainWindow)())
            : o.default.info("No auth token found in auth payload");
        } catch (e) {
          o.default.error("Invalid payload in auth protocol URL:", e);
        }
      else o.default.info("Missing payload in auth URL");
    } else if ("session" === l) {
      const t = p.get("payload");
      if ((o.default.info("Extracted session payload:", t), t))
        try {
          let n = t;
          try {
            const e = decodeURIComponent(t);
            e !== t &&
              ((n = e), o.default.info("Further decoded session payload:", n));
          } catch {
            o.default.info("Session payload does not need further decoding");
          }
          const r = JSON.parse(Buffer.from(n, "base64").toString("utf8")),
            u = r.callSessionId,
            l = r.authToken;
          u
            ? (o.default.info("Received session ID from protocol:", u),
              a.mainWindow
                ? (l && (await (0, c.setNextAuthCookie)(a.mainWindow, l)),
                  i.ipcMainProxy.emit(a.mainWindow, "main/session-did-load", u),
                  (0, a.setInitialProtocolUrl)(null))
                : (0, a.setInitialProtocolUrl)(e),
              (0, s.createOrFocusMainWindow)())
            : o.default.info("Missing callSessionId in session payload");
        } catch (e) {
          o.default.error("Invalid payload in session protocol URL:", e);
        }
      else o.default.info("Missing payload in session URL");
    } else o.default.info("Invalid path in protocol URL:", l);
  });
const o = r(n(57686 /* vendor/electron-log/index */)),
  i = n(9596 /* app/ipc-main-proxy */),
  s = n(6586 /* app/create-main-window */),
  a = n(30327 /* app/main-entry */),
  c = n(33181 /* app/next-auth-cookie */);

// app/api-config-store.js — webpack module 2510
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.getApiConfig = function () {
  return (
    (a.bypassToken =
      (0, i.decrypt)((0, s.getSetting)("encryptedBypassToken")) ?? ""),
    a
  );
}),
  (t.setApiConfig = function (e) {
    const t = (0, i.encrypt)(e.bypassToken);
    return (
      (0, s.setSetting)("encryptedBypassToken", t ?? ""),
      (a = { ...e, bypassToken: null === t ? "" : e.bypassToken }),
      a
    );
  });
const r = n(84157 /* external/electron */),
  o = n(7478 /* app/api-urls */),
  i = n(35558 /* app/crypto */),
  s = n(92763 /* app/settings-store */);
let a = (0, o.resolveApiConfigWithOverride)((0, o.getDefaultApiConfig)(), {
  isDevelopment: !r.app.isPackaged,
  overrideUrl: process.env.DESKTOP_API_URL,
});

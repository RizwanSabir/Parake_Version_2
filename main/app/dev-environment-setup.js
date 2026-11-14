// app/dev-environment-setup.js — webpack module 68346
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 });
const o = r(n(16928 /* external/path */)),
  i = n(84157 /* external/electron */),
  s = n(26279 /* app/brand-constants */),
  a = n(5979 /* app/telemetry-init */);
if (!i.app.isPackaged) {
  const e = `${s.DESKTOP_BRAND.packageName}-dev`;
  i.app.setName(e),
    i.app.setPath("userData", o.default.join(i.app.getPath("appData"), e));
}
(0, a.initTelemetry)();

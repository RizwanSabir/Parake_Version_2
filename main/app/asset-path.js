// app/asset-path.js — webpack module 89553
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getAssetPath = function (...e) {
    const t = i.app.isPackaged
      ? o.default.join(process.resourcesPath, "assets")
      : o.default.join(__dirname, "../../assets");
    return o.default.join(t, ...e);
  });
const o = r(n(16928 /* external/path */)),
  i = n(84157 /* external/electron */);

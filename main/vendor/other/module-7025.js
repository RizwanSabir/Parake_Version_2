// vendor/other/module-7025.js — webpack module 7025
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new Set(["false", "f", "n", "no", "off", "0"]),
  r = new Set(["true", "t", "y", "yes", "on", "1"]);
(t.FALSY_ENV_VALUES = n),
  (t.TRUTHY_ENV_VALUES = r),
  (t.envToBool = function (e, t) {
    const o = String(e).toLowerCase();
    return !n.has(o) && (!!r.has(o) || (t?.strict ? null : Boolean(e)));
  });

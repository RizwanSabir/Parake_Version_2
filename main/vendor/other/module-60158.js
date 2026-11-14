// vendor/other/module-60158.js — webpack module 60158
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new WeakMap();
t.initUnique = function (e, t) {
  try {
    return n.get(e) || n.set(e, new t()), n.get(e);
  } catch (e) {
    return new t();
  }
};

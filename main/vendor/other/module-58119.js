// vendor/other/module-58119.js — webpack module 58119
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new WeakMap();
(t.getStoredLayers = (e) => {
  let t = n.get(e);
  return t || ((t = []), n.set(e, t)), t;
}),
  (t.storeLayer = (e, t) => {
    const r = n.get(e);
    r ? r.push(t) : n.set(e, [t]);
  });

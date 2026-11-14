// vendor/other/module-20807.js — webpack module 20807
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(28635 /* vendor/other/module-28635 */),
  o = n(27352 /* vendor/other/module-27352 */);
t.isBrowser = function () {
  return (
    "undefined" != typeof window &&
    (!r.isNodeEnv() ||
      (function () {
        const e = o.GLOBAL_OBJ.process;
        return "renderer" === e?.type;
      })())
  );
};

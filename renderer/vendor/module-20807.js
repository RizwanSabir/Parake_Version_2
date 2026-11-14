// vendor/module-20807.js — webpack module 20807
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(28635 /* vendor/module-28635 */),
  o = n(27352 /* vendor/module-27352 */);
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

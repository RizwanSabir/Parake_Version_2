// vendor/module-76077.js — webpack module 76077
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76414 /* vendor/module-76414 */),
  o = /^HTML(\w*)Element$/;
t.normalizeStringifyValue = function (e) {
  if ("undefined" != typeof window && e === window) return "[Window]";
  if ("undefined" != typeof document && e === document) return "[Document]";
  if (r.isElement(e)) {
    const t = (function (e) {
      const t = Object.getPrototypeOf(e);
      return t?.constructor ? t.constructor.name : "null prototype";
    })(e);
    if (o.test(t)) return `[HTMLElement: ${r.htmlTreeAsString(e)}]`;
  }
};

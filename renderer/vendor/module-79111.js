// vendor/module-79111.js — webpack module 79111
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(86881 /* vendor/module-86881 */);
t.getActivationStart = () => {
  const e = r.getNavigationEntry();
  return e?.activationStart ?? 0;
};

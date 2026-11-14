// vendor/module-28221.js — webpack module 28221
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/module-27352 */);
t.vercelWaitUntil = function (e) {
  if ("string" != typeof EdgeRuntime) return;
  const t = r.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],
    n = t?.get?.();
  n?.waitUntil && n.waitUntil(e);
};

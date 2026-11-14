// vendor/module-92764.js — webpack module 92764
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */);
t.whenActivated = (e) => {
  r.WINDOW.document?.prerendering
    ? addEventListener("prerenderingchange", () => e(), !0)
    : e();
};

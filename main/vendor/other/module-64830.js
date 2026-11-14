// vendor/other/module-64830.js — webpack module 64830
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */),
  o = n(80291 /* vendor/other/module-80291 */);
t.onHidden = (e) => {
  const t = (t) => {
    ("pagehide" !== t.type &&
      "hidden" !== r.WINDOW.document?.visibilityState) ||
      e(t);
  };
  o.addPageListener("visibilitychange", t, { capture: !0, once: !0 }),
    o.addPageListener("pagehide", t, { capture: !0, once: !0 });
};

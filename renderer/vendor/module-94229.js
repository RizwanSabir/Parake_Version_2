// vendor/module-94229.js — webpack module 94229
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */);
t.reportPageLoaded = function (e = r.getClient()) {
  e?.emit("endPageloadSpan");
};

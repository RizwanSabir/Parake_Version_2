// vendor/other/module-94229.js — webpack module 94229
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */);
t.reportPageLoaded = function (e = r.getClient()) {
  e?.emit("endPageloadSpan");
};

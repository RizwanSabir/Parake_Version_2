// vendor/other/module-14640.js — webpack module 14640
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
t.setHttpServerSpanRouteAttribute = function (e) {
  const t = r.getActiveSpan();
  if (!t) return;
  const n = r.getRootSpan(t);
  n &&
    "http.server" === r.spanToJSON(n).data[r.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
    n.setAttribute("http.route", e);
};

// vendor/other/module-11190.js — webpack module 11190
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = Symbol.for("opentelemetry.patched"),
  r = Symbol.for("opentelemetry.graphql_data");
(t.OTEL_GRAPHQL_DATA_SYMBOL = r), (t.OTEL_PATCHED_SYMBOL = n);

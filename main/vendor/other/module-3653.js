// vendor/other/module-3653.js — webpack module 3653
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = Symbol.for("opentelemetry.graphql_data"),
  r = Symbol.for("opentelemetry.patched");
(t.GRAPHQL_DATA_SYMBOL = n),
  (t.GRAPHQL_FIELD_NAME = "graphql.field.name"),
  (t.GRAPHQL_FIELD_PATH = "graphql.field.path"),
  (t.GRAPHQL_FIELD_TYPE = "graphql.field.type"),
  (t.GRAPHQL_PARENT_NAME = "graphql.parent.name"),
  (t.GRAPHQL_PATCHED_SYMBOL = r),
  (t.ORIGIN = "auto.graphql.diagnostic_channel"),
  (t.SPAN_NAME_EXECUTE = "graphql.execute"),
  (t.SPAN_NAME_PARSE = "graphql.parse"),
  (t.SPAN_NAME_RESOLVE = "graphql.resolve"),
  (t.SPAN_NAME_VALIDATE = "graphql.validate");

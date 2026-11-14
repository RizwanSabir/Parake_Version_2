// vendor/other/module-34308.js — webpack module 34308
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = Symbol("hapi-handler-patched"),
  r = new Set([
    "onPreAuth",
    "onCredentials",
    "onPostAuth",
    "onPreHandler",
    "onPostHandler",
    "onPreResponse",
    "onRequest",
  ]);
var o = ((e) => (
  (e.HAPI_TYPE = "hapi.type"),
  (e.PLUGIN_NAME = "hapi.plugin.name"),
  (e.EXT_TYPE = "server.ext.type"),
  e
))(o || {});
(t.AttributeNames = o),
  (t.HapiLayerType = {
    ROUTER: "router",
    PLUGIN: "plugin",
    EXT: "server.ext",
  }),
  (t.HapiLifecycleMethodNames = r),
  (t.handlerPatched = n);

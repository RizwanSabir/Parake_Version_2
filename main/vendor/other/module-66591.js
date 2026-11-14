// vendor/other/module-66591.js — webpack module 66591
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
(t.HapiComponentName = "@hapi/hapi"),
  (t.HapiLayerType = {
    ROUTER: "router",
    PLUGIN: "plugin",
    EXT: "server.ext",
  }),
  (t.HapiLifecycleMethodNames = r),
  (t.handlerPatched = n);

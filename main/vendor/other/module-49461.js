// vendor/other/module-49461.js — webpack module 49461
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
var n = ((e) => (
    (e.FASTIFY_NAME = "fastify.name"),
    (e.FASTIFY_TYPE = "fastify.type"),
    (e.HOOK_NAME = "hook.name"),
    (e.PLUGIN_NAME = "plugin.name"),
    e
  ))(n || {}),
  r = ((e) => (
    (e.MIDDLEWARE = "middleware"), (e.REQUEST_HANDLER = "request_handler"), e
  ))(r || {}),
  o = ((e) => (
    (e.MIDDLEWARE = "middleware"), (e.REQUEST_HANDLER = "request handler"), e
  ))(o || {});
(t.AttributeNames = n), (t.FastifyNames = o), (t.FastifyTypes = r);

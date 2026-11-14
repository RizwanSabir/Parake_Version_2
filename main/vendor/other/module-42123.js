// vendor/other/module-42123.js — webpack module 42123
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.HTTP_ON_CLIENT_REQUEST = "http.client.request.created"),
  (t.HTTP_ON_SERVER_REQUEST = "http.server.request.start"),
  (t.LOG_PREFIX = "@sentry/instrumentation-http");

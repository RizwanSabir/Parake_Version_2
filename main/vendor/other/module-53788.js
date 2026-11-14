// vendor/other/module-53788.js — webpack module 53788
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.INTEGRATION_NAME = "Fastify"),
  (t.defaultShouldHandleError = function (e, t, n) {
    const r = n.statusCode;
    return r >= 500 || r <= 299;
  });

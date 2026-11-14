// vendor/other/module-91731.js — webpack module 91731
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "route",
      module: {
        name: "@hapi/hapi",
        versionRange: ">=17.0.0 <22.0.0",
        filePath: "lib/server.js",
      },
      functionQuery: { methodName: "route", kind: "Sync" },
    },
    {
      channelName: "ext",
      module: {
        name: "@hapi/hapi",
        versionRange: ">=17.0.0 <22.0.0",
        filePath: "lib/server.js",
      },
      functionQuery: { methodName: "ext", kind: "Sync" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.hapiChannels = {
  HAPI_ROUTE: "orchestrion:@hapi/hapi:route",
  HAPI_EXT: "orchestrion:@hapi/hapi:ext",
}),
  (t.hapiConfig = r),
  (t.hapiSubscribeInjection = o);

// vendor/other/module-83831.js — webpack module 83831
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "handle",
      module: {
        name: "express",
        versionRange: ">=4.0.0 <5",
        filePath: "lib/router/layer.js",
      },
      functionQuery: {
        expressionName: "handle_request",
        kind: "Callback",
      },
    },
    {
      channelName: "handle",
      module: {
        name: "router",
        versionRange: ">=2.0.0 <3",
        filePath: "lib/layer.js",
      },
      functionQuery: {
        expressionName: "handleRequest",
        kind: "Callback",
      },
    },
    {
      channelName: "register",
      module: {
        name: "express",
        versionRange: ">=4.0.0 <5",
        filePath: "lib/router/index.js",
      },
      functionQuery: { expressionName: "route", kind: "Sync" },
    },
    {
      channelName: "register",
      module: {
        name: "express",
        versionRange: ">=4.0.0 <5",
        filePath: "lib/router/index.js",
      },
      functionQuery: { expressionName: "use", kind: "Sync" },
    },
    {
      channelName: "register",
      module: {
        name: "router",
        versionRange: ">=2.0.0 <3",
        filePath: "index.js",
      },
      functionQuery: { expressionName: "route", kind: "Sync" },
    },
    {
      channelName: "register",
      module: {
        name: "router",
        versionRange: ">=2.0.0 <3",
        filePath: "index.js",
      },
      functionQuery: { expressionName: "use", kind: "Sync" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.expressChannels = {
  EXPRESS_HANDLE: "orchestrion:express:handle",
  ROUTER_HANDLE: "orchestrion:router:handle",
  EXPRESS_REGISTER: "orchestrion:express:register",
  ROUTER_REGISTER: "orchestrion:router:register",
}),
  (t.expressConfig = r),
  (t.expressSubscribeInjection = o);

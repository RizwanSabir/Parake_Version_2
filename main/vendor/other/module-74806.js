// vendor/other/module-74806.js — webpack module 74806
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "use",
      module: {
        name: "koa",
        versionRange: ">=2.0.0 <4",
        filePath: "lib/application.js",
      },
      functionQuery: {
        className: "Application",
        methodName: "use",
        kind: "Sync",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.koaChannels = { KOA_USE: "orchestrion:koa:use" }),
  (t.koaConfig = r),
  (t.koaSubscribeInjection = o);

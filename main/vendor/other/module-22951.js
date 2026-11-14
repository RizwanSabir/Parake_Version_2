// vendor/other/module-22951.js — webpack module 22951
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = "sentrySubscribeOrchestrionChannel";
(t.SUBSCRIBE_TRANSFORM_NAME = n),
  (t.toSubscribeInjections = function (e) {
    const t = new Set(),
      r = [];
    for (const { module: o } of e) {
      const e = `${o.name}\0${o.versionRange}\0${String(o.filePath)}`;
      t.has(e) ||
        (t.add(e),
        r.push({
          channelName: o.name,
          module: o,
          astQuery: "Program",
          transform: n,
        }));
    }
    return r;
  });

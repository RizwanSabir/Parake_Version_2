// vendor/other/module-3327.js — webpack module 3327
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(84157 /* external/electron */),
  o = n(71376 /* vendor/other/module-71376 */);
(t.getDefaultEnvironment = function () {
  return r.app.isPackaged ? "production" : "development";
}),
  (t.getDefaultReleaseName = function () {
    return `${(r.app.name || r.app.getName()).replace(/\W/g, "-")}@${r.app.getVersion()}`;
  }),
  (t.getEventDefaults = async function (e) {
    let t = { message: "test" };
    const n = {};
    for (const r of e.getEventProcessors()) {
      if (null === t) break;
      t = await r(t, n);
    }
    return delete t?.message, t || {};
  }),
  (t.getSdkInfo = function (e) {
    return {
      name: "sentry.javascript.electron",
      packages: [{ name: "npm:@sentry/electron", version: o.SDK_VERSION }],
      version: o.SDK_VERSION,
      settings: { infer_ip: e ? "auto" : "never" },
    };
  });

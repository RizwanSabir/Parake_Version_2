// vendor/other/module-78982.js — webpack module 78982
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
let n;
t.getOsDeviceLogAttributes = function (e) {
  return (
    void 0 === n &&
      ((n = {}),
      (async function (e) {
        const t = e.getIntegrationByName("Context"),
          n = e.getIntegrationByName("AdditionalContext");
        let r = {};
        const o = {};
        (r = (await t?.processEvent?.(r, o, e)) || r),
          (r = (await n?.processEvent?.(r, o, e)) || r);
        const i = {};
        return (
          r.contexts?.os?.name && (i["os.name"] = r.contexts.os.name),
          r.contexts?.os?.version && (i["os.version"] = r.contexts.os.version),
          r.contexts?.device?.brand &&
            (i["device.brand"] = r.contexts.device.brand),
          r.contexts?.device?.model &&
            (i["device.model"] = r.contexts.device.model),
          r.contexts?.device?.family &&
            (i["device.family"] = r.contexts.device.family),
          i
        );
      })(e)
        .then((e) => {
          n = e;
        })
        .catch(() => {})),
    n || {}
  );
};

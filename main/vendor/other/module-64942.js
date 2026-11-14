// vendor/other/module-64942.js — webpack module 64942
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */);
function i(e) {
  return {
    name: e.deviceString || "GPU",
    active: e.active,
    id: `0x${e.deviceId.toString(16).padStart(4, "0")}`,
    vendor_id: `0x${e.vendorId.toString(16).padStart(4, "0")}`,
    vendor_name: e.vendorString,
    driver_version: e.driverVersion,
  };
}
const s = r.defineIntegration((e = { infoLevel: "basic" }) => {
  let t;
  return {
    name: "GpuContext",
    processEvent: async (n) => {
      if (void 0 === t)
        try {
          const n = await o.app.getGPUInfo(e.infoLevel);
          t = n.gpuDevice.map(i);
        } catch {
          t = [];
        }
      if (1 === t.length) n.contexts = { ...n.contexts, gpu: t[0] };
      else if (t.length > 1) {
        n.contexts = { ...n.contexts };
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          (r.type = "gpu"), (n.contexts[`gpu_${e + 1}`] = r);
        }
      }
      return n;
    },
  };
});
t.gpuContextIntegration = s;

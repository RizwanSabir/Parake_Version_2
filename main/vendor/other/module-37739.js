// vendor/other/module-37739.js — webpack module 37739
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(31421 /* external/node_child_process */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(84157 /* external/electron */),
  s = n(47488 /* vendor/other/module-47488 */),
  a = { screen: !0, deviceModelManufacturer: !1 };
const c = o.defineIntegration((e = {}) => {
  const t = {};
  let n = e.deviceModelManufacturer;
  const o = { ...a, ...e };
  function c() {
    const e = i.screen.getPrimaryDisplay(),
      n = Math.floor(e.size.width * e.scaleFactor),
      r = Math.floor(e.size.height * e.scaleFactor);
    (t.screen_density = e.scaleFactor), (t.screen_resolution = `${n}x${r}`);
  }
  return {
    name: "AdditionalContext",
    setup() {
      o.screen &&
        i.app.whenReady().then(
          () => {
            c(),
              i.screen.on("display-metrics-changed", () => {
                c();
              });
          },
          () => {},
        );
    },
    processEvent: async (e) => (
      n &&
        ((n = !1),
        await (async function () {
          const { manufacturer: e, model: n } = await ("win32" ===
          process.platform
            ? new Promise((e) => {
                try {
                  r.exec(
                    'powershell -NoProfile "Get-CimInstance -ClassName Win32_ComputerSystem | ConvertTo-Json"',
                    (t, n) => {
                      t && e({});
                      try {
                        const t = JSON.parse(n);
                        if (t.Manufacturer || t.Model)
                          return void e({
                            manufacturer: t.Manufacturer,
                            model: t.Model,
                          });
                      } catch {}
                      e({});
                    },
                  );
                } catch {
                  e({});
                }
              })
            : "darwin" === process.platform
              ? new Promise((e) => {
                  try {
                    r.exec(
                      "system_profiler SPHardwareDataType -json",
                      (t, n) => {
                        t && e({});
                        try {
                          const t = JSON.parse(n.trim());
                          if (t.SPHardwareDataType?.[0]?.machine_model)
                            return void e({
                              manufacturer: "Apple",
                              model: t.SPHardwareDataType[0].machine_model,
                            });
                        } catch {}
                        e({});
                      },
                    );
                  } catch {
                    e({});
                  }
                })
              : Promise.resolve({}));
          (e || n) && ((t.manufacturer = e), (t.model = n));
        })()),
      s.mergeEvents(e, { contexts: { device: t } })
    ),
  };
});
t.additionalContextIntegration = c;

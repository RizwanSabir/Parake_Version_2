// vendor/other/module-91588.js — webpack module 91588
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(3327 /* vendor/other/module-3327 */),
  s = n(47488 /* vendor/other/module-47488 */),
  a = r.defineIntegration(() => ({
    name: "ElectronContext",
    processEvent(e, t, n) {
      delete e.contexts?.runtime,
        delete e.contexts?.app?.app_memory,
        e.request?.headers && delete e.request.headers["User-Agent"];
      const {
        release: r = i.getDefaultReleaseName(),
        environment: a = i.getDefaultEnvironment(),
      } = n.getOptions();
      return s.mergeEvents(
        {
          contexts: {
            app: {
              app_name: o.app.name || o.app.getName(),
              app_version: o.app.getVersion(),
              build_type: process.mas
                ? "app-store"
                : process.windowsStore
                  ? "windows-store"
                  : void 0,
              app_memory: o.app
                .getAppMetrics()
                .reduce((e, t) => e + 1024 * t.memory.workingSetSize, 0),
              app_arch: process.arch,
            },
            browser: { name: "Chrome" },
            chrome: {
              name: "Chrome",
              type: "runtime",
              version: process.versions.chrome,
            },
            device: { family: "Desktop" },
            node: {
              name: "Node",
              type: "runtime",
              version: process.versions.node,
            },
            runtime: {
              name: "Electron",
              version: process.versions.electron,
            },
          },
          environment: a,
          release: r,
          tags: {
            "event.origin": "electron",
            "event.environment": "javascript",
            "event.process": "browser",
          },
        },
        e,
      );
    },
  }));
t.electronContextIntegration = a;

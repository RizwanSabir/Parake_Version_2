// vendor/sentry/preload-injection.js — webpack module 28219
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(79896 /* external/fs */),
  s = n(16928 /* external/path */),
  a = n(87016 /* external/url */),
  c = n(41302 /* vendor/other/module-41302 */),
  u = n(10342 /* vendor/sentry/electron-constants */);
var l = "undefined" != typeof document ? document.currentScript : null;
const d = r.defineIntegration(() => ({
  name: "PreloadInjection",
  setup(e) {
    const t = e.getOptions();
    0 !== (t.ipcMode & c.IPCMode.Classic) &&
      o.app.once("ready", () => {
        const e = (function () {
          try {
            return 73727;
          } catch {
            try {
              const e = a.fileURLToPath(
                "undefined" == typeof document
                  ? n(87016 /* external/url */).pathToFileURL(__filename).href
                  : (l && "SCRIPT" === l.tagName.toUpperCase() && l.src) ||
                      new URL(
                        "main/integrations/preload-injection.js",
                        document.baseURI,
                      ).href,
              );
              return s.resolve(
                e,
                "..",
                "..",
                "..",
                "..",
                "preload",
                "default.js",
              );
            } catch {}
          }
        })();
        if (e && "string" == typeof e && s.isAbsolute(e) && i.existsSync(e))
          for (const n of t.getSessions()) u.setPreload(n, e);
        else
          r.debug.log(
            "The preload script could not be injected automatically. This is most likely caused by bundling of the main process",
          );
      });
  },
}));
t.preloadInjectionIntegration = d;

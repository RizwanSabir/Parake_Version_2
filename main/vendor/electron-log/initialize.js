// vendor/electron-log/initialize.js — webpack module 60658
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(79896 /* external/fs */),
  o = n(70857 /* external/os */),
  i = n(16928 /* external/path */),
  s = n(81355 /* vendor/electron-log/renderer-preload */);
let a = !1,
  c = !1;
e.exports = {
  initialize({
    externalApi: e,
    getSessions: t,
    includeFutureSession: n,
    logger: u,
    preload: l = !0,
    spyRendererConsole: d = !1,
  }) {
    e.onAppReady(() => {
      try {
        l &&
          (function ({
            externalApi: e,
            getSessions: t,
            includeFutureSession: n,
            logger: c,
            preloadOption: u,
          }) {
            let l = "string" == typeof u ? u : void 0;
            if (a)
              c.warn(
                new Error("log.initialize({ preload }) already called").stack,
              );
            else {
              a = !0;
              try {
                l = i.resolve(__dirname, "../renderer/electron-log-preload.js");
              } catch {}
              if (!l || !r.existsSync(l)) {
                l = i.join(
                  e.getAppUserDataPath() || o.tmpdir(),
                  "electron-log-preload.js",
                );
                const t = `\n      try {\n        (${s.toString()})(require('electron'));\n      } catch(e) {\n        console.error(e);\n      }\n    `;
                r.writeFileSync(l, t, "utf8");
              }
              e.setPreloadFileForSessions({
                filePath: l,
                includeFutureSession: n,
                getSessions: t,
              });
            }
          })({
            externalApi: e,
            getSessions: t,
            includeFutureSession: n,
            logger: u,
            preloadOption: l,
          }),
          d &&
            (function ({ externalApi: e, logger: t }) {
              if (c)
                return void t.warn(
                  new Error(
                    "log.initialize({ spyRendererConsole }) already called",
                  ).stack,
                );
              c = !0;
              const n = ["debug", "info", "warn", "error"];
              e.onEveryWebContentsEvent("console-message", (e, r, o) => {
                t.processMessage({
                  data: [o],
                  level: n[r],
                  variables: { processType: "renderer" },
                });
              });
            })({ externalApi: e, logger: u });
      } catch (e) {
        u.warn(e);
      }
    });
  },
};

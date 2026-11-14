// vendor/sentry/electron-constants.js — webpack module 10342
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(16928 /* external/path */),
  s = n(41302 /* vendor/other/module-41302 */),
  a = r.parseSemver(process.versions.electron),
  c = {
    major: a.major || 0,
    minor: a.minor || 0,
    patch: a.patch || 0,
  },
  u = c.major;
(t.CRASH_REASONS = ["crashed", "oom"]),
  (t.ELECTRON_MAJOR_VERSION = u),
  (t.EXIT_REASONS = [
    "clean-exit",
    "abnormal-exit",
    "killed",
    "crashed",
    "oom",
    "launch-failed",
    "integrity-failure",
  ]),
  (t.getSentryCachePath = function () {
    return i.join(o.app.getPath("userData"), "sentry");
  }),
  (t.registerProtocol = function (e, t, n) {
    c.major >= 25
      ? e.handle(
          t,
          async (e) => (
            n({
              windowId: e.headers.get(s.RENDERER_ID_HEADER) || void 0,
              url: e.url,
              body: Buffer.from(await e.arrayBuffer()),
            }),
            new Response("")
          ),
        )
      : e.registerStringProtocol(t, (e, t) => {
          n({
            windowId: e.headers[s.RENDERER_ID_HEADER],
            url: e.url,
            body: e.uploadData?.[0]?.bytes,
          }),
            t("");
        });
  }),
  (t.setPreload = function (e, t) {
    if (e.registerPreloadScript)
      e.registerPreloadScript({ type: "frame", filePath: t });
    else {
      const n = e.getPreloads();
      e.setPreloads([t, ...n]);
    }
  });

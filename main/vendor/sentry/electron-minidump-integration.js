// vendor/sentry/electron-minidump-integration.js — webpack module 34798
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(20008 /* vendor/other/module-20008 */),
  s = n(3327 /* vendor/other/module-3327 */),
  a = n(10342 /* vendor/sentry/electron-constants */),
  c = n(47488 /* vendor/other/module-47488 */),
  u = n(74031 /* vendor/other/module-74031 */),
  l = n(66383 /* vendor/sentry/session-tracking */);
function d(e) {
  return void 0 !== e && Object.keys(e).length > 0;
}
function p(e) {
  const t = i.getScopeData();
  return t
    ? {
        release: e.release,
        environment: e.environment,
        ...(d(t.user) && { user: t.user }),
        ...(d(t.tags) && { tags: t.tags }),
        ...(d(t.extra) && { extra: t.extra }),
      }
    : {};
}
const f = r.defineIntegration(() => {
  let e = 0,
    t = 0;
  return {
    name: "ElectronMinidump",
    setup(n) {
      if (process.mas) return;
      const d = n.getOptions();
      if (!d?.dsn)
        throw new Error(
          "Attempted to enable Electron native crash reporter but no DSN was supplied",
        );
      !(function (e) {
        const t = (function (e) {
          const t = r.makeDsn(e);
          if (!t) return;
          const {
            host: n,
            path: o,
            projectId: i,
            port: s,
            protocol: a,
            publicKey: c,
          } = t;
          return `${a}://${n}${"" !== s ? `:${s}` : ""}${"" !== o ? `/${o}` : ""}/api/${i}/minidump/?sentry_key=${c}`;
        })(e.dsn || "");
        if (!t)
          return void r.debug.log(
            "Invalid DSN. Cannot start Electron crashReporter",
          );
        const n = { sentry___initialScope: JSON.stringify(p(e)) };
        r.debug.log("Starting Electron crashReporter"),
          o.crashReporter.start({
            companyName: "",
            ignoreSystemCrashHandler: !0,
            productName: o.app.name || o.app.getName(),
            submitURL: t,
            uploadToServer: !0,
            compress: !0,
            globalExtra: n,
          });
      })(d),
        o.app.on("render-process-gone", (e, t, n) => {
          a.CRASH_REASONS.includes(n.reason) && l.sessionCrashed();
        }),
        (function (n) {
          i.addScopeListener((i) => {
            !(function (n, i) {
              e += 1;
              const a = e;
              (async function (e, t) {
                const { userInfo: n } = e.getDataCollectionOptions(),
                  i = c.mergeEvents(await s.getEventDefaults(e), {
                    sdk: s.getSdkInfo(n),
                    event_id: r.uuid4(),
                    level: "fatal",
                    platform: "native",
                    tags: { "event.environment": "native" },
                  });
                return (
                  r.applyScopeDataToEvent(i, t),
                  delete i.sdkProcessingMetadata,
                  u.normalizePaths(i, o.app.getAppPath())
                );
              })(n, i)
                .then((n) => {
                  if (a !== e) return;
                  const r = (function (e) {
                      const t = 20300;
                      let n = Buffer.from(JSON.stringify(e));
                      const r = [];
                      for (; n.length; ) {
                        let e = n.lastIndexOf(34, 20301);
                        e < 0 && (e = n.lastIndexOf(32, 20301)),
                          e < 0 && (e = n.indexOf(34, t)),
                          e < 0 && (e = n.indexOf(32, t)),
                          e < 0 && (e = t),
                          r.push(n.subarray(0, e + 1).toString()),
                          (n = n.subarray(e + 1));
                      }
                      return r.reduce(
                        (e, t, n) => ((e[`sentry__${n + 1}`] = t), e),
                        {},
                      );
                    })(n),
                    i = Object.keys(r).length;
                  if (t > i)
                    for (let e = i + 1; e <= t; e++)
                      o.crashReporter.removeExtraParameter(`sentry__${e}`);
                  for (const [e, t] of Object.entries(r))
                    o.crashReporter.addExtraParameter(e, t);
                  t = i;
                })
                .catch((e) => r.debug.error(e));
            })(n, i);
          });
        })(n),
        l
          .unreportedDuringLastSession(
            o.crashReporter.getLastCrashReport()?.date,
          )
          .then((e) => l.checkPreviousSession(e), r.debug.error);
    },
  };
});
t.electronMinidumpIntegration = f;

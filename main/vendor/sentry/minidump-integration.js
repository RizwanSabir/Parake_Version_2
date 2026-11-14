// vendor/sentry/minidump-integration.js — webpack module 51686
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(22608 /* vendor/other/module-22608 */),
  i = n(84157 /* external/electron */),
  s = n(20008 /* vendor/other/module-20008 */),
  a = n(3327 /* vendor/other/module-3327 */),
  c = n(10342 /* vendor/sentry/electron-constants */),
  u = n(89840 /* vendor/other/module-89840 */),
  l = n(66383 /* vendor/sentry/session-tracking */),
  d = n(25141 /* vendor/other/module-25141 */),
  p = n(38033 /* vendor/sentry/minidump-loader */),
  f = n(77577 /* vendor/other/module-77577 */),
  h = r.createStackParser(o.chromeStackLineParser),
  g = r.defineIntegration((e = {}) => {
    let t,
      n,
      o,
      g = e.maxMinidumpsPerSession || 10;
    async function m(e, t) {
      g <= 0 &&
        r.debug.log("Not sending minidumps because the limit has been reached");
      const n = !1 === e.getOptions().enabled || g <= 0;
      let i = !1;
      return (
        await o?.(n, async (e, n) => {
          if (f.shouldDropMinidump(e.crashpadAnnotations))
            return void r.debug.log(
              "Dropping DumpWithoutCrashing minidump as it is not a real crash",
            );
          i = !0;
          const o = e.crashpadAnnotations?.process_type?.replace(
              "-process",
              "",
            ),
            s = await t(o);
          if (e.crashpadAnnotations) {
            const t = Object.entries(e.crashpadAnnotations).reduce(
              (e, [t, n]) => ((e[`crashpad.${t}`] = n), e),
              {},
            );
            if (
              ((s.contexts = {
                ...s.contexts,
                electron: { ...s.contexts?.electron, ...t },
              }),
              e.crashpadAnnotations["electron.v8-oom.stack"])
            ) {
              delete s?.contexts?.electron?.["crashpad.electron.v8-oom.stack"],
                delete s?.contexts?.electron?.["crashpad.v8-oom-stack"];
              const t = e.crashpadAnnotations["electron.v8-oom.stack"].replace(
                /^ *#\d+/gm,
                "  at",
              );
              s.exception = {
                values: [
                  {
                    type: "OutOfMemoryError",
                    value: "Renderer reached heap limit",
                    stacktrace: { frames: h(t) },
                  },
                ],
              };
            }
          }
          g > 0 && ((g -= 1), r.captureEvent(s, { attachments: [n] }));
        }),
        i
      );
    }
    return {
      name: "SentryMinidump",
      setup(e) {
        if (process.mas) return;
        r.debug.log("Starting Electron crashReporter"),
          i.crashReporter.start({
            companyName: "",
            ignoreSystemCrashHandler: !0,
            productName: i.app.name || i.app.getName(),
            submitURL: "https://f.a.k/e",
            uploadToServer: !1,
            compress: !0,
          }),
          (t = new d.BufferedWriteStore(c.getSentryCachePath(), "scope_v3", {
            scope: new r.Scope().getScopeData(),
          })),
          (n = t.get());
        try {
          o = p.getMinidumpLoader();
        } catch (e) {
          r.debug.error("Failed to create minidump loader", e);
        }
        const f = e.getOptions();
        if (
          ((function (e) {
            function n(n) {
              setImmediate(async () =>
                t?.set({
                  scope: n,
                  event: await a.getEventDefaults(e),
                }),
              );
            }
            s.addScopeListener((e) => {
              n(e);
            }),
              n(s.getScopeData());
          })(e),
          !f?.dsn)
        )
          throw new Error(
            "Attempted to enable Electron native crash reporter but no DSN was supplied",
          );
        let h;
        u.trackRendererProperties(),
          i.app.on("render-process-gone", async (t, n, o) => {
            c.EXIT_REASONS.includes(o.reason) &&
              (await (async function (e, t, n, o) {
                const { getRendererName: i } = t;
                await m(e, (e) => {
                  const t = ("renderer" === e && i ? i(n) : e) || "unknown";
                  return (
                    r.debug.log(`'${t}' process '${o.reason}'`),
                    {
                      contexts: {
                        electron: {
                          crashed_url:
                            u.getRendererProperties(n.id)?.url || "unknown",
                          details: o,
                        },
                      },
                      level: "fatal",
                      platform: "native",
                      tags: {
                        "event.environment": "native",
                        "event.process": t,
                        "exit.reason": o.reason,
                      },
                    }
                  );
                });
              })(e, f, n, o));
          }),
          i.app.on("child-process-gone", async (t, n) => {
            c.EXIT_REASONS.includes(n.reason) &&
              (await (async function (e, t) {
                r.debug.log(`${t.type} process has ${t.reason}`),
                  await m(e, (e) => ({
                    contexts: { electron: { details: t } },
                    level: "fatal",
                    platform: "native",
                    tags: {
                      "event.environment": "native",
                      "event.process": e || t.type,
                      "exit.reason": t.reason,
                    },
                  }));
              })(e, n));
          }),
          m(e, async (t) => {
            const o = {
                level: "fatal",
                platform: "native",
                tags: {
                  "event.environment": "native",
                  "event.process": t || "unknown",
                },
              },
              i = await n;
            return (
              i &&
                (i.scope && r.applyScopeDataToEvent(o, i.scope),
                (o.release = i.event?.release),
                (o.environment = i.event?.environment),
                (o.contexts = i.event?.contexts),
                (o.sdkProcessingMetadata = {
                  dynamicSamplingContext: {
                    trace_id: i.scope.propagationContext.traceId,
                    release: i.event?.release,
                    environment: i.event?.environment,
                    public_key: e.getDsn()?.publicKey,
                  },
                })),
              (h = await l.setPreviousSessionAsCurrent()),
              o
            );
          })
            .then(async (e) => {
              e
                ? h && l.restorePreviousSession(h)
                : await l.previousSessionWasAbnormal();
            })
            .catch((e) => r.debug.error(e));
      },
    };
  });
t.sentryMinidumpIntegration = g;

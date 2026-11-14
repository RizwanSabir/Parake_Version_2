// vendor/other/module-64104.js — webpack module 64104
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(59678 /* vendor/other/module-59678 */);
t.instrumentNodeCron = function (e, t = {}) {
  return new Proxy(e, {
    get: (e, n) =>
      "schedule" === n && e.schedule
        ? new Proxy(e.schedule, {
            apply(e, n, i) {
              const [s, a, c] = i,
                u = c?.name,
                l = c?.timezone;
              if (!u)
                throw new Error(
                  'Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.',
                );
              return e.apply(n, [
                s,
                async (...e) =>
                  r.withMonitor(
                    u,
                    async () => {
                      try {
                        return await a(...e);
                      } catch (e) {
                        throw (
                          (r.captureException(e, {
                            mechanism: {
                              handled: !1,
                              type: "auto.function.node-cron.instrumentNodeCron",
                            },
                          }),
                          e)
                        );
                      }
                    },
                    {
                      schedule: {
                        type: "crontab",
                        value: o.replaceCronNames(s),
                      },
                      timezone: l,
                      ...t,
                    },
                  ),
                c,
              ]);
            },
          })
        : e[n],
  });
};

// vendor/other/module-75951.js — webpack module 75951
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(59678 /* vendor/other/module-59678 */),
  i = "Automatic instrumentation of CronJob only supports crontab string";
t.instrumentCron = function (e, t) {
  let n = !1;
  return new Proxy(e, {
    construct(e, s) {
      const [a, c, u, l, d, ...p] = s;
      if ("string" != typeof a) throw new Error(i);
      if (n) throw new Error(`A job named '${t}' has already been scheduled`);
      n = !0;
      const f = o.replaceCronNames(a);
      return new e(
        a,
        async function (e, n) {
          return r.withMonitor(
            t,
            async () => {
              try {
                await c(e, n);
              } catch (e) {
                throw (
                  (r.captureException(e, {
                    mechanism: {
                      handled: !1,
                      type: "auto.function.cron.instrumentCron",
                    },
                  }),
                  e)
                );
              }
            },
            {
              schedule: { type: "crontab", value: f },
              timezone: d || void 0,
            },
          );
        },
        u,
        l,
        d,
        ...p,
      );
    },
    get: (e, s) =>
      "from" === s
        ? (s) => {
            const { cronTime: a, onTick: c, timeZone: u } = s;
            if ("string" != typeof a) throw new Error(i);
            if (n)
              throw new Error(`A job named '${t}' has already been scheduled`);
            n = !0;
            const l = o.replaceCronNames(a);
            return (
              (s.onTick = async (e, n) =>
                r.withMonitor(
                  t,
                  async () => {
                    try {
                      await c(e, n);
                    } catch (e) {
                      throw (
                        (r.captureException(e, {
                          mechanism: {
                            handled: !1,
                            type: "auto.function.cron.instrumentCron",
                          },
                        }),
                        e)
                      );
                    }
                  },
                  {
                    schedule: { type: "crontab", value: l },
                    timezone: u || void 0,
                  },
                )),
              e.from(s)
            );
          }
        : e[s],
  });
};

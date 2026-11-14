// vendor/other/module-39145.js — webpack module 39145
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(59678 /* vendor/other/module-59678 */);
t.instrumentNodeSchedule = function (e) {
  return new Proxy(e, {
    get: (e, t) =>
      "scheduleJob" === t
        ? new Proxy(e.scheduleJob, {
            apply(e, t, n) {
              const [i, s, a] = n;
              if (
                "string" != typeof i ||
                "string" != typeof s ||
                "function" != typeof a
              )
                throw new Error(
                  "Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string",
                );
              const c = i,
                u = s;
              return e.apply(t, [
                c,
                u,
                async function () {
                  return r.withMonitor(
                    c,
                    async () => {
                      await a?.();
                    },
                    {
                      schedule: {
                        type: "crontab",
                        value: o.replaceCronNames(u),
                      },
                    },
                  );
                },
              ]);
            },
          })
        : e[t],
  });
};

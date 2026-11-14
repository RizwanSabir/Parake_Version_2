// vendor/other/module-81702.js — webpack module 81702
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(15946 /* vendor/other/module-15946 */),
  i = n(14118 /* vendor/other/module-14118 */),
  s = n(82579 /* vendor/other/module-82579 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(82615 /* vendor/other/module-82615 */),
  u = n(94284 /* vendor/other/module-94284 */),
  l = n(75122 /* vendor/other/module-75122 */),
  d = n(27352 /* vendor/other/module-27352 */),
  p = s.defineIntegration((e = {}) => {
    const t = e.levels || a.CONSOLE_LEVELS,
      n = e.handled ?? !0;
    return {
      name: "CaptureConsole",
      setup(e) {
        "console" in d.GLOBAL_OBJ &&
          i.addConsoleInstrumentationHandler(({ args: i, level: s }) => {
            r.getClient() === e &&
              t.includes(s) &&
              (function (e, t, n) {
                const i = u.severityLevelFromString(t),
                  s = new Error(),
                  a = {
                    level: u.severityLevelFromString(t),
                    extra: { arguments: e },
                  };
                r.withScope((r) => {
                  if (
                    (r.addEventProcessor(
                      (e) => (
                        (e.logger = "console"),
                        c.addExceptionMechanism(e, {
                          handled: n,
                          type: "auto.core.capture_console",
                        }),
                        e
                      ),
                    ),
                    "assert" === t)
                  ) {
                    if (!e[0]) {
                      const t = `Assertion failed: ${l.safeJoin(e.slice(1), " ") || "console.assert"}`;
                      r.setExtra("arguments", e.slice(1)),
                        r.captureMessage(t, i, {
                          captureContext: a,
                          syntheticException: s,
                        });
                    }
                    return;
                  }
                  const u = e.find((e) => e instanceof Error);
                  if (u) return void o.captureException(u, a);
                  const d = l.safeJoin(e, " ");
                  r.captureMessage(d, i, {
                    captureContext: a,
                    syntheticException: s,
                  });
                });
              })(i, s, n);
          });
      },
    };
  });
t.captureConsoleIntegration = p;

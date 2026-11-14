// vendor/module-81702.js — webpack module 81702
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(15946 /* vendor/module-15946 */),
  i = n(14118 /* vendor/module-14118 */),
  a = n(82579 /* vendor/module-82579 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(82615 /* vendor/module-82615 */),
  c = n(94284 /* vendor/module-94284 */),
  u = n(75122 /* vendor/module-75122 */),
  d = n(27352 /* vendor/module-27352 */),
  p = a.defineIntegration((e = {}) => {
    const t = e.levels || s.CONSOLE_LEVELS,
      n = e.handled ?? !0;
    return {
      name: "CaptureConsole",
      setup(e) {
        "console" in d.GLOBAL_OBJ &&
          i.addConsoleInstrumentationHandler(({ args: i, level: a }) => {
            r.getClient() === e &&
              t.includes(a) &&
              (function (e, t, n) {
                const i = c.severityLevelFromString(t),
                  a = new Error(),
                  s = {
                    level: c.severityLevelFromString(t),
                    extra: { arguments: e },
                  };
                r.withScope((r) => {
                  if (
                    (r.addEventProcessor(
                      (e) => (
                        (e.logger = "console"),
                        l.addExceptionMechanism(e, {
                          handled: n,
                          type: "auto.core.capture_console",
                        }),
                        e
                      ),
                    ),
                    "assert" === t)
                  ) {
                    if (!e[0]) {
                      const t = `Assertion failed: ${u.safeJoin(e.slice(1), " ") || "console.assert"}`;
                      r.setExtra("arguments", e.slice(1)),
                        r.captureMessage(t, i, {
                          captureContext: s,
                          syntheticException: a,
                        });
                    }
                    return;
                  }
                  const c = e.find((e) => e instanceof Error);
                  if (c) return void o.captureException(c, s);
                  const d = u.safeJoin(e, " ");
                  r.captureMessage(d, i, {
                    captureContext: s,
                    syntheticException: a,
                  });
                });
              })(i, a, n);
          });
      },
    };
  });
t.captureConsoleIntegration = p;

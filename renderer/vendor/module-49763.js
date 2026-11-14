// vendor/module-49763.js — webpack module 49763
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(14118 /* vendor/module-14118 */),
  a = n(82579 /* vendor/module-82579 */),
  s = n(12724 /* vendor/module-12724 */),
  l = n(58637 /* vendor/module-58637 */),
  c = n(23295 /* vendor/module-23295 */),
  u = n(8888 /* vendor/module-8888 */),
  d = n(92236 /* vendor/module-92236 */),
  p = n(7492 /* vendor/module-7492 */),
  f = { [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" },
  h = a.defineIntegration((e = {}) => {
    const t = e.levels || l.CONSOLE_LEVELS;
    return {
      name: "ConsoleLogs",
      setup(e) {
        const {
          enableLogs: n,
          normalizeDepth: a = 3,
          normalizeMaxBreadth: s = 1e3,
        } = e.getOptions();
        if (!n)
          return void (
            o.DEBUG_BUILD &&
            l.debug.warn(
              "`enableLogs` is not enabled, ConsoleLogs integration disabled",
            )
          );
        const h = i.addConsoleInstrumentationHandler(
          ({ args: n, level: o }) => {
            if (r.getClient() !== e || !t.includes(o)) return;
            const i = n[0],
              l = n.slice(1);
            if ("assert" === o) {
              if (!i) {
                const e =
                  l.length > 0
                    ? `Assertion failed: ${p.formatConsoleArgs(l, a, s)}`
                    : "Assertion failed";
                d._INTERNAL_captureLog({
                  level: "error",
                  message: e,
                  attributes: f,
                });
              }
              return;
            }
            const h = "log" === o,
              m = { ...f };
            if (c.isPlainObject(i)) {
              Object.assign(m, u.normalize(i, a, s));
              const e = "string" == typeof n[1] ? 2 : 1;
              n.slice(e).forEach((e, t) => {
                m[`sentry.message.parameter.${t}`] = u.normalize(e, a, s);
              });
            } else if (
              l.length > 0 &&
              "string" == typeof i &&
              !p.hasConsoleSubstitutions(i)
            ) {
              const e = p.createConsoleTemplateAttributes(i, l);
              for (const [t, n] of Object.entries(e))
                m[t] = t.startsWith("sentry.message.parameter.")
                  ? u.normalize(n, a, s)
                  : n;
            }
            d._INTERNAL_captureLog({
              level: h ? "info" : o,
              message: p.formatConsoleArgs(n, a, s),
              severityNumber: h ? 10 : void 0,
              attributes: m,
            });
          },
        );
        e.registerCleanup(h);
      },
    };
  });
t.consoleLoggingIntegration = h;

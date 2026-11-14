// vendor/other/module-49763.js — webpack module 49763
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(14118 /* vendor/other/module-14118 */),
  s = n(82579 /* vendor/other/module-82579 */),
  a = n(12724 /* vendor/other/module-12724 */),
  c = n(58637 /* vendor/other/module-58637 */),
  u = n(23295 /* vendor/other/module-23295 */),
  l = n(8888 /* vendor/other/module-8888 */),
  d = n(92236 /* vendor/other/module-92236 */),
  p = n(7492 /* vendor/other/module-7492 */),
  f = { [a.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console" },
  h = s.defineIntegration((e = {}) => {
    const t = e.levels || c.CONSOLE_LEVELS;
    return {
      name: "ConsoleLogs",
      setup(e) {
        const {
          enableLogs: n,
          normalizeDepth: s = 3,
          normalizeMaxBreadth: a = 1e3,
        } = e.getOptions();
        if (!n)
          return void (
            o.DEBUG_BUILD &&
            c.debug.warn(
              "`enableLogs` is not enabled, ConsoleLogs integration disabled",
            )
          );
        const h = i.addConsoleInstrumentationHandler(
          ({ args: n, level: o }) => {
            if (r.getClient() !== e || !t.includes(o)) return;
            const i = n[0],
              c = n.slice(1);
            if ("assert" === o) {
              if (!i) {
                const e =
                  c.length > 0
                    ? `Assertion failed: ${p.formatConsoleArgs(c, s, a)}`
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
              g = { ...f };
            if (u.isPlainObject(i)) {
              Object.assign(g, l.normalize(i, s, a));
              const e = "string" == typeof n[1] ? 2 : 1;
              n.slice(e).forEach((e, t) => {
                g[`sentry.message.parameter.${t}`] = l.normalize(e, s, a);
              });
            } else if (
              c.length > 0 &&
              "string" == typeof i &&
              !p.hasConsoleSubstitutions(i)
            ) {
              const e = p.createConsoleTemplateAttributes(i, c);
              for (const [t, n] of Object.entries(e))
                g[t] = t.startsWith("sentry.message.parameter.")
                  ? l.normalize(n, s, a)
                  : n;
            }
            d._INTERNAL_captureLog({
              level: h ? "info" : o,
              message: p.formatConsoleArgs(n, s, a),
              severityNumber: h ? 10 : void 0,
              attributes: g,
            });
          },
        );
        e.registerCleanup(h);
      },
    };
  });
t.consoleLoggingIntegration = h;

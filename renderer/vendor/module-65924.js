// vendor/module-65924.js — webpack module 65924
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/module-52891 */),
  o = n(76041 /* vendor/module-76041 */),
  i = n(14118 /* vendor/module-14118 */),
  a = n(82579 /* vendor/module-82579 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(94284 /* vendor/module-94284 */),
  c = n(75122 /* vendor/module-75122 */),
  u = n(27352 /* vendor/module-27352 */),
  d = a.defineIntegration((e = {}) => {
    const t = new Set(e.levels || s.CONSOLE_LEVELS);
    return {
      name: "Console",
      setup(n) {
        const r = i.addConsoleInstrumentationHandler(
          ({ args: e, level: r }) => {
            o.getClient() === n && t.has(r) && p(r, e);
          },
        );
        if ((n.registerCleanup(r), e.filter)) {
          const t = i.addConsoleInstrumentationFilter(e.filter);
          n.registerCleanup(t);
        }
      },
    };
  });
function p(e, t) {
  const n = {
    category: "console",
    data: { arguments: t, logger: "console" },
    level: l.severityLevelFromString(e),
    message: f(t),
  };
  if ("assert" === e) {
    if (!1 !== t[0]) return;
    {
      const e = t.slice(1);
      (n.message =
        e.length > 0 ? `Assertion failed: ${f(e)}` : "Assertion failed"),
        (n.data.arguments = e);
    }
  }
  r.addBreadcrumb(n, { input: t, level: e });
}
function f(e) {
  return "util" in u.GLOBAL_OBJ && "function" == typeof u.GLOBAL_OBJ.util.format
    ? u.GLOBAL_OBJ.util.format(...e)
    : c.safeJoin(e, " ");
}
(t.addConsoleBreadcrumb = p), (t.consoleIntegration = d);

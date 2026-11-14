// vendor/other/module-65924.js — webpack module 65924
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/other/module-52891 */),
  o = n(76041 /* vendor/other/module-76041 */),
  i = n(14118 /* vendor/other/module-14118 */),
  s = n(82579 /* vendor/other/module-82579 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(94284 /* vendor/other/module-94284 */),
  u = n(75122 /* vendor/other/module-75122 */),
  l = n(27352 /* vendor/other/module-27352 */),
  d = s.defineIntegration((e = {}) => {
    const t = new Set(e.levels || a.CONSOLE_LEVELS);
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
    level: c.severityLevelFromString(e),
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
  return "util" in l.GLOBAL_OBJ && "function" == typeof l.GLOBAL_OBJ.util.format
    ? l.GLOBAL_OBJ.util.format(...e)
    : u.safeJoin(e, " ");
}
(t.addConsoleBreadcrumb = p), (t.consoleIntegration = d);

// vendor/other/module-14118.js — webpack module 14118
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(68020 /* vendor/other/module-68020 */),
  s = n(75122 /* vendor/other/module-75122 */),
  a = n(27352 /* vendor/other/module-27352 */),
  c = n(64338 /* vendor/other/module-64338 */),
  u = new Set([]),
  l = new Set();
function d() {
  "console" in a.GLOBAL_OBJ &&
    o.CONSOLE_LEVELS.forEach(function (e) {
      !l.has(e) &&
        e in a.GLOBAL_OBJ.console &&
        (l.add(e),
        i.fill(a.GLOBAL_OBJ.console, e, function (t) {
          return (
            (o.originalConsoleMethods[e] = t),
            function (...t) {
              const n = t[0],
                i = o.originalConsoleMethods[e],
                l =
                  u.size &&
                  "string" == typeof n &&
                  s.stringMatchesSomePattern(n, u);
              l || c.triggerHandlers("console", { args: t, level: e }),
                (!l || (r.DEBUG_BUILD && o.debug.isEnabled())) &&
                  i?.apply(a.GLOBAL_OBJ.console, t);
            }
          );
        }));
    });
}
(t.addConsoleInstrumentationFilter = function (e) {
  for (const t of e) u.add(t);
  return () => {
    for (const t of e) u.delete(t);
  };
}),
  (t.addConsoleInstrumentationHandler = function (e) {
    const t = "console",
      n = c.addHandler(t, e);
    return c.maybeInstrument(t, d), n;
  }),
  (t.instrumentConsole = d);

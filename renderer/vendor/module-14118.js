// vendor/module-14118.js — webpack module 14118
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(68020 /* vendor/module-68020 */),
  a = n(75122 /* vendor/module-75122 */),
  s = n(27352 /* vendor/module-27352 */),
  l = n(64338 /* vendor/module-64338 */),
  c = new Set([]),
  u = new Set();
function d() {
  "console" in s.GLOBAL_OBJ &&
    o.CONSOLE_LEVELS.forEach(function (e) {
      !u.has(e) &&
        e in s.GLOBAL_OBJ.console &&
        (u.add(e),
        i.fill(s.GLOBAL_OBJ.console, e, function (t) {
          return (
            (o.originalConsoleMethods[e] = t),
            function (...t) {
              const n = t[0],
                i = o.originalConsoleMethods[e],
                u =
                  c.size &&
                  "string" == typeof n &&
                  a.stringMatchesSomePattern(n, c);
              u || l.triggerHandlers("console", { args: t, level: e }),
                (!u || (r.DEBUG_BUILD && o.debug.isEnabled())) &&
                  i?.apply(s.GLOBAL_OBJ.console, t);
            }
          );
        }));
    });
}
(t.addConsoleInstrumentationFilter = function (e) {
  for (const t of e) c.add(t);
  return () => {
    for (const t of e) c.delete(t);
  };
}),
  (t.addConsoleInstrumentationHandler = function (e) {
    const t = "console",
      n = l.addHandler(t, e);
    return l.maybeInstrument(t, d), n;
  }),
  (t.instrumentConsole = d);

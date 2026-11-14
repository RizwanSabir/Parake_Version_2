// vendor/other/module-64338.js — webpack module 64338
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(57786 /* vendor/other/module-57786 */),
  s = {},
  a = {};
(t.addHandler = function (e, t) {
  return (
    (s[e] = s[e] || []),
    s[e].push(t),
    () => {
      const n = s[e];
      if (n) {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    }
  );
}),
  (t.maybeInstrument = function (e, t) {
    if (!a[e]) {
      a[e] = !0;
      try {
        t();
      } catch (t) {
        r.DEBUG_BUILD && o.debug.error(`Error while instrumenting ${e}`, t);
      }
    }
  }),
  (t.resetInstrumentationHandlers = function () {
    Object.keys(s).forEach((e) => {
      s[e] = void 0;
    });
  }),
  (t.triggerHandlers = function (e, t) {
    const n = e && s[e];
    if (n)
      for (const s of n)
        try {
          s(t);
        } catch (t) {
          r.DEBUG_BUILD &&
            o.debug.error(
              `Error while triggering instrumentation handler.\nType: ${e}\nName: ${i.getFunctionName(s)}\nError:`,
              t,
            );
        }
  });

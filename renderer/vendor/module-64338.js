// vendor/module-64338.js — webpack module 64338
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(57786 /* vendor/module-57786 */),
  a = {},
  s = {};
(t.addHandler = function (e, t) {
  return (
    (a[e] = a[e] || []),
    a[e].push(t),
    () => {
      const n = a[e];
      if (n) {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    }
  );
}),
  (t.maybeInstrument = function (e, t) {
    if (!s[e]) {
      s[e] = !0;
      try {
        t();
      } catch (t) {
        r.DEBUG_BUILD && o.debug.error(`Error while instrumenting ${e}`, t);
      }
    }
  }),
  (t.resetInstrumentationHandlers = function () {
    Object.keys(a).forEach((e) => {
      a[e] = void 0;
    });
  }),
  (t.triggerHandlers = function (e, t) {
    const n = e && a[e];
    if (n)
      for (const a of n)
        try {
          a(t);
        } catch (t) {
          r.DEBUG_BUILD &&
            o.debug.error(
              `Error while triggering instrumentation handler.\nType: ${e}\nName: ${i.getFunctionName(a)}\nError:`,
              t,
            );
        }
  });

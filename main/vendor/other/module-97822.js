// vendor/other/module-97822.js — webpack module 97822
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(62665 /* vendor/other/module-62665 */),
  i = r.defineIntegration((e = {}) => {
    const t = e.limit || 5,
      n = e.key || "cause";
    return {
      name: "LinkedErrors",
      preprocessEvent(e, i, s) {
        const a = s.getOptions();
        r.applyAggregateErrorsToEvent(
          o.exceptionFromError,
          a.stackParser,
          n,
          t,
          e,
          i,
        );
      },
    };
  });
t.linkedErrorsIntegration = i;

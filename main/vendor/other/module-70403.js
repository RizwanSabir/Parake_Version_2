// vendor/other/module-70403.js — webpack module 70403
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/other/module-82579 */),
  o = n(91374 /* vendor/other/module-91374 */),
  i = n(73868 /* vendor/other/module-73868 */),
  s = r.defineIntegration((e = {}) => {
    const t = e.limit || 5,
      n = e.key || "cause";
    return {
      name: "LinkedErrors",
      preprocessEvent(e, r, s) {
        const a = s.getOptions();
        o.applyAggregateErrorsToEvent(
          i.exceptionFromError,
          a.stackParser,
          n,
          t,
          e,
          r,
        );
      },
    };
  });
t.linkedErrorsIntegration = s;

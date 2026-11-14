// vendor/module-97822.js — webpack module 97822
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(62665 /* vendor/module-62665 */),
  i = r.defineIntegration((e = {}) => {
    const t = e.limit || 5,
      n = e.key || "cause";
    return {
      name: "LinkedErrors",
      preprocessEvent(e, i, a) {
        const s = a.getOptions();
        r.applyAggregateErrorsToEvent(
          o.exceptionFromError,
          s.stackParser,
          n,
          t,
          e,
          i,
        );
      },
    };
  });
t.linkedErrorsIntegration = i;

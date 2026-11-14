// vendor/module-70403.js — webpack module 70403
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/module-82579 */),
  o = n(91374 /* vendor/module-91374 */),
  i = n(73868 /* vendor/module-73868 */),
  a = r.defineIntegration((e = {}) => {
    const t = e.limit || 5,
      n = e.key || "cause";
    return {
      name: "LinkedErrors",
      preprocessEvent(e, r, a) {
        const s = a.getOptions();
        o.applyAggregateErrorsToEvent(
          i.exceptionFromError,
          s.stackParser,
          n,
          t,
          e,
          r,
        );
      },
    };
  });
t.linkedErrorsIntegration = a;

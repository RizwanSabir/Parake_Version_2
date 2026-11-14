// vendor/other/module-76421.js — webpack module 76421
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = (e) => e instanceof Promise && !e[r],
  r = Symbol("chained PromiseLike");
t.chainAndCopyPromiseLike = (e, t, o) => {
  const i = e.then(
    (e) => (t(e), e),
    (e) => {
      throw (o(e), e);
    },
  );
  return n(i) && n(e)
    ? i
    : ((e, t) => {
        if (!t) return e;
        let n = !1;
        for (const r in e) {
          if (r in t) continue;
          n = !0;
          const o = e[r];
          "function" == typeof o
            ? Object.defineProperty(t, r, {
                value: (...t) => o.apply(e, t),
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = o);
        }
        return n && Object.assign(t, { [r]: !0 }), t;
      })(e, i);
};

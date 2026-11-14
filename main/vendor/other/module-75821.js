// vendor/other/module-75821.js — webpack module 75821
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(68020 /* vendor/other/module-68020 */),
  s = new WeakMap(),
  a = o.defineIntegration(() => ({
    name: "FunctionToString",
    setupOnce() {
      const e = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...t) {
          const n = i.getOriginalFunction(this);
          let o;
          try {
            s.has(r.getClient()) && void 0 !== n && (o = n);
          } catch {}
          return e.apply(o ?? this, t);
        };
      } catch {}
    },
    setup(e) {
      s.set(e, !0);
    },
  }));
t.functionToStringIntegration = a;

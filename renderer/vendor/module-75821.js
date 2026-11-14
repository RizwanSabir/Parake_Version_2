// vendor/module-75821.js — webpack module 75821
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(68020 /* vendor/module-68020 */),
  a = new WeakMap(),
  s = o.defineIntegration(() => ({
    name: "FunctionToString",
    setupOnce() {
      const e = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...t) {
          const n = i.getOriginalFunction(this);
          let o;
          try {
            a.has(r.getClient()) && void 0 !== n && (o = n);
          } catch {}
          return e.apply(o ?? this, t);
        };
      } catch {}
    },
    setup(e) {
      a.set(e, !0);
    },
  }));
t.functionToStringIntegration = s;

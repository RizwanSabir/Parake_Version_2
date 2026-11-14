// vendor/other/module-40140.js — webpack module 40140
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = {};
(t.INSTRUMENTED = o),
  (t.generateInstrumentOnce = function (e, t, n) {
    return n
      ? (function (e, t, n) {
          return Object.assign(
            (i) => {
              const s = n(i),
                a = o[e];
              if (a) return a.setConfig(s), a;
              const c = new t(s);
              return (
                (o[e] = c),
                r.registerInstrumentations({ instrumentations: [c] }),
                c
              );
            },
            { id: e },
          );
        })(e, t, n)
      : (function (e, t) {
          return Object.assign(
            (n) => {
              const i = o[e];
              if (i) return n && i.setConfig(n), i;
              const s = t(n);
              return (
                (o[e] = s),
                r.registerInstrumentations({ instrumentations: [s] }),
                s
              );
            },
            { id: e },
          );
        })(e, t);
  }),
  (t.instrumentWhenWrapped = function (e) {
    let t = !1,
      n = [];
    if (
      (function (e) {
        return "function" == typeof e._wrap;
      })(e)
    ) {
      const r = e._wrap;
      e._wrap = (...e) => ((t = !0), n.forEach((e) => e()), (n = []), r(...e));
    } else t = !0;
    return (e) => {
      t ? e() : n.push(e);
    };
  });

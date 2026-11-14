// vendor/other/module-24833.js — webpack module 24833
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = r.defineIntegration((e = {}) => ({
    name: "Console",
    setup(t) {
      process.env.LAMBDA_TASK_ROOT && r.maybeInstrument("console", i);
      const n = r.consoleIntegration({
        ...e,
        filter: [...(e.filter || []), "[DEP0205] DeprecationWarning"],
      });
      n.setup?.(t);
    },
  }));
function i() {
  const e = r.GLOBAL_OBJ?.console;
  e &&
    r.CONSOLE_LEVELS.forEach((t) => {
      t in e &&
        (function (e, t) {
          const n = e[t];
          r.originalConsoleMethods[t] = n;
          let o,
            i = n,
            s = !1;
          const a = function (...o) {
            if (s) n.apply(e, o);
            else {
              s = !0;
              try {
                r.triggerHandlers("console", { args: o, level: t }),
                  i.apply(e, o);
              } finally {
                s = !1;
              }
            }
          };
          r.markFunctionWrapped(a, n);
          const c = n.bind(e);
          r.originalConsoleMethods[t] = c;
          try {
            let n = a;
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: () => n,
              set(e) {
                e === a
                  ? (void 0 !== o && ((i = o), (o = void 0)), (n = a))
                  : e === c
                    ? ((o = i), (n = c))
                    : "function" != typeof e || e.__sentry_original__
                      ? (n = e)
                      : ((i = e), (n = a));
              },
            });
          } catch {
            r.fill(e, t, function (e) {
              return (
                (r.originalConsoleMethods[t] = e),
                function (...e) {
                  r.triggerHandlers("console", { args: e, level: t }),
                    r.originalConsoleMethods[t]?.apply(this, e);
                }
              );
            });
          }
        })(e, t);
    });
}
t.consoleIntegration = o;

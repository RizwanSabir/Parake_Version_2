// vendor/other/module-10999.js — webpack module 10999
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(28167 /* external/worker_threads */),
  i = n(14052 /* vendor/other/module-14052 */),
  s = n(287 /* vendor/other/module-287 */),
  a = r.defineIntegration((e = {}) => {
    const t = { exitEvenIfOtherHandlersAreRegistered: !1, ...e };
    return {
      name: "OnUncaughtException",
      setup(e) {
        o.isMainThread && global.process.on("uncaughtException", c(e, t));
      },
    };
  });
function c(e, t) {
  let n,
    o = !1,
    a = !1,
    c = !1;
  const u = e.getOptions();
  return Object.assign(
    (l) => {
      let d = s.logAndExitProcess;
      t.onFatalError
        ? (d = t.onFatalError)
        : u.onFatalError && (d = u.onFatalError);
      const p =
          0 ===
          global.process
            .listeners("uncaughtException")
            .filter(
              (e) =>
                "domainUncaughtExceptionClear" !== e.name &&
                !0 !== e._errorHandler,
            ).length,
        f = t.exitEvenIfOtherHandlersAreRegistered || p;
      o
        ? f &&
          (c
            ? (i.DEBUG_BUILD &&
                r.debug.warn(
                  "uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown",
                ),
              s.logAndExitProcess(l))
            : a ||
              ((a = !0),
              setTimeout(() => {
                c || ((c = !0), d(n, l));
              }, 2e3)))
        : ((n = l),
          (o = !0),
          r.getClient() === e &&
            r.captureException(l, {
              originalException: l,
              captureContext: { level: "fatal" },
              mechanism: {
                handled: !1,
                type: "auto.node.onuncaughtexception",
              },
            }),
          !c && f && ((c = !0), d(l)));
    },
    { _errorHandler: !0 },
  );
}
(t.makeErrorHandler = c), (t.onUncaughtExceptionIntegration = a);

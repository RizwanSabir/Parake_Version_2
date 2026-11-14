// vendor/other/module-79984.js — webpack module 79984
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84778 /* vendor/other/module-84778 */),
  o = n(66343 /* vendor/other/module-66343 */),
  i = n(65546 /* vendor/other/module-65546 */),
  s = n(82081 /* vendor/other/module-82081 */);
(e.exports = (function () {
  const e = new r({
    allowUnknownLevel: !0,
    errorHandler: new o(),
    initializeFn: () => {},
    logId: "default",
    transportFactories: { console: i, ipc: s },
    variables: { processType: "renderer" },
  });
  return (
    e.errorHandler.setOptions({
      logFn({ error: t, errorName: n, showDialog: r }) {
        e.transports.console({
          data: [n, t].filter(Boolean),
          level: "error",
        }),
          e.transports.ipc({
            cmd: "errorHandler",
            error: {
              cause: t?.cause,
              code: t?.code,
              name: t?.name,
              message: t?.message,
              stack: t?.stack,
            },
            errorName: n,
            logId: e.logId,
            showDialog: r,
          });
      },
    }),
    "object" == typeof window &&
      window.addEventListener("message", (e) => {
        const { cmd: t, logId: n, ...o } = e.data || {},
          i = r.getInstance({ logId: n });
        "message" === t && i.processMessage(o, { transports: ["console"] });
      }),
    new Proxy(e, {
      get: (t, n) =>
        void 0 !== t[n] ? t[n] : (...t) => e.logData(t, { level: n }),
    })
  );
})()),
  (e.exports.Logger = r),
  (e.exports.default = e.exports);

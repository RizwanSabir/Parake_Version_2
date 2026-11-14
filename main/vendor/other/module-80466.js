// vendor/other/module-80466.js — webpack module 80466
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84778 /* vendor/other/module-84778 */),
  o = n(67441 /* vendor/other/module-67441 */),
  i = n(46779 /* vendor/other/module-46779 */),
  s = n(96963 /* vendor/other/module-96963 */),
  a = n(7609 /* vendor/other/module-7609 */),
  c = n(87228 /* vendor/other/module-87228 */),
  u = n(32958 /* vendor/other/module-32958 */);
e.exports = function ({ dependencies: e, initializeFn: t }) {
  const n = new r({
    dependencies: e,
    errorHandler: new o(),
    eventLogger: new i(),
    initializeFn: t,
    isDev: e.externalApi?.isDev(),
    logId: "default",
    transportFactories: { console: s, file: a, ipc: c, remote: u },
    variables: { processType: "main" },
  });
  return (
    (n.default = n),
    (n.Logger = r),
    (n.processInternalErrorFn = (e) => {
      n.transports.console.writeFn({
        message: {
          data: ["Unhandled electron-log error", e],
          level: "error",
        },
      });
    }),
    n
  );
};

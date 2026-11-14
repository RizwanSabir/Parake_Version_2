// vendor/module-27166.js — webpack module 27166
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { H: () => a, R: () => n });
var i = r(79456 /* vendor/module-79456 */),
  o =
    (r(23464 /* vendor/module-23464 */),
    { trace: 0, debug: 1, info: 2, warn: 3, error: 4, fatal: 5 }),
  n = {
    trace: (0, i.K)((...t) => {}, "trace"),
    debug: (0, i.K)((...t) => {}, "debug"),
    info: (0, i.K)((...t) => {}, "info"),
    warn: (0, i.K)((...t) => {}, "warn"),
    error: (0, i.K)((...t) => {}, "error"),
    fatal: (0, i.K)((...t) => {}, "fatal"),
  },
  a = (0, i.K)(function (t = "fatal") {
    let e = o.fatal;
    "string" == typeof t
      ? t.toLowerCase() in o && (e = o[t])
      : "number" == typeof t && (e = t),
      (n.trace = () => {}),
      (n.debug = () => {}),
      (n.info = () => {}),
      (n.warn = () => {}),
      (n.error = () => {}),
      (n.fatal = () => {}),
      e <= o.fatal && (n.fatal = (console.error, function () {}.bind())),
      e <= o.error && (n.error = (console.error, function () {}.bind())),
      e <= o.warn && (n.warn = (console.warn, function () {}.bind())),
      e <= o.info && (n.info = (console.info, function () {}.bind())),
      e <= o.debug && (n.debug = (console.debug, function () {}.bind())),
      e <= o.trace && (n.trace = (console.debug, function () {}.bind()));
  }, "setLogLevel");

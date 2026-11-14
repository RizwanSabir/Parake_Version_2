// vendor/other/module-41538.js — webpack module 41538
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function t(e, t) {
  let n = "";
  const r = e.reason || "(unknown reason)";
  return e.mark
    ? (e.mark.name && (n += 'in "' + e.mark.name + '" '),
      (n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")"),
      !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet),
      r + " " + n)
    : r;
}
function n(e, n) {
  Error.call(this),
    (this.name = "YAMLException"),
    (this.reason = e),
    (this.mark = n),
    (this.message = t(this, !1)),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack || "");
}
(n.prototype = Object.create(Error.prototype)),
  (n.prototype.constructor = n),
  (n.prototype.toString = function (e) {
    return this.name + ": " + t(this, e);
  }),
  (e.exports = n);

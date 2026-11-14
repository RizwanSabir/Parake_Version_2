// vendor/other/module-71664.js — webpack module 71664
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { IP: () => u, YA: () => c, hX: () => a });
var r = n(67177 /* vendor/other/module-67177 */),
  o = n(6461 /* vendor/other/module-6461 */);
const i = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
]);
function s(e, t) {
  if ("string" != typeof e || e.length !== t) return !1;
  let n = 0;
  for (let t = 0; t < e.length; t += 4)
    n +=
      (0 | i[e.charCodeAt(t)]) +
      (0 | i[e.charCodeAt(t + 1)]) +
      (0 | i[e.charCodeAt(t + 2)]) +
      (0 | i[e.charCodeAt(t + 3)]);
  return n === t;
}
function a(e) {
  return s(e, 32) && e !== r.RH;
}
function c(e) {
  return a(e.traceId) && s((t = e.spanId), 16) && t !== r.w9;
  var t;
}
function u(e) {
  return new o.d(e);
}

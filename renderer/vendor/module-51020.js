// vendor/module-51020.js — webpack module 51020
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = (
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    }
  )(n(78052 /* vendor/module-78052 */)),
  o = n(80576 /* vendor/module-80576 */);
function i(e, t) {
  var n = {};
  return e && "string" == typeof e
    ? ((0, r.default)(e, function (e, r) {
        e && r && (n[(0, o.camelCase)(e, t)] = r);
      }),
      n)
    : n;
}
(i.default = i), (e.exports = i);

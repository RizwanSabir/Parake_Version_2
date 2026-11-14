// vendor/module-10248.js — webpack module 10248
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => u });
var n = r(36713 /* vendor/module-36713 */),
  o = "object" == typeof exports && exports && !exports.nodeType && exports,
  i = o && "object" == typeof module && module && !module.nodeType && module,
  s = i && i.exports === o && n.A.process;
const u = (function () {
  try {
    return (
      (i && i.require && i.require("util").types) ||
      (s && s.binding && s.binding("util"))
    );
  } catch (t) {}
})();

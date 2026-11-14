// vendor/module-34517.js — webpack module 34517
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => u });
var n = r(39600 /* vendor/module-39600 */);
var o = "object" == typeof exports && exports && !exports.nodeType && exports,
  i = o && "object" == typeof module && module && !module.nodeType && module,
  s = i && i.exports === o ? n.A.Buffer : void 0;
const u =
  (s ? s.isBuffer : void 0) ||
  function () {
    return !1;
  };

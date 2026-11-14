// vendor/other/module-97493.js — webpack module 97493
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(40109 /* vendor/other/module-40109 */);
(t.encode = function (e) {
  var t,
    n = "",
    o = (function (e) {
      return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
    })(e);
  do {
    (t = 31 & o), (o >>>= 5) > 0 && (t |= 32), (n += r.encode(t));
  } while (o > 0);
  return n;
}),
  (t.decode = function (e, t, n) {
    var o,
      i,
      s,
      a,
      c = e.length,
      u = 0,
      l = 0;
    do {
      if (t >= c) throw new Error("Expected more digits in base 64 VLQ value.");
      if (-1 === (i = r.decode(e.charCodeAt(t++))))
        throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
      (o = !!(32 & i)), (u += (i &= 31) << l), (l += 5);
    } while (o);
    (n.value = ((a = (s = u) >> 1), 1 & ~s ? a : -a)), (n.rest = t);
  });

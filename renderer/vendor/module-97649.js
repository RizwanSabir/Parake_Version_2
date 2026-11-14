// vendor/module-97649.js — webpack module 97649
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => a });
var n = r(47845 /* vendor/module-47845 */),
  o = r(61758 /* vendor/module-61758 */),
  i = r(14151 /* vendor/module-14151 */);
const s = o.A
  ? function (t, e) {
      return (0, o.A)(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: (0, n.A)(e),
        writable: !0,
      });
    }
  : i.A;
var u = Date.now;
const a =
  ((c = s),
  (h = 0),
  (f = 0),
  function () {
    var t = u(),
      e = 16 - (t - f);
    if (((f = t), e > 0)) {
      if (++h >= 800) return arguments[0];
    } else h = 0;
    return c.apply(void 0, arguments);
  });
var c, h, f;

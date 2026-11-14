// vendor/module-97342.js — webpack module 97342
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => w });
var n = r(50123 /* vendor/module-50123 */),
  o = r(39600 /* vendor/module-39600 */);
const i = (0, n.A)(o.A, "DataView");
var s = r(25436 /* vendor/module-25436 */);
const u = (0, n.A)(o.A, "Promise");
var a = r(28574 /* vendor/module-28574 */);
const c = (0, n.A)(o.A, "WeakMap");
var h = r(4044 /* vendor/module-4044 */),
  f = r(1548 /* vendor/module-1548 */),
  l = "[object Map]",
  d = "[object Promise]",
  A = "[object Set]",
  v = "[object WeakMap]",
  p = "[object DataView]",
  _ = (0, f.A)(i),
  b = (0, f.A)(s.A),
  g = (0, f.A)(u),
  y = (0, f.A)(a.A),
  j = (0, f.A)(c),
  O = h.A;
((i && O(new i(new ArrayBuffer(1))) != p) ||
  (s.A && O(new s.A()) != l) ||
  (u && O(u.resolve()) != d) ||
  (a.A && O(new a.A()) != A) ||
  (c && O(new c()) != v)) &&
  (O = function (t) {
    var e = (0, h.A)(t),
      r = "[object Object]" == e ? t.constructor : void 0,
      n = r ? (0, f.A)(r) : "";
    if (n)
      switch (n) {
        case _:
          return p;
        case b:
          return l;
        case g:
          return d;
        case y:
          return A;
        case j:
          return v;
      }
    return e;
  });
const w = O;

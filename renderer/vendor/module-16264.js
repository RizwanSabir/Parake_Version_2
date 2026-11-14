// vendor/module-16264.js — webpack module 16264
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => o });
var n = Math.max;
const o = function (t, e, r) {
  return (
    (e = n(void 0 === e ? t.length - 1 : e, 0)),
    function () {
      for (
        var o = arguments, i = -1, s = n(o.length - e, 0), u = Array(s);
        ++i < s;

      )
        u[i] = o[e + i];
      i = -1;
      for (var a = Array(e + 1); ++i < e; ) a[i] = o[i];
      return (
        (a[e] = r(u)),
        (function (t, e, r) {
          switch (r.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, r[0]);
            case 2:
              return t.call(e, r[0], r[1]);
            case 3:
              return t.call(e, r[0], r[1], r[2]);
          }
          return t.apply(e, r);
        })(t, this, a)
      );
    }
  );
};

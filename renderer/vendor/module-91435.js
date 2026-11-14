// vendor/module-91435.js — webpack module 91435
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(14041 /* vendor/module-14041 */),
  o = n(58139 /* vendor/module-58139 */),
  i =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  a = o.useSyncExternalStore,
  s = r.useRef,
  l = r.useEffect,
  c = r.useMemo,
  u = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var d = s(null);
  if (null === d.current) {
    var p = { hasValue: !1, value: null };
    d.current = p;
  } else p = d.current;
  d = c(
    function () {
      function e(e) {
        if (!l) {
          if (((l = !0), (a = e), (e = r(e)), void 0 !== o && p.hasValue)) {
            var t = p.value;
            if (o(t, e)) return (s = t);
          }
          return (s = e);
        }
        if (((t = s), i(a, e))) return t;
        var n = r(e);
        return void 0 !== o && o(t, n) ? ((a = e), t) : ((a = e), (s = n));
      }
      var a,
        s,
        l = !1,
        c = void 0 === n ? null : n;
      return [
        function () {
          return e(t());
        },
        null === c
          ? void 0
          : function () {
              return e(c());
            },
      ];
    },
    [t, n, r, o],
  );
  var f = a(e, d[0], d[1]);
  return (
    l(
      function () {
        (p.hasValue = !0), (p.value = f);
      },
      [f],
    ),
    u(f),
    f
  );
};

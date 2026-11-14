// vendor/module-93296.js — webpack module 93296
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(14041 /* vendor/module-14041 */),
  o =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  i = r.useState,
  a = r.useEffect,
  s = r.useLayoutEffect,
  l = r.useDebugValue;
function c(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !o(e, n);
  } catch (e) {
    return !0;
  }
}
var u =
  "undefined" == typeof window ||
  void 0 === window.document ||
  void 0 === window.document.createElement
    ? function (e, t) {
        return t();
      }
    : function (e, t) {
        var n = t(),
          r = i({ inst: { value: n, getSnapshot: t } }),
          o = r[0].inst,
          u = r[1];
        return (
          s(
            function () {
              (o.value = n), (o.getSnapshot = t), c(o) && u({ inst: o });
            },
            [e, n, t],
          ),
          a(
            function () {
              return (
                c(o) && u({ inst: o }),
                e(function () {
                  c(o) && u({ inst: o });
                })
              );
            },
            [e],
          ),
          l(n),
          n
        );
      };
t.useSyncExternalStore =
  void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;

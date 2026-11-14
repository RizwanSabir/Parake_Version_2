// vendor/module-74269.js — webpack module 74269
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { YR: () => o });
var r = n(33813 /* vendor/module-33813 */);
function o(e, t, n, o) {
  let i, a, s;
  "function" == typeof t && "function" != typeof n
    ? ((a = void 0), (s = t), (i = n))
    : ((a = t), (s = n), (i = o)),
    (0, r.VG)(
      e,
      a,
      function (e, t) {
        const n = t[t.length - 1],
          r = n ? n.children.indexOf(e) : void 0;
        return s(e, r, n);
      },
      i,
    );
}

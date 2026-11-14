// vendor/module-63076.js — webpack module 63076
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useRereadCallSessionListOnFocus = function () {
  const e = (0, r.c)(3),
    t = i.api.useUtils();
  let n, a;
  e[0] !== t
    ? ((n = () => {
        const e = () => {
          t.callSession.getList.refetch(
            void 0,
            { type: "active", stale: !0 },
            { cancelRefetch: !1 },
          );
        };
        return (
          window.addEventListener("focus", e),
          () => window.removeEventListener("focus", e)
        );
      }),
      (a = [t]),
      (e[0] = t),
      (e[1] = n),
      (e[2] = a))
    : ((n = e[1]), (a = e[2])),
    (0, o.useEffect)(n, a);
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(44189 /* vendor/module-44189 */);

// vendor/module-43650.js — webpack module 43650
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t, r = !0) {
  return e
    .filter((e) => e.parentId === t)
    .flatMap((t) => [...(!r || t.context?.open ? [t] : []), ...n(e, t.id, r)]);
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getDeepestNode = function (e, t) {
    let r,
      o = -1;
    return (
      (function t(i, a) {
        a > o && ((r = i), (o = a)),
          n(e, i).forEach((e) => {
            t(e.id, a + 1);
          });
      })(t, 0),
      e.find((e) => e.id === r)
    );
  }),
  (t.getNodeAncestors = function (e, t) {
    let n = [],
      r = e.find((e) => e.id === t)?.parentId;
    for (; r; ) {
      const t = e.find((e) => e.id === r);
      (r = t?.parentId), t && (n = n.concat(t));
    }
    return n;
  }),
  (t.getNodeChildren = n);

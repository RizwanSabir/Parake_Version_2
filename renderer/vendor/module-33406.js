// vendor/module-33406.js — webpack module 33406
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingNode = function (e) {
    const { children: t, id: n } = e,
      r = p();
    return (0, c.jsx)(u.Provider, {
      value: o.useMemo(() => ({ id: n, parentId: r }), [n, r]),
      children: t,
    });
  }),
  (t.FloatingTree = function (e) {
    const { children: t, externalTree: n } = e,
      r = (0, s.useRefWithInit)(() => n ?? new l.FloatingTreeStore()).current;
    return (0, c.jsx)(d.Provider, { value: r, children: t });
  }),
  (t.useFloatingNodeId = function (e) {
    const t = (0, i.useId)(),
      n = f(e),
      r = p();
    return (
      (0, a.useIsoLayoutEffect)(() => {
        if (!t) return;
        const e = { id: t, parentId: r };
        return (
          n?.addNode(e),
          () => {
            n?.removeNode(e);
          }
        );
      }, [n, t, r]),
      t
    );
  }),
  (t.useFloatingTree = t.useFloatingParentNodeId = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(28991 /* vendor/module-28991 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(16843 /* vendor/module-16843 */),
  l = n(35777 /* vendor/module-35777 */),
  c = n(31085 /* vendor/module-31085 */);
const u = o.createContext(null),
  d = o.createContext(null),
  p = () => o.useContext(u)?.id || null;
t.useFloatingParentNodeId = p;
const f = (e) => {
  const t = o.useContext(d);
  return e ?? t;
};
t.useFloatingTree = f;

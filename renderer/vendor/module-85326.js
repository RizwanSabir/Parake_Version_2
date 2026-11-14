// vendor/module-85326.js — webpack module 85326
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useRegisterFieldControl = function (e, t, n, r, s = !0, l) {
    const { registerFieldControl: c } = (0, a.useFieldRootContext)(),
      u = o.useRef(null);
    u.current || (u.current = Symbol()),
      (0, i.useIsoLayoutEffect)(() => {
        const o = u.current;
        if (o && s)
          return (
            c(o, {
              controlRef: e,
              getValue: r,
              id: t,
              name: l,
              value: n,
            }),
            () => {
              c(o, void 0);
            }
          );
      }, [e, s, r, t, l, c, n]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(62527 /* vendor/module-62527 */);

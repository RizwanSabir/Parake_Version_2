// vendor/module-82423.js — webpack module 82423
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = (e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(
      !t && e && e.__esModule
        ? n
        : i(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  ),
  p = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(p, { Portal: () => v, Root: () => b }),
  (e.exports = ((r = p), u(i({}, "__esModule", { value: !0 }), r)));
var f = d(n(14041 /* vendor/module-14041 */)),
  h = d(n(43144 /* vendor/module-43144 */)),
  m = n(76018 /* vendor/module-76018 */),
  g = n(70135 /* vendor/module-70135 */),
  y = n(31085 /* vendor/module-31085 */),
  v = f.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, i] = f.useState(!1);
    (0, g.useLayoutEffect)(() => i(!0), []);
    const a = n || (o && globalThis?.document?.body);
    return a
      ? h.default.createPortal((0, y.jsx)(m.Primitive.div, { ...r, ref: t }), a)
      : null;
  });
v.displayName = "Portal";
var b = v;

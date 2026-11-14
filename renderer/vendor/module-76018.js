// vendor/module-76018.js — webpack module 76018
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
})(p, {
  Primitive: () => y,
  Root: () => b,
  dispatchDiscreteCustomEvent: () => v,
}),
  (e.exports = ((r = p), u(i({}, "__esModule", { value: !0 }), r)));
var f = d(n(14041 /* vendor/module-14041 */)),
  h = d(n(43144 /* vendor/module-43144 */)),
  m = n(65904 /* app/components/root-65904 */),
  g = n(31085 /* vendor/module-31085 */),
  y = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ].reduce((e, t) => {
    const n = (0, m.createSlot)(`Primitive.${t}`),
      r = f.forwardRef((e, r) => {
        const { asChild: o, ...i } = e,
          a = o ? n : t;
        return (
          "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
          (0, g.jsx)(a, { ...i, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function v(e, t) {
  e && h.flushSync(() => e.dispatchEvent(t));
}
var b = y;

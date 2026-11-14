// vendor/module-32822.js — webpack module 32822
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
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, {
  FocusGuards: () => h,
  Root: () => h,
  useFocusGuards: () => m,
}),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = 0;
function h(e) {
  return m(), e.children;
}
function m() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? g()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? g()),
      f++,
      () => {
        1 === f &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((e) => e.remove()),
          f--;
      }
    );
  }, []);
}
function g() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}

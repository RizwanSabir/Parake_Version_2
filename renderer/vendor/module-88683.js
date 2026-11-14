// vendor/module-88683.js — webpack module 88683
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
})(d, { useEffectEvent: () => g }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = n(70135 /* vendor/module-70135 */),
  f = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  h = f[" useEffectEvent ".trim().toString()],
  m = f[" useInsertionEffect ".trim().toString()];
function g(e) {
  if ("function" == typeof h) return h(e);
  const t = f.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    "function" == typeof m
      ? m(() => {
          t.current = e;
        })
      : (0, p.useLayoutEffect)(() => {
          t.current = e;
        }),
    f.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}

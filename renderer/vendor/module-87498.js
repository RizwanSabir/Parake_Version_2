// vendor/module-87498.js — webpack module 87498
// params: (e, t) = (module, exports, require)
var n = Object.create,
  r = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  i = Object.getOwnPropertyNames,
  a = Object.getPrototypeOf,
  s = Object.prototype.hasOwnProperty,
  l = (e, t) =>
    function () {
      return t || (0, e[i(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  c = (e, t, l) => (
    (l = null != e ? n(a(e)) : {}),
    ((e, t, n, a) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (var l, c = i(t), u = 0, d = c.length; u < d; u++)
          (l = c[u]),
            s.call(e, l) ||
              void 0 === l ||
              r(e, l, {
                get: ((e) => t[e]).bind(null, l),
                enumerable: !(a = o(t, l)) || a.enumerable,
              });
      return e;
    })(
      !t && e && e.__esModule
        ? l
        : r(l, "default", { value: e, enumerable: !0 }),
      e,
    )
  );
Object.defineProperty(t, "__commonJS", {
  enumerable: !0,
  get: function () {
    return l;
  },
}),
  Object.defineProperty(t, "__toESM", {
    enumerable: !0,
    get: function () {
      return c;
    },
  });

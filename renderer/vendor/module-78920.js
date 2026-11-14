// vendor/module-78920.js — webpack module 78920
// params: (e, t, n) = (module, exports, require)
var r = n(14319 /* vendor/module-14319 */).default;
function o(t, n) {
  if ("function" == typeof WeakMap)
    var i = new WeakMap(),
      a = new WeakMap();
  return ((e.exports = o =
    function (e, t) {
      if (!t && e && e.__esModule) return e;
      var n,
        o,
        s = { __proto__: null, default: e };
      if (null === e || ("object" != r(e) && "function" != typeof e)) return s;
      if ((n = t ? a : i)) {
        if (n.has(e)) return n.get(e);
        n.set(e, s);
      }
      for (var l in e)
        "default" !== l &&
          {}.hasOwnProperty.call(e, l) &&
          ((o =
            (n = Object.defineProperty) &&
            Object.getOwnPropertyDescriptor(e, l)) &&
          (o.get || o.set)
            ? n(s, l, o)
            : (s[l] = e[l]));
      return s;
    }),
  (e.exports.__esModule = !0),
  (e.exports.default = e.exports))(t, n);
}
(e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);

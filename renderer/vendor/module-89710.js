// vendor/module-89710.js — webpack module 89710
// params: (e) = (module, exports, require)
"use strict";
var t = Object.prototype.hasOwnProperty,
  n = Object.prototype.toString,
  r = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  i = function (e) {
    return "function" == typeof Array.isArray
      ? Array.isArray(e)
      : "[object Array]" === n.call(e);
  },
  a = function (e) {
    if (!e || "[object Object]" !== n.call(e)) return !1;
    var r,
      o = t.call(e, "constructor"),
      i =
        e.constructor &&
        e.constructor.prototype &&
        t.call(e.constructor.prototype, "isPrototypeOf");
    if (e.constructor && !o && !i) return !1;
    for (r in e);
    return void 0 === r || t.call(e, r);
  },
  s = function (e, t) {
    r && "__proto__" === t.name
      ? r(e, t.name, {
          enumerable: !0,
          configurable: !0,
          value: t.newValue,
          writable: !0,
        })
      : (e[t.name] = t.newValue);
  },
  l = function (e, n) {
    if ("__proto__" === n) {
      if (!t.call(e, n)) return;
      if (o) return o(e, n).value;
    }
    return e[n];
  };
e.exports = function e() {
  var t,
    n,
    r,
    o,
    c,
    u,
    d = arguments[0],
    p = 1,
    f = arguments.length,
    h = !1;
  for (
    "boolean" == typeof d && ((h = d), (d = arguments[1] || {}), (p = 2)),
      (null == d || ("object" != typeof d && "function" != typeof d)) &&
        (d = {});
    p < f;
    ++p
  )
    if (null != (t = arguments[p]))
      for (n in t)
        (r = l(d, n)),
          d !== (o = l(t, n)) &&
            (h && o && (a(o) || (c = i(o)))
              ? (c
                  ? ((c = !1), (u = r && i(r) ? r : []))
                  : (u = r && a(r) ? r : {}),
                s(d, { name: n, newValue: e(h, u, o) }))
              : void 0 !== o && s(d, { name: n, newValue: o }));
  return d;
};

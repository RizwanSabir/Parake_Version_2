// vendor/module-14537.js — webpack module 14537
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.encode = t.decode = void 0);
var r = a(n(77720 /* vendor/module-77720 */)),
  o = a(n(96142 /* vendor/module-96142 */)),
  i = n(12320 /* vendor/module-12320 */);
function a(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (a = function (e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      a = { __proto__: null, default: e };
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return a;
    if ((o = t ? r : n)) {
      if (o.has(e)) return o.get(e);
      o.set(e, a);
    }
    for (const t in e)
      "default" !== t &&
        {}.hasOwnProperty.call(e, t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, t)) &&
        (i.get || i.set)
          ? o(a, t, i)
          : (a[t] = e[t]));
    return a;
  })(e, t);
}
(t.encode = (e) =>
  o.encode(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")),
  (t.decode = (e) => {
    const t = o.stripCrlf(e),
      n = t.length;
    if (n % 4 == 1)
      return r.left(
        (0, i.DecodeException)(
          t,
          `Length should be a multiple of 4, but is ${n}`,
        ),
      );
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(t))
      return r.left((0, i.DecodeException)(t, "Invalid input"));
    let a = n % 4 == 2 ? `${t}==` : n % 4 == 3 ? `${t}=` : t;
    return (a = a.replace(/-/g, "+").replace(/_/g, "/")), o.decode(a);
  });

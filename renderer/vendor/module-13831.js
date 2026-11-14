// vendor/module-13831.js — webpack module 13831
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getSecond =
    t.getOrder =
    t.getFirst =
    t.getEquivalence =
    t.at =
    t.appendElement =
      void 0),
  Object.defineProperty(t, "isTupleOf", {
    enumerable: !0,
    get: function () {
      return a.isTupleOf;
    },
  }),
  Object.defineProperty(t, "isTupleOfAtLeast", {
    enumerable: !0,
    get: function () {
      return a.isTupleOfAtLeast;
    },
  }),
  (t.swap = t.mapSecond = t.mapFirst = t.mapBoth = t.map = t.make = void 0);
var r = s(n(48254 /* vendor/module-48254 */)),
  o = n(74109 /* vendor/module-74109 */),
  i = s(n(18553 /* vendor/module-18553 */)),
  a = n(84552 /* vendor/module-84552 */);
function s(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (s = function (e, t) {
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
(t.make = (...e) => e),
  (t.getFirst = (e) => e[0]),
  (t.getSecond = (e) => e[1]),
  (t.map = (0, o.dual)(2, (e, t) => e.map((e) => t(e)))),
  (t.mapBoth = (0, o.dual)(2, (e, { onFirst: t, onSecond: n }) => [
    t(e[0]),
    n(e[1]),
  ])),
  (t.mapFirst = (0, o.dual)(2, (e, t) => [t(e[0]), e[1]])),
  (t.mapSecond = (0, o.dual)(2, (e, t) => [e[0], t(e[1])])),
  (t.swap = (e) => [e[1], e[0]]),
  (t.getEquivalence = r.tuple),
  (t.getOrder = i.tuple),
  (t.appendElement = (0, o.dual)(2, (e, t) => [...e, t])),
  (t.at = (0, o.dual)(2, (e, t) => e[t]));

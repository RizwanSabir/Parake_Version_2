// vendor/module-69581.js — webpack module 69581
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.value =
    t.unsafeWipe =
    t.make =
    t.isRedacted =
    t.getEquivalence =
    t.RedactedTypeId =
      void 0);
var r = i(n(48254 /* vendor/module-48254 */)),
  o = i(n(95567 /* vendor/module-95567 */));
function i(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (i = function (e, t) {
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
(t.RedactedTypeId = o.RedactedTypeId),
  (t.isRedacted = o.isRedacted),
  (t.make = o.make);
const a = (t.value = o.value);
(t.unsafeWipe = o.unsafeWipe),
  (t.getEquivalence = (e) => r.make((t, n) => e(a(t), a(n))));

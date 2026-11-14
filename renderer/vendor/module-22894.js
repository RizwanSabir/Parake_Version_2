// vendor/module-22894.js — webpack module 22894
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.some = t.none = t.isSome = t.isOption = t.isNone = void 0);
var r = l(n(92957 /* vendor/module-92957 */)),
  o = l(n(63101 /* vendor/module-63101 */)),
  i = n(96089 /* vendor/module-96089 */),
  a = n(84552 /* vendor/module-84552 */),
  s = n(76102 /* vendor/module-76102 */);
function l(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (l = function (e, t) {
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
const c = Symbol.for("effect/Option"),
  u = {
    ...s.EffectPrototype,
    [c]: { _A: (e) => e },
    [i.NodeInspectSymbol]() {
      return this.toJSON();
    },
    toString() {
      return (0, i.format)(this.toJSON());
    },
  },
  d = Object.assign(Object.create(u), {
    _tag: "Some",
    _op: "Some",
    [r.symbol](e) {
      return h(e) && g(e) && r.equals(this.value, e.value);
    },
    [o.symbol]() {
      return o.cached(this, o.combine(o.hash(this._tag))(o.hash(this.value)));
    },
    toJSON() {
      return {
        _id: "Option",
        _tag: this._tag,
        value: (0, i.toJSON)(this.value),
      };
    },
  }),
  p = o.hash("None"),
  f = Object.assign(Object.create(u), {
    _tag: "None",
    _op: "None",
    [r.symbol]: (e) => h(e) && m(e),
    [o.symbol]: () => p,
    toJSON() {
      return { _id: "Option", _tag: this._tag };
    },
  }),
  h = (e) => (0, a.hasProperty)(e, c);
t.isOption = h;
const m = (e) => "None" === e._tag;
t.isNone = m;
const g = (e) => "Some" === e._tag;
(t.isSome = g),
  (t.none = Object.create(f)),
  (t.some = (e) => {
    const t = Object.create(d);
    return (t.value = e), t;
  });

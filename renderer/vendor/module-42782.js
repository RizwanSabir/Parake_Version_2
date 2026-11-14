// vendor/module-42782.js — webpack module 42782
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.right =
    t.left =
    t.isRight =
    t.isLeft =
    t.isEither =
    t.getRight =
    t.getLeft =
    t.fromOption =
    t.TypeId =
      void 0);
var r = u(n(92957 /* vendor/module-92957 */)),
  o = n(74109 /* vendor/module-74109 */),
  i = u(n(63101 /* vendor/module-63101 */)),
  a = n(96089 /* vendor/module-96089 */),
  s = n(84552 /* vendor/module-84552 */),
  l = n(76102 /* vendor/module-76102 */),
  c = u(n(22894 /* vendor/module-22894 */));
function u(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (u = function (e, t) {
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
const d = (t.TypeId = Symbol.for("effect/Either")),
  p = {
    ...l.EffectPrototype,
    [d]: { _R: (e) => e },
    [a.NodeInspectSymbol]() {
      return this.toJSON();
    },
    toString() {
      return (0, a.format)(this.toJSON());
    },
  },
  f = Object.assign(Object.create(p), {
    _tag: "Right",
    _op: "Right",
    [r.symbol](e) {
      return m(e) && y(e) && r.equals(this.right, e.right);
    },
    [i.symbol]() {
      return i.combine(i.hash(this._tag))(i.hash(this.right));
    },
    toJSON() {
      return {
        _id: "Either",
        _tag: this._tag,
        right: (0, a.toJSON)(this.right),
      };
    },
  }),
  h = Object.assign(Object.create(p), {
    _tag: "Left",
    _op: "Left",
    [r.symbol](e) {
      return m(e) && g(e) && r.equals(this.left, e.left);
    },
    [i.symbol]() {
      return i.combine(i.hash(this._tag))(i.hash(this.left));
    },
    toJSON() {
      return {
        _id: "Either",
        _tag: this._tag,
        left: (0, a.toJSON)(this.left),
      };
    },
  }),
  m = (e) => (0, s.hasProperty)(e, d);
t.isEither = m;
const g = (e) => "Left" === e._tag;
t.isLeft = g;
const y = (e) => "Right" === e._tag;
t.isRight = y;
const v = (e) => {
  const t = Object.create(h);
  return (t.left = e), t;
};
t.left = v;
const b = (e) => {
  const t = Object.create(f);
  return (t.right = e), t;
};
(t.right = b),
  (t.getLeft = (e) => (y(e) ? c.none : c.some(e.left))),
  (t.getRight = (e) => (g(e) ? c.none : c.some(e.right))),
  (t.fromOption = (0, o.dual)(2, (e, t) =>
    c.isNone(e) ? v(t()) : b(e.value),
  ));

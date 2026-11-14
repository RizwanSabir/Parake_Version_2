// vendor/module-37168.js — webpack module 37168
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.zipWith =
    t.zipRight =
    t.zipLeft =
    t.void =
    t.toRefinement =
    t.toArray =
    t.tap =
    t.some =
    t.reduceCompact =
    t.productMany =
    t.product =
    t.partitionMap =
    t.orElseSome =
    t.orElseEither =
    t.orElse =
    t.none =
    t.mergeWith =
    t.match =
    t.map =
    t.liftThrowable =
    t.liftPredicate =
    t.liftNullable =
    t.lift2 =
    t.let =
    t.isSome =
    t.isOption =
    t.isNone =
    t.getRight =
    t.getOrder =
    t.getOrUndefined =
    t.getOrThrowWith =
    t.getOrThrow =
    t.getOrNull =
    t.getOrElse =
    t.getLeft =
    t.getEquivalence =
    t.gen =
    t.fromNullable =
    t.fromIterable =
    t.flatten =
    t.flatMapNullable =
    t.flatMap =
    t.firstSomeOf =
    t.filterMap =
    t.filter =
    t.exists =
    t.containsWith =
    t.contains =
    t.composeK =
    t.bindTo =
    t.bind =
    t.asVoid =
    t.as =
    t.ap =
    t.andThen =
    t.all =
    t.TypeId =
    t.Do =
      void 0);
var r = d(n(92957 /* vendor/module-92957 */)),
  o = d(n(48254 /* vendor/module-48254 */)),
  i = n(74109 /* vendor/module-74109 */),
  a = d(n(64184 /* vendor/module-64184 */)),
  s = d(n(42782 /* vendor/module-42782 */)),
  l = d(n(22894 /* vendor/module-22894 */)),
  c = d(n(18553 /* vendor/module-18553 */)),
  u = d(n(76027 /* vendor/module-76027 */));
function d(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (d = function (e, t) {
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
t.TypeId = Symbol.for("effect/Option");
const p = () => l.none;
t.none = p;
const f = (t.some = l.some),
  h = (t.isOption = l.isOption),
  m = (t.isNone = l.isNone),
  g = (t.isSome = l.isSome);
(t.match = (0, i.dual)(2, (e, { onNone: t, onSome: n }) =>
  m(e) ? t() : n(e.value),
)),
  (t.toRefinement = (e) => (t) => g(e(t))),
  (t.fromIterable = (e) => {
    for (const t of e) return f(t);
    return p();
  }),
  (t.getRight = s.getRight),
  (t.getLeft = s.getLeft);
const y = (t.getOrElse = (0, i.dual)(2, (e, t) => (m(e) ? t() : e.value)));
(t.orElse = (0, i.dual)(2, (e, t) => (m(e) ? t() : e))),
  (t.orElseSome = (0, i.dual)(2, (e, t) => (m(e) ? f(t()) : e))),
  (t.orElseEither = (0, i.dual)(2, (e, t) =>
    m(e) ? S(t(), s.right) : S(e, s.left),
  )),
  (t.firstSomeOf = (e) => {
    let t = p();
    for (t of e) if (g(t)) return t;
    return t;
  });
const v = (e) => (null == e ? p() : f(e));
(t.fromNullable = v),
  (t.liftNullable =
    (e) =>
    (...t) =>
      v(e(...t))),
  (t.getOrNull = y(i.constNull)),
  (t.getOrUndefined = y(i.constUndefined)),
  (t.liftThrowable =
    (e) =>
    (...t) => {
      try {
        return f(e(...t));
      } catch {
        return p();
      }
    });
const b = (t.getOrThrowWith = (0, i.dual)(2, (e, t) => {
    if (g(e)) return e.value;
    throw t();
  })),
  S =
    ((t.getOrThrow = b(() => new Error("getOrThrow called on a None"))),
    (t.map = (0, i.dual)(2, (e, t) => (m(e) ? p() : f(t(e.value)))))),
  _ = (t.as = (0, i.dual)(2, (e, t) => S(e, () => t))),
  x =
    ((t.asVoid = _(void 0)),
    (t.void = f(void 0)),
    (t.flatMap = (0, i.dual)(2, (e, t) => (m(e) ? p() : t(e.value))))),
  w =
    ((t.andThen = (0, i.dual)(2, (e, t) =>
      x(e, (e) => {
        const n = (0, i.isFunction)(t) ? t(e) : t;
        return h(n) ? n : f(n);
      }),
    )),
    (t.flatMapNullable = (0, i.dual)(2, (e, t) =>
      m(e) ? p() : v(t(e.value)),
    )),
    (t.flatten = x(i.identity)),
    (t.zipRight = (0, i.dual)(2, (e, t) => x(e, () => t))),
    (t.zipLeft = (0, i.dual)(2, (e, t) => w(e, () => t))),
    (t.composeK = (0, i.dual)(2, (e, t) => (n) => x(e(n), t))),
    (t.tap = (0, i.dual)(2, (e, t) => x(e, (e) => S(t(e), () => e))))),
  E = (e, t) => (g(e) && g(t) ? f([e.value, t.value]) : p());
(t.product = E),
  (t.productMany = (e, t) => {
    if (m(e)) return p();
    const n = [e.value];
    for (const e of t) {
      if (m(e)) return p();
      n.push(e.value);
    }
    return f(n);
  }),
  (t.all = (e) => {
    if (Symbol.iterator in e) {
      const t = [];
      for (const n of e) {
        if (m(n)) return p();
        t.push(n.value);
      }
      return f(t);
    }
    const t = {};
    for (const n of Object.keys(e)) {
      const r = e[n];
      if (m(r)) return p();
      t[n] = r.value;
    }
    return f(t);
  });
const T = (t.zipWith = (0, i.dual)(3, (e, t, n) =>
  S(E(e, t), ([e, t]) => n(e, t)),
));
(t.ap = (0, i.dual)(2, (e, t) => T(e, t, (e, t) => e(t)))),
  (t.reduceCompact = (0, i.dual)(3, (e, t, n) => {
    let r = t;
    for (const t of e) g(t) && (r = n(r, t.value));
    return r;
  })),
  (t.toArray = (e) => (m(e) ? [] : [e.value])),
  (t.partitionMap = (0, i.dual)(2, (e, t) => {
    if (m(e)) return [p(), p()];
    const n = t(e.value);
    return s.isLeft(n) ? [f(n.left), p()] : [p(), f(n.right)];
  }));
const k = (t.filterMap = x);
(t.filter = (0, i.dual)(2, (e, t) => k(e, (e) => (t(e) ? l.some(e) : l.none)))),
  (t.getEquivalence = (e) =>
    o.make((t, n) => (m(t) ? m(n) : !m(n) && e(t.value, n.value)))),
  (t.getOrder = (e) =>
    c.make((t, n) => (g(t) ? (g(n) ? e(t.value, n.value) : 1) : -1))),
  (t.lift2 = (e) => (0, i.dual)(2, (t, n) => T(t, n, e))),
  (t.liftPredicate = (0, i.dual)(2, (e, t) => (t(e) ? f(e) : p())));
const C = (e) => (0, i.dual)(2, (t, n) => !m(t) && e(t.value, n));
t.containsWith = C;
const I = r.equivalence(),
  A =
    ((t.contains = C(I)),
    (t.exists = (0, i.dual)(2, (e, t) => !m(e) && t(e.value))),
    (t.bindTo = a.bindTo(S)),
    (t.let = a.let_(S)),
    (t.bind = a.bind(S, x)),
    (t.Do = f({})),
    u.adapter());
(t.gen = (...e) => {
  const t = (1 === e.length ? e[0] : e[1].bind(e[0]))(A);
  let n = t.next();
  for (; !n.done; ) {
    const e = u.isGenKind(n.value) ? n.value.value : u.yieldWrapGet(n.value);
    if (m(e)) return e;
    n = t.next(e.value);
  }
  return f(n.value);
}),
  (t.mergeWith = (e) => (t, n) =>
    m(t) ? n : m(n) ? t : f(e(t.value, n.value)));

// vendor/module-77720.js — webpack module 77720
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.zipWith =
    t.void =
    t.try =
    t.transposeOption =
    t.transposeMapOption =
    t.right =
    t.orElse =
    t.merge =
    t.match =
    t.mapLeft =
    t.mapBoth =
    t.map =
    t.liftPredicate =
    t.let =
    t.left =
    t.isRight =
    t.isLeft =
    t.isEither =
    t.getRight =
    t.getOrUndefined =
    t.getOrThrowWith =
    t.getOrThrow =
    t.getOrNull =
    t.getOrElse =
    t.getLeft =
    t.getEquivalence =
    t.gen =
    t.fromOption =
    t.fromNullable =
    t.flip =
    t.flatMap =
    t.filterOrLeft =
    t.bindTo =
    t.bind =
    t.ap =
    t.andThen =
    t.all =
    t.TypeId =
    t.Do =
      void 0);
var r = u(n(48254 /* vendor/module-48254 */)),
  o = n(74109 /* vendor/module-74109 */),
  i = u(n(64184 /* vendor/module-64184 */)),
  a = u(n(42782 /* vendor/module-42782 */)),
  s = u(n(22894 /* vendor/module-22894 */)),
  l = n(84552 /* vendor/module-84552 */),
  c = u(n(76027 /* vendor/module-76027 */));
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
t.TypeId = a.TypeId;
const d = (t.right = a.right),
  p = ((t.void = d(void 0)), (t.left = a.left));
(t.fromNullable = (0, o.dual)(2, (e, t) => (null == e ? p(t(e)) : d(e)))),
  (t.fromOption = a.fromOption),
  (t.try = (e) => {
    if ((0, l.isFunction)(e))
      try {
        return d(e());
      } catch (e) {
        return p(e);
      }
    else
      try {
        return d(e.try());
      } catch (t) {
        return p(e.catch(t));
      }
  });
const f = (t.isEither = a.isEither),
  h = (t.isLeft = a.isLeft),
  m = (t.isRight = a.isRight);
(t.getRight = a.getRight),
  (t.getLeft = a.getLeft),
  (t.getEquivalence = ({ left: e, right: t }) =>
    r.make((n, r) =>
      h(n) ? h(r) && e(n.left, r.left) : m(r) && t(n.right, r.right),
    )),
  (t.mapBoth = (0, o.dual)(2, (e, { onLeft: t, onRight: n }) =>
    h(e) ? p(t(e.left)) : d(n(e.right)),
  )),
  (t.mapLeft = (0, o.dual)(2, (e, t) => (h(e) ? p(t(e.left)) : d(e.right))));
const g = (t.map = (0, o.dual)(2, (e, t) =>
    m(e) ? d(t(e.right)) : p(e.left),
  )),
  y = (t.match = (0, o.dual)(2, (e, { onLeft: t, onRight: n }) =>
    h(e) ? t(e.left) : n(e.right),
  )),
  v =
    ((t.liftPredicate = (0, o.dual)(3, (e, t, n) => (t(e) ? d(e) : p(n(e))))),
    (t.filterOrLeft = (0, o.dual)(3, (e, t, n) =>
      S(e, (e) => (t(e) ? d(e) : p(n(e)))),
    )),
    (t.merge = y({ onLeft: o.identity, onRight: o.identity })),
    (t.getOrElse = (0, o.dual)(2, (e, t) => (h(e) ? t(e.left) : e.right)))),
  b =
    ((t.getOrNull = v(o.constNull)),
    (t.getOrUndefined = v(o.constUndefined)),
    (t.getOrThrowWith = (0, o.dual)(2, (e, t) => {
      if (m(e)) return e.right;
      throw t(e.left);
    }))),
  S =
    ((t.getOrThrow = b(() => new Error("getOrThrow called on a Left"))),
    (t.orElse = (0, o.dual)(2, (e, t) => (h(e) ? t(e.left) : d(e.right)))),
    (t.flatMap = (0, o.dual)(2, (e, t) => (h(e) ? p(e.left) : t(e.right))))),
  _ =
    ((t.andThen = (0, o.dual)(2, (e, t) =>
      S(e, (e) => {
        const n = (0, l.isFunction)(t) ? t(e) : t;
        return f(n) ? n : d(n);
      }),
    )),
    (t.zipWith = (0, o.dual)(3, (e, t, n) =>
      S(e, (e) => g(t, (t) => n(e, t))),
    )));
(t.ap = (0, o.dual)(2, (e, t) => _(e, t, (e, t) => e(t)))),
  (t.all = (e) => {
    if (Symbol.iterator in e) {
      const t = [];
      for (const n of e) {
        if (h(n)) return n;
        t.push(n.right);
      }
      return d(t);
    }
    const t = {};
    for (const n of Object.keys(e)) {
      const r = e[n];
      if (h(r)) return r;
      t[n] = r.right;
    }
    return d(t);
  }),
  (t.flip = (e) => (h(e) ? d(e.left) : p(e.right)));
const x = c.adapter();
(t.gen = (...e) => {
  const t = (1 === e.length ? e[0] : e[1].bind(e[0]))(x);
  let n = t.next();
  for (; !n.done; ) {
    const e = c.isGenKind(n.value) ? n.value.value : c.yieldWrapGet(n.value);
    if (h(e)) return e;
    n = t.next(e.right);
  }
  return d(n.value);
}),
  (t.Do = d({})),
  (t.bind = i.bind(g, S)),
  (t.bindTo = i.bindTo(g)),
  (t.let = i.let_(g)),
  (t.transposeOption = (e) => (s.isNone(e) ? d(s.none) : g(e.value, s.some))),
  (t.transposeMapOption = (0, o.dual)(2, (e, t) =>
    s.isNone(e) ? d(s.none) : g(t(e.value), s.some),
  ));

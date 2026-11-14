// vendor/module-24352.js — webpack module 24352
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.values =
    t.union =
    t.toEntries =
    t.some =
    t.size =
    t.singleton =
    t.set =
    t.separate =
    t.replaceOption =
    t.replace =
    t.remove =
    t.reduce =
    t.pop =
    t.partitionMap =
    t.partition =
    t.modifyOption =
    t.modify =
    t.mapKeys =
    t.mapEntries =
    t.map =
    t.keys =
    t.isSubrecordBy =
    t.isSubrecord =
    t.isEmptyRecord =
    t.isEmptyReadonlyRecord =
    t.intersection =
    t.has =
    t.getSomes =
    t.getRights =
    t.getLefts =
    t.getEquivalence =
    t.get =
    t.fromIterableWith =
    t.fromIterableBy =
    t.fromEntries =
    t.findFirst =
    t.filterMap =
    t.filter =
    t.every =
    t.empty =
    t.difference =
    t.collect =
      void 0);
var r = s(n(77720 /* vendor/module-77720 */)),
  o = s(n(92957 /* vendor/module-92957 */)),
  i = n(74109 /* vendor/module-74109 */),
  a = s(n(37168 /* vendor/module-37168 */));
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
t.empty = () => ({});
const l = (e) => 0 === g(e).length;
(t.isEmptyRecord = l), (t.isEmptyReadonlyRecord = l);
const c = (t.fromIterableWith = (0, i.dual)(2, (e, t) => {
  const n = {};
  for (const r of e) {
    const [e, o] = t(r);
    n[e] = o;
  }
  return n;
}));
(t.fromIterableBy = (e, t) => c(e, (e) => [t(e), e])),
  (t.fromEntries = Object.fromEntries);
const u = (t.collect = (0, i.dual)(2, (e, t) => {
  const n = [];
  for (const r of g(e)) n.push(t(r, e[r]));
  return n;
}));
(t.toEntries = u((e, t) => [e, t])), (t.size = (e) => g(e).length);
const d = (t.has = (0, i.dual)(2, (e, t) =>
    Object.prototype.hasOwnProperty.call(e, t),
  )),
  p =
    ((t.get = (0, i.dual)(2, (e, t) => (d(e, t) ? a.some(e[t]) : a.none()))),
    (t.modify = (0, i.dual)(3, (e, t, n) =>
      d(e, t) ? { ...e, [t]: n(e[t]) } : { ...e },
    )),
    (t.modifyOption = (0, i.dual)(3, (e, t, n) =>
      d(e, t) ? a.some({ ...e, [t]: n(e[t]) }) : a.none(),
    ))),
  f =
    ((t.replaceOption = (0, i.dual)(3, (e, t, n) => p(e, t, () => n))),
    (t.remove = (0, i.dual)(2, (e, t) => {
      if (!d(e, t)) return { ...e };
      const n = { ...e };
      return delete n[t], n;
    }))),
  h =
    ((t.pop = (0, i.dual)(2, (e, t) =>
      d(e, t) ? a.some([e[t], f(e, t)]) : a.none(),
    )),
    (t.map = (0, i.dual)(2, (e, t) => {
      const n = { ...e };
      for (const r of g(e)) n[r] = t(e[r], r);
      return n;
    })),
    (t.mapKeys = (0, i.dual)(2, (e, t) => {
      const n = {};
      for (const r of g(e)) {
        const o = e[r];
        n[t(r, o)] = o;
      }
      return n;
    })),
    (t.mapEntries = (0, i.dual)(2, (e, t) => {
      const n = {};
      for (const r of g(e)) {
        const [o, i] = t(e[r], r);
        n[o] = i;
      }
      return n;
    })),
    (t.filterMap = (0, i.dual)(2, (e, t) => {
      const n = {};
      for (const r of g(e)) {
        const o = t(e[r], r);
        a.isSome(o) && (n[r] = o.value);
      }
      return n;
    })));
(t.filter = (0, i.dual)(2, (e, t) => {
  const n = {};
  for (const r of g(e)) t(e[r], r) && (n[r] = e[r]);
  return n;
})),
  (t.getSomes = h(i.identity)),
  (t.getLefts = (e) => {
    const t = {};
    for (const n of g(e)) {
      const o = e[n];
      r.isLeft(o) && (t[n] = o.left);
    }
    return t;
  }),
  (t.getRights = (e) => {
    const t = {};
    for (const n of g(e)) {
      const o = e[n];
      r.isRight(o) && (t[n] = o.right);
    }
    return t;
  });
const m = (t.partitionMap = (0, i.dual)(2, (e, t) => {
    const n = {},
      o = {};
    for (const i of g(e)) {
      const a = t(e[i], i);
      r.isLeft(a) ? (n[i] = a.left) : (o[i] = a.right);
    }
    return [n, o];
  })),
  g =
    ((t.separate = m(i.identity)),
    (t.partition = (0, i.dual)(2, (e, t) => {
      const n = {},
        r = {};
      for (const o of g(e)) t(e[o], o) ? (r[o] = e[o]) : (n[o] = e[o]);
      return [n, r];
    })),
    (e) => Object.keys(e));
(t.keys = g),
  (t.values = (e) => u(e, (e, t) => t)),
  (t.set = (0, i.dual)(3, (e, t, n) => ({ ...e, [t]: n }))),
  (t.replace = (0, i.dual)(3, (e, t, n) =>
    d(e, t) ? { ...e, [t]: n } : { ...e },
  ));
const y = (e) =>
  (0, i.dual)(2, (t, n) => {
    for (const r of g(t)) if (!d(n, r) || !e(t[r], n[r])) return !1;
    return !0;
  });
(t.isSubrecordBy = y),
  (t.isSubrecord = y(o.equivalence())),
  (t.reduce = (0, i.dual)(3, (e, t, n) => {
    let r = t;
    for (const t of g(e)) r = n(r, e[t], t);
    return r;
  })),
  (t.every = (0, i.dual)(2, (e, t) => {
    for (const n of g(e)) if (!t(e[n], n)) return !1;
    return !0;
  })),
  (t.some = (0, i.dual)(2, (e, t) => {
    for (const n of g(e)) if (t(e[n], n)) return !0;
    return !1;
  })),
  (t.union = (0, i.dual)(3, (e, t, n) => {
    if (l(e)) return { ...t };
    if (l(t)) return { ...e };
    const r = {};
    for (const o of g(e)) d(t, o) ? (r[o] = n(e[o], t[o])) : (r[o] = e[o]);
    for (const e of g(t)) d(r, e) || (r[e] = t[e]);
    return r;
  })),
  (t.intersection = (0, i.dual)(3, (e, t, n) => {
    const r = {};
    if (l(e) || l(t)) return r;
    for (const o of g(e)) d(t, o) && (r[o] = n(e[o], t[o]));
    return r;
  })),
  (t.difference = (0, i.dual)(2, (e, t) => {
    if (l(e)) return { ...t };
    if (l(t)) return { ...e };
    const n = {};
    for (const r of g(e)) d(t, r) || (n[r] = e[r]);
    for (const r of g(t)) d(e, r) || (n[r] = t[r]);
    return n;
  })),
  (t.getEquivalence = (e) => {
    const t = y(e);
    return (e, n) => t(e, n) && t(n, e);
  }),
  (t.singleton = (e, t) => ({ [e]: t })),
  (t.findFirst = (0, i.dual)(2, (e, t) => {
    const n = g(e);
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (t(e[o], o)) return a.some([o, e[o]]);
    }
    return a.none();
  }));

// vendor/module-33044.js — webpack module 33044
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.replaceOption =
    t.replace =
    t.removeOption =
    t.remove =
    t.reduceRight =
    t.reduce =
    t.range =
    t.prependAll =
    t.prepend =
    t.partitionMap =
    t.partition =
    t.pad =
    t.of =
    t.modifyOption =
    t.modifyNonEmptyLast =
    t.modifyNonEmptyHead =
    t.modify =
    t.min =
    t.max =
    t.matchRight =
    t.matchLeft =
    t.match =
    t.mapAccum =
    t.map =
    t.makeBy =
    t.make =
    t.liftPredicate =
    t.liftOption =
    t.liftNullable =
    t.liftEither =
    t.let =
    t.length =
    t.lastNonEmpty =
    t.last =
    t.join =
    t.isNonEmptyReadonlyArray =
    t.isNonEmptyArray =
    t.isEmptyReadonlyArray =
    t.isEmptyArray =
    t.isArray =
    t.intersperse =
    t.intersectionWith =
    t.intersection =
    t.insertAt =
    t.initNonEmpty =
    t.init =
    t.headNonEmpty =
    t.head =
    t.groupWith =
    t.groupBy =
    t.group =
    t.getSomes =
    t.getRights =
    t.getOrder =
    t.getLefts =
    t.getEquivalence =
    t.get =
    t.fromRecord =
    t.fromOption =
    t.fromNullable =
    t.fromIterable =
    t.forEach =
    t.flatten =
    t.flatMapNullable =
    t.flatMap =
    t.findLastIndex =
    t.findLast =
    t.findFirstWithIndex =
    t.findFirstIndex =
    t.findFirst =
    t.filterMapWhile =
    t.filterMap =
    t.filter =
    t.extend =
    t.every =
    t.ensure =
    t.empty =
    t.dropWhile =
    t.dropRight =
    t.drop =
    t.differenceWith =
    t.difference =
    t.dedupeWith =
    t.dedupeAdjacentWith =
    t.dedupeAdjacent =
    t.dedupe =
    t.countBy =
    t.copy =
    t.containsWith =
    t.contains =
    t.chunksOf =
    t.chop =
    t.cartesianWith =
    t.cartesian =
    t.bindTo =
    t.bind =
    t.appendAll =
    t.append =
    t.allocate =
    t.Do =
      void 0),
  (t.zipWith =
    t.zip =
    t.window =
    t.unzip =
    t.unsafeGet =
    t.unprepend =
    t.unionWith =
    t.union =
    t.unfold =
    t.unappend =
    t.takeWhile =
    t.takeRight =
    t.take =
    t.tailNonEmpty =
    t.tail =
    t.splitWhere =
    t.splitNonEmptyAt =
    t.splitAt =
    t.split =
    t.span =
    t.sortWith =
    t.sortBy =
    t.sort =
    t.some =
    t.setNonEmptyLast =
    t.setNonEmptyHead =
    t.separate =
    t.scanRight =
    t.scan =
    t.rotate =
    t.reverse =
    t.replicate =
      void 0);
var r = m(n(77720 /* vendor/module-77720 */)),
  o = m(n(92957 /* vendor/module-92957 */)),
  i = m(n(48254 /* vendor/module-48254 */)),
  a = n(74109 /* vendor/module-74109 */),
  s = m(n(41626 /* vendor/module-41626 */)),
  l = m(n(64184 /* vendor/module-64184 */)),
  c = m(n(90511 /* vendor/module-90511 */)),
  u = m(n(37168 /* vendor/module-37168 */)),
  d = m(n(18553 /* vendor/module-18553 */)),
  p = m(n(84552 /* vendor/module-84552 */)),
  f = m(n(24352 /* vendor/module-24352 */)),
  h = m(n(13831 /* vendor/module-13831 */));
function m(e, t) {
  if ("function" == typeof WeakMap)
    var n = new WeakMap(),
      r = new WeakMap();
  return (m = function (e, t) {
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
(t.make = (...e) => e), (t.allocate = (e) => new Array(e));
const g = (t.makeBy = (0, a.dual)(2, (e, t) => {
  const n = Math.max(1, Math.floor(e)),
    r = new Array(n);
  for (let e = 0; e < n; e++) r[e] = t(e);
  return r;
}));
(t.range = (e, t) => (e <= t ? g(t - e + 1, (t) => e + t) : [e])),
  (t.replicate = (0, a.dual)(2, (e, t) => g(t, () => e)));
const y = (e) => (Array.isArray(e) ? e : Array.from(e));
(t.fromIterable = y),
  (t.ensure = (e) => (Array.isArray(e) ? e : [e])),
  (t.fromRecord = f.toEntries);
const v = (t.fromOption = u.toArray),
  b =
    ((t.match = (0, a.dual)(2, (e, { onEmpty: t, onNonEmpty: n }) =>
      E(e) ? n(e) : t(),
    )),
    (t.matchLeft = (0, a.dual)(2, (e, { onEmpty: t, onNonEmpty: n }) =>
      E(e) ? n(A(e), R(e)) : t(),
    )),
    (t.matchRight = (0, a.dual)(2, (e, { onEmpty: t, onNonEmpty: n }) =>
      E(e) ? n(M(e), O(e)) : t(),
    )),
    (t.prepend = (0, a.dual)(2, (e, t) => [t, ...e]))),
  S =
    ((t.prependAll = (0, a.dual)(2, (e, t) => y(t).concat(y(e)))),
    (t.append = (0, a.dual)(2, (e, t) => [...e, t]))),
  _ = (t.appendAll = (0, a.dual)(2, (e, t) => y(e).concat(y(t)))),
  x =
    ((t.scan = (0, a.dual)(3, (e, t, n) => {
      const r = [t];
      let o = 0;
      for (const t of e) (r[o + 1] = n(r[o], t)), o++;
      return r;
    })),
    (t.scanRight = (0, a.dual)(3, (e, t, n) => {
      const r = y(e),
        o = new Array(r.length + 1);
      o[r.length] = t;
      for (let e = r.length - 1; e >= 0; e--) o[e] = n(o[e + 1], r[e]);
      return o;
    })),
    (t.isArray = Array.isArray),
    (e) => 0 === e.length);
t.isEmptyArray = x;
const w = (t.isEmptyReadonlyArray = x),
  E =
    ((t.isNonEmptyArray = s.isNonEmptyArray),
    (t.isNonEmptyReadonlyArray = s.isNonEmptyArray));
t.length = (e) => e.length;
const T = (e, t) => e < 0 || e >= t.length,
  k = (e, t) => Math.floor(Math.min(Math.max(0, e), t.length)),
  C = (t.get = (0, a.dual)(2, (e, t) => {
    const n = Math.floor(t);
    return T(n, e) ? u.none() : u.some(e[n]);
  })),
  I = (t.unsafeGet = (0, a.dual)(2, (e, t) => {
    const n = Math.floor(t);
    if (T(n, e)) throw new Error(`Index ${n} out of bounds`);
    return e[n];
  }));
(t.unprepend = (e) => [A(e), R(e)]),
  (t.unappend = (e) => [M(e), O(e)]),
  (t.head = C(0));
const A = (t.headNonEmpty = I(0));
t.last = (e) => (E(e) ? u.some(O(e)) : u.none());
const O = (e) => e[e.length - 1];
(t.lastNonEmpty = O),
  (t.tail = (e) => {
    const t = y(e);
    return E(t) ? u.some(R(t)) : u.none();
  });
const R = (e) => e.slice(1);
(t.tailNonEmpty = R),
  (t.init = (e) => {
    const t = y(e);
    return E(t) ? u.some(M(t)) : u.none();
  });
const M = (e) => e.slice(0, -1);
t.initNonEmpty = M;
const P = (t.take = (0, a.dual)(2, (e, t) => {
    const n = y(e);
    return n.slice(0, k(t, n));
  })),
  N =
    ((t.takeRight = (0, a.dual)(2, (e, t) => {
      const n = y(e),
        r = k(t, n);
      return 0 === r ? [] : n.slice(-r);
    })),
    (t.takeWhile = (0, a.dual)(2, (e, t) => {
      let n = 0;
      const r = [];
      for (const o of e) {
        if (!t(o, n)) break;
        r.push(o), n++;
      }
      return r;
    })),
    (e, t) => {
      let n = 0;
      for (const r of e) {
        if (!t(r, n)) break;
        n++;
      }
      return n;
    }),
  D = (t.span = (0, a.dual)(2, (e, t) => W(e, N(e, t)))),
  j =
    ((t.drop = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      return n.slice(k(t, n), n.length);
    })),
    (t.dropRight = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      return n.slice(0, n.length - k(t, n));
    })),
    (t.dropWhile = (0, a.dual)(2, (e, t) => y(e).slice(N(e, t)))),
    (t.findFirstIndex = (0, a.dual)(2, (e, t) => {
      let n = 0;
      for (const r of e) {
        if (t(r, n)) return u.some(n);
        n++;
      }
      return u.none();
    })),
    (t.findLastIndex = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      for (let e = n.length - 1; e >= 0; e--) if (t(n[e], e)) return u.some(e);
      return u.none();
    })),
    (t.findFirst = c.findFirst),
    (t.findLast = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      for (let e = n.length - 1; e >= 0; e--) {
        const r = n[e],
          o = t(r, e);
        if (p.isBoolean(o)) {
          if (o) return u.some(r);
        } else if (u.isSome(o)) return o;
      }
      return u.none();
    })),
    (t.findFirstWithIndex = (0, a.dual)(2, (e, t) => {
      let n = 0;
      for (const r of e) {
        const e = t(r, n);
        if (p.isBoolean(e)) {
          if (e) return u.some([r, n]);
        } else if (u.isSome(e)) return u.some([e.value, n]);
        n++;
      }
      return u.none();
    })),
    (t.countBy = (0, a.dual)(2, (e, t) => {
      let n = 0;
      const r = y(e);
      for (let e = 0; e < r.length; e++) t(r[e], e) && n++;
      return n;
    })),
    (t.insertAt = (0, a.dual)(3, (e, t, n) => {
      const r = Array.from(e);
      return t < 0 || t > r.length ? u.none() : (r.splice(t, 0, n), u.some(r));
    })),
    (t.replace = (0, a.dual)(3, (e, t, n) => j(e, t, () => n))),
    (t.replaceOption = (0, a.dual)(3, (e, t, n) => L(e, t, () => n))),
    (t.modify = (0, a.dual)(3, (e, t, n) => {
      const r = Array.from(e);
      if (T(t, r)) return r;
      const o = n(r[t]);
      return (r[t] = o), r;
    }))),
  L = (t.modifyOption = (0, a.dual)(3, (e, t, n) => {
    const r = y(e);
    if (T(t, r)) return u.none();
    const o = Array.isArray(e) ? e.slice() : r,
      i = n(r[t]);
    return (o[t] = i), u.some(o);
  }));
(t.remove = (0, a.dual)(2, (e, t) => {
  const n = Array.from(e);
  return T(t, n) || n.splice(t, 1), n;
})),
  (t.removeOption = (0, a.dual)(2, (e, t) => {
    const n = y(e);
    if (T(t, n)) return u.none();
    const r = Array.isArray(e) ? e.slice() : n;
    return r.splice(t, 1), u.some(r);
  })),
  (t.reverse = (e) => Array.from(e).reverse());
const F = (t.sort = (0, a.dual)(2, (e, t) => {
  const n = Array.from(e);
  return n.sort(t), n;
}));
(t.sortWith = (0, a.dual)(3, (e, t, n) =>
  Array.from(e)
    .map((e) => [e, t(e)])
    .sort(([, e], [, t]) => n(e, t))
    .map(([e]) => e),
)),
  (t.sortBy = (...e) => {
    const t = F(d.combineAll(e));
    return (e) => {
      const n = y(e);
      return E(n) ? t(n) : [];
    };
  }),
  (t.zip = (0, a.dual)(2, (e, t) => U(e, t, h.make)));
const U = (t.zipWith = (0, a.dual)(3, (e, t, n) => {
  const r = y(e),
    o = y(t);
  if (E(r) && E(o)) {
    const e = [n(A(r), A(o))],
      t = Math.min(r.length, o.length);
    for (let i = 1; i < t; i++) e[i] = n(r[i], o[i]);
    return e;
  }
  return [];
}));
(t.unzip = (e) => {
  const t = y(e);
  if (E(t)) {
    const e = [t[0][0]],
      n = [t[0][1]];
    for (let r = 1; r < t.length; r++) (e[r] = t[r][0]), (n[r] = t[r][1]);
    return [e, n];
  }
  return [[], []];
}),
  (t.intersperse = (0, a.dual)(2, (e, t) => {
    const n = y(e);
    if (E(n)) {
      const e = [A(n)],
        r = R(n);
      for (let n = 0; n < r.length; n++)
        n < r.length && e.push(t), e.push(r[n]);
      return e;
    }
    return [];
  }));
const B = (t.modifyNonEmptyHead = (0, a.dual)(2, (e, t) => [t(A(e)), ...R(e)])),
  z =
    ((t.setNonEmptyHead = (0, a.dual)(2, (e, t) => B(e, () => t))),
    (t.modifyNonEmptyLast = (0, a.dual)(2, (e, t) => S(M(e), t(O(e)))))),
  H =
    ((t.setNonEmptyLast = (0, a.dual)(2, (e, t) => z(e, () => t))),
    (t.rotate = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      if (E(n)) {
        const r = n.length,
          o = Math.round(t) % r;
        if (T(Math.abs(o), n) || 0 === o) return Y(n);
        if (o < 0) {
          const [e, t] = $(n, -o);
          return _(t, e);
        }
        return H(e, o - r);
      }
      return [];
    }))),
  V = (e) =>
    (0, a.dual)(2, (t, n) => {
      for (const r of t) if (e(n, r)) return !0;
      return !1;
    });
t.containsWith = V;
const q = o.equivalence(),
  G =
    ((t.contains = V(q)),
    (t.chop = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      if (E(n)) {
        const [e, r] = t(n),
          o = [e];
        let i = r;
        for (; s.isNonEmptyArray(i); ) {
          const [e, n] = t(i);
          o.push(e), (i = n);
        }
        return o;
      }
      return [];
    }))),
  W = (t.splitAt = (0, a.dual)(2, (e, t) => {
    const n = Array.from(e),
      r = Math.floor(t);
    return E(n) ? (r >= 1 ? $(n, r) : [[], n]) : [n, []];
  })),
  $ = (t.splitNonEmptyAt = (0, a.dual)(2, (e, t) => {
    const n = Math.max(1, Math.floor(t));
    return n >= e.length ? [Y(e), []] : [b(e.slice(1, n), A(e)), e.slice(n)];
  })),
  Y =
    ((t.split = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      return K(n, Math.ceil(n.length / Math.floor(t)));
    })),
    (t.splitWhere = (0, a.dual)(2, (e, t) => D(e, (e, n) => !t(e, n)))),
    (e) => e.slice());
(t.copy = Y),
  (t.pad = (0, a.dual)(3, (e, t, n) =>
    e.length >= t
      ? P(e, t)
      : _(
          e,
          g(t - e.length, () => n),
        ),
  ));
const K = (t.chunksOf = (0, a.dual)(2, (e, t) => {
    const n = y(e);
    return E(n) ? G(n, $(t)) : [];
  })),
  Z =
    ((t.window = (0, a.dual)(2, (e, t) => {
      const n = y(e);
      return t > 0 && E(n)
        ? Array.from({ length: n.length - (t - 1) }, (e, r) =>
            n.slice(r, r + t),
          )
        : [];
    })),
    (t.groupWith = (0, a.dual)(2, (e, t) =>
      G(e, (e) => {
        const n = A(e),
          r = [n];
        let o = 1;
        for (; o < e.length; o++) {
          const i = e[o];
          if (!t(i, n)) break;
          r.push(i);
        }
        return [r, e.slice(o)];
      }),
    ))),
  Q =
    ((t.group = Z(o.equivalence())),
    (t.groupBy = (0, a.dual)(2, (e, t) => {
      const n = {};
      for (const r of e) {
        const e = t(r);
        Object.prototype.hasOwnProperty.call(n, e)
          ? n[e].push(r)
          : (n[e] = [r]);
      }
      return n;
    })),
    (t.unionWith = (0, a.dual)(3, (e, t, n) => {
      const r = y(e),
        o = y(t);
      return E(r) ? (E(o) ? ae(n)(_(r, o)) : r) : o;
    }))),
  J =
    ((t.union = (0, a.dual)(2, (e, t) => Q(e, t, q))),
    (e) => {
      const t = V(e);
      return (0, a.dual)(2, (e, n) => y(e).filter((e) => t(n, e)));
    });
(t.intersectionWith = J), (t.intersection = J(q));
const X = (e) => {
  const t = V(e);
  return (0, a.dual)(2, (e, n) => y(e).filter((e) => !t(n, e)));
};
(t.differenceWith = X), (t.difference = X(q));
t.empty = () => [];
const ee = (e) => [e];
t.of = ee;
const te = (t.map = (0, a.dual)(2, (e, t) => e.map(t))),
  ne = (t.flatMap = (0, a.dual)(2, (e, t) => {
    if (w(e)) return [];
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = t(e[r], r);
      for (let e = 0; e < o.length; e++) n.push(o[e]);
    }
    return n;
  })),
  re =
    ((t.flatten = ne(a.identity)),
    (t.filterMap = (0, a.dual)(2, (e, t) => {
      const n = y(e),
        r = [];
      for (let e = 0; e < n.length; e++) {
        const o = t(n[e], e);
        u.isSome(o) && r.push(o.value);
      }
      return r;
    }))),
  oe =
    ((t.filterMapWhile = (0, a.dual)(2, (e, t) => {
      let n = 0;
      const r = [];
      for (const o of e) {
        const e = t(o, n);
        if (!u.isSome(e)) break;
        r.push(e.value), n++;
      }
      return r;
    })),
    (t.partitionMap = (0, a.dual)(2, (e, t) => {
      const n = [],
        o = [],
        i = y(e);
      for (let e = 0; e < i.length; e++) {
        const a = t(i[e], e);
        r.isLeft(a) ? n.push(a.left) : o.push(a.right);
      }
      return [n, o];
    })));
(t.getSomes = re(a.identity)),
  (t.getLefts = (e) => {
    const t = [];
    for (const n of e) r.isLeft(n) && t.push(n.left);
    return t;
  }),
  (t.getRights = (e) => {
    const t = [];
    for (const n of e) r.isRight(n) && t.push(n.right);
    return t;
  }),
  (t.filter = (0, a.dual)(2, (e, t) => {
    const n = y(e),
      r = [];
    for (let e = 0; e < n.length; e++) t(n[e], e) && r.push(n[e]);
    return r;
  })),
  (t.partition = (0, a.dual)(2, (e, t) => {
    const n = [],
      r = [],
      o = y(e);
    for (let e = 0; e < o.length; e++) t(o[e], e) ? r.push(o[e]) : n.push(o[e]);
    return [n, r];
  })),
  (t.separate = oe(a.identity)),
  (t.reduce = (0, a.dual)(3, (e, t, n) =>
    y(e).reduce((e, t, r) => n(e, t, r), t),
  )),
  (t.reduceRight = (0, a.dual)(3, (e, t, n) =>
    y(e).reduceRight((e, t, r) => n(e, t, r), t),
  )),
  (t.liftPredicate = (e) => (t) => (e(t) ? [t] : [])),
  (t.liftOption =
    (e) =>
    (...t) =>
      v(e(...t)));
const ie = (e) => (null == e ? [] : [e]);
(t.fromNullable = ie),
  (t.liftNullable =
    (e) =>
    (...t) =>
      ie(e(...t))),
  (t.flatMapNullable = (0, a.dual)(2, (e, t) => ne(e, (e) => ie(t(e))))),
  (t.liftEither =
    (e) =>
    (...t) => {
      const n = e(...t);
      return r.isLeft(n) ? [] : [n.right];
    }),
  (t.every = (0, a.dual)(2, (e, t) => e.every(t))),
  (t.some = (0, a.dual)(2, (e, t) => e.some(t))),
  (t.extend = (0, a.dual)(2, (e, t) => e.map((e, n, r) => t(r.slice(n))))),
  (t.min = (0, a.dual)(2, (e, t) => e.reduce(d.min(t)))),
  (t.max = (0, a.dual)(2, (e, t) => e.reduce(d.max(t)))),
  (t.unfold = (e, t) => {
    const n = [];
    let r,
      o = e;
    for (; u.isSome((r = t(o))); ) {
      const [e, t] = r.value;
      n.push(e), (o = t);
    }
    return n;
  }),
  (t.getOrder = d.array),
  (t.getEquivalence = i.array),
  (t.forEach = (0, a.dual)(2, (e, t) => y(e).forEach((e, n) => t(e, n))));
const ae = (t.dedupeWith = (0, a.dual)(2, (e, t) => {
  const n = y(e);
  if (E(n)) {
    const e = [A(n)],
      r = R(n);
    for (const n of r) e.every((e) => !t(n, e)) && e.push(n);
    return e;
  }
  return [];
}));
t.dedupe = (e) => ae(e, o.equivalence());
const se = (t.dedupeAdjacentWith = (0, a.dual)(2, (e, t) => {
    const n = [];
    let r = u.none();
    for (const o of e)
      (!u.isNone(r) && t(o, r.value)) || (n.push(o), (r = u.some(o)));
    return n;
  })),
  le =
    ((t.dedupeAdjacent = se(o.equivalence())),
    (t.join = (0, a.dual)(2, (e, t) => y(e).join(t))),
    (t.mapAccum = (0, a.dual)(3, (e, t, n) => {
      let r = 0,
        o = t;
      const i = [];
      for (const t of e) {
        const e = n(o, t, r);
        (o = e[0]), i.push(e[1]), r++;
      }
      return [o, i];
    })),
    (t.cartesianWith = (0, a.dual)(3, (e, t, n) =>
      ne(e, (e) => te(t, (t) => n(e, t))),
    )));
(t.cartesian = (0, a.dual)(2, (e, t) => le(e, t, (e, t) => [e, t]))),
  (t.Do = ee({})),
  (t.bind = l.bind(te, ne)),
  (t.bindTo = l.bindTo(te)),
  (t.let = l.let_(te));

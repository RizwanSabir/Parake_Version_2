// vendor/module-72769.js — webpack module 72769
// params: (e) = (module, exports, require)
"use strict";
var t,
  n = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty,
  a = {};
((e, t) => {
  for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
})(a, {
  createSelector: () => B,
  createSelectorCreator: () => U,
  createStructuredSelector: () => z,
  lruMemoize: () => N,
  referenceEqualityCheck: () => M,
  setGlobalDevModeChecks: () => l,
  unstable_autotrackMemoize: () => D,
  weakMapMemoize: () => F,
}),
  (e.exports =
    ((t = a),
    ((e, t, a, s) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let a of o(t))
          !i.call(e, a) &&
            void 0 !== a &&
            n(e, a, {
              get: () => t[a],
              enumerable: !(s = r(t, a)) || s.enumerable,
            });
      return e;
    })(n({}, "__esModule", { value: !0 }), t)));
var s = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once",
  },
  l = (e) => {
    Object.assign(s, e);
  },
  c = Symbol("NOT_FOUND");
function u(e, t = "expected a function, instead received " + typeof e) {
  if ("function" != typeof e) throw new TypeError(t);
}
var d = (e) => (Array.isArray(e) ? e : [e]);
var p = 0,
  f = null,
  h = class {
    revision = p;
    _value;
    _lastValue;
    _isEqual = m;
    constructor(e, t = m) {
      (this._value = this._lastValue = e), (this._isEqual = t);
    }
    get value() {
      return f?.add(this), this._value;
    }
    set value(e) {
      this.value !== e && ((this._value = e), (this.revision = ++p));
    }
  };
function m(e, t) {
  return e === t;
}
var g = class {
  _cachedValue;
  _cachedRevision = -1;
  _deps = [];
  hits = 0;
  fn;
  constructor(e) {
    this.fn = e;
  }
  clear() {
    (this._cachedValue = void 0),
      (this._cachedRevision = -1),
      (this._deps = []),
      (this.hits = 0);
  }
  get value() {
    if (this.revision > this._cachedRevision) {
      let { fn: e } = this,
        t = new Set(),
        n = f;
      (f = t),
        (this._cachedValue = e()),
        (f = n),
        this.hits++,
        (this._deps = Array.from(t)),
        (this._cachedRevision = this.revision);
    }
    return f?.add(this), this._cachedValue;
  }
  get revision() {
    return Math.max(...this._deps.map((e) => e.revision), 0);
  }
};
function y(e) {
  return e.value;
}
var v = (e, t) => !1;
function b() {
  return (function (e, t = m) {
    return new h(null, t);
  })(0, v);
}
function S(e, t) {
  !(function (e, t) {
    if (!(e instanceof h))
      throw new TypeError(
        "setValue must be passed a tracked store created with `createStorage`.",
      );
    e.value = e._lastValue = t;
  })(e, t);
}
var _ = (e) => {
    let t = e.collectionTag;
    null === t && (t = e.collectionTag = b()), y(t);
  },
  x = (e) => {
    let t = e.collectionTag;
    null !== t && S(t, null);
  },
  w = 0,
  E = Object.getPrototypeOf({}),
  T = class {
    constructor(e) {
      (this.value = e), (this.value = e), (this.tag.value = e);
    }
    proxy = new Proxy(this, k);
    tag = b();
    tags = {};
    children = {};
    collectionTag = null;
    id = w++;
  },
  k = {
    get: (e, t) =>
      (function () {
        let { value: n } = e,
          r = Reflect.get(n, t);
        if ("symbol" == typeof t || t in E) return r;
        if ("object" == typeof r && null !== r) {
          let n = e.children[t];
          return (
            void 0 === n && (n = e.children[t] = A(r)),
            n.tag && y(n.tag),
            n.proxy
          );
        }
        {
          let n = e.tags[t];
          return (
            void 0 === n && ((n = e.tags[t] = b()), (n.value = r)), y(n), r
          );
        }
      })(),
    ownKeys: (e) => (_(e), Reflect.ownKeys(e.value)),
    getOwnPropertyDescriptor: (e, t) =>
      Reflect.getOwnPropertyDescriptor(e.value, t),
    has: (e, t) => Reflect.has(e.value, t),
  },
  C = class {
    constructor(e) {
      (this.value = e), (this.value = e), (this.tag.value = e);
    }
    proxy = new Proxy([this], I);
    tag = b();
    tags = {};
    children = {};
    collectionTag = null;
    id = w++;
  },
  I = {
    get: ([e], t) => ("length" === t && _(e), k.get(e, t)),
    ownKeys: ([e]) => k.ownKeys(e),
    getOwnPropertyDescriptor: ([e], t) => k.getOwnPropertyDescriptor(e, t),
    has: ([e], t) => k.has(e, t),
  };
function A(e) {
  return Array.isArray(e) ? new C(e) : new T(e);
}
function O(e, t) {
  let { value: n, tags: r, children: o } = e;
  if (
    ((e.value = t),
    Array.isArray(n) && Array.isArray(t) && n.length !== t.length)
  )
    x(e);
  else if (n !== t) {
    let r = 0,
      o = 0,
      i = !1;
    for (let e in n) r++;
    for (let e in t)
      if ((o++, !(e in n))) {
        i = !0;
        break;
      }
    (i || r !== o) && x(e);
  }
  for (let o in r) {
    let i = n[o],
      a = t[o];
    i !== a && (x(e), S(r[o], a)),
      "object" == typeof a && null !== a && delete r[o];
  }
  for (let e in o) {
    let n = o[e],
      r = t[e];
    n.value !== r &&
      ("object" == typeof r && null !== r ? O(n, r) : (R(n), delete o[e]));
  }
}
function R(e) {
  e.tag && S(e.tag, null), x(e);
  for (let t in e.tags) S(e.tags[t], null);
  for (let t in e.children) R(e.children[t]);
}
var M = (e, t) => e === t;
function P(e) {
  return function (t, n) {
    if (null === t || null === n || t.length !== n.length) return !1;
    let { length: r } = t;
    for (let o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
    return !0;
  };
}
function N(e, t) {
  let n = "object" == typeof t ? t : { equalityCheck: t },
    { equalityCheck: r = M, maxSize: o = 1, resultEqualityCheck: i } = n,
    a = P(r),
    s = 0,
    l =
      o <= 1
        ? (function (e) {
            let t;
            return {
              get: (n) => (t && e(t.key, n) ? t.value : c),
              put(e, n) {
                t = { key: e, value: n };
              },
              getEntries: () => (t ? [t] : []),
              clear() {
                t = void 0;
              },
            };
          })(a)
        : (function (e, t) {
            let n = [];
            function r(e) {
              let r = n.findIndex((n) => t(e, n.key));
              if (r > -1) {
                let e = n[r];
                return r > 0 && (n.splice(r, 1), n.unshift(e)), e.value;
              }
              return c;
            }
            return {
              get: r,
              put: function (t, o) {
                r(t) === c &&
                  (n.unshift({ key: t, value: o }), n.length > e && n.pop());
              },
              getEntries: function () {
                return n;
              },
              clear: function () {
                n = [];
              },
            };
          })(o, a);
  function u() {
    let t = l.get(arguments);
    if (t === c) {
      if (((t = e.apply(null, arguments)), s++, i)) {
        let e = l.getEntries().find((e) => i(e.value, t));
        e && ((t = e.value), 0 !== s && s--);
      }
      l.put(arguments, t);
    }
    return t;
  }
  return (
    (u.clearCache = () => {
      l.clear(), u.resetResultsCount();
    }),
    (u.resultsCount = () => s),
    (u.resetResultsCount = () => {
      s = 0;
    }),
    u
  );
}
function D(e) {
  let t = A([]),
    n = null,
    r = P(M),
    o = (function (e) {
      return (
        u(e, "the first parameter to `createCache` must be a function"),
        new g(e)
      );
    })(() => e.apply(null, t.proxy));
  function i() {
    return r(n, arguments) || (O(t, arguments), (n = arguments)), o.value;
  }
  return (i.clearCache = () => o.clear()), i;
}
var j =
  typeof WeakRef > "u"
    ? class {
        constructor(e) {
          this.value = e;
        }
        deref() {
          return this.value;
        }
      }
    : WeakRef;
function L() {
  return { s: 0, v: void 0, o: null, p: null };
}
function F(e, t = {}) {
  let n,
    r = { s: 0, v: void 0, o: null, p: null },
    { resultEqualityCheck: o } = t,
    i = 0;
  function a() {
    let t = r,
      { length: a } = arguments;
    for (let e = 0, n = a; e < n; e++) {
      let n = arguments[e];
      if ("function" == typeof n || ("object" == typeof n && null !== n)) {
        let e = t.o;
        null === e && (t.o = e = new WeakMap());
        let r = e.get(n);
        void 0 === r ? ((t = L()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        null === e && (t.p = e = new Map());
        let r = e.get(n);
        void 0 === r ? ((t = L()), e.set(n, t)) : (t = r);
      }
    }
    let s,
      l = t;
    if (1 === t.s) s = t.v;
    else if (((s = e.apply(null, arguments)), i++, o)) {
      let e = (function (e) {
        return e instanceof j ? e.deref() : e;
      })(n);
      null != e && o(e, s) && ((s = e), 0 !== i && i--),
        (n =
          ("object" == typeof s && null !== s) || "function" == typeof s
            ? new j(s)
            : s);
    }
    return (l.s = 1), (l.v = s), s;
  }
  return (
    (a.clearCache = () => {
      (r = { s: 0, v: void 0, o: null, p: null }), a.resetResultsCount();
    }),
    (a.resultsCount = () => i),
    (a.resetResultsCount = () => {
      i = 0;
    }),
    a
  );
}
function U(e, ...t) {
  let n = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t,
        r = 0,
        o = 0,
        i = {},
        a = e.pop();
      "object" == typeof a && ((i = a), (a = e.pop())),
        u(
          a,
          `createSelector expects an output function after the inputs, but received: [${typeof a}]`,
        );
      let s = { ...n, ...i },
        {
          memoize: l,
          memoizeOptions: c = [],
          argsMemoize: p = F,
          argsMemoizeOptions: f = [],
        } = s,
        h = d(c),
        m = d(f),
        g = (function (e) {
          let t = Array.isArray(e[0]) ? e[0] : e;
          return (
            (function (
              e,
              t = "expected all items to be functions, instead received the following types: ",
            ) {
              if (!e.every((e) => "function" == typeof e)) {
                let n = e
                  .map((e) =>
                    "function" == typeof e
                      ? `function ${e.name || "unnamed"}()`
                      : typeof e,
                  )
                  .join(", ");
                throw new TypeError(`${t}[${n}]`);
              }
            })(
              t,
              "createSelector expects all input-selectors to be functions, but received the following types: ",
            ),
            t
          );
        })(e),
        y = l(
          function () {
            return r++, a.apply(null, arguments);
          },
          ...h,
        ),
        v = p(
          function () {
            o++;
            let e = (function (e, t) {
              let n = [],
                { length: r } = e;
              for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
              return n;
            })(g, arguments);
            return (t = y.apply(null, e)), t;
          },
          ...m,
        );
      return Object.assign(v, {
        resultFunc: a,
        memoizedResultFunc: y,
        dependencies: g,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => t,
        recomputations: () => r,
        resetRecomputations: () => {
          r = 0;
        },
        memoize: l,
        argsMemoize: p,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var B = U(F),
  z = Object.assign(
    (e, t = B) => {
      !(function (e, t = "expected an object, instead received " + typeof e) {
        if ("object" != typeof e) throw new TypeError(t);
      })(
        e,
        "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " +
          typeof e,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => z },
  );

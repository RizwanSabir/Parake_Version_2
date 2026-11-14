// vendor/module-25133.js — webpack module 25133
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { QueriesObserver: () => h }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(46783 /* vendor/module-46783 */),
  u = n(50033 /* vendor/module-50033 */),
  d = n(67650 /* vendor/module-67650 */),
  p = n(26036 /* vendor/module-26036 */);
function f(e, t) {
  const n = new Set(t);
  return e.filter((e) => !n.has(e));
}
var h = class extends d.Subscribable {
  #S;
  #N;
  #D;
  #j;
  #_;
  #L;
  #F;
  #U;
  #B;
  #z = [];
  constructor(e, t, n) {
    super(),
      (this.#S = e),
      (this.#j = n),
      (this.#D = []),
      (this.#_ = []),
      (this.#N = []),
      this.setQueries(t);
  }
  onSubscribe() {
    1 === this.listeners.size &&
      this.#_.forEach((e) => {
        e.subscribe((t) => {
          this.#H(e, t);
        });
      });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    (this.listeners = new Set()),
      this.#_.forEach((e) => {
        e.destroy();
      });
  }
  setQueries(e, t) {
    (this.#D = e),
      (this.#j = t),
      c.notifyManager.batch(() => {
        const e = this.#_,
          t = this.#V(this.#D);
        t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions));
        const n = t.map((e) => e.observer),
          r = n.map((e) => e.getCurrentResult()),
          o = e.length !== n.length,
          i = n.some((t, n) => t !== e[n]),
          a = o || i,
          s =
            !!a ||
            r.some((e, t) => {
              const n = this.#N[t];
              return !n || !(0, p.shallowEqualObjects)(e, n);
            });
        (a || s) &&
          (a && ((this.#z = t), (this.#_ = n)),
          (this.#N = r),
          this.hasListeners() &&
            (a &&
              (f(e, n).forEach((e) => {
                e.destroy();
              }),
              f(n, e).forEach((e) => {
                e.subscribe((t) => {
                  this.#H(e, t);
                });
              })),
            this.#M()));
      });
  }
  getCurrentResult() {
    return this.#N;
  }
  getQueries() {
    return this.#_.map((e) => e.getCurrentQuery());
  }
  getObservers() {
    return this.#_;
  }
  getOptimisticResult(e, t) {
    const n = this.#V(e),
      r = n.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions)),
      o = n.map((e) => e.defaultedQueryOptions.queryHash);
    return [r, (e) => this.#q(e ?? r, t, o), () => this.#G(r, n)];
  }
  #G(e, t) {
    return t.map((n, r) => {
      const o = e[r];
      return n.defaultedQueryOptions.notifyOnChangeProps
        ? o
        : n.observer.trackResult(o, (e) => {
            t.forEach((t) => {
              t.observer.trackProp(e);
            });
          });
    });
  }
  #q(e, t, n) {
    if (t) {
      const r = this.#B,
        o =
          void 0 !== n &&
          void 0 !== r &&
          (r.length !== n.length || n.some((e, t) => e !== r[t]));
      return (
        (this.#L && this.#N === this.#U && !o && t === this.#F) ||
          ((this.#F = t),
          (this.#U = this.#N),
          void 0 !== n && (this.#B = n),
          (this.#L = (0, p.replaceEqualDeep)(this.#L, t(e)))),
        this.#L
      );
    }
    return e;
  }
  #W() {
    return (
      void 0 !== this.#j?.combine &&
      this.#_.some((e, t) => e.options.suspense && void 0 === this.#N[t]?.data)
    );
  }
  #V(e) {
    const t = new Map();
    this.#_.forEach((e) => {
      const n = e.options.queryHash;
      if (!n) return;
      const r = t.get(n);
      r ? r.push(e) : t.set(n, [e]);
    });
    const n = [];
    return (
      e.forEach((e) => {
        const r = this.#S.defaultQueryOptions(e),
          o = t.get(r.queryHash)?.shift(),
          i = o ?? new u.QueryObserver(this.#S, r);
        n.push({ defaultedQueryOptions: r, observer: i });
      }),
      n
    );
  }
  #H(e, t) {
    const n = this.#_.indexOf(e);
    -1 !== n &&
      ((this.#N = (function (e, t, n) {
        const r = e.slice(0);
        return (r[t] = n), r;
      })(this.#N, n, t)),
      this.#M());
  }
  #M() {
    if (this.hasListeners()) {
      const e = this.#G(this.#N, this.#z),
        t = this.#W(),
        n = this.#L,
        r = t ? n : this.#q(e, this.#j?.combine);
      (t || n !== r) &&
        c.notifyManager.batch(() => {
          this.listeners.forEach((e) => {
            e(this.#N);
          });
        });
    }
  }
};

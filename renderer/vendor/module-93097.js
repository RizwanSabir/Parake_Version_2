// vendor/module-93097.js — webpack module 93097
// params: (e, t, n) = (module, exports, require)
const r = n(36103 /* vendor/module-36103 */);
function o(e, t, n) {
  const r = "object" == typeof e,
    o = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(o),
    error: (r ? e.error : t)?.bind(o),
    complete: (r ? e.complete : n)?.bind(o),
  };
}
const i = [];
let a = 0;
const {
  link: s,
  unlink: l,
  propagate: c,
  checkDirty: u,
  shallowPropagate: d,
} = r.createReactiveSystem({
  update: (e) => e._update(),
  notify(e) {
    (i[h++] = e), (e.flags &= ~r.ReactiveFlags.Watching);
  },
  unwatched(e) {
    void 0 !== e.depsTail &&
      ((e.depsTail = void 0),
      (e.flags = r.ReactiveFlags.Mutable | r.ReactiveFlags.Dirty),
      g(e));
  },
});
let p,
  f = 0,
  h = 0,
  m = 0;
function g(e) {
  const t = e.depsTail;
  let n = void 0 !== t ? t.nextDep : e.deps;
  for (; void 0 !== n; ) n = l(n, e);
}
function y() {
  if (!(m > 0)) {
    for (; f < h; ) {
      const e = i[f];
      (i[f++] = void 0), e.notify();
    }
    (f = 0), (h = 0);
  }
}
function v(e, t) {
  const n = "function" == typeof e,
    i = e,
    l = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? r.ReactiveFlags.None : r.ReactiveFlags.Mutable,
      get: () => (void 0 !== p && s(l, p, a), l._snapshot),
      subscribe(e) {
        const t = o(e),
          n = { current: !1 },
          i = (function () {
            const e = () => {
                const e = p;
                (p = o),
                  ++a,
                  (o.depsTail = void 0),
                  (o.flags =
                    r.ReactiveFlags.Watching | r.ReactiveFlags.RecursedCheck);
                try {
                  return (
                    l.get(),
                    void (n.current ? t.next?.(l._snapshot) : (n.current = !0))
                  );
                } finally {
                  (p = e), (o.flags &= ~r.ReactiveFlags.RecursedCheck), g(o);
                }
              },
              o = {
                deps: void 0,
                depsTail: void 0,
                subs: void 0,
                subsTail: void 0,
                flags: r.ReactiveFlags.Watching | r.ReactiveFlags.RecursedCheck,
                notify() {
                  const t = this.flags;
                  t & r.ReactiveFlags.Dirty ||
                  (t & r.ReactiveFlags.Pending && u(this.deps, this))
                    ? e()
                    : (this.flags = r.ReactiveFlags.Watching);
                },
                stop() {
                  (this.flags = r.ReactiveFlags.None),
                    (this.depsTail = void 0),
                    g(this);
                },
              };
            return e(), o;
          })();
        return {
          unsubscribe: () => {
            i.stop();
          },
        };
      },
      _update(e) {
        const o = p,
          s = t?.compare ?? Object.is;
        if (n) (p = l), ++a, (l.depsTail = void 0);
        else if (void 0 === e) return !1;
        n &&
          (l.flags = r.ReactiveFlags.Mutable | r.ReactiveFlags.RecursedCheck);
        try {
          const t = l._snapshot,
            r = "function" == typeof e ? e(t) : void 0 === e && n ? i(t) : e;
          return !((void 0 !== t && s(t, r)) || ((l._snapshot = r), 0));
        } finally {
          (p = o), n && (l.flags &= ~r.ReactiveFlags.RecursedCheck), g(l);
        }
      },
    };
  return (
    n
      ? ((l.flags = r.ReactiveFlags.Mutable | r.ReactiveFlags.Dirty),
        (l.get = function () {
          const e = l.flags;
          if (
            e & r.ReactiveFlags.Dirty ||
            (e & r.ReactiveFlags.Pending && u(l.deps, l))
          ) {
            if (l._update()) {
              const e = l.subs;
              void 0 !== e && d(e);
            }
          } else
            e & r.ReactiveFlags.Pending &&
              (l.flags = e & ~r.ReactiveFlags.Pending);
          return void 0 !== p && s(l, p, a), l._snapshot;
        }))
      : (l.set = function (e) {
          if (l._update(e)) {
            const e = l.subs;
            void 0 !== e && (c(e), d(e), y());
          }
        }),
    l
  );
}
(t.batch = function (e) {
  try {
    ++m, e();
  } finally {
    --m || y();
  }
}),
  (t.createAsyncAtom = function (e, t) {
    const n = {},
      r = v(
        () => (
          e().then(
            (e) => {
              const t = n.current;
              if (t._update({ status: "done", data: e })) {
                const e = t.subs;
                void 0 !== e && (c(e), d(e), y());
              }
            },
            (e) => {
              const t = n.current;
              if (t._update({ status: "error", error: e })) {
                const e = t.subs;
                void 0 !== e && (c(e), d(e), y());
              }
            },
          ),
          { status: "pending" }
        ),
        t,
      );
    return (n.current = r), r;
  }),
  (t.createAtom = v),
  (t.flush = y),
  (t.toObserver = o);

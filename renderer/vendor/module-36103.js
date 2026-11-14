// vendor/module-36103.js — webpack module 36103
// params: (e, t) = (module, exports, require)
let n = (function (e) {
  return (
    (e[(e.None = 0)] = "None"),
    (e[(e.Mutable = 1)] = "Mutable"),
    (e[(e.Watching = 2)] = "Watching"),
    (e[(e.RecursedCheck = 4)] = "RecursedCheck"),
    (e[(e.Recursed = 8)] = "Recursed"),
    (e[(e.Dirty = 16)] = "Dirty"),
    (e[(e.Pending = 32)] = "Pending"),
    e
  );
})({});
(t.ReactiveFlags = n),
  (t.createReactiveSystem = function ({ update: e, notify: t, unwatched: r }) {
    return {
      link: function (e, t, n) {
        const r = t.depsTail;
        if (void 0 !== r && r.dep === e) return;
        const o = void 0 !== r ? r.nextDep : t.deps;
        if (void 0 !== o && o.dep === e)
          return (o.version = n), void (t.depsTail = o);
        const i = e.subsTail;
        if (void 0 !== i && i.version === n && i.sub === t) return;
        const a =
          (t.depsTail =
          e.subsTail =
            {
              version: n,
              dep: e,
              sub: t,
              prevDep: r,
              nextDep: o,
              prevSub: i,
              nextSub: void 0,
            });
        void 0 !== o && (o.prevDep = a),
          void 0 !== r ? (r.nextDep = a) : (t.deps = a),
          void 0 !== i ? (i.nextSub = a) : (e.subs = a);
      },
      unlink: function (e, t = e.sub) {
        const n = e.dep,
          o = e.prevDep,
          i = e.nextDep,
          a = e.nextSub,
          s = e.prevSub;
        return (
          void 0 !== i ? (i.prevDep = o) : (t.depsTail = o),
          void 0 !== o ? (o.nextDep = i) : (t.deps = i),
          void 0 !== a ? (a.prevSub = s) : (n.subsTail = s),
          void 0 !== s ? (s.nextSub = a) : void 0 === (n.subs = a) && r(n),
          i
        );
      },
      propagate: function (e) {
        let r,
          o = e.nextSub;
        e: for (;;) {
          const a = e.sub;
          let s = a.flags;
          if (
            (s & (n.RecursedCheck | n.Recursed | n.Dirty | n.Pending)
              ? s & (n.RecursedCheck | n.Recursed)
                ? s & n.RecursedCheck
                  ? s & (n.Dirty | n.Pending) || !i(e, a)
                    ? (s = n.None)
                    : ((a.flags = s | n.Recursed | n.Pending), (s &= n.Mutable))
                  : (a.flags = (s & ~n.Recursed) | n.Pending)
                : (s = n.None)
              : (a.flags = s | n.Pending),
            s & n.Watching && t(a),
            s & n.Mutable)
          ) {
            const t = a.subs;
            if (void 0 !== t) {
              const n = (e = t).nextSub;
              void 0 !== n && ((r = { value: o, prev: r }), (o = n));
              continue;
            }
          }
          if (void 0 === (e = o)) {
            for (; void 0 !== r; )
              if (((e = r.value), (r = r.prev), void 0 !== e)) {
                o = e.nextSub;
                continue e;
              }
            break;
          }
          o = e.nextSub;
        }
      },
      checkDirty: function (t, r) {
        let i,
          a = 0,
          s = !1;
        e: for (;;) {
          const l = t.dep,
            c = l.flags;
          if (r.flags & n.Dirty) s = !0;
          else if ((c & (n.Mutable | n.Dirty)) === (n.Mutable | n.Dirty)) {
            if (e(l)) {
              const e = l.subs;
              void 0 !== e.nextSub && o(e), (s = !0);
            }
          } else if (
            (c & (n.Mutable | n.Pending)) ===
            (n.Mutable | n.Pending)
          ) {
            (void 0 === t.nextSub && void 0 === t.prevSub) ||
              (i = { value: t, prev: i }),
              (t = l.deps),
              (r = l),
              ++a;
            continue;
          }
          if (!s) {
            const e = t.nextDep;
            if (void 0 !== e) {
              t = e;
              continue;
            }
          }
          for (; a--; ) {
            const a = r.subs,
              l = void 0 !== a.nextSub;
            if ((l ? ((t = i.value), (i = i.prev)) : (t = a), s)) {
              if (e(r)) {
                l && o(a), (r = t.sub);
                continue;
              }
              s = !1;
            } else r.flags &= ~n.Pending;
            r = t.sub;
            const c = t.nextDep;
            if (void 0 !== c) {
              t = c;
              continue e;
            }
          }
          return s;
        }
      },
      shallowPropagate: o,
    };
    function o(e) {
      do {
        const r = e.sub,
          o = r.flags;
        (o & (n.Pending | n.Dirty)) === n.Pending &&
          ((r.flags = o | n.Dirty),
          (o & (n.Watching | n.RecursedCheck)) === n.Watching && t(r));
      } while (void 0 !== (e = e.nextSub));
    }
    function i(e, t) {
      let n = t.depsTail;
      for (; void 0 !== n; ) {
        if (n === e) return !0;
        n = n.prevDep;
      }
      return !1;
    }
  });

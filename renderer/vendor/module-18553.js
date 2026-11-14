// vendor/module-18553.js — webpack module 18553
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.tuple =
    t.struct =
    t.string =
    t.reverse =
    t.productMany =
    t.product =
    t.number =
    t.min =
    t.max =
    t.mapInput =
    t.make =
    t.lessThanOrEqualTo =
    t.lessThan =
    t.greaterThanOrEqualTo =
    t.greaterThan =
    t.empty =
    t.combineMany =
    t.combineAll =
    t.combine =
    t.clamp =
    t.boolean =
    t.bigint =
    t.between =
    t.array =
    t.all =
    t.Date =
      void 0);
var r = n(74109 /* vendor/module-74109 */);
const o = (e) => (t, n) => (t === n ? 0 : e(t, n));
(t.make = o), (t.string = o((e, t) => (e < t ? -1 : 1)));
const i = (t.number = o((e, t) => (e < t ? -1 : 1)));
(t.boolean = o((e, t) => (e < t ? -1 : 1))),
  (t.bigint = o((e, t) => (e < t ? -1 : 1))),
  (t.reverse = (e) => o((t, n) => e(n, t))),
  (t.combine = (0, r.dual)(2, (e, t) =>
    o((n, r) => {
      const o = e(n, r);
      return 0 !== o ? o : t(n, r);
    }),
  ));
const a = (t.combineMany = (0, r.dual)(2, (e, t) =>
    o((n, r) => {
      let o = e(n, r);
      if (0 !== o) return o;
      for (const e of t) if (((o = e(n, r)), 0 !== o)) return o;
      return o;
    }),
  )),
  s = () => o(() => 0);
(t.empty = s), (t.combineAll = (e) => a(s(), e));
const l = (t.mapInput = (0, r.dual)(2, (e, t) => o((n, r) => e(t(n), t(r))))),
  c =
    ((t.Date = l(i, (e) => e.getTime())),
    (t.product = (0, r.dual)(2, (e, t) =>
      o(([n, r], [o, i]) => {
        const a = e(n, o);
        return 0 !== a ? a : t(r, i);
      }),
    )),
    (e) =>
      o((t, n) => {
        const r = Math.min(t.length, n.length);
        let o = 0;
        for (const i of e) {
          if (o >= r) break;
          const e = i(t[o], n[o]);
          if (0 !== e) return e;
          o++;
        }
        return 0;
      }));
(t.all = c),
  (t.productMany = (0, r.dual)(2, (e, t) => {
    const n = c(t);
    return o((t, r) => {
      const o = e(t[0], r[0]);
      return 0 !== o ? o : n(t.slice(1), r.slice(1));
    });
  })),
  (t.tuple = (...e) => c(e)),
  (t.array = (e) =>
    o((t, n) => {
      const r = t.length,
        o = n.length,
        a = Math.min(r, o);
      for (let r = 0; r < a; r++) {
        const o = e(t[r], n[r]);
        if (0 !== o) return o;
      }
      return i(r, o);
    })),
  (t.struct = (e) => {
    const t = Object.keys(e);
    return o((n, r) => {
      for (const o of t) {
        const t = e[o](n[o], r[o]);
        if (0 !== t) return t;
      }
      return 0;
    });
  });
const u = (e) => (0, r.dual)(2, (t, n) => -1 === e(t, n));
t.lessThan = u;
const d = (e) => (0, r.dual)(2, (t, n) => 1 === e(t, n));
(t.greaterThan = d),
  (t.lessThanOrEqualTo = (e) => (0, r.dual)(2, (t, n) => 1 !== e(t, n))),
  (t.greaterThanOrEqualTo = (e) => (0, r.dual)(2, (t, n) => -1 !== e(t, n)));
const p = (e) => (0, r.dual)(2, (t, n) => (t === n || e(t, n) < 1 ? t : n));
t.min = p;
const f = (e) => (0, r.dual)(2, (t, n) => (t === n || e(t, n) > -1 ? t : n));
(t.max = f),
  (t.clamp = (e) =>
    (0, r.dual)(2, (t, n) => p(e)(n.maximum, f(e)(n.minimum, t)))),
  (t.between = (e) =>
    (0, r.dual)(2, (t, n) => !u(e)(t, n.minimum) && !d(e)(t, n.maximum)));

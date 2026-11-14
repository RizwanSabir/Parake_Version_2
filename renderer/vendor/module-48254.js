// vendor/module-48254.js — webpack module 48254
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.tuple =
    t.symbol =
    t.struct =
    t.string =
    t.strict =
    t.productMany =
    t.product =
    t.number =
    t.mapInput =
    t.make =
    t.combineMany =
    t.combineAll =
    t.combine =
    t.boolean =
    t.bigint =
    t.array =
    t.all =
    t.Date =
      void 0);
var r = n(74109 /* vendor/module-74109 */);
const o = (e) => (t, n) => t === n || e(t, n);
t.make = o;
const i = (e, t) => e === t,
  a = () => i;
(t.strict = a), (t.string = a());
const s = (t.number = a()),
  l =
    ((t.boolean = a()),
    (t.bigint = a()),
    (t.symbol = a()),
    (t.combine = (0, r.dual)(2, (e, t) => o((n, r) => e(n, r) && t(n, r)))),
    (t.combineMany = (0, r.dual)(2, (e, t) =>
      o((n, r) => {
        if (!e(n, r)) return !1;
        for (const e of t) if (!e(n, r)) return !1;
        return !0;
      }),
    ))),
  c = (e, t) => !0;
t.combineAll = (e) => l(c, e);
const u = (t.mapInput = (0, r.dual)(2, (e, t) => o((n, r) => e(t(n), t(r))))),
  d =
    ((t.Date = u(s, (e) => e.getTime())),
    (t.product = (0, r.dual)(2, (e, t) =>
      o(([n, r], [o, i]) => e(n, o) && t(r, i)),
    )),
    (e) =>
      o((t, n) => {
        const r = Math.min(t.length, n.length);
        let o = 0;
        for (const i of e) {
          if (o >= r) break;
          if (!i(t[o], n[o])) return !1;
          o++;
        }
        return !0;
      }));
(t.all = d),
  (t.productMany = (e, t) => {
    const n = d(t);
    return o((t, r) => !!e(t[0], r[0]) && n(t.slice(1), r.slice(1)));
  }),
  (t.tuple = (...e) => d(e)),
  (t.array = (e) =>
    o((t, n) => {
      if (t.length !== n.length) return !1;
      for (let r = 0; r < t.length; r++) if (!e(t[r], n[r])) return !1;
      return !0;
    })),
  (t.struct = (e) => {
    const t = Object.keys(e);
    return o((n, r) => {
      for (const o of t) if (!e[o](n[o], r[o])) return !1;
      return !0;
    });
  });

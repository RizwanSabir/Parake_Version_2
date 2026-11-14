// vendor/module-68994.js — webpack module 68994
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = (e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(
      !t && e && e.__esModule
        ? n
        : i(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  ),
  p = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(p, {
  useControllableState: () => g,
  useControllableStateReducer: () => S,
}),
  (e.exports = ((r = p), u(i({}, "__esModule", { value: !0 }), r)));
var f = d(n(14041 /* vendor/module-14041 */)),
  h = n(70135 /* vendor/module-70135 */),
  m = f[" useInsertionEffect ".trim().toString()] || h.useLayoutEffect;
function g({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, a] = (function ({ defaultProp: e, onChange: t }) {
      const [n, r] = f.useState(e),
        o = f.useRef(n),
        i = f.useRef(t);
      return (
        m(() => {
          i.current = t;
        }, [t]),
        f.useEffect(() => {
          o.current !== n && (i.current?.(n), (o.current = n));
        }, [n, o]),
        [n, r, i]
      );
    })({ defaultProp: t, onChange: n }),
    s = void 0 !== e,
    l = s ? e : o;
  {
    const t = f.useRef(void 0 !== e);
    f.useEffect(() => {
      t.current;
      t.current = s;
    }, [s, r]);
  }
  const c = f.useCallback(
    (t) => {
      if (s) {
        const n = (function (e) {
          return "function" == typeof e;
        })(t)
          ? t(e)
          : t;
        n !== e && a.current?.(n);
      } else i(t);
    },
    [s, e, i, a],
  );
  return [l, c];
}
var y = d(n(14041 /* vendor/module-14041 */)),
  v = n(88683 /* vendor/module-88683 */),
  b = Symbol("RADIX:SYNC_STATE");
function S(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: a, caller: s } = t,
    l = void 0 !== o,
    c = (0, v.useEffectEvent)(a);
  {
    const e = y.useRef(void 0 !== o);
    y.useEffect(() => {
      e.current;
      e.current = l;
    }, [l, s]);
  }
  const u = [{ ...n, state: i }];
  r && u.push(r);
  const [d, p] = y.useReducer(
      (t, n) => {
        if (n.type === b) return { ...t, state: n.state };
        const r = e(t, n);
        return l && !Object.is(r.state, t.state) && c(r.state), r;
      },
      ...u,
    ),
    f = d.state,
    h = y.useRef(f);
  y.useEffect(() => {
    h.current !== f && ((h.current = f), l || c(f));
  }, [c, f, h, l]);
  const m = y.useMemo(() => (void 0 !== o ? { ...d, state: o } : d), [d, o]);
  return (
    y.useEffect(() => {
      l && !Object.is(o, d.state) && p({ type: b, state: o });
    }, [o, d.state, l]),
    [m, p]
  );
}

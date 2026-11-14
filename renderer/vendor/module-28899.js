// vendor/module-28899.js — webpack module 28899
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
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, { HydrationBoundary: () => m }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = n(14113 /* vendor/module-14113 */),
  m = ({ children: e, options: t = {}, state: n, queryClient: r }) => {
    const o = (0, h.useQueryClient)(r),
      i = p.useRef(t);
    p.useEffect(() => {
      i.current = t;
    });
    const a = p.useMemo(() => {
      if (n) {
        if ("object" != typeof n) return;
        const e = o.getQueryCache(),
          t = n.queries || [],
          r = [],
          a = [];
        for (const n of t) {
          const t = e.get(n.queryHash);
          t
            ? (n.state.dataUpdatedAt > t.state.dataUpdatedAt ||
                (n.promise &&
                  "pending" !== t.state.status &&
                  "fetching" !== t.state.fetchStatus &&
                  void 0 !== n.dehydratedAt &&
                  n.dehydratedAt > t.state.dataUpdatedAt)) &&
              a.push(n)
            : r.push(n);
        }
        if (
          (r.length > 0 && (0, f.hydrate)(o, { queries: r }, i.current),
          a.length > 0)
        )
          return a;
      }
    }, [o, n]);
    return (
      p.useEffect(() => {
        a && (0, f.hydrate)(o, { queries: a }, i.current);
      }, [o, a]),
      e
    );
  };

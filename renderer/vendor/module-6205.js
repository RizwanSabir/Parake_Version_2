// vendor/module-6205.js — webpack module 6205
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
})(l, {
  hasNextPage: () => f,
  hasPreviousPage: () => h,
  infiniteQueryBehavior: () => u,
}),
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
var c = n(26036 /* vendor/module-26036 */);
function u(e) {
  return {
    onFetch: (t, n) => {
      const r = t.options,
        o = t.fetchOptions?.meta?.fetchMore?.direction,
        i = t.state.data?.pages || [],
        a = t.state.data?.pageParams || [];
      let s = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let n = !1;
        const u = (0, c.ensureQueryFn)(t.options, t.fetchOptions),
          f = async (e, r, o) => {
            if (n) return Promise.reject(t.signal.reason);
            if (null == r && e.pages.length) return Promise.resolve(e);
            const i = (() => {
                const e = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: r,
                  direction: o ? "backward" : "forward",
                  meta: t.options.meta,
                };
                var i;
                return (
                  (i = e),
                  (0, c.addConsumeAwareSignal)(
                    i,
                    () => t.signal,
                    () => (n = !0),
                  ),
                  e
                );
              })(),
              a = await u(i),
              { maxPages: s } = t.options,
              l = o ? c.addToStart : c.addToEnd;
            return {
              pages: l(e.pages, a, s),
              pageParams: l(e.pageParams, r, s),
            };
          };
        if (o && i.length) {
          const e = "backward" === o,
            t = { pages: i, pageParams: a },
            n = (e ? p : d)(r, t);
          s = await f(t, n, e);
        } else {
          const t = e ?? i.length;
          do {
            const e = 0 === l ? (a[0] ?? r.initialPageParam) : d(r, s);
            if (l > 0 && null == e) break;
            (s = await f(s, e)), l++;
          } while (l < t);
        }
        return s;
      };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              u,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = u);
    },
  };
}
function d(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function p(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function f(e, t) {
  return !!t && null != d(e, t);
}
function h(e, t) {
  return !(!t || !e.getPreviousPageParam) && null != p(e, t);
}

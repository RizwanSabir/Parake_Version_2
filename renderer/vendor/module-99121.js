// vendor/module-99121.js — webpack module 99121
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
  defaultShouldDehydrateMutation: () => h,
  defaultShouldDehydrateQuery: () => m,
  dehydrate: () => y,
  hydrate: () => v,
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
var c = n(94200 /* vendor/module-94200 */),
  u = n(26036 /* vendor/module-26036 */);
function d(e) {
  return e;
}
function p(e) {
  return {
    mutationKey: e.options.mutationKey,
    state: e.state,
    ...(e.options.scope && { scope: e.options.scope }),
    ...(e.meta && { meta: e.meta }),
  };
}
function f(e, t, n) {
  return {
    dehydratedAt: Date.now(),
    state: {
      ...e.state,
      ...(void 0 !== e.state.data && { data: t(e.state.data) }),
    },
    queryKey: e.queryKey,
    queryHash: e.queryHash,
    ...("pending" === e.state.status && {
      promise: (() => {
        const r = e.promise
          ?.then(t)
          .catch((e) =>
            n(e) ? Promise.reject(new Error("redacted")) : Promise.reject(e),
          );
        return r?.catch(u.noop), r;
      })(),
    }),
    ...(e.meta && { meta: e.meta }),
    ...(e.queryType && { queryType: e.queryType }),
  };
}
function h(e) {
  return e.state.isPaused;
}
function m(e) {
  return "success" === e.state.status;
}
function g(e) {
  return !0;
}
function y(e, t = {}) {
  const n =
      t.shouldDehydrateMutation ??
      e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
      h,
    r = e
      .getMutationCache()
      .getAll()
      .flatMap((e) => (n(e) ? [p(e)] : [])),
    o =
      t.shouldDehydrateQuery ??
      e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ??
      m,
    i =
      t.shouldRedactErrors ??
      e.getDefaultOptions().dehydrate?.shouldRedactErrors ??
      g,
    a = t.serializeData ?? e.getDefaultOptions().dehydrate?.serializeData ?? d;
  return {
    mutations: r,
    queries: e
      .getQueryCache()
      .getAll()
      .flatMap((e) => (o(e) ? [f(e, a, i)] : [])),
  };
}
function v(e, t, n) {
  if ("object" != typeof t || null === t) return;
  const r = e.getMutationCache(),
    o = e.getQueryCache(),
    i =
      n?.defaultOptions?.deserializeData ??
      e.getDefaultOptions().hydrate?.deserializeData ??
      d,
    a = t.mutations || [],
    s = t.queries || [];
  a.forEach(({ state: t, ...o }) => {
    r.build(
      e,
      {
        ...e.getDefaultOptions().hydrate?.mutations,
        ...n?.defaultOptions?.mutations,
        ...o,
      },
      t,
    );
  }),
    s.forEach(
      ({
        queryKey: t,
        state: r,
        queryHash: a,
        meta: s,
        promise: l,
        dehydratedAt: d,
        queryType: p,
      }) => {
        const f = l ? (0, c.tryResolveSync)(l) : void 0,
          h = void 0 === r.data ? f?.data : r.data,
          m = void 0 === h ? h : i(h);
        let g = o.get(a);
        const y = "pending" === g?.state.status,
          v = "fetching" === g?.state.fetchStatus;
        if (g) {
          const e = f && void 0 !== d && d > g.state.dataUpdatedAt;
          if (r.dataUpdatedAt > g.state.dataUpdatedAt || e) {
            const { fetchStatus: e, ...t } = r;
            g.setState({
              ...t,
              data: m,
              ...("pending" === r.status &&
                void 0 !== m && {
                  status: "success",
                  ...(!v && { fetchStatus: "idle" }),
                }),
            });
          }
        } else
          g = o.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.queries,
              ...n?.defaultOptions?.queries,
              queryKey: t,
              queryHash: a,
              meta: s,
              _type: p,
            },
            {
              ...r,
              data: m,
              fetchStatus: "idle",
              status:
                "pending" === r.status && void 0 !== m ? "success" : r.status,
            },
          );
        !l ||
          f ||
          y ||
          v ||
          !(void 0 === d || d > g.state.dataUpdatedAt) ||
          g
            .fetch(void 0, {
              initialPromise: Promise.resolve(l).then(i),
            })
            .catch(u.noop);
      },
    );
}

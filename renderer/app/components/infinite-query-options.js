// app/components/infinite-query-options.js — webpack module 33811
// params: (e, t, n) = (module, exports, require)
const r = n(92686 /* vendor/module-92686 */),
  o = r.__toESM(n(21692 /* vendor/module-21692 */)),
  i = r.__toESM(n(24383 /* vendor/module-24383 */)),
  a = r.__toESM(n(35e3)),
  s = r.__toESM(n(14041 /* vendor/module-14041 */)),
  l = r.__toESM(n(31085 /* vendor/module-31085 */));
function c(e) {
  return (0, a.createRecursiveProxy)(({ path: t, args: n }) => {
    var r;
    const o = [...t],
      i = o.pop();
    if ("useMutation" === i) return e[i](o, ...n);
    if ("_def" === i) return { path: o };
    const [a, ...s] = n,
      l = null !== (r = s[0]) && void 0 !== r ? r : {};
    return e[i](o, a, l);
  });
}
var u;
const d = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
  p = null === (u = s.createContext) || void 0 === u ? void 0 : u.call(s, null);
function f(e) {
  return (0, a.createRecursiveProxy)((t) => {
    const n = [...t.path],
      o = n.pop(),
      i = [...t.args],
      a = i.shift(),
      s = ((e) => {
        switch (e) {
          case "queryOptions":
          case "fetch":
          case "ensureData":
          case "prefetch":
          case "getData":
          case "setData":
          case "setQueriesData":
            return "query";
          case "infiniteQueryOptions":
          case "fetchInfinite":
          case "prefetchInfinite":
          case "getInfiniteData":
          case "setInfiniteData":
            return "infinite";
          case "setMutationDefaults":
          case "getMutationDefaults":
          case "isMutating":
          case "cancel":
          case "invalidate":
          case "refetch":
          case "reset":
            return "any";
        }
      })(o),
      l = r.getQueryKeyInternal(n, a, s);
    return {
      infiniteQueryOptions: () => e.infiniteQueryOptions(n, l, i[0]),
      queryOptions: () => e.queryOptions(n, l, ...i),
      fetch: () => e.fetchQuery(l, ...i),
      fetchInfinite: () => e.fetchInfiniteQuery(l, i[0]),
      prefetch: () => e.prefetchQuery(l, ...i),
      prefetchInfinite: () => e.prefetchInfiniteQuery(l, i[0]),
      ensureData: () => e.ensureQueryData(l, ...i),
      invalidate: () => e.invalidateQueries(l, ...i),
      reset: () => e.resetQueries(l, ...i),
      refetch: () => e.refetchQueries(l, ...i),
      cancel: () => e.cancelQuery(l, ...i),
      setData: () => {
        e.setQueryData(l, i[0], i[1]);
      },
      setQueriesData: () => e.setQueriesData(l, i[0], i[1], i[2]),
      setInfiniteData: () => {
        e.setInfiniteQueryData(l, i[0], i[1]);
      },
      getData: () => e.getQueryData(l),
      getInfiniteData: () => e.getInfiniteQueryData(l),
      setMutationDefaults: () =>
        e.setMutationDefaults(r.getMutationKeyInternal(n), a),
      getMutationDefaults: () =>
        e.getMutationDefaults(r.getMutationKeyInternal(n)),
      isMutating: () =>
        e.isMutating({ mutationKey: r.getMutationKeyInternal(n) }),
    }[o]();
  });
}
function h(e) {
  const t = (0, o.createTRPCClientProxy)(e.client),
    n = f(e);
  return (0, a.createFlatProxy)((r) => {
    const o = r;
    return "client" === o ? t : d.includes(o) ? e[o] : n[r];
  });
}
function m(e) {
  return f(e);
}
var g = r.__toESM(r.require_objectSpread2(), 1);
function y(e) {
  const t = e instanceof o.TRPCUntypedClient ? e : (0, o.getUntypedClient)(e);
  return (0, a.createRecursiveProxy)((e) => {
    const n = e.path,
      o = n.join("."),
      [i, a] = e.args;
    return (0, g.default)(
      {
        queryKey: r.getQueryKeyInternal(n, i, "query"),
        queryFn: () => t.query(o, i, null == a ? void 0 : a.trpc),
      },
      a,
    );
  });
}
var v = r.__toESM(r.require_objectSpread2(), 1);
function b(e, t, n) {
  var r;
  const o = e[0];
  let i = null === (r = e[1]) || void 0 === r ? void 0 : r.input;
  var a;
  return (
    n &&
      (i = (0, v.default)(
        (0, v.default)(
          (0, v.default)({}, null !== (a = i) && void 0 !== a ? a : {}),
          n.pageParam ? { cursor: n.pageParam } : {},
        ),
        {},
        { direction: n.direction },
      )),
    [o.join("."), i, null == t ? void 0 : t.trpc]
  );
}
var S = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(
      e,
      t,
    ) {
      function n(e) {
        function t(e) {
          if (Object(e) !== e)
            return Promise.reject(new TypeError(e + " is not an object."));
          var t = e.done;
          return Promise.resolve(e.value).then(function (e) {
            return { value: e, done: t };
          });
        }
        return (
          ((n = function (e) {
            (this.s = e), (this.n = e.next);
          }).prototype = {
            s: null,
            n: null,
            next: function () {
              return t(this.n.apply(this.s, arguments));
            },
            return: function (e) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.resolve({ value: e, done: !0 })
                : t(n.apply(this.s, arguments));
            },
            throw: function (e) {
              var n = this.s.return;
              return void 0 === n
                ? Promise.reject(e)
                : t(n.apply(this.s, arguments));
            },
          }),
          new n(e)
        );
      }
      (t.exports = function (e) {
        var t,
          r,
          o,
          i = 2;
        for (
          "undefined" != typeof Symbol &&
          ((r = Symbol.asyncIterator), (o = Symbol.iterator));
          i--;

        ) {
          if (r && null != (t = e[r])) return t.call(e);
          if (o && null != (t = e[o])) return new n(t.call(e));
          (r = "@@asyncIterator"), (o = "@@iterator");
        }
        throw new TypeError("Object is not async iterable");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  _ = r.__toESM(S(), 1);
function x(e) {
  return { path: e.path.join(".") };
}
function w(e) {
  const t = x(e);
  return s.useMemo(() => t, [t]);
}
async function E(e, t, n) {
  const r = t.getQueryCache().build(t, { queryKey: n });
  r.setState({ data: [], status: "success" });
  const o = [];
  var i,
    a = !1,
    s = !1;
  try {
    for (
      var l, c = (0, _.default)(e);
      (a = !(l = await c.next()).done);
      a = !1
    ) {
      const e = l.value;
      o.push(e), r.setState({ data: [...o] });
    }
  } catch (e) {
    (s = !0), (i = e);
  } finally {
    try {
      a && null != c.return && (await c.return());
    } finally {
      if (s) throw i;
    }
  }
  return o;
}
var T = r.__toESM(r.require_objectSpread2(), 1);
function k(e) {
  const { client: t, queryClient: n } = e,
    r = t instanceof o.TRPCUntypedClient ? t : (0, o.getUntypedClient)(t);
  return {
    infiniteQueryOptions: (e, t, n) => {
      var o, a;
      const s =
        (null === (o = t[1]) || void 0 === o ? void 0 : o.input) ===
        i.skipToken;
      return Object.assign(
        (0, i.infiniteQueryOptions)(
          (0, T.default)(
            (0, T.default)({}, n),
            {},
            {
              initialData: null == n ? void 0 : n.initialData,
              queryKey: t,
              queryFn: s
                ? i.skipToken
                : async (e) => {
                    var o;
                    const i = (0, T.default)(
                      (0, T.default)({}, n),
                      {},
                      {
                        trpc: (0, T.default)(
                          (0, T.default)({}, null == n ? void 0 : n.trpc),
                          (
                            null == n || null === (o = n.trpc) || void 0 === o
                              ? void 0
                              : o.abortOnUnmount
                          )
                            ? { signal: e.signal }
                            : { signal: null },
                        ),
                      },
                    );
                    return await r.query(
                      ...b(t, i, {
                        direction: e.direction,
                        pageParam: e.pageParam,
                      }),
                    );
                  },
              initialPageParam:
                null !== (a = null == n ? void 0 : n.initialCursor) &&
                void 0 !== a
                  ? a
                  : null,
            },
          ),
        ),
        { trpc: x({ path: e }) },
      );
    },
    queryOptions: (e, t, o) => {
      var s;
      const l =
        (null === (s = t[1]) || void 0 === s ? void 0 : s.input) ===
        i.skipToken;
      return Object.assign(
        (0, i.queryOptions)(
          (0, T.default)(
            (0, T.default)({}, o),
            {},
            {
              initialData: null == o ? void 0 : o.initialData,
              queryKey: t,
              queryFn: l
                ? i.skipToken
                : async (e) => {
                    var i;
                    const s = (0, T.default)(
                        (0, T.default)({}, o),
                        {},
                        {
                          trpc: (0, T.default)(
                            (0, T.default)({}, null == o ? void 0 : o.trpc),
                            (
                              null == o || null === (i = o.trpc) || void 0 === i
                                ? void 0
                                : i.abortOnUnmount
                            )
                              ? { signal: e.signal }
                              : { signal: null },
                          ),
                        },
                      ),
                      l = await r.query(...b(t, s));
                    return (0, a.isAsyncIterable)(l) ? E(l, n, t) : l;
                  },
            },
          ),
        ),
        { trpc: x({ path: e }) },
      );
    },
    fetchQuery: (e, t) =>
      n.fetchQuery(
        (0, T.default)(
          (0, T.default)({}, t),
          {},
          { queryKey: e, queryFn: () => r.query(...b(e, t)) },
        ),
      ),
    fetchInfiniteQuery: (e, t) => {
      var o;
      return n.fetchInfiniteQuery(
        (0, T.default)(
          (0, T.default)({}, t),
          {},
          {
            queryKey: e,
            queryFn: ({ pageParam: n, direction: o }) =>
              r.query(...b(e, t, { pageParam: n, direction: o })),
            initialPageParam:
              null !== (o = null == t ? void 0 : t.initialCursor) &&
              void 0 !== o
                ? o
                : null,
          },
        ),
      );
    },
    prefetchQuery: (e, t) =>
      n.prefetchQuery(
        (0, T.default)(
          (0, T.default)({}, t),
          {},
          { queryKey: e, queryFn: () => r.query(...b(e, t)) },
        ),
      ),
    prefetchInfiniteQuery: (e, t) => {
      var o;
      return n.prefetchInfiniteQuery(
        (0, T.default)(
          (0, T.default)({}, t),
          {},
          {
            queryKey: e,
            queryFn: ({ pageParam: n, direction: o }) =>
              r.query(...b(e, t, { pageParam: n, direction: o })),
            initialPageParam:
              null !== (o = null == t ? void 0 : t.initialCursor) &&
              void 0 !== o
                ? o
                : null,
          },
        ),
      );
    },
    ensureQueryData: (e, t) =>
      n.ensureQueryData(
        (0, T.default)(
          (0, T.default)({}, t),
          {},
          { queryKey: e, queryFn: () => r.query(...b(e, t)) },
        ),
      ),
    invalidateQueries: (e, t, r) =>
      n.invalidateQueries(
        (0, T.default)((0, T.default)({}, t), {}, { queryKey: e }),
        r,
      ),
    resetQueries: (e, t, r) =>
      n.resetQueries(
        (0, T.default)((0, T.default)({}, t), {}, { queryKey: e }),
        r,
      ),
    refetchQueries: (e, t, r) =>
      n.refetchQueries(
        (0, T.default)((0, T.default)({}, t), {}, { queryKey: e }),
        r,
      ),
    cancelQuery: (e, t) => n.cancelQueries({ queryKey: e }, t),
    setQueryData: (e, t, r) => n.setQueryData(e, t, r),
    setQueriesData: (e, t, r, o) =>
      n.setQueriesData(
        (0, T.default)((0, T.default)({}, t), {}, { queryKey: e }),
        r,
        o,
      ),
    getQueryData: (e) => n.getQueryData(e),
    setInfiniteQueryData: (e, t, r) => n.setQueryData(e, t, r),
    getInfiniteQueryData: (e) => n.getQueryData(e),
    setMutationDefaults: (t, o) => {
      const i = t[0];
      return n.setMutationDefaults(
        t,
        "function" == typeof o
          ? o({
              canonicalMutationFn: (t) =>
                r.mutation(...b([i, { input: t }], e)),
            })
          : o,
      );
    },
    getMutationDefaults: (e) => n.getMutationDefaults(e),
    isMutating: (e) =>
      n.isMutating((0, T.default)((0, T.default)({}, e), {}, { exact: !0 })),
  };
}
var C = r.__toESM(r.require_objectSpread2());
const I = (e, t) => new Proxy(e, { get: (e, n) => (t(n), e[n]) });
function A(e) {
  var t, n, c;
  const u =
      null !==
        (t =
          null == e ||
          null === (n = e.overrides) ||
          void 0 === n ||
          null === (n = n.useMutation) ||
          void 0 === n
            ? void 0
            : n.onSuccess) && void 0 !== t
        ? t
        : (e) => e.originalFn(),
    d = null !== (c = null == e ? void 0 : e.context) && void 0 !== c ? c : p,
    f = o.createTRPCClient;
  function h() {
    const e = s.useContext(d);
    if (!e)
      throw new Error(
        "Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?",
      );
    return e;
  }
  function m(e, t) {
    var n;
    const { queryClient: r, ssrState: o } = h();
    return o &&
      "mounted" !== o &&
      "error" ===
        (null === (n = r.getQueryCache().find({ queryKey: e })) || void 0 === n
          ? void 0
          : n.state.status)
      ? (0, C.default)({ retryOnMount: !1 }, t)
      : t;
  }
  const g = { data: void 0, error: null, status: "idle" },
    v = { data: void 0, error: null, status: "connecting" };
  return {
    Provider: (e) => {
      var t;
      const { abortOnUnmount: n = !1, queryClient: r, ssrContext: i } = e,
        [a, c] = s.useState(null !== (t = e.ssrState) && void 0 !== t && t),
        u =
          e.client instanceof o.TRPCUntypedClient
            ? e.client
            : (0, o.getUntypedClient)(e.client),
        p = s.useMemo(() => k({ client: u, queryClient: r }), [u, r]),
        f = s.useMemo(
          () =>
            (0, C.default)(
              {
                abortOnUnmount: n,
                queryClient: r,
                client: u,
                ssrContext: null != i ? i : null,
                ssrState: a,
              },
              p,
            ),
          [n, u, p, r, i, a],
        );
      return (
        s.useEffect(() => {
          c((e) => !!e && "mounted");
        }, []),
        (0, l.jsx)(d.Provider, { value: f, children: e.children })
      );
    },
    createClient: f,
    useContext: h,
    useUtils: h,
    useQuery: function (t, n, o) {
      var s, l, c, u, d;
      const p = h(),
        {
          abortOnUnmount: f,
          client: g,
          ssrState: y,
          queryClient: v,
          prefetchQuery: S,
        } = p,
        _ = r.getQueryKeyInternal(t, n, "query"),
        x = v.getQueryDefaults(_),
        T = n === i.skipToken;
      "undefined" != typeof window ||
        "prepass" !== y ||
        !1 ===
          (null == o || null === (s = o.trpc) || void 0 === s
            ? void 0
            : s.ssr) ||
        !1 ===
          (null !== (l = null == o ? void 0 : o.enabled) && void 0 !== l
            ? l
            : null == x
              ? void 0
              : x.enabled) ||
        T ||
        v.getQueryCache().find({ queryKey: _ }) ||
        S(_, o);
      const k = m(_, (0, C.default)((0, C.default)({}, x), o)),
        I =
          null !==
            (c =
              null !==
                (u =
                  null == o || null === (d = o.trpc) || void 0 === d
                    ? void 0
                    : d.abortOnUnmount) && void 0 !== u
                ? u
                : null == e
                  ? void 0
                  : e.abortOnUnmount) && void 0 !== c
            ? c
            : f,
        A = (0, i.useQuery)(
          (0, C.default)(
            (0, C.default)({}, k),
            {},
            {
              queryKey: _,
              queryFn: T
                ? n
                : async (e) => {
                    const t = (0, C.default)(
                        (0, C.default)({}, k),
                        {},
                        {
                          trpc: (0, C.default)(
                            (0, C.default)({}, null == k ? void 0 : k.trpc),
                            I ? { signal: e.signal } : { signal: null },
                          ),
                        },
                      ),
                      n = await g.query(...b(_, t));
                    return (0, a.isAsyncIterable)(n) ? E(n, v, _) : n;
                  },
            },
          ),
          v,
        );
      return (A.trpc = w({ path: t })), A;
    },
    usePrefetchQuery: function (t, n, o) {
      var a, s, l;
      const c = h(),
        u = r.getQueryKeyInternal(t, n, "query"),
        d = n === i.skipToken,
        p =
          null !==
            (a =
              null !==
                (s =
                  null == o || null === (l = o.trpc) || void 0 === l
                    ? void 0
                    : l.abortOnUnmount) && void 0 !== s
                ? s
                : null == e
                  ? void 0
                  : e.abortOnUnmount) && void 0 !== a
            ? a
            : c.abortOnUnmount;
      (0, i.usePrefetchQuery)(
        (0, C.default)(
          (0, C.default)({}, o),
          {},
          {
            queryKey: u,
            queryFn: d
              ? n
              : (e) => {
                  const t = {
                    trpc: (0, C.default)(
                      (0, C.default)({}, null == o ? void 0 : o.trpc),
                      p ? { signal: e.signal } : {},
                    ),
                  };
                  return c.client.query(...b(u, t));
                },
          },
        ),
      );
    },
    useSuspenseQuery: function (t, n, o) {
      var a, s, l;
      const c = h(),
        u = r.getQueryKeyInternal(t, n, "query"),
        d =
          null !==
            (a =
              null !==
                (s =
                  null == o || null === (l = o.trpc) || void 0 === l
                    ? void 0
                    : l.abortOnUnmount) && void 0 !== s
                ? s
                : null == e
                  ? void 0
                  : e.abortOnUnmount) && void 0 !== a
            ? a
            : c.abortOnUnmount,
        p = (0, i.useSuspenseQuery)(
          (0, C.default)(
            (0, C.default)({}, o),
            {},
            {
              queryKey: u,
              queryFn: (e) => {
                const t = (0, C.default)(
                  (0, C.default)({}, o),
                  {},
                  {
                    trpc: (0, C.default)(
                      (0, C.default)({}, null == o ? void 0 : o.trpc),
                      d ? { signal: e.signal } : { signal: null },
                    ),
                  },
                );
                return c.client.query(...b(u, t));
              },
            },
          ),
          c.queryClient,
        );
      return (p.trpc = w({ path: t })), [p.data, p];
    },
    useQueries: (e, t) => {
      const { ssrState: n, queryClient: r, prefetchQuery: o, client: a } = h(),
        s = e(y(a));
      if ("undefined" == typeof window && "prepass" === n)
        for (const e of s) {
          var l;
          const t = e;
          !1 === (null === (l = t.trpc) || void 0 === l ? void 0 : l.ssr) ||
            r.getQueryCache().find({ queryKey: t.queryKey }) ||
            o(t.queryKey, t);
        }
      return (0, i.useQueries)(
        {
          queries: s.map((e) =>
            (0, C.default)((0, C.default)({}, e), {}, { queryKey: e.queryKey }),
          ),
          combine: null == t ? void 0 : t.combine,
        },
        r,
      );
    },
    useSuspenseQueries: (e) => {
      const { queryClient: t, client: n } = h(),
        r = e(y(n)),
        o = (0, i.useSuspenseQueries)(
          {
            queries: r.map((e) =>
              (0, C.default)(
                (0, C.default)({}, e),
                {},
                { queryFn: e.queryFn, queryKey: e.queryKey },
              ),
            ),
          },
          t,
        );
      return [o.map((e) => e.data), o];
    },
    useMutation: function (e, t) {
      const { client: n, queryClient: o } = h(),
        a = r.getMutationKeyInternal(e),
        s = o.defaultMutationOptions(o.getMutationDefaults(a)),
        l = (0, i.useMutation)(
          (0, C.default)(
            (0, C.default)({}, t),
            {},
            {
              mutationKey: a,
              mutationFn: (r) => n.mutation(...b([e, { input: r }], t)),
              onSuccess(...e) {
                var n, r;
                return u({
                  originalFn: () => {
                    var n, r, o;
                    return null !==
                      (n =
                        null == t || null === (r = t.onSuccess) || void 0 === r
                          ? void 0
                          : r.call(t, ...e)) && void 0 !== n
                      ? n
                      : null == s || null === (o = s.onSuccess) || void 0 === o
                        ? void 0
                        : o.call(s, ...e);
                  },
                  queryClient: o,
                  meta:
                    null !==
                      (n =
                        null !== (r = null == t ? void 0 : t.meta) &&
                        void 0 !== r
                          ? r
                          : null == s
                            ? void 0
                            : s.meta) && void 0 !== n
                      ? n
                      : {},
                });
              },
            },
          ),
          o,
        );
      return (l.trpc = w({ path: e })), l;
    },
    useSubscription: function (e, t, n) {
      var o;
      const a =
          null !== (o = null == n ? void 0 : n.enabled) && void 0 !== o
            ? o
            : t !== i.skipToken,
        l = (0, i.hashKey)(r.getQueryKeyInternal(e, t, "any")),
        { client: c } = h(),
        u = s.useRef(n);
      s.useEffect(() => {
        u.current = n;
      });
      const [d] = s.useState(new Set([])),
        p = s.useCallback(
          (e) => {
            d.add(e);
          },
          [d],
        ),
        f = s.useRef(null),
        m = s.useCallback(
          (e) => {
            const t = b.current,
              n = (b.current = e(t));
            let r = !1;
            for (const e of d)
              if (t[e] !== n[e]) {
                r = !0;
                break;
              }
            r && _(I(n, p));
          },
          [p, d],
        ),
        y = s.useCallback(() => {
          var n;
          if ((null === (n = f.current) || void 0 === n || n.unsubscribe(), !a))
            return void m(() =>
              (0, C.default)((0, C.default)({}, g), {}, { reset: y }),
            );
          m(() => (0, C.default)((0, C.default)({}, v), {}, { reset: y }));
          const r = c.subscription(e.join("."), null != t ? t : void 0, {
            onStarted: () => {
              var e, t;
              null === (e = (t = u.current).onStarted) ||
                void 0 === e ||
                e.call(t),
                m((e) =>
                  (0, C.default)(
                    (0, C.default)({}, e),
                    {},
                    { status: "pending", error: null },
                  ),
                );
            },
            onData: (e) => {
              var t, n;
              null === (t = (n = u.current).onData) ||
                void 0 === t ||
                t.call(n, e),
                m((t) =>
                  (0, C.default)(
                    (0, C.default)({}, t),
                    {},
                    { status: "pending", data: e, error: null },
                  ),
                );
            },
            onError: (e) => {
              var t, n;
              null === (t = (n = u.current).onError) ||
                void 0 === t ||
                t.call(n, e),
                m((t) =>
                  (0, C.default)(
                    (0, C.default)({}, t),
                    {},
                    { status: "error", error: e },
                  ),
                );
            },
            onConnectionStateChange: (e) => {
              m((t) => {
                switch (e.state) {
                  case "idle":
                    return (0, C.default)(
                      (0, C.default)({}, t),
                      {},
                      {
                        status: e.state,
                        error: null,
                        data: void 0,
                      },
                    );
                  case "connecting":
                    return (0, C.default)(
                      (0, C.default)({}, t),
                      {},
                      { error: e.error, status: e.state },
                    );
                  case "pending":
                    return t;
                }
              });
            },
            onComplete: () => {
              var e, t;
              null === (e = (t = u.current).onComplete) ||
                void 0 === e ||
                e.call(t),
                m((e) =>
                  (0, C.default)(
                    (0, C.default)({}, e),
                    {},
                    { status: "idle", error: null, data: void 0 },
                  ),
                );
            },
          });
          f.current = r;
        }, [c, l, a, m]);
      s.useEffect(
        () => (
          y(),
          () => {
            var e;
            null === (e = f.current) || void 0 === e || e.unsubscribe();
          }
        ),
        [y],
      );
      const b = s.useRef(
          a
            ? (0, C.default)((0, C.default)({}, v), {}, { reset: y })
            : (0, C.default)((0, C.default)({}, g), {}, { reset: y }),
        ),
        [S, _] = s.useState(I(b.current, p));
      return S;
    },
    useInfiniteQuery: function (e, t, n) {
      var o, a, s, l, c;
      const {
          client: u,
          ssrState: d,
          prefetchInfiniteQuery: p,
          queryClient: f,
          abortOnUnmount: g,
        } = h(),
        y = r.getQueryKeyInternal(e, t, "infinite"),
        v = f.getQueryDefaults(y),
        S = t === i.skipToken;
      "undefined" != typeof window ||
        "prepass" !== d ||
        !1 ===
          (null == n || null === (o = n.trpc) || void 0 === o
            ? void 0
            : o.ssr) ||
        !1 ===
          (null !== (a = null == n ? void 0 : n.enabled) && void 0 !== a
            ? a
            : null == v
              ? void 0
              : v.enabled) ||
        S ||
        f.getQueryCache().find({ queryKey: y }) ||
        p(y, (0, C.default)((0, C.default)({}, v), n));
      const _ = m(y, (0, C.default)((0, C.default)({}, v), n)),
        x =
          null !==
            (s =
              null == n || null === (l = n.trpc) || void 0 === l
                ? void 0
                : l.abortOnUnmount) && void 0 !== s
            ? s
            : g,
        E = (0, i.useInfiniteQuery)(
          (0, C.default)(
            (0, C.default)({}, _),
            {},
            {
              initialPageParam:
                null !== (c = n.initialCursor) && void 0 !== c ? c : null,
              persister: n.persister,
              queryKey: y,
              queryFn: S
                ? t
                : (e) => {
                    var t;
                    const r = (0, C.default)(
                      (0, C.default)({}, _),
                      {},
                      {
                        trpc: (0, C.default)(
                          (0, C.default)({}, null == _ ? void 0 : _.trpc),
                          x ? { signal: e.signal } : { signal: null },
                        ),
                      },
                    );
                    return u.query(
                      ...b(y, r, {
                        pageParam:
                          null !== (t = e.pageParam) && void 0 !== t
                            ? t
                            : n.initialCursor,
                        direction: e.direction,
                      }),
                    );
                  },
            },
          ),
          f,
        );
      return (E.trpc = w({ path: e })), E;
    },
    usePrefetchInfiniteQuery: function (e, t, n) {
      var o, a, s;
      const l = h(),
        c = r.getQueryKeyInternal(e, t, "infinite"),
        u = l.queryClient.getQueryDefaults(c),
        d = t === i.skipToken,
        p = m(c, (0, C.default)((0, C.default)({}, u), n)),
        f =
          null !==
            (o =
              null == n || null === (a = n.trpc) || void 0 === a
                ? void 0
                : a.abortOnUnmount) && void 0 !== o
            ? o
            : l.abortOnUnmount;
      (0, i.usePrefetchInfiniteQuery)(
        (0, C.default)(
          (0, C.default)({}, n),
          {},
          {
            initialPageParam:
              null !== (s = n.initialCursor) && void 0 !== s ? s : null,
            queryKey: c,
            queryFn: d
              ? t
              : (e) => {
                  var t;
                  const r = (0, C.default)(
                    (0, C.default)({}, p),
                    {},
                    {
                      trpc: (0, C.default)(
                        (0, C.default)({}, null == p ? void 0 : p.trpc),
                        f ? { signal: e.signal } : {},
                      ),
                    },
                  );
                  return l.client.query(
                    ...b(c, r, {
                      pageParam:
                        null !== (t = e.pageParam) && void 0 !== t
                          ? t
                          : n.initialCursor,
                      direction: e.direction,
                    }),
                  );
                },
          },
        ),
      );
    },
    useSuspenseInfiniteQuery: function (e, t, n) {
      var o, a, s;
      const l = h(),
        c = r.getQueryKeyInternal(e, t, "infinite"),
        u = l.queryClient.getQueryDefaults(c),
        d = m(c, (0, C.default)((0, C.default)({}, u), n)),
        p =
          null !==
            (o =
              null == n || null === (a = n.trpc) || void 0 === a
                ? void 0
                : a.abortOnUnmount) && void 0 !== o
            ? o
            : l.abortOnUnmount,
        f = (0, i.useSuspenseInfiniteQuery)(
          (0, C.default)(
            (0, C.default)({}, n),
            {},
            {
              initialPageParam:
                null !== (s = n.initialCursor) && void 0 !== s ? s : null,
              queryKey: c,
              queryFn: (e) => {
                var t;
                const r = (0, C.default)(
                  (0, C.default)({}, d),
                  {},
                  {
                    trpc: (0, C.default)(
                      (0, C.default)({}, null == d ? void 0 : d.trpc),
                      p ? { signal: e.signal } : {},
                    ),
                  },
                );
                return l.client.query(
                  ...b(c, r, {
                    pageParam:
                      null !== (t = e.pageParam) && void 0 !== t
                        ? t
                        : n.initialCursor,
                    direction: e.direction,
                  }),
                );
              },
            },
          ),
          l.queryClient,
        );
      return (f.trpc = w({ path: e })), [f.data, f];
    },
  };
}
Object.defineProperty(t, "createQueryUtilsProxy", {
  enumerable: !0,
  get: function () {
    return m;
  },
}),
  Object.defineProperty(t, "createReactDecoration", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "createReactQueryUtils", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(t, "createRootHooks", {
    enumerable: !0,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(t, "createUtilityFunctions", {
    enumerable: !0,
    get: function () {
      return k;
    },
  });

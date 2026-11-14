// vendor/module-25038.js — webpack module 25038
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
})(l, { QueryClient: () => m }),
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
var c = n(26036 /* vendor/module-26036 */),
  u = n(57715 /* vendor/module-57715 */),
  d = n(81038 /* vendor/module-81038 */),
  p = n(35652 /* vendor/module-35652 */),
  f = n(71433 /* vendor/module-71433 */),
  h = n(46783 /* vendor/module-46783 */),
  m = class {
    #ee;
    #x;
    #Q;
    #te;
    #ne;
    #re;
    #oe;
    #ie;
    constructor(e = {}) {
      (this.#ee = e.queryCache || new u.QueryCache()),
        (this.#x = e.mutationCache || new d.MutationCache()),
        (this.#Q = e.defaultOptions || {}),
        (this.#te = new Map()),
        (this.#ne = new Map()),
        (this.#re = 0);
    }
    mount() {
      this.#re++,
        1 === this.#re &&
          ((this.#oe = p.focusManager.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#ee.onFocus());
          })),
          (this.#ie = f.onlineManager.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#ee.onOnline());
          })));
    }
    unmount() {
      this.#re--,
        0 === this.#re &&
          (this.#oe?.(),
          (this.#oe = void 0),
          this.#ie?.(),
          (this.#ie = void 0));
    }
    isFetching(e) {
      return this.#ee.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#x.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#ee.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const t = this.defaultQueryOptions(e),
        n = this.#ee.build(this, t),
        r = n.state.data;
      return void 0 === r
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime((0, c.resolveStaleTime)(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#ee
        .findAll(e)
        .map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      const r = this.defaultQueryOptions({ queryKey: e }),
        o = this.#ee.get(r.queryHash),
        i = o?.state.data,
        a = (0, c.functionalUpdate)(t, i);
      if (void 0 !== a)
        return this.#ee.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return h.notifyManager.batch(() =>
        this.#ee
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#ee.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#ee;
      h.notifyManager.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      const n = this.#ee;
      return h.notifyManager.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      const n = { revert: !0, ...t },
        r = h.notifyManager.batch(() =>
          this.#ee.findAll(e).map((e) => e.cancel(n)),
        );
      return Promise.all(r).then(c.noop).catch(c.noop);
    }
    invalidateQueries(e, t = {}) {
      return h.notifyManager.batch(
        () => (
          this.#ee.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          "none" === e?.refetchType
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = h.notifyManager.batch(() =>
          this.#ee
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(c.noop)),
                "paused" === e.state.fetchStatus ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(c.noop);
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      void 0 === t.retry && (t.retry = !1);
      const n = this.#ee.build(this, t);
      return n.isStaleByTime((0, c.resolveStaleTime)(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(c.noop).catch(c.noop);
    }
    fetchInfiniteQuery(e) {
      return (e._type = "infinite"), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(c.noop).catch(c.noop);
    }
    ensureInfiniteQueryData(e) {
      return (e._type = "infinite"), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return f.onlineManager.isOnline()
        ? this.#x.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#ee;
    }
    getMutationCache() {
      return this.#x;
    }
    getDefaultOptions() {
      return this.#Q;
    }
    setDefaultOptions(e) {
      this.#Q = e;
    }
    setQueryDefaults(e, t) {
      this.#te.set((0, c.hashKey)(e), {
        queryKey: e,
        defaultOptions: t,
      });
    }
    getQueryDefaults(e) {
      const t = [...this.#te.values()],
        n = {};
      return (
        t.forEach((t) => {
          (0, c.partialMatchKey)(e, t.queryKey) &&
            Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#ne.set((0, c.hashKey)(e), {
        mutationKey: e,
        defaultOptions: t,
      });
    }
    getMutationDefaults(e) {
      const t = [...this.#ne.values()],
        n = {};
      return (
        t.forEach((t) => {
          (0, c.partialMatchKey)(e, t.mutationKey) &&
            Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = {
        ...this.#Q.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        t.queryHash ||
          (t.queryHash = (0, c.hashQueryKeyByOptions)(t.queryKey, t)),
        void 0 === t.refetchOnReconnect &&
          (t.refetchOnReconnect = "always" !== t.networkMode),
        void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === c.skipToken && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#Q.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      this.#ee.clear(), this.#x.clear();
    }
  };

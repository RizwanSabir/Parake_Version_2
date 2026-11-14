// vendor/module-51523.js — webpack module 51523
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
})(l, { Query: () => h, fetchState: () => m }),
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
  u = n(46783 /* vendor/module-46783 */),
  d = n(77664 /* vendor/module-77664 */),
  p = n(99360 /* vendor/module-99360 */),
  f = n(6205 /* vendor/module-6205 */),
  h = class extends p.Removable {
    #$;
    #Y;
    #K;
    #Z;
    #S;
    #w;
    #Q;
    #J;
    constructor(e) {
      super(),
        (this.#J = !1),
        (this.#Q = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#S = e.client),
        (this.#Z = this.#S.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#Y = y(this.options)),
        (this.state = e.state ?? this.#Y),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get queryType() {
      return this.#$;
    }
    get promise() {
      return this.#w?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#Q, ...e }),
        e?._type && (this.#$ = e._type),
        this.updateGcTime(this.options.gcTime),
        this.state && void 0 === this.state.data)
      ) {
        const e = y(this.options);
        void 0 !== e.data &&
          (this.setState(g(e.data, e.dataUpdatedAt)), (this.#Y = e));
      }
    }
    optionalRemove() {
      this.observers.length ||
        "idle" !== this.state.fetchStatus ||
        this.#Z.remove(this);
    }
    setData(e, t) {
      const n = (0, c.replaceData)(this.state.data, e, this.options);
      return (
        this.#E({
          data: n,
          type: "success",
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        n
      );
    }
    setState(e) {
      this.#E({ type: "setState", state: e });
    }
    cancel(e) {
      const t = this.#w?.promise;
      return (
        this.#w?.cancel(e), t ? t.then(c.noop).catch(c.noop) : Promise.resolve()
      );
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    get resetState() {
      return this.#Y;
    }
    reset() {
      this.destroy(), this.setState(this.resetState);
    }
    isActive() {
      return this.observers.some(
        (e) => !1 !== (0, c.resolveQueryBoolean)(e.options.enabled, this),
      );
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === c.skipToken || !this.isFetched();
    }
    isFetched() {
      return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
      return (
        this.getObserversCount() > 0 &&
        this.observers.some(
          (e) =>
            "static" === (0, c.resolveStaleTime)(e.options.staleTime, this),
        )
      );
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : void 0 === this.state.data || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return (
        void 0 === this.state.data ||
        ("static" !== e &&
          (!!this.state.isInvalidated ||
            !(0, c.timeUntilStale)(this.state.dataUpdatedAt, e)))
      );
    }
    onFocus() {
      const e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
      e?.refetch({ cancelRefetch: !1 }), this.#w?.continue();
    }
    onOnline() {
      const e = this.observers.find((e) => e.shouldFetchOnReconnect());
      e?.refetch({ cancelRefetch: !1 }), this.#w?.continue();
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#Z.notify({
          type: "observerAdded",
          query: this,
          observer: e,
        }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#w &&
            (this.#J || this.#X()
              ? this.#w.cancel({ revert: !0 })
              : this.#w.cancelRetry()),
          this.scheduleGc()),
        this.#Z.notify({
          type: "observerRemoved",
          query: this,
          observer: e,
        }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    #X() {
      return (
        "paused" === this.state.fetchStatus && "pending" === this.state.status
      );
    }
    invalidate() {
      this.state.isInvalidated || this.#E({ type: "invalidate" });
    }
    async fetch(e, t) {
      if ("idle" !== this.state.fetchStatus && "rejected" !== this.#w?.status())
        if (void 0 !== this.state.data && t?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#w) return this.#w.continueRetry(), this.#w.promise;
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        const e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      const n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => ((this.#J = !0), n.signal),
          });
        },
        o = () => {
          const e = (0, c.ensureQueryFn)(this.options, t),
            n = (() => {
              const e = {
                client: this.#S,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return r(e), e;
            })();
          return (
            (this.#J = !1),
            this.options.persister ? this.options.persister(e, n, this) : e(n)
          );
        },
        i = (() => {
          const e = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#S,
            state: this.state,
            fetchFn: o,
          };
          return r(e), e;
        })(),
        a =
          "infinite" === this.#$
            ? (0, f.infiniteQueryBehavior)(this.options.pages)
            : this.options.behavior;
      a?.onFetch(i, this),
        (this.#K = this.state),
        ("idle" !== this.state.fetchStatus &&
          this.state.fetchMeta === i.fetchOptions?.meta) ||
          this.#E({ type: "fetch", meta: i.fetchOptions?.meta }),
        (this.#w = (0, d.createRetryer)({
          initialPromise: t?.initialPromise,
          fn: i.fetchFn,
          onCancel: (e) => {
            e instanceof d.CancelledError &&
              e.revert &&
              this.setState({ ...this.#K, fetchStatus: "idle" }),
              n.abort();
          },
          onFail: (e, t) => {
            this.#E({ type: "failed", failureCount: e, error: t });
          },
          onPause: () => {
            this.#E({ type: "pause" });
          },
          onContinue: () => {
            this.#E({ type: "continue" });
          },
          retry: i.options.retry,
          retryDelay: i.options.retryDelay,
          networkMode: i.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const e = await this.#w.start();
        if (void 0 === e)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(e),
          this.#Z.config.onSuccess?.(e, this),
          this.#Z.config.onSettled?.(e, this.state.error, this),
          e
        );
      } catch (e) {
        if (e instanceof d.CancelledError) {
          if (e.silent) return this.#w.promise;
          if (e.revert) {
            if (void 0 === this.state.data) throw e;
            return this.state.data;
          }
        }
        throw (
          (this.#E({ type: "error", error: e }),
          this.#Z.config.onError?.(e, this),
          this.#Z.config.onSettled?.(this.state.data, e, this),
          e)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #E(e) {
      (this.state = ((t) => {
        switch (e.type) {
          case "failed":
            return {
              ...t,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...t, fetchStatus: "paused" };
          case "continue":
            return { ...t, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...t,
              ...m(t.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            const n = {
              ...t,
              ...g(e.data, e.dataUpdatedAt),
              dataUpdateCount: t.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#K = e.manual ? n : void 0), n;
          case "error":
            const r = e.error;
            return {
              ...t,
              error: r,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...t, isInvalidated: !0 };
          case "setState":
            return { ...t, ...e.state };
        }
      })(this.state)),
        u.notifyManager.batch(() => {
          this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#Z.notify({
              query: this,
              type: "updated",
              action: e,
            });
        });
    }
  };
function m(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: (0, d.canFetch)(t.networkMode) ? "fetching" : "paused",
    ...(void 0 === e && { error: null, status: "pending" }),
  };
}
function g(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function y(e) {
  const t =
      "function" == typeof e.initialData ? e.initialData() : e.initialData,
    n = void 0 !== t,
    r = n
      ? "function" == typeof e.initialDataUpdatedAt
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}

// vendor/module-50033.js — webpack module 50033
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
})(l, { QueryObserver: () => y }),
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
var c = n(35652 /* vendor/module-35652 */),
  u = n(89425 /* vendor/module-89425 */),
  d = n(46783 /* vendor/module-46783 */),
  p = n(51523 /* vendor/module-51523 */),
  f = n(67650 /* vendor/module-67650 */),
  h = n(94200 /* vendor/module-94200 */),
  m = n(26036 /* vendor/module-26036 */),
  g = n(97167 /* vendor/module-97167 */),
  y = class extends f.Subscribable {
    constructor(e, t) {
      super(),
        (this.options = t),
        (this.#S = e),
        (this.#ae = null),
        (this.#se = (0, h.pendingThenable)()),
        this.bindMethods(),
        this.setOptions(t);
    }
    #S;
    #le = void 0;
    #ce = void 0;
    #I = void 0;
    #ue;
    #de;
    #se;
    #ae;
    #pe;
    #fe;
    #he;
    #me;
    #ge;
    #ye;
    #ve = new Set();
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      1 === this.listeners.size &&
        (this.#le.addObserver(this),
        v(this.#le, this.options) ? this.#be() : this.updateResult(),
        this.#Se());
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return b(this.#le, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return b(this.#le, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      (this.listeners = new Set()),
        this.#_e(),
        this.#xe(),
        this.#le.removeObserver(this);
    }
    setOptions(e) {
      const t = this.options,
        n = this.#le;
      if (
        ((this.options = this.#S.defaultQueryOptions(e)),
        void 0 !== this.options.enabled &&
          "boolean" != typeof this.options.enabled &&
          "function" != typeof this.options.enabled &&
          "boolean" !=
            typeof (0, m.resolveQueryBoolean)(this.options.enabled, this.#le))
      )
        throw new Error(
          "Expected enabled to be a boolean or a callback that returns a boolean",
        );
      this.#we(),
        this.#le.setOptions(this.options),
        t._defaulted &&
          !(0, m.shallowEqualObjects)(this.options, t) &&
          this.#S.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#le,
            observer: this,
          });
      const r = this.hasListeners();
      r && S(this.#le, n, this.options, t) && this.#be(),
        this.updateResult(),
        !r ||
          (this.#le === n &&
            (0, m.resolveQueryBoolean)(this.options.enabled, this.#le) ===
              (0, m.resolveQueryBoolean)(t.enabled, this.#le) &&
            (0, m.resolveStaleTime)(this.options.staleTime, this.#le) ===
              (0, m.resolveStaleTime)(t.staleTime, this.#le)) ||
          this.#Ee();
      const o = this.#Te();
      !r ||
        (this.#le === n &&
          (0, m.resolveQueryBoolean)(this.options.enabled, this.#le) ===
            (0, m.resolveQueryBoolean)(t.enabled, this.#le) &&
          o === this.#ye) ||
        this.#ke(o);
    }
    getOptimisticResult(e) {
      const t = this.#S.getQueryCache().build(this.#S, e),
        n = this.createResult(t, e);
      return (
        (r = this),
        (o = n),
        !(0, m.shallowEqualObjects)(r.getCurrentResult(), o) &&
          ((this.#I = n),
          (this.#de = this.options),
          (this.#ue = this.#le.state)),
        n
      );
      var r, o;
    }
    getCurrentResult() {
      return this.#I;
    }
    trackResult(e, t) {
      return new Proxy(e, {
        get: (e, n) => (
          this.trackProp(n),
          t?.(n),
          "promise" === n &&
            (this.trackProp("data"),
            this.options.experimental_prefetchInRender ||
              "pending" !== this.#se.status ||
              this.#se.reject(
                new Error(
                  "experimental_prefetchInRender feature flag is not enabled",
                ),
              )),
          Reflect.get(e, n)
        ),
      });
    }
    trackProp(e) {
      this.#ve.add(e);
    }
    getCurrentQuery() {
      return this.#le;
    }
    refetch({ ...e } = {}) {
      return this.fetch({ ...e });
    }
    fetchOptimistic(e) {
      const t = this.#S.defaultQueryOptions(e),
        n = this.#S.getQueryCache().build(this.#S, t);
      return n.fetch().then(() => this.createResult(n, t));
    }
    fetch(e) {
      return this.#be({
        ...e,
        cancelRefetch: e.cancelRefetch ?? !0,
      }).then(() => (this.updateResult(), this.#I));
    }
    #be(e) {
      this.#we();
      let t = this.#le.fetch(this.options, e);
      return e?.throwOnError || (t = t.catch(m.noop)), t;
    }
    #Ee() {
      this.#_e();
      const e = (0, m.resolveStaleTime)(this.options.staleTime, this.#le);
      if (
        u.environmentManager.isServer() ||
        this.#I.isStale ||
        !(0, m.isValidTimeout)(e)
      )
        return;
      const t = (0, m.timeUntilStale)(this.#I.dataUpdatedAt, e) + 1;
      this.#me = g.timeoutManager.setTimeout(() => {
        this.#I.isStale || this.updateResult();
      }, t);
    }
    #Te() {
      return (
        ("function" == typeof this.options.refetchInterval
          ? this.options.refetchInterval(this.#le)
          : this.options.refetchInterval) ?? !1
      );
    }
    #ke(e) {
      this.#xe(),
        (this.#ye = e),
        !u.environmentManager.isServer() &&
          !1 !== (0, m.resolveQueryBoolean)(this.options.enabled, this.#le) &&
          (0, m.isValidTimeout)(this.#ye) &&
          0 !== this.#ye &&
          (this.#ge = g.timeoutManager.setInterval(() => {
            (this.options.refetchIntervalInBackground ||
              c.focusManager.isFocused()) &&
              this.#be();
          }, this.#ye));
    }
    #Se() {
      this.#Ee(), this.#ke(this.#Te());
    }
    #_e() {
      void 0 !== this.#me &&
        (g.timeoutManager.clearTimeout(this.#me), (this.#me = void 0));
    }
    #xe() {
      void 0 !== this.#ge &&
        (g.timeoutManager.clearInterval(this.#ge), (this.#ge = void 0));
    }
    createResult(e, t) {
      const n = this.#le,
        r = this.options,
        o = this.#I,
        i = this.#ue,
        a = this.#de,
        s = e !== n ? e.state : this.#ce,
        { state: l } = e;
      let c,
        u = { ...l },
        d = !1;
      if (t._optimisticResults) {
        const o = this.hasListeners(),
          i = !o && v(e, t),
          a = o && S(e, n, t, r);
        (i || a) && (u = { ...u, ...(0, p.fetchState)(l.data, e.options) }),
          "isRestoring" === t._optimisticResults && (u.fetchStatus = "idle");
      }
      let { error: f, errorUpdatedAt: g, status: y } = u;
      c = u.data;
      let b = !1;
      if (void 0 !== t.placeholderData && void 0 === c && "pending" === y) {
        let e;
        o?.isPlaceholderData && t.placeholderData === a?.placeholderData
          ? ((e = o.data), (b = !0))
          : (e =
              "function" == typeof t.placeholderData
                ? t.placeholderData(this.#he?.state.data, this.#he)
                : t.placeholderData),
          void 0 !== e &&
            ((y = "success"),
            (c = (0, m.replaceData)(o?.data, e, t)),
            (d = !0));
      }
      if (t.select && void 0 !== c && !b)
        if (o && c === i?.data && t.select === this.#pe) c = this.#fe;
        else
          try {
            (this.#pe = t.select),
              (c = t.select(c)),
              (c = (0, m.replaceData)(o?.data, c, t)),
              (this.#fe = c),
              (this.#ae = null);
          } catch (e) {
            this.#ae = e;
          }
      this.#ae &&
        ((f = this.#ae), (c = this.#fe), (g = Date.now()), (y = "error"));
      const x = "fetching" === u.fetchStatus,
        w = "pending" === y,
        E = "error" === y,
        T = w && x,
        k = void 0 !== c,
        C = {
          status: y,
          fetchStatus: u.fetchStatus,
          isPending: w,
          isSuccess: "success" === y,
          isError: E,
          isInitialLoading: T,
          isLoading: T,
          data: c,
          dataUpdatedAt: u.dataUpdatedAt,
          error: f,
          errorUpdatedAt: g,
          failureCount: u.fetchFailureCount,
          failureReason: u.fetchFailureReason,
          errorUpdateCount: u.errorUpdateCount,
          isFetched: e.isFetched(),
          isFetchedAfterMount:
            u.dataUpdateCount > s.dataUpdateCount ||
            u.errorUpdateCount > s.errorUpdateCount,
          isFetching: x,
          isRefetching: x && !w,
          isLoadingError: E && !k,
          isPaused: "paused" === u.fetchStatus,
          isPlaceholderData: d,
          isRefetchError: E && k,
          isStale: _(e, t),
          refetch: this.refetch,
          promise: this.#se,
          isEnabled: !1 !== (0, m.resolveQueryBoolean)(t.enabled, e),
        };
      if (this.options.experimental_prefetchInRender) {
        const t = void 0 !== C.data,
          r = "error" === C.status && !t,
          o = (e) => {
            r ? e.reject(C.error) : t && e.resolve(C.data);
          },
          i = () => {
            const e = (this.#se = C.promise = (0, h.pendingThenable)());
            o(e);
          },
          a = this.#se;
        switch (a.status) {
          case "pending":
            e.queryHash === n.queryHash && o(a);
            break;
          case "fulfilled":
            (r || C.data !== a.value) && i();
            break;
          case "rejected":
            (r && C.error === a.reason) || i();
        }
      }
      return C;
    }
    updateResult() {
      const e = this.#I,
        t = this.createResult(this.#le, this.options);
      (this.#ue = this.#le.state),
        (this.#de = this.options),
        void 0 !== this.#ue.data && (this.#he = this.#le),
        (0, m.shallowEqualObjects)(t, e) ||
          ((this.#I = t),
          this.#M({
            listeners: (() => {
              if (!e) return !0;
              const { notifyOnChangeProps: t } = this.options,
                n = "function" == typeof t ? t() : t;
              if ("all" === n || (!n && !this.#ve.size)) return !0;
              const r = new Set(n ?? this.#ve);
              return (
                this.options.throwOnError && r.add("error"),
                Object.keys(this.#I).some((t) => {
                  const n = t;
                  return this.#I[n] !== e[n] && r.has(n);
                })
              );
            })(),
          }));
    }
    #we() {
      const e = this.#S.getQueryCache().build(this.#S, this.options);
      if (e === this.#le) return;
      const t = this.#le;
      (this.#le = e),
        (this.#ce = e.state),
        this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
    }
    onQueryUpdate() {
      this.updateResult(), this.hasListeners() && this.#Se();
    }
    #M(e) {
      d.notifyManager.batch(() => {
        e.listeners &&
          this.listeners.forEach((e) => {
            e(this.#I);
          }),
          this.#S.getQueryCache().notify({
            query: this.#le,
            type: "observerResultsUpdated",
          });
      });
    }
  };
function v(e, t) {
  return (
    (function (e, t) {
      return (
        !1 !== (0, m.resolveQueryBoolean)(t.enabled, e) &&
        void 0 === e.state.data &&
        !(
          "error" === e.state.status &&
          !1 === (0, m.resolveQueryBoolean)(t.retryOnMount, e)
        )
      );
    })(e, t) ||
    (void 0 !== e.state.data && b(e, t, t.refetchOnMount))
  );
}
function b(e, t, n) {
  if (
    !1 !== (0, m.resolveQueryBoolean)(t.enabled, e) &&
    "static" !== (0, m.resolveStaleTime)(t.staleTime, e)
  ) {
    const r = "function" == typeof n ? n(e) : n;
    return "always" === r || (!1 !== r && _(e, t));
  }
  return !1;
}
function S(e, t, n, r) {
  return (
    (e !== t || !1 === (0, m.resolveQueryBoolean)(r.enabled, e)) &&
    (!n.suspense || "error" !== e.state.status) &&
    _(e, n)
  );
}
function _(e, t) {
  return (
    !1 !== (0, m.resolveQueryBoolean)(t.enabled, e) &&
    e.isStaleByTime((0, m.resolveStaleTime)(t.staleTime, e))
  );
}

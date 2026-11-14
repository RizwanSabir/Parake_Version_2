// vendor/module-62989.js — webpack module 62989
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
})(l, { InfiniteQueryObserver: () => d }),
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
var c = n(50033 /* vendor/module-50033 */),
  u = n(6205 /* vendor/module-6205 */),
  d = class extends c.QueryObserver {
    constructor(e, t) {
      super(e, t);
    }
    bindMethods() {
      super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
    }
    setOptions(e) {
      (e._type = "infinite"), super.setOptions(e);
    }
    getOptimisticResult(e) {
      return (e._type = "infinite"), super.getOptimisticResult(e);
    }
    fetchNextPage(e) {
      return this.fetch({
        ...e,
        meta: { fetchMore: { direction: "forward" } },
      });
    }
    fetchPreviousPage(e) {
      return this.fetch({
        ...e,
        meta: { fetchMore: { direction: "backward" } },
      });
    }
    createResult(e, t) {
      const { state: n } = e,
        r = super.createResult(e, t),
        { isFetching: o, isRefetching: i, isError: a, isRefetchError: s } = r,
        l = n.fetchMeta?.fetchMore?.direction,
        c = a && "forward" === l,
        d = o && "forward" === l,
        p = a && "backward" === l,
        f = o && "backward" === l;
      return {
        ...r,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: (0, u.hasNextPage)(t, n.data),
        hasPreviousPage: (0, u.hasPreviousPage)(t, n.data),
        isFetchNextPageError: c,
        isFetchingNextPage: d,
        isFetchPreviousPageError: p,
        isFetchingPreviousPage: f,
        isRefetchError: s && !c && !p,
        isRefetching: i && !d && !f,
      };
    }
  };
